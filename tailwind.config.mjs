/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        "on-surface": "#F9F8F6",
        "solar-ochre": "#C5A880",
        "outline-variant": "#444748",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
};