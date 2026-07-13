import SectionHeading from '../components/SectionHeading'
import { recreation, signatureExperiences } from '../data/content'

export default function Recreation() {
  return (
    <section id="experiences" className="scroll-mt-20 bg-ivory px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Beyond Therapy"
          title="Recreation & Signature Experiences"
        />

        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-deep-teal">
              Recreation &amp; Sports
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {recreation.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-forest/10 px-4 py-2 text-sm font-medium text-forest"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-deep-teal">
              Signature Experiences
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {signatureExperiences.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gold/10 px-4 py-2 text-sm font-medium text-terracotta"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
