/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '382px',
      'sm': '640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px'
    },
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', "sans-serif"],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'WorkSans':['Work Sans', 'sans-serif']
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
