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
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const calculations = useMemo(() => {
    return plans.map((plan) => {
      if (plan.priceMonthly === null) {
        return { plan, monthlyCost: null, annualCost: null, perUser: null, annualSavings: null, monthlyIfMonthly: null };
      }

      let monthlyCost: number;
      let annualTotal: number | null = null;

      switch (plan.billingModel) {
        case "per_seat":
          monthlyCost = plan.priceMonthly * teamSize;
          annualTotal = plan.priceAnnual !== null ? plan.priceAnnual * teamSize : null;
          break;
        case "flat":
          monthlyCost = plan.priceMonthly;
          annualTotal = plan.priceAnnual;
          break;
        case "usage":
          monthlyCost = plan.priceMonthly * Math.max(1, Math.ceil(teamSize / 5));
          annualTotal = plan.priceAnnual !== null ? plan.priceAnnual * Math.max(1, Math.ceil(teamSize / 5)) : null;
          break;
        default:
          monthlyCost = plan.priceMonthly;
          annualTotal = plan.priceAnnual;
      }

      const monthlyIfMonthly = monthlyCost;
      const effectiveMonthly = annual && annualTotal !== null ? annualTotal / 12 : monthlyCost;
      const perUser = effectiveMonthly > 0 && teamSize > 0 ? effectiveMonthly / teamSize : null;

      let annualSavings: number | null = null;
      if (monthlyCost > 0 && annualTotal !== null) {
        annualSavings = monthlyCost * 12 - annualTotal;
      }

      return { plan, monthlyCost: effectiveMonthly, annualCost: annualTotal, perUser, annualSavings, monthlyIfMonthly };
    });
  }, [plans, teamSize, annual]);

  // Recommend best plan
  const recommended = useMemo(() => {
    const viable = calculations.filter((c) => c.monthlyCost !== null && c.monthlyCost >= 0);
    if (viable.length === 0) return null;
    if (teamSize <= 3) {
      const sorted = [...viable].sort((a, b) => (a.monthlyCost ?? 0) - (b.monthlyCost ?? 0));
      return sorted[0]?.plan.name ?? null;
    }
    const paid = viable.filter((c) => c.monthlyCost !== null && c.monthlyCost > 0);
    if (paid.length === 0) return viable[0]?.plan.name ?? null;
    const best = [...paid].sort((a, b) => (a.perUser ?? Infinity) - (b.perUser ?? Infinity));
    return best[0]?.plan.name ?? null;
  }, [calculations, teamSize]);

  const active = selectedPlan ?? recommended;

  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <h3 className="text-lg font-bold text-foreground mb-1">Pricing Calculator</h3>
      <p className="text-xs text-muted mb-6">
        Estimate your monthly cost for {toolName}. Click a plan to select it.
      </p>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <div className="flex-1">
          <label className="block text-sm font-medium text-foreground mb-2">
            Team Size: <span className="text-accent font-bold">{teamSize}</span> {teamSize === 1 ? "person" : "people"}
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

        <div className="shrink-0">
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
              Annual {annual ? "" : "(save more)"}
            </button>
          </div>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {calculations.map(({ plan, monthlyCost, perUser, annualSavings, monthlyIfMonthly }) => {
          const isActive = plan.name === active;
          const isRecommended = plan.name === recommended;
          return (
            <button
              key={plan.name}
              onClick={() => setSelectedPlan(plan.name)}
              className={`relative text-left border rounded-xl p-4 transition-all duration-200 cursor-pointer ${
                isActive
                  ? "border-accent bg-accent-light/30 shadow-md shadow-accent/10 -translate-y-1"
                  : "border-border bg-background hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-sm"
              }`}
            >
              {isRecommended && (
                <span className="absolute -top-2.5 left-3 text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full border border-accent/20">
                  Recommended
                </span>
              )}
              <p className={`text-sm font-semibold mb-3 ${isActive ? "text-accent" : "text-foreground"}`}>{plan.name}</p>

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

                  {/* Show monthly price crossed out when on annual */}
                  {annual && monthlyIfMonthly !== null && monthlyIfMonthly > 0 && monthlyCost > 0 && monthlyCost < monthlyIfMonthly && (
                    <p className="text-xs text-muted mt-0.5">
                      <span className="line-through">${monthlyIfMonthly.toLocaleString()}/mo</span>
                      <span className="text-success ml-1">
                        {Math.round(((monthlyIfMonthly - monthlyCost) / monthlyIfMonthly) * 100)}% off
                      </span>
                    </p>
                  )}

                  {perUser !== null && monthlyCost > 0 && teamSize > 1 && (
                    <p className="text-xs text-muted mt-1">
                      ${perUser.toFixed(2)} per user/mo
                    </p>
                  )}

                  {annualSavings !== null && annualSavings > 0 && !annual && (
                    <p className="text-xs text-success mt-2 font-medium">
                      Save ${annualSavings.toLocaleString()}/yr with annual billing
                    </p>
                  )}
                </>
              )}

              <p className="text-[10px] text-muted mt-3 capitalize">{plan.billingModel} billing</p>
              {plan.limits && (
                <p className="text-[10px] text-muted mt-1 line-clamp-2">{plan.limits}</p>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-[10px] text-muted mt-4">
        Estimates based on published pricing. Usage-based plans are approximated. Verify with vendor for exact quotes.
      </p>
    </div>
  );
}
