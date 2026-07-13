import SectionHeading from '../components/SectionHeading'
import { coreValues, philosophy } from '../data/content'

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-20 bg-ivory px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="Vision, Mission & Timeless Wisdom"
        />

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl bg-cream p-8 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-deep-teal">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{philosophy.vision}</p>
          </div>
          <div className="rounded-2xl bg-cream p-8 shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-deep-teal">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{philosophy.mission}</p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-cream p-8 shadow-sm">
          <h3 className="font-serif text-xl font-semibold text-deep-teal">Our Aims</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {philosophy.aims.map((aim) => (
              <li key={aim} className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {aim}
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-12 rounded-2xl bg-deep-teal px-8 py-10 text-center text-ivory">
          <p className="text-sm tracking-wide text-sea-mist uppercase">{philosophy.statement}</p>
          <p className="mt-5 font-serif text-2xl font-medium text-gold italic sm:text-3xl">
            &ldquo;{philosophy.sanskritQuote}&rdquo;
          </p>
          <p className="mt-3 text-sm text-sea-mist">{philosophy.sanskritTranslation}</p>
        </blockquote>

        <div className="mt-16">
          <h3 className="mb-6 text-center font-serif text-xl font-semibold text-deep-teal">
            Our Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreValues.map((value) => (
              <span
                key={value}
                className="rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-2 text-sm font-medium text-terracotta"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
