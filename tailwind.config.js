module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06a94d",
        softGreen: {
          DEFAULT: "#06a94d",
          dark: "#059142",
          light: "#08f26e",
        },
      },
      neumorphismColor: {
        DEFAULT: "#A8E6CF",
        dark: "#71C8A6",
      },
    },
  },
  plugins: [require("tw-neumorphism")],
};
