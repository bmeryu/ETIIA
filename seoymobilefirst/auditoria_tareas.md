# Tareas SEO y Mobile-First: ETIIA.com

Este documento recopila las tareas resultantes de la auditoría técnica implementada en abril de 2026. El sitio está basado en **Next.js 14**, lo que significa que el rendimiento Core Web Vitals ya está optimizado casi nativamente, enfocándonos en el SEO Social y UX.

## ✅ Tareas Completadas
- **SEO Base:** Declarado explícitamente el dominio base (`https://www.etiia.com`) como `metadataBase` para asegurar URLS absolutas correctas.
- **SEO Semántico (Next.js):** Activación nativa de URL Canonical cruzado (`/`).
- **SEO B2B (Schema):** Inserción de código JSON-LD bajo estándar `Organization` para reconocimiento e indexado de empresas y servicios B2B locales en el Layout de Next.js.
- **Social Graph:** Construcción final de los sub-objetos `openGraph` y `twitter` en la metadata API, completando la compatibilidad de Open Graph Image y Twitter Summary Large Image Cards.
- **Mobile-First:** Remediado el "touch target" en `Navbar.tsx` para el menú hamburguesa que caía en lo inoperable (cambiado de padding `p-1` a `p-3` logrando el mínimo exigible de 44px de click area).

## ⏳ Tareas Pendientes o en Progreso
- [ ] **Assets Sociales:** Diseñar e incorporar físicamente un archivo en `public/og-image.jpg` con dimensiones exactas de 1200x630px para las vistas previas sociales. 
