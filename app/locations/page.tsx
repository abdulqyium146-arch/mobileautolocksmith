import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { LOCATIONS, PRIMARY_LOCATIONS, SECONDARY_LOCATIONS, TERTIARY_LOCATIONS } from '@/lib/locations'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: `Auto Locksmith Service Areas — North West | Excalibur`,
  description: `Excalibur Auto Locksmiths covers Wigan, St Helens, Bolton, Warrington, Liverpool and 18 more towns across the North West. Mobile 24/7. Call ${SITE.phone}.`,
  alternates: { canonical: '/locations' },
}

export default function LocationsPage() {
  return (
    <>
      <div className="container">
        <BreadcrumbNav items={[{ name: 'Areas We Cover', href: '/locations' }]} />
      </div>

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Auto Locksmith Coverage — North West England
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Based in Wigan, we cover {LOCATIONS.length} towns and cities across the North West — reaching most locations within one hour.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="mb-12">
            <h2 className="section-heading mb-2">Primary Service Areas</h2>
            <p className="text-muted mb-6">Where we serve most frequently — fastest response times</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {PRIMARY_LOCATIONS.map(loc => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="card flex items-center gap-4 p-5 group hover:border-accent border border-transparent"
                >
                  <MapPin size={22} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-muted">{loc.county} · {loc.postcodePrefixes.join(', ')}</p>
                  </div>
                  <ArrowRight size={16} className="text-muted group-hover:text-accent transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="section-heading mb-2">Secondary Service Areas</h2>
            <p className="text-muted mb-6">Full coverage with typical arrival under one hour</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SECONDARY_LOCATIONS.map(loc => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="card flex items-center gap-4 p-4 group"
                >
                  <MapPin size={18} className="text-accent flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1">
                    <p className="font-bold text-primary text-sm group-hover:text-accent transition-colors">
                      {loc.name}
                    </p>
                    <p className="text-xs text-muted">{loc.county}</p>
                  </div>
                  <ArrowRight size={14} className="text-muted" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-heading mb-2">Surrounding Areas</h2>
            <p className="text-muted mb-6">Long-tail coverage — we serve these areas regularly</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {TERTIARY_LOCATIONS.map(loc => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="flex items-center gap-2 bg-white border border-border hover:border-accent
                             px-4 py-3 rounded-card text-sm font-semibold text-primary
                             hover:text-accent transition-colors focus-ring"
                >
                  <MapPin size={12} aria-hidden="true" />
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
