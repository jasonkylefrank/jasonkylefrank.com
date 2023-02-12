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
      typography: {
        // This ends up being used for the smallest breakpoint
        DEFAULT: {
          css: {
            h3: {
              marginTop: "2em", // default is 1.6em (~32px) at the smaller breakpoints
            },
          },
        },
        // We have to specify styles for this breakpoint even if they are the same as we've stated
        //  on smaller breakpoints because Tailwind's media-query-based class would have have higher
        //  specificity than our 'default' styles for this size screen.
        lg: {
          css: {
            h3: {
              marginTop: "2em", // default is 1.6666em (40px) at this breakpoint
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
