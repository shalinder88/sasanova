import Link from "next/link";

interface ToolInfo {
  name: string;
  slug: string;
  affiliateUrl: string;
}

export default function ComparisonCTA({
  toolA,
  toolB,
}: {
  toolA: ToolInfo;
  toolB: ToolInfo;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tool A */}
        <div className="flex flex-col items-center gap-2.5 text-center">
          <p className="text-sm font-bold text-foreground">{toolA.name}</p>
          <a
            href={toolA.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
          >
            Try {toolA.name}
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
            href={`/pricing/${toolA.slug}`}
            className="text-xs text-muted hover:text-foreground underline underline-offset-2 transition-colors"
          >
            View {toolA.name} pricing
          </Link>
        </div>

        {/* Tool B */}
        <div className="flex flex-col items-center gap-2.5 text-center">
          <p className="text-sm font-bold text-foreground">{toolB.name}</p>
          <a
            href={toolB.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
          >
            Try {toolB.name}
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
            href={`/pricing/${toolB.slug}`}
            className="text-xs text-muted hover:text-foreground underline underline-offset-2 transition-colors"
          >
            View {toolB.name} pricing
          </Link>
        </div>
      </div>

      <p className="text-[11px] leading-relaxed text-muted text-center">
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
