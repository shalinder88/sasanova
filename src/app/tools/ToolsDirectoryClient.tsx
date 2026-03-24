"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import type { Tool, Category } from "@/data/tools";
import { getOverallScore } from "@/data/tools";
import ShortlistButton from "@/components/ShortlistButton";

// ── Filter option types ──

type PriceRange = "free" | "under15" | "under50" | "any";
type DeploymentFilter = "cloud" | "self-hosted" | "hybrid" | "any";
type TeamSize = "solo" | "small" | "mid" | "enterprise" | "any";
type ComplianceFilter = "soc2" | "gdpr" | "hipaa" | "any";
type SortOption = "score" | "name" | "price" | "verified";

const PRICE_OPTIONS: { value: PriceRange; label: string }[] = [
  { value: "free", label: "Free only" },
  { value: "under15", label: "Under $15/mo" },
  { value: "under50", label: "Under $50/mo" },
  { value: "any", label: "Any price" },
];

const DEPLOYMENT_OPTIONS: { value: DeploymentFilter; label: string }[] = [
  { value: "cloud", label: "Cloud" },
  { value: "self-hosted", label: "Self-hosted" },
  { value: "hybrid", label: "Hybrid" },
  { value: "any", label: "Any" },
];

const TEAM_SIZE_OPTIONS: { value: TeamSize; label: string }[] = [
  { value: "solo", label: "Solo (1 person)" },
  { value: "small", label: "Small team (2-10)" },
  { value: "mid", label: "Mid-market (11-50)" },
  { value: "enterprise", label: "Enterprise (50+)" },
  { value: "any", label: "Any" },
];

const COMPLIANCE_OPTIONS: { value: ComplianceFilter; label: string }[] = [
  { value: "soc2", label: "SOC 2" },
  { value: "gdpr", label: "GDPR" },
  { value: "hipaa", label: "HIPAA" },
  { value: "any", label: "Any" },
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "score", label: "Score" },
  { value: "name", label: "Name A-Z" },
  { value: "price", label: "Price low-high" },
  { value: "verified", label: "Recently verified" },
];

// ── Helpers ──

function getLowestPrice(tool: Tool): number {
  const prices = tool.pricing
    .map((p) => p.priceMonthly)
    .filter((p): p is number => p !== null && p > 0);
  return prices.length > 0 ? Math.min(...prices) : Infinity;
}

function matchesTeamSize(bestFor: string[], size: TeamSize): boolean {
  if (size === "any") return true;
  const joined = bestFor.join(" ").toLowerCase();
  switch (size) {
    case "solo":
      return joined.includes("solo") || joined.includes("freelanc") || joined.includes("individual") || joined.includes("1 person") || joined.includes("one person");
    case "small":
      return joined.includes("small team") || joined.includes("startup") || joined.includes("small business");
    case "mid":
      return joined.includes("mid-market") || joined.includes("mid market") || joined.includes("growing team") || joined.includes("medium");
    case "enterprise":
      return joined.includes("enterprise") || joined.includes("large team") || joined.includes("large org");
    default:
      return true;
  }
}

function matchesCompliance(compliance: string[], filter: ComplianceFilter): boolean {
  if (filter === "any") return true;
  const lower = compliance.map((c) => c.toLowerCase());
  switch (filter) {
    case "soc2":
      return lower.some((c) => c.includes("soc") && c.includes("2"));
    case "gdpr":
      return lower.some((c) => c.includes("gdpr"));
    case "hipaa":
      return lower.some((c) => c.includes("hipaa"));
    default:
      return true;
  }
}

function matchesPriceRange(tool: Tool, range: PriceRange): boolean {
  if (range === "any") return true;
  if (range === "free") return tool.freeTier;
  const lowest = getLowestPrice(tool);
  if (range === "under15") return tool.freeTier || lowest < 15;
  if (range === "under50") return tool.freeTier || lowest < 50;
  return true;
}

// ── Component ──

export default function ToolsDirectoryClient({
  tools,
  categories,
}: {
  tools: Tool[];
  categories: Category[];
}) {
  // State
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<PriceRange>("any");
  const [deployment, setDeployment] = useState<DeploymentFilter>("any");
  const [teamSize, setTeamSize] = useState<TeamSize>("any");
  const [compliance, setCompliance] = useState<ComplianceFilter>("any");
  const [freeTierOnly, setFreeTierOnly] = useState(false);
  const [apiOnly, setApiOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("score");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Active filter count (excluding defaults)
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (activeCategory) count++;
    if (priceRange !== "any") count++;
    if (deployment !== "any") count++;
    if (teamSize !== "any") count++;
    if (compliance !== "any") count++;
    if (freeTierOnly) count++;
    if (apiOnly) count++;
    if (sortBy !== "score") count++;
    return count;
  }, [activeCategory, priceRange, deployment, teamSize, compliance, freeTierOnly, apiOnly, sortBy]);

  const clearAllFilters = useCallback(() => {
    setSearch("");
    setActiveCategory(null);
    setPriceRange("any");
    setDeployment("any");
    setTeamSize("any");
    setCompliance("any");
    setFreeTierOnly(false);
    setApiOnly(false);
    setSortBy("score");
  }, []);

  // Filter + sort
  const filtered = useMemo(() => {
    const result = tools.filter((tool) => {
      if (search) {
        const q = search.toLowerCase();
        const match =
          tool.name.toLowerCase().includes(q) ||
          tool.vendor.toLowerCase().includes(q) ||
          tool.tagline.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (activeCategory && !tool.categories.includes(activeCategory)) return false;
      if (!matchesPriceRange(tool, priceRange)) return false;
      if (deployment !== "any" && tool.deployment !== deployment) return false;
      if (!matchesTeamSize(tool.bestFor, teamSize)) return false;
      if (!matchesCompliance(tool.compliance, compliance)) return false;
      if (freeTierOnly && !tool.freeTier) return false;
      if (apiOnly && !tool.apiAvailable) return false;
      return true;
    });

    // Sort
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price":
        result.sort((a, b) => {
          const pa = a.freeTier ? 0 : getLowestPrice(a);
          const pb = b.freeTier ? 0 : getLowestPrice(b);
          return pa - pb;
        });
        break;
      case "verified":
        result.sort((a, b) => (b.lastVerified ?? "").localeCompare(a.lastVerified ?? ""));
        break;
      case "score":
      default:
        result.sort((a, b) => getOverallScore(b.scores) - getOverallScore(a.scores));
        break;
    }

    return result;
  }, [tools, search, activeCategory, priceRange, deployment, teamSize, compliance, freeTierOnly, apiOnly, sortBy]);

  return (
    <>
      {/* Search */}
      <div className="relative max-w-xl mb-5">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tools by name, vendor, or tagline..."
          className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-xl bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none"
        />
      </div>

      {/* Category Pills — horizontally scrollable */}
      <div className="overflow-x-auto scrollbar-hide -mx-1 px-1 pb-2">
        <div className="flex gap-2 min-w-max">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors whitespace-nowrap ${
              !activeCategory
                ? "bg-accent text-white border-accent"
                : "bg-background text-muted border-border hover:border-accent/30 hover:text-accent"
            }`}
          >
            All
          </button>
          {categories
            .filter((cat) => tools.some((t) => t.categories.includes(cat.slug)))
            .map((cat) => (
              <button
                key={cat.slug}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.slug ? null : cat.slug)
                }
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors whitespace-nowrap ${
                  activeCategory === cat.slug
                    ? "bg-accent text-white border-accent"
                    : "bg-background text-muted border-border hover:border-accent/30 hover:text-accent"
                }`}
              >
                {cat.name}
              </button>
            ))}
        </div>
      </div>

      {/* Filters panel toggle */}
      <div className="mt-4 mb-2">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-xl bg-surface hover:border-accent/30 transition-colors"
        >
          <svg
            className="w-4 h-4 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold rounded-full bg-accent text-white">
              {activeFilterCount}
            </span>
          )}
          <svg
            className={`w-3.5 h-3.5 text-muted transition-transform ${
              filtersOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {activeFilterCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="ml-3 text-xs text-accent hover:underline"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Collapsible filters panel */}
      {filtersOpen && (
        <div className="border border-border rounded-xl bg-surface p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Price range */}
          <FilterSelect
            label="Price range"
            value={priceRange}
            options={PRICE_OPTIONS}
            onChange={(v) => setPriceRange(v as PriceRange)}
          />

          {/* Deployment */}
          <FilterSelect
            label="Deployment"
            value={deployment}
            options={DEPLOYMENT_OPTIONS}
            onChange={(v) => setDeployment(v as DeploymentFilter)}
          />

          {/* Team size */}
          <FilterSelect
            label="Team size"
            value={teamSize}
            options={TEAM_SIZE_OPTIONS}
            onChange={(v) => setTeamSize(v as TeamSize)}
          />

          {/* Compliance */}
          <FilterSelect
            label="Compliance"
            value={compliance}
            options={COMPLIANCE_OPTIONS}
            onChange={(v) => setCompliance(v as ComplianceFilter)}
          />

          {/* Sort */}
          <FilterSelect
            label="Sort by"
            value={sortBy}
            options={SORT_OPTIONS}
            onChange={(v) => setSortBy(v as SortOption)}
          />

          {/* Toggles */}
          <div className="flex flex-col gap-3 sm:col-span-1">
            <label className="text-xs font-medium text-foreground mb-0.5">
              Quick filters
            </label>
            <ToggleSwitch
              label="Free tier only"
              checked={freeTierOnly}
              onChange={setFreeTierOnly}
            />
            <ToggleSwitch
              label="API available"
              checked={apiOnly}
              onChange={setApiOnly}
            />
          </div>
        </div>
      )}

      {/* Results */}
      <div className="mt-6">
        <p className="text-xs text-muted mb-4">
          Showing {filtered.length} of {tools.length} {tools.length !== 1 ? "tools" : "tool"}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm text-muted mb-3">
              No tools match your filters. Try adjusting your criteria.
            </p>
            {activeFilterCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-accent hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((tool) => {
              const overall = getOverallScore(tool.scores);
              return (
                <div
                  key={tool.slug}
                  className="group relative border border-border rounded-xl p-5 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all bg-background"
                >
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="absolute inset-0 z-0 rounded-xl"
                    aria-label={`View ${tool.name}`}
                  />
                  <div className="relative z-10 pointer-events-none">
                    <div className="flex items-start justify-between mb-3">
                      <div className="min-w-0">
                        {tool.badge && (
                          <span className="inline-block text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full mb-1.5">
                            {tool.badge}
                          </span>
                        )}
                        <h3 className="text-base font-bold group-hover:text-accent transition-colors truncate">
                          {tool.name}
                        </h3>
                        <p className="text-xs text-muted">{tool.vendor}</p>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <p className="text-2xl font-extrabold text-accent">
                          {overall}
                        </p>
                        <p className="text-[10px] text-muted">/ 10</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted mb-3 line-clamp-2">
                      {tool.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {tool.deployment && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border text-muted">
                          {tool.deployment}
                        </span>
                      )}
                      {tool.freeTier && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border text-muted">
                          Free tier
                        </span>
                      )}
                      {tool.apiAvailable && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border text-muted">
                          API
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>
                        {tool.freeTier
                          ? "Free tier available"
                          : `From $${tool.pricing[0]?.priceMonthly ?? "?"}/mo`}
                      </span>
                      <span className="flex items-center gap-1">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            tool.provenanceLevel === "independently_verified"
                              ? "bg-success"
                              : "bg-warning"
                          }`}
                        />
                        {tool.provenanceLevel === "independently_verified"
                          ? "Verified"
                          : "Vendor-claimed"}
                      </span>
                    </div>
                  </div>
                  {/* Shortlist button — needs pointer events */}
                  <div className="relative z-10 mt-3 pointer-events-auto">
                    <ShortlistButton slug={tool.slug} name={tool.name} size="sm" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

// ── Subcomponents ──

function FilterSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none appearance-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ToggleSwitch({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
          checked ? "bg-accent" : "bg-border"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-[18px]" : "translate-x-[3px]"
          }`}
        />
      </button>
      <span className="text-xs text-muted">{label}</span>
    </label>
  );
}
