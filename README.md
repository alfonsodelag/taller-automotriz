# Clínica Derma

Template profesional para clínicas dermatológicas, centros estéticos y medical spas. Está construido para clonarse rápido, editarse desde archivos locales y desplegarse en Vercel sin backend propio.

## Stack

- Astro
- Tailwind CSS
- TypeScript ligero
- Contenido en archivos locales
- Web3Forms para formularios
- Vercel para deploy
- GitHub para control y transferencia de ownership
- Sanity opcional solo si el cliente necesita editar blog o contenido desde un panel

## Instalar

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build y preview

```bash
npm run build
npm run preview
```

## Editar información del negocio

Actualiza `src/config/site.ts` para cambiar nombre, teléfono, WhatsApp, email, dirección, horarios, SEO y colores base.

## Editar contenido

- Servicios: `src/content/services.ts`
- Preguntas frecuentes: `src/content/faqs.ts`
- Testimonios: `src/content/testimonials.ts`
- Doctores: `src/content/doctors.ts`
- Blog: `src/content/blog.ts`

Las imágenes públicas viven en `public/images`. Puedes reemplazarlas manteniendo los mismos nombres o actualizar las rutas en los archivos de contenido.

## Formulario con Web3Forms

1. Crea una cuenta o formulario en Web3Forms.
2. Copia el access key.
3. Crea `.env` local usando `.env.example` como referencia.
4. Define:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key
```

En Vercel, agrega la misma variable en Project Settings > Environment Variables.

## Deploy en Vercel

1. Sube el proyecto a GitHub.
2. Importa el repositorio en Vercel.
3. Framework preset: Astro.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Configura `PUBLIC_WEB3FORMS_ACCESS_KEY` si usarás el formulario.
7. Conecta el dominio del cliente.

## Crear un nuevo sitio para cliente

1. Duplica el repositorio o crea uno nuevo desde este template.
2. Cambia `src/config/site.ts`.
3. Ajusta servicios, doctores, testimonios y blog en `src/content`.
4. Reemplaza imágenes en `public/images`.
5. Revisa textos SEO por ciudad y especialidad.
6. Despliega en Vercel.
7. Transfiere ownership de GitHub, Vercel, dominio y Web3Forms al cliente cuando corresponda.

## Sanity

No está instalado por defecto. Añádelo solo si el cliente necesita editar blog o contenido frecuente sin tocar GitHub.
