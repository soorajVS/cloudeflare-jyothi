import SectionHeading from '../components/SectionHeading'
import { whyChooseUs } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-deep-teal px-6 py-24 text-ivory">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="The NavaJyothi Difference" title="Why Choose NavaJyothi?" light />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-ivory/5 p-4">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-deep-teal">
                ✓
              </span>
              <span className="text-sm text-ivory/90">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
