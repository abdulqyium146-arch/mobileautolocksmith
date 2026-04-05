'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, ChevronDown, Menu, X, Key } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { SERVICES } from '@/lib/services'
import { LOCATIONS } from '@/lib/locations'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const areasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) {
        setAreasOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95'
      }`}
      role="banner"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="Excalibur Auto Locksmiths — Home"
          >
            <Image
              src="/excaliburAuto_locksmith_logo.svg"
              alt="Excalibur Auto Locksmiths"
              width={220}
              height={68}
              priority
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link href="/" className="text-sm font-semibold text-color-text hover:text-accent transition-colors focus-ring">
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => { setServicesOpen(o => !o); setAreasOpen(false) }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm font-semibold text-color-text hover:text-accent transition-colors focus-ring"
              >
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-card shadow-hover border border-border p-4 grid grid-cols-2 gap-1">
                  {SERVICES.map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="text-sm text-color-text hover:text-accent hover:bg-surface px-3 py-2 rounded-lg transition-colors focus-ring"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas dropdown */}
            <div className="relative" ref={areasRef}>
              <button
                onClick={() => { setAreasOpen(o => !o); setServicesOpen(false) }}
                aria-expanded={areasOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 text-sm font-semibold text-color-text hover:text-accent transition-colors focus-ring"
              >
                Areas <ChevronDown size={14} className={`transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-card shadow-hover border border-border p-4 grid grid-cols-3 gap-1">
                  {LOCATIONS.map(l => (
                    <Link
                      key={l.slug}
                      href={`/locations/${l.slug}`}
                      onClick={() => setAreasOpen(false)}
                      className="text-sm text-color-text hover:text-accent hover:bg-surface px-3 py-2 rounded-lg transition-colors focus-ring"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-semibold text-color-text hover:text-accent transition-colors focus-ring">
              About
            </Link>
            <Link href="/reviews" className="text-sm font-semibold text-color-text hover:text-accent transition-colors focus-ring">
              Reviews
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-color-text hover:text-accent transition-colors focus-ring">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-2 bg-accent text-white font-black px-5 py-3 rounded-full hover:bg-red-700 transition-colors focus-ring"
              aria-label={`Call Excalibur Auto Locksmiths on ${SITE.phone}`}
            >
              <Phone size={16} aria-hidden="true" />
              <span className="text-base">{SITE.phone}</span>
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-1.5 bg-accent text-white font-bold px-3 py-2 rounded-full text-sm hover:bg-red-700 transition-colors focus-ring"
              aria-label={`Call ${SITE.phone}`}
            >
              <Phone size={14} aria-hidden="true" />
              <span className="hidden sm:inline font-black">{SITE.phone}</span>
            </a>
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="p-2 rounded-lg hover:bg-surface transition-colors focus-ring"
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Nav */}
      {mobileOpen && (
        <div className="mobile-nav-overlay overflow-y-auto lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
              aria-label="Excalibur Auto Locksmiths — Home"
            >
              <Image
                src="/excaliburAuto_locksmith_logo.svg"
                alt="Excalibur Auto Locksmiths"
                width={180}
                height={56}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
              className="p-2 text-white/70 hover:text-white transition-colors focus-ring"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-2" role="navigation" aria-label="Mobile navigation">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'All Services' },
              { href: '/locations', label: 'Areas We Cover' },
              { href: '/emergency', label: '⚡ Emergency Locksmith' },
              { href: '/about', label: 'About Us' },
              { href: '/reviews', label: 'Customer Reviews' },
              { href: '/contact', label: 'Contact' },
              { href: '/blog', label: 'Advice & Guides' },
            ].map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-white font-semibold text-lg py-3 border-b border-white/10 transition-colors focus-ring"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6 border-t border-white/10">
            <p className="text-white/60 text-xs mb-3 uppercase tracking-wider">Call Us Anytime</p>
            <a
              href={SITE.phoneTel}
              className="flex items-center gap-3 text-white"
              aria-label={`Call ${SITE.phone}`}
            >
              <Phone size={22} className="text-gold" aria-hidden="true" />
              <span className="text-2xl font-black text-white">{SITE.phone}</span>
            </a>
            <p className="text-white/50 text-sm mt-2">Available 24 hours — 365 days a year</p>
          </div>
        </div>
      )}
    </header>
  )
}
