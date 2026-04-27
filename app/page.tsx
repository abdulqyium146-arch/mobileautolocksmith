import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, AlertTriangle, Star, CheckCircle, ArrowRight, MapPin } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { TrustBar } from '@/components/ui/TrustBar'
import { CTABanner } from '@/components/ui/CTABanner'
import { getHomepageMetadata } from '@/lib/seo/metadata'
import { LocalBusinessSchema } from '@/components/schema/LocalBusinessSchema'
import { FAQSchema } from '@/components/schema/FAQSchema'
import { BreadcrumbSchema } from '@/components/schema/BreadcrumbSchema'
import { buildBreadcrumbs } from '@/lib/seo/breadcrumbs'

export const metadata: Metadata = getHomepageMetadata()

const HOMEPAGE_FAQS = [
  {
    question: 'How much does car key replacement cost in Wigan?',
    answer: `The cost depends on your vehicle make, model, and key type. Standard transponder keys typically start from £95 with Excalibur Auto Locksmiths — up to 60% less than what Wigan's main dealers charge. Remote key fobs start from around £75, and smart/proximity keys from £150. Call ${SITE.phone} for an exact quote for your vehicle.`,
  },
  {
    question: `How quickly can you reach me in Wigan or St Helens?`,
    answer: `In most cases, Ian or Adam can reach you within one hour anywhere in Wigan, St Helens, or the surrounding North West area. For very rural locations or during peak traffic periods, we'll give you an honest ETA on the call. We won't over-promise. Call ${SITE.phone} and we'll tell you straight.`,
  },
  {
    question: 'Can you programme keys for all car makes?',
    answer: `Yes — Excalibur covers all major makes and models sold in the UK, including Ford, Vauxhall, Volkswagen, Audi, BMW, Mercedes-Benz, Renault, Toyota, Honda, Nissan, and many more. If we haven't programmed a particular make, it's extremely unusual. Call us to confirm before making any alternative arrangements.`,
  },
  {
    question: 'Is it really cheaper than going to the main dealer?',
    answer: `Yes, consistently. Main dealers charge for OEM parts, dealer labour rates, programming licence fees, and their own margin. Excalibur uses quality compatible hardware and professional programming equipment without the dealer overhead. Most customers save 40–60% compared to their main dealer quote. Call ${SITE.phone} for a direct comparison.`,
  },
  {
    question: 'What if my car has a transponder chip or smart key system?',
    answer: `This is our specialism. Every modern vehicle sold in the UK since 1998 uses a transponder system, and the majority of post-2015 vehicles use smart key or proximity systems. Ian and Adam carry dealer-grade programming equipment for all these systems. The process takes slightly longer than a mechanical-only key but is entirely done on-site at your location.`,
  },
  {
    question: 'Do you offer a car lockout service if my keys are locked inside?',
    answer: `Yes — if your keys are locked inside the car, Excalibur's car unlock service opens the vehicle without any damage to doors, glass, or seals. We use specialist non-destructive entry tools. While we're on-site we can also cut a spare key so you're never locked out again. Call ${SITE.phone} and we'll come to you.`,
  },
  {
    question: 'Do you cover car key replacement for BMW, Audi, VW, Mercedes and other prestige brands?',
    answer: `Yes. We replace and programme car keys for all major brands including BMW, Audi, Volkswagen, Mercedes-Benz, Nissan, Ford, Vauxhall, Toyota, Hyundai, Kia, Peugeot, Renault, Fiat, Honda, Mazda, Land Rover, Volvo, SEAT, and Škoda. If you're unsure whether we cover your vehicle, call ${SITE.phone} and we'll confirm within seconds.`,
  },
]

const REVIEWS = [
  {
    quote: "Absolutely brilliant service. Lost my only key to my Ford Focus at Wigan Retail Park. Ian arrived within 45 minutes, cut and programmed a new key in under an hour. Saved me a fortune compared to the dealer quote I'd already had. Can't recommend highly enough.",
    name: 'Dave W.',
    city: 'Wigan',
    platform: 'Google Review',
    date: '2024-09-15',
  },
  {
    quote: "Adam came out at 11pm when I'd locked myself out of my Vauxhall Astra near St Helens. He was calm, professional, and had me back in the car within 30 minutes. The price was very fair and I was incredibly relieved. I've saved the number for life.",
    name: 'Sarah M.',
    city: 'St Helens',
    platform: 'Google Review',
    date: '2024-10-22',
  },
  {
    quote: "My Renault Megane card stopped working and Renault dealer wanted 10 days and nearly £300. Adam sorted it at my home in Bolton the same afternoon for much less. Brilliant father and son team — proper honest traders. Exactly what you want when you're stressed.",
    name: 'Chris B.',
    city: 'Bolton',
    platform: 'Google Review',
    date: '2024-08-07',
  },
  {
    quote: "The key broke off in my BMW ignition on the A49 at 7am. Ian answered immediately, came to the roadside, extracted the broken piece and cut me a new key. Total lifesaver. I genuinely don't know what I'd have done without him. Absolute professional.",
    name: 'Tracey H.',
    city: 'Warrington',
    platform: 'Google Review',
    date: '2024-11-03',
  },
]

const VEHICLE_BRANDS = [
  'Ford', 'Vauxhall', 'Volkswagen', 'BMW', 'Audi', 'Mercedes-Benz',
  'Toyota', 'Honda', 'Renault', 'Nissan', 'Peugeot', 'Citroën',
  'Fiat', 'Hyundai', 'Kia', 'Volvo', 'Land Rover', 'SEAT',
  'Škoda', 'Mazda', 'Jeep', 'Chrysler',
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema pageUrl="https://mobileautolocksmiths.co.uk" />
      <FAQSchema faqs={HOMEPAGE_FAQS} />
      <BreadcrumbSchema items={buildBreadcrumbs({})} />

      {/* S1: Hero */}
      <section
        className="relative bg-primary py-20 md:py-32 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, #c0392b 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <AlertTriangle size={14} aria-hidden="true" />
              24/7 Mobile Auto Locksmith — North West
            </div>

            <h1
              id="hero-heading"
              className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Lost Your Car Keys in{' '}
              <span className="text-gold">Wigan</span> or{' '}
              <span className="text-gold">St Helens?</span>
            </h1>

            <p className="text-white/80 text-xl leading-relaxed mb-4 max-w-2xl">
              Excalibur&apos;s mobile auto locksmiths come to you anywhere across the North West —
              24 hours a day, always cheaper than the main dealer.
            </p>
            <p className="text-white/60 text-sm mb-8 max-w-2xl">
              Car key replacement · Car key cutting &amp; programming · Car lockout service ·
              Key fob replacement · Emergency auto locksmith · All makes &amp; models
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={SITE.phoneTel}
                className="btn-primary text-lg px-8 py-4 min-h-[60px] text-xl font-black bg-accent hover:bg-red-700"
                aria-label={`Call Excalibur Auto Locksmiths on ${SITE.phone}`}
              >
                <Phone size={20} aria-hidden="true" />
                {SITE.phone}
              </a>
              <Link
                href="/services"
                className="btn-secondary border-white/40 text-white hover:bg-white hover:text-primary text-lg px-8 py-4 min-h-[60px]"
              >
                View Our Services
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" aria-label="5 out of 5 stars" role="img">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={16} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <p className="text-white/70 text-sm">
                Rated{' '}
                <strong className="text-white">
                  {SITE.reviewScore}/5
                </strong>{' '}
                by{' '}
                <strong className="text-white">{SITE.reviewCount} customers</strong>{' '}
                across Wigan, St Helens &amp; the North West
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBar className="container" />

      {/* S2: Emergency Callout */}
      <section className="bg-accent py-10" aria-labelledby="emergency-heading">
        <div className="container text-center">
          <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-2">
            🚨 Stranded Right Now?
          </p>
          <h2
            id="emergency-heading"
            className="font-heading font-black text-2xl md:text-3xl text-white mb-4"
          >
            Don&apos;t call a tow truck. Call Ian or Adam first.
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            We&apos;ll come to you directly — no towing required in most cases.
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-3 bg-white text-accent font-black text-xl px-8 py-4 rounded-btn
                       hover:bg-gray-100 transition-colors focus-ring"
            aria-label={`Emergency call — ${SITE.phone}`}
          >
            <Phone size={22} aria-hidden="true" />
            CALL NOW — {SITE.phone}
          </a>
        </div>
      </section>

      {/* S3: Family Story */}
      <section className="section bg-white" aria-labelledby="family-heading">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-wider mb-3">
                About Excalibur
              </p>
              <h2
                id="family-heading"
                className="section-heading"
              >
                30 Years Getting North West Drivers Back on the Road
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Ian Casson founded Excalibur over 30 years ago with a simple idea: bring specialist
                  automotive locksmith skills directly to the driver, not the other way around. What
                  started as a one-man mobile operation has grown into one of the most trusted names
                  in car key replacement across the North West.
                </p>
                <p>
                  Ian&apos;s son Adam joined the business, bringing fresh expertise in the latest
                  electronic key systems while Ian&apos;s three decades of hands-on experience
                  covers everything from classic vehicles to the most modern smart key technology.
                  Together, they handle every call personally.
                </p>
                <p>
                  When you call Excalibur, you speak to Ian or Adam directly. You get a straight
                  quote, an honest arrival time, and the job done right — the first time. No call
                  centres. No sub-contractors. No surprises.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-accent font-bold mt-6 hover:underline focus-ring">
                Meet Ian &amp; Adam <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '30+', label: 'Years Experience' },
                { number: '10,000+', label: 'Keys Replaced' },
                { number: '24/7', label: 'Always Available' },
                { number: '5★', label: 'Customer Reviews' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="card text-center p-8"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <p className="font-heading font-black text-4xl text-accent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-muted text-sm font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* S4: Services */}
      <section className="section bg-surface" aria-labelledby="services-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="section-heading">
              Our Auto Locksmith Services
            </h2>
            <p className="section-subheading mx-auto">
              From a simple spare key to full immobiliser reprogramming — all done at your
              location, on the same day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {SERVICES.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <p className="text-center text-muted text-sm">
            Not sure which service you need?{' '}
            <a
              href={SITE.phoneTel}
              className="text-accent font-bold hover:underline focus-ring"
            >
              Call us and we&apos;ll advise — free of charge.
            </a>
          </p>
        </div>
      </section>

      {/* S5: How It Works */}
      <section className="section bg-white" aria-labelledby="how-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="how-heading" className="section-heading">
              Back Behind the Wheel in 3 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: `Call ${SITE.phone}`,
                desc: 'Ian or Adam will answer, take your details and give you an honest quote on the spot. No call centres, no being put on hold.',
              },
              {
                step: '2',
                title: 'We Drive to You',
                desc: "Our fully-equipped mobile workshop comes directly to your location — road, car park, driveway, anywhere across the North West.",
              },
              {
                step: '3',
                title: 'Keys Cut & Coded On-Site',
                desc: 'We cut and programme your new keys right there. No towing. No waiting days. Back on the road the same day.',
              },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div
                  className="w-16 h-16 rounded-full bg-accent text-white font-heading font-black text-2xl
                             flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S6: Why Not Dealer */}
      <section className="section bg-primary" aria-labelledby="dealer-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="dealer-heading" className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
              Why Call Excalibur Instead of the Main Dealer?
            </h2>
          </div>

          <div className="overflow-x-auto rounded-card">
            <table className="comparison-table min-w-[600px]" aria-label="Excalibur vs Main Dealer comparison">
              <thead>
                <tr>
                  <th scope="col" className="bg-dark text-white"><span className="sr-only">Feature</span></th>
                  <th scope="col" className="bg-accent text-white">Excalibur</th>
                  <th scope="col" className="bg-dark text-white/70">Main Dealer</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Wait time', 'Same day, often under 1 hour', '3–14 days'],
                  ['Cost', 'Up to 60% cheaper', 'Full manufacturer price'],
                  ['Convenience', 'We come to you', 'You must get there'],
                  ['Hours', '24/7, 365 days', 'Mon–Fri business hours'],
                  ['Who you deal with', 'Ian or Adam personally', 'Different tech each time'],
                  ['Experience', '30+ years specialist', 'General service team'],
                ].map(([aspect, excalibur, dealer]) => (
                  <tr key={aspect}>
                    <td className="font-semibold text-primary">{aspect}</td>
                    <td className="text-green-700 font-semibold">
                      <CheckCircle size={14} className="inline mr-1.5 text-green-600" aria-hidden="true" />
                      {excalibur}
                    </td>
                    <td className="text-muted">{dealer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/70 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            The main dealer will tell you the car needs towing in. In most cases, that simply isn&apos;t
            true. We carry all the equipment needed to cut and code your new key on the spot.
          </p>
        </div>
      </section>

      {/* S7: Vehicle Brands */}
      <section className="section bg-surface" aria-labelledby="brands-heading">
        <div className="container">
          <div className="text-center mb-10">
            <h2 id="brands-heading" className="section-heading">
              We Work on All Makes &amp; Models
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {VEHICLE_BRANDS.map(brand => (
              <span
                key={brand}
                className="bg-white border border-border text-color-text text-sm font-semibold
                           px-4 py-2 rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
          <p className="text-center text-muted text-sm">
            Don&apos;t see your make?{' '}
            <a href={SITE.phoneTel} className="text-accent font-bold hover:underline focus-ring">
              Call us
            </a>{' '}
            — if we haven&apos;t programmed it, it probably can&apos;t be done.
          </p>
        </div>
      </section>

      {/* S8: Coverage */}
      <section className="section bg-white" aria-labelledby="coverage-heading">
        <div className="container">
          <div className="text-center mb-10">
            <h2 id="coverage-heading" className="section-heading">
              Covering the North West — From Wigan to Liverpool and Beyond
            </h2>
            <p className="section-subheading mx-auto">
              Based in Wigan, we cover the entire North West region — typically reaching any location within one hour.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {LOCATIONS.map(loc => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="flex flex-col items-center p-3 bg-surface hover:bg-accent/5
                           border border-border hover:border-accent rounded-card
                           text-center transition-all group focus-ring"
              >
                <MapPin
                  size={14}
                  className="text-accent mb-1 group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold text-primary group-hover:text-accent transition-colors">
                  {loc.name}
                </span>
                <span className="text-xs text-muted mt-0.5 hidden sm:block">{loc.county}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* S9: Reviews */}
      <section className="section bg-surface" aria-labelledby="reviews-heading">
        <div className="container">
          <div className="text-center mb-12">
            <h2 id="reviews-heading" className="section-heading">
              What Our Customers Say
            </h2>
            <p className="section-subheading mx-auto">
              Real reviews from drivers across Wigan, St Helens and the North West
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {REVIEWS.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-card border border-border mb-4">
              <div className="flex gap-0.5" aria-label="5 stars" role="img">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} className="fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <span className="font-heading font-black text-2xl text-primary">
                {SITE.reviewScore} / 5.0
              </span>
              <span className="text-muted text-sm">
                Based on {SITE.reviewCount} reviews
              </span>
            </div>
            <div className="block">
              <Link
                href="/reviews"
                className="text-accent font-bold hover:underline focus-ring"
              >
                Read All Reviews →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* S10: FAQ */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <h2 id="faq-heading" className="section-heading">
              Common Questions About Car Key Replacement
            </h2>
          </div>
          <FAQAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* S11: Final CTA */}
      <CTABanner
        variant="dark"
        heading="Don't Let a Lost Key Ruin Your Day"
        subheading="One call to Ian or Adam and we'll have you sorted. We carry the equipment for virtually every modern vehicle and can usually reach you within the hour — anywhere across the North West."
      />
    </>
  )
}
