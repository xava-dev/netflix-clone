/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        netflix: "#e50914",
        netflixBackground: "#141414",
      },
      backgroundImage: {
        signInBackground: "",
      },
    },
  },
  plugins: [],
};
