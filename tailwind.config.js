/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
          'gray-dark': '#121212',
          'widia-lime': '#957f0b'
      },
      fontFamily: {
          sans: "San Francisco Bold",
          sfbold: "San Francisco Bold",
          pop: "Poppins Medium",
          poplight: "Poppins Light",
      }
    },
  },
  plugins: [],
}

