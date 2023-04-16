/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'League Spartan', 'Helvetica', 'Arial', 'sans-serif'],
        'header': ['League Spartan', 'Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
    colors: {
      dark: "rgb(22, 22, 22)",
      light: "rgb(247, 247, 247)",
      emphasis: "rgb(176, 80, 32)",
    }
  },
  plugins: [],
}
