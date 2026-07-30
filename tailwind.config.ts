import type { Config } from "tailwindcss";

// Color and font tokens live in app/globals.css (@theme).
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        fine: "0 1px 2px rgb(12 20 43 / 0.03), 0 8px 24px rgb(12 20 43 / 0.05)",
        panel: "0 2px 4px rgb(12 20 43 / 0.04), 0 24px 48px rgb(12 20 43 / 0.10)",
        header: "0 1px 0 rgb(12 20 43 / 0.04), 0 8px 24px rgb(12 20 43 / 0.04)",
        "navy-glow": "0 10px 28px rgb(10 23 51 / 0.28)",
        "gold-glow": "0 10px 28px rgb(201 162 39 / 0.32)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
