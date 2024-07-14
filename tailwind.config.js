module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'old-book-page': '#F5DEB3', 
        'new-purple': '#A9A9A9',
      },
      transitionProperty: {
        'transform-color': 'transform, color', 
      },
    },
  },
  plugins: [],
}
