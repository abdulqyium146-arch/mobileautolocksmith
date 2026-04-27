import type { Metadata } from 'next'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'

const BASE_URL = 'https://mobileautolocksmiths.co.uk'
const SITE_NAME = 'Excalibur Auto Locksmiths'
const PHONE = '07309 903 243'

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

export function getHomepageMetadata(): Metadata {
  const title = 'Auto Locksmith Near Me | Car Key Replacement | Excalibur — 24/7 North West'
  const description = `Mobile auto locksmith covering Wigan, St Helens & the North West. Lost car keys replaced same day — car key cutting, programming, car lockout service & key fob replacement. 24/7, up to 60% cheaper than dealers. Call ${PHONE}.`
  const url = BASE_URL
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

/** Uses each service's own optimised metaTitle and metaDescription from services.ts */
export function getServiceMetadata(slug: string): Metadata {
  const svc = SERVICES.find(s => s.slug === slug)
  if (!svc) return {}
  const title = svc.metaTitle
  const description = svc.metaDescription
  const url = `${BASE_URL}/services/${slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

export function getLocationMetadata(citySlug: string): Metadata {
  const loc = LOCATIONS.find(l => l.slug === citySlug)
  if (!loc) return {}
  const title = `Car Locksmith ${loc.name} | Auto Locksmith Near Me — 24/7 | Excalibur`
  const description = `Mobile car locksmith in ${loc.name} — lost car keys replaced same day at your location. Car key cutting, programming, car lockout & key fob replacement. 24/7, up to 60% cheaper than ${loc.name} main dealers. Call ${PHONE}.`
  const url = `${BASE_URL}/locations/${citySlug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

export function getLocationServiceMetadata(citySlug: string, serviceSlug: string): Metadata {
  const loc = LOCATIONS.find(l => l.slug === citySlug)
  const svc = SERVICES.find(s => s.slug === serviceSlug)
  if (!loc || !svc) return {}
  const title = `${svc.name} ${loc.name} | Mobile Car Locksmith Near Me | Excalibur`
  const description = `${svc.name} in ${loc.name}, ${loc.county} — Excalibur's mobile auto locksmith comes to your location. Same day, 24/7. ${svc.priceFrom}. Up to 60% cheaper than ${loc.name} main dealers. Call ${PHONE}.`
  const url = `${BASE_URL}/locations/${citySlug}/${serviceSlug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

export function getEmergencyMetadata(): Metadata {
  const title = 'Emergency Car Locksmith 24/7 | Locked Out of Car Near Me | Excalibur'
  const description = `Emergency auto locksmith — locked out of car, lost keys, keys locked in car, car lockout service. Excalibur answers 24hrs, 7 days across the North West. Typical response under 1 hour. Call ${PHONE}.`
  const url = `${BASE_URL}/emergency`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: og(title, description, url),
    twitter: tw(title, description),
  }
}

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
