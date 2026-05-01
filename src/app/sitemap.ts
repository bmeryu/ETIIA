import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.etiia.com';

  // Definición de las rutas principales del sitio
  const baseRoutes = [
    '',
    '/soluciones',
    '/demos',
    '/formacion',
    '/equipo',
    '/contacto',
  ];

  const demoRoutes = [
    '/demos/atendeai',
    '/demos/ventaai',
    '/demos/facturai',
  ];

  const routes = [...baseRoutes, ...demoRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : (route.includes('/demos/') ? 0.9 : 0.8),
  }));

  // Aquí en el futuro se podrían agregar dinámicamente las rutas de cada demo individual
  // consultando a la base de datos o al CMS.

  return [...routes];
}
