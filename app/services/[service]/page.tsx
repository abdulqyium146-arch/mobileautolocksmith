import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, Clock, PoundSterling, AlertTriangle, CheckCircle, ArrowRight, MapPin } from 'lucide-react'
import { SERVICES, getServiceBySlug, getRelatedServices } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'
import { SITE } from '@/lib/siteConfig'
import { buildService, buildLocalBusiness, buildFAQPage, buildBreadcrumb } from '@/lib/schema'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CTABanner } from '@/components/ui/CTABanner'

type Props = {
  params: { service: string }
}

export async function generateStaticParams() {
  return SERVICES.map(s => ({ service: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.service)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE.domain}/services/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service)
  if (!service) notFound()

  const relatedServices = getRelatedServices(service.relatedSlugs)

  const serviceSchema = buildService(service)
  const lbSchema = buildLocalBusiness()
  const faqSchema = buildFAQPage(service.faqs)
  const breadcrumbSchema = buildBreadcrumb([
    { name: 'Home', url: SITE.domain },
    { name: 'Services', url: `${SITE.domain}/services` },
    { name: service.name, url: `${SITE.domain}/services/${service.slug}` },
  ])

  return (
    <>
      <Script
        id={`schema-service-${service.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`schema-lb-${service.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <Script
        id={`schema-faq-${service.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`schema-bc-${service.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <div className="container">
        <BreadcrumbNav
          items={[
            { name: 'Services', href: '/services' },
            { name: service.name, href: `/services/${service.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20" aria-labelledby="service-heading">
        <div className="container">
          <div className="max-w-3xl">
            <h1
              id="service-heading"
              className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4"
            >
              {service.h1}
            </h1>
            <p className="text-white/70 text-xl mb-6">{service.tagline}</p>

            {/* Pain point box */}
            <div className="flex gap-3 bg-gold/20 border border-gold/40 rounded-card p-4 mb-8">
              <AlertTriangle size={20} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-white/90 text-sm leading-relaxed">
                {service.painPoint}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
                <PoundSterling size={14} aria-hidden="true" /> {service.priceFrom}
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
                <Clock size={14} aria-hidden="true" /> {service.timeOnSite} on-site
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full">
                <CheckCircle size={14} aria-hidden="true" /> {service.availability}
              </span>
            </div>

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

      {/* Service Body */}
      <section className="section bg-white" aria-labelledby="body-heading">
        <div className="container max-w-3xl">
          <h2 id="body-heading" className="section-heading mb-6">
            {service.name} — Full Service Details
          </h2>
          <div className="prose prose-slate max-w-none space-y-6">
            {service.bodyParagraphs.map((para, i) => (
              <p key={i} className="text-color-text leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface" aria-labelledby="process-heading">
        <div className="container max-w-3xl">
          <h2 id="process-heading" className="section-heading mb-8">
            How We Do It — At Your Location
          </h2>
          <ol className="flex flex-col gap-8" role="list">
            {service.process.map(step => (
              <li key={step.step} className="flex gap-5">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white
                             font-heading font-black text-lg flex items-center justify-center"
                  aria-hidden="true"
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Vehicle + Key Compatibility */}
      <section className="section bg-white" aria-labelledby="compat-heading">
        <div className="container max-w-3xl">
          <h2 id="compat-heading" className="section-heading mb-8">
            Vehicle &amp; Key Compatibility
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading font-bold text-primary text-base mb-3">
                Compatible Vehicle Types
              </h3>
              <ul className="flex flex-col gap-2">
                {service.vehicleTypes.map(v => (
                  <li key={v} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-primary text-base mb-3">
                Key Types We Handle
              </h3>
              <ul className="flex flex-col gap-2">
                {service.keyTypes.map(k => (
                  <li key={k} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-surface" aria-labelledby="pricing-heading">
        <div className="container max-w-3xl">
          <h2 id="pricing-heading" className="section-heading mb-4">
            How Much Does {service.name} Cost?
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            The cost of {service.name.toLowerCase()} depends on your vehicle&apos;s make, model,
            and the specific key type required. Excalibur is consistently 40–60% cheaper than
            main dealer pricing because we don&apos;t carry dealer overheads, and we use
            quality compatible components rather than OEM parts at manufacturer prices.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-accent text-white font-heading font-black text-3xl px-8 py-4 rounded-card">
              {service.priceFrom}
            </div>
            <div>
              <p className="font-bold text-primary">All-inclusive pricing</p>
              <p className="text-muted text-sm">Cutting, programming, and call-out included</p>
            </div>
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-card p-4 flex gap-3">
            <AlertTriangle size={18} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-color-text text-sm">
              <strong>We will always provide a firm quote before starting any work.</strong>{' '}
              Call {SITE.phone} for your exact price — it takes 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <h2 id="faq-heading" className="section-heading mb-6">
            {service.name} — Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Service Area List */}
      <section className="section bg-surface" aria-labelledby="areas-heading">
        <div className="container">
          <h2 id="areas-heading" className="section-heading text-center mb-8">
            We Provide {service.name} Across the North West
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {LOCATIONS.map(loc => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/${service.slug}`}
                className="flex items-center gap-1.5 bg-white border border-border hover:border-accent
                           hover:text-accent text-sm font-semibold px-4 py-2 rounded-full
                           transition-colors focus-ring"
              >
                <MapPin size={12} aria-hidden="true" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-white" aria-labelledby="related-heading">
          <div className="container">
            <h2 id="related-heading" className="section-heading text-center mb-8">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {relatedServices.map(s => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="bg-accent py-12">
        <div className="container text-center">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-white mb-4">
            Need {service.name} Right Now?
          </h2>
          <p className="text-white/80 mb-6">
            Don&apos;t call a tow truck. Call Ian or Adam first —{' '}
            <strong>we come to you.</strong>
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-3 bg-white text-accent font-black text-xl
                       px-8 py-4 rounded-btn hover:bg-gray-100 transition-colors focus-ring"
            aria-label={`Call Excalibur on ${SITE.phone}`}
          >
            <Phone size={22} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </section>
    </>
  )
}
