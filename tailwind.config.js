/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1144px',
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#F40404',
        'secondary': '#6C6C6C',
        'overlay': 'rgba(0, 0, 0, 0.60)',
      },
      padding: {
        'btn': '16px 32px',
      }
    },
  },
  plugins: [],
}