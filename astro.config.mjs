import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://clinica-derma.vercel.app",
  integrations: [sitemap()],
});
