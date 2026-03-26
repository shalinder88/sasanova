"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getRecentComparisons, type RecentComparison } from "./ComparisonMemory";

export default function RecentComparisons() {
  const [recent, setRecent] = useState<RecentComparison[]>([]);

  useEffect(() => {
    setRecent(getRecentComparisons());
  }, []);

  if (recent.length === 0) return null;

  return (
    <section className="py-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold mb-4">Your Recent Comparisons</h2>
        <div className="flex flex-wrap gap-3">
          {recent.map((c) => (
            <Link
              key={c.pair}
              href={`/compare/${c.pair}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg bg-surface hover:border-accent/30 hover:bg-surface-alt transition-all"
            >
              <span className="font-semibold">{c.nameA}</span>
              <span className="text-xs text-muted">vs</span>
              <span className="font-semibold">{c.nameB}</span>
              <svg
                className="w-3.5 h-3.5 text-muted ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
