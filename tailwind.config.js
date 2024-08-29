/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bananaEmerald: '#73E0A9',
        bananaBlue: '#5B68DF',
      },
    },
  },
  plugins: [],
};
