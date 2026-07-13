import SectionHeading from '../components/SectionHeading'
import { nutrition, recoveryFocus, wellnessTherapies } from '../data/content'

export default function Therapies() {
  return (
    <section id="therapies" className="scroll-mt-20 bg-ivory px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Revival · Recovery · Rehabilitation"
          title="Wellness Therapies"
          subtitle="Specialised programmes supporting recovery, rehabilitation, and lifelong wellbeing."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wellnessTherapies.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-sea-mist bg-cream p-5 text-sm font-medium text-deep-teal shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-deep-teal">
              Our Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {recoveryFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-terracotta/10 px-4 py-2 text-sm font-medium text-terracotta"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-deep-teal">
              Healthy Food &amp; Nutrition
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {nutrition.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
