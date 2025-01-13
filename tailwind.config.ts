import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
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
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        ubuntu: ["ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
