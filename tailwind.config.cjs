/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,js,html}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['League Spartan', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
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
