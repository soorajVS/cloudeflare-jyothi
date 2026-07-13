import { PLACEHOLDER_CONTACT } from '../data/contact'
import { closingCta } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-deep-teal text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <p className="font-serif text-2xl font-semibold sm:text-3xl">{closingCta}</p>
        <p className="mt-2 text-sm tracking-[0.2em] text-gold uppercase">
          NavaJyothi Health &amp; Retreat
        </p>
        <p className="mt-1 text-sm text-sea-mist">
          Ayurveda &middot; Philosophy &middot; Yoga &middot; Wellness
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 border-t border-white/10 pt-10 text-left sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">Address</p>
            <p className="mt-1 text-sm text-sea-mist">{PLACEHOLDER_CONTACT.address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">Reach us</p>
            <p className="mt-1 text-sm text-sea-mist">{PLACEHOLDER_CONTACT.phone}</p>
            <p className="mt-1 text-sm text-sea-mist">{PLACEHOLDER_CONTACT.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-gold uppercase">Follow</p>
            <p className="mt-1 text-sm text-sea-mist">{PLACEHOLDER_CONTACT.instagram}</p>
            <p className="mt-1 text-sm text-sea-mist">{PLACEHOLDER_CONTACT.facebook}</p>
          </div>
        </div>

        <p className="mt-10 text-xs text-sea-mist/60">
          &copy; {new Date().getFullYear()} NavaJyothi Health &amp; Retreat. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
