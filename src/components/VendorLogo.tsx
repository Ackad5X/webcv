import zscaler from "@/assets/zscaler.png.asset.json";
import netskope from "@/assets/netskope.png.asset.json";
import forcepoint from "@/assets/forcepoint.png.asset.json";
import paloalto from "@/assets/palo-alto-networks.png.asset.json";

const logos: Record<string, string> = {
  "zscaler.com": zscaler.url,
  "netskope.com": netskope.url,
  "forcepoint.com": forcepoint.url,
  "paloaltonetworks.com": paloalto.url,
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
