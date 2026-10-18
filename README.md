# Pixel Lab

Mobile-first web tool for authoring 32×32 pixel-art game sprites via a
guided pipeline:

**Scene → Sketch → 3D Form → Camera → Lighting → Grayscale → Material → Sprite**

You draw a 2D grayscale sketch, turn it into a simple 3D form (locally
generated or produced by an external AI agent over a JSON contract), frame it
with an orthographic camera, light it, quantize it to a 6-level grayscale
sprite, recolor it through DawnBringer-32 material ramps, hand-edit pixels,
and drop it into a tile scene. Everything persists in IndexedDB — no backend,
no accounts.

## Run

```bash
npm install
npm run dev        # vite dev server
npm run build      # type-check (vue-tsc) + production build to dist/
npm run preview    # serve the production build (http://localhost:4173/pixel-lab/)
npm test           # vitest: schemas, materials, postfx
node scripts/e2e.mjs   # full acceptance flow against the preview build
                       # (needs a Chromium CDP endpoint on localhost:29229)
```

Static deploy: `dist/` is self-contained; set `base` in `vite.config.ts` to
match the hosting path (`/pixel-lab/` for GitHub Pages). It's a PWA — after
first load it works offline.

## Architecture

| Module | Role |
|---|---|
| `src/core/palette.ts` | DawnBringer-32 palette, color utils |
| `src/core/materials.ts` | 5 materials (Stone, Coal, Iron/Copper/Gold Ore) as ordered grayscale→DB32 ramps |
| `src/core/schemas.ts` | Versioned JSON schemas + validation for sketch / form / asset / project |
| `src/core/rockgen.ts` | Procedural local rock generator (sketch silhouette → blocky extrusion) |
| `src/core/postfx.ts` | CPU post-processing: grayscale quantize, edge highlights, contact shadow, pixel overrides, compositing |
| `src/core/pipeline.ts` | `runRender`: WebGL capture → 32×32 levels → postfx → sprite |
| `src/core/store.ts` | Reactive project state, starter scene/asset, autosave |
| `src/core/idb.ts` | IndexedDB persistence (`pixel-lab/project/v1`) |
| `src/three/formScene.ts` | Shared Three.js scene: ortho camera, directional light + gizmo, shadow-capture render passes, 32×32 render target |
| `src/components/*` | One view per pipeline step + always-on preview pane |

Key design choices:

- **The preview pane always shows the real 32×32 output** — the actual
  level map, never an approximation (falls back to the sketch silhouette
  before first render).
- **Edge highlights run on the CPU** (`postfx.ts`), not shaders: silhouette
  edges are detected by missing 4-neighbors, dotted against the
  screen-projected light direction for `light-facing` / `rim` / `specular` /
  `hard` modes. Pixel-exact and testable.
- **The cast shadow is a real Three.js shadow map** on a ground plane,
  captured in a separate render pass into its own alpha layer (object hidden
  via `colorWrite=false`, which keeps it in the shadow map). The shadow PNG
  can be exported independently.
- **Two render passes** into a 32×32 render target: pass A = object only
  (transparent bg), pass B = shadow layer.

## JSON contracts

All formats are versioned (`schemaVersion: 1`) with a `kind` tag.
`validateSketch` / `validateForm` return readable error strings.

### Sketch JSON (`pixel-lab-sketch`)

```jsonc
{
  "kind": "pixel-lab-sketch", "schemaVersion": 1,
  "name": "rock",
  "objectType": "rock",
  "depthHint": 0.5,              // 0..1, relative depth vs silhouette size
  "groundAnchor": { "x": 16, "y": 31 },  // cell coords, y = contact line
  "bounds": { "x": 10, "y": 10, "w": 12, "h": 12 },
  "silhouette": "<base64>",      // 1024 bits, row-major, packed bytes
  "heightHints": "<base64>",     // optional: 1024 uint8 height hint map
  "edgeHints": "<base64>"        // optional: 1024 bits edge/plane hints
}
```

A silhouette alone does **not** determine 3D geometry — `depthHint`,
`heightHints` and `edgeHints` carry the extra information an agent needs.

### Form JSON (`pixel-lab-form`)

```jsonc
{
  "kind": "pixel-lab-form", "schemaVersion": 1,
  "name": "rock",
  "units": "pixels",
  "coordinateSystem": "right-handed-y-up",
  "groundAnchor": { "x": 16, "y": 10, "z": 16 },  // world coords, y = ground
  "meshes": [{
    "name": "rock",
    "positions": [x, y, z, ...],   // world coords, 32-unit tile space
    "faces": [[i0, i1, ...], ...]  // n-gon index lists into positions/3
  }]
}
```

### Asset JSON (`pixel-lab-asset`) / Project JSON (`pixel-lab-project`)

`asset` wraps everything per sprite: `sketch`, `form`, `camera`
(yaw/pitch/orthoScale/offsets + independent `objYaw/Pitch/Roll`), `light`,
`edge`, `materialId` + `rampOverrides`, `levels` (grayscale result),
`shadowAlpha`, `overrides` (manual pixel edits), `contrast`, `formSource`.
`project` wraps `{ assets, order, scene, sharedLight }` — the scene holds the
tile grid + sprite placements.

## External agent contract

`Export sketch` produces the sketch JSON above — consumable programmatically,
no screenshots or browser automation needed. An agent returns form JSON which
is imported via `Import form` (validated on import). Reference implementation:

```bash
node scripts/agent_form_gen.ts rock-sketch.json > rock-form.json
```

(`node ≥ 22` runs the .ts file directly.) The same generator backs the in-app
"Generate" button, so the procedural fallback always produces a valid,
importable form. `docs/fixtures/` contains a worked example pair.

## Testing

`scripts/e2e.mjs` runs the spec §11 acceptance flow end-to-end on a real
Chromium (mobile viewport 390×844, dpr 3, `isMobile`, real
`Input.dispatchTouchEvent` touch events — tap, drag, pinch): draw → export
sketch → agent form → import → rotate → lock → light → render → materials →
overrides → PNG → place → reload persistence. Screenshots land in
`docs/screenshots/`.

Tested on mobile-emulated Chromium. **No genuine iPhone Safari device was
available** — Safari-specific quirks (e.g. IndexedDB eviction under pressure)
are untested.

## Known limitations

- One directional light only (spec non-goal: no multi-light).
- Materials recolor via fixed ramps; no per-pixel material masks yet (P2).
- Procedural rock generator produces blocky extrusions, not organic shapes —
  the agent path exists to improve on it.
- PWA offline: works after first visit; iOS "Add to Home Screen" untested.
- Scene tiles use procedural DB32 textures; no custom tile art upload.
