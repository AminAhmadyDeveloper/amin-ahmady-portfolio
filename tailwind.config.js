module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (_) => ({
        "avatar": "url('./src/assets/images/amin.jpg')",
      }),
    },
    colors: {
      current: "#aa2b30",
    },
  },
  plugins: [],
};
