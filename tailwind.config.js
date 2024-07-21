module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideLeft: {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "100%": { transform: "translateX(-100%)", opacity: 1 },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
        slideUp: "slideUp 0.3s ease-in",
        slideLeft: "slideLeft 0.3s ease-out",
      },
      boxShadow: {
        inner: "inset 9px 9px 18px #006a5e,    inset -9px -9px 18px #008878",
        outer: " 7px 7px 14px #00675b,             -7px -7px 14px #008b7b",
        // bottom: "0px 4px 4px 0px rgba(0, 0, 0, 0.16)",
      },
      colors: {
        primary: "#0f5132", // Dark green
        secondary: "#00695c", // Slightly lighter green
        tertiary: "#00796b", // Lighter green
        lightBackground: "#e0f2f1", // Light green background
        shadowLight: "#ffffff", // Light shadow color
        shadowDark: "#004d40", // Dark shadow color
      },
      backgroundImage: {
        customGradient: "linear-gradient(180deg, #4CAF50 0%, #81C784 100%)",
      },

      fontFamily: {
        sans: ["Roboto"],
        outfit: "Outfit",
      },
      borderColor: {
        thin: "#FFFFFF1A",
      },
    },
  },
  plugins: [require("tw-neumorphism")],
};
