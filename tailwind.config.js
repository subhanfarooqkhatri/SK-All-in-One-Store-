/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      "myTheme":"#027a70",
      // "darkTheme"

     },
     screens:{
      "mobile":"310px",
      

     }
    },
  },
  plugins: [],
}

