
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F5F1EC',
        beige: '#E4D3C4',
        tan: '#C9A890',
        espresso: '#5C4633'
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Work Sans'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
}
