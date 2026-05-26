/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff8e1',
          100: '#ffefb0',
          500: '#f5b700',
          700: '#b87900',
          900: '#4b3100',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
