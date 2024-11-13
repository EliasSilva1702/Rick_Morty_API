/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('../public/Rm.jpeg')",
        "hero-img-2": "url('../public/Rm2.webp')",
      },
      fontFamily: {
        moderustic: ["Moderustic", "sans-serif"],
        host: ["Host Grotesk", "sans-serif"],
      },
    },
    plugins: [],
  },
};
