/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: '660px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        purple: '#6100C2',
        black: '#191817',
        gray: '#969696',
        'light-gray': '#B0A4FD',
        'light-purple': '#7900C2',
      },
    },
  },
  plugins: [],
};
