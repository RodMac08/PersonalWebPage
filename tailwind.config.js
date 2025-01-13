/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway'],
        monts: ['Montserrat']
      },
      boxShadow: {
        'custom': '0 10px 15px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        primary: "#fef3c7",
        secundary: "#593622",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          'text-shadow': '30px 30px 30px rgba(0, 0, 0, 1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 2px rgba(89, 54, 34, 1)',
        },
      });
    }),
  ],
}