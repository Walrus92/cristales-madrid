"use client";
import { useEffect, useState } from "react";

const ICON_W = 70;
const ICON_H = 40;
const GAP = 12;

const SqueegeeIcon = () => (
    <svg viewBox="0 0 180 100" width={ICON_W} height={ICON_H} style={{ display: "block" }}>
        <rect x="7" y="8" width="166" height="7" fill="#333" />
        <rect x="64" y="10" width="52" height="26" fill="#999" stroke="#333" />
        <rect x="80" y="36" width="20" height="50" rx="6" fill="#4aa3b1" stroke="#345737" />
    </svg>
);

export default function SqueegeeOverlay() {
    const [progress, setProgress] = useState(0);
    const [start, setStart] = useState({ x: 0, y: 0 });
    const [target, setTarget] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const measure = () => {
            const brand = document.getElementById("brand-inner");

            // 🔥 medimos el contenedor interno del header (el que tiene el padding real)
            const headerInner = document.querySelector(
                "header > div.max-w-6xl"
            ) as HTMLElement | null;

            if (!brand || !headerInner) return;

            const b = brand.getBoundingClientRect();
            const inner = headerInner.getBoundingClientRect();

            // centro vertical REAL del header (la franja blanca)
            const centerY = inner.top + inner.height / 2;

            setStart({
                x: inner.left + inner.width / 2 - ICON_W / 2,
                y: centerY - ICON_H / 2,
            });

            const TEXT_PADDING = 8; // la separación visual mínima

            setTarget({
                x: b.left - ICON_W + 10,
                y: centerY - ICON_H / 2,
            });
        };

        measure();
        window.addEventListener("resize", measure);
        window.addEventListener("orientationchange", measure);
        return () => {
            window.removeEventListener("resize", measure);
            window.removeEventListener("orientationchange", measure);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const max = 80; // 🔥 Antes 200 → más rápido y más suave
            const raw = Math.min(window.scrollY / max, 1);

            // easing suave y fluido
            const eased =
                raw < 0.5
                    ? 3 * raw * raw         // curva más rápida al inicio
                    : 1 - Math.pow(1 - raw, 3);

            setProgress(eased);

            // Barrido del header (solo si quieres mantenerlo)
            const header = document.getElementById("main-header");
            if (header) {
                // derecha → izquierda
                const rightRemaining = (1 - eased) * 100;
                header.style.clipPath = `inset(0 0 0 ${rightRemaining}%)`;

                // 🔥 Si aún no ha terminado de aparecer, deja pasar clicks al burger
                if (rightRemaining > 5) {
                    header.style.pointerEvents = "auto";
                } else {
                    header.style.pointerEvents = "auto"; // siempre clickable cuando ya está visible
                }
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);



    const x = start.x + (target.x - start.x) * progress;
    const y = start.y + (target.y - start.y) * progress;
    const rotation = progress * 90;

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
