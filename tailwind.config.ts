import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "zackor-bg": "#0d0d0f",
        "zackor-card": "#111118",
        "zackor-border": "#222235",
        "zackor-purple": "#7c6aff",
        "zackor-text": "#e8e8ea",
        "zackor-muted": "#8888aa",
        "zackor-dark": "#0d0d1f",
      },
      fontFamily: { sans: ["var(--font-inter)", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;