/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-red": "#BF3434",
        "custom-brown": "#361A0C",
        "custom-yellow": "#F6BF04",
        "custom-blue": "#5EB5BF",
        "custom-pink": "#FF2193",
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
