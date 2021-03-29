module.exports = {
  purge: {
    content: ["./src/**/*.tsx"],
    options: {
      safelist: {
        standard: [
          /^bg-(red|yellow|green|blue|purple|pink)-(300|500|900)$/,
          /^ring-(red|yellow|green|blue|purple|pink)-100$/,
          /^bg-gray-(300|600)$/,
        ],
      },
    },
  },
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
