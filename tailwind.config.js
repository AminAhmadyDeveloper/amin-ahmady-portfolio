module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "#aa2b30",
        header: "#d6d6d6"
      },
      backgroundImage: {
        'bg-under': "url('/src/assets/images/under.png')",
      }
    },
  },
  plugins: [],
};
