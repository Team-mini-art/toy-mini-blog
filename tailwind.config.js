/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        back: '#ebecf0',
        title: '#babecc',
        basic: '#61677c',
        point: '#ae93ea',
        // point: '#a955ff',
      },
    },
  },
  plugins: [],
};
