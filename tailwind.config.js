/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'green': '#014E56',
      'corla':'#F67E7E',
      'rupture':'#79C8C7',
      'police':'#2C6269',
      'jungle':'#004047',
      'StateGreen':'#012F34',
      'DarkGreen':' #002529',
      'gray': '#FDFD',



    },
    extend: {},
  },
  plugins: [],
}
