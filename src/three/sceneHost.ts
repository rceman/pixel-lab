// Shared FormScene instance — Form and Light views mount the same renderer
// so camera/light state persists across step changes.
import { FormScene } from "./formScene"

let fs: FormScene | null = null

export function getScene(): FormScene {
  if (!fs) fs = new FormScene()
  // testability hook: lets e2e/tests inspect the live camera/light state
  ;(window as unknown as Record<string, unknown>).__pixelLabScene = fs
  return fs
}
