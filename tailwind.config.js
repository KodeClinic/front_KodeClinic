/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      background: "#EEF5FF",
      white: "#FFFFFF",
      blue_button: "#0745CB",
      green_button: "#008278",
      green_title: "#004A45",
      main_text: "#212C33",
      primary_main: "#2196F3",
      blue_gray: {
        50: "#ECEFF1",
        100: "#CFD8DC",
        200: "#B0BEC5",
        300: "#90A4AE",
        400: "#78909C",
        500: "#607D8B",
        600: "#546E7A",
        700: "#455A64",
        800: "#37474f",
      },
      white_grey: "#E8EDF0",
      pink: "#DABCFF",
      black: "#000000",
      gray: "D9D9D9",
      red: "#EF4444",
    },
  },
  plugins: [],
};
