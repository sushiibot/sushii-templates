const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    "./src/**/*.hbs"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        gray: {
          1000: '#0a0e14',
          900: '#161d28',
          800: '#5a6171',
        }
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
