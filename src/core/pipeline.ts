// Render pipeline: locked camera view -> 32x32 object pass + shadow pass ->
// grayscale levels -> edge highlights -> contact shadow -> manual overrides
// (spec §7-8). Manual edits live in `overrides` and are re-applied after
// every re-render, so lighting changes never silently destroy authored work.
import { addContactShadow, applyEdgeHighlights, applyOverrides, quantizeToLevels } from "./postfx"
import { NCELLS } from "./schemas"
import { Asset, defaultEdge } from "./types"
import { FormScene } from "../three/formScene"

/** Render `asset` through `fs` and store levels + shadowAlpha. */
export function runRender(asset: Asset, fs: FormScene): string | null {
  const res = fs.renderSprite32()
  if (!res) return "nothing to render"
  const levels = quantizeToLevels(res.rgba, asset.grayLevels, asset.contrast)
  const edge = asset.edge ?? defaultEdge()
  applyEdgeHighlights(levels, edge, res.lightScreen, asset.grayLevels)
  const shadow = new Uint8Array(res.shadowAlpha)
  addContactShadow(shadow, levels)
  applyOverrides(levels, asset.overrides)
  asset.levels = Array.from(levels)
  asset.shadowAlpha = Array.from(shadow)
  return null
}

/** Levels including the override layer, for display/editing. */
export function effectiveLevels(asset: Asset): Int16Array {
  const base = asset.levels ? Int16Array.from(asset.levels) : new Int16Array(NCELLS).fill(-1)
  return base
}

export function hasRenderable(asset: Asset): boolean {
  return !!asset.form && asset.form.meshes.length > 0
}
