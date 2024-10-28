/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'script': ['SignatureScript', 'cursive'],
      },
      screens: {
        'lg-custom': '900px', // Add custom breakpoint at 900px
      },
      
    },
  },
  plugins: [],
}

