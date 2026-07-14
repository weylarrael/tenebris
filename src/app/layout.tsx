import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter, Orbitron } from "next/font/google";
import "./globals.css";
import StarfieldBackground from "@/components/three/StarfieldBackground";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Wordmark-only: "TENEBRIS" keeps the cyberpunk Orbitron face.
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
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
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} ${orbitron.variable}`}
    >
      <body className="min-h-screen antialiased">
        <StarfieldBackground />
        {children}
      </body>
    </html>
  );
}
