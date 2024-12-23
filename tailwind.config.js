/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        tablet: "769px",
      },
      boxShadow: {
        "custom-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      fontWeight: {
        medium: "500",
        regular: "400",
      },
      colors: {
        primaryColor: "#E6C744",
      },
    },
  },
  plugins: [],
};
