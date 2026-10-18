# Amendment 001 — Sketch Mode Single-Screen Layout & Optional References

Status: Accepted product clarification
Applies to: [Pixel Lab MVP v0.1](./MVP_SPEC.md)
Priority: Must-follow for P0 layout; reference board is optional
Date: 2026-10-18

## Decision

The sketch editor is **one continuous mobile screen**. The user draws in a large central workspace, sees the **real 32×32 pixel preview pinned in the upper-right**, and, when references are available, can see **four small reference thumbnails in a single horizontal row at the bottom**. Do not split sketching and references into different pages.

### Required P0 spatial hierarchy

```text
┌──────────────────────────────┐
│ Asset name      Undo  Redo  ⋯│
├──────────────────────────────┤
│                 ┌──────────┐ │
│                 │ 32×32    │ │
│                 │ LIVE     │ │
│                 │ PREVIEW  │ │
│                 └──────────┘ │
│                              │
│       CENTRAL SKETCH         │
│       DRAWING CANVAS         │
│       (maximum space)        │
│                              │
├──────────────────────────────┤
│ Pencil  Erase  Shape  Layers │
├──────────────────────────────┤
│ [ref 1][ref 2][ref 3][ref 4] │ ← OPTIONAL
├──────────────────────────────┤
│ Back            Export Sketch│
└──────────────────────────────┘
```

This is a spatial guideline, not a fixed-pixel wireframe. The preview may float/overlay the workspace without obstructing the active drawing area. Toolbars can condense responsively.

- Central drawing canvas gets the largest practical area and supports pinch zoom/pan.
- Preview stays visible and derives from the **same 32×32 pixel buffer** the user edits; no independently fabricated preview.
- One page; no navigation between sketch/reference/preview screens.
- Respect safe areas, dynamic browser height, touch target sizing and soft keyboard.
- No horizontal scrolling, and no mandatory vertical page scrolling during normal sketching.
- Controls should remain usable at iPhone portrait widths; prioritize canvas size over decorative UI.

## References — optional, not required for MVP

The user would like a 4×1 thumbnail strip **below the canvas**, not a 2×2 grid. However, **reference support must not delay P0 or the end-to-end rock demo**.

Recommended ordering:
1. **P0:** reserve a clean slot in layout design, but render no dummy references and require none to sketch/export.
2. **Optional P1:** import up to four local images; four thumbnails in one row; tap to enlarge and dismiss without losing sketch state. If there are fewer than four, show only those imported; collapsed/hidden when empty.
3. **P2:** select one reference for non-destructive semi-transparent trace overlay, opacity/scale controls, grayscale conversion, and persistence of reference metadata.
4. **Later:** externally AI-generated four-variant reference packs and possible generator integration.

Reference images are *guides only*: never burn them into exported sprite pixels or sketch data. Future tracing must be explicitly enabled, with the reference layer locked separately.

## Out-of-scope clarification

Do not build AI image generation or a reference search/gallery service for v0.1. A user can obtain references separately (including from an AI assistant). No remote provider credentials or paid API are required to run the editor.

## Acceptance checks

- At iPhone portrait viewport, edit the center canvas and simultaneously observe the actual 32×32 top-right preview.
- Sketch, undo, zoom and export work with **zero imported references**.
- No ordinary editing action requires page changes or viewport scrolling.
- If optional references are implemented, show up to four **in one row below the canvas**, support image enlargement, and preserve the canvas state.
- Verify a displayed reference cannot contaminate the final sprite export.

## Precedence

This amendment supersedes any earlier descriptions requiring a 2×2 Reference Board or making references a P0 requirement. All other MVP functionality and priority levels remain as specified in MVP_SPEC.md.
