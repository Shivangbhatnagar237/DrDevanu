import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sanctuary: "#FAF8F5",
        charcoal: "#1A1A1A",
        ink: "#2D2D2D",
        mist: "#F4F0FF",
        honey: "#FDFCE7",
        plum: "#6B5B95",
        "plum-light": "#7c6bb5"
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        14: "0.14",
        16: "0.16",
        18: "0.18",
        20: "0.20",
        22: "0.22",
        24: "0.24",
        28: "0.28",
        30: "0.30",
        32: "0.32",
        34: "0.34",
        36: "0.36",
        42: "0.42",
        44: "0.44",
        46: "0.46",
        54: "0.54",
        55: "0.55",
        58: "0.58",
        60: "0.60",
        62: "0.62",
        64: "0.64",
        66: "0.66",
        68: "0.68",
        72: "0.72",
        74: "0.74",
        76: "0.76",
        78: "0.78",
        80: "0.80",
        82: "0.82",
        88: "0.88"
      }
    }
  },
  plugins: []
};

export default config;
