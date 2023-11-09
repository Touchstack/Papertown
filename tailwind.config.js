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
      backgroundColor: {
        'white-transparent': 'rgba(255, 255, 255, 0.20)',
      },
      boxShadow: {
        'custom': '0px 7px 80px 0px rgba(105, 23, 109, 0.30)',
      },
      backdropBlur: {
        'custom': '10px',
      }
    },
  },
};
