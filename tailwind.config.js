const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Content: ['DM Sans', 'sans-serif'],
        Header: ['Roboto', 'sans-serif'],
        Serif: ['Bitter', 'serif'],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

