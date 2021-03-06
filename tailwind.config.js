// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

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
    extend: {
      height: {
        screenpeek: "90vh",
      },
      boxShadow: {
        blur: "rgba(0, 0, 0, 0.3) 0 0 50px 0",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
    scrollbar: ["rounded"],
  },
  plugins: [require("tailwind-scrollbar")],
};
