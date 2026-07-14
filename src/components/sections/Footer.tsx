import { LINKS, SITE } from "@/lib/site";
import {
  InstagramIcon,
  PatreonIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon,
} from "@/components/ui/icons";

const SOCIALS = [
  { label: "Instagram", href: LINKS.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: LINKS.tiktok, Icon: TikTokIcon },
  { label: "YouTube", href: LINKS.youtube, Icon: YouTubeIcon },
  { label: "Patreon", href: LINKS.patreon, Icon: PatreonIcon },
  { label: "WhatsApp", href: LINKS.whatsapp, Icon: WhatsAppIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-void-2/70 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <a href="#top" className="flex items-center gap-3">
            <span className="text-gold">✦</span>
            <span className="font-display text-lg tracking-arcane text-parchment">
              TENEBRIS
            </span>
          </a>

          <div className="rune-line w-40" />

          <nav className="flex flex-wrap items-center justify-center gap-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-muted transition hover:border-gold hover:text-gold-bright"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </nav>

          <p className="max-w-md text-xs leading-relaxed text-muted">
            {SITE.academy}. Difusión e instrucción del lenguaje de la luz por{" "}
            {SITE.creator}.
          </p>

          <p className="text-[0.7rem] tracking-[0.2em] text-muted/60">
            © {new Date().getFullYear()} TENEBRIS · {SITE.creator}
          </p>
        </div>
      </div>
    </footer>
  );
}
