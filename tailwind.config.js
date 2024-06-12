/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.{js,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customOrange: {
          '300': '#f3bd7f',
          '400': '#E98824',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
