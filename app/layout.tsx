import "./globals.css";
import { site } from "@/config";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: site.seo.title,
  description: site.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" as="image" href={site.hero.image} />

        {/* VARIABLES CSS DEFINITIVAS BASADAS EN CONFIG */}
        <style>{`
  :root {
    --primary: ${site.colors.primary};
    --primary-dark: ${site.colors.primaryDark};

    --text: ${site.colors.text};
    --text-soft: ${site.colors.textSoft};

    --bg: ${site.colors.bg};
    --bg-alt: ${site.colors.bgAlt};
    --border: ${site.colors.border};

    --hero-image: url('${site.hero.image}');
    --hero-text: ${site.colors.heroText};
    --hero-text-soft: ${site.colors.heroTextSoft};
    --hero-fallback: ${site.colors.heroFallback};
    --hero-overlay: ${site.colors.heroOverlay};

    --header-bg-scrolled: ${site.colors.headerBgScrolled};
    --header-text: ${site.colors.headerText};
    --header-text-invert: ${site.colors.headerTextInvert};

    --section-title: ${site.colors.sectionTitle};
    --section-text: ${site.colors.sectionText};

    --faq-q: ${site.colors.faqQ};
    --faq-a: ${site.colors.faqA};

    --pricing-title: ${site.colors.pricingTitle};
    --pricing-price: ${site.colors.pricingPrice};
    --pricing-text: ${site.colors.pricingText};
  }
`}</style>


      </head>

      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
