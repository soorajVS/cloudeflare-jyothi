import SectionHeading from '../components/SectionHeading'
import { artsAndCulture } from '../data/content'

export default function ArtsCulture() {
  return (
    <section id="culture" className="scroll-mt-20 bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Heritage & Learning"
          title="Arts, Culture & Learning"
          subtitle="NavaJyothi supports local heritage through education, craft, and community."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {artsAndCulture.map((item) => (
            <span
              key={item}
              className="rounded-full border border-terracotta/30 bg-terracotta/10 px-4 py-2 text-sm font-medium text-terracotta"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
