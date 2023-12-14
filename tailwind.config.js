import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/index.html"],
  theme: {
    fontFamily: {
      sans: ["'Inter'", "sans-serif"],
    },
    extend: {
      boxShadow: {
        highlight: `0 0 0 4px ${colors.purple["200"]}`,
      },
    },
  },
  plugins: [],
};
