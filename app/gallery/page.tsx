import type { Metadata } from 'next'
import { SITE } from '@/lib/siteConfig'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: `Gallery | Excalibur Auto Locksmiths — Work Examples`,
  description: `See examples of Excalibur Auto Locksmiths' work — car key replacement, mobile workshop, and on-site service across the North West. Call ${SITE.phone}.`,
  alternates: { canonical: '/gallery' },
}

const PLACEHOLDER_ITEMS = [
  { label: 'Mobile workshop equipment' },
  { label: 'Key cutting on-site' },
  { label: 'Transponder programming' },
  { label: 'Ford key replacement' },
  { label: 'BMW smart key programming' },
  { label: 'Renault key card replacement' },
  { label: 'Broken key extraction' },
  { label: 'Immobiliser diagnostic' },
  { label: 'Van key replacement' },
]

export default function GalleryPage() {
  return (
    <>
      <div className="container">
        <BreadcrumbNav items={[{ name: 'Gallery', href: '/gallery' }]} />
      </div>

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Our Work — Gallery
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Mobile auto locksmith services across the North West — at your vehicle, every time.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {PLACEHOLDER_ITEMS.map((item, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-white border-2 border-dashed border-border rounded-card
                           flex items-center justify-center p-4 text-center"
                role="img"
                aria-label={`Gallery image: ${item.label}`}
              >
                <p className="text-muted text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-8">
            Gallery photos coming soon — for now, see our{' '}
            <a href="/reviews" className="text-accent font-bold hover:underline">
              customer reviews
            </a>{' '}
            for verified feedback on our work.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
