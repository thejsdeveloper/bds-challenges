import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--ff-inter)",
        designer: "var(--ff-black)",
      },
      colors: {
        chai: {
          DEFAULT: "#FFA41B",
          dark: "#D46515",
        },
      },
      backgroundImage: {
        wave: "url('/assets/curve.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
