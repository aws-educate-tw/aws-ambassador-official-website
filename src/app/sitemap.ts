import { SITE_URL } from '@/lib/site';
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const paths = ['/', '/program', '/events', '/alumni'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: new URL(path, SITE_URL).toString() }));
}
