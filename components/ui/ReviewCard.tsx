type Props = {
  quote: string
  name: string
  city: string
  platform?: string
  rating?: number
}

export function ReviewCard({
  quote,
  name,
  city,
  platform = 'Google Review',
  rating = 5,
}: Props) {
  return (
    <article
      className="card flex flex-col h-full"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Stars */}
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

      {/* Attribution */}
      <footer className="flex items-center justify-between">
        <div>
          <p className="font-bold text-sm text-primary" itemProp="author">
            {name}
          </p>
          <p className="text-xs text-muted">{city}</p>
        </div>
        <span className="text-xs bg-surface text-muted px-2 py-1 rounded-full font-medium">
          {platform}
        </span>
      </footer>
    </article>
  )
}
