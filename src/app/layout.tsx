import type { Metadata } from "next";
import { Orbitron, Chakra_Petch, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import StarfieldBackground from "@/components/three/StarfieldBackground";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const techMono = Share_Tech_Mono({
  variable: "--font-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://tenebris.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tenebris — Academia Arcanista Arcturiana de Shangri-La",
    template: "%s · Tenebris",
  },
  description:
    "Centro arcanista de estudio y desarrollo del lenguaje de la luz. Registros akáshicos, integración ancestral, dominio espiritual y herramientas místicas. Difusión e instrucción por Weylarrael.",
  keywords: [
    "Tenebris",
    "Weylarrael",
    "arcanismo",
    "lenguaje de la luz",
    "registros akáshicos",
    "academia arcturiana",
    "esoterismo",
    "Shangri-La",
  ],
  openGraph: {
    title: "Tenebris — Academia Arcanista Arcturiana",
    description:
      "Donde la oscuridad se vuelve lenguaje de luz. Estudio y desarrollo de la plataforma divina y el dominio espiritual.",
    type: "website",
    locale: "es_AR",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${orbitron.variable} ${chakra.variable} ${techMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <StarfieldBackground />
        {children}
      </body>
    </html>
  );
}
