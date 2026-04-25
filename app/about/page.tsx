import type { Metadata } from 'next'
import Script from 'next/script'
import { CheckCircle, Phone } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { buildPerson, buildLocalBusiness } from '@/lib/schema'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: `About Excalibur Auto Locksmiths | Ian & Adam Casson | Wigan, North West`,
  description: `Excalibur Auto Locksmiths — a father and son business with 30+ years experience serving Wigan, St Helens and the North West. Meet Ian & Adam Casson.`,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  const personSchema = buildPerson()
  const lbSchema = buildLocalBusiness()

  return (
    <>
      <Script
        id="schema-person-ian"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-lb-about"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />

      <div className="container">
        <BreadcrumbNav items={[{ name: 'About', href: '/about' }]} />
      </div>

      {/* Hero */}
      <section className="bg-primary py-16" aria-labelledby="about-heading">
        <div className="container max-w-3xl">
          <h1
            id="about-heading"
            className="font-heading font-black text-4xl md:text-5xl text-white mb-4"
          >
            About Excalibur — A Family Business Built on Trust
          </h1>
          <p className="text-white/70 text-xl">
            Father and son. 30+ years. Thousands of drivers helped across the North West.
            Here&apos;s our story.
          </p>
        </div>
      </section>

      {/* Family Story */}
      <section className="section bg-white" aria-labelledby="story-heading">
        <div className="container max-w-3xl">
          <h2 id="story-heading" className="section-heading mb-8">
            The Excalibur Story
          </h2>
          <div className="space-y-6 text-muted leading-relaxed text-base">
            <p>
              Ian Casson founded Excalibur Auto Locksmiths over 30 years ago from a simple but
              powerful conviction: drivers who lose their car keys in Wigan or anywhere across the
              North West deserve a specialist who comes to them, not the other way around. In an era
              when the only option for most drivers was an expensive dealer trip or a long wait, Ian
              built a mobile operation with the skills and equipment to replace and programme car
              keys at the roadside. Word spread, and the business grew on reputation alone.
            </p>
            <p>
              Over the following decades, Ian developed expertise across virtually every automotive
              key system available in the UK market — from the mechanical tibbe keys of classic
              Fords to the earliest transponder systems that appeared in the mid-1990s, and all the
              way through to the sophisticated smart key and proximity systems of today. That depth
              of experience across three decades of automotive key technology is genuinely rare — it
              can&apos;t be learned from a course or a manual. It comes from thousands of jobs,
              solved in all weathers, at all hours, for drivers in genuine need.
            </p>
            <p>
              Adam Casson joined the family business, bringing a natural aptitude for the latest
              electronic diagnostic systems and programming platforms. As vehicles became
              increasingly reliant on complex ECU communications for key recognition, Adam&apos;s
              skills complemented Ian&apos;s experience perfectly. Together, they cover the full
              spectrum — Ian&apos;s encyclopaedic knowledge of older and classic systems, Adam&apos;s
              mastery of the most current technology. There is very little in the world of automotive
              locksmithing that this pair hasn&apos;t encountered and resolved.
            </p>
            <p>
              The reason Excalibur has never needed to advertise heavily is the nature of what Ian
              and Adam do. When someone calls at 2am, locked out of their car in a dark car park,
              and Ian answers immediately, drives to them, and has them back on the road within 90
              minutes — that person tells every driver they know. The same story plays out thousands
              of times across the North West. The Excalibur reputation was built entirely by the
              quality of service Ian and Adam deliver, call after call, year after year.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section bg-surface" aria-labelledby="values-heading">
        <div className="container">
          <h2 id="values-heading" className="section-heading text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Honest Pricing',
                desc: 'We quote before we start — always. No hidden charges, no surprise extras. You know the price before Ian or Adam pick up a single tool.',
              },
              {
                title: '24/7 Commitment',
                desc: 'Not "most nights" — genuinely 24 hours, 7 days, 365 days a year. When you call at 3am, Ian or Adam will answer personally.',
              },
              {
                title: 'All Makes & Models',
                desc: 'From a 1989 Ford Escort to a 2024 BMW X7 — if it has a key and a lock, we can help. No referrals, no "can\'t do that one."',
              },
              {
                title: 'Personal Service',
                desc: "You always deal with Ian or Adam directly — the people who will actually do the job. The person you call is the person who arrives.",
              },
            ].map(v => (
              <div key={v.title} className="card">
                <h3 className="font-heading font-bold text-primary text-lg mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-white" aria-labelledby="creds-heading">
        <div className="container max-w-3xl">
          <h2 id="creds-heading" className="section-heading mb-8">
            Our Experience &amp; Credentials
          </h2>
          <ul className="flex flex-col gap-4">
            {[
              '30+ years in automotive locksmithing — specialist focus throughout',
              'Experience across all major vehicle makes sold in the UK market',
              'Fully equipped mobile workshops — dealer-grade cutting and programming equipment',
              'Expertise across all automotive key types: transponder, smart, proximity, key card, tibbe, and more',
              'Thousands of satisfied customers across Wigan, St Helens, and the wider North West',
              'Father and son team — personal accountability on every job',
              'OBD-level programming capability for all mainstream ECU platforms',
            ].map(cred => (
              <li key={cred} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted">{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map — compound geo signal alongside LocalBusiness schema on this page */}
      <section className="section bg-white" aria-labelledby="about-map-heading">
        <div className="container max-w-3xl">
          <h2 id="about-map-heading" className="section-heading mb-2">
            Where We Operate From
          </h2>
          <p className="text-muted mb-6">
            Wigan-based, but we cover the full North West — we come to wherever your car is.
          </p>
          <figure className="overflow-hidden rounded-xl shadow-md border border-border">
            <div className="relative w-full h-[300px] md:h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.4502290865667!2d-2.7086666999999998!3d53.4961523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1adc0e522e6f%3A0x90f5a3eacc1dc9fc!2sExcalibur%20Auto%20Locksmith!5e0!3m2!1sen!2s!4v1777100503673!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Excalibur Auto Locksmiths — Wigan, Greater Manchester on Google Maps"
              />
            </div>
            <figcaption className="bg-surface px-5 py-3 text-sm text-muted flex flex-wrap gap-x-4 gap-y-1">
              <span><strong className="text-primary">Excalibur Auto Locksmiths</strong> · Wigan, Greater Manchester</span>
              <span>30+ years serving the North West</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Personal CTA */}
      <section className="section bg-surface">
        <div className="container max-w-xl text-center">
          <h2 className="section-heading mb-4">Talk to Ian or Adam Directly</h2>
          <p className="text-muted mb-6">
            No call centres. No third parties. When you ring Excalibur, you speak to the person
            who will be at your car. Get a straight quote and an honest arrival time.
          </p>
          <a
            href={SITE.phoneTel}
            className="btn-primary text-xl px-8 py-4 min-h-[60px]"
            aria-label={`Call Excalibur on ${SITE.phone}`}
          >
            <Phone size={20} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
