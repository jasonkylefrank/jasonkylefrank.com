/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
