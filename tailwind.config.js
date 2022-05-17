module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "#aa2b30",
        header: "#d6d6d6",
      },
      screens: {
        bw: "1024px",
        lg: "1440px",
        mbl: "425px",
        md: "768px",
      },
      backgroundImage: {
        "bg-under": "url('/src/assets/images/under.png')",
      },
      maxHeight: {
        '75-vh': '75%',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
