"use client";
import { useEffect, useState } from "react";
import React from "react";

const ICON_W = 70;
const ICON_H = 40;

const SqueegeeIcon = () => (
  <svg viewBox="0 0 180 100" width={ICON_W} height={ICON_H} style={{ display: "block" }}>
    <rect x="7" y="8" width="166" height="7" fill="#333" />
    <rect x="64" y="10" width="52" height="26" fill="#999" stroke="#333" />
    <rect x="80" y="36" width="20" height="50" rx="6" fill="#4aa3b1" stroke="#345737" />
  </svg>
);

export default function SqueegeeOverlay({
  menuOpen = false,
}: {
  menuOpen?: boolean;
}): React.ReactElement {

  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });

  // --- MENU OPEN → cancelar animación
  useEffect(() => {
    const header = document.getElementById("main-header");

    if (menuOpen) {
      if (header) header.style.clipPath = "inset(0 0 0 0)";
      return;
    }
  }, [menuOpen]);

  // --- SCROLL → ANIMACIÓN
  useEffect(() => {
    if (menuOpen) return;

    const onScroll = () => {
      const max = 80;
      const raw = Math.min(window.scrollY / max, 1);
      const eased = raw < 0.5 ? 3 * raw * raw : 1 - Math.pow(1 - raw, 3);

      setProgress(eased);

      const header = document.getElementById("main-header");
      if (header) {
        const rightRemaining = (1 - eased) * 100;
        header.style.clipPath = `inset(0 0 0 ${rightRemaining}%)`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // --- POSICIÓN FINAL
  const x = start.x + (target.x - start.x) * progress;
  const y = start.y + (target.y - start.y) * progress;
  const rotation = progress * 90;

  // ✅ AQUÍ va el return que te faltaba
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
        transformOrigin: "center",
        transition: "transform 0.06s linear",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <SqueegeeIcon />
    </div>
  );
}
