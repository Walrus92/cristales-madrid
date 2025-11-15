import { site } from "@/config";
import Reveal from "@/components/Reveal";
import SqueegeeOverlay from "@/components/SqueegeeOverlay";

export default function Hero() {
  return (
    <section className="relative w-full h-[100svh] flex flex-col items-center justify-center px-6 hero-bg bg-gradient-to-b from-black/40 via-black/25 to-black/10"
      style={{
        backgroundImage: `url(${site.hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="
  absolute inset-0 
  bg-gradient-to-b 
  from-black/60 via-black/30 to-transparent 
  backdrop-blur-[2px]
" />
      <div className="
  absolute inset-0 
  pointer-events-none 
  shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.6)]
" />

      <SqueegeeOverlay />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-transparent" />

      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col gap-8 mt-10">

        <Reveal>
          <h1
            className="font-extrabold text-4xl md:text-6xl leading-tight"
            style={{
              color: "var(--hero-text)",
              textShadow: "0 2px 8px rgba(0,0,0,0.35)"
            }}
          >
            {site.hero.title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl font-medium opacity-90" style={{
            color: "var(--hero-text-soft)",
            textShadow: "0 1px 6px rgba(0,0,0,0.35)"
          }}>
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
