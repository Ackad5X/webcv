import { useLanguage } from "@/lib/language";
import { profile, ui } from "@/content/site";

const links = [
  { href: "#project-experience", label: ui.nav.work },
  { href: "#projects", label: ui.nav.all },
  { href: "#certifications", label: ui.nav.certs },
  { href: "#interests", label: ui.nav.interests },
  { href: "#contact", label: ui.nav.contact },
];

export function SiteNav() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="font-mono text-sm tracking-tight text-foreground">
          <span className="text-primary">/</span> {profile.name}
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 rounded-sm border border-border p-0.5">
          {(["en", "es"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                lang === code
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
