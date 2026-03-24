"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tool, Category } from "@/data/tools";
import { getOverallScore } from "@/data/tools";

export default function ToolsDirectoryClient({
  tools,
  categories,
}: {
  tools: Tool[];
  categories: Category[];
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = tools.filter((tool) => {
    const matchesSearch =
      search === "" ||
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.vendor.toLowerCase().includes(search.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      !activeCategory || tool.categories.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

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

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
            !activeCategory
              ? "bg-accent text-white border-accent"
              : "bg-background text-muted border-border hover:border-accent/30 hover:text-accent"
          }`}
        >
          All
        </button>
        {categories.filter((cat) => tools.some(t => t.categories.includes(cat.slug))).map((cat) => (
          <button
            key={cat.slug}
            onClick={() =>
              setActiveCategory(
                activeCategory === cat.slug ? null : cat.slug
              )
            }
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
              activeCategory === cat.slug
                ? "bg-accent text-white border-accent"
                : "bg-background text-muted border-border hover:border-accent/30 hover:text-accent"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-10">
        <p className="text-xs text-muted mb-4">
          {filtered.length} tool{filtered.length !== 1 ? "s" : ""} found
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-sm text-muted">
              No tools match your search. Try a different query or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((tool) => {
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
                      <p className="text-2xl font-extrabold text-accent">
                        {overall}
                      </p>
                      <p className="text-[10px] text-muted">/ 10</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted mb-3 line-clamp-2">
                    {tool.tagline}
                  </p>
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
        )}
      </div>
    </>
  );
}
