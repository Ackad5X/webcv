import { useLanguage } from "@/lib/language";
import { automations, ui } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Automation() {
  const { t } = useLanguage();

  return (
    <section id="automation" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 section-padding">
        <SectionHeading index="04" title={t(ui.sections.automation)} />

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          {t(ui.sections.automationNote)}
        </p>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {automations.map((item) => (
            <li
              key={item.title.en}
              className="w-full border border-border bg-card p-5 transition-colors hover:border-primary/50 sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
            >
              <h3 className="text-sm font-medium text-foreground">{t(item.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(item.description)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
