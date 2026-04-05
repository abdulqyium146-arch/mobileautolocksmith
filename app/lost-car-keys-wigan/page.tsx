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
  title: `Lost Car Keys Wigan | Excalibur Auto Locksmiths — ${SITE.phone}`,
  description: `Lost your car keys in Wigan? Excalibur Auto Locksmiths replaces all key types on-site, same day. Wigan's mobile auto locksmith — up to 60% cheaper than the dealer. Call ${SITE.phone}.`,
  alternates: {
    canonical: '/lost-car-keys-wigan',
  },
}

const FAQS = [
  {
    question: 'How quickly can you replace lost car keys in Wigan?',
    answer: `In most cases, Ian or Adam can reach any WN postcode in Wigan within 30–45 minutes of your call. We know Wigan and the surrounding areas well — from the town centre to Scholes, Ince, Hindley, Wigan town centre itself, and all surrounding districts. Call ${SITE.phone} for a firm ETA.`,
  },
  {
    question: "What happens if I've lost my only car key in Wigan?",
    answer: `This is the most common scenario we handle in Wigan. When there's no spare key, we work from your vehicle's identification number and the door lock to generate a new key from scratch. Your car does not need to be towed — we come to wherever your vehicle is parked in Wigan and perform the entire job on-site.`,
  },
  {
    question: 'Is Excalibur really cheaper than the main dealer in Wigan?',
    answer: `Yes, consistently. Wigan's main dealers — including Peugeot, Ford, Vauxhall, and others — charge at manufacturer rates, which includes OEM parts and dealer profit margins. Excalibur uses quality compatible components and professional equipment, with none of the dealer overhead. Most Wigan customers save 40–60% compared to the dealer quote they've already received.`,
  },
  {
    question: 'Do you cover all parts of Wigan and the WN postcodes?',
    answer: `Yes — we cover all WN1, WN2, WN3, WN4, WN5, and WN6 postcode areas, as well as all surrounding Wigan areas including Leigh (WN7), Skelmersdale (WN8), and Ashton-in-Makerfield. If you're unsure, just call — we'll confirm immediately.`,
  },
  {
    question: 'Can you replace smart keys and proximity keys for Wigan drivers?',
    answer: `Yes. Smart/proximity keys are among the most complex and most expensive to replace through the dealer. Excalibur carries the programming equipment for all major brands with proximity systems. The process takes slightly longer than a standard key but is fully achievable at your location anywhere in Wigan.`,
  },
]

export default function LostCarKeysWigan() {
  const lbSchema = buildLocalBusiness('Wigan')
  const faqSchema = buildFAQPage(FAQS)

  return (
    <>
      <Script
        id="schema-lb-wigan-legacy"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <Script
        id="schema-faq-wigan-legacy"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20" aria-labelledby="wigan-heading">
        <div className="container max-w-3xl">
          <h1
            id="wigan-heading"
            className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-white mb-4"
          >
            Lost Car Keys in Wigan? Excalibur Replaces Them Fast
          </h1>
          <p className="text-white/70 text-xl mb-8">
            Mobile auto locksmith in Wigan — we come to you, anywhere in the WN postcode area,
            same day, up to 60% cheaper than the main dealer.
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

      {/* Body content */}
      <section className="section bg-white" aria-labelledby="wigan-body-heading">
        <div className="container max-w-3xl">
          <h2 id="wigan-body-heading" className="section-heading mb-6">
            Lost Car Key Replacement in Wigan — The Excalibur Way
          </h2>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              Losing your car keys in Wigan is a situation Ian and Adam at Excalibur Auto Locksmiths
              handle every single day. Whether you&apos;ve lost them in the Grand Arcade car park,
              at Robin Park, at home in Ince or Scholes, or anywhere else across the WN postcode
              areas, Excalibur&apos;s mobile workshop will come directly to your vehicle. No towing,
              no waiting days for a dealer appointment, no paying over the odds for an OEM key you
              could have for half the price.
            </p>
            <p>
              Ian Casson has been serving Wigan drivers for over 30 years. In that time, he&apos;s
              replaced keys for virtually every car make and model that&apos;s been driven on Wigan&apos;s
              roads — from the early Ford Fiesta XR2s to the latest Volkswagen ID.4s and BMW X5s.
              His son Adam joined the business and between them, they carry the most up-to-date
              programming equipment available for modern key systems, alongside Ian&apos;s encyclopaedic
              knowledge of older vehicle systems.
            </p>
            <p>
              When you call Excalibur for lost car key replacement in Wigan, here&apos;s what happens:
              Ian or Adam answers the phone directly, takes your vehicle details and location,
              confirms a firm price, and gives you a realistic arrival time. On arrival, they cut
              your new key to your vehicle&apos;s lock profile and programme the transponder chip
              directly to your ECU using dealer-grade diagnostic tools. The entire process typically
              takes between 30 and 90 minutes — after which you drive away. The car doesn&apos;t
              move until you move it.
            </p>
            <p>
              Wigan drivers who have tried the main dealer route before calling Excalibur are often
              astonished at the difference. Dealer wait times of 3–14 days, towing costs, and key
              replacement prices starting at £200 and reaching £500+ for premium brands — none of
              that applies with Excalibur. Most lost key replacements in Wigan are completed for
              £95–£200, all-inclusive, same day. If you&apos;ve already received a dealer quote,
              call us before you commit — the saving is almost always significant.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            <h3 className="font-heading font-bold text-primary text-lg">
              Postcodes We Cover in Wigan:
            </h3>
            <div className="flex flex-wrap gap-2">
              {['WN1', 'WN2', 'WN3', 'WN4', 'WN5', 'WN6', 'WN7', 'WN8'].map(pc => (
                <span key={pc} className="bg-surface border border-border text-primary font-bold px-4 py-2 rounded-full text-sm">
                  {pc}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-surface" aria-labelledby="process-heading">
        <div className="container max-w-3xl">
          <h2 id="process-heading" className="section-heading mb-8">
            How We Replace Lost Car Keys in Wigan
          </h2>
          <ol className="flex flex-col gap-6" role="list">
            {[
              { step: '1', title: 'Call Us', desc: `Ring ${SITE.phone}. Ian or Adam will answer, confirm your Wigan location and vehicle details, and give you a firm quote before travelling.` },
              { step: '2', title: 'We Come to You', desc: 'Our mobile workshop travels to wherever your car is in Wigan. Town centre, retail park, driveway, roadside — wherever.' },
              { step: '3', title: 'Key Cut On-Site', desc: "The new key blank is cut to your vehicle's lock profile using precision automotive cutting equipment in our mobile workshop." },
              { step: '4', title: 'Programmed to Your Car', desc: "The new key's transponder chip is programmed directly to your vehicle's ECU using dealer-grade diagnostic tools." },
              { step: '5', title: 'You Drive Away', desc: "We test the key in all locks and the ignition before handing over. You drive home. Job done." },
            ].map(item => (
              <li key={item.step} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-accent text-white font-black flex items-center justify-center"
                  aria-hidden="true"
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why Excalibur for Wigan */}
      <section className="section bg-white" aria-labelledby="why-wigan-heading">
        <div className="container max-w-3xl">
          <h2 id="why-wigan-heading" className="section-heading mb-6">
            Why Wigan Drivers Choose Excalibur
          </h2>
          <ul className="flex flex-col gap-3">
            {[
              '30+ years serving Wigan and Greater Manchester',
              'Based in Wigan — among the fastest response times in the area',
              'All WN postcode areas covered, plus Leigh, Skelmersdale, Ashton-in-Makerfield',
              'Up to 60% cheaper than Wigan main dealers',
              'Speak to Ian or Adam directly — no call centres',
              'All makes and models — from Ford to BMW to Renault',
              'Same-day service, 24 hours a day, 365 days a year',
            ].map(point => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted text-sm">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-surface border border-border rounded-card text-sm text-muted">
            <p>
              For the full Wigan location page with all 13 services, visit:{' '}
              <Link href="/locations/wigan" className="text-accent font-bold hover:underline focus-ring">
                Auto Locksmith Wigan → <ArrowRight size={12} className="inline" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface" aria-labelledby="wigan-faq-heading">
        <div className="container max-w-3xl">
          <h2 id="wigan-faq-heading" className="section-heading mb-6">
            Lost Car Keys Wigan — Common Questions
          </h2>
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      <CTABanner city="Wigan" />
    </>
  )
}
