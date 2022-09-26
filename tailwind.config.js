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
        'cart-color': 'rgba(255, 153, 0, 0.3)',
      },
    },
  },
  plugins: [require("daisyui")],
}
