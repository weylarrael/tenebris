import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Sanctum from "@/components/sections/Sanctum";
import Disciplinas from "@/components/sections/Disciplinas";
import Membresia from "@/components/sections/Membresia";
import Sesiones from "@/components/sections/Sesiones";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sanctum />
        <Disciplinas />
        <Membresia />
        <Sesiones />
      </main>
      <Footer />
    </>
  );
}
