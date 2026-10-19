import { MetadataRoute } from 'next';
import { SEED_TRAMITES, SEED_NOTICIAS } from '@/data/seedData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.municatemu.cl';

  const staticPages = [
    '',
    '/tramites',
    '/noticias',
    '/documentos',
    '/municipio',
    '/transparencia',
    '/canales-oficiales',
    '/contacto',
    '/accesibilidad',
    '/privacidad',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const tramitePages = SEED_TRAMITES.map((t) => ({
    url: `${baseUrl}/tramites/${t.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const noticiaPages = SEED_NOTICIAS.map((n) => ({
    url: `${baseUrl}/noticias/${n.slug}`,
    lastModified: n.fecha_publicacion,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...tramitePages, ...noticiaPages];
}
