/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
