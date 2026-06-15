import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://demo-taller-galvez-car-services.vercel.app",
  integrations: [sitemap()],
});
