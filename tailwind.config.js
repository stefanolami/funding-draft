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
          focus: '#348CB0'
        },
        mygreen: {
          DEFAULT: '#70BC98',
          light: '#82D6AE'
        },
        mygrey: {
          DEFAULT: '#6A95C5'
        }
      }
    },
  },
  plugins: [],
}
