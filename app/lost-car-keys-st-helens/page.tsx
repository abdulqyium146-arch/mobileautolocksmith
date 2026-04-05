import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { buildLocalBusiness, buildFAQPage } from '@/lib/schema'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { CTABanner } from '@/components/ui/CTABanner'

// Legacy page — canonical preserved for backlink equity
export const metadata: Metadata = {
  title: `Lost Car Keys St Helens | Excalibur Auto Locksmiths — ${SITE.phone}`,
  description: `Lost your car keys in St Helens? Excalibur replaces all key types on-site, same day. Mobile auto locksmith in St Helens, WA9–WA12. Call ${SITE.phone}.`,
  alternates: {
    canonical: '/lost-car-keys-st-helens',
  },
}

const FAQS = [
  {
    question: 'How quickly can Excalibur reach me in St Helens?',
    answer: `St Helens is firmly within Excalibur's core coverage area — Ian and Adam regularly serve WA9, WA10, WA11, and WA12 postcodes. In most cases, response time is within one hour. The A580 and M6 connections mean access to most parts of St Helens is straightforward. Call ${SITE.phone} for a firm ETA.`,
  },
  {
    question: "Can you replace car keys in St Helens if I have no spare?",
    answer: `Yes. The majority of Excalibur's St Helens call-outs are for drivers who have lost their only key. We work from the vehicle identification number and the lock profile to generate a new key from scratch, without needing an original as a reference. The car stays where it is — we come to it.`,
  },
  {
    question: 'Do you cover Haydock, Newton-le-Willows, and surrounding WA postcodes?',
    answer: `Yes — in addition to St Helens town, we cover the surrounding areas including Haydock, Newton-le-Willows, Billinge, Rainford, and all WA9–WA12 postcodes. We also cover nearby areas in Merseyside and south Lancashire. Call us to confirm your specific location.`,
  },
  {
    question: 'How much cheaper are you than the dealer for St Helens customers?',
    answer: `Most St Helens customers who have already received a dealer quote find that Excalibur comes in 40–60% lower. This is because we use quality compatible components (not OEM with manufacturer markup), have no dealer overhead, and our pricing reflects the actual job rather than a dealer service schedule rate.`,
  },
  {
    question: 'Are you available in St Helens at weekends and overnight?',
    answer: `Yes, completely. Excalibur operates 24 hours a day, 7 days a week, 365 days a year — this includes Saturday nights, Sunday mornings, and bank holidays. There is no reduced-hours service and no answering machine. Ian or Adam will answer personally whenever you call.`,
  },
]

export default function LostCarKeysStHelens() {
  const lbSchema = buildLocalBusiness('St Helens')
  const faqSchema = buildFAQPage(FAQS)

  return (
    <>
      <Script
        id="schema-lb-sthelens-legacy"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <Script
        id="schema-faq-sthelens-legacy"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20" aria-labelledby="sthelens-heading">
        <div className="container max-w-3xl">
          <h1
            id="sthelens-heading"
            className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Lost Car Keys in St Helens? Excalibur Replaces Them Fast
          </h1>
          <p className="text-white/70 text-xl mb-8">
            Mobile auto locksmith in St Helens — we come to your vehicle, same day,
            up to 60% cheaper than the main dealer.
          </p>
          <a
            href={SITE.phoneTel}
            className="btn-primary text-lg px-8 py-4 min-h-[60px]"
            aria-label={`Call ${SITE.phone} now`}
          >
            <Phone size={20} aria-hidden="true" />
            Call {SITE.phone} — Available Now
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="section bg-white" aria-labelledby="sthelens-body-heading">
        <div className="container max-w-3xl">
          <h2 id="sthelens-body-heading" className="section-heading mb-6">
            Lost Car Key Replacement in St Helens — Excalibur&apos;s Mobile Service
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              St Helens is one of Excalibur Auto Locksmiths&apos; most regularly served areas.
              Positioned between the M6 and M62, with the busy East Lancs Road (A580) cutting
              through its heart, St Helens generates a consistent flow of car key emergencies — from
              commercial vehicles at the Haydock Industrial Estate to family cars in the residential
              streets of Eccleston and Rainhill. Ian and Adam have served St Helens drivers for over
              30 years, and the WA9–WA12 postcodes are among their best-known service areas.
            </p>
            <p>
              Losing car keys in St Helens is stressful because the options seem limited: the dealer
              says wait and pay a lot, or a tow truck is called unnecessarily. Excalibur is the third
              option that most drivers in St Helens don&apos;t know about until someone recommends them
              after their own experience. A mobile locksmith who comes to your car, programmes a new
              key in under 90 minutes, and charges 40–60% less than the dealer — that&apos;s the
              service that keeps Excalibur busy across Merseyside every day.
            </p>
            <p>
              When Ian or Adam responds to a call in St Helens, they come fully equipped with the
              key blanks and programming tools for all major manufacturers. Ford, Vauxhall, Renault,
              Toyota, Nissan, BMW, Volkswagen Group vehicles — all handled on-site. If your St Helens
              postcode is WA9, WA10, WA11, or WA12, you&apos;re in the heart of Excalibur&apos;s
              regular coverage area. Typical arrival time: under one hour.
            </p>
            <p>
              As with all Excalibur jobs, the process is: call, get a firm quote, wait for Ian or
              Adam to arrive, watch them cut and programme your key at your vehicle, and drive away.
              There is no part of that process that requires towing, a workshop visit, or waiting
              more than a day. St Helens drivers who&apos;ve used the dealer before consistently
              report significant savings when switching to Excalibur — and the convenience of a
              mobile service rather than having to get the car to the dealer is a bonus on top.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <h3 className="font-heading font-bold text-primary text-lg">Postcodes Covered:</h3>
            <div className="flex flex-wrap gap-2">
              {['WA9', 'WA10', 'WA11', 'WA12'].map(pc => (
                <span key={pc} className="bg-surface border border-border text-primary font-bold px-4 py-2 rounded-full text-sm">
                  {pc}
                </span>
              ))}
            </div>
            <p className="text-muted text-sm">Also covering Haydock, Newton-le-Willows, Billinge, Rainford, and all surrounding areas.</p>
          </div>
        </div>
      </section>

      {/* Why Excalibur for St Helens */}
      <section className="section bg-surface" aria-labelledby="why-sthelens-heading">
        <div className="container max-w-3xl">
          <h2 id="why-sthelens-heading" className="section-heading mb-6">
            Why St Helens Drivers Choose Excalibur
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              '30+ years serving St Helens and Merseyside',
              'WA9, WA10, WA11, WA12 — core coverage area, fast response',
              'Also covers Haydock, Newton-le-Willows, Prescot, and surrounds',
              'Up to 60% cheaper than St Helens area main dealers',
              'Ian or Adam answers personally — no call centres',
              'All makes and models — including commercial vans',
              '24/7, 365 days — always available in St Helens',
            ].map(point => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted text-sm">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-white border border-border rounded-card text-sm text-muted">
            <p>
              For the full St Helens location page with all 13 services, visit:{' '}
              <Link href="/locations/st-helens" className="text-accent font-bold hover:underline focus-ring">
                Auto Locksmith St Helens → <ArrowRight size={12} className="inline" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white" aria-labelledby="sthelens-faq-heading">
        <div className="container max-w-3xl">
          <h2 id="sthelens-faq-heading" className="section-heading mb-6">
            Lost Car Keys St Helens — Common Questions
          </h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner city="St Helens" />
    </>
  )
}
