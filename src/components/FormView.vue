<script setup lang="ts">
// Form preview (spec §6): rotatable 3D geometry. One-finger drag rotates,
// pinch zooms. Preset views, Reset View, Set Final View (locks the
// orthographic camera used for sprite rendering). Object orientation is
// independent of camera orientation (Camera/Object drag toggle).
// Export/import form JSON — the agent contract (spec §5).
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { activeAsset, generateForm, store, touch } from "../core/store"
import { getScene } from "../three/sceneHost"
import { groundYWorld } from "../core/rockgen"
import { downloadJson, pickJsonFile } from "../core/files"
import { formToJson, validateForm } from "../core/schemas"
import { defaultCamera, defaultLight } from "../core/types"
import PreviewPane from "./PreviewPane.vue"

const host = ref<HTMLDivElement | null>(null)
const error = ref<string | null>(null)
const rotateObject = ref(false)
const asset = computed(() => activeAsset())
const fs = getScene()

function sync() {
  const a = asset.value
  fs.setForm(a?.form ?? null)
  fs.setGroundY(a?.form ? a.form.groundAnchor.y : groundYWorld(a?.sketch?.groundAnchor.y ?? 31))
  fs.setCamera(a?.camera ?? defaultCamera())
  fs.setLight(a?.light ?? store.project.sharedLight)
}

// ---- gestures ----
const pointers = new Map<number, { x: number; y: number }>()
let pinchDist = 0
let pinchScale = 1

function onDown(e: PointerEvent) {
  const el = fs["renderer"].domElement as HTMLCanvasElement
  el.setPointerCapture(e.pointerId)
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()]
    pinchDist = Math.hypot(a.x - b.x, a.y - b.y)
    pinchScale = fs.getCamera().orthoScale
  }
}

function onMove(e: PointerEvent) {
  if (!pointers.has(e.pointerId)) return
  const prev = pointers.get(e.pointerId)!
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  const cam = fs.getCamera()
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()]
    const dist = Math.hypot(a.x - b.x, a.y - b.y)
    if (pinchDist > 0) cam.orthoScale = Math.min(4, Math.max(0.25, pinchScale * (pinchDist / dist)))
    fs.setCamera(cam)
    return
  }
  const dx = e.clientX - prev.x, dy = e.clientY - prev.y
  if (rotateObject.value) {
    cam.objYawDeg = (cam.objYawDeg + dx * 0.5) % 360
    cam.objPitchDeg = Math.max(-89, Math.min(89, cam.objPitchDeg - dy * 0.5))
  } else {
    cam.yawDeg = (cam.yawDeg + dx * 0.5) % 360
    cam.pitchDeg = Math.max(-85, Math.min(85, cam.pitchDeg + dy * 0.5))
  }
  fs.setCamera(cam)
}

function onUp(e: PointerEvent) {
  pointers.delete(e.pointerId)
  if (pointers.size < 2) pinchDist = 0
  const a = asset.value
  if (a) { a.camera = fs.getCamera(); touch(a) }
}

onMounted(() => {
  fs.mount(host.value!)
  sync()
  const el = fs["renderer"].domElement as HTMLCanvasElement
  el.addEventListener("pointerdown", onDown)
  el.addEventListener("pointermove", onMove)
  el.addEventListener("pointerup", onUp)
  el.addEventListener("pointercancel", onUp)
})

onBeforeUnmount(() => {
  const el = fs["renderer"].domElement as HTMLCanvasElement
  el.removeEventListener("pointerdown", onDown)
  el.removeEventListener("pointermove", onMove)
  el.removeEventListener("pointerup", onUp)
  el.removeEventListener("pointercancel", onUp)
  fs.unmount()
})

function preset(kind: "front" | "iso" | "top" | "left") {
  const cam = { ...defaultCamera(), ...fs.getCamera() }
  if (kind === "front") { cam.yawDeg = 0; cam.pitchDeg = 4 }
  if (kind === "iso") { cam.yawDeg = -35; cam.pitchDeg = 28 }
  if (kind === "top") { cam.yawDeg = 0; cam.pitchDeg = 85 }
  if (kind === "left") { cam.yawDeg = -90; cam.pitchDeg = 8 }
  fs.setCamera(cam)
}

function resetView() {
  fs.setCamera(defaultCamera())
}

function regenerate() {
  error.value = null
  const a = asset.value
  if (!a) return
  const err = generateForm(a)
  if (err) { error.value = err; return }
  fs.setForm(a.form)
  fs.setGroundY(a.form!.groundAnchor.y)
}

function exportForm() {
  const a = asset.value
  if (!a?.form) return
  downloadJson(formToJson(a.form), `${a.name.replace(/\s+/g, "-")}-form.json`)
}

async function importForm() {
  error.value = null
  const obj = await pickJsonFile()
  if (obj == null) return
  const { form, errors } = validateForm(obj)
  if (!form) { error.value = errors.join("\n"); return }
  const a = asset.value!
  a.form = form
  a.formSource = "import"
  touch(a)
  fs.setForm(form)
  fs.setGroundY(form.groundAnchor.y)
}

function setFinalView() {
  const a = asset.value
  if (!a) return
  a.camera = { ...fs.getCamera(), locked: true }
  touch(a)
  store.mode = "light"
}
</script>

<template>
  <div class="workspace">
    <div ref="host" class="canvas-host"></div>
    <PreviewPane />
    <div class="tool-row" style="position: absolute; top: 0; left: 0; right: 0">
      <button @click="preset('front')">Front</button>
      <button @click="preset('iso')">Iso</button>
      <button @click="preset('top')">Top</button>
      <button @click="preset('left')">Left</button>
      <button @click="resetView">Reset</button>
      <button :class="{ on: rotateObject }" @click="rotateObject = !rotateObject">
        {{ rotateObject ? "Object" : "Camera" }}
      </button>
    </div>
    <div class="bottom-bar" style="position: absolute; bottom: 0; left: 0; right: 0">
      <button @click="regenerate">Generate</button>
      <button @click="importForm">Import form</button>
      <button :disabled="!asset?.form" @click="exportForm">Export form</button>
      <span class="spacer"></span>
      <button class="primary" :disabled="!asset?.form" @click="setFinalView">Set Final View →</button>
    </div>
    <div v-if="error" class="notice err">{{ error }}</div>
  </div>
</template>
