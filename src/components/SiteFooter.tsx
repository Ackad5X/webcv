import { useLanguage } from "@/lib/language";
import { profile, ui } from "@/content/site";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
            {t(ui.nav.contact)}
          </p>
          <p className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
            {profile.name}
          </p>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">{t(profile.headline)}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {profile.email}
          </a>
          <button
            type="button"
            className="bg-primary px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t(ui.labels.downloadCv)}
          </button>
        </div>
      </div>

      <p className="mt-14 border-t border-border pt-6 font-mono text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · {t(profile.location)}
      </p>
    </footer>
  );
}
