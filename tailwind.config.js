/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
      },
      fontWeight: {
        extrabold: "900", // Add custom mappings if necessary
      },
    },
  },
  plugins: [],
};
