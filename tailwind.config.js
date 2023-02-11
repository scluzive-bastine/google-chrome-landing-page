/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#1967d2',
        },
      },
    },
  },
  plugins: [],
}
