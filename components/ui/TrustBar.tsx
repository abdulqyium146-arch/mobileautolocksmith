import { Key, Truck, PoundSterling, Clock, Users } from 'lucide-react'

type Props = {
  variant?: 'light' | 'dark'
  className?: string
}

const TRUST_ITEMS = [
  { icon: Key, label: '30+ Years Experience' },
  { icon: Truck, label: 'We Come To You' },
  { icon: PoundSterling, label: 'Beat Any Dealer Price' },
  { icon: Clock, label: 'Same-Day Service' },
  { icon: Users, label: 'Family Business' },
]

export function TrustBar({ variant = 'light', className = '' }: Props) {
  const textClass = variant === 'dark' ? 'text-white/80' : 'text-muted'
  const iconClass = variant === 'dark' ? 'text-gold' : 'text-accent'
  const borderClass = variant === 'dark' ? 'border-white/10' : 'border-border'

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4
                  border-t border-b ${borderClass} ${className}`}
      aria-label="Trust signals"
    >
      {TRUST_ITEMS.map(({ icon: Icon, label }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon size={16} className={iconClass} aria-hidden="true" />
          <span className={`text-sm font-semibold ${textClass}`}>{label}</span>
        </div>
      ))}
    </div>
  )
}
