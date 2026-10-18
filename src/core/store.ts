// Central reactive store + IndexedDB autosave (spec §10).
import { reactive, watch } from "vue"
import { idbGet, idbSet } from "./idb"
import { emptySketch, GRID, SketchData } from "./schemas"
import { generateBlob, generateRock } from "./rockgen"
import {
  Asset, CameraState, defaultCamera, defaultEdge, defaultLight,
  LightSettings, Mode, ProjectState, ScenePlacement, SceneState,
} from "./types"
import { DEFAULT_MATERIAL_ID } from "./materials"

const STORE_KEY = "pixel-lab/project/v1"

function starterTiles(cols: number, rows: number): string[] {
  const t: string[] = []
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // a grass field with a dirt path and a stone patch so the scene
      // never opens empty and sprites can be judged on varied ground
      if (y >= rows - 2 && x >= 2 && x <= cols - 4) t.push("stone")
      else if (x === Math.floor(cols / 2) || y === Math.floor(rows / 2)) t.push("dirt")
      else t.push("grass")
    }
  }
  return t
}

function starterScene(): SceneState {
  return {
    cols: 10, rows: 8,
    tiles: starterTiles(10, 8),
    placements: [],
    showGrid: true,
    view: { x: 0, y: 0, zoom: 1 },
  }
}

export const store = reactive<{
  loaded: boolean
  mode: Mode
  project: ProjectState
  placingAssetId: string | null
  selectedPlacementId: string | null
  notice: string | null
}>({
  loaded: false,
  mode: "scene",
  project: {
    assets: {},
    order: [],
    activeAssetId: null,
    sharedLight: defaultLight(),
    scene: starterScene(),
  },
  placingAssetId: null,
  selectedPlacementId: null,
  notice: null,
})

export function activeAsset(): Asset | null {
  const id = store.project.activeAssetId
  return id ? store.project.assets[id] ?? null : null
}

export function assetLight(a: Asset): LightSettings {
  return a.light ?? store.project.sharedLight
}

export function newId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

export function createAsset(name?: string): Asset {
  const a: Asset = {
    id: newId(),
    name: name || `Asset ${store.project.order.length + 1}`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    objectType: "rock",
    sketch: emptySketch(),
    form: null,
    formSource: null,
    camera: null,
    light: null,
    edge: null,
    materialId: DEFAULT_MATERIAL_ID,
    levels: null,
    shadowAlpha: null,
    overrides: null,
    grayLevels: 6,
    contrast: 1.0,
    rampOverrides: null,
  }
  store.project.assets[a.id] = a
  store.project.order.push(a.id)
  store.project.activeAssetId = a.id
  return a
}

export function touch(a: Asset) {
  a.updatedAt = Date.now()
}

/** Generate the procedural 3D form from the asset's sketch (spec §5). */
export function generateForm(a: Asset): string | null {
  if (!a.sketch) return "no sketch"
  a.form = generateRock(a.sketch, a.objectType)
  a.formSource = "procedural"
  touch(a)
  return null
}

export function placeAsset(assetId: string, tx: number, ty: number): ScenePlacement {
  const p: ScenePlacement = { id: newId(), assetId, tx, ty }
  store.project.scene.placements.push(p)
  return p
}

export function removePlacement(id: string) {
  const s = store.project.scene
  s.placements = s.placements.filter((p) => p.id !== id)
  if (store.selectedPlacementId === id) store.selectedPlacementId = null
}

export function duplicatePlacement(id: string) {
  const s = store.project.scene
  const p = s.placements.find((q) => q.id === id)
  if (!p) return
  s.placements.push({ id: newId(), assetId: p.assetId, tx: Math.min(s.cols - 1, p.tx + 1), ty: p.ty })
}

export function deleteAsset(id: string) {
  delete store.project.assets[id]
  store.project.order = store.project.order.filter((x) => x !== id)
  store.project.scene.placements = store.project.scene.placements.filter((p) => p.assetId !== id)
  if (store.project.activeAssetId === id) store.project.activeAssetId = store.project.order[0] ?? null
}

// ------------------------------------------------------------ persistence

let saveTimer: ReturnType<typeof setTimeout> | null = null

export function scheduleSave() {
  if (saveTimer) clearTimeout(saveTimer)
  saveTimer = setTimeout(() => void persistNow(), 400)
}

export async function persistNow() {
  await idbSet(STORE_KEY, JSON.parse(JSON.stringify(store.project)))
}

export async function loadProject() {
  try {
    const saved = await idbGet<ProjectState>(STORE_KEY)
    if (saved && saved.assets && saved.scene) {
      store.project = saved
      if (!store.project.scene.tiles?.length) store.project.scene = starterScene()
    } else {
      await seedStarterProject()
    }
  } catch {
    await seedStarterProject()
  }
  watch(
    () => store.project,
    () => scheduleSave(),
    { deep: true },
  )
  store.loaded = true
}

/** Seed: a starter scene + one rendered starter rock so the app never
 * opens empty (spec §3). */
async function seedStarterProject() {
  const a = createAsset("Starter rock")
  a.objectType = "rock"
  const s = emptySketch()
  // starter silhouette: a small 8x7 boulder
  for (let y = 20; y <= 26; y++)
    for (let x = 12; x <= 19; x++)
      if (!(y === 20 && (x === 12 || x === 19)) && !(y === 26 && x === 12))
        s.silhouette[y * GRID + x] = 1
  s.groundAnchor = { x: 16, y: 26 }
  a.sketch = s
  a.form = generateBlob("rock", 7, 5, [16, 21, 16])
  a.formSource = "procedural"
  a.camera = { ...defaultCamera(), locked: true }
  placeAsset(a.id, 3, 2)
  placeAsset(a.id, 7, 5)
  await persistNow()
}
