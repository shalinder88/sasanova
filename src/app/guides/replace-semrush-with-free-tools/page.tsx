import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Replace Semrush with Free SEO Tools: Google Search Console + Mangools",
  description:
    "Semrush Pro costs $139.95/mo. Google Search Console is free. Mangools Entry is $29.90/mo. Combined they cover 70% of what most small sites need for $29.90/mo total. What you lose and when Semrush is worth it.",
};

export default function ReplaceSemrushWithFreeTools() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Replace Semrush with Free SEO Tools</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Replacement Stack
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace Semrush with Free SEO Tools: Google Search Console + Mangools
          </h1>
          <p className="text-lg text-muted">
            Semrush Pro costs $139.95/mo and covers SEO, PPC, content, social, and competitive research. Most small sites use maybe 20% of those features. Google Search Console (free) + Mangools Entry ($29.90/mo) covers keyword research, rank tracking, and performance data for 79% less. Here&apos;s exactly what you lose.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Math</p>
            <p className="text-sm text-muted">
              Semrush Pro: <strong className="text-foreground">$139.95/mo</strong> (5 projects, 500 keywords, 10,000 results/report).
              <br />
              Replacement: Google Search Console (<strong className="text-foreground">$0</strong>) + Mangools Entry (<strong className="text-foreground">$29.90/mo</strong>) = <strong className="text-foreground">$29.90/mo total</strong>.
              <br />
              Savings: <strong className="text-foreground">$110.05/mo ($1,321/yr)</strong>.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Exact Pricing Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Semrush</td>
                  <td className="px-4 py-2.5">Pro</td>
                  <td className="px-4 py-2.5">$139.95/mo</td>
                  <td className="px-4 py-2.5">5 projects, 500 tracked keywords, 10,000 results/report, site audit, competitive analysis</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Google Search Console</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Unlimited sites, real search performance data, indexing status, Core Web Vitals, sitemap management</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mangools</td>
                  <td className="px-4 py-2.5">Entry</td>
                  <td className="px-4 py-2.5">$29.90/mo</td>
                  <td className="px-4 py-2.5">100 keyword lookups/day, 200 suggestions, 25 SERP lookups, KWFinder, SERPWatcher, LinkMiner</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mangools</td>
                  <td className="px-4 py-2.5">Basic</td>
                  <td className="px-4 py-2.5">$49.90/mo</td>
                  <td className="px-4 py-2.5">Unlimited keyword lookups, 700 suggestions, unlimited SERP lookups</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Free/Cheap Tool Covers</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Google Search Console (Free)</h3>
          <ul className="space-y-1 text-muted list-none pl-0">
            <li>&bull; Real search performance data (clicks, impressions, CTR, position) &mdash; directly from Google, not estimated</li>
            <li>&bull; Index coverage and crawl errors</li>
            <li>&bull; Core Web Vitals monitoring</li>
            <li>&bull; Sitemap submission and URL inspection</li>
            <li>&bull; Manual action alerts</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Mangools Entry ($29.90/mo)</h3>
          <ul className="space-y-1 text-muted list-none pl-0">
            <li>&bull; KWFinder: keyword research with difficulty scores and search volume</li>
            <li>&bull; SERPChecker: SERP analysis for any keyword</li>
            <li>&bull; SERPWatcher: daily rank tracking</li>
            <li>&bull; LinkMiner: basic backlink analysis</li>
            <li>&bull; SiteProfiler: domain overview and authority metrics</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">What You Lose Without Semrush</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Semrush Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Alternative</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Gap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">Competitive domain analysis (25B+ keywords)</td>
                  <td className="px-4 py-2.5 text-muted">Mangools SiteProfiler (basic)</td>
                  <td className="px-4 py-2.5 text-muted">Significantly less depth</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Site audit (technical SEO)</td>
                  <td className="px-4 py-2.5 text-muted">Google Search Console + Lighthouse</td>
                  <td className="px-4 py-2.5 text-muted">No crawl-based audit</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">PPC keyword research and ad tracking</td>
                  <td className="px-4 py-2.5 text-muted">Google Ads Keyword Planner (free with account)</td>
                  <td className="px-4 py-2.5 text-muted">No competitor ad tracking</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Content marketing toolkit</td>
                  <td className="px-4 py-2.5 text-muted">None</td>
                  <td className="px-4 py-2.5 text-muted">No replacement</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Social media management</td>
                  <td className="px-4 py-2.5 text-muted">Buffer Free (3 channels)</td>
                  <td className="px-4 py-2.5 text-muted">Separate tool needed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stay on Semrush If...</h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li><strong className="text-foreground">You run PPC campaigns.</strong> Semrush&apos;s PPC tools (competitor ad tracking, keyword gap analysis) have no free equivalent.</li>
            <li><strong className="text-foreground">You manage 5+ websites.</strong> At scale, Semrush&apos;s project-based workflow and automated site audits save significant time.</li>
            <li><strong className="text-foreground">Competitive intelligence drives your strategy.</strong> Semrush&apos;s 25B+ keyword database provides competitive insights that Mangools cannot match.</li>
            <li><strong className="text-foreground">You&apos;re an agency.</strong> Client reporting, white-label features (Guru+), and historical data justify the cost when spread across clients.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">The Switch Is Right For You If...</h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li><strong className="text-foreground">You run one website under 10K monthly visitors.</strong> GSC + Mangools covers everything you need.</li>
            <li><strong className="text-foreground">You only use keyword research and rank tracking.</strong> That&apos;s Mangools&apos; sweet spot.</li>
            <li><strong className="text-foreground">You don&apos;t run PPC.</strong> The PPC tools are the biggest feature gap you&apos;ll feel.</li>
            <li><strong className="text-foreground">$140/mo is a meaningful budget line.</strong> For bootstrapped businesses, the $110/mo savings funds other growth efforts.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">Is Mangools&apos;s keyword data accurate enough?</h3>
          <p className="text-muted mb-4">
            Mangools uses a mix of Google Keyword Planner data and clickstream data. For long-tail keywords and difficulty scores, it&apos;s reliable for small-to-mid sites. For highly competitive commercial terms, Semrush&apos;s larger database provides more precision.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Can I do a site audit without Semrush?</h3>
          <p className="text-muted mb-4">
            Google Search Console flags indexing issues, Core Web Vitals problems, and manual actions. For deeper technical audits, use Lighthouse (free, built into Chrome) or Screaming Frog&apos;s free tier (500 URLs). The combination covers most small-site needs.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What about Semrush&apos;s additional user fees?</h3>
          <p className="text-muted mb-4">
            Semrush Pro includes 1 user. Additional users cost $45&ndash;$100/mo each. If you have a 3-person marketing team, the real cost is $230&ndash;$340/mo. Mangools Entry includes 1 user, but Mangools Premium at $44.90/mo includes 3 seats &mdash; still 85% cheaper.
          </p>
        </div>

        <RelatedLinks
          tools={["semrush", "mangools"]}
          comparisons={[]}
          guides={[
            "seo-tools-for-small-sites",
            "who-should-not-use-semrush",
            "seo-tool-roi-calculator",
          ]}
        />
      </article>
    </>
  );
}
