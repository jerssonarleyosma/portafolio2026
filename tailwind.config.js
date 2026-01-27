/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#F7DF1E", // color principal
          600: "#A2984A", // hover / active
        },
        secondary: {
          500: "#1EDEF7",
          600: "#4A7378",
        },
        accent: {
          400: "#F71E8D",
          500: "#784A62",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // texto base
        heading: ["Manrope", "system-ui", "sans-serif"], // títulos
      },
    },
  },
  plugins: [],
}

