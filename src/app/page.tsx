import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Academia from "@/components/sections/Academia";
import Disciplinas from "@/components/sections/Disciplinas";
import Tienda from "@/components/sections/Tienda";
import Sesiones from "@/components/sections/Sesiones";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Academia />
        <Disciplinas />
        <Tienda />
        <Sesiones />
      </main>
      <Footer />
    </>
  );
}
