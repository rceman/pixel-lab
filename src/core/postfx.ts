// 32x32 grayscale post-processing (spec §7-8):
//   quantize luminance -> N levels
//   edge highlights: disabled | light-facing | hard | rim | specular
//   contact shadow boost on the separate cast-shadow layer
//   manual overrides applied last, as their own layer
//   compose RGBA for display/export in grayscale or material color
import { GRID, NCELLS } from "./schemas"
import { EdgeSettings } from "./types"
import { Material, colorForLevel, grayHex } from "./materials"
import { hexToRgb } from "./palette"

/** Quantize an RGBA buffer to grayscale levels; -1 = transparent. */
export function quantizeToLevels(
  rgba: Uint8Array | Uint8ClampedArray,
  levels: number,
  contrast: number,
): Int16Array {
  const out = new Int16Array(NCELLS)
  for (let i = 0; i < NCELLS; i++) {
    const a = rgba[i * 4 + 3]
    if (a < 16) {
      out[i] = -1
      continue
    }
    const l = (0.2126 * rgba[i * 4] + 0.7152 * rgba[i * 4 + 1] + 0.0722 * rgba[i * 4 + 2]) / 255
    let v = (l - 0.5) * contrast + 0.5
    v = Math.max(0, Math.min(0.9999, v))
    out[i] = Math.min(levels - 1, Math.floor(v * levels))
  }
  return out
}

const OFFS = [
  [-1, 0], [1, 0], [0, -1], [0, 1],
]

function isObj(levels: Int16Array, x: number, y: number): boolean {
  return x >= 0 && x < GRID && y >= 0 && y < GRID && levels[y * GRID + x] >= 0
}

/** Edge highlights on the level array (spec §7). `light` is the direction
 * TOWARD the light in screen space (x right, y down). */
export function applyEdgeHighlights(
  levels: Int16Array,
  edge: EdgeSettings,
  light: { x: number; y: number },
  nLevels: number,
): void {
  if (edge.mode === "disabled" || edge.strength <= 0) return
  const mag = Math.hypot(light.x, light.y) || 1
  const lx = light.x / mag, ly = light.y / mag
  const marks = new Map<number, number>()
  const top = nLevels - 1

  const apply = (i: number, target: number) => {
    const cur = levels[i]
    const blended = cur + (target - cur) * edge.strength
    marks.set(i, Math.min(top, Math.max(0, Math.round(blended))))
  }

  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      const i = y * GRID + x
      if (levels[i] < 0) continue
      // outward directions: missing neighbors in ring order
      for (let w = 1; w <= Math.max(1, edge.width); w++) {
        for (const [dx, dy] of OFFS) {
          const nx = x + dx * w, ny = y + dy * w
          const missing = !isObj(levels, nx, ny)
          if (!missing) continue
          const dot = dx * lx + dy * ly // y-down: -dy faces "up"
          if (edge.mode === "light-facing" && dot > edge.threshold) apply(i, top)
          else if (edge.mode === "rim" && dot < -edge.threshold) apply(i, top)
        }
      }
      if (edge.mode === "hard") {
        for (const [dx, dy] of OFFS) {
          const nx = x + dx, ny = y + dy
          if (!isObj(levels, nx, ny)) continue
          const diff = (levels[i] - levels[ny * GRID + nx]) / Math.max(1, top)
          if (diff > edge.threshold) apply(i, top)
        }
      }
      if (edge.mode === "specular" && levels[i] >= top - 1) apply(i, top)
    }
  }
  for (const [i, v] of marks) levels[i] = v
}

/** Contact shadow: boost cast-shadow alpha on ground pixels hugging the
 * object's base (spec §7). */
export function addContactShadow(shadow: Uint8Array, levels: Int16Array, boost = 0.6): void {
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      const i = y * GRID + x
      if (levels[i] >= 0 || shadow[i] === 0) continue
      for (const [dx, dy] of OFFS) {
        if (isObj(levels, x + dx, y + dy)) {
          shadow[i] = Math.min(255, Math.round(shadow[i] + 255 * boost * 0.5))
          break
        }
      }
    }
  }
}

/** Apply manual overrides — the separate edit layer (spec §8). */
export function applyOverrides(levels: Int16Array, overrides: (number | null)[] | null): void {
  if (!overrides) return
  for (let i = 0; i < NCELLS; i++) {
    const o = overrides[i]
    if (o != null) levels[i] = o
  }
}

export interface ComposeOpts {
  nLevels: number
  material: Material | null // null -> grayscale inspection
  shadowAlpha: Uint8Array | null
  background: "transparent" | "dark" | "light"
  ramp?: string[] // per-asset ramp override
}

/** Compose final RGBA for display/export: shadow layer under the object. */
export function composeRgba(levels: Int16Array, o: ComposeOpts): Uint8ClampedArray {
  const out = new Uint8ClampedArray(NCELLS * 4)
  const bg = o.background === "dark" ? [18, 19, 22] : o.background === "light" ? [240, 240, 244] : null
  for (let i = 0; i < NCELLS; i++) {
    const p = i * 4
    const sa = o.shadowAlpha ? o.shadowAlpha[i] : 0
    if (sa && levels[i] < 0) {
      // cast shadow occupies ground pixels the object does not cover
      const a = sa / 255
      out[p] = bg ? bg[0] * (1 - a) : 0
      out[p + 1] = bg ? bg[1] * (1 - a) : 0
      out[p + 2] = bg ? bg[2] * (1 - a) : 0
      out[p + 3] = bg ? 255 : sa
      continue
    }
    const lv = levels[i]
    if (lv < 0) {
      if (bg) {
        out[p] = bg[0]; out[p + 1] = bg[1]; out[p + 2] = bg[2]; out[p + 3] = 255
      } else {
        out[p + 3] = 0
      }
      continue
    }
    const hex = o.material
      ? o.ramp
        ? o.ramp[Math.max(0, Math.min(o.nLevels - 1, lv))]
        : colorForLevel(o.material, lv, o.nLevels)
      : grayHex(lv, o.nLevels)
    const [r, g, b] = hexToRgb(hex)
    out[p] = r; out[p + 1] = g; out[p + 2] = b; out[p + 3] = 255
    // shadow may peek past the object edge — composite under is enough
  }
  return out
}

/** Standalone shadow PNG layer: transparent except shadow pixels. */
export function shadowRgba(shadow: Uint8Array): Uint8ClampedArray {
  const out = new Uint8ClampedArray(NCELLS * 4)
  for (let i = 0; i < NCELLS; i++) {
    out[i * 4 + 3] = shadow[i]
  }
  return out
}
