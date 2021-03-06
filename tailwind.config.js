const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/index.html', './src/**/*.svelte'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      "primary": ["titillium web","sans-serif"],
    },
    colors: {
      ...colors,
      primary: "#5cb85c",
      "primary-dark": "#449d44",
      secondary: "#bbb",
      default: "#373a3c",
      white: "#ffffff"
    },
  },
  plugins: [],
}