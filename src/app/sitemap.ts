import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.etiia.com';

  // Definición de las rutas principales del sitio
  const routes = [
    '',
    '/soluciones',
    '/demos',
    '/formacion',
    '/equipo',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8, // Prioridad más alta para la home
  }));

  // Aquí en el futuro se podrían agregar dinámicamente las rutas de cada demo individual
  // consultando a la base de datos o al CMS.

  return [...routes];
}
