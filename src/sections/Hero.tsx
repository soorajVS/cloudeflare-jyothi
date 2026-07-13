import PlaceholderImage from '../components/PlaceholderImage'
import { subTagline, tagline, welcome } from '../data/content'

export default function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-20 overflow-hidden">
      {/* TODO: replace with real photography of the retreat / Kerala coastline */}
      <div className="absolute inset-0">
        <PlaceholderImage
          label="NavaJyothi coastal retreat"
          variant="teal"
          aspect="auto"
          className="h-full w-full rounded-none"
          showLabel={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/80 via-deep-teal/70 to-cream" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <p className="text-sm font-semibold tracking-[0.3em] text-gold uppercase">
          NavaJyothi Health &amp; Retreat
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-ivory sm:text-6xl">
          {tagline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-sea-mist">{subTagline}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-deep-teal shadow-lg transition-transform hover:scale-105"
          >
            Begin Your Journey
          </a>
          <a
            href="#philosophy"
            className="rounded-full border border-ivory/40 px-7 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
          >
            Explore the Retreat
          </a>
        </div>

        <div className="mt-16 max-w-2xl text-sm leading-relaxed text-ivory/85 sm:text-base">
          <p className="font-serif text-xl text-gold">{welcome.heading}</p>
          {welcome.paragraphs.map((p) => (
            <p key={p} className="mt-4">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
