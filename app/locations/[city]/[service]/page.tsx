import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { LOCATIONS, getLocationBySlug, getNearbyLocations } from '@/lib/locations'
import { SERVICES, getServiceBySlug } from '@/lib/services'
import { SITE } from '@/lib/siteConfig'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTABanner } from '@/components/ui/CTABanner'
import { getLocationServiceMetadata } from '@/lib/seo/metadata'
import { getServiceFAQs } from '@/lib/seo/faqs'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { buildBreadcrumbs } from '@/lib/seo/breadcrumbs'

type Props = { params: { city: string; service: string } }

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = []
  for (const loc of LOCATIONS) {
    for (const svc of SERVICES) {
      params.push({ city: loc.slug, service: svc.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return getLocationServiceMetadata(params.city, params.service)
}

function buildCityServiceFAQs(
  svc: ReturnType<typeof getServiceBySlug>,
  loc: ReturnType<typeof getLocationBySlug>
) {
  if (!svc || !loc) return []
  return [
    {
      question: `How quickly can you provide ${svc.name.toLowerCase()} in ${loc.name}?`,
      answer: `In most cases, Ian or Adam can reach ${loc.name} within one hour of your call. We know the ${loc.county} area well and travel directly to your vehicle. Call ${SITE.phone} for a firm ETA.`,
    },
    {
      question: `How much does ${svc.name.toLowerCase()} cost in ${loc.name}?`,
      answer: `Pricing for ${svc.name.toLowerCase()} in ${loc.name} starts ${svc.priceFrom}. This is all-inclusive — there are no hidden call-out charges. We're consistently 40–60% cheaper than what the main dealer would charge ${loc.name} drivers. Call ${SITE.phone} for your exact quote.`,
    },
    {
      question: `Do you need to tow my car to a workshop in ${loc.name}?`,
      answer: `No. All ${svc.name.toLowerCase()} work is carried out at your vehicle's location in ${loc.name}. Our fully equipped mobile workshop has everything needed for ${svc.name.toLowerCase()} on-site. You don't need to move your car.`,
    },
  ]
}

export default function CityServicePage({ params }: Props) {
  const loc = getLocationBySlug(params.city)
  const svc = getServiceBySlug(params.service)
  if (!loc || !svc) notFound()

  const nearbyLocations = getNearbyLocations(loc.nearbySlugs)
  const otherServices = SERVICES.filter(s => s.slug !== svc.slug).slice(0, 4)
  const faqs = buildCityServiceFAQs(svc, loc)

  return (
    <>
      <LocalBusinessSchema city={loc.name} region={loc.county} service={svc.name} pageUrl={`https://mobileautolocksmiths.co.uk/locations/${loc.slug}/${svc.slug}`} />
      <FAQSchema faqs={getServiceFAQs(params.service)} />
      <BreadcrumbSchema items={buildBreadcrumbs({ city: params.city, service: params.service, isLocationService: true })} />

      <div className="container">
        <BreadcrumbNav
          items={[
            { name: 'Areas', href: '/locations' },
            { name: loc.name, href: `/locations/${loc.slug}` },
            { name: svc.name, href: `/locations/${loc.slug}/${svc.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20" aria-labelledby="cs-heading">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-gold text-sm font-semibold mb-4">
              <MapPin size={14} aria-hidden="true" />
              {loc.name}, {loc.county}
            </div>
            <h1
              id="cs-heading"
              className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            >
              {svc.name} in {loc.name}
            </h1>
            <p className="text-white/70 text-xl mb-8 max-w-2xl">
              Mobile {svc.name.toLowerCase()} for {loc.name} drivers — at your location,
              same day, up to 60% cheaper than the main dealer.
            </p>
            <a
              href={SITE.phoneTel}
              className="btn-primary text-lg px-8 py-4 min-h-[60px]"
              aria-label={`Call Excalibur on ${SITE.phone}`}
            >
              <Phone size={20} aria-hidden="true" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Intro — city-specific */}
      <section className="section bg-white" aria-labelledby="intro-heading">
        <div className="container max-w-3xl">
          <h2 id="intro-heading" className="section-heading mb-6">
            {svc.name} in {loc.name} — How Excalibur Can Help
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              {loc.localContext} If you&apos;re in {loc.name} and need {svc.name.toLowerCase()},
              Excalibur Auto Locksmiths is your best option — mobile, available 24/7, and
              consistently cheaper than any {loc.name} main dealer.
            </p>
            <p>
              {svc.bodyParagraphs[0]}
            </p>
            <p>
              Ian and Adam serve {loc.name} and the surrounding {loc.county} area regularly.
              The postcodes {loc.postcodePrefixes.join(', ')} are all well within our coverage
              area — we travel directly to your vehicle wherever it is in {loc.name}.
            </p>
            <p>
              {svc.bodyParagraphs[2]}
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface" aria-labelledby="cs-process-heading">
        <div className="container max-w-3xl">
          <h2 id="cs-process-heading" className="section-heading mb-8">
            How We Provide {svc.name} in {loc.name}
          </h2>
          <ol className="flex flex-col gap-6" role="list">
            {svc.process.map(step => (
              <li key={step.step} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-accent text-white
                             font-heading font-black flex items-center justify-center text-base"
                  aria-hidden="true"
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Excalibur in this city */}
      <section className="section bg-white" aria-labelledby="why-heading">
        <div className="container max-w-3xl">
          <h2 id="why-heading" className="section-heading mb-6">
            Why {loc.name} Drivers Choose Excalibur
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              `Mobile workshop comes to your location in ${loc.name}`,
              `24/7 availability — including weekends and bank holidays`,
              `Up to 60% cheaper than ${loc.name} main dealers`,
              `${SITE.experience} years specialist automotive locksmith experience`,
              `Ian or Adam answer every call personally`,
              `All makes and models covered in ${loc.county}`,
            ].map(point => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other Services in City */}
      <section className="section bg-surface" aria-labelledby="other-services-heading">
        <div className="container">
          <h2 id="other-services-heading" className="section-heading mb-6">
            Other Services in {loc.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map(s => (
              <Link
                key={s.slug}
                href={`/locations/${loc.slug}/${s.slug}`}
                className="card flex items-center gap-3 p-4 group"
              >
                <div>
                  <p className="font-bold text-sm text-primary group-hover:text-accent transition-colors">
                    {s.name}
                  </p>
                  <p className="text-xs text-accent font-semibold">{s.priceFrom}</p>
                </div>
                <ArrowRight size={14} className="text-muted ml-auto" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same service nearby */}
      {nearbyLocations.length > 0 && (
        <section className="section bg-white" aria-labelledby="nearby-service-heading">
          <div className="container">
            <h2 id="nearby-service-heading" className="section-heading mb-6">
              {svc.name} in Nearby Areas
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyLocations.map(nearby => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}/${svc.slug}`}
                  className="flex items-center gap-2 bg-surface border border-border hover:border-accent
                             hover:text-accent text-sm font-semibold px-4 py-2 rounded-full
                             transition-colors focus-ring"
                >
                  <MapPin size={12} aria-hidden="true" />
                  {svc.name} in {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section bg-surface" aria-labelledby="cs-faq-heading">
        <div className="container max-w-3xl">
          <h2 id="cs-faq-heading" className="section-heading mb-6">
            {svc.name} in {loc.name} — Questions &amp; Answers
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner city={loc.name} />
    </>
  )
}
