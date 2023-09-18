/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/./pages/**/*.{js,ts,jsx,tsx}",
    "./src/./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Arial", "Helvetica", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    colors: {
      transparent: "transparent",
      colorTest:'#d2d',
      white: "#ffffff",
      grayPrimary: "#ededed",
      graySecondary: "#dadada",
      grayAbsolut:'#363636',
      gray: "#4a4a4a",
      black: "#000000",
    },
    fontSize: {
      xs: "9px",
      sm: "11px",
      base: "14px",
      md: "21px",
      lg: "24px",
      xl: "32px",
      xxl: "36px",
      xxxl: "48px",
    },
    extend: {
      lineHeight: {
        "leading-3": "0.875rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
