import { MetadataRoute } from 'next';
import { getInsightsList } from '@/lib/markdown';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://etiia.com';
  // Fecha de última actualización del sitio (actualizar en cada release)
  const siteLastMod = '2026-05-03T00:00:00.000Z';

  // Definición de las rutas principales del sitio
  const baseRoutes = [
    { path: '', priority: 1.0 },
    { path: '/demos', priority: 0.9 },
    { path: '/insights', priority: 0.9 },
    { path: '/contacto', priority: 0.85 },
    { path: '/servicios', priority: 0.8 },
    { path: '/politica-de-privacidad', priority: 0.3 },
    { path: '/terminos-de-servicio', priority: 0.3 },
  ];

  const demoRoutes = [
    '/demos/atendeai',
    '/demos/ventaai',
    '/demos/facturai',
    '/demos/lexsearch',
    '/demos/talentparse',
    '/demos/agendai',
    '/demos/cosechai',
    '/demos/transcribai',
    '/demos/autorend',
  ];

  const insights = getInsightsList();

  const baseEntries = baseRoutes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: siteLastMod,
    changeFrequency: 'weekly' as const,
    priority,
  }));

  const demoEntries = demoRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: siteLastMod,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const insightEntries = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date(insight.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...baseEntries, ...demoEntries, ...insightEntries];
}
