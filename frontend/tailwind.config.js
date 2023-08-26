/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100":"#F2D6CE",
        "primary-200":"#E86583",
        "secondary-100":"#D8EDD7",
        "secondary-200":"#9FD1BE",
        "secondary-300":"#74A39D",
        "gray-100": "#4A0E16",
        "gray-200": "#241105",
        "light-white":"#F7FAFF50",
      },
      backgroundImage: (theme) => ({
        "gradient-goldgray":
          "linear-gradient(90deg, #F2D6CE 0%, #241105 100%)",
        "mobile-home": "url('../assets/HomeAloneIcon.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sams-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        haicon: "url('./assets/HomeAloneIcon.png')",
        solnublado: "url('./assets/SolNublado.png')",

      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
