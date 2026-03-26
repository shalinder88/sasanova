"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import Link from "next/link";
import {
  tools,
  categories,
  getToolsByCategory,
  getOverallScore,
  type Tool,
  type PricingPlan,
} from "@/data/tools";
import { ProNudge } from "@/components/ProGate";
import { isProUser } from "@/lib/pro";

/* ── Types ── */

interface StackEntry {
  id: string;
  toolSlug: string;
  planName: string;
  teamSize: number;
}

interface AuditResult {
  entry: StackEntry;
  tool: Tool;
  plan: PricingPlan;
  monthlyCost: number;
  cheaperAlternative: {
    tool: Tool;
    plan: PricingPlan;
    monthlyCost: number;
    monthlySavings: number;
    annualSavings: number;
  } | null;
  migrationDifficulty: number;
  freeTierAvailable: boolean;
  overpayLevel: "optimal" | "moderate" | "high";
}

/* ── Helpers ── */

function computeCost(plan: PricingPlan, teamSize: number): number {
  if (plan.priceMonthly === null) return 0;
  return plan.billingModel === "per_seat"
    ? plan.priceMonthly * teamSize
    : plan.priceMonthly;
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 10);
}

function findCheaperAlternative(
  tool: Tool,
  plan: PricingPlan,
  teamSize: number
): AuditResult["cheaperAlternative"] {
  const currentCost = computeCost(plan, teamSize);
  const categoryTools = getToolsByCategory(tool.categorySlug);
  let best: AuditResult["cheaperAlternative"] = null;

  for (const alt of categoryTools) {
    if (alt.slug === tool.slug) continue;
    for (const altPlan of alt.pricing) {
      if (altPlan.priceMonthly === null) continue;
      const altCost = computeCost(altPlan, teamSize);
      // Must be cheaper and still a paid plan or free
      if (altCost < currentCost) {
        const savings = currentCost - altCost;
        if (!best || savings > best.monthlySavings) {
          best = {
            tool: alt,
            plan: altPlan,
            monthlyCost: altCost,
            monthlySavings: savings,
            annualSavings: savings * 12,
          };
        }
      }
    }
  }
  return best;
}

function getOverpayLevel(
  currentCost: number,
  cheaperCost: number | null
): AuditResult["overpayLevel"] {
  if (cheaperCost === null) return "optimal";
  const diff = currentCost - cheaperCost;
  const pct = currentCost > 0 ? diff / currentCost : 0;
  if (pct > 0.4) return "high";
  if (pct > 0) return "moderate";
  return "optimal";
}

function fmt(n: number): string {
  return "$" + n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

const STORAGE_KEY = "sasanova_audit";
const MAX_TOOLS = 15;

/* ── Saved audits ── */

interface SavedAudit {
  id: string;
  date: string;
  entries: StackEntry[];
}

function getSavedAudits(): SavedAudit[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedAudit[]) : [];
  } catch {
    return [];
  }
}

function saveAudit(entries: StackEntry[]): SavedAudit {
  const audits = getSavedAudits();
  const audit: SavedAudit = {
    id: generateId(),
    date: new Date().toISOString(),
    entries,
  };
  const isPro = isProUser();
  // Free: max 1 saved audit, Pro: unlimited
  if (!isPro && audits.length >= 1) {
    audits.splice(0, audits.length); // clear all for free users
  }
  audits.push(audit);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(audits));
  return audit;
}

/* ── Share URL encoding ── */

function encodeAuditToUrl(entries: StackEntry[]): string {
  const data = entries.map((e) => `${e.toolSlug}|${e.planName}|${e.teamSize}`).join(",");
  const encoded = btoa(data);
  return `${window.location.origin}/audit?s=${encodeURIComponent(encoded)}`;
}

function decodeAuditFromUrl(param: string): StackEntry[] {
  try {
    const decoded = atob(decodeURIComponent(param));
    return decoded.split(",").map((chunk) => {
      const [toolSlug, planName, teamSizeStr] = chunk.split("|");
      return { id: generateId(), toolSlug, planName, teamSize: Number(teamSizeStr) || 1 };
    });
  } catch {
    return [];
  }
}

/* ── Comparison / Migration guide link helpers ── */

function getComparisonLink(toolA: Tool, toolB: Tool): string {
  const slugs = [toolA.slug, toolB.slug].sort();
  return `/compare/${slugs[0]}-vs-${slugs[1]}`;
}

function getMigrationGuideLink(fromTool: Tool, toTool: Tool): string {
  return `/guides/migrate-${fromTool.slug}-to-${toTool.slug}`;
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════ */

export default function AuditClient() {
  /* ── State ── */
  const [entries, setEntries] = useState<StackEntry[]>(() => {
    // Check URL params on mount
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("s");
      if (s) return decodeAuditFromUrl(s);
    }
    return [{ id: generateId(), toolSlug: "", planName: "", teamSize: 1 }];
  });
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearchIdx, setActiveSearchIdx] = useState<number | null>(null);
  const [savedNotice, setSavedNotice] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);

  /* ── Tool search ── */
  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.vendor.toLowerCase().includes(q) ||
          t.slug.includes(q)
      )
      .slice(0, 10);
  }, [searchQuery]);

  /* ── Entry management ── */
  const updateEntry = useCallback((id: string, updates: Partial<StackEntry>) => {
    setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, ...updates } : e)));
  }, []);

  const addEntry = useCallback(() => {
    setEntries((prev) => {
      if (prev.length >= MAX_TOOLS) return prev;
      return [...prev, { id: generateId(), toolSlug: "", planName: "", teamSize: 1 }];
    });
  }, []);

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((e) => e.id !== id);
    });
  }, []);

  /* ── Compute audit results ── */
  const validEntries = entries.filter((e) => e.toolSlug && e.planName);

  const auditResults: AuditResult[] = useMemo(() => {
    if (!showResults) return [];
    return validEntries
      .map((entry) => {
        const tool = tools.find((t) => t.slug === entry.toolSlug);
        if (!tool) return null;
        const plan = tool.pricing.find((p) => p.name === entry.planName);
        if (!plan) return null;

        const monthlyCost = computeCost(plan, entry.teamSize);
        const cheaperAlternative = findCheaperAlternative(tool, plan, entry.teamSize);
        const overpayLevel = getOverpayLevel(
          monthlyCost,
          cheaperAlternative ? cheaperAlternative.monthlyCost : null
        );

        return {
          entry,
          tool,
          plan,
          monthlyCost,
          cheaperAlternative,
          migrationDifficulty: tool.scores.migrationDifficulty,
          freeTierAvailable: tool.freeTier,
          overpayLevel,
        } as AuditResult;
      })
      .filter((r): r is AuditResult => r !== null);
  }, [showResults, validEntries]);

  const totalMonthlySpend = auditResults.reduce((sum, r) => sum + r.monthlyCost, 0);
  const totalMonthlySavings = auditResults.reduce(
    (sum, r) => sum + (r.cheaperAlternative?.monthlySavings ?? 0),
    0
  );
  const totalAnnualSavings = totalMonthlySavings * 12;
  const optimalCount = auditResults.filter((r) => r.overpayLevel === "optimal").length;
  const auditScore =
    auditResults.length > 0 ? Math.round((optimalCount / auditResults.length) * 100) : 0;

  /* ── Actions ── */
  const handleGenerate = () => {
    if (validEntries.length === 0) return;
    setShowResults(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleSave = () => {
    saveAudit(entries);
    setSavedNotice("Audit saved!");
    setTimeout(() => setSavedNotice(""), 3000);
  };

  const handleShare = () => {
    const url = encodeAuditToUrl(entries);
    setShareUrl(url);
    navigator.clipboard?.writeText(url).catch(() => {});
  };

  const handlePrint = () => {
    window.print();
  };

  /* ── Render helpers ── */
  const overpayColor = (level: AuditResult["overpayLevel"]) => {
    switch (level) {
      case "optimal":
        return "text-success bg-success/10 border-success/30";
      case "moderate":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/30";
      case "high":
        return "text-red-400 bg-red-400/10 border-red-400/30";
    }
  };

  const overpayLabel = (level: AuditResult["overpayLevel"]) => {
    switch (level) {
      case "optimal":
        return "Optimal";
      case "moderate":
        return "Cheaper Exists";
      case "high":
        return "Overpaying";
    }
  };

  const migrationBadge = (score: number) => {
    if (score >= 8) return { label: "Easy Switch", color: "text-success bg-success/10" };
    if (score >= 5) return { label: "Moderate", color: "text-yellow-400 bg-yellow-400/10" };
    return { label: "Complex", color: "text-red-400 bg-red-400/10" };
  };

  return (
    <div className="min-h-screen">
      {/* ══════════ HERO ══════════ */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Audit Your SaaS Stack
              <br />
              <span className="text-accent">Find Hidden Waste</span>
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-2">
              Input your current software stack. Get a detailed report showing where you are
              overpaying, what to replace, and your exact annual savings.
            </p>
            <p className="text-sm text-muted/70">
              Powered by {tools.length}+ independently verified pricing data points.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-12">
        {/* ══════════ STEP 1: INPUT YOUR STACK ══════════ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
              1
            </span>
            <h2 className="text-xl font-bold">Input Your Stack</h2>
          </div>

          <div className="space-y-4">
            {entries.map((entry, idx) => {
              const selectedTool = tools.find((t) => t.slug === entry.toolSlug);
              return (
                <div
                  key={entry.id}
                  className="border border-border rounded-xl p-4 bg-background space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                      Tool {idx + 1}
                    </span>
                    {entries.length > 1 && (
                      <button
                        onClick={() => removeEntry(entry.id)}
                        className="text-xs text-red-400 hover:text-red-300 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Tool selector */}
                    <div className="relative">
                      <label className="block text-xs text-muted mb-1">Software Tool</label>
                      {entry.toolSlug && selectedTool ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-foreground">
                            {selectedTool.name}
                          </span>
                          <button
                            onClick={() => {
                              updateEntry(entry.id, { toolSlug: "", planName: "" });
                              setActiveSearchIdx(idx);
                              setSearchQuery("");
                            }}
                            className="text-xs text-accent hover:underline"
                          >
                            Change
                          </button>
                        </div>
                      ) : (
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search tools..."
                            value={activeSearchIdx === idx ? searchQuery : ""}
                            onFocus={() => setActiveSearchIdx(idx)}
                            onChange={(e) => {
                              setActiveSearchIdx(idx);
                              setSearchQuery(e.target.value);
                            }}
                            className="w-full px-3 py-2 text-sm bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-accent"
                          />
                          {activeSearchIdx === idx && filteredTools.length > 0 && (
                            <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-surface border border-border rounded-lg shadow-lg max-h-52 overflow-y-auto">
                              {filteredTools.map((t) => (
                                <button
                                  key={t.slug}
                                  onClick={() => {
                                    updateEntry(entry.id, { toolSlug: t.slug, planName: "" });
                                    setActiveSearchIdx(null);
                                    setSearchQuery("");
                                  }}
                                  className="w-full px-3 py-2 text-left text-sm hover:bg-surface-alt transition-colors flex items-center justify-between"
                                >
                                  <span className="font-medium text-foreground">{t.name}</span>
                                  <span className="text-xs text-muted">{t.vendor}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Plan selector */}
                    <div>
                      <label className="block text-xs text-muted mb-1">Current Plan</label>
                      <select
                        value={entry.planName}
                        onChange={(e) => updateEntry(entry.id, { planName: e.target.value })}
                        disabled={!selectedTool}
                        className="w-full px-3 py-2 text-sm bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-40"
                      >
                        <option value="">Select plan...</option>
                        {selectedTool?.pricing.map((p) => (
                          <option key={p.name} value={p.name}>
                            {p.name}
                            {p.priceMonthly !== null ? ` — $${p.priceMonthly}/mo` : " — Custom"}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Team size */}
                    <div>
                      <label className="block text-xs text-muted mb-1">Team Size / Seats</label>
                      <input
                        type="number"
                        min={1}
                        max={10000}
                        value={entry.teamSize}
                        onChange={(e) =>
                          updateEntry(entry.id, {
                            teamSize: Math.max(1, parseInt(e.target.value) || 1),
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {entries.length < MAX_TOOLS && (
            <button
              onClick={addEntry}
              className="mt-4 px-5 py-2.5 text-sm font-semibold border border-dashed border-border rounded-lg text-muted hover:text-foreground hover:border-accent transition-colors"
            >
              + Add Another Tool
            </button>
          )}
        </section>

        {/* ══════════ GENERATE BUTTON ══════════ */}
        <div className="text-center">
          <button
            onClick={handleGenerate}
            disabled={validEntries.length === 0}
            className="px-8 py-3.5 text-base font-bold bg-accent text-white rounded-xl hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Generate Audit Report
          </button>
          {validEntries.length === 0 && (
            <p className="text-xs text-muted mt-2">
              Select at least one tool and plan to generate your audit.
            </p>
          )}
        </div>

        {/* ══════════ STEP 2 + 3: AUDIT RESULTS ══════════ */}
        {showResults && auditResults.length > 0 && (
          <div ref={resultsRef} className="space-y-10 print:space-y-6">
            {/* ── Summary Cards ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
                  2
                </span>
                <h2 className="text-xl font-bold">Audit Summary</h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total monthly spend */}
                <div className="border border-border rounded-xl p-5 bg-background text-center">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                    Monthly Spend
                  </p>
                  <p className="text-2xl lg:text-3xl font-extrabold text-foreground">
                    {fmt(totalMonthlySpend)}
                  </p>
                  <p className="text-xs text-muted">{fmt(totalMonthlySpend * 12)}/yr</p>
                </div>

                {/* Potential savings */}
                <div className="border border-success/30 rounded-xl p-5 bg-success/5 text-center">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                    Potential Savings
                  </p>
                  <p className="text-2xl lg:text-3xl font-extrabold text-success">
                    {fmt(totalMonthlySavings)}
                    <span className="text-base font-medium">/mo</span>
                  </p>
                  <p className="text-xs text-success/80">{fmt(totalAnnualSavings)}/yr</p>
                </div>

                {/* Audit score */}
                <div className="border border-border rounded-xl p-5 bg-background text-center">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                    Audit Score
                  </p>
                  <p
                    className={`text-2xl lg:text-3xl font-extrabold ${
                      auditScore >= 80
                        ? "text-success"
                        : auditScore >= 50
                          ? "text-yellow-400"
                          : "text-red-400"
                    }`}
                  >
                    {auditScore}%
                  </p>
                  <p className="text-xs text-muted">Stack efficiency</p>
                </div>

                {/* Tools audited */}
                <div className="border border-border rounded-xl p-5 bg-background text-center">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                    Tools Audited
                  </p>
                  <p className="text-2xl lg:text-3xl font-extrabold text-accent">
                    {auditResults.length}
                  </p>
                  <p className="text-xs text-muted">
                    {optimalCount} optimal, {auditResults.length - optimalCount} can improve
                  </p>
                </div>
              </div>
            </section>

            {/* ── Per-Tool Breakdown ── */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
                  3
                </span>
                <h2 className="text-xl font-bold">Per-Tool Breakdown</h2>
              </div>

              <div className="space-y-4">
                {auditResults.map((result) => {
                  const mBadge = migrationBadge(result.migrationDifficulty);
                  const alt = result.cheaperAlternative;
                  return (
                    <div
                      key={result.entry.id}
                      className="border border-border rounded-xl p-5 bg-background"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-foreground">
                              {result.tool.name}
                            </h3>
                            <span
                              className={`inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full border ${overpayColor(result.overpayLevel)}`}
                            >
                              {overpayLabel(result.overpayLevel)}
                            </span>
                          </div>
                          <p className="text-sm text-muted">
                            {result.plan.name} plan &middot; {result.entry.teamSize}{" "}
                            {result.entry.teamSize === 1 ? "seat" : "seats"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-extrabold text-foreground">
                            {fmt(result.monthlyCost)}/mo
                          </p>
                          <p className="text-xs text-muted">
                            {fmt(result.monthlyCost * 12)}/yr
                          </p>
                        </div>
                      </div>

                      {/* Alternative recommendation */}
                      {alt && (
                        <div className="bg-success/5 border border-success/20 rounded-lg p-4 mb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                              <p className="text-sm font-semibold text-success mb-0.5">
                                Switch to {alt.tool.name} ({alt.plan.name})
                              </p>
                              <p className="text-xs text-muted">
                                {alt.plan.billingModel === "per_seat" ? "Per seat" : "Flat"} pricing
                                &middot; {fmt(alt.monthlyCost)}/mo at your scale
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-extrabold text-success">
                                Save {fmt(alt.monthlySavings)}/mo
                              </p>
                              <p className="text-xs text-success/80">
                                {fmt(alt.annualSavings)}/yr
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {!alt && (
                        <div className="bg-success/5 border border-success/20 rounded-lg p-4 mb-4">
                          <p className="text-sm text-success font-medium">
                            This is the most cost-effective option in its category at your scale.
                          </p>
                        </div>
                      )}

                      {/* Metadata row */}
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        {/* Migration difficulty */}
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-md font-medium ${mBadge.color}`}
                        >
                          Migration: {mBadge.label}
                        </span>

                        {/* Free tier */}
                        {result.freeTierAvailable && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md font-medium text-cyan bg-cyan/10">
                            Free Tier Available
                          </span>
                        )}

                        {/* Links */}
                        {alt && (
                          <>
                            <Link
                              href={getComparisonLink(result.tool, alt.tool)}
                              className="text-accent hover:underline"
                            >
                              View Comparison
                            </Link>
                            <Link
                              href={getMigrationGuideLink(result.tool, alt.tool)}
                              className="text-accent hover:underline"
                            >
                              Migration Guide
                            </Link>
                          </>
                        )}

                        <Link
                          href={`/tools/${result.tool.slug}`}
                          className="text-accent hover:underline"
                        >
                          Full Review
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ══════════ STEP 4: SAVE & SHARE ══════════ */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold">
                  4
                </span>
                <h2 className="text-xl font-bold">Save & Share</h2>
              </div>

              <div className="border border-border rounded-xl p-6 bg-background">
                <div className="flex flex-wrap gap-3 mb-4">
                  <button
                    onClick={handleSave}
                    className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
                  >
                    Save This Audit
                  </button>
                  <button
                    onClick={handleShare}
                    className="px-5 py-2.5 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors"
                  >
                    Share Audit
                  </button>
                  <button
                    onClick={handlePrint}
                    className="px-5 py-2.5 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors print:hidden"
                  >
                    Export as Report
                  </button>
                </div>

                {savedNotice && (
                  <p className="text-sm text-success font-medium mb-3">{savedNotice}</p>
                )}

                {shareUrl && (
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="text"
                      readOnly
                      value={shareUrl}
                      className="flex-1 px-3 py-2 text-xs bg-surface border border-border rounded-lg text-muted font-mono"
                    />
                    <button
                      onClick={() => navigator.clipboard?.writeText(shareUrl)}
                      className="px-3 py-2 text-xs font-semibold text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                )}

                {/* Pro upsell */}
                <ProNudge
                  feature="Get unlimited saved audits + monthly re-audit reminders with Pro"
                  ctaLabel="Upgrade to Pro"
                />
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
