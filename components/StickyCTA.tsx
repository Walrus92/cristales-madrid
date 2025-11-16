"use client";
import { useEffect, useState } from "react";
import { site } from "@/config";

export default function StickyCTA() {
  const [hideContact, setHideContact] = useState(false);
  const [heroCTAVisible, setHeroCTAVisible] = useState(true); // 👈 empieza visible en hero

  useEffect(() => {
    // --- 1) Detectar si el CTA del hero está visible ---
    const heroCTA = document.getElementById("hero-whatsapp"); // 👈 LO MARCAREMOS AHORA EN EL HERO
    if (!heroCTA) return;

    const ioHero = new IntersectionObserver(
      ([entry]) => {
        setHeroCTAVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    ioHero.observe(heroCTA);
    return () => ioHero.disconnect();
  }, []);

  useEffect(() => {
    // --- 2) Detectar si la sección de contacto está visible ---
    const contact = document.getElementById("contacto");
    if (!contact) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setHideContact(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    io.observe(contact);
    return () => io.disconnect();
  }, []);

  // --- 3) Lógica final ---
  const hidden = heroCTAVisible || hideContact;

  return (
    <div
      className={`
        fixed bottom-4 left-1/2 -translate-x-1/2 z-[95]
        md:hidden transition-all duration-300 
        ${hidden ? "opacity-0 pointer-events-none translate-y-4" : "opacity-100 translate-y-0"}
      `}
    >
      <a
        href={site.whatsapp.href}
        className="px-5 py-3 rounded-full text-white font-semibold shadow-lg"
        style={{ backgroundColor: "#25D366" }}
      >
        WhatsApp
      </a>
    </div>
  );
}
