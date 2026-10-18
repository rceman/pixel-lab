import { describe, expect, it } from "vitest"
import {
  SketchData, emptySketch, formToJson, recomputeBounds, sketchToJson,
  validateForm, validateSketch, GRID,
} from "../src/core/schemas"
import { generateBlob, generateRock } from "../src/core/rockgen"
import { getMaterial, rampFor, validateRamp } from "../src/core/materials"
import { quantizeToLevels, applyEdgeHighlights, applyOverrides } from "../src/core/postfx"
import { defaultEdge } from "../src/core/types"

function rockSketch(): SketchData {
  const s = emptySketch()
  for (let y = 10; y <= 21; y++)
    for (let x = 10; x <= 21; x++) s.silhouette[y * GRID + x] = 1
  s.groundAnchor = { x: 16, y: 21 }
  recomputeBounds(s)
  return s
}

describe("sketch JSON contract", () => {
  it("round-trips", () => {
    const s = rockSketch()
    const { sketch, errors } = validateSketch(sketchToJson(s))
    expect(errors).toEqual([])
    expect(sketch!.silhouette[10 * GRID + 10]).toBe(1)
    expect(sketch!.bounds).toEqual({ x: 10, y: 10, w: 12, h: 12 })
  })

  it("rejects wrong kind with a readable error", () => {
    const { sketch, errors } = validateSketch({ kind: "nope", version: 1 })
    expect(sketch).toBeNull()
    expect(errors.join(" ")).toContain("pixel-lab-sketch")
  })
})

describe("form JSON contract", () => {
  it("validates the procedural rock", () => {
    const form = generateRock(rockSketch())
    const { form: f, errors } = validateForm(formToJson(form))
    expect(errors).toEqual([])
    expect(f!.meshes[0].positions.length % 3).toBe(0)
  })

  it("rejects out-of-range face indices", () => {
    const { errors } = validateForm({
      kind: "pixel-lab-form", version: 1,
      meshes: [{ name: "m", positions: [0, 0, 0], faces: [[0, 1, 9]] }],
      groundAnchor: { x: 0, y: 0, z: 0 },
    })
    expect(errors.join(" ")).toContain("out of range")
  })

  it("rejects non-triangle faces", () => {
    const { errors } = validateForm({
      kind: "pixel-lab-form", version: 1,
      meshes: [{ name: "m", positions: [0, 0, 0, 1, 0, 0, 0, 1, 0], faces: [[0, 1]] }],
      groundAnchor: { x: 0, y: 0, z: 0 },
    })
    expect(errors.join(" ")).toContain("triangle")
  })
})

describe("materials", () => {
  it("all ramps are DB32 members", () => {
    for (const m of Object.values(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      ({} as Record<string, never>),
    )) void m
    for (const id of ["stone", "coal", "iron_ore", "copper_ore", "gold_ore"]) {
      expect(validateRamp(getMaterial(id).ramp)).toEqual([])
      expect(rampFor(getMaterial(id)).length).toBe(6)
    }
  })
})

describe("postfx", () => {
  it("quantizes luminance to N levels with transparency", () => {
    const rgba = new Uint8Array(1024 * 4)
    rgba[3] = 0 // transparent
    rgba[4] = 255; rgba[5] = 255; rgba[6] = 255; rgba[7] = 255 // white
    const lv = quantizeToLevels(rgba, 6, 1)
    expect(lv[0]).toBe(-1)
    expect(lv[1]).toBe(5)
  })

  it("light-facing edges are highlighted", () => {
    const lv = new Int16Array(1024).fill(-1)
    for (let y = 10; y <= 20; y++) for (let x = 10; x <= 20; x++) lv[y * GRID + x] = 2
    const edge = { ...defaultEdge(), mode: "light-facing" as const, threshold: 0.3, strength: 1 }
    applyEdgeHighlights(lv, edge, { x: -1, y: -1 }, 6) // light from upper-left
    expect(lv[10 * GRID + 10]).toBe(5) // top-left edge pixel lit
    expect(lv[20 * GRID + 20]).toBe(2) // bottom-right interior untouched
  })

  it("overrides layer is applied", () => {
    const lv = new Int16Array(1024).fill(1)
    const ov = new Array<number | null>(1024).fill(null)
    ov[0] = 5
    applyOverrides(lv, ov)
    expect(lv[0]).toBe(5)
  })
})

describe("procedural blob fixture", () => {
  it("produces a valid form", () => {
    const { errors } = validateForm(formToJson(generateBlob()))
    expect(errors).toEqual([])
  })
})
