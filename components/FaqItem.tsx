"use client";
import { useState } from "react";

export default function FaqItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 py-4">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left"
            >
                <span className="text-lg font-medium text-gray-800">{q}</span>
                <span className="text-2xl leading-none">{open ? "−" : "+"}</span>
            </button>

            {open && (
                <p className="mt-2 text-gray-600">{a}</p>
            )}
        </div>
    );
}
