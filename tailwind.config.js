/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        ten: "10px",
        four: "4px",
      },
      colors: {
        dark: "#30302E",
        darker: "#20201D",
        highlight: "#7B9080",
        bright: "#F0EEF2",
        white: "#fff",
        trans: "#00000000",
      },
      fill: {
        dark: "#30302E",
        bright: "#F0EEF2",
      },
      minWidth: {
        sidebar: "200px",
        noResult: "240px",
      },
      maxWidth: {
        page: "1366px",
        bar: "500px",
        award: "600px",
        noResult: "600px",
      },
      width: {
        checkbox: "calc(50% - 8px)",
        page: "calc(100vw - 8px)",
        mobilePage: "calc(100vw - 8px)",
        third: "33%",
      },
      minHeight: {
        page: "calc(100vh - 160px)",
        mobilePage: "calc(100vh - 272px)",
        sidebar: "calc(100vh - 88px)",
      },
      maxHeight: {
        page: "calc(100vh - 160px)",
      },
      height: {
        banner: "300px",
      },
      gap: {
        banner: "10px",
      },
      top: {
        sidebar: "152px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
