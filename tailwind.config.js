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
