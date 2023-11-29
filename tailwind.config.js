/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    borderRadius: {
      ten: "10px",
      four: "4px",
    },
    colors: {
      dark: "#30302E",
      highlight: "#7B9080",
      bright: "#F0EEF2",
      white: "#fff",
    },
    fill: {
      dark: "#30302E",
      bright: "#F0EEF2",
    },
    maxWidth: {
      page: "1366px",
    },
    minHeight: {
      page: "calc(100vh - 160px)",
      mobilePage: "calc(100vh - 272px)",
    },
  },
  plugins: [],
  darkMode: "class",
};
