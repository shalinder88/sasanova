import { notFound } from "next/navigation";
import {
  tools,
  versusPairs,
  getToolBySlug,
  getOverallScore,
  type Tool,
} from "@/data/tools";

function parseSlugs(pair: string): [string, string] | null {
  const idx = pair.indexOf("-vs-");
  if (idx === -1) return null;
  return [pair.slice(0, idx), pair.slice(idx + 4)];
}

function getCheapestPrice(tool: Tool): number | null {
  const paid = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  if (paid.length === 0) return null;
  return paid.sort((a, b) => (a.priceMonthly ?? 0) - (b.priceMonthly ?? 0))[0].priceMonthly;
}

function getBillingLabel(tool: Tool): string {
  const paid = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  if (paid.length === 0) return "/mo";
  const cheapest = paid.sort((a, b) => (a.priceMonthly ?? 0) - (b.priceMonthly ?? 0))[0];
  return cheapest.billingModel === "per_seat" ? "/seat/mo" : "/mo";
}

export function generateStaticParams() {
  return versusPairs.map((vs) => ({
    pair: `${vs.slugA}-vs-${vs.slugB}`,
  }));
}

function ToolColumn({ tool, score }: { tool: Tool; score: number }) {
  const price = getCheapestPrice(tool);
  const billingLabel = getBillingLabel(tool);

  return (
    <div className="flex-1 min-w-0 text-center">
      <div className="text-sm font-semibold text-foreground truncate">{tool.name}</div>
      <div className="text-accent text-sm font-medium mt-0.5">
        {price !== null ? `$${price}${billingLabel}` : tool.freeTier ? "Free" : "Custom"}
      </div>
      <div className="mt-1 text-[11px] text-muted">Score: {score}/10</div>
    </div>
  );
}

export default async function CompareEmbedPage({
  params,
}: {
  params: Promise<{ pair: string }>;
}) {
  const { pair } = await params;
  const slugs = parseSlugs(pair);
  if (!slugs) notFound();

  const [slugA, slugB] = slugs;
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) notFound();

  const scoreA = getOverallScore(toolA.scores);
  const scoreB = getOverallScore(toolB.scores);

  return (
    <div className="w-full max-w-[500px] mx-auto p-3">
      <a
        href={`https://sasanova.com/compare/${pair}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg border border-border bg-surface hover:border-accent transition-colors no-underline"
      >
        <div className="px-4 py-3 flex items-center gap-3">
          <ToolColumn tool={toolA} score={scoreA} />

          {/* VS divider */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-surface-alt border border-border flex items-center justify-center text-[11px] font-bold text-muted">
              VS
            </div>
          </div>

          <ToolColumn tool={toolB} score={scoreB} />
        </div>

        {/* Footer */}
        <div className="px-3 py-1.5 border-t border-border text-[10px] text-muted flex items-center justify-between">
          <span>Powered by Sasanova</span>
          <span className="text-accent">Full comparison &rarr;</span>
        </div>
      </a>
    </div>
  );
}
