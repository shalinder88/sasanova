"use client";

import { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  tools,
  getOverallScore,
  getVersusMatch,
  type Tool,
  type ToolScore,
} from "@/data/tools";

/* ═══════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════ */

function cheapestPaidPrice(tool: Tool): number | null {
  const paid = tool.pricing.filter((p) => (p.priceMonthly ?? 0) > 0);
  if (paid.length === 0) return null;
  return Math.min(...paid.map((p) => p.priceMonthly!));
}

type CellValue = string | number | boolean | null;
type HighlightDir = "high" | "low" | "none";

function bestWorstIndices(
  values: CellValue[],
  dir: HighlightDir,
): { best: Set<number>; worst: Set<number> } {
  if (dir === "none") return { best: new Set(), worst: new Set() };
  const nums = values.map((v) => (typeof v === "number" ? v : null));
  const valid = nums.filter((n): n is number => n !== null);
  if (valid.length < 2) return { best: new Set(), worst: new Set() };

  const bestVal = dir === "high" ? Math.max(...valid) : Math.min(...valid);
  const worstVal = dir === "high" ? Math.min(...valid) : Math.max(...valid);

  const best = new Set<number>();
  const worst = new Set<number>();
  nums.forEach((n, i) => {
    if (n === bestVal) best.add(i);
    if (n === worstVal && bestVal !== worstVal) worst.add(i);
  });
  return { best, worst };
}

/* ═══════════════════════════════════════════════════════════════
   TOOL SELECTOR / SEARCH
   ═══════════════════════════════════════════════════════════════ */

function ToolSearch({
  selectedSlugs,
  onAdd,
}: {
  selectedSlugs: string[];
  onAdd: (slug: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return tools.filter((t) => !selectedSlugs.includes(t.slug)).slice(0, 12);
    const q = query.toLowerCase();
    return tools
      .filter(
        (t) =>
          !selectedSlugs.includes(t.slug) &&
          (t.name.toLowerCase().includes(q) ||
            t.slug.includes(q) ||
            t.vendor.toLowerCase().includes(q) ||
            t.categorySlug.toLowerCase().includes(q)),
      )
      .slice(0, 12);
  }, [query, selectedSlugs]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search tools to add..."
        className="w-full px-4 py-2.5 text-sm rounded-lg bg-surface border border-border text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
      />
      {open && filtered.length > 0 && (
        <>
          {/* Invisible overlay to close dropdown */}
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <ul className="absolute z-20 mt-1 w-full max-h-64 overflow-y-auto rounded-lg border border-border bg-surface shadow-xl">
            {filtered.map((tool) => (
              <li key={tool.slug}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent-light transition-colors flex items-center justify-between"
                  onClick={() => {
                    onAdd(tool.slug);
                    setQuery("");
                    setOpen(false);
                  }}
                >
                  <span>
                    <span className="font-medium text-foreground">{tool.name}</span>
                    <span className="text-muted ml-2 text-xs">{tool.vendor}</span>
                  </span>
                  <span className="text-xs text-muted">{tool.categorySlug}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SELECTED TOOL CARD
   ═══════════════════════════════════════════════════════════════ */

function ToolCard({ tool, onRemove }: { tool: Tool; onRemove: () => void }) {
  const overall = getOverallScore(tool.scores);
  return (
    <div className="relative flex flex-col items-center p-4 rounded-xl border border-border bg-surface-alt min-w-[140px]">
      <button
        type="button"
        onClick={onRemove}
        className="absolute top-2 right-2 text-muted hover:text-danger transition-colors"
        aria-label={`Remove ${tool.name}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center text-accent font-bold text-lg mb-2">
        {tool.name.charAt(0)}
      </div>
      <h3 className="text-sm font-semibold text-foreground text-center">{tool.name}</h3>
      <p className="text-xs text-muted mt-0.5">{tool.vendor}</p>
      <div className="mt-2 text-lg font-bold text-accent">{overall}</div>
      <p className="text-[10px] text-muted">Overall score</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

interface RowDef {
  label: string;
  getValue: (tool: Tool) => CellValue;
  format?: (v: CellValue) => string;
  highlight: HighlightDir;
  isList?: boolean;
  getList?: (tool: Tool) => string[];
}

const rows: RowDef[] = [
  {
    label: "Starting Price",
    getValue: (t) => cheapestPaidPrice(t),
    format: (v) => (v === null ? "Free only" : `$${v}/mo`),
    highlight: "low",
  },
  {
    label: "Free Tier",
    getValue: (t) => (t.freeTier ? (t.freeTierLimits ? `Yes - ${t.freeTierLimits}` : "Yes") : "No"),
    highlight: "none",
  },
  {
    label: "Overall Score",
    getValue: (t) => getOverallScore(t.scores),
    highlight: "high",
  },
  {
    label: "Value Score",
    getValue: (t) => t.scores.value,
    highlight: "high",
  },
  {
    label: "Ease Score",
    getValue: (t) => t.scores.ease,
    highlight: "high",
  },
  {
    label: "Power Score",
    getValue: (t) => t.scores.power,
    highlight: "high",
  },
  {
    label: "Setup Friction",
    getValue: (t) => t.scores.setupFriction,
    format: (v) => `${v}/10`,
    highlight: "high",
  },
  {
    label: "Migration Difficulty",
    getValue: (t) => t.scores.migrationDifficulty,
    format: (v) => `${v}/10`,
    highlight: "high",
  },
  {
    label: "Transparency",
    getValue: (t) => t.scores.transparency,
    format: (v) => `${v}/10`,
    highlight: "high",
  },
  {
    label: "Billing Model",
    getValue: (t) => {
      const models = [...new Set(t.pricing.map((p) => p.billingModel))];
      return models.join(", ");
    },
    highlight: "none",
  },
  {
    label: "API Available",
    getValue: (t) => (t.apiAvailable ? "Yes" : "No"),
    highlight: "none",
  },
  {
    label: "Deployment",
    getValue: (t) => t.deployment,
    highlight: "none",
  },
  {
    label: "Key Features (top 5)",
    getValue: () => null,
    highlight: "none",
    isList: true,
    getList: (t) => t.features.slice(0, 5),
  },
  {
    label: "Best For",
    getValue: () => null,
    highlight: "none",
    isList: true,
    getList: (t) => t.bestFor,
  },
  {
    label: "Avoid If",
    getValue: () => null,
    highlight: "none",
    isList: true,
    getList: (t) => t.avoidIf,
  },
  {
    label: "Hidden Costs",
    getValue: () => null,
    highlight: "none",
    isList: true,
    getList: (t) => t.hiddenCosts ?? [],
  },
  {
    label: "Alternatives Count",
    getValue: (t) => t.alternatives.length,
    highlight: "none",
  },
];

function ComparisonTable({ selectedTools }: { selectedTools: Tool[] }) {
  if (selectedTools.length < 2) return null;

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <table className="w-full text-sm border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 text-xs font-semibold text-muted uppercase tracking-wider w-44 sticky left-0 bg-background z-10">
              Attribute
            </th>
            {selectedTools.map((tool) => (
              <th
                key={tool.slug}
                className="text-center py-3 px-4 text-xs font-semibold text-foreground uppercase tracking-wider"
              >
                {tool.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const values = selectedTools.map((t) => row.getValue(t));
            const { best, worst } = bestWorstIndices(values, row.highlight);

            return (
              <tr key={row.label} className="border-b border-border/50 hover:bg-surface/50">
                <td className="py-3 px-4 text-xs font-medium text-muted sticky left-0 bg-background z-10">
                  {row.label}
                </td>
                {selectedTools.map((tool, i) => {
                  if (row.isList && row.getList) {
                    const items = row.getList(tool);
                    return (
                      <td key={tool.slug} className="py-3 px-4 text-center align-top">
                        {items.length > 0 ? (
                          <ul className="text-xs text-foreground space-y-1 text-left">
                            {items.map((item, j) => (
                              <li key={j} className="flex items-start gap-1.5">
                                <span className="text-accent mt-0.5 shrink-0">&#x2022;</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-xs text-muted">--</span>
                        )}
                      </td>
                    );
                  }

                  const val = values[i];
                  const formatted = row.format ? row.format(val) : String(val ?? "--");
                  const isBest = best.has(i);
                  const isWorst = worst.has(i);

                  return (
                    <td
                      key={tool.slug}
                      className={`py-3 px-4 text-center text-xs font-medium ${
                        isBest
                          ? "text-success bg-success-light"
                          : isWorst
                            ? "text-danger bg-danger-light"
                            : "text-foreground"
                      }`}
                    >
                      {formatted}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PLAYGROUND CONTENT (needs useSearchParams)
   ═══════════════════════════════════════════════════════════════ */

function PlaygroundContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [savedMessage, setSavedMessage] = useState(false);

  // Parse URL params on mount
  useEffect(() => {
    const param = searchParams.get("tools");
    if (param) {
      const slugs = param
        .split(",")
        .map((s) => s.trim().toLowerCase())
        .filter((s) => tools.some((t) => t.slug === s))
        .slice(0, 4);
      if (slugs.length > 0) setSelectedSlugs(slugs);
    }
  }, [searchParams]);

  // Load from localStorage if no URL params
  useEffect(() => {
    if (searchParams.get("tools")) return;
    try {
      const saved = localStorage.getItem("sasanova-playground-tools");
      if (saved) {
        const slugs = JSON.parse(saved) as string[];
        const valid = slugs.filter((s) => tools.some((t) => t.slug === s)).slice(0, 4);
        if (valid.length > 0) setSelectedSlugs(valid);
      }
    } catch {
      // ignore
    }
  }, [searchParams]);

  const selectedTools = useMemo(
    () =>
      selectedSlugs
        .map((slug) => tools.find((t) => t.slug === slug))
        .filter((t): t is Tool => t !== undefined),
    [selectedSlugs],
  );

  const addTool = useCallback(
    (slug: string) => {
      if (selectedSlugs.length >= 4) return;
      if (selectedSlugs.includes(slug)) return;
      setSelectedSlugs((prev) => [...prev, slug]);
    },
    [selectedSlugs],
  );

  const removeTool = useCallback((slug: string) => {
    setSelectedSlugs((prev) => prev.filter((s) => s !== slug));
  }, []);

  const shareUrl = useMemo(() => {
    if (selectedSlugs.length === 0) return "";
    return `${typeof window !== "undefined" ? window.location.origin : "https://sasanova.com"}/playground?tools=${selectedSlugs.join(",")}`;
  }, [selectedSlugs]);

  const handleShare = useCallback(() => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
    // Also update URL
    router.replace(`/playground?tools=${selectedSlugs.join(",")}`);
  }, [shareUrl, selectedSlugs, router]);

  const handleSave = useCallback(() => {
    try {
      localStorage.setItem("sasanova-playground-tools", JSON.stringify(selectedSlugs));
      setSavedMessage(true);
      setTimeout(() => setSavedMessage(false), 2000);
    } catch {
      // ignore
    }
  }, [selectedSlugs]);

  // Check if exactly 2 tools have a versus pair
  const versusLink = useMemo(() => {
    if (selectedSlugs.length !== 2) return null;
    const match = getVersusMatch(selectedSlugs[0], selectedSlugs[1]);
    if (!match) return null;
    return `/compare/${match.slugA}-vs-${match.slugB}`;
  }, [selectedSlugs]);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Interactive Playground
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Tool Comparison Playground
          </h1>
          <p className="text-base text-muted max-w-2xl leading-relaxed">
            Compare any tools side by side. Select 2-4 tools and see scores, pricing, features,
            and more — all auto-generated from our verified data.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Tool selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">
              Selected Tools ({selectedSlugs.length}/4)
            </h2>
            {selectedSlugs.length >= 4 && (
              <span className="text-xs text-muted">Maximum 4 tools reached</span>
            )}
          </div>

          {/* Search input */}
          {selectedSlugs.length < 4 && (
            <div className="mb-6 max-w-md">
              <ToolSearch selectedSlugs={selectedSlugs} onAdd={addTool} />
            </div>
          )}

          {/* Selected tool cards */}
          {selectedTools.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {selectedTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} onRemove={() => removeTool(tool.slug)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-border rounded-xl bg-surface">
              <svg
                className="w-10 h-10 mx-auto text-muted mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p className="text-sm text-muted">
                Search and add tools above to start comparing
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        {selectedTools.length >= 2 && (
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:brightness-110 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              {copied ? "Copied!" : "Share This Comparison"}
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-surface transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
              {savedMessage ? "Saved!" : "Save Comparison"}
            </button>
            {versusLink && (
              <Link
                href={versusLink}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-accent text-accent hover:bg-accent-light transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                View Full Comparison
              </Link>
            )}
          </div>
        )}

        {/* Comparison table */}
        <ComparisonTable selectedTools={selectedTools} />

        {/* Empty state prompt */}
        {selectedTools.length === 1 && (
          <div className="text-center py-10 border border-dashed border-border rounded-xl bg-surface mt-2">
            <p className="text-sm text-muted">
              Add at least one more tool to see the comparison table.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE EXPORT (wrapped in Suspense for useSearchParams)
   ═══════════════════════════════════════════════════════════════ */

export default function PlaygroundPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            <p className="text-sm text-muted mt-3">Loading playground...</p>
          </div>
        </div>
      }
    >
      <PlaygroundContent />
    </Suspense>
  );
}
