import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: { 
    extend: {
      borderWidth: {
        borderWid1: "1px",
      },
      extend: {
        backgroundImage: {
          checkmark: "url('/images/icon-checkmark.svg')",
        },
      },
      fontFamily: {
        sans: ["var(--font-ubuntu)"],
      },
      colors: {
        primary: {
          MarineBlue: "hsl(213, 96%, 18%)",
          PurplishBlue: "hsl(243, 100%, 62%)",
          PastelBlue: "hsl(228, 100%, 84%)",
          LightBlue: "hsl(206, 94%, 87%)",
          StrawberryRed: "hsl(354, 84%, 57%)",
          CoolGray: "hsl(231, 11%, 63%)",
        },
        neutral: {
          LightGray: "hsl(229, 24%, 87%)",
          Magnolia: "hsl(217, 100%, 97%)",
          Alabaster: "hsl(231, 100%, 99%)",
          White: "hsl(0, 0%, 100%)",
          VeryLightGray: "hsl(231, 100%, 98%)",
        },
      },
      screens: {
        maxxl: { max: "1279px" },
        maxlg: { max: "1023px" },
        maxmd: { max: "767px" },
        maxsm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
export default config;
