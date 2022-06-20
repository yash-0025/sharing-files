/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#1ea0d9',
          200: '#003567',
        },
        gray: {
          500: '#6B7181',
        },
      }
    },
  },
  plugins: [],
}
