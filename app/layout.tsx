import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { EmergencyBanner } from '@/components/layout/EmergencyBanner'
import { buildOrganization } from '@/lib/schema'
import { SITE } from '@/lib/siteConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `Auto Locksmith Wigan & St Helens | Excalibur — ${SITE.phone} | 24/7 Mobile`,
    template: `%s | Excalibur Auto Locksmiths`,
  },
  description: SITE.description,
  keywords: [
    'auto locksmith Wigan',
    'car key replacement North West',
    'lost car keys Wigan',
    'mobile auto locksmith',
    '24 hour locksmith',
    'car key programming',
    'immobiliser programming',
  ],
  authors: [{ name: 'Ian Casson' }],
  creator: 'Excalibur Auto Locksmiths',
  publisher: 'Excalibur Auto Locksmiths',
  // TODO: Add Google Search Console verification
  // 1. Go to https://search.google.com/search-console
  // 2. Add property: https://mobileautolocksmiths.co.uk
  // 3. Choose "HTML tag" method
  // 4. Paste the content="..." value below:
  // verification: { google: 'PASTE_YOUR_CODE_HERE' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: SITE.name,
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Excalibur Auto Locksmiths — Mobile Car Key Replacement North West',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: `Auto Locksmith Wigan & St Helens | Excalibur — 24/7 Mobile`,
    description: 'Mobile auto locksmith covering Wigan, St Helens & the North West. Lost car keys replaced same day — 24/7, up to 60% cheaper than main dealers. Call Ian or Adam on 07831 872 740.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE.domain,
  },
  other: {
    'hreflang:en-GB': SITE.domain,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = buildOrganization()

  return (
    <html lang="en-GB" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0b0c2a" />
        <meta name="msapplication-TileColor" content="#0b0c2a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Excalibur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-body text-color-text bg-white antialiased">
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-btn focus:font-bold"
        >
          Skip to main content
        </a>

        {/* Organization JSON-LD — global */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        {/* Google Tag Manager — activate by replacing GTM-XXXXXXX */}
        {/* <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script> */}

        <EmergencyBanner />
        <Header />

        <main id="main-content" tabIndex={-1}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
