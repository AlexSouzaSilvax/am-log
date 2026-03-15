/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Geist", "sans-serif"],
      },
      fontWeight: {
        text: "400",
        label: "500",
        title: "600",
      },
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        app: {
          bg: "#0a0a0a",
          card: "#111111",
          border: "#27272a",
          text: "#e4e4e7",
        },
      },
    },
  },
  plugins: [],
};
