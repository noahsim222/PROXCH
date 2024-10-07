/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pavelt: ['Pavelt', 'san-serif']
      }
    },
  },
  plugins: [],
}

