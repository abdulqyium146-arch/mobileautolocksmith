import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'
import { SITE } from '@/lib/siteConfig'

const BASE = SITE.domain
const NOW = new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  // Homepage
  urls.push({ url: BASE, lastModified: NOW, changeFrequency: 'daily', priority: 1.0 })

  // Emergency
  urls.push({ url: `${BASE}/emergency`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.95 })

  // Legacy pages
  urls.push({ url: `${BASE}/lost-car-keys-wigan`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 })
  urls.push({ url: `${BASE}/lost-car-keys-st-helens`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.9 })

  // Services hub
  urls.push({ url: `${BASE}/services`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.85 })

  // Individual service pages
  for (const svc of SERVICES) {
    urls.push({
      url: `${BASE}/services/${svc.slug}`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: 0.85,
    })
  }

  // Locations hub
  urls.push({ url: `${BASE}/locations`, lastModified: NOW, changeFrequency: 'monthly', priority: 0.8 })

  // City hub pages
  for (const loc of LOCATIONS) {
    const isPrimary = loc.priority === 'primary'
    const isSecondary = loc.priority === 'secondary'
    const cityPriority = isPrimary ? 0.9 : isSecondary ? 0.78 : 0.7

    urls.push({
      url: `${BASE}/locations/${loc.slug}`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority: cityPriority,
    })

    // City×Service pages
    for (const svc of SERVICES) {
      const pageP = isPrimary ? 0.82 : isSecondary ? 0.75 : 0.65
      urls.push({
        url: `${BASE}/locations/${loc.slug}/${svc.slug}`,
        lastModified: NOW,
        changeFrequency: 'monthly',
        priority: pageP,
      })
    }
  }

  // Static pages
  for (const [path, priority] of [
    ['/about', 0.6],
    ['/reviews', 0.6],
    ['/contact', 0.6],
    ['/gallery', 0.5],
    ['/blog', 0.65],
  ] as [string, number][]) {
    urls.push({
      url: `${BASE}${path}`,
      lastModified: NOW,
      changeFrequency: 'monthly',
      priority,
    })
  }

  // Blog posts
  const blogPosts = [
    'lost-car-keys-what-to-do-north-west',
    'car-key-replacement-cost-uk-2024',
    'locksmith-vs-main-dealer-car-keys',
    'transponder-keys-explained',
  ]
  for (const slug of blogPosts) {
    urls.push({
      url: `${BASE}/blog/${slug}`,
      lastModified: NOW,
      changeFrequency: 'never',
      priority: 0.55,
    })
  }

  return urls
}
