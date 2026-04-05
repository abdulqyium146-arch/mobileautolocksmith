'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQ = {
  question: string
  answer: string
}

type Props = {
  faqs: FAQ[]
  className?: string
}

export function FAQAccordion({ faqs, className = '' }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={`flex flex-col divide-y divide-border ${className}`} role="list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const id = `faq-${index}`

        return (
          <div key={index} role="listitem">
            <button
              id={`${id}-btn`}
              aria-expanded={isOpen}
              aria-controls={`${id}-content`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left
                         font-heading font-semibold text-primary hover:text-accent
                         transition-colors focus-ring"
            >
              <span className="text-sm md:text-base">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id={`${id}-content`}
              role="region"
              aria-labelledby={`${id}-btn`}
              hidden={!isOpen}
              className="pb-5 text-muted text-sm leading-relaxed"
            >
              {faq.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
