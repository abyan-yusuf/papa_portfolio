/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      fg: "#151c25 !important",
      bg: "#09101a !important",
      gb: "#55e6a5 !important",
      bodybc: "#02050a !important",
      white: "white !important",
      active: "#55e6a5 !important",
    },

    borderColor: {
      borderc: "#151c25 !important",
      gb: "#55e6a5 !important",
      white: "#fff !important",
    },
    textDecorationColor: {
      gb: "#55e6a5 !important",
    },
    textColor: {
      gb: "#55e6a5 !important",
      black: "#000 !important",
      white: "#fff !important",
      gray: "#a2a2a2 !important",
    },
    backgroundImage: {
      working: "url('/public/banner_bg2.png')",
    },
    animation: {
      animation: "in-out 4.5s linear infinite",
    },
    fontFamily: {
      lithos: "Lithos Pro Regular",
    },
    keyframes: {
      "in-out": {
        "0%": {
          transform: "scale(1)",
        },
        "50%": {
          transform: "scale(1.1)",
        },
        "100%": {
          transform: "scale(1)",
        },
      },
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".design-scrollbar::-webkit-scrollbar": {
          width: "15px",
          padding: "10px",
        },
        ".design-scrollbar::-webkit-scrollbar-track": {
          backgroundColor: "black",
        },
        ".design-scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#2d2d2d",
          width: "10px",
          borderRadius: "10px",
        },
      };

      addUtilities(newUtilities);
    },
  ],
  daisyui: {
    themes: false,
  },
};
