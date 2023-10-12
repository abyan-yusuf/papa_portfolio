/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      fg: "#151c25",
      bg: "#09101a",
      gb: "#55e6a5",
    },
    borderColor: {
      borderc: "#151c25",
    },
    textColor: {
      gb: "#55e6a5"
    },
    transitionDuration: {
      150: '150ms'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
