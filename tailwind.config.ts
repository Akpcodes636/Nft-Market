import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          10: "#F2F3F6",
          20: "#E2E2ED",
          50: "#BBC0D0",
          60: "#7780A1",
          90: "#262840",
          100: "#060714",
        },
        purple: {
          10: "#2A27C91A",
          20: "#514CFF26",
          100: "#2A27C9",
          200: "#514CFF",
        },
        green: "#76DECC",
        pink: "#EA6CBC",
        red: "#FB4539",
      },
      fontFamily: {
        aeonik: ["var(--font-aeonik)", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1024px",
        "2xl": "1280px",
        "3xl": "1536px",
      },
      shadow: {
        100: "#FFFFFF1A",
      },
    },
  },
  plugins: [],
} satisfies Config;
