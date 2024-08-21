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
        "off-black": "var(--bg-color)",
        "light-black": "var(--light-black)",
      },
      backgroundImage: {
        "gradient-header": "var(--gradient-header)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
