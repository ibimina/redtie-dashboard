import type { Config } from "tailwindcss";

const config: Config = {
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
          "search-icon":"url('/search.svg')"
      },
      backgroundColor:{
        "red":"#D91D1D",
        "grey":"#F1F1F1",
        "bluee":"rgba(38, 132, 255, 1)"
      },
      colors:{
        "white":"#FFFFFF",
        "grey":"#F2F2F7",
        "light-grey":'rgba(0, 0, 0, 0.4)',
        "sharp-black":"#1C1C1C",
        "faint-grey":"rgba(0, 0, 0, 0.52)"
      },
           boxShadow: {
        '3xl': ' 0 1rem 2rem 55rem rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;
