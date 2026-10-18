// End-to-end acceptance test (spec §11) — mobile viewport + real touch.
// Drives: scene -> sketch -> export -> agent form gen -> import -> rotate ->
// lock camera -> light changes -> grayscale render -> material switch ->
// pixel cleanup -> export PNG -> place in scene -> reload persistence.
import { chromium } from "playwright"
import { execFileSync } from "node:child_process"
import { writeFileSync, mkdirSync, readFileSync } from "node:fs"

const BASE = process.env.APP_URL ?? "http://localhost:4173/pixel-lab/"
const SHOTS = "docs/screenshots"
mkdirSync(SHOTS, { recursive: true })
mkdirSync("/tmp/pl-dl", { recursive: true })

const browser = await chromium.connectOverCDP("http://localhost:29229")
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
  acceptDownloads: true,
})
const page = await ctx.newPage()
const cdp = await ctx.newCDPSession(page)

async function shot(name) {
  await page.screenshot({ path: `${SHOTS}/${name}.png` })
  console.log("shot", name)
}

async function touchTap(x, y) {
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x, y }] })
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] })
}

async function touchDrag(x0, y0, x1, y1, steps = 12) {
  await cdp.send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [{ x: x0, y: y0 }] })
  for (let i = 1; i <= steps; i++) {
    await cdp.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: x0 + ((x1 - x0) * i) / steps, y: y0 + ((y1 - y0) * i) / steps }],
    })
    await page.waitForTimeout(16)
  }
  await cdp.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] })
}

async function tapText(text) {
  const loc = page.locator(`button:has-text("${text}")`).first()
  await loc.waitFor({ state: "visible", timeout: 8000 })
  const box = await loc.boundingBox()
  await touchTap(box.x + box.width / 2, box.y + box.height / 2)
}

// ---- 1. scene opens with grass tiles ----
await page.goto(BASE, { waitUntil: "networkidle" })
await page.waitForTimeout(1500)
await shot("01-scene")

// ---- 2. Create New -> sketch ----
await tapText("+ Create New")
await page.waitForTimeout(600)
await shot("02-sketch")

// ---- 3. draw a rough 12x12 rock silhouette with touch ----
// canvas fills workspace; grid is centered. Compute cell->screen coords in-page.
const geom = await page.evaluate(() => {
  const c = document.querySelector(".canvas-host canvas")
  const r = c.getBoundingClientRect()
  const dpr = c.width / r.width
  const zoom = Math.min(c.width, c.height) / 36
  const x0 = (c.width - 32 * zoom) / 2
  const y0 = (c.height - 32 * zoom) / 2
  return { left: r.left, top: r.top, dpr, zoom, x0, y0 }
})
const cell = (cx, cy) => ({
  x: geom.left + (geom.x0 + (cx + 0.5) * geom.zoom) / geom.dpr,
  y: geom.top + (geom.y0 + (cy + 0.5) * geom.zoom) / geom.dpr,
})
// rough blob rows 10..21, cols 10..21 — a few strokes
for (let y = 10; y <= 21; y++) {
  const a = cell(10, y), b = cell(21, y)
  await touchDrag(a.x, a.y, b.x, b.y, 8)
}
await page.waitForTimeout(400)
await shot("03-sketch-drawn")

// ---- 5. export sketch JSON ----
const dl1 = page.waitForEvent("download")
await tapText("Export sketch")
const sketchFile = await dl1
const sketchPath = "/tmp/pl-dl/rock-sketch.json"
await sketchFile.saveAs(sketchPath)

// ---- 5b. Amendment 001: reference strip — import, enlarge, dismiss ----
const refPng = "/tmp/pl-dl/ref.png"
writeFileSync(refPng, Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==", "base64"))
await page.locator('input[type="file"][hidden]').setInputFiles(refPng)
await page.waitForTimeout(600)
const nThumbs = await page.locator(".ref-thumb").count()
console.log("REF thumbs:", nThumbs)
await page.locator(".ref-thumb").first().tap()
await page.waitForTimeout(400)
await shot("02b-ref-enlarged")
await page.locator(".ref-overlay").tap()
await page.waitForTimeout(300)
// contamination check: exported sketch JSON must not contain reference data
const sk = JSON.parse(readFileSync(sketchPath, "utf8"))
console.log("SKETCH clean:", sk.references === undefined, "| keys:", Object.keys(sk).join(","))

// ---- 6. external agent: sketch -> form JSON ----
const formJson = execFileSync("node", ["scripts/agent_form_gen.ts", sketchPath], { encoding: "utf8" })
const formPath = "/tmp/pl-dl/rock-form.json"
writeFileSync(formPath, formJson)

// ---- 7. Form view ----
await tapText("Generate 3D Form →")
await page.waitForTimeout(900)
await shot("04-form")
// import the agent-produced form via the file chooser
const chooser = page.waitForEvent("filechooser")
await tapText("Import form")
await (await chooser).setFiles(formPath)
await page.waitForTimeout(600)
// rotate with a real touch drag
await touchDrag(195, 400, 280, 340, 14)
await page.waitForTimeout(300)
await shot("05-form-rotated")
// lock the camera
await tapText("Set Final View →")
await page.waitForTimeout(700)
await shot("06-light")

// ---- 8. lighting: change azimuth + shadow ----
await page.evaluate(() => {
  const sliders = [...document.querySelectorAll('input[type="range"]')]
  const az = sliders[0]
  az.value = "-110"
  az.dispatchEvent(new Event("input", { bubbles: true }))
})
await page.waitForTimeout(500)
await shot("07-light-moved")
// edge highlight: specular accent
await tapText("Specular")
await page.waitForTimeout(300)

// ---- 9. render grayscale -> material ----
await tapText("Render grayscale →")
await page.waitForTimeout(900)
await shot("08-material")
// switch through all five materials via the material chips
for (const m of ["Coal", "Iron Ore", "Copper Ore", "Gold Ore", "Stone"]) {
  await tapText(m)
  await page.waitForTimeout(350)
}
await shot("09-material-stone")

// ---- 10. Sprite: pixel cleanup + export PNG ----
await tapText("Sprite →")
await page.waitForTimeout(600)
// paint a few override pixels with the brightest level
await page.locator(".swatch").last().tap()
const c2 = await page.evaluate(() => {
  const c = document.querySelector(".canvas-host canvas")
  const r = c.getBoundingClientRect()
  const dpr = c.width / r.width
  const zoom = Math.min(c.width, c.height) / 36
  return { left: r.left, top: r.top, dpr, zoom, x0: (c.width - 32 * zoom) / 2, y0: (c.height - 32 * zoom) / 2 }
})
const ccell = (cx, cy) => ({
  x: c2.left + (c2.x0 + (cx + 0.5) * c2.zoom) / c2.dpr,
  y: c2.top + (c2.y0 + (cy + 0.5) * c2.zoom) / c2.dpr,
})
for (const [x, y] of [[12, 12], [13, 12], [19, 17]]) {
  const p = ccell(x, y)
  await touchTap(p.x, p.y)
}
const dl2 = page.waitForEvent("download")
await tapText("PNG")
const png = await dl2
await png.saveAs("/tmp/pl-dl/rock-32.png")
await shot("10-sprite")

// ---- 11. place in scene ----
await tapText("Place in scene →")
await page.waitForTimeout(600)
// tap near the center of the scene canvas — the tile grid is auto-fit and
// centered, so dead-center always lands on a tile
const sg = await page.evaluate(() => {
  const c = document.querySelector(".canvas-host canvas")
  const r = c.getBoundingClientRect()
  return { left: r.left, top: r.top, w: r.width, h: r.height, cw: c.width, ch: c.height }
})
await touchTap(sg.left + sg.w * 0.5, sg.top + sg.h * 0.5)
await page.waitForTimeout(500)
await shot("11-scene-placed")

// ---- 12. reload -> persistence ----
await page.reload({ waitUntil: "networkidle" })
await page.waitForTimeout(1600)
await shot("12-reloaded")

const saved = await page.evaluate(() => new Promise((res) => {
  const r = indexedDB.open("pixel-lab", 1)
  r.onsuccess = () => {
    const tx = r.result.transaction("kv", "readonly")
    tx.objectStore("kv").get("pixel-lab/project/v1").onsuccess = (e) => {
      const p = e.target.result
      res({
        assets: Object.values(p.assets).map((a) => ({
          name: a.name, hasLevels: !!a.levels, formSource: a.formSource,
        })),
        placements: p.scene.placements.length,
      })
    }
  }
}))
console.log("PERSISTED", JSON.stringify(saved))
await ctx.close()
await browser.close()
console.log("E2E DONE")
