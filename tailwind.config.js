const preset = require("@mavvy/m3-ui/preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: preset.content.concat(["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}"]),
  blocklist: ["container"],
  theme: {
    extend: preset.theme.extend,
  },
  plugins: [],
  presets: [preset],
};
