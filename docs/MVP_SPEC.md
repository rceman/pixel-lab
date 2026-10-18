# Pixel Lab — Mobile Web MVP v0.1

Status: Draft implementation contract
Repository: `rceman/pixel-lab`
Platform: Mobile-first web, iPhone Safari primary, desktop responsive
Authoring resolution: 32×32 logical pixels
Default palette: DawnBringer 32 (DB32)

> Read [AMENDMENT_001_SKETCH_LAYOUT.md](./AMENDMENT_001_SKETCH_LAYOUT.md) alongside this specification. It clarifies the one-page mobile layout and makes reference images optional. Where the two conflict, the amendment takes precedence.

## Goal

Deliver a working vertical slice from a touch-drawn grayscale sketch to a sprite placed on a tile scene:

Scene → Sketch → export sketch JSON → import/procedurally generate 3D form JSON → rotate / lock camera → adjust light → grayscale pixel render → recolor using a DB32 material ramp → PNG export → place asset in scene.

The web editor must work **without any remote AI service**. AI-generated 3D is an external integration point, not a dependency for v0.1.

## Stack and boundaries

- Vue 3 + TypeScript + Vite.
- HTML Canvas 2D for sketching, pixel inspection, overrides, and scene compositing.
- Three.js for the small 3D form preview, orthographic camera, lighting, and shadow rendering.
- IndexedDB for local persistence; import/export versioned JSON and PNG.
- No accounts, backend, multiplayer, photorealistic renderer, or full mesh-modeling interface.
- Deploy as a static HTTPS site; actual deployment availability must be reported, not assumed.

## P0 — Complete functional vertical slice

### Scene view
- Open into a nonempty example 32×32 ground-tile grid (grass/dirt/stone).
- Show created assets on the grid at believable scale.
- Pan/zoom the scene, select/place/remove an asset, and enter Create New / Edit Asset.

### Sketch view
- Large interactive **32×32 logical pixel canvas** with touch drawing and a real, always-visible **32×32 live preview**.
- Pencil, eraser, lines, basic filled shapes, undo/redo, zoom/pan.
- Store grayscale paint, silhouette, optional height/plane hints, bounds, ground-contact anchor and object category.
- Make the grayscale values intentional and limited (default six shading indices) rather than arbitrarily anti-aliased RGB.
- Export and reimport versioned Sketch JSON without information loss.
- See [Amendment 001](./AMENDMENT_001_SKETCH_LAYOUT.md) for mandatory responsive arrangement.

### Agent-compatible form contract
- Define a documented JSON schema with coordinate system, units, origin/pivot, named primitives and/or indexed triangles (vertices and face indices).
- Provide a deterministic built-in rock generator or fixture so the complete flow works without calling AI.
- Import a form JSON file, validate it, show actionable errors, and render the imported result.
- Treat depth inferred from a 2D sketch as an **assumption**, never an exact measurement.

### 3D form and camera
- Touch rotate, pinch zoom, reset view, and a few preset angles.
- Use orthographic projection for final render.
- `Set Final View` saves camera and object transform, scale, framing, and ground anchor.
- No vertex manipulation or 3D modeling controls.

### Grayscale sprite rendering
- Render the chosen 3D view into exactly 32×32 opaque/transparent pixels as appropriate.
- Stable framing, no blurry upscaling; preview uses nearest-neighbor.
- Quantize into six grayscale shading levels by default.
- Keep object pixels separate from a cast-shadow layer so shadow can be recomputed independently.

## P1 — Lighting, materials, persistence

### Lighting and highlights
- One directional light with visible direction guide and ground-impact/shadow indication.
- Controls: azimuth, elevation, intensity, ambient, cast-shadow toggle/strength/softness.
- Default preset: daylight from upper left. Optional alternative presets later.
- Distinguish object self-shadow, ground cast-shadow and contact shadow.
- Edge-aware highlighting pass supports off, light-facing, hard-edge, rim, specular; adjustable strength and pixel width.
- Avoid glowing every edge; use authored edge/plane hints when available.

### Indexed palette materials
- One **master palette DB32**. Final opaque pixel colors must belong to DB32.
- Grayscale shade indices map to ordered material color ramps (LUT / indexed palette swapping), not generic RGB multiply tint.
- Initial materials: Stone, Coal, Iron Ore, Copper Ore, Gold Ore.
- Preserve the shape/camera while switching materials.
- Preserve per-material semantic names and visual distinguishability, including patterns/contrast beyond hue where practical.

### Save/export
- Persist scene placements, sketch, form, camera, lighting, materials and manual pixel corrections in IndexedDB.
- Export complete asset JSON, Sketch JSON, Form JSON, 32×32 transparent PNG and optional separate shadow PNG.
- Reopening the app must preserve editable source data.

## P1 optional / P2 — Reference Board

A four-thumbnail horizontal reference strip under the sketch is **optional** and **not a release blocker**. It can be implemented if low risk, but the drawing workflow must remain usable with zero reference images. See Amendment 001 for layout and later features.

## Accessibility and mobile constraints

- iPhone Safari portrait first; works on desktop and landscape.
- Respect safe areas and dynamic viewport; avoid normal-workflow page scrolling.
- Drawing touch gestures cannot accidentally scroll the page.
- Never communicate essential state using red vs green color alone. Use text/shape/icon and strong luminance differences.
- The final sprite preview must show actual output pixels, not an artistic approximation.

## Acceptance test

On a mobile viewport, create a ~12×12 rock in a 32×32 tile; draw and see the live preview; export sketch; generate or import a valid rock form; rotate and lock camera; render grayscale; apply the five material ramps; export PNG; place sprite on grass tiles; reload and verify persistence. State explicitly which steps are P0 versus P1, and which were executed on real Safari versus emulation.

Do not substitute a static screenshot or nonfunctional placeholder for any claimed complete capability.

## Delivery

Source in feature branch (no automatic merge), reproducible build/test instructions, actual HTTPS demo URL if deployed, sample Sketch/Form JSON fixtures, schema docs, visual proof and known limitations.
