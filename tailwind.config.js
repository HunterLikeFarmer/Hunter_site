module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'old-book-page': '#F5DEB3', 
        'dark-blue': '#1E293B',
        'gray-thumb': '#6B7280',
        'gray-thumb-hover': '#4B5563',
      },
      borderRadius: {
        'scrollbar': '8px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addComponents }) {
      addComponents({
        '.scrollbar-track': {
          'background-color': '#1E293B',
          'border-radius': '8px',
        },
        '.scrollbar-thumb': {
          'background-color': '#6B7280',
          'border-radius': '8px',
        },
        '.scrollbar-thumb:hover': {
          'background-color': '#4B5563',
        },
      });
    },
  ],
}
