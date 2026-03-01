/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172121",
        sand: "#fdf6e3",
        mint: "#d8f3dc",
        coral: "#ff6b6b",
        sky: "#4ea8de"
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Work Sans'", "sans-serif"]
      }
    }
  },
  plugins: []
};
