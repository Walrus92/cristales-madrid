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
            setScrolled(window.scrollY > 1);

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
                fixed top-0 left-0 w-full z-50 
                transition-all duration-300
                ${scrolled ? "opacity-100 visible" : "opacity-0 invisible"}
            `}
            style={{
                backgroundColor: scrolled
                    ? "rgba(255,255,255,0.25)"   // antes 0.30 negro → ahora blanco 0.25
                    : "rgba(255,255,255,0.10)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",

            }}
        >

            {/* degradado suave */}
            <div
                className={`
    absolute inset-0 transition-opacity duration-300
    ${scrolled ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
                style={{
                    zIndex: 50,
                    pointerEvents: "none",
                    background: "linear-gradient(to bottom, rgba(255,255,255,0.20), rgba(255,255,255,0.05))",
                }}
            />



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
                        zIndex: 40,
                        pointerEvents: "none",
                    }}
                >
                    <SqueegeeIcon />
                </div>
            )}

            <div className="relative z-[70] max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
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
                    className={`
    hidden md:flex items-center gap-2 rounded-full px-4 py-2 font-medium 
    transition-all duration-300 
    ${scrolled ? "opacity-100 visible" : "opacity-0 invisible"} 
    hover:brightness-110 hover:-translate-y-[2px]"
`} style={{
                        backgroundColor: "#25D366",
                        color: "#fff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="18"
                        height="18"
                        fill="white"
                    >
                        <path d="M16.027 3C9.387 3 4 8.387 4 15.027c0 2.652.867 5.106 2.332 7.098L4 29l7.137-2.302A12.97 12.97 0 0 0 16.027 27C22.667 27 28 21.613 28 14.973 28 8.333 22.667 3 16.027 3zm0 22.667a9.62 9.62 0 0 1-4.912-1.347l-.35-.207-4.233 1.362 1.373-4.12-.226-.38A9.62 9.62 0 0 1 6.366 15c0-5.32 4.34-9.666 9.661-9.666 5.32 0 9.666 4.346 9.666 9.666 0 5.32-4.346 9.667-9.666 9.667zm5.347-7.227c-.293-.147-1.732-.853-2-0.95-.267-.1-.46-.147-.653.147-.2.293-.753.95-.92 1.146-.173.2-.34.22-.633.073-.293-.147-1.24-.456-2.36-1.452-.872-.777-1.46-1.74-1.633-2.033-.173-.293-.02-.45.127-.597.13-.13.293-.34.44-.513.147-.173.196-.293.293-.487.1-.2.05-.367-.025-.514-.073-.147-.653-1.58-.893-2.166-.233-.56-.473-.487-.653-.487a12.6 12.6 0 0 0-.553-.025c-.2 0-.513.073-.78.367-.267.293-1.027 1.007-1.027 2.453 0 1.447 1.053 2.84 1.2 3.033.147.2 2.07 3.167 5.013 4.453.7.303 1.247.483 1.673.62.702.223 1.34.193 1.84.117.56-.083 1.732-.707 1.98-1.387.247-.68.247-1.267.173-1.387-.073-.12-.267-.2-.56-.347z" />
                    </svg>
                    WhatsApp
                </a>


                {/* BURGER */}
                <button
                    className="md:hidden text-2xl relative z-[70]"
                    onClick={() => setOpen(!open)}
                    style={{ color: scrolled ? "var(--header-text)" : "var(--header-text-invert)" }}
                >
                    ☰
                </button>
            </div>

            {/* MENU MOBILE */}
            {open && (
                <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col gap-1 z-[70]">
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
