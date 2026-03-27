"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  tools as allTools,
  getToolBySlug,
  getToolsByCategory,
  getOverallScore,
  type Tool,
  type PricingPlan,
} from "@/data/tools";

/* ── Changelog data (same shape as /changelog page) ── */

interface PricingChange {
  date: string;
  tool: string;
  slug: string;
  category: string;
  change: string;
  impact: "critical" | "high" | "medium" | "low" | "positive";
  oldPrice?: number;
  newPrice?: number;
  percentChange?: number;
}

const pricingChanges: PricingChange[] = [
  { date: "2026-03", tool: "Bardeen", slug: "bardeen", category: "automation", change: "Professional plan increased from $10/mo to $99/mo", impact: "critical", oldPrice: 10, newPrice: 99, percentChange: 890 },
  { date: "2026-03", tool: "Ghost", slug: "ghost", category: "newsletter-platforms", change: "Plans restructured: Starter $9 to $18, Creator to Publisher at $29 to $35", impact: "high", oldPrice: 9, newPrice: 18, percentChange: 100 },
  { date: "2026-01", tool: "Surfer SEO", slug: "surfer-seo", category: "seo-tools", change: "Essential $89 to $99, Scale $129 to $219", impact: "high", oldPrice: 89, newPrice: 99, percentChange: 11 },
  { date: "2026-01", tool: "Close CRM", slug: "close-crm", category: "crm", change: "Plans restructured: Startup to Essentials, Professional to Growth", impact: "medium" },
  { date: "2026-01", tool: "Wix", slug: "wix", category: "website-builders", change: "Prices reduced across all tiers", impact: "positive" },
  { date: "2025-12", tool: "Todoist", slug: "todoist", category: "task-management", change: "Pro increased from $5/mo to $7/mo, Business from $8 to $10", impact: "medium", oldPrice: 5, newPrice: 7, percentChange: 40 },
  { date: "2025-12", tool: "Typeform", slug: "typeform", category: "forms-surveys", change: "Basic $29 to $39, Plus $55 to $79, Business $99 to $129", impact: "high", oldPrice: 29, newPrice: 39, percentChange: 34 },
  { date: "2025-12", tool: "Descript", slug: "descript", category: "video-media", change: "Creator plan reduced from $35/mo to $24/mo", impact: "positive", oldPrice: 35, newPrice: 24, percentChange: -31 },
  { date: "2025-11", tool: "Pipedrive", slug: "pipedrive", category: "crm", change: "Plans rebranded: Essential to Lite, Advanced to Growth", impact: "medium" },
  { date: "2025-10", tool: "SE Ranking", slug: "se-ranking", category: "seo-tools", change: "Major restructuring: Essential to Core at $129/mo (was $65)", impact: "critical", oldPrice: 65, newPrice: 129, percentChange: 98 },
  { date: "2025-09", tool: "Kit (ConvertKit)", slug: "convertkit", category: "email-marketing", change: "Creator plan increased from $33/mo to $39/mo", impact: "medium", oldPrice: 33, newPrice: 39, percentChange: 18 },
  { date: "2025-08", tool: "Salesforce", slug: "salesforce", category: "crm", change: "6% price increase across all tiers", impact: "high", oldPrice: 80, newPrice: 100, percentChange: 25 },
  { date: "2025-07", tool: "Asana", slug: "asana", category: "project-management", change: "Free plan reduced from 10 users to 2 users", impact: "critical" },
  { date: "2025-06", tool: "Mailchimp", slug: "mailchimp", category: "email-marketing", change: "Free tier reduced from 500 contacts to 250 contacts", impact: "high" },
];

/* ── Storage ── */

const MY_STACK_KEY = "sasanova_my_stack";

interface MyStackTool {
  slug: string;
  planName: string;
  teamSize: number;
  monthlyCost: number;
}

interface MyStackData {
  tools: MyStackTool[];
  savedAt: string;
  lastVisit: string;
}

function loadMyStack(): MyStackData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(MY_STACK_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MyStackData;
  } catch {
    return null;
  }
}

function saveLastVisit(data: MyStackData): void {
  data.lastVisit = new Date().toISOString();
  localStorage.setItem(MY_STACK_KEY, JSON.stringify(data));
}

/* ── Helpers ── */

function computeCost(plan: PricingPlan, teamSize: number): number {
  if (plan.priceMonthly === null) return 0;
  return plan.billingModel === "per_seat"
    ? plan.priceMonthly * teamSize
    : plan.priceMonthly;
}

function fmt(n: number): string {
  return "$" + n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function findCheaperAlternative(
  tool: Tool,
  plan: PricingPlan,
  teamSize: number
): { tool: Tool; plan: PricingPlan; monthlyCost: number; monthlySavings: number } | null {
  const currentCost = computeCost(plan, teamSize);
  if (currentCost <= 0) return null;

  const categoryTools = getToolsByCategory(tool.categorySlug);
  let best: { tool: Tool; plan: PricingPlan; monthlyCost: number; monthlySavings: number } | null = null;

  for (const alt of categoryTools) {
    if (alt.slug === tool.slug) continue;
    for (const altPlan of alt.pricing) {
      if (altPlan.priceMonthly === null) continue;
      const altCost = computeCost(altPlan, teamSize);
      const savings = currentCost - altCost;
      const savingsPct = savings / currentCost;
      if (altCost >= currentCost || savingsPct < 0.1) continue;

      const currentPlanIndex = tool.pricing.findIndex((p) => p.name === plan.name);
      const altPlanIndex = alt.pricing.indexOf(altPlan);
      const currentTierRatio = tool.pricing.length > 1 ? currentPlanIndex / (tool.pricing.length - 1) : 0.5;
      const altTierRatio = alt.pricing.length > 1 ? altPlanIndex / (alt.pricing.length - 1) : 0.5;
      if (Math.abs(currentTierRatio - altTierRatio) > 0.4) continue;

      if (!best || savings > best.monthlySavings) {
        best = { tool: alt, plan: altPlan, monthlyCost: altCost, monthlySavings: savings };
      }
    }
  }
  return best;
}

function getNextCheckDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function getTimeSinceLastVisit(lastVisit: string): string {
  const diff = Date.now() - new Date(lastVisit).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  return months === 1 ? "1 month ago" : `${months} months ago`;
}

/* ── Health status ── */

type HealthStatus = "green" | "yellow" | "red";

function getHealthStatus(
  totalSavings: number,
  hasIncrease: boolean,
  optimizationCount: number
): HealthStatus {
  if (hasIncrease || totalSavings > 50) return "red";
  if (optimizationCount > 0) return "yellow";
  return "green";
}

const HEALTH_CONFIG: Record<HealthStatus, { label: string; color: string; bg: string; border: string; icon: string }> = {
  green: { label: "All Optimal", color: "text-success", bg: "bg-success/10", border: "border-success/30", icon: "check-circle" },
  yellow: { label: "Some Opportunities", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30", icon: "alert-triangle" },
  red: { label: "Action Needed", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/30", icon: "alert-circle" },
};

/* ── Component ── */

export default function MyStackClient() {
  const [stackData, setStackData] = useState<MyStackData | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [removingSlug, setRemovingSlug] = useState<string | null>(null);

  useEffect(() => {
    const data = loadMyStack();
    if (data) {
      saveLastVisit(data);
    }
    setStackData(data);
    setLoaded(true);
  }, []);

  /* ── Compute enriched data ── */
  const enrichedTools = useMemo(() => {
    if (!stackData) return [];
    return stackData.tools
      .map((st) => {
        const tool = getToolBySlug(st.slug);
        if (!tool) return null;
        const plan = tool.pricing.find((p) => p.name === st.planName);
        if (!plan) return null;
        const monthlyCost = computeCost(plan, st.teamSize);
        const cheaper = findCheaperAlternative(tool, plan, st.teamSize);
        return {
          stackTool: st,
          tool,
          plan,
          monthlyCost,
          cheaper,
          score: getOverallScore(tool.scores),
        };
      })
      .filter((e): e is NonNullable<typeof e> => e !== null);
  }, [stackData]);

  const totalMonthly = enrichedTools.reduce((sum, e) => sum + e.monthlyCost, 0);
  const totalSavings = enrichedTools.reduce((sum, e) => sum + (e.cheaper?.monthlySavings ?? 0), 0);
  const totalAnnualSavings = totalSavings * 12;
  const optimizationCount = enrichedTools.filter((e) => e.cheaper !== null).length;
  const optimalCount = enrichedTools.filter((e) => e.cheaper === null).length;
  const auditScore = enrichedTools.length > 0 ? Math.round((optimalCount / enrichedTools.length) * 100) : 100;

  /* ── Changes affecting user's tools ── */
  const relevantChanges = useMemo(() => {
    if (!stackData) return [];
    const slugs = new Set(stackData.tools.map((t) => t.slug));
    const lastVisit = stackData.lastVisit ? new Date(stackData.lastVisit) : new Date(0);
    // Show changes from the last 6 months for context
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    return pricingChanges.filter((c) => {
      if (!slugs.has(c.slug)) return false;
      const [year, month] = c.date.split("-").map(Number);
      const changeDate = new Date(year, month - 1, 1);
      return changeDate >= sixMonthsAgo;
    });
  }, [stackData]);

  const hasRecentIncrease = relevantChanges.some((c) => c.impact !== "positive" && c.impact !== "low");
  const healthStatus = getHealthStatus(totalSavings, hasRecentIncrease, optimizationCount);
  const health = HEALTH_CONFIG[healthStatus];

  /* ── Remove tool ── */
  const handleRemoveTool = (slug: string) => {
    if (!stackData) return;
    const updated: MyStackData = {
      ...stackData,
      tools: stackData.tools.filter((t) => t.slug !== slug),
    };
    localStorage.setItem(MY_STACK_KEY, JSON.stringify(updated));
    setStackData(updated);
    setRemovingSlug(null);
  };

  /* ── Loading state ── */
  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted text-sm">Loading your stack...</div>
      </div>
    );
  }

  /* ── Empty state ── */
  if (!stackData || stackData.tools.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Your Software Stack
          </h1>
          <p className="text-muted text-base mb-8 max-w-md mx-auto">
            Run an audit first to save your stack here. This page becomes your personal dashboard
            for tracking costs, changes, and optimization opportunities over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Run Your First Audit
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main dashboard ── */
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Your Software Stack
              </h1>
              <p className="text-sm text-muted mt-1">
                {enrichedTools.length} tool{enrichedTools.length !== 1 ? "s" : ""} tracked
                {stackData.lastVisit && (
                  <span> &middot; Last checked {getTimeSinceLastVisit(stackData.savedAt)}</span>
                )}
              </p>
            </div>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface-alt transition-colors shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Re-Audit Stack
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
        {/* ── Stack Health Check ── */}
        <div className={`rounded-xl border ${health.border} ${health.bg} p-5 flex items-start gap-4`}>
          <div className={`w-12 h-12 rounded-xl ${health.bg} flex items-center justify-center shrink-0`}>
            {healthStatus === "green" && (
              <svg className={`w-6 h-6 ${health.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {healthStatus === "yellow" && (
              <svg className={`w-6 h-6 ${health.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            )}
            {healthStatus === "red" && (
              <svg className={`w-6 h-6 ${health.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className={`text-lg font-bold ${health.color}`}>Stack Health: {health.label}</h2>
            </div>
            <p className="text-sm text-muted">
              {healthStatus === "green" && "All your tools are optimally priced. No action needed right now."}
              {healthStatus === "yellow" && `${optimizationCount} optimization opportunity${optimizationCount !== 1 ? "ies" : "y"} found. You could save ${fmt(totalSavings)}/mo.`}
              {healthStatus === "red" && (
                <>
                  {hasRecentIncrease && "Some of your tools had recent price changes. "}
                  {totalSavings > 0 && `Potential savings of ${fmt(totalSavings)}/mo (${fmt(totalAnnualSavings)}/yr).`}
                </>
              )}
            </p>
          </div>
        </div>

        {/* ── Summary Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-border rounded-xl bg-surface p-4">
            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">Monthly Spend</p>
            <p className="text-2xl font-extrabold text-foreground">{fmt(totalMonthly)}</p>
            <p className="text-xs text-muted mt-1">{fmt(totalMonthly * 12)}/yr</p>
          </div>
          <div className="border border-border rounded-xl bg-surface p-4">
            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">Potential Savings</p>
            <p className={`text-2xl font-extrabold ${totalSavings > 0 ? "text-red-400" : "text-success"}`}>
              {totalSavings > 0 ? fmt(totalSavings) : "$0"}
            </p>
            <p className="text-xs text-muted mt-1">{totalSavings > 0 ? `${fmt(totalAnnualSavings)}/yr` : "No savings found"}</p>
          </div>
          <div className="border border-border rounded-xl bg-surface p-4">
            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">Stack Score</p>
            <p className={`text-2xl font-extrabold ${auditScore >= 80 ? "text-success" : auditScore >= 50 ? "text-yellow-400" : "text-red-400"}`}>
              {auditScore}%
            </p>
            <p className="text-xs text-muted mt-1">{optimalCount}/{enrichedTools.length} optimal</p>
          </div>
          <div className="border border-border rounded-xl bg-surface p-4">
            <p className="text-xs font-medium text-muted uppercase tracking-wider mb-1">Next Check</p>
            <p className="text-sm font-bold text-foreground mt-1">{getNextCheckDate()}</p>
            <p className="text-xs text-muted mt-1">Auto-reminds monthly</p>
          </div>
        </div>

        {/* ── Changes Since Last Visit ── */}
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Changes Since Last Visit
          </h2>

          {relevantChanges.length === 0 ? (
            <div className="border border-border rounded-xl bg-surface p-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-muted">No pricing changes detected for your tools. Everything looks stable.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {relevantChanges.map((change, i) => {
                const impactColors: Record<string, string> = {
                  critical: "border-red-500/30 bg-red-500/5",
                  high: "border-orange-400/30 bg-orange-400/5",
                  medium: "border-yellow-400/30 bg-yellow-400/5",
                  low: "border-border bg-surface",
                  positive: "border-success/30 bg-success/5",
                };
                const impactBadgeColors: Record<string, string> = {
                  critical: "text-red-400 bg-red-400/10",
                  high: "text-orange-400 bg-orange-400/10",
                  medium: "text-yellow-400 bg-yellow-400/10",
                  low: "text-muted bg-surface-alt",
                  positive: "text-success bg-success/10",
                };
                return (
                  <div key={i} className={`border rounded-xl p-4 ${impactColors[change.impact]}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Link href={`/tools/${change.slug}`} className="text-sm font-bold text-foreground hover:text-accent transition-colors">
                            {change.tool}
                          </Link>
                          <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-full ${impactBadgeColors[change.impact]}`}>
                            {change.impact === "positive" ? "Decrease" : change.impact}
                          </span>
                        </div>
                        <p className="text-sm text-muted">{change.change}</p>
                        {change.oldPrice !== undefined && change.newPrice !== undefined && (
                          <p className="text-xs text-muted/70 mt-1">
                            Was ${change.oldPrice}/mo &rarr; Now ${change.newPrice}/mo
                            {change.percentChange !== undefined && (
                              <span className={change.percentChange > 0 ? "text-red-400" : "text-success"}>
                                {" "}({change.percentChange > 0 ? "+" : ""}{change.percentChange}%)
                              </span>
                            )}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-muted shrink-0">{change.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ── Your Tools ── */}
        <section>
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
            </svg>
            Your Tools
          </h2>

          <div className="space-y-3">
            {enrichedTools.map((et) => (
              <div key={et.tool.slug} className="border border-border rounded-xl bg-surface overflow-hidden">
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Link href={`/tools/${et.tool.slug}`} className="text-sm font-bold text-foreground hover:text-accent transition-colors truncate">
                          {et.tool.name}
                        </Link>
                        <span className="px-2 py-0.5 text-[10px] font-medium text-muted bg-surface-alt rounded-full shrink-0">
                          {et.plan.name}
                        </span>
                        {et.cheaper === null ? (
                          <span className="px-2 py-0.5 text-[10px] font-bold text-success bg-success/10 rounded-full shrink-0">
                            Optimal
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 text-[10px] font-bold text-yellow-400 bg-yellow-400/10 rounded-full shrink-0">
                            Savings Available
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted">
                        <span>{fmt(et.monthlyCost)}/mo</span>
                        {et.stackTool.teamSize > 1 && <span>{et.stackTool.teamSize} seats</span>}
                        <span>Verified {et.tool.lastVerified}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-lg font-extrabold text-foreground">{fmt(et.monthlyCost)}</p>
                      <p className="text-xs text-muted">/month</p>
                    </div>
                  </div>

                  {/* Optimization opportunity */}
                  {et.cheaper && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-muted">
                          Switch to{" "}
                          <Link href={`/tools/${et.cheaper.tool.slug}`} className="font-semibold text-accent hover:underline">
                            {et.cheaper.tool.name} ({et.cheaper.plan.name})
                          </Link>
                          {" "}to save{" "}
                          <span className="font-bold text-success">{fmt(et.cheaper.monthlySavings)}/mo</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Remove tool */}
                {removingSlug === et.tool.slug ? (
                  <div className="px-4 sm:px-5 pb-4 flex items-center gap-2">
                    <span className="text-xs text-muted">Remove from stack?</span>
                    <button
                      onClick={() => handleRemoveTool(et.tool.slug)}
                      className="px-3 py-1 text-xs font-semibold text-red-400 border border-red-400/30 rounded-md hover:bg-red-400/10 transition-colors"
                    >
                      Yes, Remove
                    </button>
                    <button
                      onClick={() => setRemovingSlug(null)}
                      className="px-3 py-1 text-xs font-semibold text-muted border border-border rounded-md hover:bg-surface-alt transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setRemovingSlug(et.tool.slug)}
                    className="w-full px-4 sm:px-5 pb-3 text-left text-xs text-muted/50 hover:text-red-400 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Optimization Opportunities ── */}
        {optimizationCount > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Optimization Summary
            </h2>
            <div className="border border-accent/20 rounded-xl bg-accent/5 p-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">Monthly Savings</p>
                  <p className="text-xl font-extrabold text-success">{fmt(totalSavings)}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">Annual Savings</p>
                  <p className="text-xl font-extrabold text-success">{fmt(totalAnnualSavings)}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">Tools to Optimize</p>
                  <p className="text-xl font-extrabold text-foreground">{optimizationCount}</p>
                </div>
              </div>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
              >
                Run Full Re-Audit
              </Link>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted mb-4">
            Bookmark this page. Come back monthly to see if pricing changed.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/audit"
              className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
            >
              Re-Audit Now
            </Link>
            <Link
              href="/changelog"
              className="px-5 py-2.5 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors"
            >
              View All Price Changes
            </Link>
            <Link
              href="/alerts"
              className="px-5 py-2.5 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors"
            >
              Set Price Alerts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
