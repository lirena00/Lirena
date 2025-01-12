import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#f2e0d9",
        background: "#111111",
        primary: "#8fd8bd",
        secondary: "#228b65",
        accent: "#32dfa0",
      },

      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
