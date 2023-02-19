/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#707070',
        'second':'#EDEFFC'
      },
    },
  },
  plugins: [],
}