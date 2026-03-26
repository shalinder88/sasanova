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
  monthlySavings: number;
  annualSavings: number;
  migrationDifficulty: "Easy" | "Moderate" | "Hard";
  migrationHours: number;
  confidence: ConfidenceLevel;
  status: "overpaying" | "optimal" | "consider-upgrade";
  autoNote: string;
  editableNote: string;
  compareUrl: string;
  guideUrl: string;
}

interface ClientInfo {
  name: string;
  company: string;
  email: string;
  teamSize: number;
  monthlyBudget: string;
}

interface SavedReport {
  id: string;
  client: ClientInfo;
  entries: StackEntry[];
  notes: Record<string, string>;
  date: string;
}

/* ═══════════════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════════════ */

const SITE = "https://sasanova.com";
const STORAGE_KEY = "sasanova_audit_generator";

let idCounter = 0;
function genId(): string {
  return `ag-${Date.now()}-${++idCounter}`;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function fmtDecimal(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
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
): { alt: Tool; altPlan: PricingPlan; cost: number } | null {
  const currentCost = getMonthlyCost(currentPlan, teamSize);
  let best: { alt: Tool; altPlan: PricingPlan; cost: number } | null = null;

  for (const slug of tool.alternatives) {
    const alt = getToolBySlug(slug);
    if (!alt) continue;

    const altPlans = alt.pricing.filter(
      (p) => p.priceMonthly !== null && p.priceMonthly >= 0
    );
    for (const altPlan of altPlans) {
      const altCost = getMonthlyCost(altPlan, teamSize);
      if (altCost >= currentCost) continue;
      if (altCost === 0 && currentCost > 30) continue;
      if (!best || altCost < best.cost) {
        best = { alt, altPlan, cost: altCost };
      }
    }
  }

  return best;
}

function getMigrationDifficulty(score: number): "Easy" | "Moderate" | "Hard" {
  if (score >= 7) return "Easy";
  if (score >= 4) return "Moderate";
  return "Hard";
}

function getMigrationHours(difficulty: "Easy" | "Moderate" | "Hard"): number {
  if (difficulty === "Easy") return 4;
  if (difficulty === "Moderate") return 12;
  return 30;
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

/* ─── Auto-note generation ─── */

function generateAutoNote(
  tool: Tool,
  plan: PricingPlan | null,
  teamSize: number,
  monthlyCost: number,
  bestAlt: Tool | null,
  bestAltPlan: PricingPlan | null,
  altMonthlyCost: number,
  migrationDifficulty: "Easy" | "Moderate" | "Hard",
  status: "overpaying" | "optimal" | "consider-upgrade"
): string {
  const planLabel = plan?.name ?? "current plan";
  const billingNote = plan?.billingModel === "per_seat"
    ? ` ($${fmtDecimal(plan.priceMonthly ?? 0)}/seat x ${teamSize} seats)`
    : "";
  const costStr = `$${fmtDecimal(monthlyCost)}/mo`;

  if (status === "optimal" && !bestAlt) {
    // Optimal with no cheaper alternative
    const bestForNote = tool.bestFor[0] ? ` It excels for ${tool.bestFor[0].toLowerCase()}.` : "";
    const hiddenNote = tool.hiddenCosts && tool.hiddenCosts.length > 0
      ? ` Watch for: ${tool.hiddenCosts[0].toLowerCase()}.`
      : "";
    return `Your ${tool.name} ${planLabel} at ${costStr}${billingNote} is well-priced for your team size. No cheaper alternative offers comparable functionality in our database.${bestForNote}${hiddenNote}`;
  }

  if (!bestAlt || !bestAltPlan) {
    return `${tool.name} ${planLabel} at ${costStr}${billingNote} is reasonable. We don't have a direct cheaper alternative with comparable features in our dataset.`;
  }

  const altCostStr = `$${fmtDecimal(altMonthlyCost)}/mo`;
  const altBillingNote = bestAltPlan.billingModel === "per_seat"
    ? ` ($${fmtDecimal(bestAltPlan.priceMonthly ?? 0)}/seat x ${teamSize})`
    : "";
  const savingsPercent = monthlyCost > 0
    ? Math.round(((monthlyCost - altMonthlyCost) / monthlyCost) * 100)
    : 0;
  const annualSavings = (monthlyCost - altMonthlyCost) * 12;

  // Build the tradeoff sentence
  let tradeoff = "";
  if (bestAlt.avoidIf && bestAlt.avoidIf.length > 0) {
    tradeoff = ` The trade-off: ${bestAlt.avoidIf[0].toLowerCase()}.`;
  }

  // Build switching context
  let switchContext = "";
  if (migrationDifficulty === "Hard") {
    switchContext = ` Migration is complex — expect ${getMigrationHours("Hard")}+ hours of setup. Only worth it if you'll use ${bestAlt.name} for 12+ months.`;
  } else if (migrationDifficulty === "Moderate") {
    switchContext = ` Migration takes roughly ${getMigrationHours("Moderate")} hours.`;
  } else {
    switchContext = ` Migration is straightforward — typically ${getMigrationHours("Easy")} hours or less.`;
  }

  // Build blocker context
  let blockerNote = "";
  if (tool.switchingBlockers && tool.switchingBlockers.length > 0) {
    blockerNote = ` Before switching, consider: ${tool.switchingBlockers[0].toLowerCase()}.`;
  }

  // Build bestFor context for the alternative
  let altStrength = "";
  if (bestAlt.bestFor && bestAlt.bestFor.length > 0) {
    altStrength = ` ${bestAlt.name} is strongest for ${bestAlt.bestFor[0].toLowerCase()}.`;
  }

  return `Your ${tool.name} ${planLabel} at ${costStr}${billingNote} could be replaced by ${bestAlt.name} ${bestAltPlan.name} at ${altCostStr}${altBillingNote} — saving ${savingsPercent}% ($${fmt(annualSavings)}/year).${tradeoff}${switchContext}${blockerNote}${altStrength}`;
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

export default function AuditGeneratorPage() {
  // Client info
  const [client, setClient] = useState<ClientInfo>({
    name: "",
    company: "",
    email: "",
    teamSize: 5,
    monthlyBudget: "",
  });

  // Tool entries
  const [entries, setEntries] = useState<StackEntry[]>([]);

  // Editable notes (keyed by entry ID)
  const [editableNotes, setEditableNotes] = useState<Record<string, string>>({});

  // View states
  const [phase, setPhase] = useState<"input" | "analysis" | "report">("input");
  const [copySuccess, setCopySuccess] = useState(false);
  const [savedReports, setSavedReports] = useState<SavedReport[]>([]);

  // Load saved reports
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setSavedReports(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  /* ─── Entry management ─── */

  const addEntry = useCallback(() => {
    if (entries.length >= 20) return;
    setEntries((prev) => [
      ...prev,
      {
        id: genId(),
        toolSlug: "",
        planName: "",
        teamSize: client.teamSize || 1,
        monthlyCost: 0,
      },
    ]);
  }, [entries.length, client.teamSize]);

  const updateEntry = useCallback(
    (id: string, updates: Partial<StackEntry>) => {
      setEntries((prev) =>
        prev.map((e) => {
          if (e.id !== id) return e;
          const updated = { ...e, ...updates };

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
    setEditableNotes((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  /* ─── Analysis computation ─── */

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
        const altMonthlyCost = bestResult ? bestResult.cost : monthlyCost;
        const mSavings = Math.max(0, monthlyCost - altMonthlyCost);
        const aSavings = mSavings * 12;

        const migDiff = getMigrationDifficulty(tool.scores.migrationDifficulty);
        const migHours = getMigrationHours(migDiff);
        const confidence = getConfidenceLevel(tool);

        // Determine status
        let status: "overpaying" | "optimal" | "consider-upgrade";
        if (aSavings > 0) {
          status = "overpaying";
        } else {
          // Check if there's a more powerful option at similar price
          const hasUpgrade = tool.alternatives.some((slug) => {
            const alt = getToolBySlug(slug);
            if (!alt) return false;
            return alt.scores.power > tool.scores.power + 2;
          });
          status = hasUpgrade ? "consider-upgrade" : "optimal";
        }

        const autoNote = generateAutoNote(
          tool,
          plan,
          entry.teamSize,
          monthlyCost,
          bestAlt,
          bestAltPlan,
          altMonthlyCost,
          migDiff,
          status
        );

        return {
          entry,
          tool,
          plan,
          annualCost,
          bestAlt,
          bestAltPlan,
          monthlySavings: mSavings,
          annualSavings: aSavings,
          migrationDifficulty: migDiff,
          migrationHours: migHours,
          confidence,
          status,
          autoNote,
          editableNote: editableNotes[entry.id] ?? autoNote,
          compareUrl: bestAlt
            ? buildCompareUrl(tool.slug, bestAlt.slug)
            : `${SITE}/tools/${tool.slug}`,
          guideUrl: `${SITE}/tools/${tool.slug}`,
        };
      });
  }, [entries, editableNotes]);

  const totalMonthly = analyses.reduce(
    (sum, a) => sum + (a.entry.monthlyCost > 0 ? a.entry.monthlyCost : getMonthlyCost(a.plan, a.entry.teamSize)),
    0
  );
  const totalMonthlySavings = analyses.reduce((sum, a) => sum + a.monthlySavings, 0);
  const totalAnnualSavings = analyses.reduce((sum, a) => sum + a.annualSavings, 0);
  const optimizedMonthly = totalMonthly - totalMonthlySavings;
  const auditScore = computeAuditScore(analyses);
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sortedAnalyses = useMemo(
    () => [...analyses].sort((a, b) => b.annualSavings - a.annualSavings),
    [analyses]
  );

  /* ─── Generate analysis phase ─── */

  const handleGenerateAnalysis = useCallback(() => {
    if (entries.filter((e) => e.toolSlug).length === 0) return;
    // Initialize editable notes from auto-generated ones
    const newNotes: Record<string, string> = {};
    entries.forEach((entry) => {
      if (!entry.toolSlug) return;
      const tool = getToolBySlug(entry.toolSlug);
      if (!tool) return;
      const plan = findPlan(tool, entry.planName);
      const monthlyCost = entry.monthlyCost > 0 ? entry.monthlyCost : getMonthlyCost(plan, entry.teamSize);
      const bestResult = findBestAlternative(tool, plan, entry.teamSize);
      const altMonthlyCost = bestResult ? bestResult.cost : monthlyCost;
      const migDiff = getMigrationDifficulty(tool.scores.migrationDifficulty);
      const aSavings = Math.max(0, (monthlyCost - altMonthlyCost) * 12);
      let status: "overpaying" | "optimal" | "consider-upgrade";
      if (aSavings > 0) {
        status = "overpaying";
      } else {
        const hasUpgrade = tool.alternatives.some((slug) => {
          const alt = getToolBySlug(slug);
          return alt ? alt.scores.power > tool.scores.power + 2 : false;
        });
        status = hasUpgrade ? "consider-upgrade" : "optimal";
      }

      if (!editableNotes[entry.id]) {
        newNotes[entry.id] = generateAutoNote(
          tool,
          plan,
          entry.teamSize,
          monthlyCost,
          bestResult?.alt ?? null,
          bestResult?.altPlan ?? null,
          altMonthlyCost,
          migDiff,
          status
        );
      }
    });
    setEditableNotes((prev) => ({ ...prev, ...newNotes }));
    setPhase("analysis");
  }, [entries, editableNotes]);

  /* ─── Save / Load ─── */

  const saveReport = useCallback(() => {
    const report: SavedReport = {
      id: genId(),
      client,
      entries,
      notes: editableNotes,
      date: new Date().toISOString(),
    };
    const updated = [report, ...savedReports.filter((r) => r.client.email !== client.email)];
    setSavedReports(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  }, [client, entries, editableNotes, savedReports]);

  const loadReport = useCallback((report: SavedReport) => {
    setClient(report.client);
    setEntries(report.entries);
    setEditableNotes(report.notes);
    setPhase("input");
  }, []);

  /* ─── Plain text for email ─── */

  function generatePlainText(): string {
    const lines: string[] = [];
    const bar = "=".repeat(60);
    const divider = "-".repeat(60);

    lines.push(bar);
    lines.push("SASANOVA SOFTWARE STACK AUDIT REPORT");
    lines.push(bar);
    lines.push("");
    lines.push(`Client: ${client.name || "N/A"}`);
    lines.push(`Company: ${client.company || "N/A"}`);
    lines.push(`Email: ${client.email || "N/A"}`);
    lines.push(`Team Size: ${client.teamSize}`);
    if (client.monthlyBudget) lines.push(`Monthly Budget: $${client.monthlyBudget}`);
    lines.push(`Date: ${today}`);
    lines.push("");
    lines.push(divider);
    lines.push("EXECUTIVE SUMMARY");
    lines.push(divider);
    lines.push(`  Current monthly SaaS spend: $${fmt(totalMonthly)}`);
    lines.push(`  Optimized monthly spend: $${fmt(optimizedMonthly)}`);
    lines.push(`  Monthly savings: $${fmt(totalMonthlySavings)}`);
    lines.push(`  Annual savings: $${fmt(totalAnnualSavings)}`);
    lines.push(`  Audit score: ${auditScore}/100`);
    lines.push(`  Tools audited: ${analyses.length}`);
    lines.push("");

    lines.push(divider);
    lines.push("TOOL-BY-TOOL ANALYSIS");
    lines.push(divider);

    analyses.forEach((a, i) => {
      const monthlyCost = a.entry.monthlyCost > 0 ? a.entry.monthlyCost : getMonthlyCost(a.plan, a.entry.teamSize);
      lines.push("");
      lines.push(`${i + 1}. ${a.tool.name} - ${a.plan?.name ?? "N/A"}`);
      lines.push(`   Status: ${a.status.toUpperCase().replace("-", " ")}`);
      lines.push(`   Monthly cost: $${fmt(monthlyCost)} | Annual: $${fmt(a.annualCost)}`);
      lines.push(`   Team size: ${a.entry.teamSize} users`);

      if (a.bestAlt && a.bestAltPlan) {
        const altCost = getMonthlyCost(a.bestAltPlan, a.entry.teamSize);
        lines.push(`   Alternative: ${a.bestAlt.name} ${a.bestAltPlan.name} at $${fmt(altCost)}/mo`);
        lines.push(`   Savings: $${fmt(a.monthlySavings)}/mo ($${fmt(a.annualSavings)}/yr)`);
      }

      lines.push(`   Migration: ${a.migrationDifficulty} (~${a.migrationHours} hours)`);
      lines.push(`   Confidence: ${a.confidence.charAt(0).toUpperCase() + a.confidence.slice(1)}`);
      lines.push("");
      lines.push(`   Analysis:`);
      // Wrap the note at ~70 chars
      const note = a.editableNote;
      const words = note.split(" ");
      let line = "   ";
      for (const word of words) {
        if (line.length + word.length + 1 > 73) {
          lines.push(line);
          line = "   " + word;
        } else {
          line += (line.trim() === "" ? "" : " ") + word;
        }
      }
      if (line.trim()) lines.push(line);

      lines.push(`   Details: ${a.guideUrl}`);
      if (a.bestAlt) lines.push(`   Comparison: ${a.compareUrl}`);
    });

    lines.push("");
    lines.push(divider);
    lines.push("RECOMMENDED ACTION PLAN");
    lines.push(divider);

    sortedAnalyses.forEach((a, i) => {
      if (a.annualSavings > 0) {
        lines.push(`  ${i + 1}. ${a.tool.name} -> ${a.bestAlt?.name ?? "Alternative"}: Save $${fmt(a.annualSavings)}/yr`);
        const weeks = a.migrationDifficulty === "Easy" ? "1-2" : a.migrationDifficulty === "Moderate" ? "2-4" : "4-8";
        lines.push(`     Timeline: ${weeks} weeks | Difficulty: ${a.migrationDifficulty}`);
      } else {
        lines.push(`  ${i + 1}. ${a.tool.name}: Keep (already optimal)`);
      }
    });

    lines.push("");
    lines.push(divider);
    lines.push("TOTAL SAVINGS SUMMARY");
    lines.push(divider);
    lines.push(`  Monthly: $${fmt(totalMonthly)} -> $${fmt(optimizedMonthly)} (save $${fmt(totalMonthlySavings)}/mo)`);
    lines.push(`  Annual: $${fmt(totalMonthly * 12)} -> $${fmt(optimizedMonthly * 12)} (save $${fmt(totalAnnualSavings)}/yr)`);
    lines.push(`  3-Year: Save $${fmt(totalAnnualSavings * 3)} total`);
    lines.push("");
    lines.push(divider);
    lines.push("Report generated by Sasanova (sasanova.com)");
    lines.push("Methodology: sasanova.com/methodology");
    lines.push("Contact: sasanovatools@gmail.com");

    return lines.join("\n");
  }

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generatePlainText());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = generatePlainText();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [analyses, client, totalMonthly, totalMonthlySavings, totalAnnualSavings, auditScore, editableNotes]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /* ═══════════════════════════════════════════════════════════
     Render: Status Badge
     ═══════════════════════════════════════════════════════════ */

  function StatusBadge({ status }: { status: ToolAnalysis["status"] }) {
    const config = {
      overpaying: {
        label: "OVERPAYING",
        cls: "bg-[var(--warning-light)] text-[var(--warning)] border-[var(--warning)]/30 print:bg-yellow-50 print:text-yellow-700 print:border-yellow-300",
      },
      optimal: {
        label: "OPTIMAL",
        cls: "bg-[var(--success-light)] text-[var(--success)] border-[var(--success)]/30 print:bg-green-50 print:text-green-700 print:border-green-300",
      },
      "consider-upgrade": {
        label: "CONSIDER UPGRADE",
        cls: "bg-blue-500/10 text-blue-400 border-blue-400/30 print:bg-blue-50 print:text-blue-700 print:border-blue-300",
      },
    };
    const c = config[status];
    return (
      <span className={`shrink-0 px-3 py-1 text-xs font-bold rounded-full border ${c.cls}`}>
        {c.label}
      </span>
    );
  }

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
                Audit Report Generator
              </h1>
              <p className="text-[var(--muted)] text-sm mt-1">
                Generate professional software stack audit reports
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
        {/* ── Saved Reports ── */}
        {savedReports.length > 0 && phase === "input" && (
          <div className="mb-8 no-print">
            <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">
              Previous Reports
            </h3>
            <div className="flex flex-wrap gap-2">
              {savedReports.map((r) => (
                <button
                  key={r.id}
                  onClick={() => loadReport(r)}
                  className="px-3 py-1.5 text-sm bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
                >
                  {r.client.company || r.client.name || "Unnamed"}{" "}
                  <span className="text-[var(--muted)]">
                    ({new Date(r.date).toLocaleDateString()})
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
           PHASE 1: Input
           ═══════════════════════════════════════════════════════ */}
        {phase === "input" && (
          <div className="space-y-6 no-print">
            {/* Client info */}
            <div>
              <h2 className="text-lg font-bold mb-4">Client Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Client Name *</label>
                  <input
                    type="text"
                    value={client.name}
                    onChange={(e) => setClient((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Company *</label>
                  <input
                    type="text"
                    value={client.company}
                    onChange={(e) => setClient((p) => ({ ...p, company: e.target.value }))}
                    placeholder="e.g. Acme Corp"
                    className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Client Email</label>
                  <input
                    type="email"
                    value={client.email}
                    onChange={(e) => setClient((p) => ({ ...p, email: e.target.value }))}
                    placeholder="client@example.com"
                    className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Team Size</label>
                  <input
                    type="number"
                    min={1}
                    value={client.teamSize}
                    onChange={(e) => setClient((p) => ({ ...p, teamSize: Math.max(1, parseInt(e.target.value) || 1) }))}
                    className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Monthly Budget <span className="text-[var(--muted)]">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={client.monthlyBudget}
                    onChange={(e) => setClient((p) => ({ ...p, monthlyBudget: e.target.value }))}
                    placeholder="e.g. 500"
                    className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>
              </div>
            </div>

            {/* Tool entries */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">
                  Current Tools{" "}
                  <span className="text-sm font-normal text-[var(--muted)]">
                    ({entries.length}/20)
                  </span>
                </h2>
                <button
                  onClick={addEntry}
                  disabled={entries.length >= 20}
                  className="px-4 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  + Add Tool
                </button>
              </div>

              {entries.length === 0 && (
                <div className="text-center py-12 text-[var(--muted)] border border-dashed border-[var(--border)] rounded-xl">
                  <p className="text-sm">
                    No tools added yet. Click &quot;+ Add Tool&quot; to start the audit.
                  </p>
                </div>
              )}

              <div className="space-y-3">
                {entries.map((entry) => {
                  const tool = entry.toolSlug ? getToolBySlug(entry.toolSlug) : null;
                  const monthlyCost = tool
                    ? (entry.monthlyCost > 0 ? entry.monthlyCost : getMonthlyCost(findPlan(tool, entry.planName), entry.teamSize))
                    : 0;
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
                          Plan
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
                          Seats
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
                          ${fmt(monthlyCost)}/mo
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
                          placeholder="Auto"
                          className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                      <div className="col-span-3 sm:col-span-1 flex justify-end">
                        <button
                          onClick={() => removeEntry(entry.id)}
                          className="p-2 text-[var(--muted)] hover:text-[var(--danger)] transition-colors"
                          title="Remove"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Running total */}
            {entries.filter((e) => e.toolSlug).length > 0 && (
              <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--muted)]">Total Monthly Spend</p>
                    <p className="text-2xl font-bold">${fmt(totalMonthly)}/mo</p>
                    <p className="text-xs text-[var(--muted)]">${fmt(totalMonthly * 12)}/year across {entries.filter((e) => e.toolSlug).length} tools</p>
                  </div>
                  <button
                    onClick={handleGenerateAnalysis}
                    className="px-6 py-3 text-sm font-bold bg-[var(--accent)] text-white rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Generate Analysis
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
           PHASE 2: Analysis (editable notes)
           ═══════════════════════════════════════════════════════ */}
        {phase === "analysis" && (
          <div className="space-y-6 no-print">
            {/* Summary bar */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-lg font-bold">Analysis for {client.company || client.name || "Client"}</h2>
                <p className="text-sm text-[var(--muted)]">
                  {analyses.length} tools analyzed | ${fmt(totalMonthly)}/mo spend | ${fmt(totalAnnualSavings)}/yr potential savings
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setPhase("input")}
                  className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg hover:bg-[var(--surface-alt)] transition-colors"
                >
                  Back to Edit
                </button>
                <button
                  onClick={() => setPhase("report")}
                  className="px-6 py-2 text-sm font-bold bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Generate Final Report
                </button>
              </div>
            </div>

            {/* Tool-by-tool editable analysis */}
            <div className="space-y-4">
              {analyses.map((a, i) => {
                const monthlyCost = a.entry.monthlyCost > 0 ? a.entry.monthlyCost : getMonthlyCost(a.plan, a.entry.teamSize);
                const altCost = a.bestAltPlan ? getMonthlyCost(a.bestAltPlan, a.entry.teamSize) : 0;

                return (
                  <div
                    key={a.entry.id}
                    className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl space-y-3"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-base">
                          {i + 1}. {a.tool.name} — {a.plan?.name ?? "N/A"}
                        </h3>
                        <p className="text-sm text-[var(--muted)]">
                          ${fmt(monthlyCost)}/mo ({a.entry.teamSize} users) | ${fmt(a.annualCost)}/yr
                        </p>
                      </div>
                      <StatusBadge status={a.status} />
                    </div>

                    {/* Alternative recommendation */}
                    {a.bestAlt && a.bestAltPlan && (
                      <div className="flex flex-wrap gap-4 text-sm">
                        <p>
                          <span className="text-[var(--muted)]">Alternative:</span>{" "}
                          <strong className="text-[var(--success)]">{a.bestAlt.name} {a.bestAltPlan.name}</strong>{" "}
                          at ${fmt(altCost)}/mo
                        </p>
                        <p>
                          <span className="text-[var(--muted)]">Saves:</span>{" "}
                          <strong className="text-[var(--success)]">${fmt(a.annualSavings)}/yr</strong>
                        </p>
                        <p>
                          <span className="text-[var(--muted)]">Migration:</span>{" "}
                          <strong className={
                            a.migrationDifficulty === "Easy" ? "text-[var(--success)]" :
                            a.migrationDifficulty === "Moderate" ? "text-[var(--warning)]" :
                            "text-[var(--danger)]"
                          }>{a.migrationDifficulty}</strong> (~{a.migrationHours}h)
                        </p>
                        <p>
                          <span className="text-[var(--muted)]">Confidence:</span>{" "}
                          <strong>{a.confidence.charAt(0).toUpperCase() + a.confidence.slice(1)}</strong>
                        </p>
                      </div>
                    )}

                    {!a.bestAlt && (
                      <p className="text-sm text-[var(--success)] font-medium">
                        Already optimal — no cheaper alternative with comparable features.
                      </p>
                    )}

                    {/* Editable note */}
                    <div>
                      <label className="block text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1.5">
                        Analysis Note (editable)
                      </label>
                      <textarea
                        value={editableNotes[a.entry.id] ?? a.autoNote}
                        onChange={(e) => setEditableNotes((prev) => ({ ...prev, [a.entry.id]: e.target.value }))}
                        rows={4}
                        className="w-full px-3 py-2 bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg text-sm text-[var(--foreground)] leading-relaxed resize-y focus:outline-none focus:border-[var(--accent)]"
                      />
                      <button
                        onClick={() => setEditableNotes((prev) => ({ ...prev, [a.entry.id]: a.autoNote }))}
                        className="mt-1 text-xs text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        Reset to auto-generated note
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom actions */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setPhase("report")}
                className="px-6 py-3 text-sm font-bold bg-[var(--accent)] text-white rounded-xl hover:opacity-90 transition-opacity"
              >
                Generate Final Report
              </button>
              <button
                onClick={() => setPhase("input")}
                className="px-4 py-3 text-sm border border-[var(--border)] rounded-xl hover:bg-[var(--surface-alt)] transition-colors"
              >
                Back to Inputs
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
           PHASE 3: Final Report (print-ready)
           ═══════════════════════════════════════════════════════ */}
        {phase === "report" && (
          <>
            {/* Action buttons — hidden in print */}
            <div className="flex flex-wrap gap-3 mb-6 no-print">
              <button
                onClick={() => setPhase("analysis")}
                className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg hover:bg-[var(--surface-alt)] transition-colors"
              >
                Back to Edit
              </button>
              <button
                onClick={handlePrint}
                className="px-4 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Print to PDF
              </button>
              <button
                onClick={handleCopy}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  copySuccess
                    ? "bg-[var(--success)] text-black"
                    : "bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]"
                }`}
              >
                {copySuccess ? "Copied!" : "Copy as Plain Text"}
              </button>
              <button
                onClick={saveReport}
                className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg hover:bg-[var(--surface-alt)] transition-colors"
              >
                Save Report
              </button>
              <button
                onClick={() => setPhase("input")}
                className="px-4 py-2 text-sm border border-[var(--border)] rounded-lg hover:bg-[var(--surface-alt)] transition-colors"
              >
                Back to Inputs
              </button>
            </div>

            {/* The report — white in print */}
            <div className="print-report bg-white text-gray-900 border border-[var(--border)] rounded-2xl p-8 sm:p-10 leading-relaxed print:border-none print:p-0 print:rounded-none print:shadow-none">
              {/* Report Header */}
              <div className="text-center mb-10 pb-6 border-b-2 border-gray-200">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold">
                    Sasanova
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 mb-3">
                  Software Stack Audit Report
                </h2>
                <div className="text-sm text-gray-500 space-y-0.5">
                  <p>
                    Prepared for: <strong className="text-gray-900">{client.name || "Client"}</strong>
                    {client.company && <> at <strong className="text-gray-900">{client.company}</strong></>}
                  </p>
                  {client.email && <p>{client.email}</p>}
                  <p>Team size: {client.teamSize} | Date: {today}</p>
                  {client.monthlyBudget && <p>Stated monthly budget: ${client.monthlyBudget}</p>}
                </div>
              </div>

              {/* 1. Executive Summary */}
              <div className="mb-10">
                <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  Executive Summary
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 border border-gray-200 rounded-xl text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Current Spend</p>
                    <p className="text-xl font-extrabold text-gray-900">${fmt(totalMonthly)}<span className="text-sm font-normal text-gray-400">/mo</span></p>
                    <p className="text-xs text-gray-400">${fmt(totalMonthly * 12)}/year</p>
                  </div>
                  <div className="p-4 border border-emerald-200 bg-emerald-50 rounded-xl text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Savings Found</p>
                    <p className="text-xl font-extrabold text-emerald-600">${fmt(totalMonthlySavings)}<span className="text-sm font-normal text-emerald-400">/mo</span></p>
                    <p className="text-xs text-gray-500">${fmt(totalAnnualSavings)}/year</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Audit Score</p>
                    <p className={`text-xl font-extrabold ${
                      auditScore >= 80 ? "text-emerald-600" :
                      auditScore >= 50 ? "text-amber-500" :
                      "text-red-500"
                    }`}>{auditScore}/100</p>
                    <p className="text-xs text-gray-400">{analyses.length} tools audited</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Optimized Spend</p>
                    <p className="text-xl font-extrabold text-gray-900">${fmt(optimizedMonthly)}<span className="text-sm font-normal text-gray-400">/mo</span></p>
                    <p className="text-xs text-gray-400">${fmt(optimizedMonthly * 12)}/year</p>
                  </div>
                </div>
              </div>

              {/* 2. Tool-by-Tool Analysis */}
              <div className="mb-10">
                <div className="border-t-2 border-gray-200 pt-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Tool-by-Tool Analysis
                  </h3>
                </div>

                {analyses.map((a, i) => {
                  const monthlyCost = a.entry.monthlyCost > 0 ? a.entry.monthlyCost : getMonthlyCost(a.plan, a.entry.teamSize);
                  const altCost = a.bestAltPlan ? getMonthlyCost(a.bestAltPlan, a.entry.teamSize) : 0;

                  return (
                    <div
                      key={a.entry.id}
                      className="mb-8 pb-6 border-b border-gray-100 last:border-0 print-avoid-break"
                    >
                      {/* Tool header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="text-base font-bold text-gray-900">
                          {i + 1}. {a.tool.name} — {a.plan?.name ?? "N/A"}
                        </h4>
                        <span className={`shrink-0 px-3 py-1 text-xs font-bold rounded-full border ${
                          a.status === "overpaying"
                            ? "bg-amber-50 text-amber-600 border-amber-200"
                            : a.status === "consider-upgrade"
                              ? "bg-blue-50 text-blue-600 border-blue-200"
                              : "bg-emerald-50 text-emerald-600 border-emerald-200"
                        }`}>
                          {a.status === "overpaying" ? "OVERPAYING" : a.status === "consider-upgrade" ? "CONSIDER UPGRADE" : "OPTIMAL"}
                        </span>
                      </div>

                      <div className="space-y-2 pl-4 text-sm text-gray-700">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                          <div>
                            <span className="text-gray-400">Monthly Cost</span>
                            <p className="font-bold text-gray-900">${fmt(monthlyCost)}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Annual Cost</span>
                            <p className="font-bold text-gray-900">${fmt(a.annualCost)}</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Team Size</span>
                            <p className="font-bold text-gray-900">{a.entry.teamSize} users</p>
                          </div>
                          <div>
                            <span className="text-gray-400">Confidence</span>
                            <p className={`font-bold ${
                              a.confidence === "high" ? "text-emerald-600" :
                              a.confidence === "medium" ? "text-amber-500" :
                              "text-red-500"
                            }`}>{a.confidence.charAt(0).toUpperCase() + a.confidence.slice(1)}</p>
                          </div>
                        </div>

                        {a.bestAlt && a.bestAltPlan && (
                          <div className="mt-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                            <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">Recommendation</p>
                            <p className="text-sm text-gray-800">
                              Switch to <strong>{a.bestAlt.name} {a.bestAltPlan.name}</strong> at ${fmt(altCost)}/mo — saves <strong className="text-emerald-600">${fmt(a.annualSavings)}/year</strong>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Migration: {a.migrationDifficulty} (~{a.migrationHours} hours)
                            </p>
                          </div>
                        )}

                        {!a.bestAlt && (
                          <div className="mt-3 p-3 bg-gray-50 border border-gray-100 rounded-lg">
                            <p className="text-sm text-emerald-600 font-medium">
                              Already optimal — no cheaper alternative with comparable features.
                            </p>
                          </div>
                        )}

                        {/* The analysis note */}
                        <div className="mt-3 p-3 bg-gray-50 border border-gray-100 rounded-lg">
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Analysis</p>
                          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {a.editableNote}
                          </p>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4 pt-1 text-xs">
                          <a href={a.guideUrl} className="text-blue-600 hover:underline">
                            Tool details &rarr;
                          </a>
                          {a.bestAlt && (
                            <a href={a.compareUrl} className="text-blue-600 hover:underline">
                              Full comparison &rarr;
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 3. Recommended Action Plan */}
              <div className="mb-10">
                <div className="border-t-2 border-gray-200 pt-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Recommended Action Plan
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Sorted by potential savings, highest first</p>
                </div>

                <div className="space-y-3">
                  {sortedAnalyses.map((a, i) => {
                    const weeks = a.migrationDifficulty === "Easy" ? "1-2" : a.migrationDifficulty === "Moderate" ? "2-4" : "4-8";
                    return (
                      <div
                        key={a.entry.id}
                        className={`p-4 rounded-xl border print-avoid-break ${
                          a.annualSavings > 0
                            ? "border-emerald-200 bg-emerald-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                              Priority {i + 1}
                            </p>
                            <p className="font-bold text-gray-900">
                              {a.tool.name} &rarr;{" "}
                              {a.annualSavings > 0 ? (
                                <>
                                  {a.bestAlt?.name ?? "Alternative"}:{" "}
                                  <span className="text-emerald-600">
                                    Save ${fmt(a.annualSavings)}/year
                                  </span>
                                </>
                              ) : (
                                <span className="text-emerald-600">Keep (already optimal)</span>
                              )}
                            </p>
                            {a.annualSavings > 0 && (
                              <p className="text-xs text-gray-500 mt-0.5">
                                Timeline: {weeks} weeks | Difficulty: {a.migrationDifficulty}
                              </p>
                            )}
                          </div>
                          {a.annualSavings > 0 && (
                            <p className="text-lg font-extrabold text-emerald-600 shrink-0">
                              ${fmt(a.monthlySavings)}<span className="text-sm font-normal text-gray-400">/mo</span>
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Total Savings Summary */}
              <div className="mb-10">
                <div className="border-t-2 border-gray-200 pt-6 mb-4">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
                    Total Savings Summary
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 border border-gray-200 rounded-xl text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Monthly</p>
                    <p className="font-bold text-gray-900">${fmt(totalMonthly)} &rarr; ${fmt(optimizedMonthly)}</p>
                    <p className="text-sm text-emerald-600 font-bold">Save ${fmt(totalMonthlySavings)}/mo</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-xl text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Annual</p>
                    <p className="font-bold text-gray-900">${fmt(totalMonthly * 12)} &rarr; ${fmt(optimizedMonthly * 12)}</p>
                    <p className="text-sm text-emerald-600 font-bold">Save ${fmt(totalAnnualSavings)}/yr</p>
                  </div>
                  <div className="p-5 border border-emerald-200 bg-emerald-50 rounded-xl text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">3-Year Savings</p>
                    <p className="text-2xl font-extrabold text-emerald-600">${fmt(totalAnnualSavings * 3)}</p>
                  </div>
                </div>
              </div>

              {/* 5. Footer */}
              <div className="pt-6 border-t-2 border-gray-200 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-semibold mb-1">
                  Sasanova
                </p>
                <p className="text-sm text-gray-500">
                  Independent software comparisons backed by verified pricing data
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  sasanova.com | Methodology: sasanova.com/methodology | sasanovatools@gmail.com
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* ═══════════════════════════════════════════════════════
         Print Styles
         ═══════════════════════════════════════════════════════ */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: #111 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .print-report {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          .print-avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          header {
            display: none !important;
          }
          a[href]::after {
            content: none !important;
          }
          @page {
            margin: 0.75in;
          }
        }
      `}</style>
    </div>
  );
}
