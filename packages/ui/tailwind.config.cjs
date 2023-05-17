// NOTE: This file IS applicable if I'm building the Tailwind classes IN this project
//       (rather than transpiling/building them in the consuming projects, which is what I'm doing).
//       Since I'm building stuff in the consuming projects, this Tailwind config file is just ignored, unless
//       I explicitly import it into the Tailwind config of those consuming projects and use it there.
//       But doing it that way means that things like the `prefix` property apply to ALL Tailwind classes
//       (whether they are in the UI package or the consuming package).
//       Since this file is ignored with this approach, I'm commenting-out the contents for clarity.
/*
const sharedConfig = require("tailwind-config/tailwind.config.cjs");

module.exports = {
  // Presets are "base" tailwind config file(s) from which we can extend for this specific project.  See: https://tailwindcss.com/docs/presets
  presets: [sharedConfig],
  // prefix ui lib classes to avoid conflicting with the app
  //prefix: "ui-",
};
*/
