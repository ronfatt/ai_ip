/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080B11",
        surface: {
          50: "#1A2234",
          100: "#141A29",
          200: "#0F1420",
          300: "#0B0F18",
          card: "rgba(17, 24, 39, 0.7)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        brand: {
          gold: "#E5C07B",
          champagne: "#F3D59B",
          bronze: "#C89551",
          violet: "#8B5CF6",
          purple: "#7C3AED",
          cyan: "#06B6D4",
          blue: "#3B82F6",
          emerald: "#10B981",
          amber: "#F59E0B",
          rose: "#F43F5E",
        },
        lu: {
          light: "#34D399",
          DEFAULT: "#10B981",
          dark: "#059669",
          glow: "rgba(16, 185, 129, 0.25)"
        },
        quan: {
          light: "#FBBF24",
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          glow: "rgba(245, 158, 11, 0.25)"
        },
        ke: {
          light: "#60A5FA",
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
          glow: "rgba(59, 130, 246, 0.25)"
        },
        ji: {
          light: "#F472B6",
          DEFAULT: "#EC4899",
          dark: "#DB2777",
          glow: "rgba(236, 72, 153, 0.25)"
        }
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif"
        ],
        serif: [
          "var(--font-playfair)",
          "Georgia",
          "serif"
        ]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "gold-gradient": "linear-gradient(135deg, #F3D59B 0%, #D4AF37 50%, #AA7C11 100%)",
        "hero-glow": "radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15), transparent 50%), radial-gradient(circle at 80% 40%, rgba(243, 213, 155, 0.1), transparent 40%)"
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" }
        }
      }
    },
  },
  plugins: [],
}
