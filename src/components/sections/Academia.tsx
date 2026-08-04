import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site";

export default function Academia() {
  return (
    <section id="academia" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal className="text-center">
        <p className="font-display text-xs uppercase tracking-arcane text-[var(--aether)]">
          La Academia
        </p>
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          Una academia destinada a la
          <br />
          <span className="text-aurum">experimentación</span> de la luz
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-center font-serif text-lg leading-relaxed text-white">
          <p>
            Para quien busca la verdad llega el momento de quitarse el miedo a la
            conexión directa con la luz. Pasar de las palabras a la sensibilidad
            es necesario para experimentar de primera mano lo que hay más allá.
          </p>
          <p>
            Toda visión, percepción, trauma, idea, rareza o bloqueo puede
            responderse con técnicas de canalización de la luz, pidiendo
            asesoramiento a energías que forman parte del ser. Generar consciencia
            sobre la propia energía promueve un mejor funcionamiento del cuerpo y
            el exilio de vergüenzas y mentiras que no son parte del alma.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-16">
          <div className="mx-auto mb-10 max-w-3xl rune-line" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { k: "∞", v: "Difusión", d: "Conocimiento abierto y comunitario para todo buscador." },
              { k: "✶", v: "Instrucción", d: "Acompañamiento uno a uno en cada tramo del sendero." },
              { k: "✦", v: "Experiencia", d: `+${SITE.experienceYears} años de experiencia en la disciplina.` },
            ].map((item) => (
              <div
                key={item.v}
                className="card-arcane group relative overflow-hidden rounded-2xl p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/20 blur-3xl transition-opacity duration-500 group-hover:bg-gold/20" />
                <div className="relative">
                  <span className="font-display text-3xl text-gold transition-transform duration-500 group-hover:scale-110">
                    {item.k}
                  </span>
                  <h3 className="mt-5 font-display text-lg tracking-wide text-parchment">
                    {item.v}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
