import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { caseStudies, engagements, engagementCount, sectorCount, ui } from "@/content/site";
import { certifications } from "@/content/certifications";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectExperience() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);

  const stats = [
    { key: "experience", value: t(ui.stats.experienceValue), label: ui.stats.experienceLabel },
    { key: "sectors", value: String(sectorCount), label: ui.stats.sectorsLabel },
    { key: "engagements", value: String(engagementCount), label: ui.stats.engagementsLabel },
    { key: "certs", value: String(certifications.length), label: ui.stats.certsLabel },
  ];

  return (
    <section id="project-experience" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 section-padding">
        <SectionHeading index="01" title={t(ui.sections.featured)} />

        <div className="mt-10 grid grid-cols-2 gap-6 border-b border-border pb-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.key}>
              <p className="font-mono text-2xl font-semibold text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {t(stat.label)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4">
          {caseStudies.map((study) => {
            const expanded = open === study.id;
            return (
              <article
                key={study.id}
                className={`border transition-colors ${
                  expanded ? "border-primary/50 bg-card" : "border-border bg-card/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : study.id)}
                  aria-expanded={expanded}
                  className="flex w-full flex-col gap-4 p-6 text-left md:flex-row md:items-center md:justify-between md:gap-8"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                      {t(ui.labels.sector)}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-foreground md:text-xl">
                      {t(study.sector)}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.stack.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {t(study.duration)}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                      {expanded ? t(ui.labels.close) : t(ui.labels.readCase)}
                    </span>
                  </div>
                </button>

                {expanded ? (
                  <div className="grid gap-8 border-t border-border px-6 py-8 md:grid-cols-2">
                    <Block label={t(ui.labels.context)}>{t(study.context)}</Block>
                    <Block label={t(ui.labels.challenge)}>{t(study.challenge)}</Block>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                        {t(ui.labels.approach)}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {study.approach.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 h-px w-3 shrink-0 bg-primary" />
                            {t(item)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Block label={t(ui.labels.outcome)}>{t(study.outcome)}</Block>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>

        <div className="mt-14">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            {t(ui.labels.moreEngagements)}
          </h3>

          <div className="mt-6 hidden grid-cols-[1.2fr_0.5fr_2fr] gap-6 border-b border-border pb-3 md:grid">
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
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
