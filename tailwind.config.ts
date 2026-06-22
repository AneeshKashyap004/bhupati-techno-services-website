import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#163A73",
          dark: "#0E2852",
          orange: "#D86A27",
          light: "#F7F8FA",
          gray: "#6B7280",
          ink: "#111827",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(14, 40, 82, 0.12)",
        glass: "0 18px 50px rgba(17, 24, 39, 0.12)",
      },
      backgroundImage: {
        "enterprise-gradient":
          "linear-gradient(135deg, #0E2852 0%, #163A73 48%, #1D4C91 100%)",
        "light-radial":
          "radial-gradient(circle at top left, rgba(216,106,39,0.12), transparent 34%), radial-gradient(circle at bottom right, rgba(22,58,115,0.12), transparent 32%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleX(0.86)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
        floatOrb: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(18px, -24px) scale(1.06)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        pulseLine: "pulseLine 2.6s ease-in-out infinite",
        floatOrb: "floatOrb 14s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
