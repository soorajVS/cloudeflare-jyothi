import PlaceholderImage from '../components/PlaceholderImage'
import SectionHeading from '../components/SectionHeading'
import { accommodationTypes } from '../data/content'

const VARIANTS = ['teal', 'gold', 'terracotta', 'sea'] as const

export default function Accommodation() {
  return (
    <section id="accommodation" className="scroll-mt-20 bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Stay With Us"
          title="Accommodation"
          subtitle="Designed with elegance and comfort, for every kind of retreat."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accommodationTypes.map((type, i) => (
            <div
              key={type}
              className="overflow-hidden rounded-2xl bg-ivory shadow-sm"
            >
              <PlaceholderImage
                label={type}
                variant={VARIANTS[i % VARIANTS.length]}
                aspect="4/3"
                className="rounded-none"
              />
              <p className="p-5 text-sm font-semibold text-deep-teal">{type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
