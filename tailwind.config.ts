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
        fine: "0 10px 30px rgb(12 20 43 / 0.07)",
        panel: "0 24px 50px rgb(12 20 43 / 0.13)",
        header: "0 1px 0 rgb(12 20 43 / 0.06), 0 8px 24px rgb(12 20 43 / 0.05)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
