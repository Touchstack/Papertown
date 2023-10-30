/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bold: ["Dosis-Bold", "sans-serif"],
        ExtraBold: ["Dosis-ExtraBold", "sans-serif"],
        ExtraLight: ["Dosis-ExtraLight", "sans-serif"],
        Light: ["Dosis-Light", "sans-serif"],
        Medium: ["Dosis-Medium", "sans-serif"],
        Regular: ["Dosis-Regular", "sans-serif"],
        SemiBold: ["Dosis-SemiBold", "sans-serif"],
      },
    },
  },   
  plugins: [],
} 
