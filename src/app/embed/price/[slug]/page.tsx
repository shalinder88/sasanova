import { notFound } from "next/navigation";
import { tools, getToolBySlug } from "@/data/tools";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export default async function PriceEmbedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const paidPlans = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  const cheapest = paidPlans.length > 0
    ? paidPlans.sort((a, b) => (a.priceMonthly ?? 0) - (b.priceMonthly ?? 0))[0]
    : null;

  const verified = new Date(tool.lastVerified);
  const verifiedStr = verified.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const billingLabel = cheapest
    ? cheapest.billingModel === "per_seat" ? "/seat/mo" : "/mo"
    : null;

  return (
    <div className="w-full max-w-[400px] mx-auto p-3">
      <a
        href={`https://sasanova.com/pricing/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg border border-border bg-surface hover:border-accent transition-colors no-underline"
      >
        <div className="px-3 py-2.5 flex items-center gap-2.5">
          {/* Icon */}
          <div className="w-8 h-8 rounded-md bg-accent-light flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-foreground truncate">
              {tool.name}
              {cheapest
                ? <span className="text-accent ml-1.5">${cheapest.priceMonthly}{billingLabel}</span>
                : tool.freeTier
                  ? <span className="text-success ml-1.5">Free plan available</span>
                  : <span className="text-muted ml-1.5">Custom pricing</span>
              }
            </div>
            <div className="text-[11px] text-muted mt-0.5 flex items-center gap-2">
              {tool.freeTier && <span className="text-success">Free tier</span>}
              <span>Last verified {verifiedStr}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 py-1.5 border-t border-border text-[10px] text-muted flex items-center justify-between">
          <span>Powered by Sasanova</span>
          <span className="text-accent">Full pricing &rarr;</span>
        </div>
      </a>
    </div>
  );
}
