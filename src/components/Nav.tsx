import { useState } from 'react'

const NAV_LINKS = [
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#programmes', label: 'Programmes' },
  { href: '#dinacharya', label: 'Dinacharya' },
  { href: '#therapies', label: 'Therapies' },
  { href: '#kailasa', label: 'Kailasa Pavilion' },
  { href: '#accommodation', label: 'Accommodation' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sea-mist/60 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="flex items-center gap-2 font-serif text-xl font-semibold text-deep-teal"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            role="presentation"
            aria-hidden="true"
            className="text-gold"
          >
            <path d="M12 3c3 3 3 6 0 9-3-3-3-6 0-9Z" />
            <path d="M4 13c3-2 6-2 8 0 2-2 5-2 8 0-1 4-4 7-8 8-4-1-7-4-8-8Z" />
          </svg>
          NavaJyothi
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-9 w-9 items-center justify-center rounded-full text-deep-teal md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" role="presentation" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-sea-mist/60 bg-cream px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-charcoal/80 hover:bg-sea-mist/50 hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
