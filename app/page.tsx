import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { site } from "@/config";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {site.sections
        .filter((s) => s.type !== "hidden")
        .map((section, i) => (
          <Section key={i} section={section} />
        ))}
      <Footer />
    </main>
  );
}
