/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
    "./views/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      bellefair: ["Bellefair", "sans-serif"],
      "barlow-condensed": ["Barlow Condensed", "sans-serif"],
    },
    colors: {
      "pastel-purple": "#D0D6F9",
      "midnight-blue": {
        100: "#383B4B",
        200: "#0b0d1752",
        300: "#0B0D17",
      },
      white: "#FFFFFF",
      black: "#000000",
      gray: "#979797",
      "dark-navy": "#151923",
      "almost-transparent": "rgba(255, 255, 255, 0.099)",
      transparent: "transparent",
    },
    extend: {
      spacing: {
        13: "3.625rem",
        22: "5.5rem",
        38: "9.375rem",
        68: "17rem",
        76: "18.75rem",
        98: "26rem",
        102: "27.81rem",
        103: "28.5rem",
        106: "31.25rem",
        110: "33.25rem",
        114: "35.5rem",
        124: "44.5rem",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1536px",
        "5xl": "1980px",
      },
      fontSize: {
        "6xl": "3.5rem",
      },
    },
  },
  plugins: [],
};
