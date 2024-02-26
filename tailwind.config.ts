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
        tandoor: {
          light: "#F1D043",
          DEFAULT: "#E9692C",
          dark: "#D44F22",
        },
      },
      backgroundImage: {
        wave: "url('/assets/curve.svg')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
};
export default config;
