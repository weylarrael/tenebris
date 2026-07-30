"use client";

import { motion } from "framer-motion";
import { SENDEROS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Senderos() {
  return (
    <section
      id="senderos"
      className="relative border-y border-[var(--line)] bg-[rgba(4,4,8,0.5)] py-28 backdrop-blur-[2px] sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-arcane text-[var(--aether)]">
            Las Escuelas
          </p>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">
            Senderos del <span className="text-aurum">Arcanismo</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted">
            Cada color es un sendero: una escuela, una cualidad y sus técnicas.
            Se estudian por separado y se integran en una sola práctica.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SENDEROS.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-arcane group relative flex flex-col overflow-hidden rounded-2xl p-7"
            >
              {/* accent glow, tinted per path */}
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ backgroundColor: s.accent }}
              />

              <div className="relative flex items-center justify-between">
                <span
                  className="font-display text-3xl transition-transform duration-500 group-hover:scale-110"
                  style={{ color: s.accent, textShadow: `0 0 16px ${s.accent}80` }}
                >
                  {s.glyph}
                </span>
                <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                  {s.color}
                </span>
              </div>

              <h3 className="relative mt-5 font-wordmark text-xl font-bold uppercase tracking-wide">
                {s.iridescent ? (
                  <span className="text-iris">{s.name}</span>
                ) : (
                  <span style={{ color: s.accent }}>{s.name}</span>
                )}
              </h3>

              <p className="relative mt-3 text-sm leading-relaxed text-parchment/80">
                {s.desc}
              </p>

              <div className="relative mt-5 space-y-2 border-t border-[var(--line)] pt-4 text-xs text-muted">
                <p>
                  <span className="font-mono uppercase tracking-[0.15em] text-[var(--aether)]">
                    Escuela
                  </span>{" "}
                  · {s.escuela}
                </p>
                <p>
                  <span className="font-mono uppercase tracking-[0.15em] text-[var(--aether)]">
                    Cualidad
                  </span>{" "}
                  · {s.cualidad}
                </p>
                <p>
                  <span className="font-mono uppercase tracking-[0.15em] text-[var(--aether)]">
                    Técnicas
                  </span>{" "}
                  · {s.tecnicas}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
