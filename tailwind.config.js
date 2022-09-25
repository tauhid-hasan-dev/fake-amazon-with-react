/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': '#1C2B35',
      },
    },
  },
  plugins: [require("daisyui")],
}
