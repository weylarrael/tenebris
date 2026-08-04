import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Academia from "@/components/sections/Academia";
import Senderos from "@/components/sections/Senderos";
import Tienda from "@/components/sections/Tienda";
import Cursos from "@/components/sections/Cursos";
import Sesiones from "@/components/sections/Sesiones";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Opaque, legible backdrop over the constellations for the rest of the page */}
        <div className="relative bg-void-2/70">
          <Academia />
          <Senderos />
          <Tienda />
          <Cursos />
          <Sesiones />
        </div>
      </main>
      <Footer />
    </>
  );
}
