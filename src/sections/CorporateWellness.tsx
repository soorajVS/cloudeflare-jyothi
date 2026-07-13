import SectionHeading from '../components/SectionHeading'
import { corporateWellness } from '../data/content'

export default function CorporateWellness() {
  return (
    <section id="corporate" className="scroll-mt-20 bg-terracotta px-6 py-24 text-ivory">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="For Teams & Leaders"
          title="Corporate Wellness"
          subtitle="An inspiring workspace for professionals seeking balance and clarity."
          light
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {corporateWellness.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-ivory/20 bg-ivory/10 p-5 text-sm font-medium text-ivory"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
