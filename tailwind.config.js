/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F5',
        'dusty-rose': '#C4848A',
        champagne: '#F0E0C8',
        gold: '#D4AF37',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        mitr: ['Mitr', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
