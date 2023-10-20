/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      fg: "#222831",
      bg: "#09101a",
      gb: "#55e6a5",
      bodybc: "#02050a",
      white: 'white'
    },

    borderColor: {
      borderc: "#151c25",
    },
    textColor: {
      gb: "#55e6a5",
      black: "#000",
      white: "#fff",
      gray: "#a2a2a2",
    },
    backgroundImage: {
      working: "url('./public/banner_bg2.png')",
    },
    animation: {
      animation: 'in-out 3.5s linear infinite'
    },
    keyframes: {
      'in-out' : {
        '0%': {
          transform: 'scale(1)'
        },
        '50%': {
          transform: 'scale(1.1)'
        },
        '100%': {
          transform: 'scale(1)'
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
          padding: '10px'
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
