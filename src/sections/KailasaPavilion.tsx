import PlaceholderImage from '../components/PlaceholderImage'
import { kailasa } from '../data/content'

export default function KailasaPavilion() {
  return (
    <section id="kailasa" className="scroll-mt-20 bg-forest px-6 py-24 text-ivory">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-gold uppercase">
            Our Signature Space
          </p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{kailasa.heading}</h2>
          <span className="mt-4 inline-block h-[3px] w-16 rounded-full bg-gold" />
          <p className="mt-6 text-sea-mist">{kailasa.intro}</p>

          <ul className="mt-6 space-y-3">
            {kailasa.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-ivory/90">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <PlaceholderImage
          label="Kailasa Pavilion rooftop & sea view"
          variant="gold"
          aspect="4/5"
          className="w-full"
        />
      </div>
    </section>
  )
}
