import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "900px",
        xl: "1240px",
      },
      container: {
        screens: {
          sm: "320px",
          md: "768px",
          lg: "900px",
          xl: "1240px",
        },
        padding: {
          DEFAULT: '20px',
        },
      },
      colors: {
        bgMain: '#e2e2e2',
        text: {
          primary: '#000',
          title: '#333333',
          decription: '#9C9C9C',
          footerSpan: '#D9D9D9'
        },
        bgBlue: '#2C3878',
        btnBlueHover: '#566093',
        btnBlueActive: '#1C244D',
        btnWhite: '#e2e2e2',
        btnWhiteHover: '#2C3878',
        btnWhiteActive: '#1C244D'
      },
      fontSize: {
        logo: '32px'
      }
    },
  },
  plugins: [],
};
export default config;
