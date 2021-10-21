module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (_theme) => ({
        "screen*2": "200vh",
      }),
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        "light-black": "#2b2b2b",
        "custom-green": "#14FF00",
        "custom-gray": {
          light: "#929292",
          DEFAULT: "#666666",
        },
      },
      backgroundImage: (_theme) => ({
        background: "url('/assets/background.svg')",
      }),
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        30: "7.5rem",
        86: "22rem",
        100: "30rem",
        108: "32rem",
      },
      letterSpacing: {
        extrawidest: ".25rem",
      },
      lineHeight: {
        14: "4rem",
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
};
