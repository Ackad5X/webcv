import { useMemo, useState } from "react";
import {
  BookOpen,
  Circle,
  Cloud,
  Coffee,
  Cpu,
  Crosshair,
  FileLock2,
  Fingerprint,
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
  Coffee,
  Cpu,
  Crosshair,
  FileLock2,
  Fingerprint,
  GitBranch,
  KeyRound,
  Network,
  Server,
  ShieldCheck,
  Waypoints,
  Workflow,
};

type GraphNode = {
  id: string;
  label: string;
  icon: string;
  x: number;
  y: number;
  hub?: boolean;
  parent?: string;
};

function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = iconMap[name] ?? Circle;
  return <Cmp className={className} strokeWidth={1.6} />;
}

/** Distribute `count` points along an elliptical arc (angles in degrees). */
function arc(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  from: number,
  to: number,
  count: number,
) {
  return Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const a = ((from + (to - from) * t) * Math.PI) / 180;
    return { x: cx + rx * Math.cos(a), y: cy + ry * Math.sin(a) };
  });
}

const VIEW_W = 1000;
const VIEW_H = 620;

export function Interests() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<string | null>(null);

  const { nodes, edges } = useMemo(() => {
    const technical = interests.filter((i) => i.category === "technical");
    const personal = interests.filter((i) => i.category === "personal");

    const root = { x: VIEW_W / 2, y: VIEW_H / 2 };
    const techHub = { x: 300, y: VIEW_H / 2 };
    const persHub = { x: 700, y: VIEW_H / 2 };

    // Wide arcs and generous radii to keep labels from overlapping.
    const techLeaves = arc(techHub.x, techHub.y, 205, 210, 90, 270, technical.length);
    const persLeaves = arc(persHub.x, persHub.y, 160, 150, -75, 75, personal.length);

    const allNodes: GraphNode[] = [
      {
        id: "root",
        label: t(ui.sections.interests),
        icon: "Fingerprint",
        ...root,
        hub: true,
      },
      {
        id: "tech",
        label: lang === "es" ? "Técnicos" : "Technical",
        icon: "Cpu",
        ...techHub,
        hub: true,
        parent: "root",
      },
      {
        id: "pers",
        label: lang === "es" ? "Personales" : "Personal",
        icon: "Coffee",
        ...persHub,
        hub: true,
        parent: "root",
      },
      ...technical.map((item, i) => ({
        id: `t-${i}`,
        label: t(item.label),
        icon: item.icon,
        ...techLeaves[i]!,
        parent: "tech",
      })),
      ...personal.map((item, i) => ({
        id: `p-${i}`,
        label: t(item.label),
        icon: item.icon,
        ...persLeaves[i]!,
        parent: "pers",
      })),
    ];

    const byId = Object.fromEntries(allNodes.map((n) => [n.id, n]));
    const edgeList = allNodes
      .filter((n) => n.parent)
      .map((n) => ({ from: byId[n.parent!]!, to: n }));

    return { nodes: allNodes, edges: edgeList };
  }, [t, lang]);

  const isDim = (id: string, parent?: string) => {
    if (active === null) return false;
    if (active === id) return false;
    if (active === parent) return false;
    const activeParent = nodes.find((n) => n.id === active)?.parent;
    if (activeParent === id) return false;
    return true;
  };

  const labelPlacement = (node: GraphNode): { v: "top" | "bottom" | "center"; h?: "left" | "right" } => {
    if (node.hub) return { v: "bottom" };
    const parent = nodes.find((n) => n.id === node.parent)!;
    const dy = node.y - parent.y;
    const dx = node.x - parent.x;
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (angle < 0) angle += 360;

    // Left cluster (technical): keep only the topmost label above and align the rest
    // to the left, vertically centered with each node.
    if (angle >= 90 && angle <= 270) {
      if (angle <= 110) return { v: "top" };
      return { v: "center", h: "left" };
    }

    // Right cluster (personal): always place labels to the right, vertically centered
    // with their node, so they read as a clean list and never overlap.
    return { v: "center", h: "right" };
  };

  return (
    <section id="interests" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          index="04"
          title={t(ui.sections.interests)}
          note={t(ui.sections.interestsNote)}
        />

        {/* Graph — desktop */}
        <div className="relative mt-10 hidden h-[620px] w-full overflow-visible md:block">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            {edges.map((e, i) => {
              const dim = isDim(e.to.id, e.to.parent);
              return (
                <line
                  key={i}
                  x1={`${(e.from.x / VIEW_W) * 100}%`}
                  y1={`${(e.from.y / VIEW_H) * 100}%`}
                  x2={`${(e.to.x / VIEW_W) * 100}%`}
                  y2={`${(e.to.y / VIEW_H) * 100}%`}
                  className={
                    dim
                      ? "stroke-border/40 transition-all duration-300"
                      : "stroke-primary/40 transition-all duration-300"
                  }
                  strokeWidth={e.to.hub ? 1.6 : 1.2}
                  strokeLinecap="round"
                />
              );
            })}
          </svg>

          {nodes.map((n) => {
            const dim = isDim(n.id, n.parent);
            const placement = labelPlacement(n);
            return (
              <div
                key={n.id}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                className={`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center transition-opacity duration-300 ${
                  dim ? "opacity-35" : "opacity-100"
                }`}
                style={{
                  left: `${(n.x / VIEW_W) * 100}%`,
                  top: `${(n.y / VIEW_H) * 100}%`,
                  width: "160px",
                  height: "120px",
                }}
              >
                <div className="relative flex h-full w-full items-center justify-center">
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center rounded-full border ring-4 ring-background transition-all duration-300 ${
                      n.hub
                        ? "h-14 w-14 border-primary/60 bg-primary/15 text-primary"
                        : "h-10 w-10 border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-primary"
                    } ${active === n.id ? "scale-110 border-primary text-primary shadow-[0_0_0_4px] shadow-primary/10" : ""}`}
                  >
                    <Icon name={n.icon} className={n.hub ? "h-6 w-6" : "h-[18px] w-[18px]"} />
                  </div>

                  {/* Label */}
                  <span
                    className={`absolute max-w-[120px] font-mono text-[10px] leading-tight tracking-tight ${
                      n.hub
                        ? "bottom-0 text-center uppercase tracking-[0.14em] text-foreground"
                        : "text-muted-foreground"
                    } ${
                      placement.v === "top"
                        ? "bottom-[calc(50%+10px)] left-1/2 -translate-x-1/2 text-center"
                        : placement.v === "bottom"
                          ? "top-[calc(50%+10px)] left-1/2 -translate-x-1/2 text-center"
                          : placement.h === "left"
                            ? "right-[calc(50%+14px)] top-1/2 -translate-y-1/2 text-right"
                            : "left-[calc(50%+14px)] top-1/2 -translate-y-1/2 text-left"
                    }`}
                  >
                    {n.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fallback — mobile */}
        <div className="mt-8 flex flex-wrap gap-3 md:hidden">
          {interests.map((item) => (
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
    </section>
  );
}
