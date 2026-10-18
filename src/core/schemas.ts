// Versioned JSON contracts: sketch, form, asset, project (spec §4-5, §10).
// Imports validate deterministically and report readable errors — a payload
// is fully valid or rejected; nothing is half-applied. Bitmaps travel as
// base64 bytes so exports are programmatically consumable (no screenshots,
// no browser automation).

export const SKETCH_KIND = "pixel-lab-sketch"
export const FORM_KIND = "pixel-lab-form"
export const ASSET_KIND = "pixel-lab-asset"
export const PROJECT_KIND = "pixel-lab-project"
export const SCHEMA_VERSION = 1
export const GRID = 32
export const NCELLS = GRID * GRID

// ------------------------------------------------------------------ bitmaps

export function bitmapToB64(bits: number[]): string {
  const raw = new Uint8Array(NCELLS / 8)
  for (let i = 0; i < NCELLS; i++) if (bits[i]) raw[i >> 3] |= 0x80 >> (i & 7)
  return u8ToB64(raw)
}

export function b64ToBitmap(s: unknown, errors: string[], name: string): number[] | null {
  const raw = b64ToU8(s)
  if (!raw) {
    errors.push(`${name}: not valid base64`)
    return null
  }
  if (raw.length !== NCELLS / 8) {
    errors.push(`${name}: expected ${NCELLS / 8} bytes, got ${raw.length}`)
    return null
  }
  const out = new Array<number>(NCELLS)
  for (let i = 0; i < NCELLS; i++) out[i] = raw[i >> 3] & (0x80 >> (i & 7)) ? 1 : 0
  return out
}

export function graymapToB64(vals: number[]): string {
  return u8ToB64(Uint8Array.from(vals.map((v) => v & 0xff)))
}

export function b64ToGraymap(s: unknown, errors: string[], name: string): number[] | null {
  const raw = b64ToU8(s)
  if (!raw) {
    errors.push(`${name}: not valid base64`)
    return null
  }
  if (raw.length !== NCELLS) {
    errors.push(`${name}: expected ${NCELLS} bytes, got ${raw.length}`)
    return null
  }
  return Array.from(raw)
}

function u8ToB64(u8: Uint8Array): string {
  let bin = ""
  for (let i = 0; i < u8.length; i += 4096)
    bin += String.fromCharCode(...u8.subarray(i, i + 4096))
  return btoa(bin)
}

function b64ToU8(s: unknown): Uint8Array | null {
  if (typeof s !== "string") return null
  try {
    const bin = atob(s)
    const u8 = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i)
    return u8
  } catch {
    return null
  }
}

// ------------------------------------------------------------------ sketch

export interface GroundAnchor2 {
  x: number
  y: number
}

export interface SketchData {
  silhouette: number[]        // NCELLS 0/1
  heightHints: number[] | null // NCELLS uint8
  edgeHints: number[] | null   // NCELLS 0/1
  groundAnchor: GroundAnchor2
  bounds: { x: number; y: number; w: number; h: number } | null
  objectType: string
  depthHint: number // 0..1
}

export function emptySketch(): SketchData {
  return {
    silhouette: new Array(NCELLS).fill(0),
    heightHints: null,
    edgeHints: null,
    groundAnchor: { x: 16, y: 31 },
    bounds: null,
    objectType: "rock",
    depthHint: 0.6,
  }
}

export function recomputeBounds(s: SketchData): SketchData["bounds"] {
  let minX = GRID, minY = GRID, maxX = -1, maxY = -1
  for (let i = 0; i < NCELLS; i++) {
    if (!s.silhouette[i]) continue
    const x = i % GRID, y = Math.floor(i / GRID)
    if (x < minX) minX = x
    if (x > maxX) maxX = x
    if (y < minY) minY = y
    if (y > maxY) maxY = y
  }
  s.bounds = maxX < 0 ? null : { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 }
  return s.bounds
}

export function sketchToJson(s: SketchData): Record<string, unknown> {
  return {
    kind: SKETCH_KIND,
    version: SCHEMA_VERSION,
    width: GRID,
    height: GRID,
    objectType: s.objectType,
    depthHint: s.depthHint,
    bounds: s.bounds,
    groundAnchor: s.groundAnchor,
    silhouette: bitmapToB64(s.silhouette),
    heightHints: s.heightHints ? graymapToB64(s.heightHints) : null,
    edgeHints: s.edgeHints ? bitmapToB64(s.edgeHints) : null,
  }
}

export function validateSketch(obj: unknown): { sketch: SketchData | null; errors: string[] } {
  const errors: string[] = []
  if (typeof obj !== "object" || obj === null) return { sketch: null, errors: ["sketch JSON must be an object"] }
  const o = obj as Record<string, unknown>
  if (o.kind !== SKETCH_KIND) errors.push(`kind must be '${SKETCH_KIND}'`)
  if (o.version !== SCHEMA_VERSION) errors.push(`unsupported sketch version ${JSON.stringify(o.version)}`)
  if (o.width !== GRID || o.height !== GRID) errors.push("only 32x32 sketches are supported in v0.1")
  const sil = b64ToBitmap(o.silhouette ?? "", errors, "silhouette")
  let hh: number[] | null = null
  if (o.heightHints != null) hh = b64ToGraymap(o.heightHints, errors, "heightHints")
  let eh: number[] | null = null
  if (o.edgeHints != null) eh = b64ToBitmap(o.edgeHints, errors, "edgeHints")
  const ga = o.groundAnchor as Record<string, unknown> | undefined
  if (!ga || typeof ga.x !== "number" || typeof ga.y !== "number")
    errors.push("groundAnchor must be {x,y} numbers")
  const b = o.bounds as Record<string, unknown> | null | undefined
  if (b != null && !(typeof b.x === "number" && typeof b.y === "number" && typeof b.w === "number" && typeof b.h === "number"))
    errors.push("bounds must be {x,y,w,h} integers")
  const dh = o.depthHint ?? 0.6
  if (typeof dh !== "number" || dh < 0 || dh > 1) errors.push("depthHint must be a number 0..1")
  if (errors.length) return { sketch: null, errors }
  const sketch: SketchData = {
    silhouette: sil ?? new Array(NCELLS).fill(0),
    heightHints: hh,
    edgeHints: eh,
    groundAnchor: { x: Math.round(ga!.x as number), y: Math.round(ga!.y as number) },
    bounds: b ? { x: b.x as number, y: b.y as number, w: b.w as number, h: b.h as number } : null,
    objectType: String(o.objectType || "object"),
    depthHint: dh as number,
  }
  recomputeBounds(sketch)
  return { sketch, errors: [] }
}

// ------------------------------------------------------------------ form

export interface FormMesh {
  name: string
  positions: number[] // flat xyz
  faces: number[][]   // triangles
  region: string
}

export interface FormData {
  meshes: FormMesh[]
  units: string
  coordinateSystem: string
  groundAnchor: { x: number; y: number; z: number }
}

export function formToJson(f: FormData): Record<string, unknown> {
  return {
    kind: FORM_KIND,
    version: SCHEMA_VERSION,
    units: f.units,
    coordinateSystem: f.coordinateSystem,
    groundAnchor: f.groundAnchor,
    meshes: f.meshes.map((m) => ({ name: m.name, positions: m.positions, faces: m.faces, region: m.region })),
  }
}

/** Deterministic validation with readable errors (spec §5). */
export function validateForm(obj: unknown): { form: FormData | null; errors: string[] } {
  const errors: string[] = []
  if (typeof obj !== "object" || obj === null) return { form: null, errors: ["form JSON must be an object"] }
  const o = obj as Record<string, unknown>
  if (o.kind !== FORM_KIND) errors.push(`kind must be '${FORM_KIND}'`)
  if (o.version !== SCHEMA_VERSION) errors.push(`unsupported form version ${JSON.stringify(o.version)}`)
  if ((o.units ?? "pixels") !== "pixels") errors.push(`units must be 'pixels', got ${JSON.stringify(o.units)}`)
  if ((o.coordinateSystem ?? "right-handed-y-up") !== "right-handed-y-up")
    errors.push(`coordinateSystem must be 'right-handed-y-up', got ${JSON.stringify(o.coordinateSystem)}`)
  const meshes: unknown[] = Array.isArray(o.meshes) ? o.meshes : []
  if (!meshes.length) errors.push("meshes must be a non-empty list")
  const out: FormMesh[] = []
  for (let mi = 0; mi < meshes.length; mi++) {
    const where = `meshes[${mi}]`
    const m = meshes[mi] as Record<string, unknown>
    if (typeof m !== "object" || m === null) {
      errors.push(`${where}: must be an object`)
      continue
    }
    const name = typeof m.name === "string" && m.name ? m.name : `mesh${mi}`
    const pos = m.positions
    let okPos: number[] = []
    if (!Array.isArray(pos) || !pos.length || pos.length % 3 !== 0) {
      errors.push(`${where}.positions: flat xyz list, multiple of 3, non-empty`)
    } else {
      const bad = pos.findIndex((v) => typeof v !== "number" || !Number.isFinite(v))
      if (bad >= 0) errors.push(`${where}.positions[${bad}]: not a number`)
      else okPos = pos.map(Number)
    }
    const faces = m.faces
    const nv = okPos.length / 3
    const good: number[][] = []
    if (!Array.isArray(faces) || !faces.length) {
      errors.push(`${where}.faces: non-empty list of triangles`)
    } else {
      faces.forEach((f, fi) => {
        if (!Array.isArray(f) || f.length !== 3) {
          errors.push(`${where}.faces[${fi}]: must be a triangle [a,b,c]`)
          return
        }
        if (!f.every((i) => Number.isInteger(i))) {
          errors.push(`${where}.faces[${fi}]: indices must be integers`)
          return
        }
        if (Math.min(...f) < 0 || Math.max(...f) >= nv) {
          errors.push(`${where}.faces[${fi}]: index out of range (0..${nv - 1})`)
          return
        }
        good.push([...f])
      })
    }
    if (okPos.length && good.length)
      out.push({ name, positions: okPos, faces: good, region: String(m.region || "body") })
  }
  const ga = o.groundAnchor as Record<string, unknown> | undefined
  if (!ga || typeof ga.x !== "number" || typeof ga.y !== "number" || typeof ga.z !== "number")
    errors.push("groundAnchor must be {x,y,z} numbers")
  if (errors.length) return { form: null, errors }
  return {
    form: {
      meshes: out,
      units: "pixels",
      coordinateSystem: "right-handed-y-up",
      groundAnchor: { x: ga!.x as number, y: ga!.y as number, z: ga!.z as number },
    },
    errors: [],
  }
}

// ------------------------------------------------------------------ envelopes

export function wrapAsset(asset: unknown): Record<string, unknown> {
  return { kind: ASSET_KIND, version: SCHEMA_VERSION, asset }
}

export function wrapProject(project: unknown): Record<string, unknown> {
  return { kind: PROJECT_KIND, version: SCHEMA_VERSION, project }
}

export function unwrap(obj: unknown, kind: string, errors: string[]): Record<string, unknown> | null {
  if (typeof obj !== "object" || obj === null) {
    errors.push("JSON payload must be an object")
    return null
  }
  const o = obj as Record<string, unknown>
  if (o.kind !== kind) errors.push(`kind must be '${kind}'`)
  else if (o.version !== SCHEMA_VERSION) errors.push(`unsupported version ${JSON.stringify(o.version)}`)
  else return o
  return null
}
