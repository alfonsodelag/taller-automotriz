import { defineType, defineField } from "sanity";

export const post = defineType({
  name: "post",
  title: "Artículo de Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime",
    }),
    defineField({
      name: "excerpt",
      title: "Resumen (para vista previa)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Contenido",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          "Mecánica",
          "Chapistería",
          "Pintura",
          "Aire acondicionado",
          "Detailing",
          "BMW",
          "Carros japoneses",
          "Mantenimiento",
        ],
      },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "image" },
  },
});
