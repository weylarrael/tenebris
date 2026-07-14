import { LINKS, SITE } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

export default function Sesiones() {
  return (
    <section
      id="sesiones"
      className="relative overflow-hidden border-t border-[var(--line)] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(90,71,176,0.18),transparent_60%)]" />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="font-display text-xs uppercase tracking-arcane text-gold/70">
          Sesiones
        </p>
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          El umbral está <span className="text-aurum">abierto</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg font-serif text-lg leading-relaxed text-parchment/80">
          Las sesiones personales se coordinan por WhatsApp. Escribe, cuenta dónde
          estás en tu sendero y comenzamos a trabajar juntos.
        </p>

        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-bright px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-void transition hover:brightness-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Reservar mi sesión
        </a>

        <p className="mt-6 text-sm tracking-[0.18em] text-muted">
          {SITE.whatsappNumber}
        </p>
      </Reveal>
    </section>
  );
}
