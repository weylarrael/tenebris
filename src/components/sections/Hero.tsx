"use client";

import { motion } from "framer-motion";
import SceneCanvas from "@/components/three/SceneCanvas";
import { LINKS, SITE } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <SceneCanvas />

      {/* Vignette + gradient veils over the canvas */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(5,4,9,0.5)_0%,transparent_24%,rgba(6,5,12,0.55)_75%,var(--void)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-void to-transparent" />

      <div className="relative z-20 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="px-2 font-display text-[0.62rem] uppercase leading-relaxed tracking-[0.2em] text-gold/80 sm:text-xs sm:tracking-arcane"
        >
          {SITE.academy}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 font-wordmark text-[2.5rem] font-bold leading-[1.05] tracking-[0.12em] drop-shadow-[0_0_20px_rgba(207,6,86,0.4)] sm:mt-6 sm:text-7xl sm:tracking-[0.2em] md:text-8xl"
        >
          <span className="text-aurum">TENEBRIS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mx-auto mt-6 max-w-xl font-mono text-base uppercase tracking-[0.18em] text-[var(--aether)] neon-teal sm:text-lg"
        >
          {SITE.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted"
        >
          Centro arcanista de estudio y desarrollo del lenguaje de la luz.
          Difusión e instrucción de la plataforma divina y el dominio espiritual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#disciplinas"
            className="rounded-md bg-gradient-to-r from-gold-dim via-gold to-gold-bright px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-void shadow-[0_0_22px_-4px_rgba(230,185,79,0.55)] transition hover:brightness-110"
          >
            Iniciar el sendero
          </a>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[var(--fuchsia)] px-8 py-3 text-xs uppercase tracking-[0.24em] text-parchment/90 shadow-[0_0_18px_-6px_rgba(207,6,86,0.6)] transition hover:bg-[rgba(207,6,86,0.12)] hover:text-[var(--fuchsia-neon)]"
          >
            Sesiones por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-[0.6rem] uppercase tracking-[0.3em]">Descender</span>
          <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
