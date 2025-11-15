import { site } from "@/config";
import Reveal from "./Reveal";

export default function Section({ section }: { section: any }) {
  const index = site.sections.indexOf(section);
  const bg = index % 2 === 0 ? "var(--bg-alt)" : "var(--bg)";

  return (
    <section id={section.id} style={{ backgroundColor: bg }} className="pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-extrabold tracking-tight"
              style={{
                color: "var(--section-title)",
                padding: "0.2rem 0",
              }}
            >
              {section.title}
            </h2>

            {/* Línea separadora elegante */}
            <div className="mx-auto mt-3 w-16 h-[2px] rounded-full bg-[var(--primary)] opacity-50"></div>
          </div>
        </Reveal>

        {/* LIST SECTION */}
        {section.type === "list" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.items?.map((item: any, i: number) => (
              <Reveal key={i}>
                <div className="p-6 rounded-xl shadow-sm transition hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                    borderTop: "3px solid var(--primary)",
                  }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-lg" style={{ color: "var(--section-title)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--section-text)" }}>
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* GALLERY */}
        {section.type === "gallery" && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {section.images?.map((img: any, i: number) => (
              <Reveal key={i}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded w-full h-56 object-cover
    transition-transform duration-300
    hover:scale-[1.03]
    active:scale-[0.97]"
                />
              </Reveal>
            ))}
          </div>
        )}
        {/* TESTIMONIALS */}
        {section.type === "testimonials" && (
          <div className="grid md:grid-cols-3 gap-6">
            {section.testimonials?.map((t: any, i: number) => (
              <Reveal key={i}>
                <div
                  className="p-6 rounded-xl shadow-sm bg-white/70 backdrop-blur-sm"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <p className="text-sm italic mb-3" style={{ color: "var(--section-text)" }}>
                    “{t.text}”
                  </p>

                  <div className="font-semibold" style={{ color: "var(--section-title)" }}>
                    {t.name}
                  </div>

                  <div className="text-xs" style={{ color: "var(--section-text)" }}>
                    {t.location}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* FAQ */}
        {section.type === "faqs" && (
          <div className="max-w-3xl mx-auto space-y-6">
            {section.faqs?.map((f: any, i: number) => (
              <Reveal key={i}>
                <details className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-[var(--border)] cursor-pointer">
                  <summary
                    className="font-semibold text-lg flex justify-between items-center"
                    style={{ color: "var(--faq-q)" }}
                  >
                    {f.q}
                    <span className="transition group-open:rotate-45 text-xl">+</span>
                  </summary>
                  <p className="mt-2 text-sm" style={{ color: "var(--faq-a)" }}>
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        )}

        {/* PRICING */}
        {section.type === "pricing" && (
          <div className="grid md:grid-cols-3 gap-6">
            {section.plans?.map((plan: any, i: number) => (
              <Reveal key={i}>
                <div
                  className="p-6 rounded shadow-sm text-center flex flex-col min-h-[320px]"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--pricing-title)" }}>
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold mb-4" style={{ color: "var(--pricing-price)" }}>
                    {plan.price}
                  </div>
                  <ul className="text-sm mb-6 space-y-2">
                    {plan.features?.map((f: any, j: number) => (
                      <li key={j} style={{ color: "var(--pricing-text)" }}>
                        • {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className="mt-auto px-4 py-2 rounded text-white font-semibold"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* CONTACT */}
        {section.type === "contact" && (
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <p className="mb-4 text-lg" style={{ color: "var(--section-text)" }}>
                ¿Tienes dudas o quieres presupuesto?
              </p>
              <p className="mb-8" style={{ color: "var(--section-text)" }}>
                Te respondemos el mismo día.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}

function ContactForm() {
  const endpoint = site.formspree.endpoint;

  return (
    <form action={endpoint} method="POST" className="grid gap-3 max-w-md mx-auto">
      <input
        name="name"
        placeholder="Tu nombre"
        className="border px-3 py-2 rounded"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      />
      <input
        name="email"
        type="email"
        placeholder="Tu email"
        className="border px-3 py-2 rounded"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        rows={4}
        className="border px-3 py-2 rounded"
        style={{ borderColor: "var(--border)", color: "var(--text)" }}
      />

      <button
        type="submit"
        className="px-4 py-2 rounded text-white font-semibold"
        style={{ backgroundColor: "var(--primary)" }}
      >
        Enviar
      </button>
    </form>
  );
}
