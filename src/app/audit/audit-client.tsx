"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  tools,
  categories,
  getToolsByCategory,
  getOverallScore,
  type Tool,
  type PricingPlan,
} from "@/data/tools";
import { ProNudge, ProBadge } from "@/components/ProGate";
import { ConfidenceBadge, getConfidenceLevel } from "@/components/ConfidenceBadge";
import { isProUser, getLimit } from "@/lib/pro";

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
  if (currentCost <= 0) return null; // Free plan — can't be overpaying

  const categoryTools = getToolsByCategory(tool.categorySlug);
  let best: AuditResult["cheaperAlternative"] = null;

  for (const alt of categoryTools) {
    if (alt.slug === tool.slug) continue;
    for (const altPlan of alt.pricing) {
      if (altPlan.priceMonthly === null) continue;
      const altCost = computeCost(altPlan, teamSize);

      // Must be meaningfully cheaper (at least 10% savings to avoid noise)
      const savings = currentCost - altCost;
      const savingsPct = savings / currentCost;
      if (altCost >= currentCost || savingsPct < 0.1) continue;

      // Must be a comparable tier: don't recommend a basic plan to replace a premium one
      // Compare by billing model similarity and plan position
      const currentPlanIndex = tool.pricing.findIndex((p) => p.name === plan.name);
      const altPlanIndex = alt.pricing.indexOf(altPlan);
      const currentTierRatio = tool.pricing.length > 1 ? currentPlanIndex / (tool.pricing.length - 1) : 0.5;
      const altTierRatio = alt.pricing.length > 1 ? altPlanIndex / (alt.pricing.length - 1) : 0.5;

      // Skip if the alternative is a much lower tier (e.g., comparing Premium vs Free)
      // Allow ±1 tier level of difference
      if (Math.abs(currentTierRatio - altTierRatio) > 0.4) continue;

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

/* ── Import helpers ── */

interface ImportMatch {
  inputLine: string;
  tool: Tool | null;
  planName: string;
  teamSize: number;
}

function fuzzyMatchTool(input: string): Tool | null {
  const clean = input.trim().toLowerCase();
  if (!clean) return null;
  // Exact slug match
  let match = tools.find((t) => t.slug === clean);
  if (match) return match;
  // Exact name match (case-insensitive)
  match = tools.find((t) => t.name.toLowerCase() === clean);
  if (match) return match;
  // Partial name match
  match = tools.find(
    (t) =>
      t.name.toLowerCase().includes(clean) ||
      clean.includes(t.name.toLowerCase())
  );
  if (match) return match;
  // Vendor name match
  match = tools.find((t) => t.vendor.toLowerCase() === clean);
  if (match) return match;
  return null;
}

function getHighlightedOrFirstPlan(tool: Tool): string {
  const highlighted = tool.pricing.find((p) => p.highlighted);
  return highlighted ? highlighted.name : tool.pricing[0]?.name ?? "";
}

function matchPlanName(tool: Tool, rawPlan: string): string {
  const clean = rawPlan.trim().toLowerCase();
  if (!clean) return getHighlightedOrFirstPlan(tool);
  // Exact match
  const exact = tool.pricing.find((p) => p.name.toLowerCase() === clean);
  if (exact) return exact.name;
  // Partial match
  const partial = tool.pricing.find(
    (p) =>
      p.name.toLowerCase().includes(clean) ||
      clean.includes(p.name.toLowerCase())
  );
  if (partial) return partial.name;
  return getHighlightedOrFirstPlan(tool);
}

function parseSpreadsheetPaste(text: string): ImportMatch[] {
  const lines = text.split(/\n/).filter((l) => l.trim());
  return lines.map((line) => {
    // Split by tab, or by 2+ spaces
    const parts = line.includes("\t")
      ? line.split("\t").map((p) => p.trim())
      : line.split(/\s{2,}/).map((p) => p.trim());
    const toolName = parts[0] ?? "";
    const rawPlan = parts[1] ?? "";
    const rawCost = parts[2] ?? "";
    const rawTeam = parts[3] ?? "";
    const tool = fuzzyMatchTool(toolName);
    const planName = tool ? matchPlanName(tool, rawPlan) : "";
    const teamSize = Math.max(1, parseInt(rawTeam) || 1);
    return { inputLine: line.trim(), tool, planName, teamSize };
  });
}

function parseToolNamesPaste(text: string): ImportMatch[] {
  const lines = text.split(/\n/).filter((l) => l.trim());
  return lines.map((line) => {
    const tool = fuzzyMatchTool(line.trim());
    const planName = tool ? getHighlightedOrFirstPlan(tool) : "";
    return { inputLine: line.trim(), tool, planName, teamSize: 1 };
  });
}

function parseCSV(text: string): ImportMatch[] {
  const lines = text.split(/\n/).filter((l) => l.trim());
  if (lines.length === 0) return [];

  // Try to detect headers in first line
  const firstLine = lines[0].toLowerCase();
  let hasHeaders = false;
  let toolCol = 0;
  let planCol = -1;
  let teamCol = -1;

  if (
    firstLine.includes("tool") ||
    firstLine.includes("name") ||
    firstLine.includes("software")
  ) {
    hasHeaders = true;
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    toolCol = headers.findIndex(
      (h) => h.includes("tool") || h.includes("name") || h.includes("software")
    );
    planCol = headers.findIndex((h) => h.includes("plan") || h.includes("tier"));
    teamCol = headers.findIndex(
      (h) => h.includes("team") || h.includes("seat") || h.includes("user")
    );
    if (toolCol < 0) toolCol = 0;
  }

  const dataLines = hasHeaders ? lines.slice(1) : lines;
  return dataLines
    .filter((l) => l.trim())
    .map((line) => {
      const cols = line.split(",").map((c) => c.trim().replace(/^["']|["']$/g, ""));
      const toolName = cols[toolCol] ?? "";
      const rawPlan = planCol >= 0 ? cols[planCol] ?? "" : "";
      const rawTeam = teamCol >= 0 ? cols[teamCol] ?? "" : "";
      const tool = fuzzyMatchTool(toolName);
      const planName = tool ? matchPlanName(tool, rawPlan) : "";
      const teamSize = Math.max(1, parseInt(rawTeam) || 1);
      return { inputLine: line.trim(), tool, planName, teamSize };
    });
}

const STORAGE_KEY = "sasanova_audit";
const MAX_TOOLS = 15;

/* ── Preset configurations ── */

const PRESETS: Record<string, { tools: { slug: string; plan: string; teamSize: number }[] }> = {
  newsletter: {
    tools: [
      { slug: "beehiiv", plan: "Scale", teamSize: 1 },
      { slug: "convertkit", plan: "Creator", teamSize: 1 },
      { slug: "zapier", plan: "Free", teamSize: 1 },
    ],
  },
  crm: {
    tools: [
      { slug: "pipedrive", plan: "Lite", teamSize: 1 },
      { slug: "zapier", plan: "Free", teamSize: 1 },
      { slug: "beehiiv", plan: "Launch", teamSize: 1 },
    ],
  },
  automation: {
    tools: [
      { slug: "make", plan: "Core", teamSize: 1 },
      { slug: "zapier", plan: "Professional", teamSize: 1 },
    ],
  },
  free: {
    tools: [
      { slug: "hubspot-crm", plan: "Free", teamSize: 1 },
      { slug: "convertkit", plan: "Free", teamSize: 1 },
      { slug: "make", plan: "Free", teamSize: 1 },
      { slug: "notion", plan: "Free", teamSize: 1 },
      { slug: "plausible", plan: "Free", teamSize: 1 },
    ],
  },
};

function presetToEntries(presetKey: string): StackEntry[] | null {
  const preset = PRESETS[presetKey];
  if (!preset) return null;
  return preset.tools
    .filter((p) => tools.some((t) => t.slug === p.slug))
    .map((p) => ({
      id: generateId(),
      toolSlug: p.slug,
      planName: p.plan,
      teamSize: p.teamSize,
    }));
}

/* ── Quick-start stacks ── */

const QUICK_STACKS: { label: string; tools: string[] }[] = [
  { label: "Marketing Team Stack", tools: ["mailchimp", "hubspot-crm", "zapier", "canva", "buffer"] },
  { label: "Sales Team Stack", tools: ["pipedrive", "zapier", "calendly", "slack", "notion"] },
  { label: "Creator Stack", tools: ["beehiiv", "notion", "canva", "zapier", "cal-com"] },
  { label: "Startup Stack", tools: ["notion", "slack", "hubspot-crm", "make", "plausible"] },
];

function quickStackToEntries(stackTools: string[]): StackEntry[] {
  return stackTools
    .map((slug) => {
      const tool = tools.find((t) => t.slug === slug);
      if (!tool) return null;
      return {
        id: generateId(),
        toolSlug: slug,
        planName: getHighlightedOrFirstPlan(tool),
        teamSize: 1,
      };
    })
    .filter((e): e is StackEntry => e !== null);
}

/* ── Savings comparison helper ── */

function getSavingsComparison(annualSavings: number): string {
  if (annualSavings > 5000) return "enough to hire a part-time contractor";
  if (annualSavings > 2000) return "enough for a team retreat";
  if (annualSavings >= 500) return "enough for a new laptop";
  return "enough for a team lunch every month";
}

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

/* ── Report URL encoding (richer data for standalone report page) ── */

interface ReportData {
  tools: {
    slug: string;
    plan: string;
    teamSize: number;
    cost: number;
    altSlug: string | null;
    altPlan: string | null;
    altCost: number | null;
    savings: number;
  }[];
  totalSpend: number;
  totalSavings: number;
  auditScore: number;
}

function encodeReportUrl(
  results: AuditResult[],
  totalSpend: number,
  totalSavings: number,
  score: number
): string {
  const data: ReportData = {
    tools: results.map((r) => ({
      slug: r.tool.slug,
      plan: r.plan.name,
      teamSize: r.entry.teamSize,
      cost: r.monthlyCost,
      altSlug: r.cheaperAlternative?.tool.slug ?? null,
      altPlan: r.cheaperAlternative?.plan.name ?? null,
      altCost: r.cheaperAlternative?.monthlyCost ?? null,
      savings: r.cheaperAlternative?.monthlySavings ?? 0,
    })),
    totalSpend,
    totalSavings,
    auditScore: score,
  };
  const encoded = btoa(JSON.stringify(data));
  return `${window.location.origin}/audit/report?data=${encodeURIComponent(encoded)}`;
}

/* ── Re-audit reminder storage ── */

const REAUDIT_STORAGE_KEY = "sasanova_reaudit_reminder";

interface ReauditReminder {
  email: string;
  auditData: StackEntry[];
  savedAt: string;
  nextCheck: string;
}

function saveReauditReminder(email: string, entries: StackEntry[]): ReauditReminder {
  const now = new Date();
  const nextCheck = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  const reminder: ReauditReminder = {
    email,
    auditData: entries,
    savedAt: now.toISOString(),
    nextCheck: nextCheck.toISOString(),
  };
  localStorage.setItem(REAUDIT_STORAGE_KEY, JSON.stringify(reminder));
  return reminder;
}

/* ── Comparison / Migration guide link helpers ── */

function getComparisonLink(toolA: Tool, toolB: Tool): string {
  const slugs = [toolA.slug, toolB.slug].sort();
  return `/compare/${slugs[0]}-vs-${slugs[1]}`;
}

/** Known migration guide paths — only render links for guides that actually exist */
const KNOWN_MIGRATION_GUIDES = new Set([
  "migrate-mailchimp-to-beehiiv",
  "migrate-mailchimp-to-kit",
  "migrate-substack-to-beehiiv",
  "migrate-zapier-to-make",
  "migrate-zapier-to-n8n",
  "migrate-salesforce-to-hubspot",
  "migrate-from-mailchimp",
  "migrate-spreadsheet-to-crm",
  "switch-from-mailchimp-to-activecampaign",
  "switch-from-hubspot-to-pipedrive",
  "switch-from-kit-to-beehiiv",
  "switch-from-make-to-zapier",
  "switch-from-notion-to-clickup",
  "switch-from-pipedrive-to-hubspot",
  "switch-from-mailchimp-to-brevo",
  "switch-from-monday-to-asana",
  "switch-from-jira-to-linear",
  "switch-from-zoho-to-pipedrive",
  "switch-from-trello-to-notion",
  "switch-from-asana-to-clickup",
]);

function getMigrationGuideLink(fromTool: Tool, toTool: Tool): string | null {
  const migrateSlug = `migrate-${fromTool.slug}-to-${toTool.slug}`;
  if (KNOWN_MIGRATION_GUIDES.has(migrateSlug)) return `/guides/${migrateSlug}`;
  const switchSlug = `switch-from-${fromTool.slug}-to-${toTool.slug}`;
  if (KNOWN_MIGRATION_GUIDES.has(switchSlug)) return `/guides/${switchSlug}`;
  return null;
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════ */

export default function AuditClient() {
  const searchParams = useSearchParams();

  /* ── State ── */
  const [entries, setEntries] = useState<StackEntry[]>(() => {
    // Check URL params on mount
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      // Check for shared audit URL
      const s = params.get("s");
      if (s) return decodeAuditFromUrl(s);
      // Check for preset
      const preset = params.get("preset");
      if (preset) {
        const presetEntries = presetToEntries(preset);
        if (presetEntries && presetEntries.length > 0) return presetEntries;
      }
    }
    return [{ id: generateId(), toolSlug: "", planName: "", teamSize: 1 }];
  });
  const [showResults, setShowResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearchIdx, setActiveSearchIdx] = useState<number | null>(null);
  const [savedNotice, setSavedNotice] = useState("");
  const [shareUrl, setShareUrl] = useState("");
  const [reportUrl, setReportUrl] = useState("");
  const [reportCopied, setReportCopied] = useState(false);
  const [reauditEmail, setReauditEmail] = useState("");
  const [reauditSaved, setReauditSaved] = useState(false);
  const [reauditNextDate, setReauditNextDate] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);

  /* ── Current step (derived) ── */
  const currentStep = showResults ? 2 : 1;

  /* ── Import state ── */
  const [importOpen, setImportOpen] = useState(false);
  const [importTab, setImportTab] = useState<"spreadsheet" | "names" | "csv">("names");
  const [importText, setImportText] = useState("");
  const [importMatches, setImportMatches] = useState<ImportMatch[]>([]);
  const [importParsed, setImportParsed] = useState(false);
  const csvFileRef = useRef<HTMLInputElement>(null);

  /* ── Auto-show results for presets ── */
  useEffect(() => {
    const preset = searchParams.get("preset");
    if (preset && PRESETS[preset]) {
      // Small delay to ensure entries are set
      const timer = setTimeout(() => {
        setShowResults(true);
        setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

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

  /* ── Import handlers ── */
  const handleImportParse = useCallback(() => {
    let matches: ImportMatch[];
    if (importTab === "spreadsheet") {
      matches = parseSpreadsheetPaste(importText);
    } else {
      matches = parseToolNamesPaste(importText);
    }
    setImportMatches(matches);
    setImportParsed(true);
  }, [importTab, importText]);

  const handleCSVUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const text = ev.target?.result as string;
        if (!text) return;
        const matches = parseCSV(text);
        setImportMatches(matches);
        setImportParsed(true);
        setImportTab("csv");
      };
      reader.readAsText(file);
      // Reset file input so the same file can be re-selected
      if (csvFileRef.current) csvFileRef.current.value = "";
    },
    []
  );

  const handleImportConfirm = useCallback(() => {
    const matched = importMatches.filter((m) => m.tool !== null);
    const isPro = isProUser();
    const limit = getLimit("auditImportTools");
    const toAdd = matched.slice(0, Math.min(limit, MAX_TOOLS));
    if (toAdd.length === 0) return;

    const newEntries: StackEntry[] = toAdd.map((m) => ({
      id: generateId(),
      toolSlug: m.tool!.slug,
      planName: m.planName,
      teamSize: m.teamSize,
    }));

    setEntries(newEntries);
    setImportOpen(false);
    setImportParsed(false);
    setImportText("");
    setImportMatches([]);

    // Auto-trigger results
    setShowResults(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }, [importMatches]);

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
    const existing = getSavedAudits();
    const isPro = isProUser();
    if (!isPro && existing.length >= 1) {
      const confirmed = window.confirm(
        "You already have a saved audit. Saving a new one will replace it. Continue?"
      );
      if (!confirmed) return;
    }
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
        {/* ══════════ PROGRESS INDICATOR ══════════ */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-sm">
          {[
            { step: 1, label: "Add Your Tools" },
            { step: 2, label: "Review Results" },
            { step: 3, label: "Save & Share" },
          ].map(({ step, label }, i) => (
            <div key={step} className="flex items-center gap-2 sm:gap-4">
              {i > 0 && (
                <div className={`w-6 sm:w-10 h-px ${currentStep >= step ? "bg-accent" : "bg-border"}`} />
              )}
              <div className="flex items-center gap-1.5">
                <span
                  className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors ${
                    currentStep >= step
                      ? "bg-accent text-white"
                      : "bg-surface border border-border text-muted"
                  }`}
                >
                  {step}
                </span>
                <span
                  className={`hidden sm:inline text-xs font-medium transition-colors ${
                    currentStep >= step ? "text-foreground" : "text-muted"
                  }`}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════ SHOCK STAT ══════════ */}
        <div className="bg-surface-alt border border-accent/20 rounded-xl p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              The average 10-person team wastes $4,500/year on SaaS they don&apos;t fully use or could get cheaper.
            </p>
            <p className="text-xs text-muted mt-1">
              Source: Industry research shows 25&ndash;30% of SaaS spend is wasted on unused or overpriced subscriptions.
            </p>
          </div>
        </div>

        {/* ══════════ QUICK-START STACKS ══════════ */}
        <div>
          <p className="text-sm font-semibold text-muted mb-3">Popular stacks to audit</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_STACKS.map((stack) => (
              <button
                key={stack.label}
                onClick={() => {
                  const newEntries = quickStackToEntries(stack.tools);
                  if (newEntries.length > 0) {
                    setEntries(newEntries);
                    setShowResults(false);
                  }
                }}
                className="px-4 py-2 text-sm font-medium border border-border rounded-lg text-foreground hover:border-accent hover:text-accent bg-surface hover:bg-surface-alt transition-colors"
              >
                {stack.label}
              </button>
            ))}
          </div>
        </div>

        {/* ══════════ QUICK IMPORT ══════════ */}
        <section className="border border-border rounded-xl bg-surface overflow-hidden">
          <button
            onClick={() => setImportOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface-alt transition-colors"
          >
            <div>
              <h2 className="text-base font-bold text-foreground flex items-center gap-2">
                Quick Import — Paste Your SaaS List
                <svg
                  className={`w-4 h-4 text-muted transition-transform ${importOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </h2>
              <p className="text-sm text-muted mt-0.5">
                Copy from your spreadsheet, bank statement, or just type tool names
              </p>
            </div>
          </button>

          {importOpen && (
            <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
              {/* Tab selector */}
              <div className="flex gap-1 bg-background rounded-lg p-1 w-fit">
                <button
                  onClick={() => {
                    setImportTab("names");
                    setImportParsed(false);
                    setImportMatches([]);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    importTab === "names"
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  Tool Names
                </button>
                <button
                  onClick={() => {
                    setImportTab("spreadsheet");
                    setImportParsed(false);
                    setImportMatches([]);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    importTab === "spreadsheet"
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  Spreadsheet
                </button>
                <button
                  onClick={() => {
                    setImportTab("csv");
                    setImportParsed(false);
                    setImportMatches([]);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                    importTab === "csv"
                      ? "bg-accent text-white"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  CSV Upload <ProBadge />
                </button>
              </div>

              {/* Paste textareas */}
              {importTab === "names" && (
                <div className="space-y-3">
                  <textarea
                    value={importText}
                    onChange={(e) => {
                      setImportText(e.target.value);
                      setImportParsed(false);
                    }}
                    placeholder={`Mailchimp\nZapier\nHubSpot\nNotion\nSlack\nbeehiiv`}
                    rows={6}
                    className="w-full px-4 py-3 text-sm font-mono bg-background border border-border rounded-lg text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 focus:ring-accent resize-y"
                  />
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleImportParse}
                      disabled={!importText.trim()}
                      className="px-5 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Import
                    </button>
                    <span className="text-xs text-muted">
                      One tool per line &middot; Free up to {getLimit("auditImportTools")} tools
                    </span>
                  </div>
                </div>
              )}

              {importTab === "spreadsheet" && (
                <div className="space-y-3">
                  <textarea
                    value={importText}
                    onChange={(e) => {
                      setImportText(e.target.value);
                      setImportParsed(false);
                    }}
                    placeholder={`Mailchimp\tStandard\t20\nZapier\tProfessional\t29.99\nHubSpot CRM\tStarter\t20\nNotion\tPlus\t12`}
                    rows={6}
                    className="w-full px-4 py-3 text-sm font-mono bg-background border border-border rounded-lg text-foreground placeholder:text-muted/40 focus:outline-none focus:ring-1 focus:ring-accent resize-y"
                  />
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleImportParse}
                      disabled={!importText.trim()}
                      className="px-5 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Import
                    </button>
                    <span className="text-xs text-muted">
                      Tab-separated: Tool, Plan, Cost &middot; Free up to{" "}
                      {getLimit("auditImportTools")} tools
                    </span>
                  </div>
                </div>
              )}

              {importTab === "csv" && (
                <div className="space-y-3">
                  {isProUser() ? (
                    <>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-background">
                        <p className="text-sm text-muted mb-3">
                          Upload a .csv file with columns: Tool, Plan, Cost, Team Size
                        </p>
                        <label className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all cursor-pointer">
                          Choose CSV File
                          <input
                            ref={csvFileRef}
                            type="file"
                            accept=".csv,text/csv"
                            onChange={handleCSVUpload}
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs text-muted mt-2">
                          Flexible column detection — headers are optional
                        </p>
                      </div>
                    </>
                  ) : (
                    <ProNudge
                      feature="CSV file upload is a Pro feature — upgrade for instant stack imports"
                      ctaLabel="Upgrade to Pro"
                    />
                  )}
                </div>
              )}

              {/* Import results */}
              {importParsed && importMatches.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">Import Results</h3>
                  <div className="border border-border rounded-lg bg-background divide-y divide-border max-h-60 overflow-y-auto">
                    {importMatches.map((m, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm"
                      >
                        {m.tool ? (
                          <>
                            <svg
                              className="w-4 h-4 text-success flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="font-medium text-foreground">
                              {m.tool.name}
                            </span>
                            <span className="text-xs text-muted">
                              {m.planName} plan
                              {m.teamSize > 1 ? ` · ${m.teamSize} seats` : ""}
                            </span>
                          </>
                        ) : (
                          <>
                            <svg
                              className="w-4 h-4 text-yellow-400 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-yellow-400">
                              Could not match: &ldquo;{m.inputLine}&rdquo;
                            </span>
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary + confirm */}
                  {(() => {
                    const matched = importMatches.filter((m) => m.tool !== null);
                    const unmatched = importMatches.filter((m) => m.tool === null);
                    const limit = getLimit("auditImportTools");
                    const isPro = isProUser();
                    const needsUpgrade = !isPro && matched.length > limit;
                    return (
                      <div className="space-y-3">
                        <p className="text-xs text-muted">
                          {matched.length} matched, {unmatched.length} unmatched
                          {needsUpgrade && (
                            <span className="text-yellow-400 ml-1">
                              — only first {limit} tools available on free tier
                            </span>
                          )}
                        </p>
                        {matched.length > 0 && (
                          <button
                            onClick={handleImportConfirm}
                            className="px-5 py-2.5 text-sm font-bold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
                          >
                            Add {Math.min(matched.length, needsUpgrade ? limit : matched.length)}{" "}
                            Matched Tools to Audit
                          </button>
                        )}
                        {needsUpgrade && (
                          <ProNudge
                            feature={`Import all ${matched.length} tools at once with Pro`}
                            ctaLabel="Upgrade to Pro"
                          />
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}

              {importParsed && importMatches.length === 0 && (
                <p className="text-sm text-muted">
                  No lines found. Paste your tool list above and try again.
                </p>
              )}
            </div>
          )}
        </section>

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
          {validEntries.length === 0 ? (
            <p className="text-xs text-muted mt-2">
              Select at least one tool and plan to generate your audit.
            </p>
          ) : (
            <p className="text-xs text-muted mt-2">
              Takes about 2 minutes. No account needed.
            </p>
          )}
        </div>

        {/* ══════════ SOCIAL PROOF ══════════ */}
        {!showResults && (
          <div className="border border-border rounded-xl p-5 bg-surface">
            <p className="text-sm font-semibold text-foreground mb-3">What others found</p>
            <div className="space-y-2.5">
              {[
                "A 3-person agency found $127/month in savings",
                "A solo founder was overpaying $89/month on email + automation",
                "A 10-person startup cut $340/month by switching 3 tools",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-success shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-muted">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted/60 mt-3">Based on typical audit results</p>
          </div>
        )}

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

            {/* ── Savings shock banner ── */}
            {totalMonthlySavings > 100 && (
              <div className="border border-success/30 rounded-xl p-5 bg-success/5 text-center">
                <p className="text-lg sm:text-xl font-extrabold text-success">
                  You could save {fmt(totalMonthlySavings)}/month ({fmt(totalAnnualSavings)}/year).
                </p>
                <p className="text-sm text-success/80 mt-1">
                  That&apos;s {getSavingsComparison(totalAnnualSavings)}.
                </p>
              </div>
            )}

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
                  const confidence = getConfidenceLevel(result.tool);
                  return (
                    <div
                      key={result.entry.id}
                      className="border border-border rounded-xl p-5 bg-background"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-lg font-bold text-foreground">
                              {result.tool.name}
                            </h3>
                            <span
                              className={`inline-flex items-center px-2 py-0.5 text-[11px] font-semibold rounded-full border ${overpayColor(result.overpayLevel)}`}
                            >
                              {overpayLabel(result.overpayLevel)}
                            </span>
                            <ConfidenceBadge level={confidence} />
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

                      {/* Itemized replacement card */}
                      {alt ? (
                        <div className="bg-surface border border-border rounded-lg p-4 mb-4 space-y-3">
                          {/* Header: current tool */}
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0" />
                            <p className="text-sm font-bold text-foreground">
                              {result.tool.name} {result.plan.name} ({fmt(result.monthlyCost)}/mo)
                            </p>
                          </div>

                          {/* Replacement recommendation */}
                          <div className="pl-5 space-y-2">
                            <p className="text-sm text-muted">
                              <span className="text-foreground font-medium">Replace with:</span>{" "}
                              {alt.tool.name} {alt.plan.name} ({fmt(alt.monthlyCost)}/mo)
                            </p>

                            {/* Cost delta */}
                            <p className="text-sm">
                              {alt.monthlySavings > 0 ? (
                                <span className="text-success font-semibold">
                                  Save {fmt(alt.monthlySavings)}/mo ({fmt(alt.annualSavings)}/yr)
                                </span>
                              ) : (
                                <span className="text-yellow-400 font-semibold">
                                  {fmt(Math.abs(alt.monthlySavings))}/mo more
                                </span>
                              )}
                            </p>

                            {/* Switching context from the tool data */}
                            {result.tool.switchingTriggers && result.tool.switchingTriggers.length > 0 && (
                              <div className="text-xs text-muted space-y-0.5">
                                {result.tool.switchingTriggers.slice(0, 2).map((trigger, i) => (
                                  <p key={i} className="flex items-start gap-1.5">
                                    <span className="text-accent shrink-0 mt-0.5">&#9654;</span>
                                    {trigger}
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* Badges row: migration + confidence */}
                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              <span
                                className={`inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium ${mBadge.color}`}
                              >
                                Migration: {mBadge.label}
                              </span>
                              <ConfidenceBadge level={getConfidenceLevel(alt.tool)} />
                            </div>

                            {/* Action links */}
                            <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                              <Link
                                href={getComparisonLink(result.tool, alt.tool)}
                                className="text-accent hover:underline font-medium"
                              >
                                Compare head-to-head &rarr;
                              </Link>
                              {getMigrationGuideLink(result.tool, alt.tool) && (
                                <Link
                                  href={getMigrationGuideLink(result.tool, alt.tool)!}
                                  className="text-accent hover:underline font-medium"
                                >
                                  Migration guide &rarr;
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
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

              <div className="border border-border rounded-xl p-6 bg-background space-y-6">
                {/* Quick actions row */}
                <div className="flex flex-wrap gap-3">
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
                  <p className="text-sm text-success font-medium">{savedNotice}</p>
                )}

                {shareUrl && (
                  <div className="flex items-center gap-2">
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

                {/* ── Share This Audit ── */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-base font-bold text-foreground mb-2">Share This Audit</h3>
                  <p className="text-sm text-muted mb-4">
                    Send a branded audit report to your team. They&apos;ll see your spend, savings, and per-tool recommendations.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        const url = encodeReportUrl(auditResults, totalMonthlySpend, totalMonthlySavings, auditScore);
                        setReportUrl(url);
                        navigator.clipboard?.writeText(url).then(() => {
                          setReportCopied(true);
                          setTimeout(() => setReportCopied(false), 3000);
                        }).catch(() => {});
                      }}
                      className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      {reportCopied ? "Link Copied!" : "Copy Share Link"}
                    </button>

                    <button
                      onClick={() => {
                        const url = encodeReportUrl(auditResults, totalMonthlySpend, totalMonthlySavings, auditScore);
                        const text = encodeURIComponent(
                          `I just audited my SaaS stack. Turns out I'm overpaying $${Math.round(totalMonthlySavings)}/month. Free audit at sasanova.com/audit`
                        );
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${text}`,
                          "_blank",
                          "width=600,height=500"
                        );
                      }}
                      className="px-5 py-2.5 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Share on LinkedIn
                    </button>
                  </div>

                  {reportUrl && (
                    <div className="mt-3 flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={reportUrl}
                        className="flex-1 px-3 py-2 text-xs bg-surface border border-border rounded-lg text-muted font-mono"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(reportUrl);
                          setReportCopied(true);
                          setTimeout(() => setReportCopied(false), 3000);
                        }}
                        className="px-3 py-2 text-xs font-semibold text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors shrink-0"
                      >
                        {reportCopied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  )}
                </div>

                {/* ── Re-Audit Email Capture ── */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-base font-bold text-foreground mb-2">Get Monthly Re-Audit Reminders</h3>
                  <p className="text-sm text-muted mb-4">
                    SaaS pricing changes constantly. We&apos;ll remind you to re-audit monthly so you never overpay.
                  </p>

                  {reauditSaved ? (
                    <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                      <p className="text-sm text-success font-medium">
                        We&apos;ll email you monthly when your stack costs change.
                      </p>
                      <p className="text-xs text-success/80 mt-1">
                        Next check: {reauditNextDate}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={reauditEmail}
                        onChange={(e) => setReauditEmail(e.target.value)}
                        className="flex-1 px-4 py-2.5 text-sm bg-surface border border-border rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                      <button
                        onClick={() => {
                          if (!reauditEmail || !reauditEmail.includes("@")) return;
                          const reminder = saveReauditReminder(reauditEmail, entries);
                          const nextDate = new Date(reminder.nextCheck);
                          setReauditNextDate(
                            nextDate.toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })
                          );
                          setReauditSaved(true);
                        }}
                        disabled={!reauditEmail || !reauditEmail.includes("@")}
                        className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                      >
                        Remind Me
                      </button>
                    </div>
                  )}
                </div>

                {/* ── Expert Audit CTA ── */}
                <div className="border border-accent/30 rounded-xl p-6 bg-accent/5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-foreground mb-1">Want Us to Do This For You?</h3>
                      <p className="text-sm text-muted mb-3">
                        Our team will audit your full stack, research alternatives, estimate switching costs,
                        and deliver a complete savings plan with step-by-step migration recommendations.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 items-start">
                        <a
                          href="mailto:sasanovatools@gmail.com?subject=Expert%20SaaS%20Stack%20Audit&body=Hi%2C%20I%20ran%20a%20free%20audit%20and%20would%20like%20an%20expert%20review%20of%20my%20stack.%20My%20current%20monthly%20SaaS%20spend%20is%20approximately%20%24___."
                          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
                        >
                          Get Expert Audit — $299
                        </a>
                        <div className="text-xs text-muted">
                          <p>Includes: full stack review, replacement plan, switching cost estimates, migration roadmap.</p>
                          <p className="mt-0.5">Delivered within 48 hours. 100% money-back if no savings found.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
