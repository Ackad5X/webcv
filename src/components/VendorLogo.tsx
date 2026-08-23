import zscaler from "@/assets/zscaler.png";
import netskope from "@/assets/netskope.png";
import forcepoint from "@/assets/forcepoint.png";
import paloalto from "@/assets/palo-alto-networks.png";

const logos: Record<string, string> = {
  "zscaler.com": zscaler,
  "netskope.com": netskope,
  "forcepoint.com": forcepoint,
  "paloaltonetworks.com": paloalto,
};

type Props = {
  name: string;
  domain: string;
  size?: number;
  className?: string;
};

/**
 * Vendor mark. Uses the bundled logo when available,
 * otherwise falls back to a monospace wordmark so the layout never breaks.
 */
export function VendorLogo({ name, domain, size = 32, className }: Props) {
  const src = logos[domain];

  if (!src) {
    return (
      <span
        className={`font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground ${className ?? ""}`}
      >
        {name}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      width={size}
      height={size}
      loading="lazy"
      className={`h-8 w-8 object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 ${className ?? ""}`}
    />
  );
}
