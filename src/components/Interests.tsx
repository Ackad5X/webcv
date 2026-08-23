import {
  BookOpen,
  Circle,
  Cloud,
  Crosshair,
  FileLock2,
  GitBranch,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  Waypoints,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/language";
import { ui, interests } from "@/content/site";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Cloud,
  Crosshair,
  FileLock2,
  GitBranch,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  Waypoints,
  Workflow,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Circle;
  return <Cmp className={className} strokeWidth={1.6} />;
}

export function Interests() {
  const { t } = useLanguage();

  const groups = [
    {
      key: "technical",
      title: ui.labels.interestsTechnical,
      items: interests.filter((i) => i.category === "technical"),
    },
    {
      key: "personal",
      title: ui.labels.interestsPersonal,
      items: interests.filter((i) => i.category === "personal"),
    },
  ];

  return (
    <section id="interests" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 section-padding">
        <SectionHeading index="05" title={t(ui.sections.interests)} />

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                {t(group.title)}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item.label.en}
                    className="flex items-center gap-2 border border-border bg-card px-3 py-2 font-mono text-xs text-foreground"
                  >
                    <Icon name={item.icon} className="h-4 w-4 text-primary" />
                    {t(item.label)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
