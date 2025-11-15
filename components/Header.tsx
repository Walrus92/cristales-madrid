"use client";
import { useState, useEffect } from "react";
import { site } from "@/config";

export default function Header() {
    const navItems = site.sections.filter((s) => s.nav);
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            id="main-header"
            className="
                fixed top-0 left-0 w-full z-50 
                transition-all duration-300 
                backdrop-blur-md shadow-md
            "
            style={{
                backgroundColor: scrolled
                    ? "var(--header-bg-scrolled)"
                    : "transparent",
                clipPath: "inset(0 0 0 100%)",
                overflow: "hidden",             // <-- NECESARIO para que el barrido funcione
            }}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                {/* LOGO */}
                <div className="flex items-center gap-2 relative">
                    <div
                        id="brand-text"
                        className="pl-8 font-extrabold text-xl transition-all"
                        style={{
                            color: scrolled
                                ? "var(--header-text)"
                                : "var(--header-text-invert)",
                        }}
                    >
                        <span id="brand-inner">{site.business.name}</span>
                    </div>
                </div>

                {/* NAV DESKTOP */}
                <nav
                    className={`hidden md:flex gap-8 transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="font-medium transition"
                            style={{
                                color: scrolled
                                    ? "var(--header-text)"
                                    : "var(--header-text-invert)",
                            }}
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                {/* WHATSAPP */}
                <a
                    href={site.whatsapp.href}
                    className={`hidden md:block rounded-full px-4 py-2 font-medium transition-all ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    style={{
                        backgroundColor: scrolled ? "var(--primary)" : "transparent",
                        color: scrolled ? "#fff" : "var(--header-text-invert)",
                        border: scrolled ? "none" : "1px solid var(--header-text-invert)",
                    }}
                >
                    WhatsApp
                </a>

                {/* BURGER */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                    style={{
                        color: scrolled
                            ? "var(--header-text)"
                            : "var(--header-text-invert)",
                    }}
                >
                    ☰
                </button>
            </div>

            {/* MENU MOVIL */}
            {open && (
                <div
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col gap-1"
                >
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
