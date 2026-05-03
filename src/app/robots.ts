import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://etiia.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/private/'], // Bloqueamos el rastreo a rutas internas
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
