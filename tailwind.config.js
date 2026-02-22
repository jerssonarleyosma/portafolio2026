/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // media si es preferencia del sistema
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#A2984A",
          600: "#F7DF1E",
        },
        secondary: {
          500: "#4A7378",
          600: "#1EDEF7",
        },
        accent: {
          a: "#F71E8D",
          b: "#784A62",
        },
        fondo: {
          a: "#b8f6ff",
          b: "#edfcff",
          c: "#fff6b2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // texto base
        heading: ["Manrope", "system-ui", "sans-serif"], // títulos
      },
    },
  },
  plugins: [],
};
