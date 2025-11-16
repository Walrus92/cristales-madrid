"use client";

import { useEffect, useState } from "react";
import { site } from "@/config";

const ICON_W = 70;
const ICON_H = 40;

const SqueegeeIcon = () => (
    <svg viewBox="0 0 180 100" width={ICON_W} height={ICON_H} style={{ display: "block" }}>
        <rect x="7" y="8" width="166" height="7" fill="#333" />
        <rect x="64" y="10" width="52" height="26" fill="#999" stroke="#333" />
        <rect x="80" y="36" width="20" height="50" rx="6" fill="#4aa3b1" stroke="#345737" />
    </svg>
);

export default function Header() {
    const navItems = site.sections.filter((s) => s.nav);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const [progress, setProgress] = useState(0);
    const [start, setStart] = useState({ x: 0, y: 0 });
    const [target, setTarget] = useState({ x: 0, y: 0 });

    // medir posiciones
    useEffect(() => {
        const measure = () => {
            const brand = document.getElementById("brand-inner");
            const headerInner = document.querySelector("header > div.max-w-6xl");

            if (!brand || !headerInner) return;

            const b = brand.getBoundingClientRect();
            const h = headerInner.getBoundingClientRect();

            const cy = h.top + h.height / 2;

            setStart({
                x: h.left + h.width / 2 - ICON_W / 2,
                y: cy - ICON_H / 2,
            });

            setTarget({
                x: b.left - ICON_W + 10,
                y: cy - ICON_H / 2,
            });
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    // scroll
    useEffect(() => {
        if (open) return;

        const onScroll = () => {
            setScrolled(window.scrollY > 50);

            const raw = Math.min(window.scrollY / 80, 1);
            const eased = raw < 0.5 ? 3 * raw * raw : 1 - (1 - raw) ** 3;
            setProgress(eased);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [open]);

    // raqueta pos + rotación
    const x = start.x + (target.x - start.x) * progress;
    const y = start.y + (target.y - start.y) * progress;
    const rotation = progress * 90;

    return (
        <header
            id="main-header"
            className={`
  fixed top-0 left-0 w-full z-50 transition-all duration-300
  ${scrolled ? "backdrop-blur-md shadow-md" : "backdrop-blur-0 shadow-none"}
`}
            style={{ backgroundColor: scrolled ? "var(--header-bg-scrolled)" : "transparent" }}
        >
            {/* RAQUETA */}
            {!open && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
                        transformOrigin: "center",
                        transition: "transform 0.06s linear",
                        zIndex: 9999,
                        pointerEvents: "none",
                    }}
                >
                    <SqueegeeIcon />
                </div>
            )}

            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                {/* LOGO */}
                <div className="flex items-center gap-2 relative">
                    <a
                        href="#"
                        id="brand-text"
                        className="pl-8 font-extrabold text-xl transition-all cursor-pointer"
                        style={{
                            color: scrolled ? "var(--header-text)" : "transparent",
                            transition: "color 0.3s ease",
                        }}
                    >
                        <span id="brand-inner">{site.business.name}</span>
                    </a>
                </div>

                {/* NAV */}
                <nav className={`hidden md:flex gap-8 transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="font-medium transition"
                            style={{
                                color: scrolled ? "var(--header-text)" : "transparent",
                                transition: "color 0.3s ease",
                            }}
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                {/* WHATSAPP */}
                <a
                    href={site.whatsapp.href}
                    className={`hidden md:block rounded-full px-4 py-2 font-medium transition-all ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    style={{
                        backgroundColor: scrolled ? "var(--primary)" : "transparent",
                        color: scrolled ? "#fff" : "transparent",
                        border: scrolled ? "none" : "1px solid var(--header-text-invert)",
                    }}
                >
                    WhatsApp
                </a>

                {/* BURGER */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                    style={{ color: scrolled ? "var(--header-text)" : "var(--header-text-invert)" }}
                >
                    ☰
                </button>
            </div>

            {/* MENU MOBILE */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col gap-1">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="px-6 py-3 border-b text-[var(--text)] font-medium"
                            onClick={() => setOpen(false)}
                        >
                            {item.title}
                        </a>
                    ))}

                    <a
                        href={site.whatsapp.href}
                        className="px-6 py-3 font-semibold text-[var(--primary)]"
                        onClick={() => setOpen(false)}
                    >
                        WhatsApp
                    </a>
                </div>
            )}
        </header>
    );
}
