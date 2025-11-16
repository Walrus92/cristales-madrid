"use client";
import { useEffect, useState } from "react";
import { site } from "@/config";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 220);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="flex gap-2 px-3 py-2 rounded-full backdrop-blur-md bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-white/40">
        <a
          href={site.whatsapp.href}
          className="px-4 py-2 rounded-full font-semibold text-white"
          style={{ backgroundColor: "var(--primary)" }}
        >
          WhatsApp
        </a>
        <a
          href={`tel:${site.business.phone}`}
          className="px-4 py-2 rounded-full font-semibold"
          style={{
            color: "var(--text)",
            border: "1px solid var(--border)",
            background: "rgba(255,255,255,0.55)",
          }}
        >
          Llamar
        </a>
      </div>
    </div>
  );
}
