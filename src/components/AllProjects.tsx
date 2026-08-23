import { useLanguage } from "@/lib/language";
import { engagements, ui } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function AllProjects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading index="02" title={t(ui.sections.all)} note={t(ui.sections.allNote)} />

        <div className="mt-10 hidden grid-cols-[1.2fr_0.5fr_2fr] gap-6 border-b border-border pb-3 md:grid">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t(ui.labels.sector)}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t(ui.labels.duration)}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t(ui.labels.stack)}
          </span>
        </div>

        <ul className="divide-y divide-border border-b border-border md:border-b-0">
          {engagements.map((item, i) => (
            <li
              key={i}
              className="grid gap-3 py-5 md:grid-cols-[1.2fr_0.5fr_2fr] md:items-center md:gap-6"
            >
              <span className="text-sm text-foreground">{t(item.sector)}</span>
              <span className="font-mono text-xs text-muted-foreground">{t(item.duration)}</span>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((tag) => (
                  <span
                    key={tag}
                    className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
