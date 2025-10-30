export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark mode colors
        primary: {
          DEFAULT: "#0a0e27", // dark blue navy
          light: "#f5f7ff", // light mode background
        },
        accent: {
          DEFAULT: "#3b82f6", // blue
          light: "#2563eb", // darker blue for light mode
        },
        card: {
          DEFAULT: "#131829", // dark card
          light: "#ffffff", // white cards for light mode
        },
        neon: {
          DEFAULT: "#60a5fa", // light blue
          light: "#3b82f6", // blue for light mode
        },
        text: {
          DEFAULT: "#ffffff", // white text for dark
          light: "#1e293b", // dark text for light mode
        },
        secondary: {
          DEFAULT: "#1e293b", // dark secondary
          light: "#e2e8f0", // light secondary
        },
        border: {
          DEFAULT: "#334155", // dark border
          light: "#cbd5e1", // light border
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 8px rgba(59, 130, 246, 0.2), 0 0 15px rgba(96, 165, 250, 0.1)",
        soft: "0 4px 20px 0 rgba(59, 130, 246, 0.15)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
