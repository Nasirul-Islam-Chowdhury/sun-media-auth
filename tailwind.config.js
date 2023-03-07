/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Outfit'],
    },
    extend: {
      colors: {  
         'custom-blue':'#080022',
         'text': '#6558FF',
         'first': '#6558FF',
         'second': '#F900C2',
         'background': '#040012'
        },
    },
  },
  plugins: [],
}
