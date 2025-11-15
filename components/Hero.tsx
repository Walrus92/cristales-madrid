import { site } from "@/config";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[100svh] flex flex-col items-center justify-center px-6 hero-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/10 backdrop-brightness-75" />
      <div
        className="absolute inset-0 bg-black/30"
        style={{ backdropFilter: "brightness(0.9)" }}
      />


      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col gap-8 mt-10">

        <Reveal>
          <h1
            className="font-extrabold text-5xl md:text-7xl leading-tight"
            style={{ color: "var(--hero-text)" }}
          >
            {site.hero.title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-lg md:text-2xl"
            style={{ color: "var(--hero-text-soft)" }}
          >
            {site.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="text-lg space-y-2" style={{ color: "var(--hero-text-soft)" }}>
            {site.hero.bulletPoints.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex gap-4 justify-center mt-4 flex-wrap">

            <a
              href={site.hero.ctaHref}
              className="px-6 py-3 rounded-full font-semibold"
              style={{ backgroundColor: "var(--primary)", color: "#fff" }}
            >
              {site.hero.ctaLabel}
            </a>

            <a
              href={site.hero.ctaSecondaryHref}
              className="px-6 py-3 rounded-full backdrop-blur-sm"
              style={{
                border: "1px solid var(--hero-text-soft)",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "var(--hero-text)",
              }}
            >
              {site.hero.ctaSecondaryLabel}
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
