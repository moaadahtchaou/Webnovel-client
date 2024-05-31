/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      's': '400px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }



      'max767': {'max': '767px'},
      'max1092': {'max':'1092px'},


    },
    fontFamily: {
      'NotoKufi':["Noto Kufi Arabic", "sans-serif"],
      "Cairo":["Cairo", "sans-serif"],
      "Fira": ["Fira Sans", "sans-serif"],
    }
  },
  plugins: [],
}

