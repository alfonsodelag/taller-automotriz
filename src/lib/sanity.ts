import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? "jdls3x4j",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  // SANITY_API_READ_TOKEN solo es necesario para contenido en borrador
});
