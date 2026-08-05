import { LINKS } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

export default function Cursos() {
  return (
    <section id="cursos" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xs uppercase tracking-arcane text-[var(--aether)]">
          Los Cursos
        </p>
        <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">
          Formación en el <span className="text-aurum">Arcanismo</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted">
          Programas de estudio para recorrer los senderos de forma estructurada,
          a tu ritmo y con acompañamiento.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="card-arcane mx-auto mt-14 flex max-w-3xl flex-col items-center rounded-2xl px-8 py-14 text-center">
          <a
            href={`${LINKS.whatsapp}?text=${encodeURIComponent(
              "Hola, quiero información sobre los cursos de Tenebris."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hud btn-cyan inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Consultar
          </a>
        </div>
      </Reveal>
    </section>
  );
}
