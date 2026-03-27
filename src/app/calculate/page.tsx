import { Suspense } from "react";
import Link from "next/link";
import { tools, getToolsByCategory } from "@/data/tools";
import CalculatorClient from "./calculator-client";

/* ------------------------------------------------------------------
   Pre-compute cheapest paid tool per core category (server-side)
   ------------------------------------------------------------------ */

interface CheapestResult {
  category: string;
  toolName: string;
  planName: string;
  price: number;
}

function cheapestPaidInCategory(categorySlug: string, label: string): CheapestResult | null {
  const categoryTools = getToolsByCategory(categorySlug);
  let best: CheapestResult | null = null;

  for (const tool of categoryTools) {
    for (const plan of tool.pricing) {
      if (plan.priceMonthly !== null && plan.priceMonthly > 0) {
        if (!best || plan.priceMonthly < best.price) {
          best = {
            category: label,
            toolName: tool.name,
            planName: plan.name,
            price: plan.priceMonthly,
          };
        }
      }
    }
  }
  return best;
}

/* ------------------------------------------------------------------
   Pre-compute scenario stacks (server-side)
   Each scenario picks the cheapest viable tool per need.
   ------------------------------------------------------------------ */

interface ScenarioResult {
  label: string;
  total: number;
  breakdown: string[];
}

function computeScenario(
  label: string,
  seats: number,
  needs: { slug: string; label: string }[],
): ScenarioResult {
  const breakdown: string[] = [];
  let total = 0;

  for (const need of needs) {
    const categoryTools = getToolsByCategory(need.slug);
    let bestName = "";
    let bestCost = Infinity;

    for (const tool of categoryTools) {
      for (const plan of tool.pricing) {
        if (plan.priceMonthly === null) continue;
        // BUG 3 FIX: Skip free plans so scenarios show cheapest PAID option
        if (plan.priceMonthly === 0) continue;
        const cost =
          plan.billingModel === "per_seat"
            ? plan.priceMonthly * seats
            : plan.priceMonthly;
        if (cost < bestCost) {
          bestCost = cost;
          bestName = `${tool.name} ${plan.name}`;
        }
      }
    }

    if (bestName && bestCost < Infinity) {
      total += bestCost;
      breakdown.push(
        `${need.label}: ${bestName} ($${bestCost === 0 ? "0" : Math.round(bestCost)}/mo)`,
      );
    }
  }

  return { label, total: Math.round(total), breakdown };
}

function fmt(n: number): string {
  return "$" + n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/* ------------------------------------------------------------------
   Page (Server Component)
   ------------------------------------------------------------------ */

export default function CalculatePage() {
  // Pre-compute popular category cheapest tools
  const emailCheapest = cheapestPaidInCategory("email-marketing", "Email Marketing");
  const crmCheapest = cheapestPaidInCategory("crm", "CRM");
  const automationCheapest = cheapestPaidInCategory("automation", "Automation");
  const popularComparisons = [emailCheapest, crmCheapest, automationCheapest].filter(
    (r): r is CheapestResult => r !== null,
  );

  // Pre-compute scenario stacks
  const coreNeeds = [
    { slug: "email-marketing", label: "Email" },
    { slug: "crm", label: "CRM" },
    { slug: "automation", label: "Automation" },
  ];

  const soloScenario = computeScenario("Solo founder stack", 1, coreNeeds);
  const teamScenario = computeScenario("5-person team stack", 5, coreNeeds);
  const growthScenario = computeScenario("25-person team stack", 25, coreNeeds);
  const scenarios = [soloScenario, teamScenario, growthScenario];

  return (
    <>
      {/* ── Static SEO content (server-rendered, visible to crawlers) ── */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            SaaS Cost Calculator &mdash; Compare Real Pricing
          </h1>
          <p className="text-lg text-muted max-w-3xl mb-8">
            Stop guessing what software costs at your scale. This calculator uses
            provenance-tracked pricing data from {tools.length}+ tools to show you
            the real monthly and annual cost for email marketing, CRM, and automation
            platforms. Compare tools side-by-side, estimate switching savings, or build
            a complete stack on budget.
          </p>

          {/* Popular category comparisons */}
          {popularComparisons.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-foreground mb-3">
                Cheapest Paid Plans by Category
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest Paid Tool</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularComparisons.map((row) => (
                      <tr key={row.category} className="border-t border-border">
                        <td className="px-4 py-2.5 text-foreground font-medium">{row.category}</td>
                        <td className="px-4 py-2.5 text-foreground">{row.toolName}</td>
                        <td className="px-4 py-2.5 text-muted">{row.planName}</td>
                        <td className="px-4 py-2.5 text-accent font-semibold text-right">
                          {fmt(row.price)}/mo
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Pre-computed scenario summaries */}
          <h2 className="text-lg font-bold text-foreground mb-3">
            What Does a SaaS Stack Cost?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {scenarios.map((s) => (
              <div
                key={s.label}
                className="border border-border rounded-xl p-5 bg-background"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                  {s.label}
                </p>
                <p className="text-2xl font-extrabold text-foreground mb-2">
                  {fmt(s.total)}/mo
                </p>
                <ul className="text-xs text-muted space-y-1">
                  {s.breakdown.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted">
            Based on the cheapest viable plan per category. Use the interactive calculator
            below to adjust team size, billing cycle, and tool preferences.
          </p>
        </div>
      </section>

      {/* ── Interactive calculator (client component, Suspense boundary) ── */}
      <Suspense
        fallback={
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold tracking-tight mb-3">
                Interactive Cost Calculator
              </h2>
              <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
                Select your tools, team size, and billing cycle to see exact monthly and annual costs.
                Compare up to 4 tools side-by-side with real pricing data.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="border border-border rounded-xl p-5 bg-surface">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Step 1</p>
                <p className="text-sm font-semibold text-foreground">Choose Your Tools</p>
                <p className="text-xs text-muted mt-1">Pick from {tools.length}+ verified SaaS tools across email, CRM, automation, and more.</p>
              </div>
              <div className="border border-border rounded-xl p-5 bg-surface">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Step 2</p>
                <p className="text-sm font-semibold text-foreground">Set Team Size &amp; Billing</p>
                <p className="text-xs text-muted mt-1">Adjust seats and toggle monthly vs annual billing to see how costs scale.</p>
              </div>
              <div className="border border-border rounded-xl p-5 bg-surface">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Step 3</p>
                <p className="text-sm font-semibold text-foreground">Compare &amp; Save</p>
                <p className="text-xs text-muted mt-1">See total stack cost, annual savings from yearly billing, and cheaper alternatives.</p>
              </div>
            </div>
          </div>
        }
      >
        <CalculatorClient />
      </Suspense>
    </>
  );
}
