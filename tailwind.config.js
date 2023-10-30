/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DosisBold: ["Dosis-Bold", "sans-serif"],
        ExtraBold: ["Dosis-ExtraBold", "sans-serif"],
        ExtraLight: ["Dosis-ExtraLight", "sans-serif"],
        DosisLight: ["Dosis-Light", "sans-serif"],
        DosisMedium: ["Dosis-Medium", "sans-serif"],
        DosisRegular: ["Dosis-Regular", "sans-serif"],
        DosisSemiBold: ["Dosis-SemiBold", "sans-serif"],
      },
    },
  },   
  plugins: [],
} 
