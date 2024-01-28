/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-dark": "#141625",
      "secondary-dark": "#1f213a",
      orange: "#dc8c33",
      green: "#46c1a2",
      gray: "#d3d5e2",
      purple: "#7c5df9",
    },
  },
  plugins: [],
};
