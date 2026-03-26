"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import {
  tools,
  versusPairs,
  getToolBySlug,
  type Tool,
  type PricingPlan,
} from "@/data/tools";
import {
  getConfidenceLevel,
  type ConfidenceLevel,
} from "@/components/ConfidenceBadge";

/* ═══════════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════════ */

interface StackEntry {
  id: string;
  toolSlug: string;
  planName: string;
  teamSize: number;
  monthlyCost: number;
}

interface ToolAnalysis {
  entry: StackEntry;
  tool: Tool;
  plan: PricingPlan | null;
  annualCost: number;
  bestAlt: Tool | null;
  bestAltPlan: PricingPlan | null;
  annualSavings: number;
  migrationDifficulty: "Easy" | "Moderate" | "Hard";
  migrationHours: string;
  switchingTriggers: string[];
  switchingBlockers: string[];
  hiddenCosts: string[];
  confidence: ConfidenceLevel;
  status: "overpaying" | "optimal";
  compareUrl: string;
  guideUrl: string;
}

interface SavedClient {
  id: string;
  name: string;
  email: string;
  entries: StackEntry[];
  date: string;
}

/* ═══════════════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════════════ */

const SITE = "https://sasanova.com";
const STORAGE_KEY = "sasanova_expert_clients";

let idCounter = 0;
function genId(): string {
  return `ea-${Date.now()}-${++idCounter}`;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function findPlan(tool: Tool, planName: string): PricingPlan | null {
  const exact = tool.pricing.find(
    (p) => p.name.toLowerCase() === planName.toLowerCase()
  );
  if (exact) return exact;
  const partial = tool.pricing.find(
    (p) =>
      p.name.toLowerCase().includes(planName.toLowerCase()) ||
      planName.toLowerCase().includes(p.name.toLowerCase())
  );
  return partial ?? tool.pricing.find((p) => p.highlighted) ?? tool.pricing[0] ?? null;
}

function getMonthlyCost(plan: PricingPlan | null, teamSize: number): number {
  if (!plan || plan.priceMonthly === null) return 0;
  if (plan.billingModel === "per_seat") return plan.priceMonthly * teamSize;
  return plan.priceMonthly;
}

function findBestAlternative(
  tool: Tool,
  currentPlan: PricingPlan | null,
  teamSize: number
): { alt: Tool; altPlan: PricingPlan } | null {
  const currentCost = getMonthlyCost(currentPlan, teamSize);
  let best: { alt: Tool; altPlan: PricingPlan; cost: number } | null = null;

  for (const slug of tool.alternatives) {
    const alt = getToolBySlug(slug);
    if (!alt) continue;

    // Find comparable plan (same tier level or cheaper)
    const altPlans = alt.pricing.filter(
      (p) => p.priceMonthly !== null && p.priceMonthly >= 0
    );
    for (const altPlan of altPlans) {
      const altCost = getMonthlyCost(altPlan, teamSize);
      if (altCost >= currentCost) continue;
      if (altCost === 0 && currentCost > 30) continue; // Don't suggest free for expensive plans
      if (!best || altCost < best.cost) {
        best = { alt, altPlan, cost: altCost };
      }
    }
  }

  return best ? { alt: best.alt, altPlan: best.altPlan } : null;
}

function getMigrationDifficulty(score: number): "Easy" | "Moderate" | "Hard" {
  if (score >= 7) return "Easy";
  if (score >= 4) return "Moderate";
  return "Hard";
}

function getMigrationHours(difficulty: "Easy" | "Moderate" | "Hard"): string {
  if (difficulty === "Easy") return "2-4";
  if (difficulty === "Moderate") return "8-16";
  return "20-40";
}

function buildCompareUrl(slugA: string, slugB: string): string {
  const match = versusPairs.find(
    (vs) =>
      (vs.slugA === slugA && vs.slugB === slugB) ||
      (vs.slugA === slugB && vs.slugB === slugA)
  );
  if (match) return `${SITE}/compare/${match.slugA}-vs-${match.slugB}`;
  return `${SITE}/compare/${slugA}-vs-${slugB}`;
}

function computeAuditScore(analyses: ToolAnalysis[]): number {
  if (analyses.length === 0) return 100;
  const optimal = analyses.filter((a) => a.status === "optimal").length;
  return Math.round((optimal / analyses.length) * 100);
}

/* ═══════════════════════════════════════════════════════════
   Tool Search Dropdown
   ═══════════════════════════════════════════════════════════ */

function ToolSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (slug: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = value ? getToolBySlug(value) : null;

  const filtered = useMemo(() => {
    if (!query.trim()) return tools.slice(0, 20);
    const q = query.toLowerCase();
    return tools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.slug.includes(q) ||
        t.vendor.toLowerCase().includes(q) ||
        t.categorySlug.includes(q)
    );
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <input
        type="text"
        value={open ? query : selected?.name ?? query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          setOpen(true);
          setQuery("");
        }}
        placeholder="Search tools..."
        className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
      />
      {open && filtered.length > 0 && (
        <div className="absolute z-50 mt-1 w-full max-h-60 overflow-auto bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-xl">
          {filtered.map((t) => (
            <button
              key={t.slug}
              onClick={() => {
                onChange(t.slug);
                setQuery(t.name);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-[var(--surface-alt)] transition-colors flex items-center justify-between"
            >
              <span className="font-medium">{t.name}</span>
              <span className="text-xs text-[var(--muted)]">
                {t.categorySlug.replace(/-/g, " ")}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Plan Select
   ═══════════════════════════════════════════════════════════ */

function PlanSelect({
  tool,
  value,
  onChange,
}: {
  tool: Tool;
  value: string;
  onChange: (plan: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
    >
      {tool.pricing.map((p) => (
        <option key={p.name} value={p.name}>
          {p.name} — {p.priceMonthly === null ? "Custom" : p.priceMonthly === 0 ? "Free" : `$${p.priceMonthly}/mo`}
          {p.billingModel === "per_seat" ? "/seat" : ""}
        </option>
      ))}
    </select>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════ */

export default function ExpertAuditPage() {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [entries, setEntries] = useState<StackEntry[]>([]);
  const [showReport, setShowReport] = useState(false);
  const [savedClients, setSavedClients] = useState<SavedClient[]>([]);
  const [copySuccess, setCopySuccess] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  // Load saved clients from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSavedClients(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const addEntry = useCallback(() => {
    setEntries((prev) => [
      ...prev,
      {
        id: genId(),
        toolSlug: "",
        planName: "",
        teamSize: 1,
        monthlyCost: 0,
      },
    ]);
  }, []);

  const updateEntry = useCallback(
    (id: string, updates: Partial<StackEntry>) => {
      setEntries((prev) =>
        prev.map((e) => {
          if (e.id !== id) return e;
          const updated = { ...e, ...updates };

          // Auto-compute monthly cost when tool/plan/team changes
          if (updates.toolSlug || updates.planName || updates.teamSize) {
            const tool = getToolBySlug(updated.toolSlug);
            if (tool) {
              const plan = findPlan(tool, updated.planName);
              updated.monthlyCost = getMonthlyCost(plan, updated.teamSize);
              if (updates.toolSlug && !updates.planName) {
                const highlighted = tool.pricing.find((p) => p.highlighted);
                updated.planName = highlighted?.name ?? tool.pricing[0]?.name ?? "";
              }
            }
          }
          return updated;
        })
      );
    },
    []
  );

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  // Analysis computation
  const analyses: ToolAnalysis[] = useMemo(() => {
    return entries
      .filter((e) => e.toolSlug)
      .map((entry) => {
        const tool = getToolBySlug(entry.toolSlug)!;
        const plan = findPlan(tool, entry.planName);
        const monthlyCost =
          entry.monthlyCost > 0
            ? entry.monthlyCost
            : getMonthlyCost(plan, entry.teamSize);
        const annualCost = monthlyCost * 12;

        const bestResult = findBestAlternative(tool, plan, entry.teamSize);
        const bestAlt = bestResult?.alt ?? null;
        const bestAltPlan = bestResult?.altPlan ?? null;
        const altMonthlyCost = bestAltPlan
          ? getMonthlyCost(bestAltPlan, entry.teamSize)
          : monthlyCost;
        const annualSavings = Math.max(0, (monthlyCost - altMonthlyCost) * 12);

        const migDiff = getMigrationDifficulty(tool.scores.migrationDifficulty);

        return {
          entry,
          tool,
          plan,
          annualCost,
          bestAlt,
          bestAltPlan,
          annualSavings,
          migrationDifficulty: migDiff,
          migrationHours: getMigrationHours(migDiff),
          switchingTriggers: tool.switchingTriggers ?? [],
          switchingBlockers: tool.switchingBlockers ?? [],
          hiddenCosts: tool.hiddenCosts ?? [],
          confidence: getConfidenceLevel(tool),
          status: annualSavings > 0 ? ("overpaying" as const) : ("optimal" as const),
          compareUrl: bestAlt
            ? buildCompareUrl(tool.slug, bestAlt.slug)
            : `${SITE}/tools/${tool.slug}`,
          guideUrl: `${SITE}/tools/${tool.slug}`,
        };
      });
  }, [entries]);

  const totalMonthly = analyses.reduce(
    (sum, a) => sum + (a.entry.monthlyCost > 0 ? a.entry.monthlyCost : getMonthlyCost(a.plan, a.entry.teamSize)),
    0
  );
  const totalSavings = analyses.reduce((sum, a) => sum + a.annualSavings, 0);
  const monthlySavings = Math.round(totalSavings / 12);
  const optimizedMonthly = totalMonthly - monthlySavings;
  const auditScore = computeAuditScore(analyses);
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const generateReport = useCallback(() => {
    if (entries.filter((e) => e.toolSlug).length === 0) return;
    setShowReport(true);
  }, [entries]);

  const saveClient = useCallback(() => {
    if (!clientName.trim()) return;
    const client: SavedClient = {
      id: genId(),
      name: clientName,
      email: clientEmail,
      entries,
      date: new Date().toISOString(),
    };
    const updated = [client, ...savedClients.filter((c) => c.email !== clientEmail)];
    setSavedClients(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  }, [clientName, clientEmail, entries, savedClients]);

  const loadClient = useCallback((client: SavedClient) => {
    setClientName(client.name);
    setClientEmail(client.email);
    setEntries(client.entries);
    setShowReport(false);
  }, []);

  // Sort analyses by savings (highest first) for action plan
  const sortedAnalyses = useMemo(
    () => [...analyses].sort((a, b) => b.annualSavings - a.annualSavings),
    [analyses]
  );

  /* ─── Plain-text report for copy ─── */
  function generatePlainText(): string {
    const lines: string[] = [];
    const bar = "═".repeat(55);
    const divider = "─".repeat(55);

    lines.push(bar);
    lines.push("SASANOVA EXPERT STACK AUDIT REPORT");
    lines.push(`Prepared for: ${clientName || "Client"}`);
    lines.push(`Date: ${today}`);
    lines.push(bar);
    lines.push("");
    lines.push("EXECUTIVE SUMMARY");
    lines.push(`  Current monthly SaaS spend: $${fmt(totalMonthly)}`);
    lines.push(
      `  Identified savings: $${fmt(monthlySavings)}/month ($${fmt(totalSavings)}/year)`
    );
    lines.push(`  Audit score: ${auditScore}/100`);
    lines.push(`  Tools audited: ${analyses.length}`);
    lines.push("");
    lines.push(divider);
    lines.push("TOOL-BY-TOOL ANALYSIS");
    lines.push(divider);

    analyses.forEach((a, i) => {
      const monthlyCost =
        a.entry.monthlyCost > 0
          ? a.entry.monthlyCost
          : getMonthlyCost(a.plan, a.entry.teamSize);
      lines.push("");
      lines.push(
        `${i + 1}. ${a.tool.name} — ${a.plan?.name ?? "N/A"} — $${fmt(monthlyCost)}/month`
      );
      lines.push(
        `   Status: ${a.status === "overpaying" ? "OVERPAYING" : "OPTIMAL"}`
      );
      lines.push("");
      lines.push(`   Current cost: $${fmt(monthlyCost)}/month ($${fmt(a.annualCost)}/year)`);

      if (a.bestAlt && a.bestAltPlan) {
        const altCost = getMonthlyCost(a.bestAltPlan, a.entry.teamSize);
        lines.push(
          `   Recommended: ${a.bestAlt.name} ${a.bestAltPlan.name} at $${fmt(altCost)}/month`
        );
        lines.push(`   Annual savings: $${fmt(a.annualSavings)}`);
      } else {
        lines.push("   Recommended: Stay (already optimal)");
      }

      if (a.switchingTriggers.length > 0) {
        lines.push("");
        lines.push("   Why switch:");
        a.switchingTriggers.forEach((t) => lines.push(`   - ${t}`));
      }

      lines.push("");
      lines.push(`   Migration difficulty: ${a.migrationDifficulty}`);
      lines.push(`   Migration time: ~${a.migrationHours} hours`);

      if (a.hiddenCosts.length > 0) {
        lines.push("");
        lines.push("   Hidden costs of current tool:");
        a.hiddenCosts.forEach((c) => lines.push(`   - ${c}`));
      }

      lines.push("");
      lines.push(`   Confidence: ${a.confidence.charAt(0).toUpperCase() + a.confidence.slice(1)}`);
      lines.push("");
      lines.push(`   Full comparison: ${a.compareUrl}`);
      lines.push(`   Tool details: ${a.guideUrl}`);
    });

    lines.push("");
    lines.push(divider);
    lines.push("RECOMMENDED ACTION PLAN");
    lines.push(divider);

    sortedAnalyses.forEach((a, i) => {
      const label =
        a.annualSavings > 0
          ? `${a.tool.name} -> ${a.bestAlt?.name ?? "Alternative"}: Save $${fmt(a.annualSavings)}/year`
          : `${a.tool.name} -> Stay (already optimal)`;
      const timeline =
        a.annualSavings > 0
          ? `Timeline: ${a.migrationDifficulty === "Easy" ? "1-2" : a.migrationDifficulty === "Moderate" ? "2-4" : "4-8"} weeks`
          : "";
      lines.push("");
      lines.push(`Priority ${i + 1}${a.annualSavings > 0 ? " (savings available)" : ""}:`);
      lines.push(`${label}`);
      if (timeline) lines.push(timeline);
    });

    lines.push("");
    lines.push(divider);
    lines.push("TOTAL SAVINGS POTENTIAL");
    lines.push(divider);
    lines.push(
      `Monthly: $${fmt(totalMonthly)} -> $${fmt(optimizedMonthly)} (save $${fmt(monthlySavings)}/month)`
    );
    lines.push(
      `Annual: $${fmt(totalMonthly * 12)} -> $${fmt(optimizedMonthly * 12)} (save $${fmt(totalSavings)}/year)`
    );
    lines.push(`3-Year: Save $${fmt(totalSavings * 3)} total`);
    lines.push(divider);
    lines.push("");
    lines.push("Report generated by Sasanova");
    lines.push("sasanova.com | sasanovatools@gmail.com");

    return lines.join("\n");
  }

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generatePlainText());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = generatePlainText();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  }, [analyses, clientName, totalMonthly, monthlySavings, totalSavings, auditScore]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /* ═══════════════════════════════════════════════════════════
     Render
     ═══════════════════════════════════════════════════════════ */

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header — hidden in print */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)] no-print">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[var(--muted)]">
              Admin
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Expert Audit Report Generator
              </h1>
              <p className="text-[var(--muted)] text-sm mt-1">
                Generate $299 professional audit reports in minutes
              </p>
            </div>
            <Link
              href="/admin"
              className="text-sm text-[var(--accent)] hover:underline"
            >
              Back to Admin
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* ── Saved Clients ── */}
        {savedClients.length > 0 && !showReport && (
          <div className="mb-8 no-print">
            <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">
              Previous Clients
            </h3>
            <div className="flex flex-wrap gap-2">
              {savedClients.map((c) => (
                <button
                  key={c.id}
                  onClick={() => loadClient(c)}
                  className="px-3 py-1.5 text-sm bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
                >
                  {c.name}{" "}
                  <span className="text-[var(--muted)]">
                    ({new Date(c.date).toLocaleDateString()})
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Input Section ── */}
        {!showReport && (
          <div className="space-y-6 no-print">
            {/* Client info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Client Name
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Client Email
                </label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="client@example.com"
                  className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>

            {/* Current tools */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">Current Tools</h2>
                <button
                  onClick={addEntry}
                  className="px-4 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  + Add Tool
                </button>
              </div>

              {entries.length === 0 && (
                <div className="text-center py-12 text-[var(--muted)] border border-dashed border-[var(--border)] rounded-xl">
                  <p className="text-sm">
                    No tools added yet. Click &quot;+ Add Tool&quot; to start
                    the audit.
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {entries.map((entry, idx) => {
                  const tool = entry.toolSlug
                    ? getToolBySlug(entry.toolSlug)
                    : null;
                  return (
                    <div
                      key={entry.id}
                      className="grid grid-cols-12 gap-3 items-end p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
                    >
                      <div className="col-span-12 sm:col-span-4">
                        <label className="block text-xs font-medium text-[var(--muted)] mb-1">
                          Tool
                        </label>
                        <ToolSearch
                          value={entry.toolSlug}
                          onChange={(slug) =>
                            updateEntry(entry.id, { toolSlug: slug })
                          }
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-xs font-medium text-[var(--muted)] mb-1">
                          Current Plan
                        </label>
                        {tool ? (
                          <PlanSelect
                            tool={tool}
                            value={entry.planName}
                            onChange={(plan) =>
                              updateEntry(entry.id, { planName: plan })
                            }
                          />
                        ) : (
                          <input
                            disabled
                            placeholder="Select tool first"
                            className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--muted)]"
                          />
                        )}
                      </div>
                      <div className="col-span-3 sm:col-span-2">
                        <label className="block text-xs font-medium text-[var(--muted)] mb-1">
                          Team Size
                        </label>
                        <input
                          type="number"
                          min={1}
                          value={entry.teamSize}
                          onChange={(e) =>
                            updateEntry(entry.id, {
                              teamSize: Math.max(1, parseInt(e.target.value) || 1),
                            })
                          }
                          className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-2">
                        <label className="block text-xs font-medium text-[var(--muted)] mb-1">
                          $/month
                        </label>
                        <input
                          type="number"
                          min={0}
                          value={entry.monthlyCost || ""}
                          onChange={(e) =>
                            updateEntry(entry.id, {
                              monthlyCost: parseFloat(e.target.value) || 0,
                            })
                          }
                          placeholder={
                            tool && entry.planName
                              ? `${getMonthlyCost(findPlan(tool, entry.planName), entry.teamSize)}`
                              : "0"
                          }
                          className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                      <div className="col-span-3 sm:col-span-1 flex justify-end">
                        <button
                          onClick={() => removeEntry(entry.id)}
                          className="p-2 text-[var(--muted)] hover:text-[var(--danger)] transition-colors"
                          title="Remove"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Generate button */}
            {entries.filter((e) => e.toolSlug).length > 0 && (
              <div className="flex gap-3">
                <button
                  onClick={generateReport}
                  className="px-6 py-3 text-sm font-bold bg-[var(--accent)] text-white rounded-xl hover:opacity-90 transition-opacity"
                >
                  Generate Expert Report
                </button>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
           Report Output
           ═══════════════════════════════════════════════════════ */}
        {showReport && (
          <>
            {/* Action buttons — hidden in print */}
            <div className="flex flex-wrap gap-3 mb-6 no-print">
              <button
                onClick={() => setShowReport(false)}
                className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg hover:bg-[var(--surface-alt)] transition-colors"
              >
                Edit Inputs
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Print Report
              </button>
              <button
                onClick={handleCopy}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  copySuccess
                    ? "bg-[var(--success)] text-black"
                    : "bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]"
                }`}
              >
                {copySuccess ? "Copied!" : "Copy Report as Text"}
              </button>
              <button
                onClick={saveClient}
                className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg hover:bg-[var(--surface-alt)] transition-colors"
              >
                Save Client
              </button>
            </div>

            {/* The actual report */}
            <div
              ref={reportRef}
              className="print-report bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 sm:p-10 font-mono text-sm leading-relaxed print:bg-white print:text-black print:border-none print:p-0 print:rounded-none"
            >
              {/* Header */}
              <div className="text-center mb-8 pb-6 border-b-2 border-[var(--border)] print:border-black">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2 print:text-black">
                  SASANOVA EXPERT STACK AUDIT REPORT
                </h2>
                <p className="text-[var(--muted)] print:text-gray-600">
                  Prepared for: <strong className="text-[var(--foreground)] print:text-black">{clientName || "Client"}</strong>
                </p>
                <p className="text-[var(--muted)] print:text-gray-600">
                  Date: {today}
                </p>
              </div>

              {/* Executive Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-[var(--accent)] print:text-black">
                  EXECUTIVE SUMMARY
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 border border-[var(--border)] rounded-xl text-center print:border-gray-300">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                      Monthly Spend
                    </p>
                    <p className="text-xl font-extrabold">${fmt(totalMonthly)}</p>
                  </div>
                  <div className="p-4 border border-[var(--success)]/30 rounded-xl bg-[var(--success-light)] text-center print:border-gray-300 print:bg-gray-50">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                      Identified Savings
                    </p>
                    <p className="text-xl font-extrabold text-[var(--success)] print:text-black">
                      ${fmt(monthlySavings)}/mo
                    </p>
                    <p className="text-xs text-[var(--muted)] print:text-gray-500">
                      ${fmt(totalSavings)}/year
                    </p>
                  </div>
                  <div className="p-4 border border-[var(--border)] rounded-xl text-center print:border-gray-300">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                      Audit Score
                    </p>
                    <p
                      className={`text-xl font-extrabold ${
                        auditScore >= 80
                          ? "text-[var(--success)]"
                          : auditScore >= 50
                            ? "text-[var(--warning)]"
                            : "text-[var(--danger)]"
                      } print:text-black`}
                    >
                      {auditScore}/100
                    </p>
                  </div>
                  <div className="p-4 border border-[var(--border)] rounded-xl text-center print:border-gray-300">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                      Tools Audited
                    </p>
                    <p className="text-xl font-extrabold text-[var(--accent)] print:text-black">
                      {analyses.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tool-by-Tool Analysis */}
              <div className="mb-8">
                <div className="border-t-2 border-[var(--border)] pt-6 mb-6 print:border-gray-400">
                  <h3 className="text-lg font-bold text-[var(--accent)] print:text-black">
                    TOOL-BY-TOOL ANALYSIS
                  </h3>
                </div>

                {analyses.map((a, i) => {
                  const monthlyCost =
                    a.entry.monthlyCost > 0
                      ? a.entry.monthlyCost
                      : getMonthlyCost(a.plan, a.entry.teamSize);
                  const altCost = a.bestAltPlan
                    ? getMonthlyCost(a.bestAltPlan, a.entry.teamSize)
                    : 0;

                  return (
                    <div
                      key={a.entry.id}
                      className="mb-8 pb-6 border-b border-[var(--border)] last:border-0 print:border-gray-300 print-report"
                    >
                      {/* Tool header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h4 className="text-base font-bold">
                          {i + 1}. {a.tool.name} — {a.plan?.name ?? "N/A"} — $
                          {fmt(monthlyCost)}/month
                        </h4>
                        <span
                          className={`shrink-0 px-3 py-1 text-xs font-bold rounded-full ${
                            a.status === "overpaying"
                              ? "bg-[var(--warning-light)] text-[var(--warning)] border border-[var(--warning)]/30 print:bg-yellow-50 print:text-yellow-700 print:border-yellow-300"
                              : "bg-[var(--success-light)] text-[var(--success)] border border-[var(--success)]/30 print:bg-green-50 print:text-green-700 print:border-green-300"
                          }`}
                        >
                          {a.status === "overpaying"
                            ? "OVERPAYING"
                            : "OPTIMAL"}
                        </span>
                      </div>

                      <div className="space-y-3 pl-4">
                        {/* Cost line */}
                        <p>
                          <span className="text-[var(--muted)] print:text-gray-500">Current cost:</span>{" "}
                          <strong>${fmt(monthlyCost)}/month</strong> ($
                          {fmt(a.annualCost)}/year)
                        </p>

                        {/* Recommendation */}
                        {a.bestAlt && a.bestAltPlan ? (
                          <>
                            <p>
                              <span className="text-[var(--muted)] print:text-gray-500">Recommended:</span>{" "}
                              <strong className="text-[var(--success)] print:text-green-700">
                                {a.bestAlt.name} {a.bestAltPlan.name}
                              </strong>{" "}
                              at ${fmt(altCost)}/month
                            </p>
                            <p>
                              <span className="text-[var(--muted)] print:text-gray-500">Annual savings:</span>{" "}
                              <strong className="text-[var(--success)] print:text-green-700">
                                ${fmt(a.annualSavings)}
                              </strong>
                            </p>
                          </>
                        ) : (
                          <p className="text-[var(--success)] print:text-green-700 font-medium">
                            Already optimal — no cheaper alternative with
                            comparable features.
                          </p>
                        )}

                        {/* Switching triggers */}
                        {a.switchingTriggers.length > 0 && (
                          <div>
                            <p className="text-[var(--muted)] font-medium mb-1 print:text-gray-500">
                              Why switch:
                            </p>
                            <ul className="list-disc list-inside space-y-0.5 text-[var(--foreground)] print:text-black">
                              {a.switchingTriggers.map((t, j) => (
                                <li key={j}>{t}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Migration */}
                        <p>
                          <span className="text-[var(--muted)] print:text-gray-500">Migration difficulty:</span>{" "}
                          <strong
                            className={
                              a.migrationDifficulty === "Easy"
                                ? "text-[var(--success)] print:text-green-700"
                                : a.migrationDifficulty === "Moderate"
                                  ? "text-[var(--warning)] print:text-yellow-700"
                                  : "text-[var(--danger)] print:text-red-700"
                            }
                          >
                            {a.migrationDifficulty}
                          </strong>
                        </p>
                        <p>
                          <span className="text-[var(--muted)] print:text-gray-500">Migration time:</span>{" "}
                          ~{a.migrationHours} hours
                        </p>

                        {/* Switching blockers */}
                        {a.switchingBlockers.length > 0 && (
                          <div>
                            <p className="text-[var(--muted)] font-medium mb-1 print:text-gray-500">
                              Switching blockers:
                            </p>
                            <ul className="list-disc list-inside space-y-0.5">
                              {a.switchingBlockers.map((b, j) => (
                                <li key={j}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Hidden costs */}
                        {a.hiddenCosts.length > 0 && (
                          <div>
                            <p className="text-[var(--muted)] font-medium mb-1 print:text-gray-500">
                              Hidden costs of current tool:
                            </p>
                            <ul className="list-disc list-inside space-y-0.5 text-[var(--danger)] print:text-red-700">
                              {a.hiddenCosts.map((c, j) => (
                                <li key={j}>{c}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Confidence */}
                        <p>
                          <span className="text-[var(--muted)] print:text-gray-500">Confidence:</span>{" "}
                          <span
                            className={`font-medium ${
                              a.confidence === "high"
                                ? "text-[var(--success)] print:text-green-700"
                                : a.confidence === "medium"
                                  ? "text-[var(--warning)] print:text-yellow-700"
                                  : "text-[var(--danger)] print:text-red-700"
                            }`}
                          >
                            {a.confidence.charAt(0).toUpperCase() +
                              a.confidence.slice(1)}
                          </span>
                        </p>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 pt-2">
                          <a
                            href={a.compareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] text-xs hover:underline print:text-blue-700"
                          >
                            Full comparison &rarr;
                          </a>
                          <a
                            href={a.guideUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] text-xs hover:underline print:text-blue-700"
                          >
                            Tool details &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Plan */}
              <div className="mb-8">
                <div className="border-t-2 border-[var(--border)] pt-6 mb-4 print:border-gray-400">
                  <h3 className="text-lg font-bold text-[var(--accent)] print:text-black">
                    RECOMMENDED ACTION PLAN
                  </h3>
                </div>

                <div className="space-y-4">
                  {sortedAnalyses.map((a, i) => {
                    const timeline =
                      a.migrationDifficulty === "Easy"
                        ? "1-2"
                        : a.migrationDifficulty === "Moderate"
                          ? "2-4"
                          : "4-8";
                    return (
                      <div
                        key={a.entry.id}
                        className={`p-4 rounded-xl border print-report ${
                          a.annualSavings > 0
                            ? "border-[var(--success)]/20 bg-[var(--success-light)] print:border-green-200 print:bg-green-50"
                            : "border-[var(--border)] bg-[var(--surface-alt)] print:border-gray-200 print:bg-gray-50"
                        }`}
                      >
                        <p className="text-xs font-bold text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                          Priority {i + 1}
                          {a.annualSavings > 0
                            ? " (highest savings)"
                            : ""}
                        </p>
                        <p className="font-bold">
                          {a.tool.name} &rarr;{" "}
                          {a.annualSavings > 0 ? (
                            <>
                              {a.bestAlt?.name ?? "Alternative"}:{" "}
                              <span className="text-[var(--success)] print:text-green-700">
                                Save ${fmt(a.annualSavings)}/year
                              </span>
                            </>
                          ) : (
                            <span className="text-[var(--success)] print:text-green-700">
                              Stay (already optimal)
                            </span>
                          )}
                        </p>
                        {a.annualSavings > 0 && (
                          <p className="text-xs text-[var(--muted)] mt-1 print:text-gray-500">
                            Timeline: {timeline} weeks
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Total Savings */}
              <div className="border-t-2 border-[var(--border)] pt-6 print:border-gray-400">
                <h3 className="text-lg font-bold text-[var(--accent)] mb-4 print:text-black">
                  TOTAL SAVINGS POTENTIAL
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 border border-[var(--border)] rounded-xl text-center print:border-gray-300">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                      Monthly
                    </p>
                    <p className="font-bold">
                      ${fmt(totalMonthly)} &rarr; ${fmt(optimizedMonthly)}
                    </p>
                    <p className="text-sm text-[var(--success)] font-bold print:text-green-700">
                      Save ${fmt(monthlySavings)}/mo
                    </p>
                  </div>
                  <div className="p-4 border border-[var(--border)] rounded-xl text-center print:border-gray-300">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                      Annual
                    </p>
                    <p className="font-bold">
                      ${fmt(totalMonthly * 12)} &rarr; ${fmt(optimizedMonthly * 12)}
                    </p>
                    <p className="text-sm text-[var(--success)] font-bold print:text-green-700">
                      Save ${fmt(totalSavings)}/yr
                    </p>
                  </div>
                  <div className="p-4 border border-[var(--success)]/20 bg-[var(--success-light)] rounded-xl text-center print:border-green-200 print:bg-green-50">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1 print:text-gray-500">
                      3-Year Savings
                    </p>
                    <p className="text-2xl font-extrabold text-[var(--success)] print:text-green-700">
                      ${fmt(totalSavings * 3)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-[var(--border)] text-center text-[var(--muted)] print:border-gray-300 print:text-gray-500">
                <p className="font-medium">Report generated by Sasanova</p>
                <p className="text-xs mt-1">
                  sasanova.com | sasanovatools@gmail.com
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
