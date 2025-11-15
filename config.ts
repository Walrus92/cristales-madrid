export const site = {
  /*
  ─────────────────────────────────────────
  SCHEMA (JSON-LD para SEO local)
  ─────────────────────────────────────────
  */
  schema: {
    type: "LocalBusiness",
    name: "Nombre del negocio",
    description: "Descripción corta del servicio.",
    image: "/og-image.jpg",
    telephone: "+34 600 000 000",
    email: "info@ejemplo.com",
    address: {
      street: "Calle Ejemplo 123",
      locality: "Madrid",
      region: "Madrid",
      postalCode: "28000",
      country: "ES",
    },
    url: "https://www.midominio.com",
    areaServed: "Madrid y alrededores",
    priceRange: "€€",
  },

  /*
  ─────────────────────────────────────────
  SEO
  ─────────────────────────────────────────
  */
  seo: {
    title: "Título SEO para Google",
    description: "Descripción clara enfocada a conversión y SEO.",
    keywords: [
      "limpiacristales madrid",
      "limpieza de cristales",
      "servicio profesional",
      "empresa de limpieza"
    ],
    canonical: "https://www.midominio.com",
    ogImage: "/og-image.jpg"
  },

  /*
  ─────────────────────────────────────────
  DATOS DE NEGOCIO
  ─────────────────────────────────────────
  */
  business: {
    name: "Nombre del negocio",
    tagline: "Subtítulo",
    description: "Descripción corta del servicio",
    email: "info@ejemplo.com",
    phone: "+34 600 000 000",
    location: "Ciudad, País"
  },

  /*
  ─────────────────────────────────────────
  COLORES (diseño suave premium)
  ─────────────────────────────────────────
  */
  colors: {
    /* PRIMARIO */
    primary: "#4F6BFF",          // azul más limpio y menos chillón
    primaryDark: "#3D55D6",

    /* TEXTO GLOBAL */
    text: "#0F172A",             // slate-900 (casi negro, muy legible)
    textSoft: "#475569",         // slate-600

    /* FONDOS */
    bg: "#F8FAFC",               // slate-50 (más moderno que gris plano)
    bgAlt: "#FFFFFF",
    border: "#E2E8F0",           // slate-200

    /* HERO — para que se lea SIEMPRE */
    heroText: "#FFFFFF",         // blanco puro = máxima legibilidad
    heroTextSoft: "rgba(255,255,255,0.8)", // contraste suficiente
    heroFallback: "#384252",     // tono oscuro elegante bajo la imagen
    heroOverlay: "rgba(0,0,0,0.35)", // overlay universal para cualquier foto

    /* HEADER */
    headerBgScrolled: "rgba(255,255,255,0.85)", // buen contraste sin parecer gris muerto
    headerText: "#0F172A",
    headerTextInvert: "#FFFFFF",

    /* TITULARES DE SECCIÓN */
    sectionTitle: "#0F172A",      // fuerte, legible
    sectionText: "#475569",       // suave pero no tan claro como antes

    /* FAQ */
    faqQ: "#0F172A",
    faqA: "#475569",

    /* PRICING */
    pricingTitle: "#0F172A",
    pricingPrice: "#1E293B",      // slate-800 (oscuro elegante)
    pricingText: "#475569"
  },


  /*
  ─────────────────────────────────────────
  HERO
  ─────────────────────────────────────────
  */
  hero: {
    image: "/hero-background.jpg",
    overlay: "rgba(96, 96, 96, 0.18)",
    fallbackColor: "#61616170",
    title: "Tu servicio profesional en la zona",
    subtitle: "Rápido, fiable y con garantía. Más de 150 clientes satisfechos.",

    bulletPoints: [
      "Precios cerrados",
      "Respuesta en el mismo día",
      "Material profesional"
    ],

    ctaLabel: "Pide presupuesto",
    ctaHref: "#contacto",

    ctaSecondaryLabel: "Hablar por WhatsApp",
    ctaSecondaryHref: "https://wa.me/34600000000"
  },

  /*
  ─────────────────────────────────────────
  WHATSAPP
  ─────────────────────────────────────────
  */
  whatsapp: {
    number: "34600000000",
    message: "Hola, quiero más información!",
    buttonLabel: "WhatsApp",
    href: "https://wa.me/34600000000?text=Hola,%20quiero%20información",
  },

  /*
  ─────────────────────────────────────────
  FORMULARIO
  ─────────────────────────────────────────
  */
  formspree: {
    endpoint: "https://formspree.io/f/XXXXX"
  },

  /*
  ─────────────────────────────────────────
  SECCIONES (versión limpia para header)
  ─────────────────────────────────────────
  */
  sections: [
    {
      id: "galeria",
      title: "Galería",
      nav: false,              // ❌ no va al header
      type: "gallery",
      images: [
        { src: "/cristales1.jpg", alt: "Descripción 1" },
        { src: "/cristales2.jpg", alt: "Descripción 2" },
        { src: "/cristales3.jpg", alt: "Descripción 3" }
      ]
    },

    {
      id: "servicios",
      title: "Servicios",
      nav: true,               // ✔ sí va al header
      type: "list",
      items: [
        { icon: "🧽", title: "Servicio 1", text: "Descripción breve." },
        { icon: "🏠", title: "Servicio 2", text: "Descripción breve." },
        { icon: "💼", title: "Servicio 3", text: "Descripción breve." }
      ]
    },

    {
      id: "ventajas",
      title: "Por qué nosotros",
      nav: true,
      type: "list",
      items: [
        { icon: "⚡", title: "Rápidos", text: "Llegamos y lo resolvemos." },
        { icon: "🛡️", title: "Garantía", text: "Resultados asegurados." },
        { icon: "🤝", title: "Trato cercano", text: "Cero complicaciones." }
      ]
    },

    {
      id: "testimonios",
      title: "Testimonios",
      nav: false,              // ❌ no va al header
      type: "testimonials",
      testimonials: [
        { name: "Carlos M.", location: "Madrid", text: "Servicio impecable." },
        { name: "Ana G.", location: "Móstoles", text: "Trato excelente..." },
        { name: "Coimbra.", location: "Majadahonda", text: "Impoluto y puntual" }
      ]
    },

    {
      id: "precios",
      title: "Precios",
      nav: true,
      type: "pricing",
      plans: [
        { name: "Básico", price: "39€", features: ["Servicio estándar", "Entrega rápida"], cta: "Elegir básico" },
        { name: "Profesional", price: "79€", features: ["Servicio completo", "Material premium", "Garantía incluida"], cta: "Elegir profesional" },
        { name: "Premium", price: "129€", features: ["Servicio avanzado", "Extras incluidos", "Preferencia en agenda"], cta: "Elegir premium" }
      ]
    },

    // FAQS
    {
      id: "faqs",
      title: "FAQs",
      nav: false,
      type: "faqs",
      faqs: [
        { q: "¿En qué zonas trabajáis?", a: "Trabajamos en toda la provincia." },
        { q: "¿Cómo se realiza el pago?", a: "Bizum, transferencia o efectivo." },
        { q: "¿Qué pasa si llueve?", a: "Reprogramamos sin coste adicional." }
      ]
    },

    {
      id: "contacto",
      title: "Contacto",
      nav: true,               // ✔ sí va al header
      type: "contact",
      description: "Cuéntanos..."
    }
  ]

};
