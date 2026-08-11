import type { Config } from 'tailwindcss'
import { FOREST_SHADES } from './utils/colorScale'

/**
 * Barvy forest-50…forest-900 čtou hodnotu z CSS proměnných --forest-*
 * (nastavují se za běhu v app.vue podle useThemeColor()), takže je lze
 * kdykoli přebarvit bez rebuildu – návštěvník si je může doladit na
 * stránce Kontakt. Výchozí hodnota i logika přepočtu celé škály z jediné
 * hex barvy jsou v utils/colorScale.ts.
 *
 * `<alpha-value>` je placeholder, který Tailwind sám doplní za skutečnou
 * hodnotu při použití zápisu s průhledností, např. `bg-forest-50/60`.
 */
const forest = Object.fromEntries(
  FOREST_SHADES.map((shade) => [shade, `rgb(var(--forest-${shade}) / <alpha-value>)`]),
) as Record<string, string>

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
