"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { PricingChange } from "./page";

const IMPACT_CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  critical: { label: "Critical", color: "text-danger", bg: "bg-danger-light", border: "border-danger/30" },
  high: { label: "High", color: "text-[#fb923c]", bg: "bg-[rgba(251,146,60,0.1)]", border: "border-[rgba(251,146,60,0.3)]" },
  medium: { label: "Medium", color: "text-warning", bg: "bg-warning-light", border: "border-warning/30" },
  low: { label: "Low", color: "text-muted", bg: "bg-surface-alt", border: "border-border" },
  positive: { label: "Decrease", color: "text-success", bg: "bg-success-light", border: "border-success/30" },
};

const DATE_RANGES = [
  { label: "All time", value: "all" },
  { label: "Last month", value: "1m" },
  { label: "Last 3 months", value: "3m" },
  { label: "Last year", value: "1y" },
];

const DIRECTIONS = [
  { label: "All changes", value: "all" },
  { label: "Increases only", value: "increases" },
  { label: "Decreases only", value: "decreases" },
];

const CATEGORIES = [
  { label: "All categories", value: "all" },
  { label: "Email Marketing", value: "email-marketing" },
  { label: "CRM", value: "crm" },
  { label: "Automation", value: "automation" },
  { label: "Project Management", value: "project-management" },
  { label: "Task Management", value: "task-management" },
  { label: "Newsletter Platforms", value: "newsletter-platforms" },
  { label: "Forms & Surveys", value: "forms-surveys" },
  { label: "SEO Tools", value: "seo-tools" },
  { label: "AI Writing", value: "ai-writing" },
  { label: "Website Builders", value: "website-builders" },
  { label: "Video & Media", value: "video-media" },
];

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
}

function isWithinRange(dateStr: string, range: string): boolean {
  if (range === "all") return true;
  const now = new Date("2026-03-26");
  const [year, month] = dateStr.split("-").map(Number);
  const changeDate = new Date(year, month - 1, 1);
  const diffMonths = (now.getFullYear() - changeDate.getFullYear()) * 12 + (now.getMonth() - changeDate.getMonth());
  if (range === "1m") return diffMonths <= 1;
  if (range === "3m") return diffMonths <= 3;
  if (range === "1y") return diffMonths <= 12;
  return true;
}

export default function ChangelogClient({ changes }: { changes: PricingChange[] }) {
  const [impactFilter, setImpactFilter] = useState("all");
  const [dateRange, setDateRange] = useState("all");
  const [direction, setDirection] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filtered = useMemo(() => {
    return changes.filter((c) => {
      if (impactFilter !== "all" && c.impact !== impactFilter) return false;
      if (!isWithinRange(c.date, dateRange)) return false;
      if (direction === "increases" && c.impact === "positive") return false;
      if (direction === "decreases" && c.impact !== "positive") return false;
      if (categoryFilter !== "all" && c.category !== categoryFilter) return false;
      return true;
    });
  }, [changes, impactFilter, dateRange, direction, categoryFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-3">
        <div className="flex flex-wrap gap-2">
          {/* Impact filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-muted font-medium mr-1">Impact:</span>
            {[{ label: "All", value: "all" }, ...Object.entries(IMPACT_CONFIG).map(([k, v]) => ({ label: v.label, value: k }))].map((opt) => (
              <button
                key={opt.value}
                onClick={() => setImpactFilter(opt.value)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                  impactFilter === opt.value
                    ? "bg-accent-light text-accent border-accent/30"
                    : "bg-surface text-muted border-border hover:text-foreground hover:bg-surface-alt"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Date range */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted font-medium mr-1">Period:</span>
            {DATE_RANGES.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDateRange(opt.value)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                  dateRange === opt.value
                    ? "bg-accent-light text-accent border-accent/30"
                    : "bg-surface text-muted border-border hover:text-foreground hover:bg-surface-alt"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Direction */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted font-medium mr-1">Direction:</span>
            {DIRECTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDirection(opt.value)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors ${
                  direction === opt.value
                    ? "bg-accent-light text-accent border-accent/30"
                    : "bg-surface text-muted border-border hover:text-foreground hover:bg-surface-alt"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-muted font-medium mr-1">Category:</span>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-2.5 py-1 text-xs font-medium rounded-md border border-border bg-surface text-foreground focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-muted mb-4">
        Showing {filtered.length} of {changes.length} changes
      </p>

      {/* Feed */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-muted text-sm">
            No changes match your filters. Try adjusting your criteria.
          </div>
        ) : (
          filtered.map((change, i) => {
            const config = IMPACT_CONFIG[change.impact];
            return (
              <div
                key={`${change.slug}-${change.date}-${i}`}
                className={`rounded-lg border ${config.border} ${config.bg} p-4 transition-colors hover:border-border-strong`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-xs text-muted font-mono">{formatDate(change.date)}</span>
                      <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full ${config.bg} ${config.color} border ${config.border}`}>
                        {config.label}
                      </span>
                      {change.percentChange !== undefined && (
                        <span className={`text-xs font-bold ${change.percentChange > 0 ? "text-danger" : "text-success"}`}>
                          {change.percentChange > 0 ? "+" : ""}{change.percentChange}%
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">
                      <Link href={`/tools/${change.slug}`} className="hover:text-accent transition-colors">
                        {change.tool}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{change.change}</p>
                    {change.oldPrice !== undefined && change.newPrice !== undefined && (
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <span className="text-muted line-through">${change.oldPrice}/mo</span>
                        <svg className="w-3 h-3 text-muted" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className={`font-semibold ${(change.percentChange ?? 0) > 0 ? "text-danger" : "text-success"}`}>
                          ${change.newPrice}/mo
                        </span>
                      </div>
                    )}
                  </div>
                  <Link
                    href={`/alerts?tool=${change.slug}`}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent bg-accent-light border border-accent/20 rounded-md hover:bg-accent/20 transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    Set alert
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
