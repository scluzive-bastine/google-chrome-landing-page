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
      maxWidth: {
        1440: '1440px',
      },
      dropShadow: {
        '3xl': '11px 17px 0 rgba(32, 33, 37, 0.28)',
      },
    },
  },
  plugins: [],
}
