import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Script from 'next/script'
import { buildBreadcrumb } from '@/lib/schema'
import { SITE } from '@/lib/siteConfig'

type BreadcrumbItem = {
  name: string
  href: string
}

type Props = {
  items: BreadcrumbItem[]
}

export function BreadcrumbNav({ items }: Props) {
  const allItems = [{ name: 'Home', href: '/' }, ...items]

  const schemaItems = allItems.map(item => ({
    name: item.name,
    url: `${SITE.domain}${item.href}`,
  }))

  return (
    <>
      <Script
        id={`breadcrumb-${items.map(i => i.href).join('-').replace(/\//g, '_')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumb(schemaItems)) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 text-sm">
        <ol
          className="flex flex-wrap items-center gap-1 text-muted"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            return (
              <li
                key={item.href}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span
                    className="text-primary font-semibold"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="hover:text-accent transition-colors focus-ring"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.name}</span>
                    </Link>
                    <ChevronRight size={12} className="text-border" aria-hidden="true" />
                  </>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
