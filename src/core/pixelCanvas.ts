// Shared pixel-canvas helpers: nearest-neighbor blit, pointer -> cell math,
// pinch gesture bookkeeping. All visible pixels stay crisp (spec §2).
import { GRID } from "./schemas"

export function drawRgbaNN(
  ctx: CanvasRenderingContext2D,
  rgba: Uint8ClampedArray | Uint8Array,
  x: number, y: number, scale: number,
) {
  const src = document.createElement("canvas")
  src.width = GRID; src.height = GRID
  src.getContext("2d")!.putImageData(new ImageData(new Uint8ClampedArray(rgba), GRID, GRID), 0, 0)
  ctx.imageSmoothingEnabled = false
  ctx.drawImage(src, x, y, GRID * scale, GRID * scale)
}

/** Map a pointer event to a grid cell given the view transform. */
export function cellFromEvent(
  e: PointerEvent | { clientX: number; clientY: number },
  canvas: HTMLCanvasElement,
  view: { x: number; y: number; zoom: number },
): { x: number; y: number } | null {
  const r = canvas.getBoundingClientRect()
  const sx = (e.clientX - r.left) * (canvas.width / r.width)
  const sy = (e.clientY - r.top) * (canvas.height / r.height)
  const cx = Math.floor((sx - view.x) / view.zoom)
  const cy = Math.floor((sy - view.y) / view.zoom)
  if (cx < 0 || cx >= GRID || cy < 0 || cy >= GRID) return null
  return { x: cx, y: cy }
}

export interface PinchState {
  p1: { id: number; x: number; y: number } | null
  p2: { id: number; x: number; y: number } | null
  startDist: number
  startZoom: number
  startMid: { x: number; y: number }
}

export function newPinch(): PinchState {
  return { p1: null, p2: null, startDist: 0, startZoom: 1, startMid: { x: 0, y: 0 } }
}
