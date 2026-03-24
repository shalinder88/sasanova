const provenanceConfig = {
  independently_verified: {
    dotColor: "bg-success",
    label: "Independently verified",
    title: "This data was independently verified by the Sasanova editorial team using primary sources.",
  },
  vendor_claimed: {
    dotColor: "bg-warning",
    label: "Vendor-claimed",
    title: "This data was provided by the vendor and has not been independently verified.",
  },
  community_reported: {
    dotColor: "bg-cyan",
    label: "Community-reported",
    title: "This data was reported by the community and may not reflect official information.",
  },
} as const;

function relativeTime(dateStr: string): string {
  const now = new Date();
  const then = new Date(dateStr);
  const diffMs = now.getTime() - then.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return "Verified today";
  if (diffDays === 1) return "Verified 1 day ago";
  if (diffDays < 7) return `Verified ${diffDays} days ago`;
  if (diffDays < 14) return "Verified 1 week ago";
  if (diffDays < 30) return `Verified ${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return "Verified 1 month ago";
  if (diffDays < 365) return `Verified ${Math.floor(diffDays / 30)} months ago`;
  return `Verified ${Math.floor(diffDays / 365)}y ago`;
}

export default function ProvenanceBadge({
  provenance,
  lastVerifiedAt,
  size = "md",
}: {
  provenance: "independently_verified" | "vendor_claimed" | "community_reported";
  lastVerifiedAt: string;
  size?: "sm" | "md";
}) {
  const config = provenanceConfig[provenance];
  const isSmall = size === "sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${isSmall ? "text-[11px]" : "text-xs"} text-muted`}
      title={config.title}
    >
      <span
        className={`shrink-0 rounded-full ${config.dotColor} ${isSmall ? "w-1.5 h-1.5" : "w-2 h-2"}`}
        aria-hidden="true"
      />
      <span className="font-medium">{config.label}</span>
      <span className="text-muted/70">&middot;</span>
      <span>{relativeTime(lastVerifiedAt)}</span>
    </span>
  );
}
