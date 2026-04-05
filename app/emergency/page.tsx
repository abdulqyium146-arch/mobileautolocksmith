import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Phone, MapPin, ShieldCheck, Clock, Users, Key, Zap, AlertTriangle } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { LOCATIONS } from '@/lib/locations'
import { buildLocalBusiness } from '@/lib/schema'

export const metadata: Metadata = {
  title: `Emergency Auto Locksmith North West | Available RIGHT NOW | ${SITE.phone}`,
  description: `Emergency car locksmith in the North West — Excalibur Auto Locksmiths. Available 24/7 right now. Don't call a tow truck — call ${SITE.phone} first.`,
  alternates: { canonical: '/emergency' },
  openGraph: {
    title: `Emergency Auto Locksmith North West | Excalibur — Available Now`,
    description: `Stranded? Call Excalibur on ${SITE.phone} — 24/7 mobile emergency auto locksmith.`,
  },
}

export default function EmergencyPage() {
  const lbSchema = buildLocalBusiness()

  return (
    <>
      <Script
        id="schema-lb-emergency"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />

      {/* Red Hero */}
      <section
        className="bg-accent py-20 md:py-28 text-center"
        aria-labelledby="emergency-heading"
      >
        <div className="container">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <Zap size={14} aria-hidden="true" />
            Available Right Now — 24 Hours
          </div>

          <h1
            id="emergency-heading"
            className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Emergency Auto Locksmith —<br />
            We&apos;re Available Right Now
          </h1>

          <a
            href={SITE.phoneTel}
            className="block text-5xl md:text-7xl font-black text-white mb-4
                       hover:scale-105 transition-transform focus-ring"
            aria-label={`Call Excalibur Auto Locksmiths emergency line on ${SITE.phone}`}
          >
            {SITE.phone}
          </a>

          <p className="text-white/80 text-xl mb-8">
            Answered by Ian or Adam personally.<br />
            24 hours, 7 days, 365 days a year.
          </p>

          <div className="inline-flex items-center gap-2 bg-white/20 text-white font-bold px-6 py-3 rounded-full">
            <Zap size={16} aria-hidden="true" />
            Typical response: under 1 hour across the North West
          </div>
        </div>
      </section>

      {/* What To Do Now */}
      <section className="section bg-white" aria-labelledby="whatnow-heading">
        <div className="container max-w-3xl">
          <h2 id="whatnow-heading" className="section-heading mb-8">
            While You Wait — Stay Safe
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: '1',
                title: 'Stay With Your Vehicle',
                desc: 'If you\'re in a safe location, remain with your vehicle. If you feel unsafe, move to a nearby public or well-lit area and let us know your new location.',
              },
              {
                number: '2',
                title: "Don't Call a Tow Truck",
                desc: "In the vast majority of car key emergencies, towing is completely unnecessary. We bring everything needed to resolve the situation directly to you.",
              },
              {
                number: '3',
                title: 'Keep This Number Saved',
                desc: `Save ${SITE.phone} in your phone now. Once this emergency is resolved, you'll always have it for the future — and so will anyone who borrows your phone.`,
              },
            ].map(item => (
              <div key={item.number} className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-accent text-white font-heading font-black text-xl
                             flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  {item.number}
                </div>
                <h3 className="font-heading font-bold text-primary text-base mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Not Tow Truck */}
      <section className="section bg-surface" aria-labelledby="notow-heading">
        <div className="container max-w-3xl">
          <div className="flex gap-3 mb-6">
            <AlertTriangle size={28} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
            <h2 id="notow-heading" className="section-heading">
              Don&apos;t Pay for a Tow You Don&apos;t Need
            </h2>
          </div>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              When you call a tow truck, you&apos;re committing to significant additional cost before
              the key problem is even addressed. A tow across the North West to your nearest dealer
              can cost £80–£200. The dealer then charges for the key replacement — typically
              £200–£500+ depending on the vehicle. And they may not even be able to see you that day.
            </p>
            <p>
              In most lost key situations — even for modern vehicles with complex key systems — the
              car does <strong className="text-primary">not</strong> need to be towed. Ian and Adam
              carry a fully equipped mobile workshop with dealer-grade programming equipment. They
              come to your vehicle and perform the replacement on-site.
            </p>
            <p>
              The total cost with Excalibur for a typical lost key replacement is £95–£200 depending
              on the vehicle — all-inclusive, no tow, no dealer wait, same day. Call{' '}
              <a href={SITE.phoneTel} className="text-accent font-bold hover:underline focus-ring">
                {SITE.phone}
              </a>{' '}
              before you call anyone else.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section bg-white" aria-labelledby="cov-heading">
        <div className="container">
          <h2 id="cov-heading" className="section-heading text-center mb-8">
            We Cover the Entire North West
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {LOCATIONS.map(loc => (
              <span
                key={loc.slug}
                className="flex items-center gap-1.5 bg-surface border border-border text-sm font-semibold px-4 py-2 rounded-full"
              >
                <MapPin size={11} aria-hidden="true" />
                {loc.name}
              </span>
            ))}
          </div>
          <p className="text-center text-muted text-sm">
            Not on this list? Call us anyway — we likely cover your area.
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section bg-primary" aria-labelledby="trust-heading">
        <div className="container">
          <h2 id="trust-heading" className="sr-only">Why Trust Excalibur</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: '30+ Years Experience', desc: 'Ian and Adam between them have decades of specialist automotive locksmith expertise.' },
              { icon: Clock, title: 'Genuinely 24/7', desc: 'We answer the phone personally at any hour — midnight, bank holidays, Christmas Day.' },
              { icon: Users, title: 'Family Business', desc: 'You always speak to Ian or Adam directly. No call centres. No strangers. Personal service.' },
              { icon: Key, title: 'All Makes & Models', desc: 'From a Ford Fiesta to a BMW X5 — Excalibur has the equipment and knowledge for every vehicle.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <Icon size={32} className="text-gold mx-auto mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="bg-gold py-16 text-center" aria-labelledby="second-cta-heading">
        <div className="container">
          <h2
            id="second-cta-heading"
            className="font-heading font-black text-3xl md:text-4xl text-primary mb-4"
          >
            Still Need Help? Call Now.
          </h2>
          <p className="text-primary/70 text-lg mb-6">
            Don&apos;t wait. The sooner you call, the sooner you&apos;re back on the road.
          </p>
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-3 bg-primary text-white font-black text-2xl md:text-3xl
                       px-10 py-6 rounded-btn hover:bg-dark transition-colors focus-ring"
            aria-label={`Call ${SITE.phone} now`}
          >
            <Phone size={28} aria-hidden="true" />
            {SITE.phone}
          </a>
          <p className="text-primary/60 text-sm mt-4">
            Available 24 hours — including weekends and bank holidays
          </p>
        </div>
      </section>
    </>
  )
}
