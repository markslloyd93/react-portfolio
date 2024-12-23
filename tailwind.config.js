/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'interRegular': ['InterRegular', 'sans-serif'],
      'interMedium' : ['InterMedium', 'sans-serif'],
      'interBold': ['InterBold', 'sans-serif'],
      'interSemiBold': ['InterSemiBold', 'sans-serif'],
    },
    colors: {
      'brand-black': '#333333',
      'brand-white': '#f4f4f4',
      'brand-blue': '#1a2c4f',
      'brand-green': '#00A896',
      'brand-orange': '#FF6B35',
    },
  },
  plugins: [],
}

