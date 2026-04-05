import type { Metadata } from 'next'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'

/** Single source of truth for the domain — never hardcode elsewhere in SEO helpers */
const BASE_URL = 'https://mobileautolocksmiths.co.uk'
const SITE_NAME = 'Excalibur Auto Locksmiths'
const PHONE = '07831 872 740'

function og(title: string, description: string, url: string) {
  return {
    title,
    description,
    url,
    type: 'website' as const,
    siteName: SITE_NAME,
    locale: 'en_GB',
  }
}

function tw(title: string, description: string) {
  return { card: 'summary' as const, title, description }
}

/** Returns metadata for the homepage */
export function getHomepageMetadata(): Metadata {
  const title = 'Auto Locksmith Wigan & St Helens | Excalibur — 24/7 Mobile'
  const description = `Lost car keys in Wigan or St Helens? Excalibur's mobile auto locksmiths come to you 24/7. Same day, up to 60% cheaper than the main dealer. Call Ian or Adam: ${PHONE}.`
  const url = BASE_URL
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

/** Returns metadata for a service page — /services/[slug] */
export function getServiceMetadata(slug: string): Metadata {
  const svc = SERVICES.find(s => s.slug === slug)
  if (!svc) return {}
  const title = `${svc.name} — Mobile, Same Day | Excalibur`
  const description = `Professional ${svc.name.toLowerCase()} anywhere across the North West. Mobile workshop comes to you — 24/7, same day. ${svc.priceFrom}. Call ${PHONE}.`
  const url = `${BASE_URL}/services/${slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

/** Returns metadata for a location hub page — /locations/[city] */
export function getLocationMetadata(citySlug: string): Metadata {
  const loc = LOCATIONS.find(l => l.slug === citySlug)
  if (!loc) return {}
  const title = `Auto Locksmith in ${loc.name}, ${loc.county} | Excalibur — 24/7`
  const description = `Mobile auto locksmith in ${loc.name}. Lost car keys replaced same day at your location — 24/7, up to 60% cheaper than ${loc.name} main dealers. Call ${PHONE}.`
  const url = `${BASE_URL}/locations/${citySlug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

/** Returns metadata for a location+service combination page — /locations/[city]/[service] */
export function getLocationServiceMetadata(citySlug: string, serviceSlug: string): Metadata {
  const loc = LOCATIONS.find(l => l.slug === citySlug)
  const svc = SERVICES.find(s => s.slug === serviceSlug)
  if (!loc || !svc) return {}
  const title = `${svc.name} in ${loc.name}, ${loc.county} | Excalibur`
  const description = `Need ${svc.name.toLowerCase()} in ${loc.name}? Excalibur comes to your location in ${loc.name} — same day, 24/7. ${svc.priceFrom}. Up to 60% cheaper than the main dealer. Call ${PHONE}.`
  const url = `${BASE_URL}/locations/${citySlug}/${serviceSlug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

/** Returns metadata for the emergency page */
export function getEmergencyMetadata(): Metadata {
  const title = '24/7 Emergency Auto Locksmith North West | Excalibur — Call Now'
  const description = `Locked out or lost your car keys? Excalibur emergency auto locksmith answers every call personally — 24 hours, 7 days. North West coverage. Call Ian or Adam now: ${PHONE}.`
  const url = `${BASE_URL}/emergency`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

/** Returns metadata for a blog post page */
export function getBlogPostMetadata(slug: string, title: string): Metadata {
  const description = `Read our guide on ${title}. Expert auto locksmith advice from Ian & Adam Casson — serving Wigan, St Helens & the North West since 1993.`
  const fullTitle = `${title} | Excalibur Auto Locksmiths`
  const url = `${BASE_URL}/blog/${slug}`
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: og(fullTitle, description, url),
    twitter: tw(fullTitle, description),
  }
}
