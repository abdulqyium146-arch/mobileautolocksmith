import Link from 'next/link'
import {
  KeyRound, Scissors, ShieldCheck, Code, Radio,
  Wrench, Copy, ShieldOff, CreditCard, Lock,
  Bluetooth, Car, AlertTriangle, ArrowRight,
} from 'lucide-react'
import type { Service } from '@/lib/services'

const ICONS: Record<string, React.ElementType> = {
  KeyRound, Scissors, ShieldCheck, Code, Radio,
  Wrench, Copy, ShieldOff, CreditCard, Lock,
  Bluetooth, Car, AlertTriangle,
}

type Props = {
  service: Service
  citySlug?: string
  showPrice?: boolean
}

export function ServiceCard({ service, citySlug, showPrice = true }: Props) {
  const Icon = ICONS[service.icon] ?? KeyRound
  const href = citySlug
    ? `/locations/${citySlug}/${service.slug}`
    : `/services/${service.slug}`

  return (
    <article className="card flex flex-col h-full group">
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface flex items-center justify-center
                     group-hover:bg-accent/10 transition-colors"
          aria-hidden="true"
        >
          <Icon size={22} className="text-accent" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-bold text-primary text-base leading-snug mb-0.5">
            {service.name}
          </h3>
          {showPrice && (
            <span className="price-badge">{service.priceFrom}</span>
          )}
        </div>
      </div>

      <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
        {service.shortDesc}
      </p>

      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:gap-3 transition-all focus-ring mt-auto"
        aria-label={`Learn more about ${service.name}`}
      >
        Learn More <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </article>
  )
}
