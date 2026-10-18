<script setup lang="ts">
// Tile scene mode (spec §3): grid ground of 32x32 tiles, place sprites,
// drag/select/duplicate/remove, pan + pinch zoom, grid toggle.
// The scene exists to judge sprite readability, scale and consistency.
import { onBeforeUnmount, onMounted, ref } from "vue"
import {
  assetLight, createAsset, deleteAsset, duplicatePlacement, placeAsset, removePlacement, store,
} from "../core/store"
import { getScene } from "../three/sceneHost"
import { runRender } from "../core/pipeline"
import { defaultCamera } from "../core/types"
import { composeRgba } from "../core/postfx"
import { getMaterial } from "../core/materials"
import { GRID } from "../core/schemas"
import { hexToRgb } from "../core/palette"
import PreviewPane from "./PreviewPane.vue"

const host = ref<HTMLDivElement | null>(null)
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
let needsDraw = true
let raf = 0

// ---- tile textures (procedural DB32 patterns, drawn once) ----
const tileCache = new Map<string, HTMLCanvasElement>()

function hash(i: number): number {
  return (Math.imul(i, 2654435761) >>> 0) / 4294967296
}

function tileCanvas(kind: string): HTMLCanvasElement {
  let c = tileCache.get(kind)
  if (c) return c
  c = document.createElement("canvas")
  c.width = GRID; c.height = GRID
  const g = c.getContext("2d")!
  const img = g.createImageData(GRID, GRID)
  const palettes: Record<string, string[]> = {
    grass: ["#6abe30", "#6abe30", "#37946e", "#4b692f", "#6abe30"],
    dirt: ["#8f563b", "#8f563b", "#663931", "#d9a066", "#8f563b"],
    stone: ["#696a6a", "#847e87", "#595652", "#696a6a", "#9badb7"],
  }
  const p = palettes[kind] ?? palettes.grass
  for (let i = 0; i < GRID * GRID; i++) {
    const [r, gg, b] = hexToRgb(p[Math.floor(hash(i * 7 + kind.length) * p.length)])
    img.data[i * 4] = r; img.data[i * 4 + 1] = gg; img.data[i * 4 + 2] = b; img.data[i * 4 + 3] = 255
  }
  g.putImageData(img, 0, 0)
  tileCache.set(kind, c)
  return c
}

const spriteCache = new Map<string, HTMLCanvasElement>()

function spriteCanvas(assetId: string): HTMLCanvasElement | null {
  const a = store.project.assets[assetId]
  if (!a?.levels) return null
  const key = `${assetId}:${a.updatedAt}`
  let c = spriteCache.get(key)
  if (c) return c
  const rgba = composeRgba(Int16Array.from(a.levels), {
    nLevels: a.grayLevels,
    material: getMaterial(a.materialId),
    shadowAlpha: a.shadowAlpha ? Uint8Array.from(a.shadowAlpha) : null,
    background: "transparent",
    ramp: a.rampOverrides?.[a.materialId],
  })
  c = document.createElement("canvas")
  c.width = GRID; c.height = GRID
  c.getContext("2d")!.putImageData(new ImageData(rgba, GRID, GRID), 0, 0)
  if (spriteCache.size > 200) spriteCache.clear()
  spriteCache.set(key, c)
  return c
}

function draw() {
  needsDraw = false
  const scene = store.project.scene
  const w = canvas.width, h = canvas.height
  ctx.fillStyle = "#0d0e10"
  ctx.fillRect(0, 0, w, h)
  const z = scene.view.zoom
  const ts = GRID * z
  for (let y = 0; y < scene.rows; y++) {
    for (let x = 0; x < scene.cols; x++) {
      ctx.drawImage(
        tileCanvas(scene.tiles[y * scene.cols + x] ?? "grass"),
        scene.view.x + x * ts, scene.view.y + y * ts, ts, ts,
      )
    }
  }
  if (scene.showGrid) {
    ctx.strokeStyle = "rgba(255,255,255,0.08)"
    ctx.lineWidth = 1
    for (let x = 0; x <= scene.cols; x++) {
      ctx.beginPath(); ctx.moveTo(scene.view.x + x * ts, scene.view.y)
      ctx.lineTo(scene.view.x + x * ts, scene.view.y + scene.rows * ts); ctx.stroke()
    }
    for (let y = 0; y <= scene.rows; y++) {
      ctx.beginPath(); ctx.moveTo(scene.view.x, scene.view.y + y * ts)
      ctx.lineTo(scene.view.x + scene.cols * ts, scene.view.y + y * ts); ctx.stroke()
    }
  }
  for (const p of scene.placements) {
    const s = spriteCanvas(p.assetId)
    if (!s) continue
    ctx.drawImage(s, scene.view.x + p.tx * ts, scene.view.y + p.ty * ts, ts, ts)
    if (store.selectedPlacementId === p.id) {
      ctx.strokeStyle = "#5fcde4"
      ctx.lineWidth = 2
      ctx.strokeRect(scene.view.x + p.tx * ts + 1, scene.view.y + p.ty * ts + 1, ts - 2, ts - 2)
    }
  }
}

function loop() {
  if (needsDraw) draw()
  raf = requestAnimationFrame(loop)
}

// ---- gestures ----
const pointers = new Map<number, { x: number; y: number }>()
let dragPlacementId: string | null = null
let panning = false
let moved = false
let pinchDist = 0
let pinchZoom = 1
let pinchMid = { x: 0, y: 0 }

function evPos(e: PointerEvent) {
  const r = canvas.getBoundingClientRect()
  return { x: (e.clientX - r.left) * (canvas.width / r.width), y: (e.clientY - r.top) * (canvas.height / r.height) }
}

function tileAt(px: number, py: number): { x: number; y: number } | null {
  const scene = store.project.scene
  const tx = Math.floor((px - scene.view.x) / (GRID * scene.view.zoom))
  const ty = Math.floor((py - scene.view.y) / (GRID * scene.view.zoom))
  if (tx < 0 || tx >= scene.cols || ty < 0 || ty >= scene.rows) return null
  return { x: tx, y: ty }
}

function placementAt(px: number, py: number) {
  const scene = store.project.scene
  const t = tileAt(px, py)
  if (!t) return null
  return scene.placements.find((p) => p.tx === t.x && p.ty === t.y) ?? null
}

function onDown(e: PointerEvent) {
  canvas.setPointerCapture(e.pointerId)
  const pos = evPos(e)
  pointers.set(e.pointerId, pos)
  moved = false
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()]
    pinchDist = Math.hypot(a.x - b.x, a.y - b.y)
    pinchZoom = store.project.scene.view.zoom
    pinchMid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
    dragPlacementId = null; panning = false
    return
  }
  const hit = placementAt(pos.x, pos.y)
  if (hit) {
    dragPlacementId = hit.id
    store.selectedPlacementId = hit.id
  } else {
    panning = true
  }
  needsDraw = true
}

function onMove(e: PointerEvent) {
  if (!pointers.has(e.pointerId)) return
  const pos = evPos(e)
  const prev = pointers.get(e.pointerId)!
  pointers.set(e.pointerId, pos)
  const scene = store.project.scene
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()]
    const dist = Math.hypot(a.x - b.x, a.y - b.y)
    if (pinchDist > 0) {
      const nz = Math.min(6, Math.max(0.4, pinchZoom * (dist / pinchDist)))
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
      // keep the pinch midpoint stable
      scene.view.x = mid.x - ((mid.x - scene.view.x) * nz) / scene.view.zoom
      scene.view.y = mid.y - ((mid.y - scene.view.y) * nz) / scene.view.zoom
      scene.view.zoom = nz
    }
    needsDraw = true
    return
  }
  const dx = pos.x - prev.x, dy = pos.y - prev.y
  if (Math.abs(dx) + Math.abs(dy) > 1) moved = true
  if (dragPlacementId) {
    const t = tileAt(pos.x, pos.y)
    if (t) {
      const p = scene.placements.find((q) => q.id === dragPlacementId)
      if (p && (p.tx !== t.x || p.ty !== t.y)) { p.tx = t.x; p.ty = t.y }
    }
  } else if (panning) {
    scene.view.x += dx; scene.view.y += dy
  }
  needsDraw = true
}

function onUp(e: PointerEvent) {
  const pos = evPos(e)
  const scene = store.project.scene
  if (pointers.size === 1 && !moved) {
    // tap: place armed asset, or select/deselect
    if (store.placingAssetId) {
      const t = tileAt(pos.x, pos.y)
      if (t) {
        placeAsset(store.placingAssetId, t.x, t.y)
        store.placingAssetId = null
      }
    } else {
      const hit = placementAt(pos.x, pos.y)
      store.selectedPlacementId = hit?.id ?? null
    }
  }
  pointers.delete(e.pointerId)
  if (pointers.size < 2) pinchDist = 0
  if (pointers.size === 0) { dragPlacementId = null; panning = false }
  needsDraw = true
}

onMounted(() => {
  canvas = document.createElement("canvas")
  host.value!.appendChild(canvas)
  ctx = canvas.getContext("2d")!
  const fit = () => {
    canvas.width = host.value!.clientWidth * devicePixelRatio
    canvas.height = host.value!.clientHeight * devicePixelRatio
    needsDraw = true
  }
  fit()
  window.addEventListener("resize", fit)
  ;(canvas as any)._fit = fit
  canvas.addEventListener("pointerdown", onDown)
  canvas.addEventListener("pointermove", onMove)
  canvas.addEventListener("pointerup", onUp)
  canvas.addEventListener("pointercancel", onUp)
  // initial fit: center the scene
  const scene = store.project.scene
  if (scene.view.x === 0 && scene.view.y === 0) {
    const w = canvas.width, h = canvas.height
    scene.view.zoom = Math.min(w / (scene.cols * GRID), h / (scene.rows * GRID)) * 0.9
    scene.view.x = (w - scene.cols * GRID * scene.view.zoom) / 2
    scene.view.y = (h - scene.rows * GRID * scene.view.zoom) / 2
  }
  loop()
  // render any placed-but-never-rendered assets (e.g. the starter rock)
  // through the real pipeline so scene sprites are actual output
  const fs = getScene()
  for (const p of store.project.scene.placements) {
    const a = store.project.assets[p.assetId]
    if (a && !a.levels && a.form?.meshes.length) {
      fs.setForm(a.form)
      fs.setGroundY(a.form.groundAnchor.y)
      fs.setCamera(a.camera ?? defaultCamera())
      fs.setLight(assetLight(a))
      runRender(a, fs)
    }
  }
  needsDraw = true
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener("resize", (canvas as any)._fit)
})

function createNew() {
  const a = createAsset()
  store.mode = "sketch"
  void a
}

function armPlace(id: string) {
  store.placingAssetId = store.placingAssetId === id ? null : id
}
</script>

<template>
  <div class="workspace">
    <div ref="host" class="canvas-host"></div>
    <PreviewPane />
    <div class="tool-row" style="position: absolute; bottom: 0; left: 0; right: 0; border-top: 1px solid var(--line); border-bottom: none">
      <button class="primary" @click="createNew">+ Create New</button>
      <button :class="{ on: store.project.scene.showGrid }" @click="store.project.scene.showGrid = !store.project.scene.showGrid; needsDraw = true">Grid</button>
      <button :disabled="!store.selectedPlacementId" @click="duplicatePlacement(store.selectedPlacementId!); needsDraw = true">Duplicate</button>
      <button class="danger" :disabled="!store.selectedPlacementId" @click="removePlacement(store.selectedPlacementId!); needsDraw = true">Remove</button>
      <span style="flex:1"></span>
      <button
        v-for="id in store.project.order"
        :key="id"
        class="chip"
        :class="{ on: store.placingAssetId === id }"
        @click="armPlace(id)"
      >{{ store.project.assets[id]?.name }}</button>
    </div>
    <div v-if="store.placingAssetId" class="notice">Tap a tile to place the sprite</div>
  </div>
</template>
