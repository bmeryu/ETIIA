import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.etiia.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'], // Bloqueamos el rastreo a rutas internas
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
