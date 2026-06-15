export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
  features: string[];
};

export const services: Service[] = [
  {
    title: "Mecánica general",
    slug: "mecanica-general",
    description:
      "Diagnóstico, revisión y reparación de sistemas mecánicos del vehículo. Soluciones claras para cualquier falla, sin rodeos.",
    image: "/images/services/mecanica.jpg",
    featured: true,
    features: [
      "Diagnóstico de fallas mecánicas",
      "Reparación de motor y transmisión",
      "Sistema de frenos y suspensión",
      "Dirección y alineación",
      "Sistema de escape y catalizador",
      "Revisión general del vehículo",
    ],
  },
  {
    title: "Diagnóstico computarizado",
    slug: "diagnostico-computarizado",
    description:
      "Lectura de códigos de error y evaluación electrónica para identificar fallas con precisión antes de intervenir.",
    image: "/images/services/diagnostico.jpg",
    featured: true,
    features: [
      "Lectura de códigos OBD-II",
      "Evaluación del sistema electrónico",
      "Diagnóstico de luz check engine",
      "Análisis de sensores y actuadores",
      "Reporte detallado de fallas",
      "Recomendaciones de reparación",
    ],
  },
  {
    title: "Chapistería",
    slug: "chapisteria",
    description:
      "Enderezado de carrocería, reparación de golpes y daños estructurales con acabados de calidad profesional.",
    image: "/images/services/chapisteria.jpg",
    featured: true,
    features: [
      "Enderezado de carrocería",
      "Reparación de abolladuras y golpes",
      "Corrección de daños estructurales",
      "Reemplazo de piezas dañadas",
      "Preparación de superficie",
      "Acabados profesionales de taller",
    ],
  },
  {
    title: "Pintura automotriz",
    slug: "pintura-automotriz",
    description:
      "Preparación y aplicación de pintura con mezcla exacta de color para que no se note la diferencia.",
    image: "/images/services/pintura.jpg",
    features: [
      "Mezcla computarizada de color",
      "Pintura de panel completo o parcial",
      "Pintura total del vehículo",
      "Preparación y fondeo de superficie",
      "Acabado brillante o mate",
      "Garantía de color y terminación",
    ],
  },
  {
    title: "Aire acondicionado automotriz",
    slug: "aire-acondicionado",
    description:
      "Revisión, carga, reparación de fugas y mantenimiento del sistema de A/C para que tu vehículo enfríe correctamente.",
    image: "/images/services/ac.jpg",
    features: [
      "Revisión completa del sistema A/C",
      "Recarga de gas refrigerante",
      "Detección y reparación de fugas",
      "Cambio de compresor y componentes",
      "Limpieza del sistema de ventilación",
      "Revisión de correa del compresor",
    ],
  },
  {
    title: "Detailing y pulimiento",
    slug: "detailing-pulimiento",
    description:
      "Pulimiento, brillo y protección de la pintura para recuperar o mantener el aspecto original de tu vehículo.",
    image: "/images/services/detailing.jpg",
    features: [
      "Pulimiento de pintura",
      "Eliminación de rayones superficiales",
      "Brillo y enceramiento",
      "Detailing interior y exterior",
      "Aplicación de protectores de pintura",
      "Restauración de plásticos opacos",
    ],
  },
  {
    title: "Mantenimiento preventivo",
    slug: "mantenimiento-preventivo",
    description:
      "Cambio de aceite, filtros, líquidos y revisión de sistemas básicos para que tu carro te dure más sin sorpresas.",
    image: "/images/services/mantenimiento.jpg",
    features: [
      "Cambio de aceite y filtro",
      "Revisión y cambio de filtros de aire",
      "Revisión de niveles de líquidos",
      "Inspección de frenos y pastillas",
      "Revisión de correas y mangueras",
      "Rotación de llantas",
    ],
  },
  {
    title: "Especialistas en BMW y carros japoneses",
    slug: "bmw-carros-japoneses",
    description:
      "Experiencia específica en mecánica y electrónica de BMW, Toyota, Honda, Nissan y otras marcas japonesas.",
    image: "/images/services/bmw.jpg",
    features: [
      "Mecánica especializada en BMW",
      "Diagnóstico electrónico BMW",
      "Mecánica Toyota, Honda y Nissan",
      "Repuestos originales y alternativos",
      "Más de 25 años con estas marcas",
      "Experiencia en modelos difíciles",
    ],
  },
];
