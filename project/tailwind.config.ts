import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import { dark, light } from "./themes";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Noto Serif", "serif"],
        sans: ["Noto Sans", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    createThemes({
      light,
      dark,
    }),
  ],
} satisfies Config;
