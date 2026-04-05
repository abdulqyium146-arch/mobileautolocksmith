import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'

type Props = {
  variant?: 'dark' | 'red'
  heading?: string
  subheading?: string
  city?: string
  showEmail?: boolean
}

export function CTABanner({
  variant = 'dark',
  heading,
  subheading,
  city,
  showEmail = true,
}: Props) {
  const bgClass = variant === 'red' ? 'bg-accent' : 'bg-primary'
  const defaultHeading = city
    ? `Need an Auto Locksmith in ${city}?`
    : "Don't Let a Lost Key Ruin Your Day"
  const defaultSub = "One call to Ian or Adam and we'll have you sorted. Same day, at your location, always cheaper than the dealer."

  return (
    <section className={`${bgClass} py-16`} aria-labelledby="cta-heading">
      <div className="container text-center">
        <h2
          id="cta-heading"
          className="font-heading font-black text-3xl md:text-4xl text-white mb-4"
        >
          {heading ?? defaultHeading}
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          {subheading ?? defaultSub}
        </p>

        {/* Large phone */}
        <a
          href={SITE.phoneTel}
          className="block text-4xl md:text-5xl font-black text-white mb-2
                     hover:scale-105 transition-transform focus-ring"
          aria-label={`Call Excalibur Auto Locksmiths on ${SITE.phone}`}
        >
          {SITE.phone}
        </a>
        <p className="text-white/60 text-sm mb-8">
          Available 24 hours — including weekends and bank holidays
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE.phoneTel}
            className="btn-primary bg-white text-accent hover:bg-gray-100 min-w-[180px]"
            aria-label={`Call ${SITE.phone} now`}
          >
            <Phone size={16} aria-hidden="true" />
            Call Now
          </a>
          {showEmail && (
            <Link
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary min-w-[180px]"
            >
              <Mail size={16} aria-hidden="true" />
              Send an Email
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
