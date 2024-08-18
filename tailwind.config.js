/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
    animation: {
      'gradient-x': 'gradient-x 3s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-gradients'),
  ],
}
  }
}