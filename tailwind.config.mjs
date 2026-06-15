/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Tokens usados en todos los componentes
        ink: "#363435",      // texto principal — gris cálido oscuro (del competidor: --e-global-color-text)
        cocoa: "#6B7280",    // texto secundario — gris neutro
        rose: {
          DEFAULT: "#EE1D23", // rojo Gálvez — botones, acentos, CTAs
          dark: "#B91419",    // hover rojo
          soft: "#FFE7E8",    // badges suaves
        },
        sage: "#23323B",     // acero azul oscuro (del competidor: --e-global-color-d194eae)
        cream: "#FAFAFA",    // fondo claro cálido (del competidor: --e-global-color-2a72968)
        shell: "#EBEAEB",    // bordes y fondos suaves (del competidor: --e-global-color-5eb5862)
        lavender: "#1D1D23", // negro premium oscuro (del competidor: --e-global-color-ecb33b2)
        // Namespace brand para referencia y futura extensión
        brand: {
          red: "#EE1D23",
          redDark: "#B91419",
          redSoft: "#FFE7E8",
          warm: "#FAFAFA",
          black: "#1D1D23",
          graphite: "#363435",
          steel: "#23323B",
          metal: "#6B7280",
          border: "#EBEAEB",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        // Heebo: cuerpo de texto del competidor exacto
        sans: ["Heebo", "ui-sans-serif", "system-ui", "sans-serif"],
        // Exo 2: técnica extendida, similar a "new-science-extended" del competidor
        display: ["Exo 2", "Arial", "sans-serif"],
      },
      fontSize: {
        // Escala del competidor adaptada
        // Body: 18px / 30px (--e-global-typography-text)
        base: ["18px", { lineHeight: "30px" }],
      },
      boxShadow: {
        soft: "12px 12px 50px rgba(0, 0, 0, 0.4)",  // deep shadow del competidor
        card: "6px 6px 9px rgba(0, 0, 0, 0.2)",      // natural shadow del competidor
      },
    },
  },
  plugins: [],
};
