/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM-serif-display': ["DM Serif Display", "serif"],
        'Kalar': ["Karla", 'sans-serif'],
      },
      colors: {
        'Dark-Violet': "hsl(256, 26%, 20%)",
        'Grayish-Blue': "hsl(216, 30%, 68%)",
        'Very-Dark-Violet': "hsl(270, 9%, 17%)",
        'Dark-Grayish-Violet': "hsl(273, 4%, 51%)",
        'Very-Light-Gray': "hsl(0, 0%, 98%)",
      },
      spacing: {
        '82': '350px',
        '94': '370px',
        '99': '500px',
        '100': '750px',
        '101': '790px',
        '102': '850px',
        '103': '1000px',  
      },
      fontSize: {
        '2xs': '10px'
      }
    },
  },
  plugins: [],
}

