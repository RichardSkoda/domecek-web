import type { Config } from 'tailwindcss'

type Shade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
type ColorScale = Record<Shade, string>

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

function hslToHex(h: number, s: number, l: number): string {
  s /= 100
  l /= 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  const toHex = (n: number) => Math.round(f(n) * 255).toString(16).padStart(2, '0')
  return `#${toHex(0)}${toHex(8)}${toHex(4)}`
}

/**
 * Odstín (hue) a sytost (saturation) škály se vezmou z jediné `baseHex` barvy,
 * jas (lightness) jednotlivých kroků je pevná křivka okopírovaná z původní
 * ručně laděné palety – díky tomu má vygenerovaná škála stejný "feel" jako předtím.
 */
const SHADE_LIGHTNESS: ColorScale = {
  50: '95', 100: '89', 200: '77', 300: '64', 400: '50',
  500: '39', 600: '30', 700: '24', 800: '19', 900: '15',
}

function generateScale(baseHex: string): ColorScale {
  const [h, s] = hexToHsl(baseHex)
  return Object.fromEntries(
    Object.entries(SHADE_LIGHTNESS).map(([step, l]) => [step, hslToHex(h, s, Number(l))]),
  ) as ColorScale
}

/**
 * JEDINÝ parametr hlavní (zelené) barvy webu.
 * Změň tenhle hex a celá škála forest-50…forest-900 (a s ní i barvy
 * datepickeru v assets/css/main.css, který ji čte přes theme()) se přepočítá sama.
 */
// const FOREST_BASE = '#5c7a4c'
const FOREST_BASE = '#0099CC'

const forest = generateScale(FOREST_BASE)

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        forest,
        sand: {
          50: '#fdfbf7',
          100: '#faf6ee',
          200: '#f3ead9',
          300: '#e9dabf',
          400: '#dbc19a',
          500: '#c9a473',
          600: '#b3875a',
          700: '#8f6a47',
          800: '#6c5039',
          900: '#4a372a',
        },
        clay: {
          400: '#c1774f',
          500: '#a85f3b',
          600: '#8c4c2e',
        },
        ink: {
          700: '#3a362f',
          800: '#2a2721',
          900: '#1c1a16',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
}
