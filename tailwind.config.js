/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#135494',
         // Define your custom primary text color here
      },
      fontSize: {
        'primary-size': '18px', // Define your custom primary text size here
      },
      fontWeight: {
        'primary-style': 600, // Define your custom primary text weight here
      },
    },
  },
  plugins: [],
}
