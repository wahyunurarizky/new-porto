// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        passion: ['Passion One', 'sans-serif']
      },
      colors: {
        arzky: {
          navy: '#071952',
          navylight: '#0B2578',
          primary: '#82CAC9',
          primary2: '#0B666A',
          bluegrey: '#7487A2'
        }
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '1px 0 0  var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)'
      },
      screens: {
        tablet: '550px',
        laptop: '1024px',
        pc: '1440px',
        jumbotron: '1920px'
      },
      boxShadow: {
        v1: '0px 3px 10px 0px rgba(0, 0, 0, 0.25);'
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )

      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ]
}
