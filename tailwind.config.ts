import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f5f0',
          100: '#e1e8dc',
          200: '#c3d1ba',
          300: '#9fb591',
          400: '#7a9669',
          500: '#5c7a4c',
          600: '#46603a',
          700: '#384c2f',
          800: '#2c3b25',
          900: '#22301c',
        },
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
