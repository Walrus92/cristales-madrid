import "./globals.css";
import { site } from "@/config";
import { Manrope } from "next/font/google";
import StickyCTA from "@/components/StickyCTA";
import Header from "@/components/Header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: site.seo.title,
  description: site.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="preload"
          as="image"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${site.hero.image}`}
        />
        <style>{`
          :root {
            --primary: ${site.colors.primary};
            --primary-dark: ${site.colors.primaryDark};
            --text: ${site.colors.text};
            --text-soft: ${site.colors.textSoft};

            --bg: ${site.colors.bg};
            --bg-alt: ${site.colors.bgAlt};
            --border: ${site.colors.border};
            --hero-image: url('${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${site.hero.image}');
            --hero-text: ${site.colors.heroText};
            --hero-text-soft: ${site.colors.heroTextSoft};
            --hero-fallback: ${site.colors.heroFallback};
            --hero-overlay: ${site.colors.heroOverlay};

            --header-bg-scrolled: ${site.colors.headerBgScrolled};
            --header-text: ${site.colors.headerText};
            --header-text-invert: ${site.colors.headerTextInvert};
          }
        `}</style>
      </head>

      <body className={manrope.className} style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
        <Header />      {/* <-- TODO lo manejamos dentro */}
        {children}
        <StickyCTA />
      </body>
    </html>
  );
}
