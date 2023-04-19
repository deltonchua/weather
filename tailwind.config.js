/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C40B5',
        primaryDark: '#28124D',
        bgDark: '#1A1A1A',
        grey: '#666666',
      },
      backgroundImage: {
        dark: 'url("/bg-dark.png")',
        light: 'url("/bg-light.png")',
      },
    },
  },
  plugins: [],
};
