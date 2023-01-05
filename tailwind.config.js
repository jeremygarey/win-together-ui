/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{vue, html}"],
  theme: {
    colors: {
      transparent: "transparent",
      green: "#8CC63F",
      darkergreen: "#77ab33",
      white: colors.white,
      black: colors.black,
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
    extend: {
      keyframes: {
        slidefromleft: {
          "0%": {
            opacity: "0%",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateX(0px)",
          },
        },
        slidefromright: {
          "0%": {
            opacity: "0%",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateX(0px)",
          },
        },
        slidefrombottom: {
          "0%": {
            opacity: "0%",
            transform: "translateY(80px)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        slidefromleft:
          "slidefromleft 900ms forwards cubic-bezier(.3,.03,.17,.98)",
        slidefromright:
          "slidefromright 900ms forwards cubic-bezier(.3,.03,.17,.98)",
        slidefrombottom:
          "slidefrombottom 900ms forwards cubic-bezier(.3,.03,.17,.98)",
      },
    },
  },
  plugins: [],
};
