/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        basic: '#ecebef',
      },
      boxShadow: {
        basic:
          '1rem 1rem 3rem rgb(174, 174, 192, 0.5), -1rem -1rem 3rem rgba(255, 255, 255);',
      },
    },
  },
  plugins: [],
};
