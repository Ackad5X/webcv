import { useLanguage } from "@/lib/language";
import { profile, vendors } from "@/content/site";
import { VendorLogo } from "@/components/VendorLogo";
import profilePhoto from "@/assets/Foto_Linkedin_no_bg.png";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-16 md:pb-14 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="text-center md:col-span-7 md:text-left">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
              Security Architecture · SSE / SASE / Zero Trust
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-base font-medium text-accent md:text-lg">
              {t(profile.headline)}
            </p>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
              {t(profile.summary)}
            </p>
          </div>

          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent p-2 shadow-lg max-w-[260px] sm:max-w-[280px] md:max-w-[320px]">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="h-auto w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground">
            {t(profile.meta)}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {vendors.map((vendor) => (
              <VendorLogo key={vendor.domain} name={vendor.name} domain={vendor.domain} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
