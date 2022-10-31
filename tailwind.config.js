/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blueGreen: '#0e2e40',
        lightBlueGreen: '#26555e',
        yellowLight: '#a68a42',
        greenLight: '#409b9c',
        lightPink: '#a79bab',
      },
    },
    screens: {
      sm: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
