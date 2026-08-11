export const FOREST_SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const
export type ForestShade = (typeof FOREST_SHADES)[number]

/**
 * Výchozí hlavní barva webu. Návštěvník si ji může na stránce Kontakt
 * dočasně přeladit — viz useThemeColor().
 */
export const DEFAULT_FOREST_COLOR = '#0099CC'

/**
 * Jas (lightness) jednotlivých kroků škály je pevná křivka okopírovaná
 * z původní ručně laděné palety — díky tomu má vygenerovaná škála stejný
 * "feel" jako předtím, ať už je základní odstín jakýkoli.
 */
const SHADE_LIGHTNESS: Record<ForestShade, number> = {
  50: 95, 100: 89, 200: 77, 300: 64, 400: 50,
  500: 39, 600: 30, 700: 24, 800: 19, 900: 15,
}

export function isValidHexColor(value: string): boolean {
  return /^#[0-9a-f]{6}$/i.test(value)
}

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, Math.round(l * 100)]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h: number
  switch (max) {
    case r: h = (g - b) / d + (g < b ? 6 : 0); break
    case g: h = (b - r) / d + 2; break
    default: h = (r - g) / d + 4
  }
  return [Math.round(h * 60), Math.round(s * 100), Math.round(l * 100)]
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  s /= 100
  l /= 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
}

/**
 * Z jediné hex barvy odvodí RGB triplety (bez `rgb()` obálky — jde přímo
 * do CSS proměnných --forest-*, které pak Tailwind i main.css čtou) pro
 * celou škálu forest-50…forest-900. Odstín a sytost se berou z `baseHex`,
 * jas jednotlivých kroků je pevná křivka viz SHADE_LIGHTNESS.
 */
export function generateForestRgbScale(baseHex: string): Record<ForestShade, string> {
  const [h, s] = hexToHsl(baseHex)
  return Object.fromEntries(
    FOREST_SHADES.map((shade) => {
      const [r, g, b] = hslToRgb(h, s, SHADE_LIGHTNESS[shade])
      return [shade, `${r} ${g} ${b}`]
    }),
  ) as Record<ForestShade, string>
}
