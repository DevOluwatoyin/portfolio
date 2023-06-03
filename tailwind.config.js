/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-html": "#ffb833",
        "color-css": "#3b82f6",
        "color-javascript": "#eab308",
        "color-react": "#2563eb",
        "color-tailwind": "#38bdf8",
        "color-github": "#9ca3af",
      }
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }
  },
  plugins: [],
}

