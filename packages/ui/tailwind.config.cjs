const sharedConfig = require("tailwind-config/tailwind.config.cjs");

module.exports = {
  // Presets are "base" tailwind config file(s) from which we can extend for this specific project.  See: https://tailwindcss.com/docs/presets
  presets: [sharedConfig],
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
};
