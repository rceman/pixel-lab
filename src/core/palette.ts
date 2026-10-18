// DawnBringer-32 master palette (spec §9): every final opaque sprite color
// must be a member. Canonical DB32 order, index 0 darkest.
export const DB32: readonly string[] = [
  "#000000", "#222034", "#45283c", "#663931",
  "#8f563b", "#df7126", "#d9a066", "#eec39a",
  "#fbf236", "#99e550", "#6abe30", "#37946e",
  "#4b692f", "#524b24", "#323c39", "#3f3f74",
  "#306082", "#5b6ee1", "#639bff", "#5fcde4",
  "#cbdbfc", "#ffffff", "#9badb7", "#847e87",
  "#696a6a", "#595652", "#76428a", "#ac3232",
  "#d95763", "#d77bba", "#8f974a", "#8a6f30",
]

const DB32_SET = new Set(DB32.map((c) => c.toLowerCase()))

export function isDb32(hex: string): boolean {
  return typeof hex === "string" && DB32_SET.has(hex.toLowerCase())
}

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "")
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex)
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
}

export function sortDarkToLight(colors: string[]): string[] {
  return [...colors].sort((a, b) => luminance(a) - luminance(b))
}
