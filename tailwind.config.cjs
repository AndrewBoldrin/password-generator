/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#121117",
        bgSecondary: "#24232b",
        primaryText: "#b8b6bf",
        secondaryText: "#75737f",
        ternaryText: "#adfbb7",
        ternaryHover: "#76da83",
      },
    },
  },
  plugins: [],
};
