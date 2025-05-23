/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fastly': '#EFF4FA',
        'secondary': '#1BBF00',
        'thirdly': '#141135',
        'four': '#726E9E',
    },fontFamily: {
      'open': ["Open Sans"],
      'paprika': ["Paprika"],
      'Nunito' : ["Nunito"],
      'Quicksand' : ["Quicksand"]
  },maxWidth: {
    'container': ['1170px'],
  }, backgroundImage: {
    'banner': "url('./assets/banner.png')",
  },
  plugins: []
  }
}
}
