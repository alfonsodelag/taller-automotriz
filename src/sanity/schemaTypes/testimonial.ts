import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonio",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del cliente",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "quote",
      title: "Testimonio",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "treatment",
      title: "Servicio recibido",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Calificación (1–5 estrellas)",
      type: "number",
      initialValue: 5,
      validation: (r) => r.min(1).max(5),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "treatment" },
  },
});
