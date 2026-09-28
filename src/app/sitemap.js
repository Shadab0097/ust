import { getAllProducts } from '@/data/catalog'
import { solutions } from '@/data/solutions'
import { absoluteUrl, CONTENT_UPDATED } from '@/data/site'

// Generated at build time -> /sitemap.xml. Includes image entries for Google Images.
export default function sitemap() {
  // Real content date (not build time) - Google only trusts <lastmod> that reflects actual changes.
  const now = new Date(CONTENT_UPDATED)

  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/products/', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/solutions/', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/about/', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact/', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/quote/', priority: 0.7, changeFrequency: 'yearly' },
  ].map((p) => ({ url: absoluteUrl(p.path), lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority }))

  const productPages = getAllProducts().map((p) => ({
    url: absoluteUrl(`/products/${p.slug}/`),
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
    images: p.images.map((img) => absoluteUrl(img)),
  }))

  const solutionPages = solutions.map((s) => ({
    url: absoluteUrl(`/solutions/${s.slug}/`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
    images: [absoluteUrl(s.image)],
  }))

  return [...staticPages, ...productPages, ...solutionPages]
}
