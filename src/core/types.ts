// Shared state types (spec §6-10).
import type { FormData, SketchData } from "./schemas"

export interface CameraState {
  yawDeg: number
  pitchDeg: number
  /** Orthographic zoom: 1 = 32 world units fill the frame. */
  orthoScale: number
  offsetX: number
  offsetY: number
  /** Object orientation is independent of the camera. */
  objYawDeg: number
  objPitchDeg: number
  objRollDeg: number
  locked: boolean
}

export function defaultCamera(): CameraState {
  // Slightly raised three-quarter view shows top + front + one side.
  return { yawDeg: 0, pitchDeg: 12, orthoScale: 1, offsetX: 0, offsetY: 0, objYawDeg: 0, objPitchDeg: 0, objRollDeg: 0, locked: false }
}

export interface LightSettings {
  azimuthDeg: number     // 0 = +z toward viewer, positive clockwise from above
  elevationDeg: number   // above horizon
  intensity: number      // 0..2
  ambient: number        // 0..1
  shadowEnabled: boolean
  shadowStrength: number // 0..1 alpha of cast shadow
  shadowSoftness: number // 0..1 -> shadow map blur radius
}

export function defaultLight(): LightSettings {
  // Daylight from upper-left (spec default).
  return {
    azimuthDeg: -35, elevationDeg: 55, intensity: 1.0, ambient: 0.35,
    shadowEnabled: true, shadowStrength: 0.55, shadowSoftness: 0.5,
  }
}

export type EdgeMode = "disabled" | "light-facing" | "hard" | "rim" | "specular"

export interface EdgeSettings {
  mode: EdgeMode
  strength: number  // 0..1
  width: number     // pixel-aware edge layers 1..3
  threshold: number // brightness delta for hard edges / dot cutoff
}

export function defaultEdge(): EdgeSettings {
  return { mode: "light-facing", strength: 0.8, width: 1, threshold: 0.3 }
}

export interface Asset {
  id: string
  name: string
  createdAt: number
  updatedAt: number
  objectType: string
  sketch: SketchData | null
  form: FormData | null
  /** "procedural" | "agent" | "import" — how the form was produced. */
  formSource: string | null
  camera: CameraState | null
  light: LightSettings | null // per-asset override; null = shared preset
  edge: EdgeSettings | null
  materialId: string
  /** Rendered output: NCELLS levels, -1 = transparent. */
  levels: number[] | null
  /** NCELLS 0..255 cast-shadow alpha (separate layer). */
  shadowAlpha: number[] | null
  /** Manual pixel cleanup: NCELLS level override or null (spec §8). */
  overrides: (number | null)[] | null
  grayLevels: number
  contrast: number
  /** Custom per-asset ramp overrides (materialId -> ramp). */
  rampOverrides: Record<string, string[]> | null
  /** Optional sketch references (Amendment 001): guide images as data URLs,
   * never part of sketch/sprite exports. */
  references?: string[]
}

export interface ScenePlacement {
  id: string
  assetId: string
  tx: number
  ty: number
}

export interface SceneState {
  cols: number
  rows: number
  /** cols*rows tile ids: grass | dirt | stone */
  tiles: string[]
  placements: ScenePlacement[]
  showGrid: boolean
  view: { x: number; y: number; zoom: number }
}

export interface ProjectState {
  assets: Record<string, Asset>
  order: string[]
  activeAssetId: string | null
  sharedLight: LightSettings
  scene: SceneState
}

export type Mode = "scene" | "sketch" | "form" | "light" | "material" | "sprite"
