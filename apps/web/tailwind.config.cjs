module.exports = {
  // Presets are "base" tailwind config file(s) from which we can extend for this specific project.  See: https://tailwindcss.com/docs/presets
  presets: [require("tailwind-config/tailwind.config.cjs")],

  theme: {
    // Theme items under the "extend" key are merged with the ones specified in the "presets"
    extend: {
      boxShadow: {
        // TEST: Intentionally making this a weird color to see if the merge works
        // jasonTemp:
        //   "rgb(10 99 0 / 90%) 0px 4px 15px -3px, rgb(0 0 0 / 30%) 0px 3px 6px -4px",
      },
    },
  },
};
