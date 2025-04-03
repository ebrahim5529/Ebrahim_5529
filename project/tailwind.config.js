/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'kufi': ['Noto Kufi Arabic', 'sans-serif'],
        'naskh': ['Noto Naskh Arabic', 'serif'],
      },
    },
  },
  plugins: [],
};