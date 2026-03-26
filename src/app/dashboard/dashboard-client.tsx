"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  tools as allTools,
  getToolBySlug,
  getAlternatives,
  type Tool,
  type PricingPlan,
} from "@/data/tools";
import ProGate, { ProBadge } from "@/components/ProGate";

/* ── Types ── */

interface DashboardTool {
  slug: string;
  planName: string;
  teamSize: number;
  monthlySpend: number;
}

interface DashboardData {
  tools: DashboardTool[];
  budget: number;
  lastUpdated: string;
  /** Monthly snapshots: { month: "2026-03", total: 450 } */
  history: { month: string; total: number }[];
}

const STORAGE_KEY = "sasanova_dashboard";

function getEmptyData(): DashboardData {
  return { tools: [], budget: 0, lastUpdated: new Date().toISOString(), history: [] };
}

function loadData(): DashboardData {
  if (typeof window === "undefined") return getEmptyData();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getEmptyData();
    const parsed = JSON.parse(raw) as DashboardData;
    // Ensure history array exists (backwards compat)
    if (!parsed.history) parsed.history = [];
    return parsed;
  } catch {
    return getEmptyData();
  }
}

function saveData(data: DashboardData) {
  data.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getCurrentMonth(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

/* ── Helpers ── */

function getPlan(tool: Tool, planName: string): PricingPlan | undefined {
  return tool.pricing.find((p) => p.name === planName);
}

function computeMonthlyCost(plan: PricingPlan, teamSize: number): number {
  if (plan.priceMonthly === null) return 0;
  if (plan.billingModel === "per_seat") return plan.priceMonthly * teamSize;
  return plan.priceMonthly;
}

function computeAnnualCost(plan: PricingPlan, teamSize: number): number {
  if (plan.priceAnnual === null) return 0;
  if (plan.billingModel === "per_seat") return plan.priceAnnual * teamSize;
  return plan.priceAnnual;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

/* ── Optimization engine ── */

interface OptimizationAlert {
  type: "cheaper_alternative" | "free_tier" | "suggestion";
  message: string;
  saving: number;
}

function computeOptimizations(stack: DashboardTool[]): OptimizationAlert[] {
  const alerts: OptimizationAlert[] = [];

  for (const entry of stack) {
    const tool = getToolBySlug(entry.slug);
    if (!tool) continue;
    const currentPlan = getPlan(tool, entry.planName);
    if (!currentPlan) continue;
    const currentCost = computeMonthlyCost(currentPlan, entry.teamSize);

    // Check if free tier covers them
    if (tool.freeTier && currentCost > 0) {
      const freePlan = tool.pricing.find((p) => p.priceMonthly === 0);
      if (freePlan) {
        alerts.push({
          type: "free_tier",
          message: `Your ${tool.name} free tier (${freePlan.limits}) might cover your current usage`,
          saving: currentCost,
        });
      }
    }

    // Check cheaper alternatives
    const alts = getAlternatives(tool);
    for (const alt of alts) {
      // Find the cheapest paid plan that exists on the alternative
      const altPlans = alt.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly >= 0);
      for (const altPlan of altPlans) {
        const altCost = computeMonthlyCost(altPlan, entry.teamSize);
        if (altCost < currentCost) {
          const saving = currentCost - altCost;
          alerts.push({
            type: "cheaper_alternative",
            message: `Save $${fmt(saving)}/mo by switching ${tool.name} to ${alt.name} (${altPlan.name} plan)`,
            saving,
          });
          break; // only show best alternative per tool
        }
      }
    }
  }

  // Sort by highest saving first
  alerts.sort((a, b) => b.saving - a.saving);
  return alerts;
}

/* ════════════════════════════════════════════════════════════════
   DASHBOARD PAGE
   ════════════════════════════════════════════════════════════════ */

export default function DashboardClient() {
  const [data, setData] = useState<DashboardData>(getEmptyData());
  const [mounted, setMounted] = useState(false);

  // Add-tool modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [teamSize, setTeamSize] = useState(1);

  // Budget editing
  const [editingBudget, setEditingBudget] = useState(false);
  const [budgetInput, setBudgetInput] = useState("");

  useEffect(() => {
    setData(loadData());
    setMounted(true);
  }, []);

  // Persist history snapshot whenever tools change
  useEffect(() => {
    if (!mounted) return;
    const month = getCurrentMonth();
    const total = data.tools.reduce((sum, t) => sum + t.monthlySpend, 0);
    const existing = data.history.findIndex((h) => h.month === month);
    const updatedHistory = [...data.history];
    if (existing >= 0) {
      updatedHistory[existing] = { month, total };
    } else {
      updatedHistory.push({ month, total });
    }
    // Keep last 12 months
    const trimmed = updatedHistory.slice(-12);
    if (JSON.stringify(trimmed) !== JSON.stringify(data.history)) {
      const next = { ...data, history: trimmed };
      saveData(next);
      setData(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.tools, mounted]);

  const persist = useCallback(
    (next: DashboardData) => {
      saveData(next);
      setData(next);
    },
    []
  );

  /* ── Derived values ── */
  const totalMonthly = useMemo(
    () => data.tools.reduce((sum, t) => sum + t.monthlySpend, 0),
    [data.tools]
  );

  const totalAnnual = useMemo(() => {
    return data.tools.reduce((sum, entry) => {
      const tool = getToolBySlug(entry.slug);
      if (!tool) return sum;
      const plan = getPlan(tool, entry.planName);
      if (!plan) return sum + entry.monthlySpend * 12;
      return sum + computeAnnualCost(plan, entry.teamSize);
    }, 0);
  }, [data.tools]);

  const optimizations = useMemo(() => computeOptimizations(data.tools), [data.tools]);
  const potentialSavings = useMemo(
    () => optimizations.reduce((sum, o) => sum + o.saving, 0),
    [optimizations]
  );

  const budgetPct = data.budget > 0 ? Math.round((totalMonthly / data.budget) * 100) : 0;
  const overBudget = data.budget > 0 && totalMonthly > data.budget;

  /* ── Add tool handler ── */
  const handleAddTool = () => {
    if (!selectedTool || !selectedPlan) return;
    const plan = getPlan(selectedTool, selectedPlan);
    if (!plan) return;
    const monthlySpend = computeMonthlyCost(plan, teamSize);
    const entry: DashboardTool = {
      slug: selectedTool.slug,
      planName: selectedPlan,
      teamSize,
      monthlySpend,
    };
    persist({ ...data, tools: [...data.tools, entry] });
    setShowAddModal(false);
    setSelectedTool(null);
    setSelectedPlan("");
    setTeamSize(1);
    setSearchQuery("");
  };

  const handleRemoveTool = (index: number) => {
    const next = data.tools.filter((_, i) => i !== index);
    persist({ ...data, tools: next });
  };

  const handleSaveBudget = () => {
    const val = parseFloat(budgetInput);
    if (!isNaN(val) && val >= 0) {
      persist({ ...data, budget: val });
    }
    setEditingBudget(false);
  };

  /* ── Filtered tool search ── */
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return allTools.slice(0, 20);
    const q = searchQuery.toLowerCase();
    return allTools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.slug.includes(q) ||
        t.categorySlug.includes(q)
    ).slice(0, 20);
  }, [searchQuery]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Your SaaS Dashboard
        </h1>
        <p className="text-muted text-sm">
          Track spending, set budgets, and find savings across your tool stack.
        </p>
      </div>

      {/* ═══ Spend summary cards ═══ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <SummaryCard label="Monthly Spend" value={`$${fmt(totalMonthly)}`} accent />
        <SummaryCard label="Annual Spend" value={`$${fmt(totalAnnual)}`} />
        <SummaryCard label="Tools in Stack" value={String(data.tools.length)} />
        <SummaryCard
          label="Potential Savings"
          value={potentialSavings > 0 ? `$${fmt(potentialSavings)}/mo` : "--"}
          success={potentialSavings > 0}
        />
      </div>

      {/* ═══ SECTION 1: Your Stack ═══ */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Your Stack</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
          >
            + Add Tool
          </button>
        </div>

        {data.tools.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface p-8 text-center">
            <p className="text-muted mb-3">No tools added yet.</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="text-accent font-semibold hover:underline"
            >
              Add your first tool to start tracking
            </button>
          </div>
        ) : (
          <div className="grid gap-3">
            {data.tools.map((entry, i) => {
              const tool = getToolBySlug(entry.slug);
              const plan = tool ? getPlan(tool, entry.planName) : undefined;
              const annualCost = plan
                ? computeAnnualCost(plan, entry.teamSize)
                : entry.monthlySpend * 12;
              return (
                <div
                  key={`${entry.slug}-${i}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-surface p-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold truncate">
                        {tool?.name ?? entry.slug}
                      </span>
                      <span className="text-xs text-muted bg-surface-alt px-2 py-0.5 rounded">
                        {entry.planName}
                      </span>
                      {entry.teamSize > 1 && (
                        <span className="text-xs text-muted">
                          {entry.teamSize} seats
                        </span>
                      )}
                    </div>
                    <div className="flex gap-4 text-sm text-muted">
                      <span>
                        <span className="font-mono text-foreground">
                          ${fmt(entry.monthlySpend)}
                        </span>
                        /mo
                      </span>
                      <span>
                        <span className="font-mono text-foreground">
                          ${fmt(annualCost)}
                        </span>
                        /yr
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveTool(i)}
                    className="ml-3 px-3 py-1.5 text-xs font-medium text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ═══ SECTION 2: Budget Overview ═══ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Budget Overview</h2>
        <div className="rounded-xl border border-border bg-surface p-6">
          {/* Budget input */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-sm text-muted">Monthly Budget:</span>
            {editingBudget ? (
              <div className="flex items-center gap-2">
                <span className="text-muted">$</span>
                <input
                  type="number"
                  min={0}
                  value={budgetInput}
                  onChange={(e) => setBudgetInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveBudget()}
                  className="w-28 px-3 py-1.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
                  autoFocus
                />
                <button
                  onClick={handleSaveBudget}
                  className="px-3 py-1.5 text-xs font-semibold bg-accent text-white rounded-lg"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingBudget(false)}
                  className="px-3 py-1.5 text-xs text-muted hover:text-foreground"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setBudgetInput(String(data.budget || ""));
                  setEditingBudget(true);
                }}
                className="text-sm font-semibold text-accent hover:underline"
              >
                {data.budget > 0 ? `$${fmt(data.budget)}/mo` : "Set Budget"}
              </button>
            )}
          </div>

          {/* Budget bar */}
          {data.budget > 0 && (
            <>
              <div className="w-full h-4 bg-surface-alt rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    overBudget ? "bg-red-500" : "bg-success"
                  }`}
                  style={{ width: `${Math.min(budgetPct, 100)}%` }}
                />
              </div>
              <p className="text-sm">
                {overBudget ? (
                  <span className="text-red-400 font-semibold">
                    Over budget! You&apos;re spending ${fmt(totalMonthly)} of your $
                    {fmt(data.budget)} budget ({budgetPct}%)
                  </span>
                ) : (
                  <span className="text-muted">
                    You&apos;re spending{" "}
                    <span className="text-foreground font-semibold">
                      ${fmt(totalMonthly)}
                    </span>{" "}
                    of your{" "}
                    <span className="text-foreground font-semibold">
                      ${fmt(data.budget)}
                    </span>{" "}
                    budget ({budgetPct}% utilization)
                  </span>
                )}
              </p>
            </>
          )}

          {data.budget === 0 && data.tools.length > 0 && (
            <p className="text-sm text-muted">
              Set a monthly budget to track your spending against a target.
            </p>
          )}
        </div>
      </section>

      {/* ═══ SECTION 3: Optimization Alerts ═══ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Optimization Alerts</h2>
        {data.tools.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface p-6 text-center text-muted text-sm">
            Add tools to your stack to see optimization suggestions.
          </div>
        ) : optimizations.length === 0 ? (
          <div className="rounded-xl border border-success/30 bg-success/5 p-6 text-center">
            <p className="text-success font-semibold">Looking good!</p>
            <p className="text-sm text-muted mt-1">
              No obvious savings found for your current stack.
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {optimizations.map((alert, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4"
              >
                <span className="mt-0.5 flex-shrink-0">
                  {alert.type === "free_tier" ? (
                    <svg
                      className="w-5 h-5 text-success"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </span>
                <div>
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted mt-0.5">
                    Potential saving: ${fmt(alert.saving)}/mo
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ═══ SECTION 4: Quick Actions ═══ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <QuickAction href="/audit" label="Run Full Audit" icon="clipboard" />
          <QuickAction href="/changelog" label="Check Price Changes" icon="history" />
          <QuickAction href="/alerts" label="Watch for Changes" icon="bell" />
          <QuickAction href="/playground" label="Compare Tools" icon="columns" />
        </div>
      </section>

      {/* ═══ SECTION 5: Stack History (Pro) ═══ */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-bold">Stack History</h2>
          <ProBadge />
        </div>
        <ProGate feature="Track your spending over time with monthly snapshots">
          <StackHistory history={data.history} currentTotal={totalMonthly} />
        </ProGate>
      </section>

      {/* ═══ Add Tool Modal ═══ */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold">Add Tool to Stack</h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setSelectedTool(null);
                  setSelectedPlan("");
                  setSearchQuery("");
                }}
                className="text-muted hover:text-foreground"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Step 1: Search */}
            {!selectedTool && (
              <>
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40 mb-3"
                  autoFocus
                />
                <div className="grid gap-1 max-h-60 overflow-y-auto">
                  {filteredTools.map((t) => (
                    <button
                      key={t.slug}
                      onClick={() => {
                        setSelectedTool(t);
                        // Default to highlighted plan or first plan
                        const def =
                          t.pricing.find((p) => p.highlighted)?.name ??
                          t.pricing[0]?.name ??
                          "";
                        setSelectedPlan(def);
                      }}
                      className="text-left px-3 py-2 rounded-lg hover:bg-surface transition-colors text-sm"
                    >
                      <span className="font-medium">{t.name}</span>
                      <span className="text-muted ml-2 text-xs">{t.categorySlug}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 2: Pick plan */}
            {selectedTool && (
              <>
                <div className="mb-4">
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="text-xs text-accent hover:underline mb-2 inline-block"
                  >
                    &larr; Back to search
                  </button>
                  <p className="font-semibold">{selectedTool.name}</p>
                </div>

                {/* Plan selection */}
                <label className="block text-xs text-muted mb-1">Plan</label>
                <div className="grid gap-2 mb-4">
                  {selectedTool.pricing.map((plan) => (
                    <button
                      key={plan.name}
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`text-left px-3 py-2 rounded-lg border text-sm transition-colors ${
                        selectedPlan === plan.name
                          ? "border-accent bg-accent/10"
                          : "border-border hover:bg-surface"
                      }`}
                    >
                      <span className="font-medium">{plan.name}</span>
                      <span className="text-muted ml-2">
                        {plan.priceMonthly === 0
                          ? "Free"
                          : plan.priceMonthly === null
                          ? "Custom"
                          : `$${plan.priceMonthly}/mo`}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Team size */}
                {selectedTool.pricing.find((p) => p.name === selectedPlan)
                  ?.billingModel === "per_seat" && (
                  <div className="mb-4">
                    <label className="block text-xs text-muted mb-1">
                      Team Size
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={teamSize}
                      onChange={(e) =>
                        setTeamSize(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-24 px-3 py-1.5 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </div>
                )}

                {/* Preview cost */}
                {(() => {
                  const plan = getPlan(selectedTool, selectedPlan);
                  if (!plan) return null;
                  const cost = computeMonthlyCost(plan, teamSize);
                  return (
                    <p className="text-sm text-muted mb-5">
                      Estimated cost:{" "}
                      <span className="font-semibold text-foreground">
                        ${fmt(cost)}/mo
                      </span>
                    </p>
                  );
                })()}

                <button
                  onClick={handleAddTool}
                  className="w-full py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
                >
                  Add to Stack
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Summary Card ── */

function SummaryCard({
  label,
  value,
  accent,
  success,
}: {
  label: string;
  value: string;
  accent?: boolean;
  success?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="text-xs text-muted uppercase tracking-wider mb-1">{label}</p>
      <p
        className={`text-xl font-extrabold ${
          accent ? "text-accent" : success ? "text-success" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

/* ── Quick Action ── */

const iconPaths: Record<string, string> = {
  clipboard: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  history: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  columns: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7",
};

function QuickAction({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 hover:bg-surface-alt transition-colors text-center"
    >
      <svg
        className="w-6 h-6 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={iconPaths[icon] ?? iconPaths.clipboard}
        />
      </svg>
      <span className="text-xs font-semibold">{label}</span>
    </Link>
  );
}

/* ── Stack History (Pro section) ── */

function StackHistory({
  history,
  currentTotal,
}: {
  history: { month: string; total: number }[];
  currentTotal: number;
}) {
  if (history.length < 2) {
    return (
      <div className="rounded-xl border border-border bg-surface p-6 text-center text-muted text-sm">
        Stack history will appear after your second month of tracking.
        {history.length === 1 && (
          <p className="mt-2">
            Current month: <span className="text-foreground font-semibold">${fmt(currentTotal)}/mo</span>
          </p>
        )}
      </div>
    );
  }

  const maxTotal = Math.max(...history.map((h) => h.total), 1);
  const prevMonth = history[history.length - 2];
  const diff = currentTotal - prevMonth.total;

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      {/* Trend message */}
      <div className="mb-5">
        {diff > 0 ? (
          <p className="text-sm">
            <span className="text-red-400 font-semibold">+${fmt(diff)}/mo</span>{" "}
            <span className="text-muted">vs last month</span>
          </p>
        ) : diff < 0 ? (
          <p className="text-sm">
            <span className="text-success font-semibold">-${fmt(Math.abs(diff))}/mo</span>{" "}
            <span className="text-muted">vs last month</span>
          </p>
        ) : (
          <p className="text-sm text-muted">No change from last month</p>
        )}
      </div>

      {/* Simple bar chart */}
      <div className="flex items-end gap-2 h-32">
        {history.map((h) => (
          <div key={h.month} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-accent/30 rounded-t transition-all"
              style={{
                height: `${Math.max((h.total / maxTotal) * 100, 4)}%`,
              }}
            />
            <span className="text-[10px] text-muted">{h.month.slice(5)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
