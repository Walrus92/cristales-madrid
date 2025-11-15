export const site = {

  schema: {
    type: "LocalBusiness",
    name: "Limpiacristales Madrid",
    description: "Limpieza profesional de cristales para oficinas, comunidades y particulares.",
    image: "og-image.jpg",
    telephone: "+34 666 777 666",
    email: "info@cristalesmadrid.es",
    address: {
      street: "Madrid",
      locality: "Madrid",
      region: "Madrid",
      postalCode: "28000",
      country: "ES",
    },
    url: "https://cristalesmadrid.es",
    areaServed: "Madrid y alrededores",
    priceRange: "€€",
  },

  seo: {
    title: "Limpieza de cristales profesional en Madrid | Limpiacristales Madrid",
    description:
      "Limpieza profesional de cristales en Madrid para viviendas, oficinas y comunidades. Rápidos, limpios y con acabado perfecto.",
    keywords: [
      "limpieza cristales madrid",
      "limpiacristales",
      "cristales oficinas",
      "cristales comunidades",
      "ósmosis madrid"
    ],
    canonical: "https://cristalesmadrid.es",
    ogImage: "og-image.jpg"
  },

  business: {
    name: "Limpiacristales Madrid",
    tagline: "Cristales siempre perfectos.",
    description: "Limpieza profesional de cristales en domicilios, empresas y comunidades.",
    email: "info@cristalesmadrid.es",
    phone: "+34 666 777 666",
    location: "Madrid y alrededores"
  },

  colors: {
    primary: "#3A7DFF",
    primaryDark: "#2E63CC",
    text: "#0F172A",
    textSoft: "#475569",
    bg: "#f8fafce3",
    bgAlt: "#F0F4F8",
    border: "#E2E8F0",
    heroText: "#FFFFFF",
    heroTextSoft: "rgba(255,255,255,0.85)",
    heroFallback: "#233043",
    heroOverlay: "rgba(0,0,0,0.30)",
    headerBgScrolled: "rgba(255,255,255,0.85)",
    headerText: "#0F172A",
    headerTextInvert: "#FFFFFF",
    sectionTitle: "#2E63CC",
    sectionText: "#475569",
    faqQ: "#0F172A",
    faqA: "#475569",
    pricingTitle: "#0F172A",
    pricingPrice: "#1E293B",
    pricingText: "#475569"
  },

  hero: {
    image: "hero-background.jpg",
    overlay: "rgba(0,0,0,0.30)",
    fallbackColor: "#233043",
    title: "Cristales impecables en un momento",
    subtitle: "Limpieza profesional para viviendas, oficinas y comunidades. Rápido, limpio y sin molestias.",
    bulletPoints: [
      "Respuesta rápida",
      "Ósmosis y herramientas pro",
      "Acabado perfecto sin marcas"
    ],
    ctaLabel: "Solicitar presupuesto",
    ctaHref: "#contacto",
    ctaSecondaryLabel: "WhatsApp directo",
    ctaSecondaryHref: "https://wa.me/34666777666"
  },

  whatsapp: {
    number: "34666777666",
    message: "Hola, quiero información sobre la limpieza de cristales.",
    buttonLabel: "WhatsApp",
    href: "https://wa.me/34666777666?text=Hola,%20quiero%20información"
  },

  formspree: { endpoint: "https://formspree.io/f/XXXXX" },

  sections: [
    // GALERÍA
    {
      id: "galeria",
      nav: false,
      title: "Galería",
      type: "gallery",
      images: [
        { src: "cristales1.jpg", alt: "Limpieza de cristales Madrid" },
        { src: "cristales2.jpg", alt: "Trabajo profesional" },
        { src: "cristales3.jpg", alt: "Acabado impecable" },
      ]
    },

    // SERVICIOS (4)
    {
      id: "servicios",
      nav: true,
      title: "Servicios",
      type: "list",
      items: [
        { icon: "🏠", title: "Domicilios", text: "Ventanas, terrazas y cerramientos sin marcas." },
        { icon: "🏢", title: "Empresas", text: "Limpieza interior y exterior con mínima interrupción." },
        { icon: "🏘️", title: "Comunidades", text: "Portales y zonas comunes siempre perfectos." },
        { icon: "💧", title: "Ósmosis y altura", text: "Pértigas de carbono y agua pura. Sin riesgos." }
      ]
    },

    // VENTAJAS (4)
    {
      id: "ventajas",
      nav: true,
      title: "Por qué elegirnos",
      type: "list",
      items: [
        { icon: "⚡", title: "Rápidos", text: "Respuesta el mismo día." },
        { icon: "🧼", title: "Acabado profesional", text: "Herramientas y técnica experta." },
        { icon: "💧", title: "Ósmosis pura", text: "Cristales sin cal ni marcas." },
        { icon: "🤝", title: "Trato cercano", text: "Comunicación fácil y clara." }
      ]
    },

    // OPINIONES (3)
    {
      id: "opiniones",
      nav: false,
      title: "Opiniones",
      type: "testimonials",
      testimonials: [
        { name: "María L.", location: "Las Rozas", text: "Los cristales del chalé quedaron perfectos. Muy profesionales." },
        { name: "Javier S.", location: "Madrid", text: "Rápidos, limpios y sin interrupciones en la oficina." },
        { name: "Comunidad Monteverde", location: "Pozuelo", text: "Zonas comunes impecables cada mes. 100% recomendables." }
      ]
    },

    // PRECIOS — oculto
    {
      id: "precios",
      nav: false,
      type: "hidden"
    },

    // FAQs
    {
      id: "faqs",
      nav: false,
      title: "Preguntas frecuentes",
      type: "faqs",
      faqs: [
        { q: "¿Trabajáis en toda la Comunidad de Madrid?", a: "Sí, cubrimos Madrid capital y alrededores." },
        { q: "¿Usáis productos químicos?", a: "Solo cuando es estrictamente necesario. Ósmosis en la mayoría de trabajos." },
        { q: "¿Se puede pedir presupuesto por WhatsApp?", a: "Sí, envíanos fotos y te respondemos rápido." },
        { q: "¿Qué pasa si llueve?", a: "Reprogramamos sin coste adicional." }
      ]
    },

    // CONTACTO
    {
      id: "contacto",
      nav: true,
      title: "Contacto",
      type: "contact",
      description: "Cuéntanos qué necesitas y te respondemos el mismo día."
    }
  ]
};
