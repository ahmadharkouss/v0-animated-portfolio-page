import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New masculine colors
        navy: {
          light: "#3B82F6",
          DEFAULT: "#1D4ED8",
          dark: "#1E40AF",
        },
        slate: {
          light: "#64748B",
          DEFAULT: "#475569",
          dark: "#334155",
        },
        emerald: {
          light: "#10B981",
          DEFAULT: "#059669",
          dark: "#047857",
        },
        amber: {
          light: "#F59E0B",
          DEFAULT: "#D97706",
          dark: "#B45309",
        },
        burgundy: {
          light: "#9F1239",
          DEFAULT: "#881337",
          dark: "#6B0F2B",
        },
        // Add these new gradient colors
        gradient: {
          start: "#8a2387",
          middle: "#e94057",
          end: "#f27121",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to right, #8a2387, #e94057, #f27121)",
        "section-gradient":
          "linear-gradient(to right, rgba(138, 35, 135, 0.1), rgba(233, 64, 87, 0.1), rgba(242, 113, 33, 0.1))",
        "card-gradient": "linear-gradient(to bottom right, #8a2387, #e94057, #f27121)",
        "button-gradient": "linear-gradient(to right, #8a2387, #e94057, #f27121)",
        "text-gradient": "linear-gradient(to right, #8a2387, #e94057, #f27121)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
