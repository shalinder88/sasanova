import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Software Pricing Comparison",
  description:
    "Compare pricing for top SaaS tools side by side. See free tiers, plan breakdowns, billing models, and hidden costs — all normalized and verified.",
};

function getCheapestPrice(tool: (typeof tools)[number]): string {
  const paid = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  if (paid.length === 0) return tool.freeTier ? "Free" : "Contact sales";
  const cheapest = Math.min(...paid.map((p) => p.priceMonthly as number));
  return `$${cheapest}/mo`;
}

function getBillingModels(tool: (typeof tools)[number]): string {
  const models = new Set(tool.pricing.map((p) => p.billingModel));
  const labels: Record<string, string> = {
    flat: "Flat rate",
    per_seat: "Per seat",
    usage: "Usage-based",
    custom: "Custom",
  };
  return [...models].map((m) => labels[m] || m).join(", ");
}

export default function PricingHub() {
  const sorted = [...tools].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Pricing</p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Software Pricing Comparison
          </h1>
          <p className="text-muted max-w-2xl">
            Transparent, normalized pricing for every tool we cover. See what you actually pay — including free tiers, per-seat costs, and hidden gotchas.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sorted.map((tool) => (
              <Link
                key={tool.slug}
                href={`/pricing/${tool.slug}`}
                className="group border border-border rounded-xl p-5 hover:border-accent/30 transition-all bg-background"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-base font-bold group-hover:text-accent transition-colors">
                      {tool.name}
                    </h2>
                    <p className="text-xs text-muted">{tool.vendor}</p>
                  </div>
                  <span className="text-lg font-extrabold text-accent shrink-0 ml-3">
                    {getCheapestPrice(tool)}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {tool.freeTier && (
                    <span className="inline-flex items-center text-[10px] font-semibold bg-success-light text-success px-2 py-0.5 rounded-full">
                      Free tier
                    </span>
                  )}
                  <span className="inline-flex items-center text-[10px] font-medium bg-surface-alt text-muted px-2 py-0.5 rounded-full">
                    {getBillingModels(tool)}
                  </span>
                  <span className="inline-flex items-center text-[10px] font-medium bg-surface-alt text-muted px-2 py-0.5 rounded-full">
                    {tool.pricing.length} plan{tool.pricing.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <p className="text-xs text-muted mt-3 line-clamp-1">
                  {tool.pricing.map((p) => p.name).join(" / ")}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
