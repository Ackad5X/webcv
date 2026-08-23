import { useLanguage } from "@/lib/language";
import { profile, vendors } from "@/content/site";
import { VendorLogo } from "@/components/VendorLogo";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-12 pt-20 text-center md:pb-14 md:pt-28">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
          Security Architecture · SSE / SASE / Zero Trust
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-3xl text-base text-accent md:text-lg">{t(profile.headline)}</p>
        <p className="mt-6 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
          {t(profile.summary)}
        </p>
        <p className="mt-6 font-mono text-xs tracking-[0.08em] text-muted-foreground">
          {t(profile.meta)}
        </p>

        <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-5 border-t border-border pt-8">
          {vendors.map((vendor) => (
            <VendorLogo key={vendor.domain} name={vendor.name} domain={vendor.domain} />
          ))}
        </div>
      </div>
    </section>
  );
}
