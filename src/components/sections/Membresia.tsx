import { LINKS } from "@/lib/site";
import { PatreonIcon } from "@/components/ui/icons";
import Reveal from "@/components/ui/Reveal";

const BENEFITS = [
  "Acceso exclusivo al estudio del lenguaje de la luz",
  "Prácticas guiadas de registros akáshicos",
  "Material de integración ancestral",
  "Comunidad privada del Sanctum",
];

export default function Membresia() {
  return (
    <section id="membresia" className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <Reveal>
        <div className="glow-ring relative overflow-hidden rounded-3xl border border-[var(--line)] bg-gradient-to-br from-violet-deep/40 via-void-2 to-void p-10 sm:p-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-display text-xs uppercase tracking-arcane text-gold/70">
                Membresía
              </p>
              <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
                Tenebris : <span className="text-aurum">Sanctum</span>
              </h2>
              <p className="mt-5 max-w-md font-serif text-lg leading-relaxed text-parchment/80">
                Cruza el umbral y sostén la difusión de la academia. La membresía
                abre el acceso continuo a la instrucción arcanista y a un círculo
                que camina contigo.
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-4xl text-gold-bright">$25</span>
                <span className="text-sm text-muted">/ mes · USD</span>
              </div>

              <a
                href={LINKS.patreon}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-bright px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-void transition hover:brightness-110"
              >
                <PatreonIcon className="h-4 w-4" />
                Unirme en Patreon
              </a>
            </div>

            <ul className="space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-parchment/85">
                  <span className="mt-0.5 text-gold">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
