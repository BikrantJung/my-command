/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Poppins", "sans-serif"],
        mono: ["JetBrains mono", "monospace"],
      },
      boxShadow: {
        dark: "2px 2px 0px 0px black",
      },
    },
  },
  plugins: [],
};
