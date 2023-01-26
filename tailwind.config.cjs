/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // See the corresponding font import and instantiation in app/layout.tsx
        sans: ["var(--font-poppins)"],
      },
      colors: {
        gray: colors.neutral,
      },
      maxWidth: {
        "8xl": "88rem", // 1408px with a 16px base
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
