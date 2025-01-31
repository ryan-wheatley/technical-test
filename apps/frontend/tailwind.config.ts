import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "kk-green": "#0D8112",
        "kk-pink": "#FFB8EF",
        "kk-purple": "#773E75",
        "kk-dark-pink": "#E7AADA",
        "kk-light-gray": "#C6C6C6",
        "kk-dark-gray": "#585858",
      },
    },
  },
  plugins: [],
} satisfies Config;
