import { Phone } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'solid' | 'outline'
  className?: string
  label?: string
}

const sizeStyles = {
  sm: 'text-sm px-4 py-2 gap-1.5',
  md: 'text-base px-5 py-3 gap-2',
  lg: 'text-lg px-6 py-4 gap-2 font-black',
  xl: 'text-2xl px-8 py-5 gap-3 font-black',
}

const iconSizes = { sm: 14, md: 16, lg: 20, xl: 24 }

export function PhoneButton({
  size = 'md',
  variant = 'solid',
  className = '',
  label,
}: Props) {
  return (
    <a
      href={SITE.phoneTel}
      aria-label={`Call Excalibur Auto Locksmiths on ${SITE.phone}`}
      className={`
        inline-flex items-center justify-center rounded-btn font-bold
        transition-all duration-150 focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
        min-h-[52px]
        ${sizeStyles[size]}
        ${variant === 'solid'
          ? 'bg-accent text-white hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0'
          : 'border-2 border-accent text-accent hover:bg-accent hover:text-white hover:-translate-y-0.5'
        }
        ${className}
      `}
    >
      <Phone size={iconSizes[size]} aria-hidden="true" />
      <span>{label ?? SITE.phone}</span>
    </a>
  )
}
