import type { Metadata } from "next";
import Link from "next/link";
import { tools, getToolBySlug, getOverallScore } from "@/data/tools";
import ScoreBar from "@/components/ScoreBar";
import PricingCalculator from "@/components/PricingCalculator";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool Not Found" };

  const cheapest = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  const priceRange =
    cheapest.length > 0
      ? `from $${Math.min(...cheapest.map((p) => p.priceMonthly as number))}/mo`
      : tool.freeTier
        ? "free to start"
        : "custom pricing";

  return {
    title: `${tool.name} Pricing Explained (2026)`,
    description: `${tool.name} pricing starts ${priceRange}. Full plan breakdown, annual savings, free tier details, and hidden costs — independently verified.`,
    alternates: { canonical: canonicalUrl(`/pricing/${slug}`) },
  };
}

function savingsPercent(monthly: number | null, annual: number | null): string | null {
  if (!monthly || !annual || monthly <= 0) return null;
  const annualMonthly = annual / 12;
  const pct = Math.round(((monthly - annualMonthly) / monthly) * 100);
  return pct > 0 ? `${pct}%` : null;
}

export default async function PricingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Tool Not Found</h1>
        <p className="text-muted mb-6">We couldn&apos;t find pricing data for this tool.</p>
        <Link href="/pricing" className="text-accent hover:underline">
          Back to Pricing
        </Link>
      </div>
    );
  }

  const paidPlans = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  const minPrice =
    paidPlans.length > 0 ? Math.min(...paidPlans.map((p) => p.priceMonthly as number)) : null;
  const maxPrice =
    paidPlans.length > 0 ? Math.max(...paidPlans.map((p) => p.priceMonthly as number)) : null;

  const provenanceLabel =
    tool.provenanceLevel === "independently_verified"
      ? "Independently Verified"
      : tool.provenanceLevel === "vendor_claimed"
        ? "Vendor-Claimed"
        : "Community-Reported";

  const provenanceColor =
    tool.provenanceLevel === "independently_verified"
      ? "bg-success-light text-success"
      : tool.provenanceLevel === "vendor_claimed"
        ? "bg-warning-light text-warning"
        : "bg-cyan-light text-cyan";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tool.name,
    description: tool.description,
    brand: { "@type": "Organization", name: tool.vendor },
    url: tool.website,
    offers: tool.pricing
      .filter((p) => p.priceMonthly !== null)
      .map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.priceMonthly,
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
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
              { name: "Pricing", path: "/pricing" },
              { name: `${tool.name} Pricing`, path: `/pricing/${tool.slug}` },
            ])
          ),
        }}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/pricing" className="hover:text-accent transition-colors">
              Pricing
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{tool.name} Pricing</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            {tool.name} Pricing Explained (2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-3xl">
            {minPrice !== null && maxPrice !== null
              ? `${tool.name} ${tool.freeTier ? "offers a free tier and" : ""} paid plans range from $${minPrice}/mo to $${maxPrice}/mo (billed monthly). `
              : tool.freeTier
                ? `${tool.name} is free to use. `
                : `${tool.name} offers custom pricing. `}
            {tool.tagline}
          </p>
        </header>

        {/* AEO Answer Block */}
        <div className="bg-surface-alt border border-border rounded-lg p-4 mb-10">
          <p className="text-sm text-foreground leading-relaxed">
            <strong>{tool.name}</strong>{" "}
            {minPrice !== null
              ? <>starts at ${minPrice}/mo{tool.freeTier ? " with a free tier available" : ""}.</>
              : tool.freeTier
                ? <>is free to use with no paid plans required.</>
                : <>uses custom pricing — contact sales for a quote.</>}{" "}
            {maxPrice !== null && minPrice !== null && maxPrice !== minPrice
              ? <>Paid plans range up to ${maxPrice}/mo. </>
              : null}
            {tool.tagline}.{" "}
            <span className="text-muted">
              Pricing independently verified as of{" "}
              {new Date(tool.lastVerified).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}.
            </span>
          </p>
        </div>

        {/* Pricing Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">All Plans</h2>
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-sm table-striped">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-3 font-semibold">Plan</th>
                  <th className="px-4 py-3 font-semibold">Monthly</th>
                  <th className="px-4 py-3 font-semibold">Annual</th>
                  <th className="px-4 py-3 font-semibold">Savings</th>
                  <th className="px-4 py-3 font-semibold">Billing</th>
                  <th className="px-4 py-3 font-semibold">Limits</th>
                </tr>
              </thead>
              <tbody>
                {tool.pricing.map((plan) => {
                  const savings = savingsPercent(plan.priceMonthly, plan.priceAnnual);
                  const billingLabel =
                    plan.billingModel === "per_seat"
                      ? "Per seat"
                      : plan.billingModel === "flat"
                        ? "Flat"
                        : plan.billingModel === "usage"
                          ? "Usage"
                          : "Custom";
                  return (
                    <tr
                      key={plan.name}
                      className={plan.highlighted ? "bg-accent-light/50 border-l-2 border-l-accent" : ""}
                    >
                      <td className="px-4 py-3 font-medium whitespace-nowrap">
                        {plan.name}
                        {plan.highlighted && (
                          <span className="ml-1.5 text-[10px] font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-full">
                            Recommended
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {plan.priceMonthly !== null ? (
                          plan.priceMonthly === 0 ? (
                            <span className="text-success font-semibold">Free</span>
                          ) : (
                            `$${plan.priceMonthly}`
                          )
                        ) : (
                          <span className="text-muted">Contact sales</span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {plan.priceAnnual !== null ? (
                          plan.priceAnnual === 0 ? (
                            <span className="text-success font-semibold">Free</span>
                          ) : (
                            `$${plan.priceAnnual}/yr`
                          )
                        ) : (
                          <span className="text-muted">Custom</span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {savings ? (
                          <span className="text-success font-semibold">{savings}</span>
                        ) : (
                          <span className="text-muted">--</span>
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-muted">{billingLabel}</td>
                      <td className="px-4 py-3 text-muted">{plan.limits}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing Calculator */}
        <section className="mb-10">
          <PricingCalculator plans={tool.pricing} toolName={tool.name} />
        </section>

        {/* Free Tier */}
        {tool.freeTier && tool.freeTierLimits && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Free Tier Details</h2>
            <div className="border border-success/20 bg-success-light rounded-xl p-5">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-success shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-sm mb-1">{tool.name} Free Tier</p>
                  <p className="text-sm text-muted">{tool.freeTierLimits}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Hidden Costs / Things to Know */}
        {tool.avoidIf && tool.avoidIf.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4">Hidden Costs &amp; Things to Know</h2>
            <div className="border border-warning/20 bg-warning-light rounded-xl p-5">
              <ul className="space-y-2">
                {tool.avoidIf.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-warning shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-muted">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Scores summary */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Scoring Overview</h2>
          <div className="border border-border rounded-xl p-5 space-y-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold">Overall Score</span>
              <span className="text-2xl font-extrabold text-accent">
                {getOverallScore(tool.scores)}
                <span className="text-sm font-normal text-muted"> / 10</span>
              </span>
            </div>
            <ScoreBar label="Value" value={tool.scores.value} />
            <ScoreBar label="Ease of Use" value={tool.scores.ease} />
            <ScoreBar label="Power" value={tool.scores.power} />
            <ScoreBar label="Setup Friction" value={tool.scores.setupFriction} />
            <ScoreBar label="Migration Ease" value={tool.scores.migrationDifficulty} />
            <ScoreBar label="Transparency" value={tool.scores.transparency} />
          </div>
        </section>

        {/* Verification + Provenance */}
        <section className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-muted">Last verified:</span>
            <span className="font-medium">{tool.lastVerified}</span>
            <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full ${provenanceColor}`}>
              {provenanceLabel}
            </span>
          </div>
        </section>

        {/* Affiliate CTA */}
        <section className="mb-10">
          <div className="border border-accent/20 bg-accent-light rounded-xl p-6 text-center">
            <h3 className="text-lg font-bold mb-2">Try {tool.name}</h3>
            <p className="text-sm text-muted mb-4">
              Visit the official {tool.name} pricing page to see the latest plans and start{" "}
              {tool.freeTier ? "with the free tier" : "your trial"}.
            </p>
            <a
              href={tool.affiliateUrl}
              rel="sponsored noopener noreferrer"
              target="_blank"
              className="inline-flex items-center px-6 py-2.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors text-sm"
            >
              View {tool.name} Pricing
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
            <p className="text-[10px] text-muted mt-2">
              Affiliate link.{" "}
              <Link href="/disclosure" className="underline hover:text-accent">
                Learn how we earn
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
