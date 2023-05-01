/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        robotoSlab: '"Roboto Slab", serif',
      },
      backgroundImage: {
        bodyGradient: 'linear-gradient(90deg, #fb71a7 0%, #c491cc 99.99%);',
        searchIcon: 'url("/src/assets/search.png")',
      },
      borderColor: {
        mainGray: 'rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};
