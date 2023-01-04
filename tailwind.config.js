/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{vue, html}"],
  theme: {
    colors: {
      transparent: "transparent",
      green: "#8CC63F",
      white: colors.white,

      gray: {
        50: "#f7f7f7",
        100: "#ededed",
        200: "#e4e4e4",
        300: "#c6c6c6",
        400: "#a9a9a9",
        500: "#8b8b8b",
        600: "#6e6e6e",
        700: "#515151",
        800: "#333333",
        900: "#161616",
      },
    },
    extend: {},
  },
  plugins: [],
};
