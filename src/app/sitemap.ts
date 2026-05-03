import { MetadataRoute } from 'next';
import { getInsightsList } from '@/lib/markdown';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.etiia.com';

  // Definición de las rutas principales del sitio
  const baseRoutes = [
    '',
    '/demos',
    '/insights',
    '/contacto',
    '/servicios',
  ];

  const demoRoutes = [
    '/demos/atendeai',
    '/demos/ventaai',
    '/demos/facturai',
  ];

  const insights = getInsightsList();
  const insightRoutes = insights.map((insight) => `/insights/${insight.slug}`);

  const routes = [...baseRoutes, ...demoRoutes, ...insightRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : (route.includes('/insights/') ? 0.85 : 0.8),
  }));

  return [...routes];
}
