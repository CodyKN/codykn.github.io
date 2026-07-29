/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "4rem",
        lg: "5rem",
        xl: "6rem",
        "2xl": "8rem",
      },
      screens: {
        DEFAULT: "640px",
        sm: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        raleway: ["Poppins", "system-ui", "sans-serif"],
        "raleway-italic": ["Poppins", "system-ui", "sans-serif"],
        "open-sans": ["Poppins", "system-ui", "sans-serif"],
        "open-sans-italic": ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        white: "#FFFFFF",
        gray: "#555555",
        elevated: "#F5F8F9",
        negative: "#B3261E",
        positive: "#2E6B3A",
        primary: "#204557",
        secondary: "#4A7285",
      },
    },
  },
  plugins: [],
};
