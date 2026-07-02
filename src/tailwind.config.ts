// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffffff",
          DEFAULT: "#f7f5f2",
          dark: "#1b1b1b",
        },
        accent: {
          champagne: "#F7E7CE",
          rosegold: "#B76E79",
          sand: "#D4C4B7",
          creme: "#FFFDD0",
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'], // Elegante Headlines
        sans: ['var(--font-inter)', 'sans-serif'], // Moderner Fließtext
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      }
    },
  },
  plugins: [],
};
export default config;