// Procedural 3D form generators — the local fallback for the sketch->form
// contract (spec §5). The silhouette is the front view (x = horizontal,
// y = up); depth is the dimension a 2D silhouette cannot determine, taken
// from depthHint * bounds — the same reasonable assumption an external
// agent is allowed to make.
//
// World frame: the 32x32 tile maps to x in [0,32], y in [0,32]; cell (cx,cy)
// covers x in [cx,cx+1], y in [31-cy, 32-cy]. Depth is centered on z=16.
// Ground anchor row maps to world y = 31 - anchor.y.
import type { FormData, FormMesh, SketchData } from "./schemas.ts"
import { GRID, recomputeBounds } from "./schemas.ts"

export function groundYWorld(anchorY: number): number {
  return GRID - 1 - anchorY
}

function hash01(i: number): number {
  return ((Math.imul(i, 2654435761) >>> 0) / 4294967296)
}

/** Silhouette -> irregular blocky extrusion with per-cell depth taper.
 * Deterministic: same sketch always produces the same mesh. */
export function generateRock(sketch: SketchData, name = "rock"): FormData {
  const sil = sketch.silhouette
  const cells: number[] = []
  for (let i = 0; i < sil.length; i++) if (sil[i]) cells.push(i)
  const gy = groundYWorld(sketch.groundAnchor.y)
  if (!cells.length) {
    return {
      meshes: [],
      units: "pixels",
      coordinateSystem: "right-handed-y-up",
      groundAnchor: { x: sketch.groundAnchor.x, y: gy, z: 16 },
    }
  }
  recomputeBounds(sketch)
  const b = sketch.bounds ?? { x: 0, y: 0, w: 1, h: 1 }
  const depth = Math.max(3, sketch.depthHint * Math.max(b.w, b.h))

  const positions: number[] = []
  const faces: number[][] = []

  function emitQuad(v0: number[], v1: number[], v2: number[], v3: number[]) {
    const base = positions.length / 3
    positions.push(...v0, ...v1, ...v2, ...v3)
    faces.push([base, base + 1, base + 2], [base, base + 2, base + 3])
  }

  const hh = sketch.heightHints
  for (const i of cells) {
    const cx = i % GRID
    const cy = Math.floor(i / GRID)
    const taper = 0.7 + 0.3 * hash01(i)
    const zf = 16 + (depth / 2) * taper
    const zb = 16 - (depth / 2) * taper
    const x0 = cx, x1 = cx + 1
    const y0 = GRID - 1 - cy
    let y1 = GRID - cy
    // height hints raise the exposed top edge
    if (hh && hh[i] && (cy === 0 || !sil[(cy - 1) * GRID + cx])) y1 += (hh[i] / 255) * depth * 0.6
    // front (+z) and back (-z), wound outward
    emitQuad([x0, y0, zf], [x1, y0, zf], [x1, y1, zf], [x0, y1, zf])
    emitQuad([x0, y0, zb], [x0, y1, zb], [x1, y1, zb], [x1, y0, zb])
    // sides where the neighbor is empty
    const nbrs: [number, number, number[][]][] = [
      [cx - 1, cy, [[x0, y0, zf], [x0, y1, zf], [x0, y1, zb], [x0, y0, zb]]],
      [cx + 1, cy, [[x1, y0, zf], [x1, y0, zb], [x1, y1, zb], [x1, y1, zf]]],
      [cx, cy - 1, [[x0, y1, zf], [x1, y1, zf], [x1, y1, zb], [x0, y1, zb]]],
      [cx, cy + 1, [[x0, y0, zf], [x0, y0, zb], [x1, y0, zb], [x1, y0, zf]]],
    ]
    for (const [nx, ny, q] of nbrs) {
      if (nx < 0 || nx >= GRID || ny < 0 || ny >= GRID || !sil[ny * GRID + nx])
        emitQuad(q[0], q[1], q[2], q[3])
    }
  }

  return {
    meshes: [{ name, positions, faces, region: "body" }],
    units: "pixels",
    coordinateSystem: "right-handed-y-up",
    groundAnchor: { x: sketch.groundAnchor.x, y: gy, z: 16 },
  }
}

/** Fallback rock when no sketch exists: subdivided, deformed octahedron.
 * Deterministic per seed; used for starter-scene sprites and fixtures. */
export function generateBlob(
  name = "rock",
  seed = 7,
  radius = 6,
  center: [number, number, number] = [16, 8, 16],
): FormData {
  const verts: number[][] = [
    [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
  ]
  let faces: number[][] = [
    [0, 2, 4], [2, 1, 4], [1, 3, 4], [3, 0, 4],
    [2, 0, 5], [1, 2, 5], [3, 1, 5], [0, 3, 5],
  ]
  const mid = new Map<string, number>()
  function midpoint(a: number, b: number): number {
    const key = a < b ? `${a}_${b}` : `${b}_${a}`
    const got = mid.get(key)
    if (got !== undefined) return got
    const va = verts[a], vb = verts[b]
    const m = [(va[0] + vb[0]) / 2, (va[1] + vb[1]) / 2, (va[2] + vb[2]) / 2]
    const n = Math.hypot(m[0], m[1], m[2])
    verts.push([m[0] / n, m[1] / n, m[2] / n])
    mid.set(key, verts.length - 1)
    return verts.length - 1
  }
  const next: number[][] = []
  for (const [a, b, c] of faces) {
    const ab = midpoint(a, b), bc = midpoint(b, c), ca = midpoint(c, a)
    next.push([a, ab, ca], [ab, b, bc], [ca, bc, c], [ab, bc, ca])
  }
  faces = next

  const positions: number[] = []
  verts.forEach((v, idx) => {
    const r = radius * (0.78 + 0.22 * hash01(seed * 1000 + idx))
    positions.push(
      center[0] + v[0] * r,
      center[1] + v[1] * r * 0.8,
      center[2] + v[2] * r * (0.85 + 0.15 * hash01(idx)),
    )
  })
  const mesh: FormMesh = { name, positions, faces, region: "body" }
  return {
    meshes: [mesh],
    units: "pixels",
    coordinateSystem: "right-handed-y-up",
    groundAnchor: { x: 16, y: 0, z: 16 },
  }
}
