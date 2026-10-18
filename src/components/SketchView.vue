<script setup lang="ts">
// Sketch mode (spec §4): 32x32 grayscale authoring. Tools: pencil, eraser,
// filled shape (flood fill), line, silhouette brush, height hints,
// edge/plane hints, undo/redo, zoom/pan, ground anchor, live output preview.
// Export/import sketch JSON — consumable by an external agent.
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { activeAsset, generateForm, store, touch } from "../core/store"
import { downloadJson, pickJsonFile } from "../core/files"
import { GRID, SketchData, recomputeBounds, sketchToJson, validateSketch } from "../core/schemas"
import { hexToRgb } from "../core/palette"
import PreviewPane from "./PreviewPane.vue"

const host = ref<HTMLDivElement | null>(null)
let canvas: HTMLCanvasElement
let ctx: CanvasRenderingContext2D
let needsDraw = true
let raf = 0

const asset = computed(() => activeAsset())
const sheetOpen = ref(false)
const error = ref<string | null>(null)
const heightValue = ref(200)

type Tool = "pencil" | "eraser" | "fill" | "line" | "silhouette" | "height" | "edge" | "anchor"
const tool = ref<Tool>("pencil")
const tools: { id: Tool; label: string }[] = [
  { id: "pencil", label: "Pencil" },
  { id: "eraser", label: "Eraser" },
  { id: "fill", label: "Fill" },
  { id: "line", label: "Line" },
  { id: "silhouette", label: "Silhouette" },
  { id: "height", label: "Height" },
  { id: "edge", label: "Edge" },
  { id: "anchor", label: "Anchor" },
]

// view transform (grid zoom/pan)
const view = { x: 40, y: 40, zoom: 12 }

// ---- undo/redo ----
interface Snap { sil: number[]; hh: number[] | null; eh: number[] | null }
const undoStack: Snap[] = []
const redoStack: Snap[] = []

function snap(): Snap {
  const s = asset.value!.sketch!
  return {
    sil: [...s.silhouette],
    hh: s.heightHints ? [...s.heightHints] : null,
    eh: s.edgeHints ? [...s.edgeHints] : null,
  }
}
function pushUndo() {
  undoStack.push(snap())
  if (undoStack.length > 60) undoStack.shift()
  redoStack.length = 0
}
function undo() {
  if (!undoStack.length) return
  redoStack.push(snap())
  applySnap(undoStack.pop()!)
}
function redo() {
  if (!redoStack.length) return
  undoStack.push(snap())
  applySnap(redoStack.pop()!)
}
function applySnap(s: Snap) {
  const sk = asset.value!.sketch!
  sk.silhouette = [...s.sil]
  sk.heightHints = s.hh ? [...s.hh] : null
  sk.edgeHints = s.eh ? [...s.eh] : null
  recomputeBounds(sk)
  touch(asset.value!)
  needsDraw = true
}

// ---- tools ----
function ensureHints() {
  const sk = asset.value!.sketch!
  if (!sk.heightHints) sk.heightHints = new Array(1024).fill(0)
  if (!sk.edgeHints) sk.edgeHints = new Array(1024).fill(0)
}

function paintCell(cx: number, cy: number) {
  const sk = asset.value!.sketch!
  const i = cy * GRID + cx
  switch (tool.value) {
    case "pencil":
      sk.silhouette[i] = 1
      break
    case "eraser":
      sk.silhouette[i] = 0
      break
    case "silhouette":
      for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++) {
          const nx = cx + dx, ny = cy + dy
          if (nx >= 0 && nx < GRID && ny >= 0 && ny < GRID) sk.silhouette[ny * GRID + nx] = 1
        }
      break
    case "height":
      ensureHints(); sk.heightHints![i] = heightValue.value
      break
    case "edge":
      ensureHints(); sk.edgeHints![i] = 1
      break
  }
}

function floodFill(cx: number, cy: number) {
  const sk = asset.value!.sketch!
  const target = sk.silhouette[cy * GRID + cx]
  const want = target ? 0 : 1
  const q = [[cx, cy]]
  const seen = new Set<number>()
  while (q.length) {
    const [x, y] = q.pop()!
    if (x < 0 || x >= GRID || y < 0 || y >= GRID) continue
    const i = y * GRID + x
    if (seen.has(i) || sk.silhouette[i] !== target) continue
    seen.add(i)
    sk.silhouette[i] = want
    q.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1])
  }
}

let lineStart: { x: number; y: number } | null = null

function drawLineTo(cx: number, cy: number) {
  const sk = asset.value!.sketch!
  if (!lineStart) { sk.silhouette[cy * GRID + cx] = 1; return }
  let { x: x0, y: y0 } = lineStart
  const dx = Math.abs(cx - x0), dy = Math.abs(cy - y0)
  const sx = x0 < cx ? 1 : -1, sy = y0 < cy ? 1 : -1
  let err = dx - dy
  for (;;) {
    sk.silhouette[y0 * GRID + x0] = 1
    if (x0 === cx && y0 === cy) break
    const e2 = 2 * err
    if (e2 > -dy) { err -= dy; x0 += sx }
    if (e2 < dx) { err += dx; y0 += sy }
  }
  lineStart = null
}

// ---- gestures ----
const pointers = new Map<number, { x: number; y: number }>()
let drawing = false
let pinchDist = 0
let pinchZoom = 1

function cellFrom(e: PointerEvent): { x: number; y: number } | null {
  const r = canvas.getBoundingClientRect()
  const sx = (e.clientX - r.left) * (canvas.width / r.width)
  const sy = (e.clientY - r.top) * (canvas.height / r.height)
  const cx = Math.floor((sx - view.x) / view.zoom)
  const cy = Math.floor((sy - view.y) / view.zoom)
  if (cx < 0 || cx >= GRID || cy < 0 || cy >= GRID) return null
  return { x: cx, y: cy }
}

function onDown(e: PointerEvent) {
  canvas.setPointerCapture(e.pointerId)
  const pos = { x: e.clientX, y: e.clientY }
  pointers.set(e.pointerId, pos)
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()]
    pinchDist = Math.hypot(a.x - b.x, a.y - b.y)
    pinchZoom = view.zoom
    drawing = false
    return
  }
  const cell = cellFrom(e)
  if (!cell) return
  if (tool.value === "anchor") {
    asset.value!.sketch!.groundAnchor = { x: cell.x, y: cell.y }
    touch(asset.value!); needsDraw = true
    return
  }
  pushUndo()
  if (tool.value === "fill") {
    floodFill(cell.x, cell.y)
    recomputeBounds(asset.value!.sketch!)
    touch(asset.value!); needsDraw = true
    return
  }
  if (tool.value === "line") {
    lineStart = cell
    drawing = true
    return
  }
  drawing = true
  paintCell(cell.x, cell.y)
  needsDraw = true
}

function onMove(e: PointerEvent) {
  if (!pointers.has(e.pointerId)) return
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()]
    const dist = Math.hypot(a.x - b.x, a.y - b.y)
    if (pinchDist > 0) view.zoom = Math.min(40, Math.max(2, pinchZoom * (dist / pinchDist)))
    needsDraw = true
    return
  }
  if (!drawing) return
  const cell = cellFrom(e)
  if (!cell) return
  if (tool.value === "line") {
    lineStart = cell
    needsDraw = true
    return
  }
  paintCell(cell.x, cell.y)
  needsDraw = true
}

function onUp(e: PointerEvent) {
  const cell = cellFrom(e)
  if (drawing && tool.value === "line" && cell && lineStart) drawLineTo(cell.x, cell.y)
  pointers.delete(e.pointerId)
  if (pointers.size < 2) pinchDist = 0
  if (pointers.size === 0 && drawing) {
    drawing = false
    recomputeBounds(asset.value!.sketch!)
    touch(asset.value!)
  }
  needsDraw = true
}

// ---- draw ----
function draw() {
  needsDraw = false
  const a = asset.value
  const w = canvas.width, h = canvas.height
  ctx.fillStyle = "#0d0e10"
  ctx.fillRect(0, 0, w, h)
  if (!a?.sketch) return
  const sk = a.sketch
  const s = GRID * view.zoom
  // checkerboard transparency backdrop
  for (let y = 0; y < GRID; y++)
    for (let x = 0; x < GRID; x++) {
      ctx.fillStyle = (x + y) % 2 ? "#1a1c20" : "#15171b"
      ctx.fillRect(view.x + x * view.zoom, view.y + y * view.zoom, view.zoom, view.zoom)
    }
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      const i = y * GRID + x
      const px = view.x + x * view.zoom, py = view.y + y * view.zoom
      if (sk.silhouette[i]) {
        const [r, g, b] = hexToRgb("#9badb7")
        ctx.fillStyle = `rgb(${r},${g},${b})`
        ctx.fillRect(px, py, view.zoom, view.zoom)
      }
      if (sk.heightHints?.[i]) {
        ctx.fillStyle = `rgba(251,242,54,${sk.heightHints[i] / 510})`
        ctx.fillRect(px, py, view.zoom, view.zoom)
      }
      if (sk.edgeHints?.[i]) {
        ctx.strokeStyle = "#5fcde4"
        ctx.lineWidth = 2
        ctx.strokeRect(px + 1, py + 1, view.zoom - 2, view.zoom - 2)
      }
    }
  }
  // grid
  ctx.strokeStyle = "rgba(255,255,255,0.07)"
  ctx.lineWidth = 1
  for (let i = 0; i <= GRID; i++) {
    ctx.beginPath(); ctx.moveTo(view.x + i * view.zoom, view.y); ctx.lineTo(view.x + i * view.zoom, view.y + s); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(view.x, view.y + i * view.zoom); ctx.lineTo(view.x + s, view.y + i * view.zoom); ctx.stroke()
  }
  // bounds
  if (sk.bounds) {
    ctx.strokeStyle = "#fbf236"
    ctx.setLineDash([4, 3])
    ctx.strokeRect(view.x + sk.bounds.x * view.zoom, view.y + sk.bounds.y * view.zoom, sk.bounds.w * view.zoom, sk.bounds.h * view.zoom)
    ctx.setLineDash([])
  }
  // ground contact indicator: line + marker at anchor
  const ga = sk.groundAnchor
  ctx.strokeStyle = "#6abe30"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(view.x, view.y + (ga.y + 1) * view.zoom)
  ctx.lineTo(view.x + s, view.y + (ga.y + 1) * view.zoom)
  ctx.stroke()
  ctx.fillStyle = "#6abe30"
  ctx.fillRect(view.x + ga.x * view.zoom - 3, view.y + (ga.y + 1) * view.zoom - 3, 6, 6)
}

function loop() {
  if (needsDraw) draw()
  raf = requestAnimationFrame(loop)
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
function exportSketch() {
  const a = asset.value
  if (!a?.sketch) return
  downloadJson(sketchToJson(a.sketch), `${a.name.replace(/\s+/g, "-")}-sketch.json`)
}

async function importSketch() {
  error.value = null
  const obj = await pickJsonFile()
  if (obj == null) return
  const { sketch, errors } = validateSketch(obj)
  if (!sketch) {
    error.value = errors.join("\n")
    return
  }
  asset.value!.sketch = sketch
  touch(asset.value!)
  needsDraw = true
}

function toForm() {
  const a = asset.value!
  if (!a.form) {
    const err = generateForm(a)
    if (err) { error.value = err; return }
  }
  store.mode = "form"
}
</script>

<template>
  <div class="workspace">
    <div ref="host" class="canvas-host"></div>
    <PreviewPane />
    <div class="tool-row" style="position: absolute; top: 0; left: 0; right: 0">
      <button v-for="t in tools" :key="t.id" :class="{ on: tool === t.id }" @click="tool = t.id">{{ t.label }}</button>
      <button @click="undo">↩</button>
      <button @click="redo">↪</button>
    </div>
    <div class="bottom-bar" style="position: absolute; bottom: 0; left: 0; right: 0">
      <button @click="exportSketch">Export sketch</button>
      <button @click="importSketch">Import</button>
      <button :class="{ on: sheetOpen }" @click="sheetOpen = !sheetOpen">Settings</button>
      <span class="spacer"></span>
      <button class="primary" @click="toForm">Generate 3D Form →</button>
    </div>
    <div v-if="error" class="notice err">{{ error }}</div>
    <div v-if="sheetOpen" class="sheet">
      <div class="sheet-handle" @click="sheetOpen = false">Sketch settings — tap to close</div>
      <div class="sheet-body">
        <div class="ctl-row">
          <label>Object type</label>
          <input type="text" v-model="asset!.sketch!.objectType" @input="touch(asset!)" />
        </div>
        <div class="ctl-row">
          <label>Depth hint <span class="val">{{ asset!.sketch!.depthHint.toFixed(2) }}</span></label>
          <input type="range" min="0.1" max="1" step="0.05" v-model.number="asset!.sketch!.depthHint" @input="touch(asset!)" />
        </div>
        <div class="ctl-row">
          <label>Height hint value <span class="val">{{ heightValue }}</span></label>
          <input type="range" min="32" max="255" step="8" v-model.number="heightValue" />
        </div>
        <div class="hint" v-if="asset!.sketch!.bounds">
          Bounds: {{ asset!.sketch!.bounds.w }}x{{ asset!.sketch!.bounds.h }} at
          ({{ asset!.sketch!.bounds.x }},{{ asset!.sketch!.bounds.y }}) ·
          Anchor: ({{ asset!.sketch!.groundAnchor.x }},{{ asset!.sketch!.groundAnchor.y }})
        </div>
      </div>
    </div>
  </div>
</template>
