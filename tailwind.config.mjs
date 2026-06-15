/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // ink = base oscura (casi negro)
        ink: "#111827",
        // cocoa = gris frío para texto secundario
        cocoa: "#4b5563",
        // rose = naranja industrial (acento principal, CTAs)
        rose: "#e85d04",
        // sage = azul profundo (acento secundario, eyebrows, links)
        sage: "#1e40af",
        // cream = fondo neutro claro
        cream: "#f8fafc",
        // shell = fondo gris suave
        shell: "#f1f5f9",
        // lavender = azul noche (uso utilitario)
        lavender: "#0f172a"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Barlow Condensed", "Arial Narrow", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: []
};
