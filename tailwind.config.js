/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Content: ['DM Sans', 'sans-serif'],
        Header: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

