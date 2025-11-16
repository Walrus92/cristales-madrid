import { site } from "@/config";
import Reveal from "@/components/Reveal";
// import SqueegeeOverlay from "@/components/SqueegeeOverlay";

export default function Hero() {
  return (
    <section
      className="
    relative w-full min-h-[100svh]
    flex flex-col items-center justify-center
    px-6 hero-bg
    bg-gradient-to-b from-black/40 via-black/25 to-black/10
    pt-16 md:pt-20 pb-16
  "
      style={{
        backgroundImage: `url(${site.hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* --- Capa de contraste simplificada (más limpio, menos ruido) --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />

      {/* (Se mantiene el resto del layout idéntico) */}
      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col gap-8">

        <Reveal>
          <h1
            className="font-extrabold text-4xl md:text-6xl leading-tight text-white"
            style={{
              textShadow: "0 2px 12px rgba(0,0,0,0.45)",
              color: "var(--hero-text)", // mantengo tu variable aunque forcemos blanco
            }}
          >
            {site.hero.title}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-xl md:text-2xl font-medium text-white/85"
            style={{
              textShadow: "0 1px 6px rgba(0,0,0,0.40)",
              color: "var(--hero-text-soft)", // mantengo variable original
            }}
          >
            {site.hero.subtitle}
          </p>
        </Reveal>

        {/* --- Social proof añadido sin romper nada --- */}
        <Reveal delay={0.25}>
          <div className="text-white/90 text-sm md:text-base italic">
            ⭐️⭐️⭐️⭐️⭐️ Clientes satisfechos en Madrid y alrededores
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <ul
            className="text-lg space-y-2"
            style={{ color: "var(--hero-text-soft)" }}
          >
            {site.hero.bulletPoints.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        </Reveal>

        {/* --- CTAs mejorados, pero conservando tus props originales --- */}
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full max-w-md mx-auto">
            <a
              href={site.hero.ctaHref}
              className="w-full md:w-auto px-6 py-3 rounded-full font-semibold text-white text-center transition-all duration-200 hover:brightness-110 hover:-translate-y-[2px]"
              style={{
                backgroundColor: "var(--primary)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              }}
            >
              {site.hero.ctaLabel}
            </a>

            <a
              id="hero-whatsapp"
              href={site.hero.ctaSecondaryHref}
              className="w-full md:w-auto px-6 py-3 rounded-full font-semibold text-center backdrop-blur-sm transition-all duration-200 hover:brightness-110 hover:-translate-y-[2px]"
              style={{
                backgroundColor: "#25D366",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.20)",
                border: "1px solid var(--hero-text-soft)",
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
