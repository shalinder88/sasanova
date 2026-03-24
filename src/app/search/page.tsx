"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import {
  tools,
  categories,
  versusPairs,
  getOverallScore,
  type Tool,
  type Category,
  type VersusMatch,
} from "@/data/tools";
import SearchBar from "@/components/SearchBar";

interface ToolResult {
  type: "tool";
  tool: Tool;
  score: number;
}

interface ComparisonResult {
  type: "comparison";
  pair: VersusMatch;
  toolA: Tool;
  toolB: Tool;
}

interface CategoryResult {
  type: "category";
  category: Category;
}

type SearchResult = ToolResult | ComparisonResult | CategoryResult;

function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const lower = query.toLowerCase();

  const toolResults: ToolResult[] = tools
    .map((tool) => {
      let score = 0;
      const nameMatch = tool.name.toLowerCase().includes(lower);
      const taglineMatch = tool.tagline.toLowerCase().includes(lower);
      const descMatch = tool.description.toLowerCase().includes(lower);
      const vendorMatch = tool.vendor.toLowerCase().includes(lower);
      const featuresMatch = tool.features.some((f) => f.toLowerCase().includes(lower));
      const categoryMatch = tool.categories.some((cSlug) => {
        const cat = categories.find((c) => c.slug === cSlug);
        return cat?.name.toLowerCase().includes(lower);
      });

      if (nameMatch) score += 10;
      if (taglineMatch) score += 6;
      if (vendorMatch) score += 5;
      if (categoryMatch) score += 4;
      if (featuresMatch) score += 3;
      if (descMatch) score += 2;

      return { type: "tool" as const, tool, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  const comparisonResults: ComparisonResult[] = versusPairs
    .filter((pair) => {
      const toolA = tools.find((t) => t.slug === pair.slugA);
      const toolB = tools.find((t) => t.slug === pair.slugB);
      if (!toolA || !toolB) return false;
      return (
        toolA.name.toLowerCase().includes(lower) ||
        toolB.name.toLowerCase().includes(lower) ||
        pair.summary.toLowerCase().includes(lower)
      );
    })
    .map((pair) => ({
      type: "comparison" as const,
      pair,
      toolA: tools.find((t) => t.slug === pair.slugA)!,
      toolB: tools.find((t) => t.slug === pair.slugB)!,
    }));

  const categoryResults: CategoryResult[] = categories
    .filter(
      (cat) =>
        cat.name.toLowerCase().includes(lower) ||
        cat.description.toLowerCase().includes(lower)
    )
    .map((category) => ({ type: "category" as const, category }));

  return [...toolResults, ...comparisonResults, ...categoryResults];
}

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";

  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [freeTierOnly, setFreeTierOnly] = useState(false);

  const allResults = useMemo(() => searchAll(initialQuery), [initialQuery]);

  const filteredResults = useMemo(() => {
    return allResults.filter((result) => {
      if (result.type === "tool") {
        if (categoryFilter !== "all" && !result.tool.categories.includes(categoryFilter)) {
          return false;
        }
        if (freeTierOnly && !result.tool.freeTier) return false;
      }
      if (result.type === "comparison") {
        if (freeTierOnly && !result.toolA.freeTier && !result.toolB.freeTier) return false;
      }
      // Categories always pass through filters
      return true;
    });
  }, [allResults, categoryFilter, freeTierOnly]);

  const toolResults = filteredResults.filter((r): r is ToolResult => r.type === "tool");
  const comparisonResults = filteredResults.filter(
    (r): r is ComparisonResult => r.type === "comparison"
  );
  const categoryResults = filteredResults.filter(
    (r): r is CategoryResult => r.type === "category"
  );

  const hasResults = filteredResults.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search bar */}
      <div className="mb-8">
        <SearchBar variant="page" />
      </div>

      {/* Filters */}
      {initialQuery && (
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <label htmlFor="category-filter" className="text-xs text-muted">
              Category
            </label>
            <select
              id="category-filter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="text-xs bg-surface-alt border border-border text-foreground rounded-lg px-2.5 py-1.5 outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            >
              <option value="all">All categories</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={freeTierOnly}
                onChange={(e) => setFreeTierOnly(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-8 h-4.5 bg-border rounded-full peer-checked:bg-accent transition-colors" />
              <div className="absolute top-0.5 left-0.5 w-3.5 h-3.5 bg-foreground rounded-full transition-transform peer-checked:translate-x-3.5" />
            </div>
            <span className="text-xs text-muted">Free tier only</span>
          </label>

          {initialQuery && (
            <p className="text-xs text-muted ml-auto">
              {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""} for
              &ldquo;{initialQuery}&rdquo;
            </p>
          )}
        </div>
      )}

      {/* Results */}
      {!initialQuery ? (
        <div className="text-center py-20">
          <div className="text-4xl mb-4 opacity-30">&#128269;</div>
          <p className="text-muted text-sm">
            Type a query above to search tools, comparisons, and categories.
          </p>
        </div>
      ) : !hasResults ? (
        <div className="text-center py-20">
          <p className="text-lg font-semibold mb-2">No results found</p>
          <p className="text-sm text-muted mb-6">
            We couldn&apos;t find anything matching &ldquo;{initialQuery}&rdquo;.
          </p>
          <div className="space-y-2 text-sm text-muted">
            <p>Suggestions:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Check your spelling</li>
              <li>Try broader terms (e.g. &ldquo;email&rdquo; instead of &ldquo;email automation&rdquo;)</li>
              <li>
                <Link href="/tools" className="text-accent hover:underline">
                  Browse all tools
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-accent hover:underline">
                  View comparisons
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Tools section */}
          {toolResults.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                Tools ({toolResults.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {toolResults.map(({ tool }) => {
                  const overall = getOverallScore(tool.scores);
                  return (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="group border border-border rounded-xl p-5 hover:border-accent/30 transition-all bg-background"
                    >
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
                          <p className="text-2xl font-extrabold text-accent">{overall}</p>
                          <p className="text-[10px] text-muted">/ 10</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted mb-3 line-clamp-2">{tool.tagline}</p>
                      <div className="mt-3 flex items-center justify-between text-xs text-muted">
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
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Comparisons section */}
          {comparisonResults.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                Comparisons ({comparisonResults.length})
              </h2>
              <div className="space-y-3">
                {comparisonResults.map(({ pair, toolA, toolB }) => (
                  <Link
                    key={`${pair.slugA}-vs-${pair.slugB}`}
                    href={`/compare/${pair.slugA}-vs-${pair.slugB}`}
                    className="group flex items-center gap-4 border border-border rounded-xl p-4 hover:border-accent/30 transition-all bg-background"
                  >
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-bold group-hover:text-accent transition-colors">
                        {toolA.name}
                      </span>
                      <span className="text-xs text-muted">vs</span>
                      <span className="text-sm font-bold group-hover:text-accent transition-colors">
                        {toolB.name}
                      </span>
                    </div>
                    <p className="text-xs text-muted line-clamp-1 min-w-0">{pair.summary}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Categories section */}
          {categoryResults.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                Categories ({categoryResults.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryResults.map(({ category }) => (
                  <Link
                    key={category.slug}
                    href={`/best/${category.slug}`}
                    className="group border border-border rounded-xl p-4 hover:border-accent/30 transition-all bg-background"
                  >
                    <h3 className="text-sm font-bold group-hover:text-accent transition-colors mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted line-clamp-2">{category.description}</p>
                    <p className="text-[10px] text-muted mt-2">
                      {category.toolCount} tool{category.toolCount !== 1 ? "s" : ""}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <title>Search — Sasanova</title>
      <section className="border-b border-border bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl font-extrabold tracking-tight">Search</h1>
        </div>
      </section>
      <Suspense
        fallback={
          <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="animate-pulse h-12 bg-surface-alt rounded-xl" />
          </div>
        }
      >
        <SearchContent />
      </Suspense>
    </>
  );
}
