import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16132C",
        indigo: "#18133E",
        "indigo-mid": "#1D2051",
        violet: "#6E63BC",
        "violet-deep": "#4B3BC1",
        "violet-tint": "#C3BDEB",
        salmon: "#FFC3BC",
        "salmon-tint": "#FFE1DE",
        paper: "#FBFBFB",
      },
      fontFamily: {
        heading: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      boxShadow: {
        fine: "0 12px 32px rgb(22 19 44 / 0.08)",
        panel: "0 20px 45px rgb(22 19 44 / 0.12)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
