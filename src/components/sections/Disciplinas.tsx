"use client";

import { motion } from "framer-motion";
import { DISCIPLINAS } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function Disciplinas() {
  return (
    <section
      id="disciplinas"
      className="relative border-y border-[var(--line)] bg-[rgba(4,4,8,0.45)] py-28 backdrop-blur-[2px] sm:py-36"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs uppercase tracking-arcane text-[var(--aether)]">
            Las Disciplinas
          </p>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">
            Senderos del <span className="text-aurum">Arcanismo</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted">
            Cada disciplina es una puerta. Se estudian por separado y se integran
            en una sola práctica: la del despertar consciente.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINAS.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-arcane group relative overflow-hidden rounded-2xl p-7"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/20 blur-3xl transition-opacity duration-500 group-hover:bg-gold/20" />
              <div className="relative">
                <span className="font-display text-3xl text-gold transition-transform duration-500 group-hover:scale-110">
                  {d.glyph}
                </span>
                <h3 className="mt-5 font-display text-lg tracking-wide text-parchment">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{d.desc}</p>
              </div>
              <span className="absolute bottom-5 right-6 font-display text-xs text-gold-dim opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
