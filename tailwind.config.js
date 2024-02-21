/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#0D1B2A',
      'primary-alternate': '#1B263B',
      'secondary': '#f1f2ed',
      'secondary-alternate': '#e8eae1',
      'alternate': '#778DA9',
      'accent': '#415A77',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

