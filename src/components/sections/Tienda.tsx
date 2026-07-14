"use client";

import { motion } from "framer-motion";
import { LINKS, SHOP } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

export default function Tienda() {
  return (
    <section id="tienda" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-arcane text-gold/70">
          La Tienda
        </p>
        <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">
          Ofrendas del <span className="text-aurum">Arcano</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted">
          Sesiones, iniciaciones y herramientas místicas para acompañar tu
          práctica. Consultá disponibilidad y valores por WhatsApp.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SHOP.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-void/60 p-6 transition-colors duration-500 hover:border-gold/40"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet/20 blur-3xl transition-colors duration-500 group-hover:bg-gold/20" />

            <div className="relative flex items-center justify-between">
              <span className="font-display text-3xl text-gold transition-transform duration-500 group-hover:scale-110">
                {item.glyph}
              </span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                {item.tag}
              </span>
            </div>

            <h3 className="relative mt-5 font-display text-base leading-snug tracking-wide text-parchment">
              {item.title}
            </h3>
            <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
              {item.desc}
            </p>

            <div className="relative mt-6 flex items-center justify-between">
              <span className="font-serif text-lg text-gold-bright">{item.price}</span>
              <a
                href={`${LINKS.whatsapp}?text=${encodeURIComponent(
                  `Hola, quiero consultar por: ${item.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar por ${item.title} en WhatsApp`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-gold-bright transition hover:border-gold hover:bg-gold/10"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Consultar
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-12 text-center text-xs text-muted/70">
          Catálogo en construcción — pronto con más herramientas y compra directa.
        </p>
      </Reveal>
    </section>
  );
}
