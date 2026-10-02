/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px -18px rgba(15, 23, 42, 0.18)',
      },
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          500: '#7c6af2',
          600: '#6755e7',
          700: '#4d3ec6',
          900: '#1f1b3a',
        },
      },
    },
  },
  plugins: [],
};
