<script setup lang="ts">
// Final sprite (spec §8, §10): manual pixel cleanup on a separate override
// layer (reset / reapply), gray/color toggle, export 32x32 PNG + shadow PNG
// + asset/sketch/form/project JSON, place in scene.
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { activeAsset, store, touch } from "../core/store"
import { composeRgba, shadowRgba } from "../core/postfx"
import { getMaterial, grayHex } from "../core/materials"
import { downloadJson, downloadRgbaPng } from "../core/files"
import { GRID, sketchToJson, formToJson, wrapAsset, wrapProject } from "../core/schemas"
import { cellFromEvent } from "../core/pixelCanvas"
import { runRender } from "../core/pipeline"
import { getScene } from "../three/sceneHost"
import { hexToRgb } from "../core/palette"
import PreviewPane from "./PreviewPane.vue"

const host = ref<HTMLDivElement | null>(null)
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
let needsDraw = true
let raf = 0

const asset = computed(() => activeAsset())
const error = ref<string | null>(null)
const grayMode = ref(false)
const editLevel = ref<number | null>(null) // null = not editing; -1 = erase

const view = { x: 0, y: 0, zoom: 14 }
const fs = getScene()

function levelColors(): string[] {
  const a = asset.value
  if (!a) return []
  const out: string[] = []
  for (let i = 0; i < a.grayLevels; i++) {
    out.push(grayMode.value ? grayHex(i, a.grayLevels) : (
      a.rampOverrides?.[a.materialId]
        ? a.rampOverrides[a.materialId][i]
        : getMaterial(a.materialId).ramp[i] ?? "#000000"
    ))
  }
  return out
}

function draw() {
  needsDraw = false
  const a = asset.value
  const w = canvas.width, h = canvas.height
  ctx.fillStyle = "#0d0e10"
  ctx.fillRect(0, 0, w, h)
  if (!a?.levels) return
  const rgba = composeRgba(Int16Array.from(a.levels), {
    nLevels: a.grayLevels,
    material: grayMode.value ? null : getMaterial(a.materialId),
    shadowAlpha: a.shadowAlpha ? Uint8Array.from(a.shadowAlpha) : null,
    background: "transparent",
    ramp: a.rampOverrides?.[a.materialId],
  })
  const s = GRID * view.zoom
  // transparency checkerboard
  for (let y = 0; y < GRID; y++)
    for (let x = 0; x < GRID; x++) {
      ctx.fillStyle = (x + y) % 2 ? "#1a1c20" : "#15171b"
      ctx.fillRect(view.x + x * view.zoom, view.y + y * view.zoom, view.zoom, view.zoom)
    }
  const src = document.createElement("canvas")
  src.width = GRID; src.height = GRID
  src.getContext("2d")!.putImageData(new ImageData(rgba, GRID, GRID), 0, 0)
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(src, view.x, view.y, s, s)
  ctx.strokeStyle = "rgba(255,255,255,0.07)"
  for (let i = 0; i <= GRID; i++) {
    ctx.beginPath(); ctx.moveTo(view.x + i * view.zoom, view.y); ctx.lineTo(view.x + i * view.zoom, view.y + s); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(view.x, view.y + i * view.zoom); ctx.lineTo(view.x + s, view.y + i * view.zoom); ctx.stroke()
  }
  // overridden pixels get a cyan corner mark
  if (a.overrides) {
    ctx.fillStyle = "#5fcde4"
    for (let i = 0; i < 1024; i++) {
      if (a.overrides[i] != null) {
        const x = i % GRID, y = Math.floor(i / GRID)
        ctx.fillRect(view.x + x * view.zoom, view.y + y * view.zoom, 3, 3)
      }
    }
  }
}

function loop() {
  if (needsDraw) draw()
  raf = requestAnimationFrame(loop)
}

// ---- pixel editing ----
const painting = ref(false)

function editCell(e: PointerEvent) {
  const a = asset.value
  if (!a || editLevel.value === null) return
  const cell = cellFromEvent(e, canvas, view)
  if (!cell) return
  const i = cell.y * GRID + cell.x
  if (!a.overrides) a.overrides = new Array(1024).fill(null)
  a.overrides[i] = editLevel.value
  a.levels![i] = editLevel.value
  needsDraw = true
}

function onDown(e: PointerEvent) {
  if (editLevel.value === null) return
  canvas.setPointerCapture(e.pointerId)
  painting.value = true
  editCell(e)
}
function onMove(e: PointerEvent) {
  if (painting.value) editCell(e)
}
function onUp(e: PointerEvent) {
  if (painting.value) {
    painting.value = false
    if (asset.value) touch(asset.value)
  }
}

onMounted(() => {
  canvas = document.createElement("canvas")
  host.value!.appendChild(canvas)
  ctx = canvas.getContext("2d")!
  const fit = () => {
    canvas.width = host.value!.clientWidth * devicePixelRatio
    canvas.height = host.value!.clientHeight * devicePixelRatio
    view.zoom = Math.min(canvas.width, canvas.height) / (GRID + 4)
    view.x = (canvas.width - GRID * view.zoom) / 2
    view.y = (canvas.height - GRID * view.zoom) / 2
    needsDraw = true
  }
  fit()
  window.addEventListener("resize", fit)
  ;(canvas as any)._fit = fit
  canvas.addEventListener("pointerdown", onDown)
  canvas.addEventListener("pointermove", onMove)
  canvas.addEventListener("pointerup", onUp)
  canvas.addEventListener("pointercancel", onUp)
  loop()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener("resize", (canvas as any)._fit)
})

// ---- actions ----
function composed(): Uint8ClampedArray {
  const a = asset.value!
  return composeRgba(Int16Array.from(a.levels!), {
    nLevels: a.grayLevels,
    material: grayMode.value ? null : getMaterial(a.materialId),
    shadowAlpha: a.shadowAlpha ? Uint8Array.from(a.shadowAlpha) : null,
    background: "transparent",
    ramp: a.rampOverrides?.[a.materialId],
  })
}

function slug(): string {
  return asset.value!.name.replace(/\s+/g, "-")
}

function exportPng() {
  downloadRgbaPng(composed(), `${slug()}-32.png`)
}

function exportShadow() {
  const a = asset.value
  if (!a?.shadowAlpha) return
  downloadRgbaPng(shadowRgba(Uint8Array.from(a.shadowAlpha)), `${slug()}-shadow.png`)
}

function exportAsset() {
  const a = asset.value!
  downloadJson(wrapAsset({
    ...a,
    sketch: a.sketch ? sketchToJson(a.sketch) : null,
    form: a.form ? formToJson(a.form) : null,
  }), `${slug()}-asset.json`)
}

function exportSketch() {
  const a = asset.value
  if (a?.sketch) downloadJson(sketchToJson(a.sketch), `${slug()}-sketch.json`)
}

function exportForm() {
  const a = asset.value
  if (a?.form) downloadJson(formToJson(a.form), `${slug()}-form.json`)
}

function exportProject() {
  const p = store.project
  downloadJson(wrapProject({
    ...p,
    assets: Object.fromEntries(Object.entries(p.assets).map(([k, a]) => [k, {
      ...a,
      sketch: a.sketch ? sketchToJson(a.sketch) : null,
      form: a.form ? formToJson(a.form) : null,
    }])),
  }), "pixel-lab-project.json")
}

function resetOverrides() {
  const a = asset.value
  if (!a) return
  a.overrides = null
  touch(a)
  needsDraw = true
}

function reapply() {
  // re-render; the override layer is re-applied on top (spec §8)
  const a = asset.value
  if (!a) return
  const err = runRender(a, fs)
  if (err) { error.value = err; return }
  touch(a)
  needsDraw = true
}

function placeInScene() {
  const a = asset.value
  if (!a) return
  store.placingAssetId = a.id
  store.mode = "scene"
}
</script>

<template>
  <div class="workspace">
    <div ref="host" class="canvas-host"></div>
    <PreviewPane />
    <div class="tool-row" style="position: absolute; top: 0; left: 0; right: 0">
      <button :class="{ on: grayMode }" @click="grayMode = !grayMode; needsDraw = true">Gray</button>
      <button
        v-for="(c, i) in levelColors()" :key="i" class="swatch"
        :class="{ on: editLevel === i }" :style="{ background: c }"
        :title="`level ${i}`" @click="editLevel = editLevel === i ? null : i"
      ></button>
      <button :class="{ on: editLevel === -1 }" @click="editLevel = editLevel === -1 ? null : -1">Erase</button>
      <button @click="resetOverrides" :disabled="!asset?.overrides">Reset edits</button>
      <button @click="reapply">Re-render</button>
    </div>
    <div class="bottom-bar" style="position: absolute; bottom: 0; left: 0; right: 0">
      <button @click="exportPng">PNG</button>
      <button @click="exportShadow" :disabled="!asset?.shadowAlpha">Shadow PNG</button>
      <button @click="exportAsset">Asset</button>
      <button @click="exportSketch">Sketch</button>
      <button @click="exportForm">Form</button>
      <button @click="exportProject">Project</button>
      <span class="spacer"></span>
      <button class="primary" @click="placeInScene">Place in scene →</button>
    </div>
    <div v-if="editLevel !== null" class="notice">Editing overrides — tap/drag pixels</div>
    <div v-if="error" class="notice err">{{ error }}</div>
  </div>
</template>
