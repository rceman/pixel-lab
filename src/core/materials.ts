// Materials: ordered grayscale-level -> DB32 color ramps (spec §9).
// Grayscale levels are mapped through explicit ordered ramps, never RGB
// multiplication. Switching materials never recreates geometry.
import { isDb32, sortDarkToLight } from "./palette"

export const DEFAULT_LEVELS = 6

export interface Material {
  id: string
  name: string
  /** Ordered dark -> light; >= DEFAULT_LEVELS entries. */
  ramp: string[]
  /** Optional accent for rim/specular edge accents in color mode. */
  accent?: string
  edgePreference: "disabled" | "light-facing" | "hard" | "rim" | "specular"
  contrast: number
}

export const MATERIALS: Record<string, Material> = {
  stone: {
    id: "stone",
    name: "Stone",
    ramp: ["#222034", "#323c39", "#524b24", "#847e87", "#9badb7", "#cbdbfc"],
    accent: "#cbdbfc",
    edgePreference: "light-facing",
    contrast: 1.0,
  },
  coal: {
    id: "coal",
    name: "Coal",
    ramp: ["#000000", "#222034", "#323c39", "#524b24", "#696a6a", "#9badb7"],
    accent: "#595652",
    edgePreference: "light-facing",
    contrast: 1.0,
  },
  iron_ore: {
    id: "iron_ore",
    name: "Iron Ore",
    ramp: ["#222034", "#45283c", "#663931", "#847e87", "#d9a066", "#eec39a"],
    accent: "#eec39a",
    edgePreference: "light-facing",
    contrast: 1.0,
  },
  copper_ore: {
    id: "copper_ore",
    name: "Copper Ore",
    ramp: ["#323c39", "#524b24", "#8a6f30", "#8f563b", "#d77bba", "#d9a066"],
    accent: "#df7126",
    edgePreference: "light-facing",
    contrast: 1.0,
  },
  gold_ore: {
    id: "gold_ore",
    name: "Gold Ore",
    ramp: ["#323c39", "#524b24", "#8a6f30", "#d9a066", "#fbf236", "#eec39a"],
    accent: "#fbf236",
    edgePreference: "light-facing",
    contrast: 1.0,
  },
}

export const DEFAULT_MATERIAL_ID = "stone"

export function getMaterial(id: string | null | undefined): Material {
  return (id && MATERIALS[id]) || MATERIALS[DEFAULT_MATERIAL_ID]
}

/** Ramp resized to `levels` entries, preserving endpoints and order. */
export function rampFor(m: Material, levels: number = DEFAULT_LEVELS): string[] {
  const r = m.ramp
  if (r.length === levels) return [...r]
  if (levels <= 1) return [r[r.length - 1]]
  if (r.length > levels) {
    const out: string[] = []
    for (let i = 0; i < levels; i++) out.push(r[Math.round((i * (r.length - 1)) / (levels - 1))])
    return out
  }
  const out = [...r]
  while (out.length < levels) out.push(r[r.length - 1])
  return out
}

export function validateRamp(colors: string[]): string[] {
  const errors: string[] = []
  if (!colors.length) errors.push("ramp must contain at least one color")
  for (const c of colors) if (!isDb32(c)) errors.push(`${c} is not a DawnBringer-32 color`)
  return errors
}

export function normalizeRamp(colors: string[]): string[] {
  return sortDarkToLight(colors.map((c) => c.toLowerCase()))
}

/** Display gray for `level` (0 = darkest) in grayscale-inspection mode. */
export function grayHex(level: number, levels: number = DEFAULT_LEVELS): string {
  if (levels <= 1) return "#ffffff"
  const v = Math.round((level * 255) / (levels - 1))
  return `#${v.toString(16).padStart(2, "0").repeat(3)}`
}

export function colorForLevel(m: Material, level: number, levels: number = DEFAULT_LEVELS): string {
  const ramp = rampFor(m, levels)
  return ramp[Math.max(0, Math.min(levels - 1, level))]
}
