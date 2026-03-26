"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  tools,
  categories,
  getToolsByCategory,
  getOverallScore,
  type Tool,
  type Category,
} from "@/data/tools";

/* ═══════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════ */

type Persona =
  | "solo"
  | "small"
  | "growing"
  | "agency"
  | "creator"
  | "ecommerce";

const PERSONA_LABELS: Record<Persona, string> = {
  solo: "Solo founder",
  small: "Small team (2\u20135)",
  growing: "Growing team (6\u201325)",
  agency: "Agency",
  creator: "Creator / Writer",
  ecommerce: "E-commerce",
};

const BUDGET_STEPS = [0, 50, 100, 200, 500];

/** Maps user-facing need checkboxes to category slugs */
const NEED_MAP: Record<string, string[]> = {
  "Email / Newsletter": ["email-marketing", "newsletter-platforms"],
  CRM: ["crm"],
  Automation: ["automation"],
  "Project Management": ["project-management", "task-management"],
  Analytics: ["analytics"],
  Support: ["helpdesk-support"],
  Scheduling: ["scheduling"],
  Design: ["design-creative"],
};

const NEED_KEYS = Object.keys(NEED_MAP);

/* ═══════════════════════════════════════════════════════════════
   RECOMMENDATION ENGINE
   ═══════════════════════════════════════════════════════════════ */

interface Recommendation {
  tool: Tool;
  category: Category;
  reason: string;
  monthlyPrice: number;
  upgradeTriggers: string[];
  hiddenCosts: string[];
}

function cheapestPrice(tool: Tool): number {
  const paid = tool.pricing.filter(
    (p) => p.priceMonthly !== null && p.priceMonthly > 0
  );
  if (paid.length === 0) return 0;
  return Math.min(...paid.map((p) => p.priceMonthly!));
}

function effectivePrice(tool: Tool, perCategory: number): number {
  if (perCategory === 0) {
    // budget 0 means only free tiers
    return tool.freeTier ? 0 : Infinity;
  }
  const cheapest = cheapestPrice(tool);
  if (tool.freeTier && cheapest > perCategory) return 0; // use free tier
  return cheapest;
}

function recommendTool(
  categorySlugs: string[],
  budget: number,
  totalNeeds: number,
  persona: Persona
): Recommendation | null {
  const perCategory = totalNeeds > 0 ? budget / totalNeeds : budget;

  // Collect tools from all matching category slugs
  const poolMap = new Map<string, Tool>();
  let primaryCategory: Category | undefined;
  for (const slug of categorySlugs) {
    const catTools = getToolsByCategory(slug);
    for (const t of catTools) poolMap.set(t.slug, t);
    if (!primaryCategory) {
      primaryCategory = categories.find((c) => c.slug === slug);
    }
  }
  if (!primaryCategory) return null;

  const pool = Array.from(poolMap.values());
  if (pool.length === 0) return null;

  // Filter by budget
  const affordable = pool.filter((t) => {
    const price = effectivePrice(t, perCategory);
    return price <= perCategory || price === 0;
  });

  const candidates = affordable.length > 0 ? affordable : pool;

  // Score each candidate
  const scored = candidates.map((t) => {
    let score = getOverallScore(t.scores);

    // Budget $0 — prefer free tiers
    if (budget === 0) {
      if (t.freeTier) score += 3;
      else score -= 5;
    }

    // Persona preferences
    if (persona === "creator") {
      if (
        t.categories.includes("creator-monetization") ||
        t.categories.includes("newsletter-platforms")
      )
        score += 2;
      if (t.bestFor.some((b) => /creator|writer|audience/i.test(b)))
        score += 1.5;
    }
    if (persona === "agency") {
      if (
        t.bestFor.some((b) => /agency|multi-client|client/i.test(b))
      )
        score += 2;
      if (t.features.some((f) => /client|white.?label|multi/i.test(f)))
        score += 1.5;
    }
    if (persona === "solo") {
      score += t.scores.ease * 0.3; // prefer simplest
      if (t.freeTier) score += 1;
    }
    if (persona === "ecommerce") {
      if (
        t.categories.includes("ecommerce") ||
        t.bestFor.some((b) => /commerce|store|shop/i.test(b))
      )
        score += 2;
    }
    if (persona === "small" || persona === "growing") {
      // Prefer per-seat billing for teams
      const hasPerSeat = t.pricing.some(
        (p) => p.billingModel === "per_seat"
      );
      if (hasPerSeat && persona === "growing") score += 0.5;
    }

    return { tool: t, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const pick = scored[0].tool;
  const price = effectivePrice(pick, perCategory);

  // Build reason
  const reasons: string[] = [];
  if (price === 0 && pick.freeTier) reasons.push("has a free tier");
  else if (price > 0)
    reasons.push(`starts at $${price}/mo`);
  if (persona === "solo" && pick.scores.ease >= 7)
    reasons.push("easy to set up solo");
  if (persona === "creator" && pick.categories.includes("newsletter-platforms"))
    reasons.push("built for creators");
  if (persona === "agency" && pick.bestFor.some((b) => /agency|client/i.test(b)))
    reasons.push("supports multi-client workflows");
  if (pick.scores.value >= 7) reasons.push("excellent value score");
  if (reasons.length === 0) reasons.push("best overall match");

  return {
    tool: pick,
    category: primaryCategory,
    reason: reasons.join(" \u2022 "),
    monthlyPrice: price === Infinity ? cheapestPrice(pick) : price,
    upgradeTriggers: pick.switchingTriggers ?? [],
    hiddenCosts: pick.hiddenCosts ?? [],
  };
}

/* ═══════════════════════════════════════════════════════════════
   SHARE / SAVE HELPERS
   ═══════════════════════════════════════════════════════════════ */

function encodeState(
  persona: Persona,
  budget: number,
  needs: string[]
): string {
  const params = new URLSearchParams();
  params.set("p", persona);
  params.set("b", String(budget));
  params.set("n", needs.join(","));
  return params.toString();
}

function decodeState(search: string): {
  persona: Persona;
  budget: number;
  needs: string[];
} | null {
  const params = new URLSearchParams(search);
  const p = params.get("p") as Persona | null;
  const b = params.get("b");
  const n = params.get("n");
  if (!p || !b || !n) return null;
  if (!(p in PERSONA_LABELS)) return null;
  return {
    persona: p,
    budget: Number(b),
    needs: n.split(",").filter((x) => NEED_KEYS.includes(x)),
  };
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function RecommendPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [persona, setPersona] = useState<Persona>("solo");
  const [budget, setBudget] = useState(100);
  const [needs, setNeeds] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from URL params on mount
  useEffect(() => {
    const search = window.location.search;
    if (search) {
      const decoded = decodeState(search);
      if (decoded) {
        setPersona(decoded.persona);
        setBudget(decoded.budget);
        setNeeds(decoded.needs);
        setStep(2);
      }
    }
    setHydrated(true);
  }, []);

  const toggleNeed = useCallback((need: string) => {
    setNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  }, []);

  const recommendations = useMemo(() => {
    if (needs.length === 0) return [];
    return needs
      .map((need) => {
        const slugs = NEED_MAP[need];
        if (!slugs) return null;
        return recommendTool(slugs, budget, needs.length, persona);
      })
      .filter((r): r is Recommendation => r !== null);
  }, [needs, budget, persona]);

  const totalCost = useMemo(
    () => recommendations.reduce((sum, r) => sum + r.monthlyPrice, 0),
    [recommendations]
  );

  const budgetRemaining = budget - totalCost;

  const handleGetResults = () => {
    if (needs.length === 0) return;
    setStep(2);
    // Update URL without reload
    const qs = encodeState(persona, budget, needs);
    window.history.replaceState(null, "", `/recommend?${qs}`);
  };

  const handleSave = () => {
    const data = {
      persona,
      budget,
      needs,
      recommendations: recommendations.map((r) => ({
        tool: r.tool.slug,
        category: r.category.slug,
        price: r.monthlyPrice,
      })),
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem("sasanova_stack", JSON.stringify(data));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleShare = async () => {
    const qs = encodeState(persona, budget, needs);
    const url = `${window.location.origin}/recommend?${qs}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      prompt("Copy this link:", url);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    setStep(1);
    setSaved(false);
    setCopied(false);
  };

  if (!hydrated) return null;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Software Stack Recommender
          </h1>
          <p className="text-muted text-base max-w-xl mx-auto">
            Tell us about your team, budget, and needs. We'll match you with the
            right tools using verified pricing data.
          </p>
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step >= s
                      ? "bg-accent text-white"
                      : "bg-surface-alt text-muted"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-8 h-0.5 ${
                      step > s ? "bg-accent" : "bg-surface-alt"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ═══════ STEP 1: User Profile ═══════ */}
        {step === 1 && (
          <div className="space-y-10">
            {/* Persona */}
            <fieldset>
              <legend className="text-sm font-semibold text-foreground mb-4">
                What best describes you?
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(Object.keys(PERSONA_LABELS) as Persona[]).map((p) => (
                  <label
                    key={p}
                    className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                      persona === p
                        ? "border-accent bg-accent-light"
                        : "border-border bg-surface hover:border-border-strong"
                    }`}
                  >
                    <input
                      type="radio"
                      name="persona"
                      value={p}
                      checked={persona === p}
                      onChange={() => setPersona(p)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        persona === p ? "border-accent" : "border-muted"
                      }`}
                    >
                      {persona === p && (
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="text-sm font-medium">
                      {PERSONA_LABELS[p]}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Budget */}
            <fieldset>
              <legend className="text-sm font-semibold text-foreground mb-4">
                Monthly software budget
              </legend>
              <div className="bg-surface rounded-lg border border-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold">
                    {budget === 500 ? "$500+" : `$${budget}`}
                  </span>
                  <span className="text-xs text-muted">per month</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={4}
                  step={1}
                  value={BUDGET_STEPS.indexOf(budget)}
                  onChange={(e) =>
                    setBudget(BUDGET_STEPS[Number(e.target.value)])
                  }
                  className="w-full accent-accent"
                />
                <div className="flex justify-between mt-2">
                  {BUDGET_STEPS.map((b) => (
                    <span
                      key={b}
                      className={`text-xs ${
                        budget === b ? "text-accent font-semibold" : "text-muted"
                      }`}
                    >
                      {b === 500 ? "$500+" : `$${b}`}
                    </span>
                  ))}
                </div>
              </div>
            </fieldset>

            {/* Needs */}
            <fieldset>
              <legend className="text-sm font-semibold text-foreground mb-4">
                What do you need?
              </legend>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {NEED_KEYS.map((need) => (
                  <label
                    key={need}
                    className={`flex items-center gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${
                      needs.includes(need)
                        ? "border-accent bg-accent-light"
                        : "border-border bg-surface hover:border-border-strong"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={needs.includes(need)}
                      onChange={() => toggleNeed(need)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                        needs.includes(need)
                          ? "border-accent bg-accent"
                          : "border-muted"
                      }`}
                    >
                      {needs.includes(need) && (
                        <svg
                          className="w-2.5 h-2.5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium">{need}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                onClick={handleGetResults}
                disabled={needs.length === 0}
                className="px-8 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Get My Stack Recommendations
              </button>
            </div>
            {needs.length === 0 && (
              <p className="text-center text-xs text-muted">
                Select at least one need above to continue.
              </p>
            )}
          </div>
        )}

        {/* ═══════ STEP 2: Results ═══════ */}
        {step >= 2 && (
          <div className="space-y-8">
            {/* Summary bar */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-surface rounded-lg border border-border p-4 text-center">
                <p className="text-xs text-muted mb-1">Total Cost</p>
                <p className="text-2xl font-bold text-accent">
                  ${totalCost}
                  <span className="text-sm text-muted font-normal">/mo</span>
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4 text-center">
                <p className="text-xs text-muted mb-1">Budget Remaining</p>
                <p
                  className={`text-2xl font-bold ${
                    budgetRemaining >= 0 ? "text-success" : "text-danger"
                  }`}
                >
                  {budgetRemaining >= 0 ? `$${budgetRemaining}` : `-$${Math.abs(budgetRemaining)}`}
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4 text-center">
                <p className="text-xs text-muted mb-1">Tools</p>
                <p className="text-2xl font-bold">
                  {recommendations.length}
                </p>
              </div>
            </div>

            {/* Tool cards */}
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div
                  key={rec.tool.slug}
                  className="bg-surface rounded-xl border border-border p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-1">
                        {rec.category.name}
                      </p>
                      <h3 className="text-lg font-bold">{rec.tool.name}</h3>
                      <p className="text-sm text-muted mt-1">
                        {rec.tool.tagline}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xl font-bold text-accent">
                        {rec.monthlyPrice === 0
                          ? "Free"
                          : `$${rec.monthlyPrice}/mo`}
                      </p>
                      {rec.tool.freeTier && rec.monthlyPrice > 0 && (
                        <p className="text-xs text-success mt-0.5">
                          Free tier available
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Why it fits */}
                  <div className="bg-accent-light rounded-lg px-3.5 py-2.5 mb-4">
                    <p className="text-xs font-medium text-accent">
                      Why this fits: {rec.reason}
                    </p>
                  </div>

                  {/* Score bars */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {(
                      [
                        ["Value", rec.tool.scores.value],
                        ["Ease", rec.tool.scores.ease],
                        ["Power", rec.tool.scores.power],
                      ] as const
                    ).map(([label, val]) => (
                      <div key={label}>
                        <div className="flex justify-between text-xs text-muted mb-1">
                          <span>{label}</span>
                          <span className="font-mono">{val}/10</span>
                        </div>
                        <div className="h-1.5 bg-surface-alt rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent rounded-full transition-all"
                            style={{ width: `${val * 10}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Upgrade triggers */}
                  {rec.upgradeTriggers.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-warning mb-1.5">
                        Upgrade triggers
                      </p>
                      <ul className="space-y-1">
                        {rec.upgradeTriggers.map((t, i) => (
                          <li
                            key={i}
                            className="text-xs text-muted flex items-start gap-1.5"
                          >
                            <span className="text-warning mt-0.5">&#9650;</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Hidden costs */}
                  {rec.hiddenCosts.length > 0 && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-danger mb-1.5">
                        Watch out for
                      </p>
                      <ul className="space-y-1">
                        {rec.hiddenCosts.map((c, i) => (
                          <li
                            key={i}
                            className="text-xs text-muted flex items-start gap-1.5"
                          >
                            <span className="text-danger mt-0.5">!</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Link to detail page */}
                  <Link
                    href={`/tools/${rec.tool.slug}`}
                    className="inline-flex items-center text-xs font-medium text-accent hover:underline"
                  >
                    Full review &amp; pricing details &rarr;
                  </Link>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 justify-center pt-4 border-t border-border">
              <button
                onClick={handleBack}
                className="px-5 py-2.5 text-sm font-medium border border-border text-foreground rounded-lg hover:bg-surface transition-colors"
              >
                &larr; Edit Inputs
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
              >
                Save &amp; Share
              </button>
            </div>
          </div>
        )}

        {/* ═══════ STEP 3: Save & Share ═══════ */}
        {step === 3 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-bold text-center mb-4">
              Save &amp; Share Your Stack
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              <button
                onClick={handleSave}
                className="flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-surface hover:border-accent transition-colors"
              >
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {saved ? "Saved!" : "Save This Stack"}
                </span>
                <span className="text-xs text-muted">
                  Stores locally in your browser
                </span>
              </button>

              <button
                onClick={handleShare}
                className="flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-surface hover:border-accent transition-colors"
              >
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.102 1.101"
                  />
                </svg>
                <span className="text-sm font-medium">
                  {copied ? "Link Copied!" : "Share This Stack"}
                </span>
                <span className="text-xs text-muted">
                  Copy a shareable link
                </span>
              </button>

              <button
                onClick={handlePrint}
                className="flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-surface hover:border-accent transition-colors"
              >
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">Download as PDF</span>
                <span className="text-xs text-muted">
                  Print-friendly view
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
