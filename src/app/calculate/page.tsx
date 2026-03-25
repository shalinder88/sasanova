"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  tools,
  categories,
  getToolsByCategory,
  type Tool,
  type PricingPlan,
  type Category,
} from "@/data/tools";

/* ═══════════════════════════════════════════════════════════════
   HELPER: calculate cost for a tool at a given scale
   ═══════════════════════════════════════════════════════════════ */

interface CostResult {
  tool: Tool;
  plan: PricingPlan;
  monthlyTotal: number | null;
  annualTotal: number | null;
  annualSavings: number | null;
}

function bestPlanForScale(tool: Tool, scale: number, categoryType: "crm" | "email" | "automation" | "other"): CostResult | null {
  // For per_seat tools, scale = team size. For flat/usage tools with email/automation, scale is subscriber/task count.
  // We pick the "highlighted" plan if it exists, otherwise the cheapest paid plan, otherwise the free plan.
  const viable = tool.pricing.filter((p) => p.priceMonthly !== null);
  if (viable.length === 0) return null;

  // For per-seat billing, multiply by scale (team size)
  // For flat billing, use as-is (the plan already covers a certain subscriber count)
  function costForPlan(plan: PricingPlan): { monthly: number; annual: number | null } {
    const base = plan.priceMonthly ?? 0;
    const baseAnnual = plan.priceAnnual;

    if (plan.billingModel === "per_seat") {
      return {
        monthly: base * scale,
        annual: baseAnnual !== null ? baseAnnual * scale : null,
      };
    }
    if (plan.billingModel === "usage") {
      const multiplier = Math.max(1, Math.ceil(scale / 5));
      return {
        monthly: base * multiplier,
        annual: baseAnnual !== null ? baseAnnual * multiplier : null,
      };
    }
    return { monthly: base, annual: baseAnnual };
  }

  // Prefer highlighted plan, then mid-tier, then cheapest
  const highlighted = viable.find((p) => p.highlighted);
  const paid = viable.filter((p) => (p.priceMonthly ?? 0) > 0);
  const chosen = highlighted ?? (paid.length > 0 ? paid[0] : viable[0]);
  const cost = costForPlan(chosen);
  const monthlyCost = cost.monthly;
  const annualCost = cost.annual;
  const savings = annualCost !== null ? monthlyCost * 12 - annualCost : null;

  return {
    tool,
    plan: chosen,
    monthlyTotal: monthlyCost,
    annualTotal: annualCost,
    annualSavings: savings !== null && savings > 0 ? savings : null,
  };
}

/* ═══════════════════════════════════════════════════════════════
   HELPER: migration guide lookup
   ═══════════════════════════════════════════════════════════════ */

const MIGRATION_GUIDES: Record<string, string> = {
  "mailchimp->beehiiv": "/guides/migrate-mailchimp-to-beehiiv",
  "mailchimp->convertkit": "/guides/migrate-mailchimp-to-kit",
  "mailchimp->activecampaign": "/guides/switch-from-mailchimp-to-activecampaign",
  "salesforce->hubspot": "/guides/migrate-salesforce-to-hubspot",
  "substack->beehiiv": "/guides/migrate-substack-to-beehiiv",
  "zapier->make": "/guides/migrate-zapier-to-make",
  "zapier->n8n": "/guides/migrate-zapier-to-n8n",
  "activecampaign->convertkit": "/guides/switch-from-activecampaign-to-kit",
  "hubspot->pipedrive": "/guides/switch-from-hubspot-to-pipedrive",
  "convertkit->beehiiv": "/guides/switch-from-kit-to-beehiiv",
  "make->zapier": "/guides/switch-from-make-to-zapier",
  "notion->clickup": "/guides/switch-from-notion-to-clickup",
  "pipedrive->hubspot": "/guides/switch-from-pipedrive-to-hubspot",
};

function getMigrationGuide(fromSlug: string, toSlug: string): string | null {
  return MIGRATION_GUIDES[`${fromSlug}->${toSlug}`] ?? null;
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

type TabId = "compare" | "switching" | "stack";

const TABS: { id: TabId; label: string; description: string }[] = [
  { id: "compare", label: "Compare Tool Costs", description: "See how tools in a category stack up at your scale" },
  { id: "switching", label: "Switching Savings", description: "Calculate what you save (or spend) by switching tools" },
  { id: "stack", label: "Stack Budget Builder", description: "Build your ideal tool stack within a monthly budget" },
];

const CALCULATOR_CATEGORIES: { slug: string; label: string; type: "crm" | "email" | "automation" }[] = [
  { slug: "email-marketing", label: "Email Marketing", type: "email" },
  { slug: "crm", label: "CRM", type: "crm" },
  { slug: "automation", label: "Automation", type: "automation" },
];

// Popular tools for the switching calculator
const POPULAR_TOOLS = tools.filter((t) =>
  ["mailchimp", "convertkit", "beehiiv", "hubspot", "pipedrive", "salesforce",
   "activecampaign", "brevo", "zapier", "make", "n8n", "notion", "clickup",
   "asana", "monday", "freshdesk", "zendesk", "substack"].includes(t.slug)
).sort((a, b) => a.name.localeCompare(b.name));

// Stack builder categories
const STACK_NEEDS = [
  { key: "email-marketing", label: "Email Marketing", icon: "\u2709" },
  { key: "crm", label: "CRM", icon: "\uD83D\uDC65" },
  { key: "automation", label: "Automation", icon: "\u26A1" },
  { key: "project-management", label: "Project Management", icon: "\uD83D\uDCCB" },
  { key: "analytics", label: "Analytics", icon: "\uD83D\uDCCA" },
  { key: "helpdesk-support", label: "Support / Help Desk", icon: "\uD83D\uDEDF" },
];

/* ═══════════════════════════════════════════════════════════════
   FORMATTERS
   ═══════════════════════════════════════════════════════════════ */

function fmt(n: number | null): string {
  if (n === null) return "Contact Sales";
  if (n === 0) return "Free";
  return "$" + n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function fmtSavings(n: number): string {
  const prefix = n >= 0 ? "" : "-";
  return prefix + "$" + Math.abs(n).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/* ═══════════════════════════════════════════════════════════════
   SLIDER COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function StyledSlider({
  min,
  max,
  step,
  value,
  onChange,
  label,
  formatValue,
}: {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  label: string;
  formatValue?: (v: number) => string;
}) {
  const display = formatValue ? formatValue(value) : String(value);
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}: <span className="text-accent font-bold">{display}</span>
      </label>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--surface-alt) ${pct}%, var(--surface-alt) 100%)`,
          }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-muted mt-1">
        <span>{formatValue ? formatValue(min) : min}</span>
        <span>{formatValue ? formatValue(Math.round((min + max) / 2)) : Math.round((min + max) / 2)}</span>
        <span>{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BILLING TOGGLE
   ═══════════════════════════════════════════════════════════════ */

function BillingToggle({ annual, setAnnual }: { annual: boolean; setAnnual: (v: boolean) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">Billing Cycle</label>
      <div className="flex items-center gap-0 bg-surface-alt border border-border rounded-lg p-1">
        <button
          onClick={() => setAnnual(false)}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
            !annual ? "bg-accent text-white shadow-sm" : "text-muted hover:text-foreground"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual(true)}
          className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
            annual ? "bg-accent text-white shadow-sm" : "text-muted hover:text-foreground"
          }`}
        >
          Annual
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MODE 1: COMPARE TOOL COSTS
   ═══════════════════════════════════════════════════════════════ */

function CompareToolCosts() {
  const [catSlug, setCatSlug] = useState("email-marketing");
  const catConfig = CALCULATOR_CATEGORIES.find((c) => c.slug === catSlug) ?? CALCULATOR_CATEGORIES[0];
  const isEmail = catConfig.type === "email";
  const isCRM = catConfig.type === "crm";
  const isAutomation = catConfig.type === "automation";

  const sliderConfig = isCRM
    ? { min: 1, max: 100, step: 1, label: "Team Size", format: (v: number) => `${v} ${v === 1 ? "seat" : "seats"}` }
    : isEmail
    ? { min: 500, max: 100000, step: 500, label: "Subscriber Count", format: (v: number) => v >= 1000 ? `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K` : String(v) }
    : { min: 500, max: 50000, step: 500, label: "Tasks / Actions per month", format: (v: number) => v >= 1000 ? `${(v / 1000).toFixed(v % 1000 === 0 ? 0 : 1)}K` : String(v) };

  const [scale, setScale] = useState(isCRM ? 5 : 5000);
  const [annual, setAnnual] = useState(false);

  const categoryTools = getToolsByCategory(catSlug);

  const results: CostResult[] = useMemo(() => {
    return categoryTools
      .map((t) => bestPlanForScale(t, isCRM ? scale : 1, catConfig.type))
      .filter((r): r is CostResult => r !== null)
      .sort((a, b) => (a.monthlyTotal ?? Infinity) - (b.monthlyTotal ?? Infinity));
  }, [categoryTools, scale, catConfig.type, isCRM]);

  const cheapestCost = results.length > 0 ? results[0].monthlyTotal : null;
  const expensiveCost = results.length > 0 ? results[results.length - 1].monthlyTotal : null;

  return (
    <div>
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Category</label>
          <select
            value={catSlug}
            onChange={(e) => {
              setCatSlug(e.target.value);
              const newCat = CALCULATOR_CATEGORIES.find((c) => c.slug === e.target.value);
              if (newCat?.type === "crm") setScale(5);
              else setScale(5000);
            }}
            className="w-full bg-surface-alt border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none cursor-pointer"
          >
            {CALCULATOR_CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <StyledSlider
          min={sliderConfig.min}
          max={sliderConfig.max}
          step={sliderConfig.step}
          value={scale}
          onChange={setScale}
          label={sliderConfig.label}
          formatValue={sliderConfig.format}
        />

        <BillingToggle annual={annual} setAnnual={setAnnual} />
      </div>

      {/* Results Table */}
      {results.length === 0 ? (
        <p className="text-muted text-sm py-8 text-center">No tools found in this category.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted text-xs">
                <th className="text-left py-3 px-3 font-medium">Tool</th>
                <th className="text-left py-3 px-3 font-medium">Plan</th>
                <th className="text-right py-3 px-3 font-medium">Monthly Cost</th>
                <th className="text-right py-3 px-3 font-medium">Annual Cost</th>
                <th className="text-right py-3 px-3 font-medium">Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => {
                const isCheapest = r.monthlyTotal === cheapestCost && r.monthlyTotal !== null;
                const isMostExpensive = r.monthlyTotal === expensiveCost && r.monthlyTotal !== null && results.length > 1 && r.monthlyTotal !== cheapestCost;
                const displayMonthly = annual && r.annualTotal !== null ? r.annualTotal / 12 : r.monthlyTotal;
                return (
                  <tr
                    key={r.tool.slug}
                    className={`border-b border-border/50 transition-colors hover:bg-surface-alt/60 ${
                      isCheapest ? "bg-success-light/30" : isMostExpensive ? "bg-danger-light/30" : ""
                    }`}
                  >
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <Link href={`/tools/${r.tool.slug}`} className="font-semibold text-foreground hover:text-accent transition-colors">
                          {r.tool.name}
                        </Link>
                        {isCheapest && (
                          <span className="text-[10px] font-semibold text-success bg-success-light px-1.5 py-0.5 rounded-full">
                            Cheapest
                          </span>
                        )}
                        {isMostExpensive && (
                          <span className="text-[10px] font-semibold text-danger bg-danger-light px-1.5 py-0.5 rounded-full">
                            Most Expensive
                          </span>
                        )}
                      </div>
                      {r.tool.freeTier && r.plan.priceMonthly !== 0 && (
                        <span className="text-[10px] text-muted">Free tier available</span>
                      )}
                    </td>
                    <td className="py-3 px-3 text-muted">
                      {r.plan.name}
                      <span className="text-[10px] block text-muted/60 capitalize">{r.plan.billingModel}</span>
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-semibold">
                      {fmt(displayMonthly)}
                      {displayMonthly !== null && displayMonthly > 0 && <span className="text-muted font-normal">/mo</span>}
                    </td>
                    <td className="py-3 px-3 text-right font-mono">
                      {r.annualTotal !== null ? fmt(r.annualTotal) : <span className="text-muted">--</span>}
                      {r.annualTotal !== null && r.annualTotal > 0 && <span className="text-muted font-normal">/yr</span>}
                    </td>
                    <td className="py-3 px-3 text-right font-mono">
                      {r.annualSavings !== null ? (
                        <span className="text-success font-semibold">{fmt(r.annualSavings)}/yr</span>
                      ) : (
                        <span className="text-muted">--</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-[10px] text-muted mt-4">
        Costs based on published pricing at the recommended plan tier. Per-seat tools are multiplied by team size. Verify with vendor for exact quotes.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MODE 2: SWITCHING SAVINGS CALCULATOR
   ═══════════════════════════════════════════════════════════════ */

function SwitchingSavingsCalculator() {
  const [fromSlug, setFromSlug] = useState(POPULAR_TOOLS[0]?.slug ?? "");
  const [toSlug, setToSlug] = useState(POPULAR_TOOLS.length > 1 ? POPULAR_TOOLS[1]?.slug ?? "" : "");
  const [scale, setScale] = useState(5);
  const [annual] = useState(true);

  const fromTool = tools.find((t) => t.slug === fromSlug);
  const toTool = tools.find((t) => t.slug === toSlug);

  const results = useMemo(() => {
    if (!fromTool || !toTool) return null;

    const fromCost = bestPlanForScale(fromTool, scale, "other");
    const toCost = bestPlanForScale(toTool, scale, "other");
    if (!fromCost || !toCost) return null;

    const currentAnnual = fromCost.annualTotal ?? (fromCost.monthlyTotal ?? 0) * 12;
    const newAnnual = toCost.annualTotal ?? (toCost.monthlyTotal ?? 0) * 12;
    const annualDiff = currentAnnual - newAnnual;
    const threeYearSavings = annualDiff * 3;

    // Migration effort based on tool data
    const migDifficulty = toTool.scores.migrationDifficulty; // 1-10, 10 = easiest
    const effort: "Easy" | "Moderate" | "Hard" = migDifficulty >= 7 ? "Easy" : migDifficulty >= 4 ? "Moderate" : "Hard";

    // What you lose / gain
    const fromFeatures = new Set(fromTool.features);
    const toFeatures = new Set(toTool.features);
    const youLose = fromTool.features.filter((f) => !toFeatures.has(f)).slice(0, 5);
    const youGain = toTool.features.filter((f) => !fromFeatures.has(f)).slice(0, 5);

    const guide = getMigrationGuide(fromSlug, toSlug);

    return {
      currentAnnual,
      newAnnual,
      annualDiff,
      threeYearSavings,
      effort,
      youLose,
      youGain,
      guide,
      fromPlan: fromCost.plan.name,
      toPlan: toCost.plan.name,
    };
  }, [fromTool, toTool, scale, fromSlug, toSlug]);

  return (
    <div>
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">I&#39;m currently using</label>
          <select
            value={fromSlug}
            onChange={(e) => setFromSlug(e.target.value)}
            className="w-full bg-surface-alt border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none cursor-pointer"
          >
            {POPULAR_TOOLS.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">I&#39;m considering</label>
          <select
            value={toSlug}
            onChange={(e) => setToSlug(e.target.value)}
            className="w-full bg-surface-alt border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none cursor-pointer"
          >
            {POPULAR_TOOLS.filter((t) => t.slug !== fromSlug).map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <StyledSlider
          min={1}
          max={100}
          step={1}
          value={scale}
          onChange={setScale}
          label="Team Size / Seats"
          formatValue={(v) => `${v} ${v === 1 ? "seat" : "seats"}`}
        />

        <div className="flex items-end">
          <p className="text-xs text-muted">
            Comparing annual billing for both tools at the recommended plan tier.
          </p>
        </div>
      </div>

      {/* Results */}
      {results && fromTool && toTool ? (
        <div className="space-y-6">
          {/* Cost Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-surface border border-border rounded-xl p-5">
              <p className="text-xs text-muted mb-1">Current Annual Cost</p>
              <p className="text-2xl font-extrabold text-foreground">{fmt(results.currentAnnual)}<span className="text-sm font-normal text-muted">/yr</span></p>
              <p className="text-xs text-muted mt-1">{fromTool.name} &middot; {results.fromPlan}</p>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5">
              <p className="text-xs text-muted mb-1">New Annual Cost</p>
              <p className="text-2xl font-extrabold text-foreground">{fmt(results.newAnnual)}<span className="text-sm font-normal text-muted">/yr</span></p>
              <p className="text-xs text-muted mt-1">{toTool.name} &middot; {results.toPlan}</p>
            </div>

            <div className={`border rounded-xl p-5 ${results.annualDiff >= 0 ? "bg-success-light/30 border-success/20" : "bg-danger-light/30 border-danger/20"}`}>
              <p className="text-xs text-muted mb-1">Annual {results.annualDiff >= 0 ? "Savings" : "Extra Cost"}</p>
              <p className={`text-2xl font-extrabold ${results.annualDiff >= 0 ? "text-success" : "text-danger"}`}>
                {fmtSavings(Math.abs(results.annualDiff))}<span className="text-sm font-normal opacity-70">/yr</span>
              </p>
              <p className="text-xs text-muted mt-1">
                3-year total: <span className={`font-semibold ${results.threeYearSavings >= 0 ? "text-success" : "text-danger"}`}>{fmtSavings(Math.abs(results.threeYearSavings))}</span>
              </p>
            </div>
          </div>

          {/* Migration Effort */}
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-center gap-4 mb-4">
              <p className="text-sm font-semibold text-foreground">Migration Effort</p>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                results.effort === "Easy"
                  ? "bg-success-light text-success"
                  : results.effort === "Moderate"
                  ? "bg-warning-light text-warning"
                  : "bg-danger-light text-danger"
              }`}>
                {results.effort}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.youLose.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-danger mb-2">What you may lose</p>
                  <ul className="space-y-1">
                    {results.youLose.map((f) => (
                      <li key={f} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-danger mt-0.5 shrink-0">&minus;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {results.youGain.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-success mb-2">What you&#39;ll gain</p>
                  <ul className="space-y-1">
                    {results.youGain.map((f) => (
                      <li key={f} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-success mt-0.5 shrink-0">+</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {results.guide && (
              <Link
                href={results.guide}
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                Read Migration Guide &rarr;
              </Link>
            )}
          </div>
        </div>
      ) : (
        <p className="text-muted text-sm py-8 text-center">Select two different tools to compare switching costs.</p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MODE 3: STACK BUDGET BUILDER
   ═══════════════════════════════════════════════════════════════ */

interface StackPick {
  categorySlug: string;
  categoryLabel: string;
  tool: Tool;
  plan: PricingPlan;
  monthlyCost: number;
  annualCost: number | null;
  upgradeTrigger: string;
}

function StackBudgetBuilder() {
  const [budget, setBudget] = useState(150);
  const [needs, setNeeds] = useState<Set<string>>(new Set(["email-marketing", "crm"]));
  const [teamSize, setTeamSize] = useState(5);

  const toggleNeed = (key: string) => {
    setNeeds((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const picks: StackPick[] = useMemo(() => {
    const result: StackPick[] = [];

    for (const need of STACK_NEEDS) {
      if (!needs.has(need.key)) continue;

      const catTools = getToolsByCategory(need.key);
      if (catTools.length === 0) continue;

      // Try each tool, find cheapest that fits remaining budget
      const remainingBudget = budget - result.reduce((sum, p) => sum + p.monthlyCost, 0);

      const candidates = catTools
        .map((t) => {
          const cost = bestPlanForScale(t, teamSize, "other");
          return cost ? { ...cost, monthlyCost: cost.monthlyTotal ?? 0 } : null;
        })
        .filter((c): c is CostResult & { monthlyCost: number } => c !== null && c.monthlyTotal !== null)
        .sort((a, b) => a.monthlyCost - b.monthlyCost);

      // Pick cheapest that fits budget, or cheapest free tier, or just cheapest
      const fitsInBudget = candidates.filter((c) => c.monthlyCost <= remainingBudget);
      const freeTier = candidates.filter((c) => c.monthlyCost === 0);
      const chosen = fitsInBudget[0] ?? freeTier[0] ?? candidates[0];

      if (chosen) {
        // Figure out upgrade trigger
        let upgradeTrigger = "When you outgrow the plan limits";
        if (chosen.plan.limits) {
          const limits = chosen.plan.limits;
          if (limits.includes("contact")) upgradeTrigger = "When you exceed the contact limit";
          else if (limits.includes("seat") || limits.includes("user")) upgradeTrigger = `When your team grows beyond ${teamSize} seats`;
          else if (limits.includes("send") || limits.includes("email")) upgradeTrigger = "When you exceed the monthly send limit";
          else if (limits.includes("task") || limits.includes("action")) upgradeTrigger = "When you need more automations or tasks";
        }

        result.push({
          categorySlug: need.key,
          categoryLabel: need.label,
          tool: chosen.tool,
          plan: chosen.plan,
          monthlyCost: chosen.monthlyCost,
          annualCost: chosen.annualTotal,
          upgradeTrigger,
        });
      }
    }

    return result;
  }, [budget, needs, teamSize]);

  const totalMonthly = picks.reduce((sum, p) => sum + p.monthlyCost, 0);
  const totalAnnual = picks.reduce((sum, p) => sum + (p.annualCost ?? p.monthlyCost * 12), 0);
  const budgetRemaining = budget - totalMonthly;

  return (
    <div>
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <StyledSlider
          min={0}
          max={500}
          step={10}
          value={budget}
          onChange={setBudget}
          label="Monthly Budget"
          formatValue={(v) => `$${v}/mo`}
        />

        <StyledSlider
          min={1}
          max={50}
          step={1}
          value={teamSize}
          onChange={setTeamSize}
          label="Team Size"
          formatValue={(v) => `${v} ${v === 1 ? "person" : "people"}`}
        />
      </div>

      {/* Needs Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-foreground mb-3">What do you need?</label>
        <div className="flex flex-wrap gap-2">
          {STACK_NEEDS.map((n) => {
            const active = needs.has(n.key);
            return (
              <button
                key={n.key}
                onClick={() => toggleNeed(n.key)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg border transition-all ${
                  active
                    ? "bg-accent/10 border-accent text-accent"
                    : "bg-surface border-border text-muted hover:text-foreground hover:border-border-strong"
                }`}
              >
                <span>{n.icon}</span>
                {n.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      {picks.length === 0 ? (
        <p className="text-muted text-sm py-8 text-center">Select at least one category above to see recommendations.</p>
      ) : (
        <div className="space-y-6">
          {/* Tool Picks */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted text-xs">
                  <th className="text-left py-3 px-3 font-medium">Category</th>
                  <th className="text-left py-3 px-3 font-medium">Recommended Tool</th>
                  <th className="text-left py-3 px-3 font-medium">Plan</th>
                  <th className="text-right py-3 px-3 font-medium">Monthly Cost</th>
                  <th className="text-left py-3 px-3 font-medium">Upgrade Trigger</th>
                </tr>
              </thead>
              <tbody>
                {picks.map((p) => (
                  <tr key={p.categorySlug} className="border-b border-border/50 transition-colors hover:bg-surface-alt/60">
                    <td className="py-3 px-3 font-medium text-muted">{p.categoryLabel}</td>
                    <td className="py-3 px-3">
                      <Link href={`/tools/${p.tool.slug}`} className="font-semibold text-foreground hover:text-accent transition-colors">
                        {p.tool.name}
                      </Link>
                    </td>
                    <td className="py-3 px-3 text-muted">{p.plan.name}</td>
                    <td className="py-3 px-3 text-right font-mono font-semibold">
                      {fmt(p.monthlyCost)}
                      {p.monthlyCost > 0 && <span className="text-muted font-normal">/mo</span>}
                    </td>
                    <td className="py-3 px-3 text-xs text-muted">{p.upgradeTrigger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface border border-border rounded-xl p-4">
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Monthly Total</p>
              <p className="text-xl font-extrabold text-foreground">{fmt(totalMonthly)}<span className="text-xs font-normal text-muted">/mo</span></p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-4">
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Annual Total</p>
              <p className="text-xl font-extrabold text-foreground">{fmt(totalAnnual)}<span className="text-xs font-normal text-muted">/yr</span></p>
            </div>
            <div className={`border rounded-xl p-4 ${budgetRemaining >= 0 ? "bg-success-light/30 border-success/20" : "bg-danger-light/30 border-danger/20"}`}>
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Budget Remaining</p>
              <p className={`text-xl font-extrabold ${budgetRemaining >= 0 ? "text-success" : "text-danger"}`}>
                {budgetRemaining >= 0 ? fmt(budgetRemaining) : `-${fmt(Math.abs(budgetRemaining))}`}<span className="text-xs font-normal opacity-70">/mo</span>
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-4">
              <p className="text-[10px] text-muted uppercase tracking-wider mb-1">Tools Selected</p>
              <p className="text-xl font-extrabold text-foreground">{picks.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function CalculatePage() {
  const [activeTab, setActiveTab] = useState<TabId>("compare");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          SaaS Cost Calculator
        </h1>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          Compare real pricing, calculate switching savings, and build your ideal tool stack on budget.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm font-semibold rounded-xl border transition-all ${
              activeTab === tab.id
                ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                : "bg-surface border-border text-muted hover:text-foreground hover:border-border-strong"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Description */}
      <p className="text-center text-sm text-muted mb-8">
        {TABS.find((t) => t.id === activeTab)?.description}
      </p>

      {/* Tab Content */}
      <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8">
        {activeTab === "compare" && <CompareToolCosts />}
        {activeTab === "switching" && <SwitchingSavingsCalculator />}
        {activeTab === "stack" && <StackBudgetBuilder />}
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-muted max-w-xl mx-auto">
          All pricing data is independently verified from vendor websites. Prices may vary by region, volume, or promotional offers. Last verified March 2026.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/pricing" className="text-xs text-accent hover:text-accent-dark transition-colors">
            Browse All Pricing &rarr;
          </Link>
          <Link href="/compare" className="text-xs text-accent hover:text-accent-dark transition-colors">
            Compare Two Tools &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
