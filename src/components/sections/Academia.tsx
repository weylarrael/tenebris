import Reveal from "@/components/ui/Reveal";

export default function Academia() {
  return (
    <section id="academia" className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal className="text-center">
        <p className="font-display text-xs uppercase tracking-arcane text-[var(--aether)]">
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
        <div className="mt-16">
          <div className="mx-auto mb-10 max-w-3xl rune-line" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { k: "∞", v: "Difusión", d: "Conocimiento abierto y comunitario para todo buscador." },
              { k: "✶", v: "Instrucción", d: "Acompañamiento uno a uno en cada tramo del sendero." },
              { k: "✦", v: "Sensibilidad", d: "El don que se cultiva, no se hereda: se despierta." },
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
