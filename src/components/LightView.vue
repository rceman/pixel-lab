<script setup lang="ts">
// Lighting (spec §7): one directional light + gizmo + ground projection
// guide. Controls: azimuth, elevation, intensity, ambient, shadow
// enable/strength/softness, edge-highlight mode/strength/width/threshold.
// Shared preset is the default; per-asset overrides allowed.
import { computed, onBeforeUnmount, onMounted, ref } from "vue"
import { activeAsset, assetLight, store, touch } from "../core/store"
import { getScene } from "../three/sceneHost"
import { groundYWorld } from "../core/rockgen"
import { runRender } from "../core/pipeline"
import { defaultCamera, defaultEdge, EdgeMode, LightSettings } from "../core/types"
import PreviewPane from "./PreviewPane.vue"

const host = ref<HTMLDivElement | null>(null)
const error = ref<string | null>(null)
const asset = computed(() => activeAsset())
const fs = getScene()

const light = computed<LightSettings>(() => {
  const a = asset.value
  return a ? assetLight(a) : store.project.sharedLight
})

const edge = computed(() => asset.value?.edge ?? defaultEdge())
const useOverride = computed({
  get: () => !!asset.value?.light,
  set: (v: boolean) => {
    const a = asset.value
    if (!a) return
    a.light = v ? { ...store.project.sharedLight } : null
    touch(a)
    fs.setLight(assetLight(a))
  },
})

function set<K extends keyof LightSettings>(key: K, v: LightSettings[K]) {
  const a = asset.value
  if (!a) return
  const target = a.light ?? store.project.sharedLight
  target[key] = v
  touch(a)
  fs.setLight(target)
}

function setEdge<K extends keyof ReturnType<typeof defaultEdge>>(key: K, v: ReturnType<typeof defaultEdge>[K]) {
  const a = asset.value
  if (!a) return
  const e = a.edge ?? { ...defaultEdge() }
  e[key] = v
  a.edge = e
  touch(a)
}

const edgeModes: { id: EdgeMode; label: string }[] = [
  { id: "disabled", label: "Disabled" },
  { id: "light-facing", label: "Light-facing" },
  { id: "hard", label: "Hard edge" },
  { id: "rim", label: "Rim accent" },
  { id: "specular", label: "Specular" },
]

// drag to re-check lighting angles (spec allows inspecting while lighting)
const pointers = new Map<number, { x: number; y: number }>()
function onDown(e: PointerEvent) {
  const el = fs["renderer"].domElement as HTMLCanvasElement
  el.setPointerCapture(e.pointerId)
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
}
function onMove(e: PointerEvent) {
  if (!pointers.has(e.pointerId) || pointers.size !== 1) return
  const prev = pointers.get(e.pointerId)!
  pointers.set(e.pointerId, { x: e.clientX, y: e.clientY })
  const cam = fs.getCamera()
  cam.yawDeg = (cam.yawDeg + (e.clientX - prev.x) * 0.5) % 360
  cam.pitchDeg = Math.max(-85, Math.min(85, cam.pitchDeg + (e.clientY - prev.y) * 0.5))
  fs.setCamera(cam)
}
function onUp(e: PointerEvent) {
  pointers.delete(e.pointerId)
  const a = asset.value
  if (a) a.camera = fs.getCamera()
}

onMounted(() => {
  fs.mount(host.value!)
  const a = asset.value
  fs.setForm(a?.form ?? null)
  fs.setGroundY(a?.form ? a.form.groundAnchor.y : groundYWorld(31))
  fs.setCamera(a?.camera ?? defaultCamera())
  fs.setLight(light.value)
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

function render() {
  error.value = null
  const a = asset.value
  if (!a) return
  const err = runRender(a, fs)
  if (err) { error.value = err; return }
  store.mode = "material"
}
</script>

<template>
  <div class="workspace">
    <div ref="host" class="canvas-host"></div>
    <PreviewPane />
    <div class="sheet" style="position: absolute; bottom: 64px">
      <div class="sheet-body" style="max-height: 42vh">
        <div class="ctl-row">
          <label>
            <input type="checkbox" :checked="useOverride" @change="useOverride = ($event.target as HTMLInputElement).checked" />
            Asset-specific override <span class="hint">(off = shared scene preset)</span>
          </label>
        </div>
        <div class="ctl-grid">
          <div class="ctl-row">
            <label>Azimuth <span class="val">{{ light.azimuthDeg }}°</span></label>
            <input type="range" min="-180" max="180" step="5" :value="light.azimuthDeg" @input="set('azimuthDeg', +($event.target as HTMLInputElement).value)" />
          </div>
          <div class="ctl-row">
            <label>Elevation <span class="val">{{ light.elevationDeg }}°</span></label>
            <input type="range" min="5" max="85" step="5" :value="light.elevationDeg" @input="set('elevationDeg', +($event.target as HTMLInputElement).value)" />
          </div>
          <div class="ctl-row">
            <label>Intensity <span class="val">{{ light.intensity.toFixed(2) }}</span></label>
            <input type="range" min="0" max="2" step="0.05" :value="light.intensity" @input="set('intensity', +($event.target as HTMLInputElement).value)" />
          </div>
          <div class="ctl-row">
            <label>Ambient <span class="val">{{ light.ambient.toFixed(2) }}</span></label>
            <input type="range" min="0" max="1" step="0.05" :value="light.ambient" @input="set('ambient', +($event.target as HTMLInputElement).value)" />
          </div>
          <div class="ctl-row">
            <label>Shadow <span class="val">{{ light.shadowEnabled ? "on" : "off" }}</span></label>
            <input type="checkbox" :checked="light.shadowEnabled" @change="set('shadowEnabled', ($event.target as HTMLInputElement).checked)" />
          </div>
          <div class="ctl-row">
            <label>Shadow strength <span class="val">{{ light.shadowStrength.toFixed(2) }}</span></label>
            <input type="range" min="0" max="1" step="0.05" :value="light.shadowStrength" @input="set('shadowStrength', +($event.target as HTMLInputElement).value)" />
          </div>
          <div class="ctl-row">
            <label>Shadow softness <span class="val">{{ light.shadowSoftness.toFixed(2) }}</span></label>
            <input type="range" min="0" max="1" step="0.05" :value="light.shadowSoftness" @input="set('shadowSoftness', +($event.target as HTMLInputElement).value)" />
          </div>
        </div>
        <div class="ctl-row">
          <label>Edge highlight</label>
          <div class="chip-list">
            <button v-for="m in edgeModes" :key="m.id" class="chip" :class="{ on: edge.mode === m.id }" @click="setEdge('mode', m.id)">{{ m.label }}</button>
          </div>
        </div>
        <div class="ctl-grid" v-if="edge.mode !== 'disabled'">
          <div class="ctl-row">
            <label>Edge strength <span class="val">{{ edge.strength.toFixed(2) }}</span></label>
            <input type="range" min="0" max="1" step="0.05" :value="edge.strength" @input="setEdge('strength', +($event.target as HTMLInputElement).value)" />
          </div>
          <div class="ctl-row">
            <label>Edge width (px) <span class="val">{{ edge.width }}</span></label>
            <input type="range" min="1" max="3" step="1" :value="edge.width" @input="setEdge('width', +($event.target as HTMLInputElement).value)" />
          </div>
          <div class="ctl-row">
            <label>Edge threshold <span class="val">{{ edge.threshold.toFixed(2) }}</span></label>
            <input type="range" min="0" max="1" step="0.05" :value="edge.threshold" @input="setEdge('threshold', +($event.target as HTMLInputElement).value)" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-bar" style="position: absolute; bottom: 0; left: 0; right: 0">
      <span class="hint">Drag to rotate · light gizmo + ground guide visible</span>
      <span class="spacer"></span>
      <button class="primary" @click="render">Render grayscale →</button>
    </div>
    <div v-if="error" class="notice err">{{ error }}</div>
  </div>
</template>
