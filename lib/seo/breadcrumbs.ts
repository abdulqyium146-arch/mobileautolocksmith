import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'

const BASE_URL = 'https://mobileautolocksmiths.co.uk'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BuildOptions {
  city?: string
  service?: string
  isLocationService?: boolean
  isBlog?: boolean
  blogTitle?: string
  blogSlug?: string
}

/** Builds the breadcrumb array matching the UI breadcrumbs already visible on the site */
export function buildBreadcrumbs(options: BuildOptions): BreadcrumbItem[] {
  const home: BreadcrumbItem = { name: 'Home', url: BASE_URL }

  if (options.isBlog && options.blogTitle && options.blogSlug) {
    return [
      home,
      { name: 'Blog', url: `${BASE_URL}/blog` },
      { name: options.blogTitle, url: `${BASE_URL}/blog/${options.blogSlug}` },
    ]
  }

  if (options.isLocationService && options.city && options.service) {
    const loc = LOCATIONS.find(l => l.slug === options.city)
    const svc = SERVICES.find(s => s.slug === options.service)
    return [
      home,
      { name: 'Areas', url: `${BASE_URL}/locations` },
      { name: loc?.name ?? options.city, url: `${BASE_URL}/locations/${options.city}` },
      { name: svc?.name ?? options.service, url: `${BASE_URL}/locations/${options.city}/${options.service}` },
    ]
  }

  if (options.city) {
    const loc = LOCATIONS.find(l => l.slug === options.city)
    return [
      home,
      { name: 'Areas', url: `${BASE_URL}/locations` },
      { name: loc?.name ?? options.city, url: `${BASE_URL}/locations/${options.city}` },
    ]
  }

  if (options.service) {
    const svc = SERVICES.find(s => s.slug === options.service)
    return [
      home,
      { name: 'Services', url: `${BASE_URL}/services` },
      { name: svc?.name ?? options.service, url: `${BASE_URL}/services/${options.service}` },
    ]
  }

  return [home]
}
