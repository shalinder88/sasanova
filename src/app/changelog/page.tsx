import type { Metadata } from "next";
import Link from "next/link";
import ChangelogClient from "./ChangelogClient";

export const metadata: Metadata = {
  title: "SaaS Pricing Changelog — Every Change, Tracked",
  description:
    "A living record of every SaaS pricing change. We track pricing changes across 148 tools so you don't have to. See who raised prices, who lowered them, and by how much.",
  alternates: { canonical: "https://sasanova.com/changelog" },
  openGraph: {
    title: "SaaS Pricing Changelog — Every Change, Tracked",
    description:
      "We track pricing changes across 148 tools so you don't have to. See every SaaS price increase, decrease, and restructuring.",
    url: "https://sasanova.com/changelog",
    images: [{ url: "/og/default", width: 1200, height: 630 }],
  },
};

export interface PricingChange {
  date: string;
  tool: string;
  slug: string;
  category: string;
  change: string;
  impact: "critical" | "high" | "medium" | "low" | "positive";
  oldPrice?: number;
  newPrice?: number;
  percentChange?: number;
}

const pricingChanges: PricingChange[] = [
  { date: "2026-03", tool: "Bardeen", slug: "bardeen", category: "automation", change: "Professional plan increased from $10/mo to $99/mo", impact: "critical", oldPrice: 10, newPrice: 99, percentChange: 890 },
  { date: "2026-03", tool: "Ghost", slug: "ghost", category: "newsletter-platforms", change: "Plans restructured: Starter $9\u2192$18, Creator\u2192Publisher at $29\u2192$35", impact: "high", oldPrice: 9, newPrice: 18, percentChange: 100 },
  { date: "2026-01", tool: "Surfer SEO", slug: "surfer-seo", category: "seo-tools", change: "Essential $89\u2192$99, Scale $129\u2192$219", impact: "high", oldPrice: 89, newPrice: 99, percentChange: 11 },
  { date: "2026-01", tool: "Close CRM", slug: "close-crm", category: "crm", change: "Plans restructured: Startup\u2192Essentials, Professional\u2192Growth, Enterprise\u2192Scale", impact: "medium" },
  { date: "2026-01", tool: "ChatGPT", slug: "chatgpt", category: "ai-writing", change: "New Go plan launched at $8/mo", impact: "low" },
  { date: "2026-01", tool: "Wix", slug: "wix", category: "website-builders", change: "Prices reduced across all tiers (Light $23\u2192$17, Core $35\u2192$29)", impact: "positive" },
  { date: "2025-12", tool: "Todoist", slug: "todoist", category: "task-management", change: "Pro increased from $5/mo to $7/mo, Business from $8 to $10", impact: "medium", oldPrice: 5, newPrice: 7, percentChange: 40 },
  { date: "2025-12", tool: "Typeform", slug: "typeform", category: "forms-surveys", change: "Basic $29\u2192$39, Plus $55\u2192$79, Business $99\u2192$129", impact: "high", oldPrice: 29, newPrice: 39, percentChange: 34 },
  { date: "2025-12", tool: "Descript", slug: "descript", category: "video-media", change: "Creator plan reduced from $35/mo to $24/mo", impact: "positive", oldPrice: 35, newPrice: 24, percentChange: -31 },
  { date: "2025-11", tool: "Pipedrive", slug: "pipedrive", category: "crm", change: "Plans rebranded: Essential\u2192Lite, Advanced\u2192Growth, Professional\u2192Premium, Power removed", impact: "medium" },
  { date: "2025-10", tool: "SE Ranking", slug: "se-ranking", category: "seo-tools", change: "Major restructuring: Essential\u2192Core at $129/mo (was $65)", impact: "critical", oldPrice: 65, newPrice: 129, percentChange: 98 },
  { date: "2025-09", tool: "Kit (ConvertKit)", slug: "convertkit", category: "email-marketing", change: "Creator plan increased from $33/mo to $39/mo", impact: "medium", oldPrice: 33, newPrice: 39, percentChange: 18 },
  { date: "2025-08", tool: "Salesforce", slug: "salesforce", category: "crm", change: "6% price increase across all tiers. Pro Suite now $100/seat", impact: "high", oldPrice: 80, newPrice: 100, percentChange: 25 },
  { date: "2025-07", tool: "Asana", slug: "asana", category: "project-management", change: "Free plan reduced from 10 users to 2 users", impact: "critical" },
  { date: "2025-06", tool: "Mailchimp", slug: "mailchimp", category: "email-marketing", change: "Free tier reduced from 500 contacts to 250 contacts", impact: "high" },
];

function getStats(changes: PricingChange[]) {
  const withPercent = changes.filter((c) => c.percentChange !== undefined);
  const increases = withPercent.filter((c) => (c.percentChange ?? 0) > 0);
  const decreases = changes.filter((c) => c.impact === "positive");
  const avgIncrease =
    increases.length > 0
      ? Math.round(increases.reduce((sum, c) => sum + (c.percentChange ?? 0), 0) / increases.length)
      : 0;

  return {
    total: changes.length,
    avgIncrease,
    raisedCount: changes.filter((c) => c.impact !== "positive" && c.impact !== "low").length,
    loweredCount: decreases.length,
  };
}

export default function ChangelogPage() {
  const stats = getStats(pricingChanges);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light border border-accent/20 text-accent text-xs font-medium mb-4">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pricing Changelog
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          SaaS Pricing Changelog — Every Change, Tracked
        </h1>
        <p className="text-muted text-lg max-w-2xl">
          We track pricing changes across 148 tools so you don&apos;t have to.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-2xl font-bold text-foreground">{stats.total}</p>
          <p className="text-xs text-muted mt-1">Changes tracked</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-2xl font-bold text-danger">+{stats.avgIncrease}%</p>
          <p className="text-xs text-muted mt-1">Avg price increase</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-2xl font-bold text-warning">{stats.raisedCount}</p>
          <p className="text-xs text-muted mt-1">Tools raised prices</p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-4">
          <p className="text-2xl font-bold text-success">{stats.loweredCount}</p>
          <p className="text-xs text-muted mt-1">Tools lowered prices</p>
        </div>
      </div>

      {/* Client component with filters + feed */}
      <ChangelogClient changes={pricingChanges} />

      {/* CTA */}
      <div className="mt-12 rounded-lg border border-accent/20 bg-accent-light/50 p-6 text-center">
        <h2 className="text-lg font-bold mb-2">Never miss a pricing change</h2>
        <p className="text-sm text-muted mb-4">
          Get notified instantly when tools you use raise prices, change plans, or reduce free tiers.
        </p>
        <Link
          href="/alerts"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          Set Up Price Alerts
        </Link>
      </div>

      {/* SEO content */}
      <div className="mt-12 pt-8 border-t border-border">
        <h2 className="text-lg font-bold mb-3">Why we track SaaS pricing changes</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          SaaS companies change their pricing more often than you think. In the last 12 months alone, we&apos;ve tracked
          {" "}{stats.total} significant pricing changes across the tools we cover. Some are minor adjustments. Others, like
          Bardeen&apos;s 890% increase or Asana&apos;s free tier reduction, fundamentally change whether a tool makes sense
          for your stack.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          This changelog is a living record. We verify every change against the vendor&apos;s actual pricing page, not press
          releases or rumors. When you see a change here, it&apos;s real and it&apos;s confirmed.
        </p>
        <div className="mt-4">
          <Link href="/trends" className="text-sm text-accent hover:underline font-medium">
            See pricing trends and predictions &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
