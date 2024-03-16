/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'csDark': "#070F2B",
        'csWhite': "#DDE6ED",

      },
      boxShadowColor: {
        'csSha': '2px 1px 69px 5px rgba(0,0,0,0.58)',
      }
    },
  },
  plugins: [],
};
