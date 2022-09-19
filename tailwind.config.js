/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        default: {
          primary: "#6419E6",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#EEEAE3",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "light",
      "dark",
      "valentine",
    ],
  },
};
