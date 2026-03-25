"use client";

import Link from "next/link";
import { useShortlist } from "@/components/ShortlistProvider";
import { tools, getOverallScore, type Tool } from "@/data/tools";

/* ---------- Row helpers ---------- */

type RowDef = {
  label: string;
  render: (tool: Tool) => string | number;
  /** "high" = highest number wins, "low" = lowest wins, "none" = no highlight */
  best?: "high" | "low" | "none";
};

const rows: RowDef[] = [
  {
    label: "Overall Score",
    render: (t) => getOverallScore(t.scores),
    best: "high",
  },
  { label: "Value", render: (t) => `${t.scores.value}/10`, best: "high" },
  { label: "Ease of Use", render: (t) => `${t.scores.ease}/10`, best: "high" },
  { label: "Power", render: (t) => `${t.scores.power}/10`, best: "high" },
  {
    label: "Setup Friction",
    render: (t) => `${t.scores.setupFriction}/10`,
    best: "high",
  },
  {
    label: "Transparency",
    render: (t) => `${t.scores.transparency}/10`,
    best: "high",
  },
  {
    label: "Pricing (from)",
    render: (t) => {
      const cheapest = t.pricing
        .filter((p) => p.priceMonthly !== null && p.priceMonthly > 0)
        .sort((a, b) => (a.priceMonthly ?? 0) - (b.priceMonthly ?? 0))[0];
      return cheapest ? `$${cheapest.priceMonthly}/mo` : "Contact";
    },
    best: "none",
  },
  {
    label: "Free Tier",
    render: (t) => (t.freeTier ? "Yes" : "No"),
    best: "none",
  },
  { label: "Deployment", render: (t) => t.deployment, best: "none" },
  {
    label: "API Available",
    render: (t) => (t.apiAvailable ? "Yes" : "No"),
    best: "none",
  },
  {
    label: "Compliance",
    render: (t) => (t.compliance.length > 0 ? t.compliance.join(", ") : "N/A"),
    best: "none",
  },
];

function numericValue(rendered: string | number): number | null {
  if (typeof rendered === "number") return rendered;
  const match = rendered.match(/^([\d.]+)/);
  return match ? parseFloat(match[1]) : null;
}

/* ---------- Page ---------- */

export default function ShortlistComparePage() {
  const { shortlist, removeFromShortlist } = useShortlist();

  const shortlistedTools = shortlist
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter((t): t is Tool => t !== undefined);

  if (shortlistedTools.length < 2) {
    return (
      <>
      <meta name="robots" content="noindex" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-light mb-6">
          <svg
            className="w-7 h-7 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight mb-2">
          Compare Your Shortlist
        </h1>
        <p className="text-muted text-sm mb-6">
          Add at least 2 tools to compare. Browse the{" "}
          <Link href="/tools" className="text-accent hover:underline">
            tools directory
          </Link>{" "}
          and click &quot;Add to compare&quot; on any tool.
        </p>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-colors"
        >
          Browse Tools
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
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      </>
    );
  }

  return (
    <>
      <meta name="robots" content="noindex" />
      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Your Shortlist
          </p>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-1">
            Comparing {shortlistedTools.length} Tools
          </h1>
          <p className="text-sm text-muted">
            Side-by-side breakdown across scoring, pricing, and capabilities.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              {/* Tool name header row */}
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-left text-xs font-semibold text-muted w-40">
                    &nbsp;
                  </th>
                  {shortlistedTools.map((tool) => (
                    <th
                      key={tool.slug}
                      className="py-3 px-4 text-left min-w-[160px]"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/tools/${tool.slug}`}
                            className="text-sm font-bold hover:text-accent transition-colors"
                          >
                            {tool.name}
                          </Link>
                          <p className="text-[11px] text-muted">{tool.vendor}</p>
                        </div>
                        <button
                          onClick={() => removeFromShortlist(tool.slug)}
                          className="text-muted hover:text-danger transition-colors shrink-0 mt-0.5"
                          aria-label={`Remove ${tool.name}`}
                          title="Remove from comparison"
                        >
                          <svg
                            className="w-3.5 h-3.5"
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
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const values = shortlistedTools.map((t) => row.render(t));
                  let bestIdx = -1;

                  if (row.best === "high" || row.best === "low") {
                    const nums = values.map((v) => numericValue(v));
                    const validNums = nums.filter(
                      (n): n is number => n !== null,
                    );
                    if (validNums.length > 0) {
                      const target =
                        row.best === "high"
                          ? Math.max(...validNums)
                          : Math.min(...validNums);
                      bestIdx = nums.indexOf(target);
                    }
                  }

                  return (
                    <tr key={row.label} className="border-b border-border">
                      <td className="py-3 pr-4 text-xs font-semibold text-muted">
                        {row.label}
                      </td>
                      {values.map((val, i) => (
                        <td
                          key={shortlistedTools[i].slug}
                          className={`py-3 px-4 text-sm ${
                            i === bestIdx
                              ? "font-bold text-accent"
                              : "text-foreground"
                          }`}
                        >
                          {val}
                          {i === bestIdx && (
                            <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link
              href="/tools"
              className="text-sm text-accent hover:underline"
            >
              &larr; Back to Tools Directory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
