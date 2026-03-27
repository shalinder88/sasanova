import Link from "next/link";

export default function AffiliateCTA({
  toolName,
  toolSlug,
  affiliateUrl,
  hasFreeTier,
  provenance,
}: {
  toolName: string;
  /** The canonical tool slug from the data layer — used for the /pricing/ link */
  toolSlug: string;
  affiliateUrl: string;
  hasFreeTier: boolean;
  provenance: string;
}) {
  const label = hasFreeTier ? `Try ${toolName}` : `Visit ${toolName}`;

  return (
    <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
        >
          {label}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>

        <Link
          href={`/pricing/${toolSlug}`}
          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold border border-border rounded-lg text-foreground hover:bg-surface-alt transition-colors"
        >
          View pricing
        </Link>
      </div>

      {provenance === "independently_verified" && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-success">
          <span
            className="shrink-0 w-2 h-2 rounded-full bg-success"
            aria-hidden="true"
          />
          Independently verified review
        </p>
      )}

      <p className="text-[11px] leading-relaxed text-muted">
        Sasanova may earn a commission if you sign up through our links. This
        does not affect our ratings or rankings. See our{" "}
        <Link
          href="/disclosure"
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          disclosure
        </Link>
        .
      </p>
    </div>
  );
}
