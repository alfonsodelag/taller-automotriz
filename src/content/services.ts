export type Service = {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Mecánica general",
    description:
      "Diagnóstico, revisión y reparación de sistemas mecánicos del vehículo. Soluciones claras para cualquier falla, sin rodeos.",
    image: "/images/services/mecanica.jpg",
    featured: true
  },
  {
    title: "Diagnóstico computarizado",
    description:
      "Lectura de códigos de error y evaluación electrónica para identificar fallas con precisión antes de intervenir.",
    image: "/images/services/diagnostico.jpg",
    featured: true
  },
  {
    title: "Chapistería",
    description:
      "Enderezado de carrocería, reparación de golpes y daños estructurales con acabados de calidad profesional.",
    image: "/images/services/chapisteria.jpg",
    featured: true
  },
  {
    title: "Pintura automotriz",
    description:
      "Preparación y aplicación de pintura con mezcla exacta de color para que no se note la diferencia.",
    image: "/images/services/pintura.jpg"
  },
  {
    title: "Aire acondicionado automotriz",
    description:
      "Revisión, carga, reparación de fugas y mantenimiento del sistema de A/C para que tu vehículo enfríe correctamente.",
    image: "/images/services/ac.jpg"
  },
  {
    title: "Detailing y pulimiento",
    description:
      "Pulimiento, brillo y protección de la pintura para recuperar o mantener el aspecto original de tu vehículo.",
    image: "/images/services/detailing.jpg"
  },
  {
    title: "Mantenimiento preventivo",
    description:
      "Cambio de aceite, filtros, líquidos y revisión de sistemas básicos para que tu carro te dure más sin sorpresas.",
    image: "/images/services/mantenimiento.jpg"
  },
  {
    title: "Especialistas en BMW y carros japoneses",
    description:
      "Experiencia específica en mecánica y electrónica de BMW, Toyota, Honda, Nissan y otras marcas japonesas.",
    image: "/images/services/bmw.jpg"
  }
];
