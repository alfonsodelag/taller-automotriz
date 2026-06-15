import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "static",
  adapter: vercel(),
  site: "https://demo-taller-galvez-car-services.vercel.app",
  integrations: [
    sitemap(),
    react(),
    sanity({
      projectId: "jdls3x4j",
      dataset: "production",
      useCdn: true,
      studioBasePath: "/studio",
    }),
  ],
});
