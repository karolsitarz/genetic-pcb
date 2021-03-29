module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "media",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
