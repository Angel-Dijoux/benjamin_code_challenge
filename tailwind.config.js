/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#BF3434",
        "custom-brown": "#401C0F",
        "custom-yellow": "#F2B90C",
        "custom-blue": "#5EB5BF",
        "cutom-pink": "#F22294",
      },
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
        "verdana-bold": ["Verdana Bold", "sans-serif"],
        "made-mirage": ["Made Mirage", "sans-serif"],
        "made-mirage-bold": ["Made Mirage Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
