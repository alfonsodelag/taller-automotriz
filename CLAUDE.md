# CLAUDE.md

## Project Overview

This project is a dermatology and aesthetic clinic website template.

The goal is to provide a clean, premium, reusable and transferable website for dermatology clinics, aesthetic clinics, skincare centers and medical spas. It should be easy to adapt by changing branding, text, images, contact information, services and colors.

## Preferred Stack

- Astro
- Tailwind CSS
- Light TypeScript
- Static local content files
- Web3Forms for contact forms
- Vercel for deployment
- GitHub for version control and ownership transfer
- Sanity CMS only if a client needs editable blog/content

Avoid Firebase, Supabase, authentication, dashboards, databases, payment systems or user accounts unless explicitly requested.

## Editable Files

- `src/config/site.ts`
- `src/content/services.ts`
- `src/content/faqs.ts`
- `src/content/testimonials.ts`
- `src/content/doctors.ts`
- `src/content/blog.ts`

The intended workflow is:

1. Duplicate the template.
2. Change business info in one place.
3. Replace images and logo.
4. Adjust colors.
5. Deploy to Vercel.
6. Transfer ownership if needed.

## Structure

```txt
src/
  components/
  sections/
  layouts/
  pages/
  config/
  content/
  styles/
public/
  images/
  favicon.svg
```

## Contact Forms

Use Web3Forms. Do not build a custom backend for forms.

Required environment variable:

```env
PUBLIC_WEB3FORMS_ACCESS_KEY=
```

Never hardcode private keys.

## SEO And Accessibility

Every page should have a unique title, meta description, semantic headings, descriptive alt text and clear CTAs. Local SEO should be natural and focused on dermatology services in the target city.

Maintain semantic HTML, keyboard-accessible links/buttons and sufficient color contrast.

## Performance

Prefer Astro static rendering, local content and minimal JavaScript. Avoid heavy client-side libraries unless there is a clear need.

## Client Transferability

Keep dependencies understandable and easy for a client to own:

- GitHub repo owned by or transferred to client
- Vercel project owned by or transferred to client
- Domain owned by client
- Web3Forms account owned by client if possible
- CMS account only if a CMS is used

When choosing between a powerful solution and a simple transferable solution, choose the simple transferable solution.
