/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins, sans-serif'],
      },

      dropShadow: {
        xl: '0 3px 8px #F7AB0A',
        '2xl': '0 5px 12px #F7AB0A',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
