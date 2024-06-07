/** @type {import('tailwindcss').Config} */
export default {
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
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
module.exports = {
  // other options ...
  plugins: [
    require('flowbite/plugin')
  ],
}
module.exports = {
  content: [
    // other files...
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
}