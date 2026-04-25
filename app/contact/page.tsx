import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'

export const metadata: Metadata = {
  title: `Contact Excalibur Auto Locksmiths | ${SITE.phone} | Wigan, North West`,
  description: `Contact Excalibur Auto Locksmiths — call ${SITE.phone} for 24/7 emergency service, or email ${SITE.email}. Based in Wigan, serving the North West.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <div className="container">
        <BreadcrumbNav items={[{ name: 'Contact', href: '/contact' }]} />
      </div>

      <section className="bg-primary py-16">
        <div className="container">
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Contact Excalibur Auto Locksmiths
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            For emergencies, always call — we answer 24/7. For non-urgent enquiries,
            email or use the form below.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="section-heading mb-8">Get in Touch</h2>
              <div className="flex flex-col gap-6">
                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Phone — 24/7</h3>
                      <a
                        href={SITE.phoneTel}
                        className="text-3xl font-black text-accent hover:underline focus-ring block"
                        aria-label={`Call ${SITE.phone}`}
                      >
                        {SITE.phone}
                      </a>
                      <p className="text-muted text-sm mt-1">
                        Answered by Ian or Adam personally — any hour.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Email</h3>
                      <a
                        href={SITE.emailHref}
                        className="text-accent font-bold hover:underline focus-ring break-all"
                      >
                        {SITE.email}
                      </a>
                      <p className="text-muted text-sm mt-1">
                        For non-urgent enquiries. We aim to respond within a few hours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Service Area</h3>
                      <p className="text-muted">Wigan, Greater Manchester</p>
                      <p className="text-muted text-sm mt-1">
                        Mobile service — we travel to you across the North West.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start gap-4">
                    <Clock size={24} className="text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-primary text-lg mb-1">Hours</h3>
                      <p className="font-semibold text-primary">24 hours a day</p>
                      <p className="text-muted text-sm">7 days a week · 365 days a year</p>
                      <p className="text-muted text-sm">Including all bank holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email form */}
            <div>
              <h2 className="section-heading mb-8">Send a Message</h2>
              <form
                method="POST"
                action="/api/contact"
                className="flex flex-col gap-5"
                aria-label="Contact form"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full border border-border rounded-btn px-4 py-3 text-color-text
                               focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                               transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full border border-border rounded-btn px-4 py-3 text-color-text
                               focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                               transition-colors"
                    placeholder="07xxx xxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full border border-border rounded-btn px-4 py-3 text-color-text
                               focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                               transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-semibold text-primary mb-1.5">
                    Your Vehicle (make, model, year)
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    type="text"
                    className="w-full border border-border rounded-btn px-4 py-3 text-color-text
                               focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                               transition-colors"
                    placeholder="e.g. Ford Focus, 2018"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-1.5">
                    Message / What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-border rounded-btn px-4 py-3 text-color-text
                               focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
                               transition-colors resize-none"
                    placeholder="Describe your key or lock problem..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary text-base justify-center"
                >
                  Send Message
                </button>

                <p className="text-xs text-muted">
                  For emergencies, please <a href={SITE.phoneTel} className="text-accent font-bold hover:underline focus-ring">call us directly</a> — we don&apos;t check emails as quickly as we answer the phone.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map — geo signal: map embed anchored to NAP reinforces Local Pack ranking */}
      <section className="section bg-white" aria-labelledby="map-heading">
        <div className="container">
          <h2 id="map-heading" className="section-heading mb-2">
            Find Us on the Map
          </h2>
          <p className="text-muted mb-6">
            Based in Wigan — we travel to you across the North West. No need to come to us.
          </p>
          <figure className="overflow-hidden rounded-xl shadow-md border border-border">
            <div className="relative w-full h-[320px] md:h-[460px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.4502290865667!2d-2.7086666999999998!3d53.4961523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1adc0e522e6f%3A0x90f5a3eacc1dc9fc!2sExcalibur%20Auto%20Locksmith!5e0!3m2!1sen!2s!4v1777100503673!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Excalibur Auto Locksmiths location — Wigan, Greater Manchester"
              />
            </div>
            <figcaption className="bg-surface px-5 py-3 text-sm text-muted flex flex-wrap gap-x-4 gap-y-1">
              <span><strong className="text-primary">Excalibur Auto Locksmiths</strong> · Wigan, Greater Manchester</span>
              <span>Mobile service · North West England</span>
              <a href={SITE.phoneTel} className="text-accent font-bold hover:underline focus-ring">
                {SITE.phone}
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
