/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lion': "#aa8453",
        'lion-dark': "#937248",
        'eerie-black': "#222222",
        'coyote': "#80633e",
        'platinum': "#e0e0e0",
        'nero': "#202020",
        'nero-dark': "#1e1e1e",
        'light-gray': "#e9e9e9",
        'blue': "#0000ff",
        'oranye': "#FFA500",


      },
      fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'gilda': ['Barlow Condensed', 'sans-serif'],
      'mont' : ['Gilda Display', 'serif' ],
      'barlow-cond': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'header-image': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/images/kampus-1.jpg')",
        'banner-image': "linear-gradient(0deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.18)), url('../assets/images/kampus-1.jpg')",
        'booking-image': "linear-gradient(0deg, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.4)), url('../assets/images/kampus-1.jpg')"
      },
      gridTemplateColumns:{
        'footer': "3fr repeat(3, 2fr)"
      }
    },
  },
  plugins: [],
}

