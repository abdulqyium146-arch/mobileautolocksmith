import Link from 'next/link'
import { Phone, Home, Search } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'

export default function NotFound() {
  return (
    <section className="section bg-surface min-h-[60vh] flex items-center">
      <div className="container text-center max-w-xl">
        <div
          className="text-8xl font-heading font-black text-accent/20 mb-4"
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="font-heading font-black text-3xl text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has moved. If you&apos;re in an
          emergency, don&apos;t waste time searching — call Ian or Adam directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={SITE.phoneTel}
            className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            aria-label={`Call Excalibur on ${SITE.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link
            href="/"
            className="btn-secondary border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto px-8 py-4 text-lg"
          >
            <Home size={18} aria-hidden="true" />
            Go Home
          </Link>
        </div>

        <div className="text-sm text-muted">
          Or try:{' '}
          <Link href="/services" className="text-accent font-bold hover:underline">Services</Link>
          {' · '}
          <Link href="/locations" className="text-accent font-bold hover:underline">Areas</Link>
          {' · '}
          <Link href="/emergency" className="text-accent font-bold hover:underline">Emergency</Link>
          {' · '}
          <Link href="/contact" className="text-accent font-bold hover:underline">Contact</Link>
        </div>
      </div>
    </section>
  )
}
