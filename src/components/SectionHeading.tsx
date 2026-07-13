type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'left' | 'center'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-2xl`}
    >
      <p
        className={`mb-2 text-sm font-semibold tracking-[0.2em] uppercase ${
          light ? 'text-gold' : 'text-terracotta'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-3xl font-semibold sm:text-4xl ${
          light ? 'text-ivory' : 'text-deep-teal'
        }`}
      >
        {title}
      </h2>
      <span
        className={`mt-4 inline-block h-[3px] w-16 rounded-full bg-gold ${
          align === 'center' ? '' : ''
        }`}
      />
      {subtitle && (
        <p className={`mt-4 text-base ${light ? 'text-sea-mist' : 'text-charcoal/80'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
