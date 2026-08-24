import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: "#FFB3C6",
          blue: "#A0C4FF",
          green: "#B9E4C9",
          yellow: "#FFE066",
        },
        func: {
          pink: "#FF8FAB",
          blue: "#7FB5FF",
          green: "#6FCF97",
          yellow: "#F4C430",
        },
        ink: { DEFAULT: "#4A4A4A", soft: "#6B6B6B" },
        cream: { DEFAULT: "#FFFDF7", deep: "#FDF6E3" },
      },
      fontFamily: {
        hand: ['"ZCOOL KuaiLe"', '"Caveat"', "cursive"],
        body: ['"PingFang SC"', "Quicksand", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(74,74,74,0.18)",
        card: "0 18px 45px -18px rgba(74,74,74,0.28)",
      },
      keyframes: {
        floaty: {
          "0%,100%": { transform: "translateY(0) rotate(var(--rot,0deg))" },
          "50%": { transform: "translateY(-12px) rotate(var(--rot,0deg))" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
