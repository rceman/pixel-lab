// JSON/PNG import-export helpers (spec §4, §10).
import { GRID, NCELLS } from "./schemas"

export function downloadJson(obj: unknown, filename: string) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" })
  downloadBlob(blob, filename)
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 4000)
}

/** RGBA 32x32 -> transparent PNG download (nearest-neighbor, no AA). */
export function downloadRgbaPng(rgba: Uint8ClampedArray | Uint8Array, filename: string) {
  const c = document.createElement("canvas")
  c.width = GRID; c.height = GRID
  const ctx = c.getContext("2d")!
  ctx.putImageData(new ImageData(new Uint8ClampedArray(rgba), GRID, GRID), 0, 0)
  c.toBlob((b) => b && downloadBlob(b, filename), "image/png")
}

export function pickJsonFile(): Promise<unknown | null> {
  return new Promise((resolve) => {
    const inp = document.createElement("input")
    inp.type = "file"
    inp.accept = "application/json,.json"
    inp.onchange = async () => {
      const f = inp.files?.[0]
      if (!f) return resolve(null)
      try {
        resolve(JSON.parse(await f.text()))
      } catch {
        resolve(null)
      }
    }
    inp.oncancel = () => resolve(null)
    inp.click()
  })
}
