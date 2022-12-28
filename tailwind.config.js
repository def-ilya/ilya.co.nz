const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0F172A",
        "light-clay": "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-ubuntu)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
