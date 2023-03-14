/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/html/index.html', './src/html/editing.html', './src/html/home.html', './src/html/newsroom.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#399AC2',
          dark: '#1C4C6A',
          dark2: '#26476C',
        }
      }
    },
  },
  plugins: [],
}