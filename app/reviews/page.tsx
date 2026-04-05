import type { Metadata } from 'next'
import Script from 'next/script'
import { Star, Phone } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { buildAggregateRating } from '@/lib/schema'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: `Customer Reviews | Excalibur Auto Locksmiths — ${SITE.reviewScore}/5 Stars`,
  description: `Read ${SITE.reviewCount} genuine customer reviews for Excalibur Auto Locksmiths. Rated ${SITE.reviewScore}/5 across Wigan, St Helens and the North West. Call ${SITE.phone}.`,
  alternates: { canonical: '/reviews' },
}

const ALL_REVIEWS = [
  {
    quote: "Absolutely brilliant service. Lost my only key to my Ford Focus at Wigan Retail Park. Ian arrived within 45 minutes, cut and programmed a new key in under an hour. Saved me a fortune compared to the dealer quote I'd already had. Can't recommend highly enough.",
    name: 'Dave W.',
    city: 'Wigan',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: "Adam came out at 11pm when I'd locked myself out of my Vauxhall Astra near St Helens. He was calm, professional, and had me back in the car within 30 minutes. The price was very fair and I was incredibly relieved. I've saved the number for life.",
    name: 'Sarah M.',
    city: 'St Helens',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: "My Renault Megane card stopped working and Renault dealer wanted 10 days and nearly £300. Adam sorted it at my home in Bolton the same afternoon for much less. Brilliant father and son team — proper honest traders.",
    name: 'Chris B.',
    city: 'Bolton',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: "The key broke off in my BMW ignition on the A49 at 7am. Ian answered immediately, came to the roadside, extracted the broken piece and cut me a new key. Total lifesaver. I genuinely don't know what I'd have done without him.",
    name: 'Tracey H.',
    city: 'Warrington',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: "Called Ian after losing my Toyota Yaris key in Liverpool. He was with me within an hour and sorted the key on the spot. Professional, friendly, and the price was about half what Toyota quoted. Will absolutely use again.",
    name: 'Paul D.',
    city: 'Liverpool',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: "I had a spare key programmed for my VW Golf at home by Adam. The whole thing took less than an hour and cost a fraction of what the dealer quoted. Brilliant service, came on time, no fuss. Highly recommended for anyone in the North West.",
    name: 'James T.',
    city: 'Leigh',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: "Needed an emergency locksmith in Southport on a Sunday evening. Ian answered straight away, came within the hour, and sorted the problem quickly and professionally. The price was exactly what was quoted over the phone. No nasty surprises.",
    name: 'Michelle R.',
    city: 'Southport',
    platform: 'Google Review',
    rating: 5,
  },
  {
    quote: "Used Excalibur after being told by two other locksmiths they couldn't programme keys for my Land Rover Discovery. Ian handled it no problem. Arrived on time, did the job, tested everything. Professional from start to finish.",
    name: 'Andrew K.',
    city: 'Chorley',
    platform: 'Google Review',
    rating: 5,
  },
]

export default function ReviewsPage() {
  const ratingSchema = buildAggregateRating()

  return (
    <>
      <Script
        id="schema-rating-reviews"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      <div className="container">
        <BreadcrumbNav items={[{ name: 'Reviews', href: '/reviews' }]} />
      </div>

      <section className="bg-primary py-16" aria-labelledby="reviews-heading">
        <div className="container">
          <h1 id="reviews-heading" className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Customer Reviews
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex gap-1" aria-label={`${SITE.reviewScore} out of 5 stars`} role="img">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={24} className="fill-gold text-gold" aria-hidden="true" />
              ))}
            </div>
            <div>
              <span className="text-3xl font-black text-white">{SITE.reviewScore}</span>
              <span className="text-white/60 text-sm ml-2">/ 5.0 — {SITE.reviewCount} reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface" aria-labelledby="reviews-grid-heading">
        <div className="container">
          <h2 id="reviews-grid-heading" className="sr-only">All Customer Reviews</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_REVIEWS.map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white text-center">
        <div className="container max-w-xl">
          <h2 className="section-heading mb-4">Had a Good Experience?</h2>
          <p className="text-muted mb-6">
            If Excalibur helped you, we&apos;d be grateful for an honest Google review.
            It helps other drivers find us when they need help most.
          </p>
          <a
            href={SITE.phoneTel}
            className="btn-primary text-lg px-8 py-4"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
            Call Us First — {SITE.phone}
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
