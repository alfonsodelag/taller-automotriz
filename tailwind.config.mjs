/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Aliases usados en componentes (compat con clases existentes)
        ink: "#101214",      // grafito — texto principal
        cocoa: "#6B7280",    // metal — texto secundario
        rose: {
          DEFAULT: "#EE1D23", // rojo mecánico — acento principal, CTAs
          dark: "#B91419",    // rojo hover
          soft: "#FFE7E8",    // rojo suave — badges
        },
        sage: "#2B2F33",     // acero — fondos secundarios oscuros
        cream: "#E7F6F9",    // hielo — fondos claros suaves
        shell: "#D7DEE2",    // plata — bordes, fondos más suaves
        lavender: "#000200", // negro carbón — hero, header, footer
        // Namespace brand para uso explícito y futura referencia
        brand: {
          red: "#EE1D23",
          redDark: "#B91419",
          redSoft: "#FFE7E8",
          ice: "#E7F6F9",
          black: "#000200",
          graphite: "#101214",
          steel: "#2B2F33",
          metal: "#6B7280",
          silver: "#D7DEE2",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Barlow Condensed", "Arial Narrow", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.10)",
        card: "0 4px 24px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
