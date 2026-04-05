type Props = {
  quote: string
  name: string
  city: string
  platform?: string
  rating?: number
  date?: string
}

export function ReviewCard({
  quote,
  name,
  city,
  platform = 'Google Review',
  rating = 5,
  date = '2024-09-01',
}: Props) {
  return (
    <article
      className="card flex flex-col h-full"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Hidden schema fields required by Google Review snippet spec */}
      <meta itemProp="datePublished" content={date} />

      {/* itemReviewed — tells Google what this review is about */}
      <div
        itemProp="itemReviewed"
        itemScope
        itemType="https://schema.org/LocalBusiness"
        hidden
      >
        <meta itemProp="name" content="Excalibur Auto Locksmiths" />
      </div>

      {/* reviewRating — required Rating type with ratingValue + bestRating */}
      <div
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
        hidden
      >
        <meta itemProp="ratingValue" content={String(rating)} />
        <meta itemProp="bestRating" content="5" />
      </div>

      {/* Stars — visible only, aria already covers accessibility */}
      <div
        className="flex gap-0.5 mb-3"
        aria-label={`${rating} out of 5 stars`}
        role="img"
      >
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-gold text-lg leading-none" aria-hidden="true">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="text-color-text text-sm leading-relaxed flex-1 mb-4 italic"
        itemProp="reviewBody"
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution — author wrapped in Person scope as Google requires */}
      <footer className="flex items-center justify-between">
        <div>
          <div
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <p className="font-bold text-sm text-primary" itemProp="name">
              {name}
            </p>
          </div>
          <p className="text-xs text-muted">{city}</p>
        </div>
        <span className="text-xs bg-surface text-muted px-2 py-1 rounded-full font-medium">
          {platform}
        </span>
      </footer>
    </article>
  )
}
