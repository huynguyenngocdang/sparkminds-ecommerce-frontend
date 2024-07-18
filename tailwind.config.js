module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee4d2d",
        "primary-bg": "#fef6f5",
        "secondary-blue": "#0046ab",
        "secondary-yellow": "#eda500",
        "secondary-green": "#26aa99",
        error: "#ee2c4a",
        "error-bg": "#fff4f4",
        success: "#30b566",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "text-link": "#0088ff",
        "text-secondary": "#595959",
        "text-tertiary": "#757575",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(-180deg,#f53d2d,#f63)",
      },
    },
  },
  plugins: [],
};
