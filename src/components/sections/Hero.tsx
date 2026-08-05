"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LINKS, SITE } from "@/lib/site";

const CrystalLogo = dynamic(() => import("@/components/three/Crystal"), {
  ssr: false,
  loading: () => null,
});

function HudClock() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="font-mono text-xs tracking-[0.2em] text-[var(--aether)]/70" suppressHydrationWarning>
      {time ?? "--:--:--"}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Veil so the title stays legible over the global constellation bg */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(5,5,8,0.55)_0%,transparent_45%,rgba(3,3,5,0.5)_80%,var(--void)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-void to-transparent" />

      {/* HUD corners */}
      <div className="absolute left-5 top-24 z-20 hidden font-mono text-xs tracking-[0.2em] text-muted/60 sm:block">
        {SITE.version}
      </div>
      <div className="absolute bottom-6 right-5 z-20 hidden sm:block">
        <HudClock />
      </div>

      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-mono text-sm uppercase tracking-[0.28em] text-[var(--aether)] neon-teal sm:text-base sm:tracking-[0.4em]"
        >
          <span className="text-[var(--fuchsia-neon)] neon-fuchsia">//</span>{" "}
          {SITE.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-wordmark text-[2.7rem] font-black leading-[1] tracking-[0.05em] sm:mt-6 sm:text-7xl sm:tracking-[0.1em] md:text-[8.5rem] md:tracking-[0.14em]"
        >
          <span className="text-holo">TENEBRIS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mx-auto mt-6 max-w-2xl font-mono text-base font-medium uppercase tracking-[0.22em] text-white [text-shadow:0_0_16px_rgba(255,255,255,0.35)] sm:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted"
        >
          Centro arcanista de estudio y desarrollo del lenguaje de la luz.
          Difusión e instrucción de técnicas del dominio de la energía.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="#academia"
            className="btn-hud btn-cyan w-full px-10 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] sm:w-auto"
          >
            Más información
          </a>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hud btn-fuchsia w-full px-10 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] sm:w-auto"
          >
            Sesiones por WhatsApp
          </a>
        </motion.div>

        {/* Crystal logo doubling as the scroll cue — click to descend */}
        <motion.a
          href="#academia"
          aria-label="Descender a la Academia"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="group mx-auto mt-12 flex flex-col items-center gap-1"
        >
          <div className="pointer-events-none h-28 w-28 sm:h-32 sm:w-32">
            <CrystalLogo />
          </div>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[0.6rem] uppercase tracking-[0.3em] text-white/70 transition-colors group-hover:text-[var(--fuchsia-neon)]"
          >
            Descender
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
