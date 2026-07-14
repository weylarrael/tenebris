"use client";

import { useEffect, useState } from "react";
import { LINKS, NAV } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/80 backdrop-blur-md border-b border-[var(--line)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-3">
          <span className="text-gold text-lg leading-none transition group-hover:rotate-180 duration-700">
            ✦
          </span>
          <span className="font-wordmark text-lg tracking-arcane text-parchment">
            TENEBRIS
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold-bright"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[var(--line)] px-5 py-2 text-xs uppercase tracking-[0.22em] text-gold-bright transition hover:border-gold hover:bg-gold/10 md:inline-block"
        >
          Reservar sesión
        </a>

        <button
          aria-label="Menú"
          onClick={() => setOpen((v) => !v)}
          className="text-gold-bright md:hidden"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--line)] bg-void/95 px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-5">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-sm tracking-[0.2em] text-parchment"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-[0.2em] text-gold-bright"
              >
                Reservar sesión →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
