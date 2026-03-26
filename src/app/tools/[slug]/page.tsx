import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, versusPairs, getOverallScore } from "@/data/tools";
import ScoreBar from "@/components/ScoreBar";
import PricingCalculator from "@/components/PricingCalculator";
import StickyToolCTA from "@/components/StickyToolCTA";
import WatchPriceButton from "@/components/WatchPriceButton";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

/* ---------- Static generation ---------- */

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

/* ---------- Dynamic metadata ---------- */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};
  const overall = getOverallScore(tool.scores);
  return {
    title: `${tool.name} Review — ${overall}/10 Score`,
    description: `${tool.tagline}. In-depth review with multi-axis scoring, pricing breakdown, alternatives, and switching intelligence.`,
    alternates: { canonical: canonicalUrl(`/tools/${slug}`) },
    openGraph: {
      title: `${tool.name} Review — ${overall}/10 | Sasanova`,
      description: tool.tagline,
      images: [{ url: `/og/tool/${slug}`, width: 1200, height: 630 }],
    },
  };
}

/* ---------- Helpers ---------- */

const provenanceLabel: Record<string, string> = {
  independently_verified: "Independently Verified",
  vendor_claimed: "Vendor-Claimed",
  community_reported: "Community Reported",
};

const provenanceColor: Record<string, string> = {
  independently_verified: "text-success bg-success-light",
  vendor_claimed: "text-warning bg-warning-light",
  community_reported: "text-muted bg-surface-alt",
};

const complexityMeta: Record<string, { label: string; color: string }> = {
  low: { label: "Low", color: "text-success bg-success-light" },
  medium: { label: "Medium", color: "text-warning bg-warning-light" },
  high: { label: "High", color: "text-danger bg-danger-light" },
};

const toolGuideMap: Record<string, { slug: string; title: string }[]> = {
  mailchimp: [
    { slug: "mailchimp-hidden-costs", title: "The Real Cost of Mailchimp: What the Pricing Page Doesn't Show" },
    { slug: "when-mailchimp-becomes-expensive", title: "The Exact Subscriber Count Where Mailchimp Becomes a Bad Deal" },
    { slug: "migrate-mailchimp-to-kit", title: "How to Migrate from Mailchimp to Kit (ConvertKit) Without Losing Subscribers" },
    { slug: "migrate-mailchimp-to-beehiiv", title: "Leaving Mailchimp for beehiiv: The Complete Migration Playbook" },
  ],
  "hubspot-crm": [
    { slug: "hubspot-pricing-reality", title: "HubSpot Pricing: What It Actually Costs (Not What the Website Says)" },
    { slug: "when-hubspot-stops-being-cheap", title: "When HubSpot Stops Being Cheap: The Exact Thresholds" },
    { slug: "migrate-salesforce-to-hubspot", title: "Migrating from Salesforce to HubSpot: What Actually Happens" },
    { slug: "hubspot-crm-setup-guide", title: "HubSpot CRM Setup in 30 Minutes: The No-Nonsense Guide" },
  ],
  zapier: [
    { slug: "zapier-hidden-costs", title: "Zapier's Hidden Costs: Why Your $20/Month Plan Becomes $100" },
    { slug: "when-zapier-costs-more-than-make", title: "The Exact Task Volume Where Zapier Stops Making Sense" },
    { slug: "migrate-zapier-to-make", title: "Switching from Zapier to Make: The Real Savings and The Real Pain" },
    { slug: "zapier-setup-guide", title: "Your First 5 Zapier Automations: A Practical Setup Guide" },
  ],
  beehiiv: [
    { slug: "beehiiv-setup-guide", title: "beehiiv Setup Guide: From Zero to First Newsletter in 60 Minutes" },
    { slug: "migrate-substack-to-beehiiv", title: "Substack to beehiiv: Why Creators Switch and How to Do It" },
    { slug: "migrate-mailchimp-to-beehiiv", title: "Leaving Mailchimp for beehiiv: The Complete Migration Playbook" },
    { slug: "best-email-tool-creators", title: "The Best Email Platform for Creators in 2026 (Not What You Think)" },
  ],
  pipedrive: [
    { slug: "pipedrive-setup-guide", title: "Pipedrive Setup for Sales Teams: Pipeline to First Deal" },
    { slug: "best-crm-freelancers-consultants", title: "Best CRM for Freelancers and Consultants (You Don't Need Salesforce)" },
    { slug: "best-crm-sales-teams", title: "CRM for Sales Teams of 5-25: HubSpot vs Pipedrive vs Close" },
    { slug: "switch-from-hubspot-to-pipedrive", title: "Switching from HubSpot to Pipedrive: A Smaller CRM That Gets Used" },
  ],
  make: [
    { slug: "migrate-zapier-to-make", title: "Switching from Zapier to Make: The Real Savings and The Real Pain" },
    { slug: "automation-pricing-compared", title: "Zapier vs Make vs n8n Pricing: The Honest Math Nobody Shows You" },
    { slug: "best-automation-tool-solopreneurs", title: "Automation for One-Person Businesses: What's Worth Paying For" },
  ],
  salesforce: [
    { slug: "salesforce-hidden-costs", title: "Salesforce Pricing: The Real Number Is 3-5x What You See" },
    { slug: "migrate-salesforce-to-hubspot", title: "Migrating from Salesforce to HubSpot: What Actually Happens" },
    { slug: "when-hubspot-stops-being-cheap", title: "When HubSpot Stops Being Cheap: The Exact Thresholds" },
  ],
  convertkit: [
    { slug: "migrate-mailchimp-to-kit", title: "How to Migrate from Mailchimp to Kit (ConvertKit) Without Losing Subscribers" },
    { slug: "best-email-tool-creators", title: "The Best Email Platform for Creators in 2026 (Not What You Think)" },
    { slug: "switch-from-kit-to-beehiiv", title: "Kit to beehiiv: The Creator Newsletter Migration" },
  ],
  activecampaign: [
    { slug: "switch-from-mailchimp-to-activecampaign", title: "Mailchimp to ActiveCampaign: When You Need Real Automation" },
    { slug: "best-email-tool-agencies", title: "Email Marketing Tools for Agencies: Managing 10+ Client Accounts" },
    { slug: "email-automation-sequences-compared", title: "Email Automation Sequences: Which Platform Does It Best?" },
  ],
  n8n: [
    { slug: "migrate-zapier-to-n8n", title: "Self-Hosting Your Automations: Zapier to n8n Migration Guide" },
    { slug: "automation-pricing-compared", title: "Zapier vs Make vs n8n Pricing: The Honest Math Nobody Shows You" },
    { slug: "best-automation-tool-agencies", title: "Automation Tools for Agencies: Managing Client Workflows at Scale" },
  ],
};

const migrationGuides: Record<string, { href: string; label: string }[]> = {
  mailchimp: [
    { href: "/guides/migrate-mailchimp-to-kit", label: "Migrate from Mailchimp to Kit" },
    { href: "/guides/migrate-mailchimp-to-beehiiv", label: "Migrate from Mailchimp to beehiiv" },
  ],
  substack: [
    { href: "/guides/migrate-substack-to-beehiiv", label: "Migrate from Substack to beehiiv" },
  ],
  zapier: [
    { href: "/guides/migrate-zapier-to-make", label: "Migrate from Zapier to Make" },
    { href: "/guides/migrate-zapier-to-n8n", label: "Migrate from Zapier to n8n" },
  ],
  salesforce: [
    { href: "/guides/migrate-salesforce-to-hubspot", label: "Migrate from Salesforce to HubSpot" },
  ],
  "hubspot-crm": [
    { href: "/guides/switch-from-hubspot-to-pipedrive", label: "Switch from HubSpot to Pipedrive" },
  ],
};

/* ---------- Page ---------- */

export default async function ToolProfilePage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const overall = getOverallScore(tool.scores);
  const alternatives = tool.alternatives
    .map((s) => tools.find((t) => t.slug === s))
    .filter(Boolean);

  // Find comparison pages involving this tool
  const relatedComparisons = versusPairs.filter(
    (vs) => vs.slugA === slug || vs.slugB === slug
  );

  // Cheapest paid price for AEO block
  const paidPlans = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  const cheapestPrice = paidPlans.length > 0
    ? Math.min(...paidPlans.map((p) => p.priceMonthly as number))
    : null;

  /* JSON-LD structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    url: tool.website,
    applicationCategory: "BusinessApplication",
    operatingSystem: tool.platforms.join(", "),
    description: tool.tagline,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: overall,
      bestRating: 10,
      worstRating: 1,
      ratingCount: 1,
    },
    offers: tool.pricing
      .filter((p) => p.priceMonthly !== null)
      .map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.priceMonthly,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          billingDuration: "P1M",
        },
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Tools", path: "/tools" },
              { name: tool.name, path: `/tools/${tool.slug}` },
            ])
          ),
        }}
      />

      {/* Floating CTA */}
      <StickyToolCTA
        toolName={tool.name}
        affiliateUrl={tool.affiliateUrl}
        slug={tool.slug}
        freeTier={tool.freeTier}
      />

      {/* Breadcrumbs */}
      <nav className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1.5 text-xs text-muted">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/tools"
                className="hover:text-accent transition-colors"
              >
                Tools
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium">{tool.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* Left */}
            <div className="min-w-0">
              {tool.badge && (
                <span className="inline-block text-[10px] font-semibold text-accent bg-accent-light px-2.5 py-0.5 rounded-full mb-2 cursor-help" title="Editorial badge assigned based on our 6-axis scoring methodology. See /about/methodology for criteria.">
                  {tool.badge}
                </span>
              )}
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-1">
                {tool.name}
              </h1>
              <p className="text-sm text-muted mb-2">by {tool.vendor}</p>
              <p className="text-base text-muted max-w-2xl mb-4">
                {tool.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-medium ${
                    provenanceColor[tool.provenanceLevel]
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      tool.provenanceLevel === "independently_verified"
                        ? "bg-success"
                        : tool.provenanceLevel === "vendor_claimed"
                          ? "bg-warning"
                          : "bg-muted"
                    }`}
                  />
                  {provenanceLabel[tool.provenanceLevel]}
                </span>
                <span className="text-muted">
                  Last verified:{" "}
                  {new Date(tool.lastVerified).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
              {alternatives.length > 0 && (
                <Link
                  href={`/alternatives/${slug}`}
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-accent hover:underline transition-colors"
                >
                  See {alternatives.length} alternatives to {tool.name} →
                </Link>
              )}
            </div>

            {/* Score circle */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-4 border-accent flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-accent leading-none">
                    {overall}
                  </p>
                  <p className="text-[10px] text-muted">/ 10</p>
                </div>
              </div>
              <p className="text-xs text-muted mt-2">Overall Score</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* AEO Answer Block */}
        <div className="bg-surface-alt border border-border rounded-lg p-4 mb-8">
          <p className="text-sm text-foreground leading-relaxed">
            <strong>{tool.name}</strong> scores {overall}/10 overall.{" "}
            {tool.tagline}.{" "}
            Best for: {tool.bestFor[0]}.{" "}
            {cheapestPrice !== null
              ? `Starting at $${cheapestPrice}/month.`
              : tool.freeTier
                ? "Free to start."
                : "Custom pricing."}{" "}
            <span className="text-muted">
              Last verified{" "}
              {new Date(tool.lastVerified).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              .
            </span>
          </p>
        </div>

        {/* Multi-axis Scores */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Score Breakdown</h2>
            <Link href="/about/methodology" className="text-[10px] text-accent hover:underline">How we score →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
            <div className="hover-score-row"><ScoreBar label="Value" value={tool.scores.value} /></div>
            <div className="hover-score-row"><ScoreBar label="Ease of Use" value={tool.scores.ease} /></div>
            <div className="hover-score-row"><ScoreBar label="Power" value={tool.scores.power} /></div>
            <div className="hover-score-row"><ScoreBar label="Setup Friction" value={tool.scores.setupFriction} /></div>
            <div className="hover-score-row"><ScoreBar
              label="Migration Ease"
              value={tool.scores.migrationDifficulty}
            /></div>
            <div className="hover-score-row"><ScoreBar
              label="Transparency"
              value={tool.scores.transparency}
            /></div>
          </div>
          <p className="text-[10px] text-muted mt-3">
            Scores are editorial assessments on a 1–10 scale. Overall score uses a weighted formula: Value (25%), Power (20%), Transparency (20%), Ease (15%), Setup (10%), Migration (10%).{" "}
            <Link href="/about/methodology" className="text-accent hover:underline">Full methodology</Link>
          </p>
        </section>

        {/* ── Switching Intelligence (Sasanova Exclusive) ── */}
        <section className="border border-accent/30 rounded-2xl bg-surface-alt/50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-surface-alt">
            <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>
            <h2 className="text-lg font-bold">Switching Intelligence</h2>
            <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-0.5 rounded-full">
              Sasanova Exclusive
            </span>
          </div>

          <div className="p-6 space-y-6">
            {/* Migration Difficulty Meter + Implementation Complexity */}
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Migration Difficulty</p>
                <div className="flex items-center gap-1">
                  {(["low", "medium", "high"] as const).map((level) => {
                    const filled = level === "low"
                      ? true
                      : level === "medium"
                        ? tool.implementationComplexity === "medium" || tool.implementationComplexity === "high"
                        : tool.implementationComplexity === "high";
                    const colors = filled
                      ? level === "low" ? "bg-success" : level === "medium" ? "bg-warning" : "bg-danger"
                      : "bg-border";
                    return (
                      <div key={level} className={`h-3 w-10 rounded-sm ${colors}`} />
                    );
                  })}
                  <span className={`ml-2 text-sm font-bold ${
                    tool.implementationComplexity === "low" ? "text-success"
                    : tool.implementationComplexity === "medium" ? "text-warning"
                    : "text-danger"
                  }`}>
                    {tool.implementationComplexity === "low" ? "Easy" : tool.implementationComplexity === "medium" ? "Moderate" : "Hard"}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Implementation Complexity</p>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${complexityMeta[tool.implementationComplexity].color}`}>
                  {complexityMeta[tool.implementationComplexity].label}
                </span>
              </div>
            </div>

            {/* Three subsections grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Triggers */}
              {tool.switchingTriggers && tool.switchingTriggers.length > 0 && (
                <div className="border border-warning/20 bg-warning-light/10 rounded-xl p-5">
                  <h3 className="text-sm font-bold mb-3 text-warning flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    What triggers people to switch AWAY
                  </h3>
                  <ul className="space-y-2">
                    {tool.switchingTriggers.map((t) => (
                      <li key={t} className="hover-item flex items-start gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-warning shrink-0 mt-1.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Blockers */}
              {tool.switchingBlockers && tool.switchingBlockers.length > 0 && (
                <div className="border border-danger/20 bg-danger-light/10 rounded-xl p-5">
                  <h3 className="text-sm font-bold mb-3 text-danger flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    What blocks people from leaving
                  </h3>
                  <ul className="space-y-2">
                    {tool.switchingBlockers.map((b) => (
                      <li key={b} className="hover-item flex items-start gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-danger shrink-0 mt-1.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Hidden Costs (if any) */}
            {tool.hiddenCosts && tool.hiddenCosts.length > 0 && (
              <div className="border border-warning/20 bg-warning-light/10 rounded-xl p-5">
                <h3 className="text-xs font-bold text-warning mb-2 uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Hidden Costs &amp; Gotchas
                </h3>
                <ul className="space-y-1.5">
                  {tool.hiddenCosts.map((cost) => (
                    <li key={cost} className="hover-item text-sm text-muted flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-warning shrink-0 mt-1.5" />
                      {cost}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Data Export & Portability */}
            {tool.dataExport && (
              <div className="border border-border rounded-xl p-5 bg-background">
                <h3 className="text-xs font-bold text-muted mb-2 uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Data Export &amp; Portability
                </h3>
                <p className="text-sm text-muted">{tool.dataExport}</p>
              </div>
            )}

            {/* Migration Guides Callout */}
            {migrationGuides[slug] && migrationGuides[slug].length > 0 && (
              <div className="border border-accent/20 bg-accent-light/10 rounded-xl p-5">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.591" />
                  </svg>
                  Switching from {tool.name}?
                </h3>
                <p className="text-xs text-muted mb-3">Planning to switch? Read our migration guides:</p>
                <div className="flex flex-wrap gap-2">
                  {migrationGuides[slug].map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent bg-accent-light rounded-full hover:bg-accent hover:text-white transition-colors"
                    >
                      {guide.label} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Calculate switching cost CTA */}
            <Link
              href={`/migrate?from=${slug}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold bg-accent/10 border border-accent text-accent rounded-xl hover:bg-accent/20 transition-all w-full justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Calculate switching cost →
            </Link>
          </div>
        </section>

        {/* Best For / Avoid If */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="border border-border rounded-xl p-5 bg-success-light/30">
            <h2 className="text-lg font-bold mb-3 text-success">Best For</h2>
            <ul className="space-y-2">
              {tool.bestFor.map((item) => (
                <li key={item} className="hover-item flex items-start gap-2 text-sm">
                  <svg
                    className="w-4 h-4 text-success shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-border rounded-xl p-5 bg-danger-light/30">
            <h2 className="text-lg font-bold mb-3 text-danger">Avoid If</h2>
            <ul className="space-y-2">
              {tool.avoidIf.map((item) => (
                <li key={item} className="hover-item flex items-start gap-2 text-sm">
                  <svg
                    className="w-4 h-4 text-danger shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Features */}
        <section>
          <h2 className="text-lg font-bold mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {tool.features.map((f) => (
              <div
                key={f}
                className="hover-item flex items-center gap-2 text-sm py-1.5"
              >
                <svg
                  className="w-3.5 h-3.5 text-accent shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Table */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Pricing</h2>
            <WatchPriceButton slug={slug} toolName={tool.name} />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-2.5 pr-4 font-semibold text-muted">Plan</th>
                  <th className="py-2.5 pr-4 font-semibold text-muted">
                    Monthly
                  </th>
                  <th className="py-2.5 pr-4 font-semibold text-muted">
                    Annual
                  </th>
                  <th className="py-2.5 pr-4 font-semibold text-muted">
                    Billing
                  </th>
                  <th className="py-2.5 font-semibold text-muted">Limits</th>
                </tr>
              </thead>
              <tbody>
                {tool.pricing.map((plan) => (
                  <tr
                    key={plan.name}
                    className={`border-b border-border table-row-hover ${
                      plan.highlighted
                        ? "bg-accent-light/40 border-l-2 border-l-accent"
                        : ""
                    }`}
                  >
                    <td className="py-3 pr-4 font-medium">
                      {plan.name}
                      {plan.highlighted && (
                        <span className="ml-2 text-[10px] text-accent font-semibold uppercase">
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-4">
                      {plan.priceMonthly === null
                        ? "Contact"
                        : plan.priceMonthly === 0
                          ? "Free"
                          : `$${plan.priceMonthly}/mo`}
                    </td>
                    <td className="py-3 pr-4">
                      {plan.priceAnnual === null
                        ? "Contact"
                        : plan.priceAnnual === 0
                          ? "Free"
                          : `$${plan.priceAnnual}/yr`}
                    </td>
                    <td className="py-3 pr-4 capitalize">{plan.billingModel}</td>
                    <td className="py-3 text-muted">{plan.limits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {tool.freeTier && tool.freeTierLimits && (
            <p className="mt-3 text-xs text-muted">
              <span className="font-medium text-success">Free tier:</span>{" "}
              {tool.freeTierLimits}
            </p>
          )}

          {/* Evidence footer */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-[10px] text-muted border-t border-border pt-3">
            <a href={`${tool.website}/pricing`} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Source: {tool.vendor} pricing page →
            </a>
            <span>Verified: {new Date(tool.lastVerified).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
            <a href="/about/methodology" className="text-accent hover:underline">Scoring methodology →</a>
          </div>
        </section>

        {/* Pricing Calculator */}
        <PricingCalculator plans={tool.pricing} toolName={tool.name} />

        {/* Integrations */}
        <section>
          <h2 className="text-lg font-bold mb-4">Integrations</h2>
          <div className="flex flex-wrap gap-2">
            {tool.integrations.map((i) => (
              <span
                key={i}
                className="hover-pill px-3 py-1.5 text-xs font-medium bg-surface-alt border border-border rounded-full"
              >
                {i}
              </span>
            ))}
          </div>
        </section>

        {/* Alternatives */}
        {alternatives.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-4">Alternatives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {alternatives.map((alt) => {
                if (!alt) return null;
                const altScore = getOverallScore(alt.scores);
                return (
                  <Link
                    key={alt.slug}
                    href={`/tools/${alt.slug}`}
                    className="hover-glow group border border-border rounded-xl p-4 hover:border-accent/30 transition-all bg-background"
                  >
                    <div className="flex items-start justify-between">
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold group-hover:text-accent transition-colors">
                          {alt.name}
                        </h3>
                        <p className="text-xs text-muted">{alt.vendor}</p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <p className="text-lg font-extrabold text-accent">
                          {altScore}
                        </p>
                        <p className="text-[10px] text-muted">/ 10</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted mt-2 line-clamp-2">
                      {alt.tagline}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Recommended Reading */}
        {toolGuideMap[slug] && toolGuideMap[slug].length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-4">Recommended Reading</h2>
            <ul className="space-y-2">
              {toolGuideMap[slug].map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-sm text-accent hover:underline transition-colors"
                  >
                    {guide.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Related Comparisons */}
        {relatedComparisons.length > 0 && (
          <section>
            <h2 className="text-lg font-bold mb-4">Related Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedComparisons.map((vs) => {
                const otherSlug = vs.slugA === slug ? vs.slugB : vs.slugA;
                const otherTool = tools.find((t) => t.slug === otherSlug);
                const pairPath = `${vs.slugA}-vs-${vs.slugB}`;
                return (
                  <Link
                    key={pairPath}
                    href={`/compare/${pairPath}`}
                    className="hover-glow group border border-border rounded-xl p-4 hover:border-accent/30 transition-all bg-background"
                  >
                    <p className="text-sm font-bold group-hover:text-accent transition-colors">
                      {tool.name} vs {otherTool?.name ?? otherSlug}
                    </p>
                    <p className="text-xs text-muted mt-1 line-clamp-2">{vs.summary}</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Affiliate CTA */}
        <section className="text-center py-6">
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm"
          >
            Visit {tool.name}
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
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
          <p className="text-[10px] text-muted mt-2">
            Affiliate link — we may earn a commission at no extra cost to you.
          </p>
        </section>

        {/* Vendor Claim Link */}
        <div className="text-center pb-2">
          <Link
            href={`/vendors/claim?tool=${slug}`}
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Are you from {tool.vendor}? Update this profile →
          </Link>
        </div>
      </div>
    </>
  );
}
