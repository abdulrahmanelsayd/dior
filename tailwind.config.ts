import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-bg": "#fde4f2",
        "brand-pink": "#e68bbe",
        "brand-accent": "#d478a8",
        "brand-text": "#1A1A1A",
        "brand-muted": "#7a5068",
        "brand-pink-dark": "#b85680",
      },
    },
  },
  plugins: [],
};

export default config;
