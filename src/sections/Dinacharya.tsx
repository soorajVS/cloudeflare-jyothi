import SectionHeading from '../components/SectionHeading'
import { dinacharya } from '../data/content'

export default function Dinacharya() {
  return (
    <section id="dinacharya" className="scroll-mt-20 bg-deep-teal px-6 py-24 text-ivory">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="A Day at NavaJyothi"
          title="The Daily Dinacharya Experience"
          light
        />

        <div className="rounded-2xl bg-ivory/5 p-6 sm:p-8">
          <h3 className="font-serif text-lg font-semibold text-gold">
            {dinacharya.morning.label}
          </h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {dinacharya.morning.groups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold tracking-wide text-sea-mist uppercase">
                  {group.title}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ivory/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-ivory/5 p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-gold">
              {dinacharya.afternoon.label}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {dinacharya.afternoon.items.map((item) => (
                <li key={item} className="text-sm text-ivory/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-ivory/5 p-6 sm:p-8">
            <h3 className="font-serif text-lg font-semibold text-gold">
              {dinacharya.evening.label}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {dinacharya.evening.items.map((item) => (
                <li key={item} className="text-sm text-ivory/85">
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
