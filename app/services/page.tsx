import type { Metadata } from 'next'
import { SITE } from '@/lib/siteConfig'
import { SERVICES } from '@/lib/services'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'

export const metadata: Metadata = {
  title: `Auto Locksmith Services Wigan & North West | Excalibur`,
  description: `All 13 auto locksmith services from Excalibur — lost key replacement, immobiliser programming, Renault key cards, emergency locksmith and more. Mobile, 24/7. Call ${SITE.phone}.`,
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <div className="container">
        <BreadcrumbNav items={[{ name: 'Services', href: '/services' }]} />
      </div>

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Our Auto Locksmith Services
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            13 specialist services — all performed at your location by Ian &amp; Adam. No towing,
            no waiting days, always cheaper than the dealer.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
