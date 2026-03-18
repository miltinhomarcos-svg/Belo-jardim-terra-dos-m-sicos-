/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF8A00',
          yellow: '#FFD700',
          red: '#E02424',
          blue: '#007BFF',
          green: '#2DA84E',
          light: '#F4FCF6',     // Light mint green instead of gray
          dark: '#113A20',      // Deep forest green instead of charcoal
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
