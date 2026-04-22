import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'

export function Footer() {
  const primaryLocations = LOCATIONS.filter(l => l.priority === 'primary')
  const secondaryLocations = LOCATIONS.filter(l => l.priority === 'secondary')

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      {/* Top CTA strip */}
      <div className="bg-accent py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-xl text-white">Locked out? Lost your keys?</p>
            <p className="text-white/80 text-sm">We come to you — 24 hours, 7 days a week</p>
          </div>
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 bg-white text-accent font-black text-xl px-6 py-3 rounded-full hover:bg-gray-100 transition-colors focus-ring whitespace-nowrap"
            aria-label={`Call Excalibur Auto Locksmiths on ${SITE.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Image
              src="/excaliburAuto_locksmith_logo.svg"
              alt="Excalibur Auto Locksmiths"
              width={200}
              height={62}
              className="h-12 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Father & son mobile auto locksmith serving Wigan, St Helens, and the North West for over 30 years. We come to you.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href={SITE.phoneTel} className="flex items-center gap-2 text-gold font-bold hover:underline focus-ring">
              <Phone size={14} aria-hidden="true" /> {SITE.phone}
            </a>
            <a href={SITE.emailHref} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors focus-ring">
              <Mail size={14} aria-hidden="true" /> {SITE.email}
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={14} aria-hidden="true" /> Wigan, Greater Manchester
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Clock size={14} aria-hidden="true" /> Open 24/7, 365 days
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
            Our Services
          </h3>
          <ul className="flex flex-col gap-2">
            {SERVICES.map(s => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-white/70 hover:text-white transition-colors focus-ring"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
            Service Areas
          </h3>
          <ul className="flex flex-col gap-2 mb-4">
            {[...primaryLocations, ...secondaryLocations].map(l => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="text-sm text-white/70 hover:text-white transition-colors focus-ring"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/locations" className="text-sm text-gold hover:underline focus-ring">
            View all 23 areas →
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/50 mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              { href: '/emergency', label: '⚡ Emergency Locksmith' },
              { href: '/about', label: 'About Ian & Adam' },
              { href: '/reviews', label: 'Customer Reviews' },
              { href: '/contact', label: 'Contact Us' },
              { href: '/blog', label: 'Advice & Guides' },
              { href: '/lost-car-keys-wigan', label: 'Lost Car Keys Wigan' },
              { href: '/lost-car-keys-st-helens', label: 'Lost Car Keys St Helens' },
            ].map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white transition-colors focus-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trusted Partners strip */}
      <div className="border-t border-white/10 py-6">
        <div className="container">
          <p className="text-xs font-heading font-bold uppercase tracking-widest text-white/40 mb-4 text-center">
            Trusted Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://ashtonlockandkey.co.uk/"
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm focus-ring"
              aria-label="Ashton Lock and Key — trusted traditional locksmith partner (opens in new tab)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
              Ashton Lock &amp; Key
              <span className="text-white/30 text-xs">Traditional Locksmith Partner</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Excalibur Auto Locksmiths. All rights reserved.</p>
          <p>Serving Wigan, St Helens &amp; the North West · 24/7 Mobile Service</p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors focus-ring">Sitemap</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors focus-ring">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
