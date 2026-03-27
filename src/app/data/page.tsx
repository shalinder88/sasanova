import type { Metadata } from "next";
import Link from "next/link";
import { tools, categories, getLatestVerifiedDate, formatVerifiedLong } from "@/data/tools";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Sasanova Open Pricing Data — Download SaaS Pricing for 148 Tools",
  description:
    "Download normalized SaaS pricing data for 148 tools. Updated monthly. Free to use with attribution. CSV and JSON formats available.",
  alternates: {
    canonical: "https://sasanova.com/data",
  },
  openGraph: {
    title: "Sasanova Open Pricing Data",
    description:
      "Download normalized SaaS pricing data for 148 tools across 30 categories. Updated monthly. Free to use with attribution.",
  },
};

export default function DataPage() {
  const totalPlans = tools.reduce((sum, t) => sum + t.pricing.length, 0);
  const previewTools = tools.slice(0, 20);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Open Data</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Open Data
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Sasanova Open Pricing Data
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Download normalized SaaS pricing data for 148 tools. Updated
            monthly. Free to use with attribution.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Summary Stats */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="border border-border rounded-xl p-5 bg-surface text-center">
              <p className="text-3xl font-extrabold text-accent">{tools.length}</p>
              <p className="text-sm text-muted mt-1">Tools</p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface text-center">
              <p className="text-3xl font-extrabold text-accent">{categories.length}</p>
              <p className="text-sm text-muted mt-1">Categories</p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface text-center">
              <p className="text-3xl font-extrabold text-accent">{totalPlans}</p>
              <p className="text-sm text-muted mt-1">Pricing Plans</p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface text-center">
              <p className="text-sm font-bold text-accent">{formatVerifiedLong(getLatestVerifiedDate())}</p>
              <p className="text-sm text-muted mt-1">Last Verified</p>
            </div>
          </div>
        </section>

        {/* Preview Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Preview (First 20 Tools)</h2>
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface border-b border-border text-left">
                  <th className="px-4 py-3 font-semibold text-muted">Tool</th>
                  <th className="px-4 py-3 font-semibold text-muted">Category</th>
                  <th className="px-4 py-3 font-semibold text-muted">Cheapest Plan</th>
                  <th className="px-4 py-3 font-semibold text-muted text-right">Price/mo</th>
                  <th className="px-4 py-3 font-semibold text-muted text-center">Free Tier</th>
                  <th className="px-4 py-3 font-semibold text-muted">Billing</th>
                </tr>
              </thead>
              <tbody>
                {previewTools.map((tool) => {
                  const paidPlans = tool.pricing.filter(
                    (p) => p.priceMonthly !== null && p.priceMonthly > 0
                  );
                  const cheapest = paidPlans.length > 0
                    ? paidPlans.reduce((min, p) =>
                        (p.priceMonthly ?? Infinity) < (min.priceMonthly ?? Infinity)
                          ? p
                          : min
                      )
                    : tool.pricing[0];

                  return (
                    <tr
                      key={tool.slug}
                      className="border-b border-border/50 hover:bg-surface/50 transition-colors"
                    >
                      <td className="px-4 py-3 font-medium text-foreground">
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="hover:text-accent transition-colors"
                        >
                          {tool.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-muted capitalize">
                        {tool.categorySlug.replace(/-/g, " ")}
                      </td>
                      <td className="px-4 py-3 text-muted">{cheapest?.name ?? "N/A"}</td>
                      <td className="px-4 py-3 text-right font-mono text-foreground">
                        {cheapest?.priceMonthly != null
                          ? cheapest.priceMonthly === 0
                            ? "Free"
                            : `$${cheapest.priceMonthly}/mo`
                          : "Custom"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {tool.freeTier ? (
                          <span className="text-green-400 font-semibold">Yes</span>
                        ) : (
                          <span className="text-muted">No</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted capitalize">
                        {cheapest?.billingModel ?? "N/A"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted mt-3">
            Showing 20 of {tools.length} tools.{" "}
            <span className="text-accent">Download the full dataset below.</span>
          </p>
        </section>

        {/* Download Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Download Full Dataset</h2>
          <p className="text-muted mb-6">
            Get the complete pricing dataset for all {tools.length} tools in your
            preferred format. Data is updated monthly and includes all fields
            listed below.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/data/csv"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-semibold hover:bg-accent/90 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CSV
            </a>
            <a
              href="/data/json"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download JSON
            </a>
          </div>
        </section>

        {/* What's Included */}
        <section>
          <h2 className="text-2xl font-bold mb-4">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { field: "name", desc: "Tool name" },
              { field: "slug", desc: "URL-safe identifier" },
              { field: "vendor", desc: "Parent company" },
              { field: "category", desc: "Primary category" },
              { field: "freeTier", desc: "Whether a free plan exists" },
              { field: "lowestPrice", desc: "Cheapest paid plan (monthly)" },
              { field: "highestPrice", desc: "Most expensive listed plan" },
              { field: "billingModel", desc: "per_seat, flat, usage, or custom" },
              { field: "provenanceLevel", desc: "How we verified the data" },
              { field: "lastVerified", desc: "Date of last verification" },
              { field: "website", desc: "Official vendor URL" },
            ].map((item) => (
              <div
                key={item.field}
                className="flex items-start gap-3 p-3 rounded-lg bg-surface border border-border"
              >
                <code className="text-xs font-mono text-accent bg-accent-light px-1.5 py-0.5 rounded shrink-0">
                  {item.field}
                </code>
                <span className="text-sm text-muted">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use */}
        <section>
          <h2 className="text-2xl font-bold mb-4">How to Use This Data</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="space-y-3 text-muted">
              <li>
                <strong className="text-foreground">Attribution required:</strong>{" "}
                When using this data, please credit Sasanova and link back to{" "}
                <code className="text-accent">sasanova.com/data</code>.
              </li>
              <li>
                <strong className="text-foreground">Free for any purpose:</strong>{" "}
                Use in newsletters, articles, reports, internal dashboards,
                research, or commercial products with attribution.
              </li>
              <li>
                <strong className="text-foreground">Informational purposes:</strong>{" "}
                This data is provided for informational purposes. Always verify
                pricing on vendor websites before making purchasing decisions.
              </li>
              <li>
                <strong className="text-foreground">Updates:</strong> The dataset
                is refreshed monthly. Check back for the latest data or bookmark
                the download URLs.
              </li>
            </ul>
          </div>
        </section>

        {/* Data Quality */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Data Quality</h2>
          <div className="space-y-4">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <h3 className="font-semibold text-foreground mb-2">
                Independently Verified
              </h3>
              <p className="text-sm text-muted">
                Pricing checked by the Sasanova team against official vendor
                pricing pages. Plans signed up for and tested where possible.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <h3 className="font-semibold text-foreground mb-2">
                Vendor Claimed
              </h3>
              <p className="text-sm text-muted">
                Some pricing is sourced from vendor-published materials (pricing
                pages, documentation) but not independently tested.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <h3 className="font-semibold text-foreground mb-2">
                Verification Schedule
              </h3>
              <p className="text-sm text-muted">
                All tools are re-verified monthly. Each tool record includes a{" "}
                <code className="text-accent">lastVerified</code> date so you
                can assess freshness.
              </p>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <RelatedLinks
          guides={[
            "saas-pricing-trends-2026",
            "saas-pricing-models-explained",
            "how-much-should-software-cost",
            "cheapest-saas-stack-2026",
          ]}
        />
      </div>
    </>
  );
}
