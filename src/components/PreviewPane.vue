<script setup lang="ts">
// Always-live preview of the actual 32x32 output (spec §2): magnified
// nearest-neighbor, optional 1:1, background + grayscale/color toggles.
import { computed, ref, watchEffect } from "vue"
import { activeAsset, store } from "../core/store"
import { composeRgba } from "../core/postfx"
import { getMaterial } from "../core/materials"
import { GRID, NCELLS } from "../core/schemas"
import { drawRgbaNN } from "../core/pixelCanvas"
import { hexToRgb } from "../core/palette"

const canvas = ref<HTMLCanvasElement | null>(null)
const oneToOne = ref(false)
const bg = ref<"transparent" | "dark" | "light">("transparent")
const gray = ref(false)
const small = typeof matchMedia === "function" && matchMedia("(max-width: 520px)").matches

const asset = computed(() => activeAsset())
const size = computed(() => (oneToOne.value ? GRID : small ? GRID * 2 : GRID * 3))

function rgba(): Uint8ClampedArray | null {
  const a = asset.value
  if (!a) return null
  if (a.levels) {
    const shadow = a.shadowAlpha ? Uint8Array.from(a.shadowAlpha) : null
    return composeRgba(Int16Array.from(a.levels), {
      nLevels: a.grayLevels,
      material: gray.value ? null : getMaterial(a.materialId),
      shadowAlpha: shadow,
      background: bg.value,
      ramp: a.rampOverrides?.[a.materialId],
    })
  }
  if (a.sketch) {
    // pre-render output IS the silhouette — never an approximation
    const out = new Uint8ClampedArray(NCELLS * 4)
    for (let i = 0; i < NCELLS; i++) {
      if (!a.sketch.silhouette[i]) continue
      const [r, g, b] = hexToRgb("#9badb7")
      out[i * 4] = r; out[i * 4 + 1] = g; out[i * 4 + 2] = b; out[i * 4 + 3] = 255
    }
    return out
  }
  return null
}

watchEffect(() => {
  const c = canvas.value
  if (!c) return
  c.width = size.value; c.height = size.value
  const ctx = c.getContext("2d")!
  ctx.clearRect(0, 0, c.width, c.height)
  const img = rgba()
  if (img) drawRgbaNN(ctx, img, 0, 0, size.value / GRID)
  // touch reactive deps
  void asset.value?.levels; void asset.value?.shadowAlpha
  void asset.value?.sketch?.silhouette; void asset.value?.materialId
  void gray.value; void bg.value
})

function cycleBg() {
  bg.value = bg.value === "transparent" ? "dark" : bg.value === "dark" ? "light" : "transparent"
}
</script>

<template>
  <div class="preview-pane">
    <canvas ref="canvas"></canvas>
    <div class="pv-label">{{ oneToOne ? "1:1" : "3x" }} actual output</div>
    <div class="pv-toggles">
      <button :class="{ on: oneToOne }" @click="oneToOne = !oneToOne" title="1:1 pixels">1:1</button>
      <button @click="cycleBg" title="background">BG</button>
      <button :class="{ on: gray }" @click="gray = !gray" title="grayscale">G</button>
    </div>
  </div>
</template>
