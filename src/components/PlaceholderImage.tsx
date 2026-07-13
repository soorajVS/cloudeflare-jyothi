type Variant = 'teal' | 'gold' | 'terracotta' | 'sea'

const GRADIENTS: Record<Variant, string> = {
  teal: 'linear-gradient(135deg, #0f3d3e 0%, #1f5c4e 100%)',
  gold: 'linear-gradient(135deg, #c9932a 0%, #b5542e 100%)',
  terracotta: 'linear-gradient(135deg, #b5542e 0%, #7a2f18 100%)',
  sea: 'linear-gradient(135deg, #1f5c4e 0%, #dce9e4 100%)',
}

type PlaceholderImageProps = {
  label: string
  aspect?: string
  variant?: Variant
  className?: string
  /** Hide the visible camera-icon/label overlay — use for tall full-bleed
   * backgrounds where a vertically-centered label would drift into other
   * content. The aria-label is kept either way. */
  showLabel?: boolean
}

// TODO: swap PlaceholderImage usages for real photography once available.
export default function PlaceholderImage({
  label,
  aspect = '4/3',
  variant = 'teal',
  className = '',
  showLabel = true,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl ${className}`}
      style={{
        aspectRatio: aspect,
        backgroundImage: `${GRADIENTS[variant]}, repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 12px)`,
      }}
    >
      {showLabel && (
        <div className="flex flex-col items-center gap-2 px-4 text-center text-ivory/80">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            role="presentation"
            aria-hidden="true"
          >
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <circle cx="12" cy="13" r="3.5" />
            <path d="M8 6l1.5-2h5L16 6" />
          </svg>
          <span className="text-xs font-medium tracking-wide uppercase">{label}</span>
        </div>
      )}
    </div>
  )
}
