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
    card: 'summary_large_image',
    title: `Auto Locksmith Wigan & St Helens | Excalibur — 24/7 Mobile`,
    description: SITE.description,
    images: ['/images/og-default.jpg'],
  },
  alternates: {
    canonical: SITE.domain,
  },
  verification: {
    google: 'REPLACE_WITH_SEARCH_CONSOLE_VERIFICATION_TOKEN',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0c2a" />
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
