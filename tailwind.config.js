/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': '#1C2B35',
        'btn-color': '#FFE0B3',
      },
    },
  },
  plugins: [require("daisyui")],
}
