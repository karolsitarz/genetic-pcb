/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("postcss-aspect-ratio-polyfill"),
    require("autoprefixer"),
  ],
};
