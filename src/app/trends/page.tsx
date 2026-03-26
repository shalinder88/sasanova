import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SaaS Pricing Trends — Where Prices Are Heading",
  description:
    "Analyze SaaS pricing trends: which categories saw the most increases, which tools got cheaper, free tier erosion, and predictions for what's next.",
  alternates: { canonical: "https://sasanova.com/trends" },
  openGraph: {
    title: "SaaS Pricing Trends — Where Prices Are Heading",
    description:
      "Data-driven analysis of SaaS pricing trends. See which categories are getting more expensive and which tools are bucking the trend.",
    url: "https://sasanova.com/trends",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

/* ─── Data ─── */

interface HeatmapCategory {
  category: string;
  increases: number;
  avgChange: number;
  tools: string[];
}

const heatmapData: HeatmapCategory[] = [
  { category: "SEO Tools", increases: 2, avgChange: 55, tools: ["Surfer SEO", "SE Ranking"] },
  { category: "CRM", increases: 3, avgChange: 25, tools: ["Salesforce", "Pipedrive", "Close CRM"] },
  { category: "Email Marketing", increases: 2, avgChange: 18, tools: ["Mailchimp", "Kit (ConvertKit)"] },
  { category: "Forms & Surveys", increases: 1, avgChange: 34, tools: ["Typeform"] },
  { category: "Task Management", increases: 1, avgChange: 40, tools: ["Todoist"] },
  { category: "Automation", increases: 1, avgChange: 890, tools: ["Bardeen"] },
  { category: "Newsletter Platforms", increases: 1, avgChange: 100, tools: ["Ghost"] },
  { category: "Project Management", increases: 1, avgChange: 0, tools: ["Asana (free tier cut)"] },
];

interface FreeTierChange {
  tool: string;
  slug: string;
  before: string;
  after: string;
  date: string;
}

const freeTierErosion: FreeTierChange[] = [
  { tool: "Mailchimp", slug: "mailchimp", before: "500 contacts free", after: "250 contacts free", date: "Jun 2025" },
  { tool: "Asana", slug: "asana", before: "10 users free", after: "2 users free", date: "Jul 2025" },
];

interface PriceDecrease {
  tool: string;
  slug: string;
  detail: string;
  percentSaved: string;
}

const priceDecreases: PriceDecrease[] = [
  { tool: "Descript", slug: "descript", detail: "Creator plan: $35/mo reduced to $24/mo", percentSaved: "31% cheaper" },
  { tool: "Wix", slug: "wix", detail: "Light $23 to $17, Core $35 to $29", percentSaved: "17\u201326% cheaper" },
];

interface StableChampion {
  tool: string;
  slug: string;
  stableSince: string;
}

const stabilityChampions: StableChampion[] = [
  { tool: "Zapier", slug: "zapier", stableSince: "2024" },
  { tool: "Make", slug: "make", stableSince: "2024" },
  { tool: "Canva", slug: "canva", stableSince: "2023" },
  { tool: "Notion", slug: "notion", stableSince: "2023" },
  { tool: "ClickUp", slug: "clickup", stableSince: "2024" },
  { tool: "Slack", slug: "slack", stableSince: "2024" },
  { tool: "Linear", slug: "linear", stableSince: "2023" },
];

interface Prediction {
  tool: string;
  slug: string;
  reason: string;
  likelihood: "high" | "medium";
}

const predictions: Prediction[] = [
  { tool: "Notion", slug: "notion", reason: "AI features added without price change since 2023. Usage-based AI pricing likely.", likelihood: "high" },
  { tool: "Canva", slug: "canva", reason: "Major AI integrations and enterprise push. Free tier limits have been quietly tightening.", likelihood: "medium" },
  { tool: "Slack", slug: "slack", reason: "Salesforce integration costs rising. Pro plan hasn't changed since 2024 despite new AI features.", likelihood: "medium" },
  { tool: "ClickUp", slug: "clickup", reason: "Heavy AI investment and feature expansion without corresponding price adjustment.", likelihood: "medium" },
  { tool: "Beehiiv", slug: "beehiiv", reason: "Aggressive growth pricing at $49/mo won't last forever. Competitor Ghost already raised prices.", likelihood: "high" },
];

/* ─── Heatmap bar width calculation ─── */
function heatLevel(avgChange: number): string {
  if (avgChange >= 100) return "w-full";
  if (avgChange >= 50) return "w-4/5";
  if (avgChange >= 30) return "w-3/5";
  if (avgChange >= 15) return "w-2/5";
  return "w-1/5";
}

function heatColor(avgChange: number): string {
  if (avgChange >= 100) return "bg-danger";
  if (avgChange >= 50) return "bg-danger/70";
  if (avgChange >= 30) return "bg-[#fb923c]";
  if (avgChange >= 15) return "bg-warning";
  return "bg-warning/60";
}

export default function TrendsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light border border-accent/20 text-accent text-xs font-medium mb-4">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Price Trends
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          SaaS Pricing Trends — Where Prices Are Heading
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          Data-driven analysis of pricing movements across the SaaS landscape. Updated as we verify changes.
        </p>
      </div>

      {/* Section 1: Price Increase Heatmap */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-1">Price Increase Heatmap</h2>
        <p className="text-sm text-muted mb-6">Which categories saw the most price increases in the last 12 months.</p>
        <div className="space-y-3">
          {heatmapData
            .sort((a, b) => b.avgChange - a.avgChange)
            .map((cat) => (
              <div key={cat.category} className="rounded-lg border border-border bg-surface p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-foreground">{cat.category}</h3>
                  <span className="text-xs text-muted">
                    {cat.increases} tool{cat.increases !== 1 ? "s" : ""} &middot; avg +{cat.avgChange}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-surface-alt overflow-hidden mb-2">
                  <div className={`h-full rounded-full ${heatColor(cat.avgChange)} ${heatLevel(cat.avgChange)} transition-all`} />
                </div>
                <p className="text-xs text-muted">{cat.tools.join(", ")}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Section 2: Free Tier Erosion */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-1">Free Tier Erosion</h2>
        <p className="text-sm text-muted mb-6">
          Tools that reduced what you get for free. The &ldquo;free&rdquo; plan keeps getting smaller.
        </p>
        <div className="space-y-3">
          {freeTierErosion.map((item) => (
            <div key={item.slug} className="rounded-lg border border-danger/20 bg-danger-light p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    <Link href={`/tools/${item.slug}`} className="hover:text-accent transition-colors">
                      {item.tool}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted line-through">{item.before}</span>
                    <svg className="w-3 h-3 text-danger" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="text-danger font-semibold">{item.after}</span>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-muted">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">
          This trend is accelerating. In 2024, Slack reduced free message history from 10k to 90 days. Free tiers across SaaS are
          becoming demo tiers.
        </p>
      </section>

      {/* Section 3: Price Decreases */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-1">Price Decreases</h2>
        <p className="text-sm text-muted mb-6">
          Tools that actually got cheaper. It happens more often than you think.
        </p>
        <div className="space-y-3">
          {priceDecreases.map((item) => (
            <div key={item.slug} className="rounded-lg border border-success/20 bg-success-light p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    <Link href={`/tools/${item.slug}`} className="hover:text-accent transition-colors">
                      {item.tool}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted">{item.detail}</p>
                </div>
                <span className="shrink-0 inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-success-light text-success border border-success/30">
                  {item.percentSaved}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Stability Champions */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-1">Stability Champions</h2>
        <p className="text-sm text-muted mb-6">
          Tools with no price changes in at least 12 months. Pricing stability matters for budgeting.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {stabilityChampions.map((item) => (
            <div key={item.slug} className="rounded-lg border border-border bg-surface p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  <Link href={`/tools/${item.slug}`} className="hover:text-accent transition-colors">
                    {item.tool}
                  </Link>
                </h3>
                <p className="text-xs text-muted">Stable since {item.stableSince}</p>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full bg-success-light flex items-center justify-center">
                <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Predictions */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-1">Price Increase Predictions</h2>
        <p className="text-sm text-muted mb-6">
          Based on patterns we track — AI feature additions without price changes, competitor movements, and
          time since last increase — these tools may raise prices next.
        </p>
        <div className="space-y-3">
          {predictions.map((item) => (
            <div key={item.slug} className="rounded-lg border border-border bg-surface p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      <Link href={`/tools/${item.slug}`} className="hover:text-accent transition-colors">
                        {item.tool}
                      </Link>
                    </h3>
                    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${
                      item.likelihood === "high"
                        ? "text-danger bg-danger-light border-danger/30"
                        : "text-warning bg-warning-light border-warning/30"
                    }`}>
                      {item.likelihood === "high" ? "Likely" : "Possible"}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.reason}</p>
                </div>
                <Link
                  href={`/alerts?tool=${item.slug}`}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent bg-accent-light border border-accent/20 rounded-md hover:bg-accent/20 transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Set alert
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-border bg-surface-alt p-3">
          <p className="text-[11px] text-muted leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> These predictions are editorial analysis based on observable patterns,
            not insider knowledge. We do not have access to vendor roadmaps. Set up alerts to be notified of actual changes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-lg border border-accent/20 bg-accent-light/50 p-6 text-center">
        <h2 className="text-lg font-bold mb-2">Stay ahead of pricing changes</h2>
        <p className="text-sm text-muted mb-4">
          Get notified before price increases hit your budget. Set alerts for the tools you use.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/alerts"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            Set Up Price Alerts
          </Link>
          <Link
            href="/changelog"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold bg-surface border border-border text-foreground rounded-lg hover:bg-surface-alt transition-colors"
          >
            View Full Changelog
          </Link>
        </div>
      </div>

      {/* SEO content */}
      <div className="mt-12 pt-8 border-t border-border">
        <h2 className="text-lg font-bold mb-3">Understanding SaaS pricing trends</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          SaaS pricing doesn&apos;t move randomly. There are patterns: tools add AI features for 6-12 months before raising
          prices. Free tiers shrink before paid tiers increase. When one major player in a category raises prices, competitors
          often follow within 6 months.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          We track these patterns across every tool on Sasanova. This page is updated whenever we verify a new pricing change
          or identify a new trend. Bookmark it or set up alerts to stay informed.
        </p>
      </div>
    </div>
  );
}
