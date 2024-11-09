/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'moderustic': ['Moderustic', 'sans-serif'],
      'host': ['Host Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
}