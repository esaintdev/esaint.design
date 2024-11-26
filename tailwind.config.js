/** @type {import('tailwindcss').Config} */

import tailwindscrollbar from 'tailwind-scrollbar';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindscrollbar],
}