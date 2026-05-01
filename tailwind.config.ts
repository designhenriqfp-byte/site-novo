import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#050505",
        ivory: "#f7f3ec",
        muted: "#9b958c",
        line: "#24211d",
        signal: "#e85d1f"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
