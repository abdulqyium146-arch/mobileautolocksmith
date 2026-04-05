import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { LOCATIONS, getLocationBySlug, getNearbyLocations } from '@/lib/locations'
import { SERVICES } from '@/lib/services'
import { SITE } from '@/lib/siteConfig'
import { buildLocalBusiness, buildFAQPage, buildBreadcrumb } from '@/lib/schema'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTABanner } from '@/components/ui/CTABanner'

type Props = { params: { city: string } }

export async function generateStaticParams() {
  return LOCATIONS.map(l => ({ city: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = getLocationBySlug(params.city)
  if (!loc) return {}
  return {
    title: `Auto Locksmith ${loc.name} | Excalibur — Mobile, 24/7 | ${SITE.phone}`,
    description: `Lost car keys in ${loc.name}? Excalibur Auto Locksmiths covers ${loc.name} (${loc.county}). Mobile, 24/7, up to 60% cheaper than the dealer. Call ${SITE.phone}.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `Auto Locksmith ${loc.name} | Excalibur`,
      description: `Mobile auto locksmith in ${loc.name} — 24/7, at your location. Call ${SITE.phone}.`,
      url: `${SITE.domain}/locations/${loc.slug}`,
    },
  }
}

function buildCityFAQs(loc: ReturnType<typeof getLocationBySlug>) {
  if (!loc) return []
  return [
    {
      question: `How quickly can you reach ${loc.name} in an emergency?`,
      answer: `In most cases, Ian or Adam can reach ${loc.name} within one hour of your call. ${loc.name} in ${loc.county} is well within Excalibur's regular coverage area. Call ${SITE.phone} and we'll give you a firm arrival time straight away.`,
    },
    {
      question: `Do you cover all postcodes in ${loc.name}?`,
      answer: `Yes — we cover all ${loc.postcodePrefixes.join(', ')} postcode areas and surrounding districts. If you're unsure whether your specific location falls within our coverage, just call ${SITE.phone} and we'll confirm immediately.`,
    },
    {
      question: `Are you available in ${loc.name} at weekends and bank holidays?`,
      answer: `Absolutely. Excalibur operates 24 hours a day, 7 days a week, 365 days a year — including all bank holidays. A key emergency doesn't pick a convenient time, and neither do we. Ian or Adam will answer your call personally whenever you need us in ${loc.name}.`,
    },
    {
      question: `Can you come to a car park or roadside location in ${loc.name}?`,
      answer: `Yes — our mobile workshop comes to wherever your vehicle is. Whether you're in a town centre car park, a retail park, on a residential street, or broken down on a road in ${loc.name}, we'll come to you. No towing required in the vast majority of cases.`,
    },
  ]
}

export default function CityPage({ params }: Props) {
  const loc = getLocationBySlug(params.city)
  if (!loc) notFound()

  const nearbyLocations = getNearbyLocations(loc.nearbySlugs)
  const faqs = buildCityFAQs(loc)

  const lbSchema = buildLocalBusiness(loc.name)
  const faqSchema = buildFAQPage(faqs)
  const bcSchema = buildBreadcrumb([
    { name: 'Home', url: SITE.domain },
    { name: 'Areas', url: `${SITE.domain}/locations` },
    { name: loc.name, url: `${SITE.domain}/locations/${loc.slug}` },
  ])

  return (
    <>
      <Script
        id={`schema-lb-city-${loc.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <Script
        id={`schema-faq-city-${loc.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`schema-bc-city-${loc.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }}
      />

      <div className="container">
        <BreadcrumbNav
          items={[
            { name: 'Areas', href: '/locations' },
            { name: loc.name, href: `/locations/${loc.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20" aria-labelledby="city-heading">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold text-sm font-semibold mb-4">
              <MapPin size={14} aria-hidden="true" />
              {loc.county} · {loc.postcodePrefixes.join(', ')}
            </div>
            <h1
              id="city-heading"
              className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            >
              Auto Locksmith in {loc.name}, {loc.county}
            </h1>
            <p className="text-white/70 text-xl mb-4 max-w-2xl">
              {loc.localContext}
            </p>
            <p className="text-white/60 text-sm mb-8">
              Postcodes covered: <strong className="text-white">{loc.postcodePrefixes.join(' · ')}</strong>
            </p>
            <a
              href={SITE.phoneTel}
              className="btn-primary text-lg px-8 py-4 min-h-[60px]"
              aria-label={`Call Excalibur Auto Locksmiths on ${SITE.phone}`}
            >
              <Phone size={20} aria-hidden="true" />
              Call {SITE.phone} — Available Now
            </a>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="section bg-surface" aria-labelledby="city-services-heading">
        <div className="container">
          <h2 id="city-services-heading" className="section-heading text-center mb-2">
            Our Services in {loc.name}
          </h2>
          <p className="section-subheading text-center mx-auto mb-10">
            All 13 services available at your location in {loc.name} — same day.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map(service => (
              <ServiceCard key={service.slug} service={service} citySlug={loc.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="section bg-white" aria-labelledby="local-heading">
        <div className="container max-w-3xl">
          <h2 id="local-heading" className="section-heading mb-6">
            Why {loc.name} Drivers Trust Excalibur
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              {loc.localContext} When you&apos;re stranded in {loc.name} — whether in a car park,
              on a residential street, or at the roadside — the last thing you want is to wait days
              for a dealer appointment or pay for an unnecessary tow. Ian and Adam have been serving
              drivers across {loc.county} for over 30 years, and {loc.name} is firmly within their
              regular coverage area.
            </p>
            <p>
              Every service Excalibur provides is performed at your vehicle&apos;s location in
              {' '}{loc.name}. That means your {loc.postcodePrefixes[0]} postcode is no barrier — we bring
              the workshop to you. Lost key replacement, broken key extraction, immobiliser
              programming, remote fob replacement — all done on-site, the same day you call, at
              prices consistently 40–60% lower than {loc.name}&apos;s main dealers would charge.
            </p>
          </div>
        </div>
      </section>

      {/* Postcodes */}
      <section className="section bg-surface" aria-labelledby="postcodes-heading">
        <div className="container max-w-3xl">
          <h2 id="postcodes-heading" className="section-heading mb-6">
            Postcodes We Cover in {loc.name}
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {loc.postcodePrefixes.map(pc => (
              <span
                key={pc}
                className="bg-white border border-border text-primary font-bold px-5 py-2 rounded-full text-sm"
              >
                {pc}
              </span>
            ))}
          </div>
          <p className="text-muted text-sm">
            Don&apos;t see your postcode?{' '}
            <a href={SITE.phoneTel} className="text-accent font-bold hover:underline focus-ring">
              Call us
            </a>{' '}
            — we cover all surrounding areas.
          </p>
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyLocations.length > 0 && (
        <section className="section bg-white" aria-labelledby="nearby-heading">
          <div className="container">
            <h2 id="nearby-heading" className="section-heading text-center mb-8">
              We Also Cover Nearby Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {nearbyLocations.map(nearby => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="card flex items-center gap-3 p-4 group"
                >
                  <MapPin size={16} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-sm text-primary group-hover:text-accent transition-colors">
                      {nearby.name}
                    </p>
                    <p className="text-xs text-muted">{nearby.county}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted ml-auto" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-surface" aria-labelledby="city-faq-heading">
        <div className="container max-w-3xl">
          <h2 id="city-faq-heading" className="section-heading mb-6">
            Auto Locksmith {loc.name} — Common Questions
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner city={loc.name} />
    </>
  )
}
