/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#EEF5FF",
      white: "#FFFFFF",
      blue_button: "#0745CB",
      green_button: "#008278",
      green_title: "#004A45",
      main_text: "#212C33",
      blue_gray: {
        300: "#90A4AE",
        400: "#78909C",
        500: "#607D8B",
        600: "#546E7A",
        700: "#455A64",
      },
    },
  },
  plugins: [],
};
