/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  // The paths to all files that contain Tailwind class names
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    // Include packages if not compiling locally in each package (and instead compiling in the consuming projects).
    // For Next.js projects, we can tell Next.js to compile external packages in the next.config file in the consuming project (check for a transpilePackages key)
    // Note that this path should be generic enough to work in any of the consuming projects (i.e., it should probably first reference upwards direction until it hits the root, then back down)
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // See a corresponding font import and instantiation in app/layout.tsx
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
      boxShadow: {
        // 30 percent black
        jason30:
          "rgb(0 0 0 / 30%) 0px 4px 15px -3px, rgb(0 0 0 / 30%) 0px 3px 6px -4px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
