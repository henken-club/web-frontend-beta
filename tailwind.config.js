const colors = require("tailwindcss/colors");

/** @type {import('@types/tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  purge: ["./src/**/*.{jsx,tsx}"],
  darkMode: "media",
  plugins: [],
  theme: {
    zIndex: {
      minus: -1,
      0: 0,
      1: 1,
      infinity: 2147483647,
    },
    extend: {
      colors: {
        gray: colors.blueGray,
        cyan: colors.cyan,

        "henken-from": {
          pale: colors.teal[50],
          light: colors.teal[200],
          normal: colors.teal[400],
          dark: colors.teal[700],
        },

        "henken-to": {
          pale: colors.pink[50],
          light: colors.pink[200],
          normal: colors.pink[400],
          dark: colors.pink[800],
        },

        book: {
          pale: colors.emerald[50],
          light: colors.emerald[200],
          normal: colors.emerald[500],
          dark: colors.emerald[800],
        },
        "book-series": {
          pale: colors.sky[50],
          light: colors.sky[200],
          normal: colors.sky[500],
          dark: colors.sky[800],
        },
        author: {
          pale: colors.amber[50],
          light: colors.amber[200],
          normal: colors.amber[500],
          dark: colors.amber[800],
        },
        "temp-content": {
          pale: colors.yellow[50],
          light: colors.yellow[200],
          normal: colors.yellow[400],
          dark: colors.yellow[800],
        },
      },
      screens: {
        xs: "360px",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["disabled"],
      backgroundColor: ["disabled"],
      display: ["group-focus", "focus-within"],
    },
  },
};
