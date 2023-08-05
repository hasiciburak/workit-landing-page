/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#24053E",
      secondary: "#44FFA1",
      tertiary: "#584D62",
      ghostwhite: "#FCF8FF",
    },
    extend: {
      fontFamily: {
        frauences: "'Frauences', serif",
        manrope: "'Manrope',Arial, Helvetica,sans-serif",
      },
    },
  },
  plugins: [],
};
