// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#e3ddac',
        backgroundalt: '#faf4c1',
        text: '#4c3935',
        accent: '#ff6666',
        accentdark: '#ff4d4d',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')

  ],
}