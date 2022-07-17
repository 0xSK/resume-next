/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      display: ["Inter Display", "sans-serif"],
      header: ["Space Grotesk", "sans-serif"],
      serif: ["serif"],
      mono: ["Space Mono", "monospace"],
      hindi: ["Rajdhani", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
