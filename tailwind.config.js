/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#800000', // Deep burgundy
          light: '#a52a2a',
          dark: '#4a0000',
        },
        secondary: {
          DEFAULT: '#FFD700', // Gold
          orange: '#FF8C00', // Dark Orange
        },
      },
      fontFamily: {
        brand: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
