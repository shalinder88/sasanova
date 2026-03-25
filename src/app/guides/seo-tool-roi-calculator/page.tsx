import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SEO Tool ROI Calculator: Traffic Value vs Semrush and Ahrefs Cost",
  description:
    "Calculate your SEO tool ROI by comparing estimated traffic value against Semrush ($139.95/mo) and Ahrefs ($129/mo) subscription costs. Break-even traffic analysis.",
};

export default function SeoToolRoiCalculatorPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              SEO Tool ROI Calculator
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            ROI Calculator
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SEO Tool ROI Calculator: Traffic Value vs Semrush and Ahrefs Cost
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Semrush starts at $139.95/mo. Ahrefs starts at $129/mo. Are they worth it?
            This guide calculates the traffic value your SEO efforts need to generate
            to justify the tool cost, using real CPC data as a benchmark.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Formula */}
          <section>
            <h2 className="text-xl font-bold mb-3">The SEO Tool ROI Formula</h2>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm font-mono text-foreground">
                SEO Tool ROI = (Monthly organic traffic &times; Average CPC of those keywords) &minus; Tool monthly cost
              </p>
              <p className="text-sm text-muted mt-2">
                Traffic value = What you would pay in Google Ads for the same clicks.
                This is the standard way to value organic traffic.
              </p>
            </div>
          </section>

          {/* Tool Costs */}
          <section>
            <h2 className="text-xl font-bold mb-3">Exact SEO Tool Pricing</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Semrush Pro</td>
                    <td className="px-4 py-2.5 text-muted">5 projects, 500 keywords</td>
                    <td className="px-4 py-2.5 text-muted">$139.95/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,399.40/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Semrush Guru</td>
                    <td className="px-4 py-2.5 text-muted">15 projects, 1,500 keywords</td>
                    <td className="px-4 py-2.5 text-muted">$249.95/mo</td>
                    <td className="px-4 py-2.5 text-muted">$2,499.40/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Ahrefs Lite</td>
                    <td className="px-4 py-2.5 text-muted">5 projects, 500 credits/mo</td>
                    <td className="px-4 py-2.5 text-muted">$129/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,296/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Ahrefs Standard</td>
                    <td className="px-4 py-2.5 text-muted">20 projects, unlimited credits</td>
                    <td className="px-4 py-2.5 text-muted">$249/mo</td>
                    <td className="px-4 py-2.5 text-muted">$2,496/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Break-Even Traffic */}
          <section>
            <h2 className="text-xl font-bold mb-3">Break-Even: Monthly Traffic Value Needed</h2>
            <p className="text-muted leading-relaxed mb-4">
              Assuming different average CPCs for your keyword niche, how much organic traffic
              do you need for the tool to pay for itself?
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Average CPC</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Traffic for Semrush Pro ($139.95)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Traffic for Ahrefs Lite ($129)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$0.50/click</td>
                    <td className="px-4 py-2.5 text-muted">280 clicks/mo</td>
                    <td className="px-4 py-2.5 text-muted">258 clicks/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$1.00/click</td>
                    <td className="px-4 py-2.5 text-muted">140 clicks/mo</td>
                    <td className="px-4 py-2.5 text-muted">129 clicks/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$2.50/click</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">56 clicks/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">52 clicks/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$5.00/click</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">28 clicks/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">26 clicks/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">$10.00/click</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">14 clicks/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">13 clicks/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Insight</p>
              <p className="text-sm text-muted">
                In competitive niches ($2.50&ndash;$10+ CPC), Semrush or Ahrefs pays for itself
                with just 14&ndash;56 additional organic clicks per month. A single well-optimized
                blog post ranking on page 1 for a $5 CPC keyword with 500 monthly searches can
                generate $250+/month in traffic value &mdash; nearly 2x the tool cost.
              </p>
            </div>
          </section>

          {/* ROI Scenarios */}
          <section>
            <h2 className="text-xl font-bold mb-3">Annual ROI Scenarios</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Traffic</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Avg CPC</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Traffic Value/yr</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Semrush Pro ROI</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Ahrefs Lite ROI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">1,000</td>
                    <td className="px-4 py-2.5 text-muted">$1.00</td>
                    <td className="px-4 py-2.5 text-muted">$12,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10,601 (758%)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$10,704 (826%)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">5,000</td>
                    <td className="px-4 py-2.5 text-muted">$2.00</td>
                    <td className="px-4 py-2.5 text-muted">$120,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$118,601</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$118,704</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">500</td>
                    <td className="px-4 py-2.5 text-muted">$0.50</td>
                    <td className="px-4 py-2.5 text-muted">$3,000</td>
                    <td className="px-4 py-2.5 text-muted">$1,601 (114%)</td>
                    <td className="px-4 py-2.5 text-muted">$1,704 (131%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Semrush or Ahrefs &mdash; which has better ROI?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  At similar price points, both deliver comparable ROI. Ahrefs Lite ($129) is $11
                  cheaper than Semrush Pro ($139.95). Ahrefs excels at backlink analysis; Semrush
                  is broader (SEO + PPC + content + social). Choose based on features you&apos;ll
                  use, not price difference.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I use free SEO tools instead?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Google Search Console (free) and Ahrefs Webmaster Tools (free) cover basics.
                  But they lack competitive analysis, keyword research depth, and content gap
                  analysis that drive the strategic insights. Paid tools pay for themselves when
                  they help you target the right keywords instead of guessing.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  When do SEO tools NOT make sense?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  If you&apos;re in a niche with very low search volume or your business doesn&apos;t
                  rely on organic traffic (e.g., referral-based consulting), $130+/month may not
                  justify itself. Also, if you&apos;re not actively creating content or optimizing
                  pages, the tool sits unused.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["semrush", "ahrefs"]}
            comparisons={["semrush-vs-ahrefs"]}
            guides={["seo-tools-for-small-sites", "choosing-analytics-tool"]}
          />
        </div>
      </article>
    </>
  );
}
