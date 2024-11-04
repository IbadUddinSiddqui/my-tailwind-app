import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 255, 255, 0.6)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 255, 1)' },
        },
        flip: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        flip: 'flip 0.6s ease-in-out',
      },
    
    },
  },
  plugins: [],
};
export default config;
