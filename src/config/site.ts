export const siteConfig = {
  businessName: "Gálvez Car Services",
  tagline: "Taller automotriz con más de 25 años de experiencia en Panamá",
  description:
    "Especialistas en mecánica general, chapistería, pintura, aire acondicionado automotriz y detailing. Atención directa por sus propios dueños. BMW, carros japoneses y otras marcas.",
  url: "https://demo-taller-galvez-car-services.vercel.app",
  // ⚠️ Validar número de teléfono exacto con el cliente antes de publicar
  phone: "+507 261-6197",
  whatsapp: "50767473679",
  email: "contacto@galvezcarservices.com",
  // ⚠️ Validar dirección exacta con el cliente antes de publicar
  address: "Calle 65 C Este, La Carrasquilla, Ciudad de Panamá",
  hours: {
    weekdays: "Lunes a viernes: 8:00 a.m. – 5:00 p.m.",
    saturday: "Sábados: 8:00 a.m. – 12:00 p.m.",
    sunday: "Domingos: cerrado"
  },
  social: {
    instagram: "https://instagram.com/galvezcarservices",
    facebook: "https://facebook.com/",
    tiktok: "",
    linkedin: ""
  },
  seo: {
    title: "Gálvez Car Services | Taller Automotriz en Panamá",
    description:
      "Taller automotriz en Panamá con más de 25 años de experiencia. Mecánica general, chapistería, pintura, aire acondicionado y detailing. Especialistas en BMW y carros japoneses.",
    keywords: [
      "taller mecánico en Panamá",
      "taller automotriz Panamá",
      "chapistería Panamá",
      "pintura automotriz Panamá",
      "aire acondicionado automotriz Panamá",
      "taller BMW Panamá",
      "taller carros japoneses Panamá",
      "detailing Panamá",
      "diagnóstico computarizado Panamá",
      "Gálvez Car Services"
    ]
  },
  colors: {
    primary: "#111827",
    secondary: "#f8fafc",
    accent: "#e85d04",
    dark: "#111827",
    light: "#FFFFFF"
  }
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;
