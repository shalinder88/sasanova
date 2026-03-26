import { notFound } from "next/navigation";
import {
  tools,
  categories,
  getToolsByCategory,
  getCategoryBySlug,
  type Tool,
} from "@/data/tools";

function getCheapestPaidTool(categorySlug: string): Tool | null {
  const categoryTools = getToolsByCategory(categorySlug);
  let cheapest: Tool | null = null;
  let cheapestPrice = Infinity;

  for (const tool of categoryTools) {
    for (const plan of tool.pricing) {
      if (plan.priceMonthly !== null && plan.priceMonthly > 0 && plan.priceMonthly < cheapestPrice) {
        cheapestPrice = plan.priceMonthly;
        cheapest = tool;
      }
    }
  }

  return cheapest;
}

function getCheapestPrice(tool: Tool): { price: number; planName: string; billingModel: string } | null {
  let cheapest: { price: number; planName: string; billingModel: string } | null = null;

  for (const plan of tool.pricing) {
    if (plan.priceMonthly !== null && plan.priceMonthly > 0) {
      if (!cheapest || plan.priceMonthly < cheapest.price) {
        cheapest = { price: plan.priceMonthly, planName: plan.name, billingModel: plan.billingModel };
      }
    }
  }

  return cheapest;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export default async function CheapestEmbedPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const tool = getCheapestPaidTool(category);
  if (!tool) notFound();

  const price = getCheapestPrice(tool);
  if (!price) notFound();

  const billingLabel = price.billingModel === "per_seat" ? "/seat/mo" : "/mo";
  const verified = new Date(tool.lastVerified);
  const verifiedStr = verified.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  return (
    <div className="w-full max-w-[400px] mx-auto p-3">
      <a
        href={`https://sasanova.com/best/${category}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg border border-border bg-surface hover:border-accent transition-colors no-underline"
      >
        <div className="px-3 py-2.5 flex items-center gap-2.5">
          {/* Icon */}
          <div className="w-8 h-8 rounded-md bg-accent-light flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-muted font-medium mb-0.5">
              Cheapest {cat.name}
            </div>
            <div className="text-sm font-semibold text-foreground truncate">
              {tool.name} {price.planName} — ${price.price}{billingLabel}
            </div>
          </div>

          {/* Badge */}
          <div className="shrink-0 text-[10px] text-muted bg-surface-alt px-1.5 py-0.5 rounded">
            {verifiedStr}
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 py-1.5 border-t border-border text-[10px] text-muted flex items-center justify-between">
          <span>Verified by Sasanova</span>
          <span className="text-accent">View all &rarr;</span>
        </div>
      </a>
    </div>
  );
}
