import SectionHeading from '../components/SectionHeading'
import { administrativeNote, clinicalServices, programmes } from '../data/content'

export default function Programmes() {
  return (
    <section id="programmes" className="scroll-mt-20 bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Ayurveda · Yoga · Philosophy"
          title="Integrated Wellness Programmes"
          subtitle="Our integrated wellness programmes combine time-tested Kerala traditions with modern wellness coaching."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-sea-mist bg-ivory p-5 text-sm font-medium text-deep-teal shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-6 text-center font-serif text-xl font-semibold text-deep-teal">
            Clinical Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {clinicalServices.map((item) => (
              <span
                key={item}
                className="rounded-full bg-forest/10 px-4 py-2 text-sm font-medium text-forest"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-charcoal/60 italic">
            {administrativeNote}
          </p>
        </div>
      </div>
    </section>
  )
}
