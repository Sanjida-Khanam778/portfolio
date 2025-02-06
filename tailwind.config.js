/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0 2px 5px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 6px 50px 0px rgba(0, 0, 0, 0.06)',
        'neon': '0 0 15px #00ffcc', // Neon Glow Effect
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["forest"], // Set the theme to 'forest'
  },
}
