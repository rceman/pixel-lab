<script setup lang="ts">
// Material palette (spec §9): DawnBringer-32 only. Grayscale levels map
// through explicit ordered ramps. Material dropdown, ramp editor,
// side-by-side material preview, grayscale inspection, contrast.
// Semantic labels + luminance contrast — no red-vs-green status cues.
import { computed, ref } from "vue"
import { activeAsset, store, touch } from "../core/store"
import { composeRgba } from "../core/postfx"
import {
  MATERIALS, Material, getMaterial, normalizeRamp, rampFor, validateRamp,
} from "../core/materials"
import { DB32 } from "../core/palette"
import { GRID } from "../core/schemas"
import { drawRgbaNN } from "../core/pixelCanvas"
import { isDb32 } from "../core/palette"
import PreviewPane from "./PreviewPane.vue"

const asset = computed(() => activeAsset())
const error = ref<string | null>(null)
const rampEditing = ref(false)
const pickIndex = ref<number | null>(null)
const grayMode = ref(false)

const material = computed(() => getMaterial(asset.value?.materialId))
const materialList = Object.values(MATERIALS)

function rampOf(m: Material): string[] {
  const a = asset.value
  return a?.rampOverrides?.[m.id] ?? rampFor(m, a?.grayLevels ?? 6)
}

function setMaterial(id: string) {
  const a = asset.value
  if (!a) return
  a.materialId = id
  touch(a)
}

function rgbaFor(matId: string, gray: boolean): Uint8ClampedArray | null {
  const a = asset.value
  if (!a?.levels) return null
  return composeRgba(Int16Array.from(a.levels), {
    nLevels: a.grayLevels,
    material: gray ? null : getMaterial(matId),
    shadowAlpha: a.shadowAlpha ? Uint8Array.from(a.shadowAlpha) : null,
    background: "dark",
    ramp: a.rampOverrides?.[matId],
  })
}

function drawTo(c: HTMLCanvasElement, matId: string, gray = false) {
  const rgba = rgbaFor(matId, gray)
  c.width = GRID * 4; c.height = GRID * 4
  const g = c.getContext("2d")!
  g.clearRect(0, 0, c.width, c.height)
  if (rgba) drawRgbaNN(g, rgba, 0, 0, 4)
}

function previewCanvas(el: unknown, matId: string) {
  // directive-style canvas fill
  const c = el as HTMLCanvasElement
  if (c) queueMicrotask(() => drawTo(c, matId, grayMode.value))
}

function pickRampColor(hex: string) {
  const a = asset.value
  if (!a || pickIndex.value == null) return
  const id = a.materialId
  const ramp = [...rampOf(material.value)]
  ramp[pickIndex.value] = hex
  const errs = validateRamp(ramp)
  if (errs.length) { error.value = errs.join("\n"); return }
  a.rampOverrides = { ...(a.rampOverrides ?? {}), [id]: normalizeRamp(ramp) }
  pickIndex.value = null
  touch(a)
}

function resetRamp() {
  const a = asset.value
  if (!a) return
  if (a.rampOverrides) delete a.rampOverrides[a.materialId]
  touch(a)
}

function toSprite() {
  store.mode = "sprite"
}
</script>

<template>
  <div class="workspace pv-pad" style="overflow-y: auto">
    <PreviewPane />
    <h3 style="margin: 4px 0 10px">Material — {{ material.name }}</h3>
    <div class="chip-list" style="margin-bottom: 12px">
      <button
        v-for="m in materialList" :key="m.id" class="chip"
        :class="{ on: asset?.materialId === m.id }"
        @click="setMaterial(m.id)"
      >{{ m.name }}</button>
    </div>

    <div class="side-by-side" style="margin-bottom: 12px">
      <figure v-for="m in materialList" :key="m.id">
        <canvas :ref="(el) => previewCanvas(el, m.id)" @click="setMaterial(m.id)" style="cursor: pointer"></canvas>
        <figcaption>{{ m.name }}</figcaption>
      </figure>
    </div>

    <div class="ctl-row" style="max-width: 340px">
      <label>
        <input type="checkbox" v-model="grayMode" /> Grayscale inspection
      </label>
    </div>
    <div class="ctl-row" style="max-width: 340px">
      <label>Contrast <span class="val">{{ asset?.contrast.toFixed(2) }}</span></label>
      <input type="range" min="0.5" max="2" step="0.05" v-model.number="asset!.contrast" @change="touch(asset!)" />
    </div>

    <div class="ctl-row">
      <label>Ramp (dark → light, DB32 only)</label>
      <div class="ramp-row">
        <span
          v-for="(c, i) in rampOf(material)" :key="i" class="swatch"
          :class="{ on: pickIndex === i }"
          :style="{ background: c }"
          :title="c"
          @click="rampEditing = true; pickIndex = i"
        ></span>
        <button v-if="asset?.rampOverrides?.[material.id]" @click="resetRamp">Reset</button>
      </div>
      <div v-if="pickIndex != null" class="lv-grid" style="max-width: 340px; margin-top: 8px">
        <span
          v-for="c in DB32" :key="c" class="swatch"
          :class="{ on: isDb32(c) }" :style="{ background: c }" :title="c"
          @click="pickRampColor(c)"
        ></span>
      </div>
    </div>

    <div v-if="error" class="error-text">{{ error }}</div>
    <div class="bottom-bar" style="position: sticky; bottom: 0; margin: 8px -10px -10px">
      <span class="hint">Switching materials never recreates geometry</span>
      <span class="spacer"></span>
      <button class="primary" @click="toSprite">Sprite →</button>
    </div>
  </div>
</template>
