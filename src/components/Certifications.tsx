import { useLanguage } from "@/lib/language";
import { ui, vendors } from "@/content/site";
import { certifications } from "@/content/certifications";
import { certBadges } from "@/content/certBadges";
import { SectionHeading } from "@/components/SectionHeading";
import { VendorLogo } from "@/components/VendorLogo";

function formatDate(value: string, lang: string) {
  return new Date(value).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
    month: "short",
    year: "numeric",
  });
}

export function Certifications() {
  const { t, lang } = useLanguage();

  return (
    <section id="certifications" className="border-b border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading index="03" title={t(ui.sections.certs)} note={t(ui.sections.certsNote)} />

        <div className="mt-10 space-y-12">
          {vendors.map((vendor) => {
            const items = certifications.filter((c) => c.issuer === vendor.name);
            if (items.length === 0) return null;
            return (
              <div key={vendor.domain}>
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <VendorLogo name={vendor.name} domain={vendor.domain} />
                  <h3 className="text-base font-medium tracking-tight text-foreground md:text-lg">
                    {vendor.name}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {items.length}
                  </span>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((cert) => (
                    <li
                      key={cert.title}
                      className="flex h-full flex-col justify-between border border-border bg-card p-5 transition-colors hover:border-primary/50"
                    >
                      <div className="flex items-start gap-4">
                        {certBadges[cert.title] ? (
                          <img
                            src={certBadges[cert.title]}
                            alt={`${cert.title} badge`}
                            loading="lazy"
                            className="h-20 w-20 shrink-0 object-contain"
                          />
                        ) : null}
                        <p className="text-sm leading-snug text-foreground">{cert.title}</p>
                      </div>
                      <p className="mt-4 font-mono text-[11px] text-muted-foreground">
                        {t(ui.labels.issued)} {formatDate(cert.issueDate, lang)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
