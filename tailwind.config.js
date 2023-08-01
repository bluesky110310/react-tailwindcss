/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "green-1": "#20C533FF",
        "blue-1": "#2852D6",
        "blue-1-op": "#2852D600",
        "blue-2": "#2953D600",
        "blue-3": "#2953D6",
        "blue-4": "#6A85D8",
        "blue-5": "#405597",
        "blue-6": "#2B53D4",
        "grey-1": "#ebebeb",
        "grey-2": "#7e7e7e",
        "white-op": "#FFFFFFAB",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      // that is animation class
      animation: {
        fadeInLeft: "fadeInLeft 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeInLg: "fadeInLg 0.5s ease-in-out",
        fadeInLeftToMiddel: "fadeInLeftToMiddle 0.5s ease-in-out",
        fadeInRightToMiddle: "fadeInRightToMiddle 0.5s ease-in-out",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeInLeft: {
          "0%": { left: -840 },
          "100%": { left: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 0.8 },
        },
        fadeInLg: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInLeftToMiddle: {
          "0%": { left: "-50vw" } ,
          "100%": { left: 0 },
        },
        fadeInRightToMiddle: {
          "0%": { right: "-50vw" } ,
          "100%": { right: 0 },
        }
      }),
    },
  },
  variants: {},
  plugins: [],
};
