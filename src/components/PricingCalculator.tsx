"use client";

import { useState, useMemo } from "react";

interface PricingPlan {
  name: string;
  priceMonthly: number | null;
  priceAnnual: number | null;
  billingModel: "per_seat" | "flat" | "usage" | "custom";
  limits: string;
  highlighted?: boolean;
}

interface PricingCalculatorProps {
  plans: PricingPlan[];
  toolName: string;
}

export default function PricingCalculator({ plans, toolName }: PricingCalculatorProps) {
  const [teamSize, setTeamSize] = useState(5);
  const [annual, setAnnual] = useState(false);

  const calculations = useMemo(() => {
    return plans.map((plan) => {
      let monthlyCost: number | null = null;
      let annualCost: number | null = null;

      if (plan.priceMonthly === null) {
        // Custom pricing
        return { plan, monthlyCost: null, annualCost: null, perUser: null, annualSavings: null };
      }

      switch (plan.billingModel) {
        case "per_seat":
          monthlyCost = plan.priceMonthly * teamSize;
          annualCost = plan.priceAnnual !== null ? plan.priceAnnual * teamSize : null;
          break;
        case "flat":
          monthlyCost = plan.priceMonthly;
          annualCost = plan.priceAnnual;
          break;
        case "usage":
          // Usage-based: show base price, scale linearly as rough estimate
          monthlyCost = plan.priceMonthly * Math.max(1, Math.ceil(teamSize / 5));
          annualCost = plan.priceAnnual !== null ? plan.priceAnnual * Math.max(1, Math.ceil(teamSize / 5)) : null;
          break;
        default:
          monthlyCost = plan.priceMonthly;
          annualCost = plan.priceAnnual;
      }

      const effectiveMonthly = annual && annualCost !== null ? annualCost / 12 : monthlyCost;
      const perUser = effectiveMonthly !== null && teamSize > 0 ? effectiveMonthly / teamSize : null;

      let annualSavings: number | null = null;
      if (monthlyCost !== null && monthlyCost > 0 && annualCost !== null) {
        annualSavings = monthlyCost * 12 - annualCost;
      }

      return { plan, monthlyCost: effectiveMonthly, annualCost, perUser, annualSavings };
    });
  }, [plans, teamSize, annual]);

  // Recommend the best plan based on team size
  const recommended = useMemo(() => {
    const viable = calculations.filter((c) => c.monthlyCost !== null && c.monthlyCost >= 0);
    if (viable.length === 0) return null;

    // For small teams (1-5) prefer the cheapest non-free plan, or free if that's all there is
    // For larger teams, prefer plans with best per-user cost that aren't free tier
    if (teamSize <= 3) {
      const cheapest = viable
        .filter((c) => c.monthlyCost !== null && c.monthlyCost >= 0)
        .sort((a, b) => (a.monthlyCost ?? 0) - (b.monthlyCost ?? 0));
      return cheapest[0]?.plan.name ?? null;
    }

    const paid = viable.filter((c) => c.monthlyCost !== null && c.monthlyCost > 0);
    if (paid.length === 0) return viable[0]?.plan.name ?? null;

    // Best per-user value among paid plans
    const best = paid.sort((a, b) => (a.perUser ?? Infinity) - (b.perUser ?? Infinity));
    return best[0]?.plan.name ?? null;
  }, [calculations, teamSize]);

  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-foreground mb-1">Pricing Calculator</h3>
      <p className="text-xs text-muted mb-6">
        Estimate your monthly cost for {toolName} based on team size and billing cycle.
      </p>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        {/* Team size */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">
            Team Size: <span className="text-accent font-bold">{teamSize}</span>
          </label>
          <input
            type="range"
            min={1}
            max={100}
            value={teamSize}
            onChange={(e) => setTeamSize(Number(e.target.value))}
            className="w-full h-2 bg-surface-alt rounded-full appearance-none cursor-pointer accent-accent"
          />
          <div className="flex justify-between text-[10px] text-muted mt-1">
            <span>1</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="shrink-0">
          <label className="block text-sm font-medium text-foreground mb-2">Billing Cycle</label>
          <div className="flex items-center gap-2 bg-surface-alt border border-border rounded-lg p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                !annual ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                annual ? "bg-accent text-white" : "text-muted hover:text-foreground"
              }`}
            >
              Annual
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {calculations.map(({ plan, monthlyCost, perUser, annualSavings }) => {
          const isRecommended = plan.name === recommended;
          return (
            <div
              key={plan.name}
              className={`relative border rounded-xl p-4 transition-colors ${
                isRecommended
                  ? "border-accent bg-accent-light/30"
                  : "border-border bg-background"
              }`}
            >
              {isRecommended && (
                <span className="absolute -top-2.5 left-3 text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full border border-accent/20">
                  Recommended
                </span>
              )}
              <p className="text-sm font-semibold text-foreground mb-3">{plan.name}</p>

              {monthlyCost === null ? (
                <p className="text-lg font-bold text-muted">Contact Sales</p>
              ) : (
                <>
                  <p className="text-2xl font-extrabold text-foreground">
                    {monthlyCost === 0 ? (
                      <span className="text-success">Free</span>
                    ) : (
                      <>
                        ${monthlyCost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                        <span className="text-sm font-normal text-muted">/mo</span>
                      </>
                    )}
                  </p>

                  {perUser !== null && monthlyCost > 0 && (
                    <p className="text-xs text-muted mt-1">
                      ${perUser.toFixed(2)} per user/mo
                    </p>
                  )}

                  {annualSavings !== null && annualSavings > 0 && !annual && (
                    <p className="text-xs text-success mt-2">
                      Save ${annualSavings.toLocaleString()} /yr by switching to annual
                    </p>
                  )}
                </>
              )}

              <p className="text-[10px] text-muted mt-2 capitalize">{plan.billingModel} billing</p>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-muted mt-4">
        Estimates are based on published pricing. Usage-based plans are approximated.
        Always verify with the vendor for exact quotes.
      </p>
    </div>
  );
}
