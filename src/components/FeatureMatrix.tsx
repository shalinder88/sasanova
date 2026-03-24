"use client";

import { useState, useMemo } from "react";

type SupportLevel = "Full" | "Partial" | "None" | "Add-on";

interface FeatureRow {
  feature: string;
  category: string;
  toolA: SupportLevel;
  toolB: SupportLevel;
}

interface ToolData {
  name: string;
  features: string[];
  apiAvailable: boolean;
}

interface FeatureMatrixProps {
  toolA: ToolData;
  toolB: ToolData;
}

/* ── Category classification ── */

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  Security: [
    "sso", "saml", "2fa", "mfa", "two-factor", "encryption", "soc", "gdpr",
    "hipaa", "compliance", "audit", "permission", "role-based", "rbac",
    "access control", "security",
  ],
  Integrations: [
    "integration", "zapier", "webhook", "api", "slack", "salesforce",
    "hubspot", "google", "microsoft", "native integration", "connect",
    "sync", "import", "export",
  ],
  Advanced: [
    "automation", "workflow", "ai", "machine learning", "analytics",
    "reporting", "dashboard", "custom", "advanced", "template",
    "branching", "conditional", "a/b test", "split test", "segmentation",
    "personalization", "dynamic",
  ],
};

function classifyFeature(feature: string): string {
  const lower = feature.toLowerCase();
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) return category;
  }
  return "Core";
}

const CATEGORY_ORDER = ["Core", "Advanced", "Integrations", "Security"];

/* ── Special feature detection for boolean fields ── */

const API_KEYWORDS = ["api", "rest api", "graphql", "api access"];
const SSO_KEYWORDS = ["sso", "saml", "single sign-on"];
const WEBHOOK_KEYWORDS = ["webhook", "webhooks"];

function normalize(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function featureMatchesAny(feature: string, list: string[]): boolean {
  const lower = feature.toLowerCase();
  return list.some((kw) => lower.includes(kw));
}

/* ── Build matrix ── */

function buildMatrix(toolA: ToolData, toolB: ToolData): FeatureRow[] {
  const normalizedA = new Map(toolA.features.map((f) => [normalize(f), f]));
  const normalizedB = new Map(toolB.features.map((f) => [normalize(f), f]));

  const allNormalized = new Set([...normalizedA.keys(), ...normalizedB.keys()]);
  const rows: FeatureRow[] = [];

  for (const key of allNormalized) {
    const nameA = normalizedA.get(key);
    const nameB = normalizedB.get(key);
    const featureName = nameA ?? nameB ?? key;

    let levelA: SupportLevel = nameA ? "Full" : "None";
    let levelB: SupportLevel = nameB ? "Full" : "None";

    // Override with boolean fields for common features
    if (featureMatchesAny(featureName, API_KEYWORDS)) {
      levelA = toolA.apiAvailable ? "Full" : "None";
      levelB = toolB.apiAvailable ? "Full" : "None";
    }
    if (featureMatchesAny(featureName, SSO_KEYWORDS)) {
      // If listed as a feature, it's supported; keep as is
    }
    if (featureMatchesAny(featureName, WEBHOOK_KEYWORDS)) {
      // Keep feature-list based detection
    }

    rows.push({
      feature: featureName,
      category: classifyFeature(featureName),
      toolA: levelA,
      toolB: levelB,
    });
  }

  // Add API row if not already present
  const hasApiRow = rows.some((r) => featureMatchesAny(r.feature, API_KEYWORDS));
  if (!hasApiRow) {
    rows.push({
      feature: "API Access",
      category: "Integrations",
      toolA: toolA.apiAvailable ? "Full" : "None",
      toolB: toolB.apiAvailable ? "Full" : "None",
    });
  }

  // Sort by category order, then alphabetically within category
  rows.sort((a, b) => {
    const catDiff = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
    if (catDiff !== 0) return catDiff;
    return a.feature.localeCompare(b.feature);
  });

  return rows;
}

/* ── Support level rendering ── */

function SupportBadge({ level }: { level: SupportLevel }) {
  switch (level) {
    case "Full":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Full
        </span>
      );
    case "Partial":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-warning">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Partial
        </span>
      );
    case "None":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-danger">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          None
        </span>
      );
    case "Add-on":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-purple-400">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Add-on
        </span>
      );
  }
}

/* ── Component ── */

export default function FeatureMatrix({ toolA, toolB }: FeatureMatrixProps) {
  const [hideSame, setHideSame] = useState(false);

  const allRows = useMemo(() => buildMatrix(toolA, toolB), [toolA, toolB]);

  const visibleRows = useMemo(() => {
    if (!hideSame) return allRows;
    return allRows.filter((r) => r.toolA !== r.toolB);
  }, [allRows, hideSame]);

  // Group rows by category
  const grouped = useMemo(() => {
    const groups: Record<string, FeatureRow[]> = {};
    for (const row of visibleRows) {
      if (!groups[row.category]) groups[row.category] = [];
      groups[row.category].push(row);
    }
    return CATEGORY_ORDER.filter((c) => groups[c]?.length).map((c) => ({
      category: c,
      rows: groups[c],
    }));
  }, [visibleRows]);

  const diffCount = allRows.filter((r) => r.toolA !== r.toolB).length;

  return (
    <div className="bg-surface border border-border rounded-xl overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div>
          <h3 className="text-lg font-bold text-foreground">Feature Comparison Matrix</h3>
          <p className="text-xs text-muted mt-0.5">
            {allRows.length} features compared &middot; {diffCount} difference{diffCount !== 1 ? "s" : ""}
          </p>
        </div>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <span className="text-xs text-muted">Hide identical</span>
          <button
            role="switch"
            aria-checked={hideSame}
            onClick={() => setHideSame(!hideSame)}
            className={`relative w-9 h-5 rounded-full transition-colors ${
              hideSame ? "bg-accent" : "bg-surface-alt border border-border"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                hideSame ? "translate-x-4" : ""
              }`}
            />
          </button>
        </label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10 bg-surface-alt">
            <tr>
              <th className="text-left py-3 px-5 font-semibold text-muted w-2/5">Feature</th>
              <th className="text-left py-3 px-5 font-semibold w-[30%]">{toolA.name}</th>
              <th className="text-left py-3 px-5 font-semibold w-[30%]">{toolB.name}</th>
            </tr>
          </thead>
          <tbody>
            {grouped.map(({ category, rows }) => (
              <CategoryGroup key={category} category={category} rows={rows} />
            ))}
            {grouped.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center py-8 text-muted text-sm">
                  No differences found between these tools.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CategoryGroup({ category, rows }: { category: string; rows: FeatureRow[] }) {
  return (
    <>
      <tr>
        <td
          colSpan={3}
          className="px-5 py-2 text-[10px] font-bold uppercase tracking-wider text-muted bg-surface-alt/50 border-t border-border"
        >
          {category}
        </td>
      </tr>
      {rows.map((row, i) => (
        <tr
          key={row.feature}
          className={`border-t border-border hover:bg-surface-alt/30 transition-colors ${
            i % 2 === 0 ? "" : "bg-surface-alt/20"
          }`}
        >
          <td className="py-2.5 px-5 text-foreground">{row.feature}</td>
          <td className="py-2.5 px-5">
            <SupportBadge level={row.toolA} />
          </td>
          <td className="py-2.5 px-5">
            <SupportBadge level={row.toolB} />
          </td>
        </tr>
      ))}
    </>
  );
}
