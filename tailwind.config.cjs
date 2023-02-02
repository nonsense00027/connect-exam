/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#505B5F",
          lighter: "#D9D9D9",
          light: "#B8B8B8",
        },
        blue: "#B5D3F7",
        orange: "#F5B05F",
      },
    },
  },
  plugins: [],
};
