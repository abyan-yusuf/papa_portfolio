/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      fg: "#222831",
      bg: "#09101a",
      gb: "#55e6a5",
      bodybc: "#02050a",
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
      working: "url('banner_bg2.png')",
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
      };

      addUtilities(newUtilities);
    },
  ],
  daisyui: {
    themes: false,
  },
};
