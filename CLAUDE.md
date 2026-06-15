# CLAUDE.md — Gálvez Car Services

## Proyecto

Sitio web para **Gálvez Car Services**, taller automotriz en Ciudad de Panamá con más de 25 años de experiencia. Especialistas en mecánica general, chapistería, pintura, aire acondicionado y detailing. BMW, carros japoneses y otras marcas. Atendido directamente por sus propios dueños.

- **URL producción:** https://demo-taller-galvez-car-services.vercel.app
- **Repo:** https://github.com/alfonsodelag/taller-automotriz
- **Instagram:** @galvezcarservices

## Stack

- Astro (static rendering)
- Tailwind CSS
- TypeScript ligero
- Contenido en archivos locales TypeScript
- Web3Forms para formularios (sin backend propio)
- Sanity CMS disponible para blog editable (project ID: `jdls3x4j`)
- Vercel para deploy
- GitHub para control de versiones

No usar Firebase, Supabase, autenticación, dashboards, bases de datos, pagos ni cuentas de usuario.

## Archivos editables por el cliente

```txt
src/config/site.ts        ← datos del negocio, contacto, horarios, SEO, colores
src/content/services.ts   ← lista de servicios
src/content/faqs.ts       ← preguntas frecuentes
src/content/testimonials.ts ← testimonios de clientes
src/content/doctors.ts    ← equipo / perfiles del taller
src/content/blog.ts       ← artículos del blog (o migrar a Sanity)
```

## Estructura del proyecto

```txt
src/
  components/
    Button.astro        ← variantes: primary | secondary | outline
    Header.astro        ← fondo oscuro, logo, navegación
    Footer.astro        ← fondo oscuro, datos de contacto
    SectionTitle.astro  ← eyebrow + h2 + intro
  sections/
    Hero.astro          ← hero oscuro con CTA rojo
    About.astro         ← historia del taller, tarjetas de confianza
    Services.astro      ← grilla de servicios
    Doctors.astro       ← equipo / propietarios
    Testimonials.astro  ← testimonios de clientes
    FAQ.astro           ← preguntas frecuentes (details/summary)
    BlogPreview.astro   ← últimas 3 entradas del blog
    Contact.astro       ← formulario Web3Forms con campos de vehículo
    Location.astro      ← dirección, horario, imagen de ubicación
  layouts/
    BaseLayout.astro    ← HTML base, SEO, schema AutoRepair, fuentes
  pages/
    index.astro
    about.astro
    services.astro
    contact.astro
    blog/index.astro
  config/
    site.ts
  content/
    (archivos editables)
  lib/
    sanity.ts           ← cliente Sanity preconfigurado
  styles/
    global.css          ← clases base: btn-primary, btn-secondary, btn-outline, card, eyebrow
public/
  images/
    logo.png            ← logo oficial Gálvez Car Services
    hero-bg.jpg         ← reemplazar con foto real del taller
    (resto de imágenes placeholder)
  favicon.svg
```

---

## Paleta de colores — Sistema de diseño

La estética del sitio es **taller premium industrial**: fuerte, confiable, mecánica, limpia. No agresiva ni de tuning barato. El concepto es "metal, precisión y urgencia".

### Proporción de uso
- **70%** negro carbón / blanco / hielo azul
- **20%** grises industriales (acero, plata)
- **10%** rojo intenso (el acelerador, no toda la carretera)

### Paleta completa

| Token Tailwind | Nombre | Hex | Uso |
|---|---|---|---|
| `brand-red` / `rose` | Rojo mecánico | `#EE1D23` | Botones primarios, CTAs, eyebrows, acentos, íconos |
| `brand-redDark` / `rose-dark` | Rojo sombra | `#B91419` | Hover de botones rojos |
| `brand-redSoft` / `rose-soft` | Rojo alerta suave | `#FFE7E8` | Badges, highlights discretos |
| `brand-ice` / `cream` | Hielo limpio | `#E7F6F9` | Fondos de secciones claras (About, FAQ, Location) |
| `brand-black` / `lavender` | Negro carbón | `#000200` | Hero, Header, Footer — secciones premium oscuras |
| `brand-graphite` / `ink` | Grafito profundo | `#101214` | Texto principal sobre fondos claros |
| `brand-steel` / `sage` | Acero oscuro | `#2B2F33` | Cards secundarias, fondos de sección (Doctors) |
| `brand-metal` / `cocoa` | Metal frío | `#6B7280` | Texto secundario, labels, íconos |
| `brand-silver` / `shell` | Plata técnica | `#D7DEE2` | Bordes, separadores, fondos suaves |
| `brand-white` | Blanco taller | `#FFFFFF` | Tarjetas, contraste, espacios |

### Configuración Tailwind (tailwind.config.mjs)

```js
colors: {
  ink: "#101214",
  cocoa: "#6B7280",
  rose: { DEFAULT: "#EE1D23", dark: "#B91419", soft: "#FFE7E8" },
  sage: "#2B2F33",
  cream: "#E7F6F9",
  shell: "#D7DEE2",
  lavender: "#000200",
  brand: {
    red: "#EE1D23", redDark: "#B91419", redSoft: "#FFE7E8",
    ice: "#E7F6F9", black: "#000200", graphite: "#101214",
    steel: "#2B2F33", metal: "#6B7280", silver: "#D7DEE2", white: "#FFFFFF",
  }
}
```

---

## Guía de uso del color por sección

### Hero principal
```
Fondo:            bg-lavender (#000200)
Título h1:        text-white
Texto párrafo:    text-shell (#D7DEE2)
Eyebrow:          text-rose (#EE1D23)
Botón principal:  bg-rose hover:bg-rose-dark
Botón secundario: btn-outline (borde shell, texto shell)
Stats números:    text-rose
Stats labels:     text-shell
Borde stats:      border-white/10
```

### Header
```
Fondo:            bg-lavender (#000200)
Barra superior:   bg-lavender (misma, sin distinción)
Logo:             colores originales del logo
Links nav:        text-shell → hover:text-rose
Botón Cotizar:    btn-outline (borde shell)
Botón WhatsApp:   btn-primary (rojo)
```

### Secciones de contenido (alternancia)
```
About:            bg-cream (#E7F6F9) — hielo
Services:         bg-white
Doctors:          bg-shell (#D7DEE2) — plata industrial
Testimonials:     bg-white
FAQ:              bg-cream (#E7F6F9)
BlogPreview:      bg-white
Contact:          bg-shell (#D7DEE2)
Location:         bg-cream (#E7F6F9)
```

### Cards
```
Fondo:   bg-white
Borde:   border-shell (#D7DEE2)
Título:  text-ink (#101214)
Texto:   text-cocoa (#6B7280)
Acento:  text-rose (#EE1D23)
Sombra:  shadow-soft
```

### Footer
```
Fondo:          bg-lavender (#000200)
Texto body:     text-shell/80
Títulos:        text-white
Acentos/links:  text-rose
Botón CTA:      bg-rose hover:bg-rose-dark text-white
```

---

## Tipografía

```js
fontFamily: {
  sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],     // texto general
  display: ["Barlow Condensed", "Arial Narrow", "sans-serif"],      // títulos, héroe
}
```

- `font-display` → solo en h1, h2 principales, stats grandes
- `font-sans` → todo el resto
- `font-bold` en display para máximo impacto industrial

---

## Botones — Clases CSS globales

```css
/* Rojo — acción principal, CTAs */
.btn-primary → bg-rose hover:bg-rose-dark text-white

/* Oscuro sobre fondos claros */
.btn-secondary → border border-ink/20 text-ink hover:bg-ink hover:text-white

/* Borde claro sobre fondos oscuros (hero, header, footer) */
.btn-outline → border border-shell/60 text-shell hover:text-white hover:border-white
```

**Regla de oro:** El rojo no se usa como fondo de secciones completas. Solo en botones, líneas decorativas, íconos, badges, hover states y detalles visuales.

---

## Formulario de contacto

El formulario en `Contact.astro` usa Web3Forms con campos específicos para taller:
- Nombre completo
- Teléfono/WhatsApp (requerido)
- Email (opcional)
- Marca del vehículo (requerido)
- Modelo y año
- Servicio requerido (dropdown)
- Mensaje

El dropdown de servicios está hardcodeado en Contact.astro (no importa de services.ts) para control preciso.

---

## Variables de entorno

```env
# .env local (no subir a git)
PUBLIC_WEB3FORMS_ACCESS_KEY=5c815a00-2200-4737-83b4-5bffcd68e693
PUBLIC_SANITY_PROJECT_ID=jdls3x4j
PUBLIC_SANITY_DATASET=production
```

Ver `.env.example` para la estructura completa. Configuradas en Vercel → Settings → Environment Variables.

---

## Sanity CMS

Configurado en `src/lib/sanity.ts`. Project ID: `jdls3x4j`, Organization ID: `oefjG3H6V`.

El cliente está listo para hacer queries:
```ts
import { sanityClient } from "@/lib/sanity";
const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`);
```

Schemas de contenido sugeridos cuando se migre el blog: `post`, `service`, `testimonial`.
Categorías del blog: Mecánica, Chapistería, Pintura, Aire acondicionado, Detailing, BMW, Carros japoneses.

---

## Schema SEO

El BaseLayout emite schema `AutoRepair` con:
- `openingHours`: Mo-Fr 08:00-17:00, Sa 08:00-12:00
- `areaServed`: Ciudad de Panamá
- `sameAs`: Instagram @galvezcarservices

⚠️ Validar con el cliente antes de publicar: dirección exacta, teléfonos activos.

---

## Datos pendientes de validar con el cliente

- Dirección física exacta (hay variación entre fuentes públicas)
- Teléfono fijo 261-6197 — confirmar si sigue activo
- Email de contacto (actualmente placeholder)
- Fotos reales del taller para reemplazar imágenes placeholder

---

## Deploy

```bash
npm install
npm run dev      # desarrollo local
npm run build    # verificar antes de subir
git push         # Vercel despliega automáticamente desde main
vercel --prod    # deploy manual desde CLI
```

## SEO y Accesibilidad

Cada página tiene título único, meta description, headings semánticos, alt text descriptivo y CTAs claros. SEO local enfocado en servicios automotrices en Ciudad de Panamá.

HTML semántico, links/botones accesibles por teclado, contraste de color suficiente.

## Transferibilidad al cliente

- Repo GitHub: transferible a cuenta del cliente
- Proyecto Vercel: transferible a cuenta del cliente
- Dominio: debe ser propiedad del cliente
- Web3Forms: cuenta a nombre del cliente
- Sanity: cuenta a nombre del cliente si se usa

Siempre preferir la solución más simple y transferible sobre la más potente.
