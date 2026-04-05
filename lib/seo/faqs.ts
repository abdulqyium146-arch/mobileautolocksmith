import { LOCATIONS } from '@/lib/locations'
import { SERVICES } from '@/lib/services'

const PHONE = '07831 872 740'

export interface FAQ {
  question: string
  answer: string
}

/** Exact Q&A from the live homepage FAQ section */
export const HOMEPAGE_FAQS: FAQ[] = [
  {
    question: 'How much does car key replacement cost in Wigan?',
    answer: `The cost depends on your vehicle make, model, and key type. Standard transponder keys typically start from £95 with Excalibur Auto Locksmiths — up to 60% less than what Wigan's main dealers charge. Remote key fobs start from around £75, and smart/proximity keys from £150. Call ${PHONE} for an exact quote for your vehicle.`,
  },
  {
    question: 'How quickly can you reach me in Wigan or St Helens?',
    answer: `In most cases, Ian or Adam can reach you within one hour anywhere in Wigan, St Helens, or the surrounding North West area. For very rural locations or during peak traffic periods, we'll give you an honest ETA on the call. We won't over-promise. Call ${PHONE} and we'll tell you straight.`,
  },
  {
    question: 'Can you programme keys for all car makes?',
    answer: `Yes — Excalibur covers all major makes and models sold in the UK, including Ford, Vauxhall, Volkswagen, Audi, BMW, Mercedes-Benz, Renault, Toyota, Honda, Nissan, and many more. If we haven't programmed a particular make, it's extremely unusual. Call us to confirm before making any alternative arrangements.`,
  },
  {
    question: 'Is it really cheaper than going to the main dealer?',
    answer: `Yes, consistently. Main dealers charge for OEM parts, dealer labour rates, programming licence fees, and their own margin. Excalibur uses quality compatible hardware and professional programming equipment without the dealer overhead. Most customers save 40–60% compared to their main dealer quote. Call ${PHONE} for a direct comparison.`,
  },
  {
    question: 'What if my car has a transponder chip or smart key system?',
    answer: `This is our specialism. Every modern vehicle sold in the UK since 1998 uses a transponder system, and the majority of post-2015 vehicles use smart key or proximity systems. Ian and Adam carry dealer-grade programming equipment for all these systems. The process takes slightly longer than a mechanical-only key but is entirely done on-site at your location.`,
  },
]

/** Returns the service-specific FAQs for a given service slug */
export function getServiceFAQs(slug: string): FAQ[] {
  const svc = SERVICES.find(s => s.slug === slug)
  return svc?.faqs ?? []
}

/** Returns 3 location-specific FAQs for a city hub page */
export function getLocationFAQs(citySlug: string): FAQ[] {
  const loc = LOCATIONS.find(l => l.slug === citySlug)
  if (!loc) return []
  return [
    {
      question: `How quickly can you reach me in ${loc.name}?`,
      answer: `In most cases, Ian or Adam can reach ${loc.name} within one hour of your call. ${loc.name} is well within Excalibur's regular coverage area. Call ${PHONE} and we'll give you a firm arrival time straight away.`,
    },
    {
      question: `Do you cover all postcodes in ${loc.name}?`,
      answer: `Yes — we cover all ${loc.postcodePrefixes.join(', ')} postcode areas and surrounding districts. If you're unsure whether your specific address falls within our coverage, call ${PHONE} and we'll confirm immediately.`,
    },
    {
      question: `Are you cheaper than ${loc.name} main dealers?`,
      answer: `Yes, consistently. Most ${loc.name} drivers who call us after getting a dealer quote save between 40% and 60%. We charge a single all-inclusive price — no hidden call-out fee, no separate programming charge. Call ${PHONE} for a direct comparison quote for your vehicle.`,
    },
  ]
}
