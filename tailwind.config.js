/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        csDark: "#070F2B",
        csWhite: "#DDE6ED",

      },
    },
  },
  plugins: [],
};
