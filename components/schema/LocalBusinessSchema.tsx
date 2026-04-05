import { LOCATIONS } from '@/lib/locations'

const BASE_URL = 'https://mobileautolocksmiths.co.uk'

interface Props {
  city?: string
  region?: string
  service?: string
  pageUrl: string
}

/** Server component — injects Locksmith JSON-LD structured data into the page */
export function LocalBusinessSchema({ city, region, service }: Props) {
  type SchemaObject = Record<string, unknown>

  const schema: SchemaObject = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    '@id': `${BASE_URL}/#business`,
    name: 'Excalibur Auto Locksmiths',
    image: `${BASE_URL}/excaliburAuto_locksmith_logo.svg`,
    url: BASE_URL,
    telephone: '+447831872740',
    priceRange: '££',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Wigan',
      addressLocality: city ?? 'Wigan',
      addressRegion: region ?? 'Greater Manchester',
      postalCode: 'WN1',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.5448,
      longitude: -2.6318,
    },
    areaServed: LOCATIONS.map(l => ({ '@type': 'City', name: l.name })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
    },
  }

  if (service) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: service,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service },
        },
      ],
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
