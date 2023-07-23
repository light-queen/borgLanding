/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-900': '#141414',
		primary: '#d4e6d4',
      }
    },
  },
  plugins: [],
}

