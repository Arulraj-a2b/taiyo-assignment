/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: { min: "0px", max: "1000px" },
    },
  },
  plugins: [],
};
