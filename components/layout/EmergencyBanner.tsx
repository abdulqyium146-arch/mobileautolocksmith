'use client'

import { useState, useEffect } from 'react'
import { X, Phone } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'

const BANNER_KEY = 'excalibur_banner_dismissed'

export function EmergencyBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_KEY)
    if (!dismissed) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(BANNER_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="banner"
      aria-label="Emergency locksmith availability"
      className="bg-accent text-white py-2 px-4 text-center text-sm font-semibold relative md:hidden"
    >
      <a
        href={SITE.phoneTel}
        className="inline-flex items-center gap-2 hover:underline"
        aria-label={`Call Excalibur Auto Locksmiths on ${SITE.phone}`}
      >
        <Phone size={14} aria-hidden="true" />
        <span>24/7 Emergency: <strong>{SITE.phone}</strong></span>
      </a>
      <button
        onClick={dismiss}
        aria-label="Dismiss emergency banner"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </div>
  )
}
