import Reveal from "@/components/ui/Reveal";

export default function Academia() {
  return (
    <section id="academia" className="relative mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <Reveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--aether)]">
          La Academia
        </p>
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          Una academia para quienes
          <br />
          recuerdan la <span className="text-aurum">luz</span> en la oscuridad
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mx-auto mt-12 max-w-2xl space-y-6 text-center font-serif text-lg leading-relaxed text-parchment/80">
          <p>
            Tenebris es una academia arcanista arcturiana dedicada a la difusión
            y la instrucción. Aquí la tiniebla no es ausencia: es el vacío fértil
            donde aprende a pronunciarse el lenguaje de la luz.
          </p>
          <p>
            Bajo la enseñanza de{" "}
            <span className="text-gold-bright">Weylarrael</span>, estudiamos y
            desarrollamos la plataforma divina y el dominio espiritual a través de
            prácticas vivas, herramientas místicas y un camino de sensibilidad
            que cada alma recorre a su propio ritmo.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rune-line" />
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
            {[
              { k: "∞", v: "Difusión", d: "Conocimiento abierto y comunitario" },
              { k: "✶", v: "Instrucción", d: "Acompañamiento uno a uno" },
              { k: "✦", v: "Sensibilidad", d: "El don que se cultiva, no se hereda" },
            ].map((item) => (
              <div key={item.v} className="bg-void-2 px-6 py-8 text-center">
                <div className="text-2xl text-gold">{item.k}</div>
                <div className="mt-3 font-display text-sm uppercase tracking-[0.2em] text-parchment">
                  {item.v}
                </div>
                <div className="mt-2 text-xs text-muted">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
