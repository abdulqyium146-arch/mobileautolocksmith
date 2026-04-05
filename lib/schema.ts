import { SITE } from './siteConfig'
import type { Service } from './services'

export type FAQ = { question: string; answer: string }

export function buildLocalBusiness(city?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: SITE.name,
    image: `${SITE.domain}/images/excalibur-auto-locksmiths.jpg`,
    '@id': `${SITE.domain}/#localbusiness`,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Bank Transfer',
    areaServed: city
      ? { '@type': 'City', name: city }
      : [
          { '@type': 'City', name: 'Wigan' },
          { '@type': 'City', name: 'St Helens' },
          { '@type': 'AdministrativeArea', name: 'North West England' },
        ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.county,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.545,
      longitude: -2.6328,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday','Tuesday','Wednesday','Thursday',
          'Friday','Saturday','Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    hasMap: `https://maps.google.com/?q=${SITE.name}+Wigan`,
    sameAs: [],
    description: SITE.description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.reviewScore.toString(),
      reviewCount: SITE.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function buildService(service: Service, city?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: city ? `${service.name} in ${city}` : service.name,
    serviceType: service.name,
    provider: {
      '@type': 'Locksmith',
      name: SITE.name,
      telephone: SITE.phone,
      url: SITE.domain,
    },
    areaServed: city
      ? { '@type': 'City', name: city }
      : { '@type': 'AdministrativeArea', name: 'North West England' },
    description: service.shortDesc,
    offers: {
      '@type': 'Offer',
      price: service.priceFrom.replace('From £', ''),
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: service.priceFrom.replace('From £', ''),
        priceCurrency: 'GBP',
      },
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'customer service',
        availableLanguage: 'English',
      },
    },
  }
}

export function buildFAQPage(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildAggregateRating() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.reviewScore.toString(),
      reviewCount: SITE.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function buildOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.domain}/#organization`,
    name: SITE.name,
    url: SITE.domain,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.domain}/images/excalibur-logo.png`,
      width: 300,
      height: 60,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      contactType: 'customer service',
      areaServed: 'GB',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        opens: '00:00',
        closes: '23:59',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      },
    },
    founders: [
      {
        '@type': 'Person',
        name: 'Ian Casson',
        jobTitle: 'Founder & Master Auto Locksmith',
        worksFor: { '@type': 'Organization', name: SITE.name },
      },
      {
        '@type': 'Person',
        name: 'Adam Casson',
        jobTitle: 'Senior Auto Locksmith',
        worksFor: { '@type': 'Organization', name: SITE.name },
      },
    ],
    foundingDate: '1994',
    description: SITE.description,
    areaServed: { '@type': 'AdministrativeArea', name: 'North West England' },
  }
}

export function buildPerson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ian Casson',
    jobTitle: 'Master Auto Locksmith',
    worksFor: {
      '@type': 'LocalBusiness',
      name: SITE.name,
    },
    knowsAbout: [
      'Automotive Locksmithing',
      'Vehicle Key Programming',
      'Immobiliser Systems',
      'Transponder Key Technology',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Auto Locksmith',
      occupationLocation: {
        '@type': 'City',
        name: 'Wigan',
      },
      estimatedSalary: null,
      skills: 'Key cutting, transponder programming, immobiliser reset, lock change',
    },
  }
}

export function buildArticle(params: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    author: {
      '@type': 'Person',
      name: params.authorName ?? 'Ian Casson',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.domain}/images/excalibur-logo.png`,
      },
    },
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url,
    },
  }
}
