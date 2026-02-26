/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#9B1B1B',
          rose: '#E5A4A4',
          cream: '#F5E6E6',
          dark: '#2D0A0A'
        }
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'display': ['Playfair Display', 'serif']
      }
      // backgroundImage 
    },
  },
  plugins: [],
}