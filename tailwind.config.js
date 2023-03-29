/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo"],
        mplus: ["M PLUS 1"],
      },
      colors: {
        "brand-primary": "#1F1A38",
        "brand-secundary": "#3716FF",
        "brand-scroll": "#44387E",
        "brand-bg": "#2400FF87",
        "feedback-success": "#00aa30",
        "feedback-warning": "#ffc737",
        "feedback-error": "#cc0000",
        "feedback-info": "#5df2fe",
      },
      backgroundImage: {
        "create-nft": "url(/bg_create_nft.png)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
