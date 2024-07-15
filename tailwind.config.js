module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "old-book-page": "#F5DEB3",
        "dark-blue": "#1E293B",
        "gray-thumb": "#6B7280",
        "gray-thumb-hover": "#4B5563",
        
      },
      borderRadius: {
        scrollbar: "8px",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addComponents }) {
      addComponents({
        ".scrollbar-track": {
          "background-color": "#F5DEB3",
          "border-radius": "8px",
        },
        ".scrollbar-thumb": {
          "background-color": "#6B7280",
          "border-radius": "8px",
        },
        ".scrollbar-thumb:hover": {
          "background-color": "#4B5563",
        },
      });
    },
  ],
};
