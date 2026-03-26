import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Semrush (And What to Use Instead)",
  description:
    "Semrush Pro costs $139.95/month — a serious investment. Here are 4 situations where Semrush is the wrong choice, with cheaper alternatives that cover most use cases.",
};

export default function WhoShouldNotUseSemrush() {
  return (
    <>
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
              Who Should NOT Use Semrush
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Semrush (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            Semrush is the most comprehensive SEO and online marketing platform available. It&apos;s also $139.95/month at the Pro tier &mdash; and that&apos;s for a single user with limited projects. Here&apos;s when that investment doesn&apos;t make sense.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              Semrush Pro costs $139.95/month ($116.62/month annual) for 5 projects, 500 keywords to track, and 10,000 results per report. If you&apos;re getting under 5,000 monthly visitors, just need keyword research, or just need backlink analysis, you&apos;re paying for an entire marketing suite you won&apos;t use. Mangools at $29.90/month covers keyword research at 79% less cost.
            </p>
          </div>

          {/* ── Case 1: Under 5K Monthly Visitors ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Sites Under 5,000 Monthly Visitors</h2>
          <p className="text-muted mb-4">
            At $139.95/month ($1,679/year), Semrush Pro needs to generate meaningful ROI to justify its cost. If your site gets under 5,000 monthly visitors, the SEO improvements Semrush enables will translate to small absolute traffic gains &mdash; maybe 500&ndash;1,000 extra visitors per month. Unless your revenue per visitor is high, the math doesn&apos;t work.
          </p>
          <p className="text-muted mb-4">
            Mangools Entry at $29.90/month gives you keyword research with 100 lookups/day and 200 keyword suggestions. That&apos;s enough to find and target the right keywords while your site grows. When you hit 10K+ monthly visitors and need competitive intelligence, position tracking at scale, and content marketing tools, Semrush&apos;s value proposition kicks in.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Mangools Entry</strong> &mdash; $29.90/month ($19.99/month annual). KWFinder for keyword research, SERPChecker, SERPWatcher for rank tracking. The most beginner-friendly SEO tool at 79% less than Semrush. <Link href="/tools/mangools" className="text-accent hover:underline">See Mangools review</Link></li>
              <li><strong className="text-foreground">Google Search Console</strong> &mdash; $0. Real performance data from Google itself: impressions, clicks, rankings, index coverage. Pair with Mangools for keyword research and you have 80% of what matters for small sites.</li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Semrush Pro</td>
                  <td className="px-4 py-2.5">$139.95/mo</td>
                  <td className="px-4 py-2.5">$1,399.40/yr</td>
                  <td className="px-4 py-2.5">Full marketing platform</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mangools Entry</td>
                  <td className="px-4 py-2.5">$29.90/mo</td>
                  <td className="px-4 py-2.5">$239.88/yr</td>
                  <td className="px-4 py-2.5">Keyword research + rank tracking</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ahrefs Lite</td>
                  <td className="px-4 py-2.5">$129/mo</td>
                  <td className="px-4 py-2.5">$1,296/yr</td>
                  <td className="px-4 py-2.5">Backlink analysis + SEO</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Just Need Keyword Research ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. You Just Need Keyword Research</h2>
          <p className="text-muted mb-4">
            Semrush Pro includes keyword research, site auditing, position tracking, competitive analysis, backlink analysis, content marketing tools, PPC research, social media management, and local SEO. If you only use the keyword research module, you&apos;re paying for 8 tools and using 1.
          </p>
          <p className="text-muted mb-4">
            Mangools Basic at $49.90/month gives you unlimited keyword lookups, 700 keyword suggestions, and unlimited SERP lookups. KWFinder is widely regarded as the most intuitive keyword research interface in the market. At 64% less than Semrush Pro, it covers keyword research with a simpler, faster experience.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Mangools Basic</strong> &mdash; $49.90/month ($29.99/month annual). Unlimited keyword lookups, 700 suggestions, unlimited SERP lookups. The best pure keyword research tool for the price. <Link href="/tools/mangools" className="text-accent hover:underline">See Mangools review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: Just Need Backlink Analysis ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. You Just Need Backlink Checking</h2>
          <p className="text-muted mb-4">
            Semrush has backlink analysis, but Ahrefs has a larger backlink index and is widely considered the gold standard for backlink research. If your primary need is analyzing backlink profiles, finding link opportunities, and monitoring new/lost backlinks, Ahrefs does it better.
          </p>
          <p className="text-muted mb-4">
            Ahrefs Lite at $129/month is $10.95/month less than Semrush Pro and gives you 5 projects, 6 months of history, and 500 credits/month. Ahrefs also offers free Webmaster Tools for verified site owners &mdash; free site audit and backlink data for your own domain.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Ahrefs Lite</strong> &mdash; $129/month ($108/month annual). Largest backlink index, 5 projects, site audit, keyword research, rank tracking. The backlink analysis standard. <Link href="/tools/ahrefs" className="text-accent hover:underline">See Ahrefs review</Link></li>
              <li><strong className="text-foreground">Ahrefs Webmaster Tools</strong> &mdash; $0. Free site audit and backlink data for verified site owners. Covers basic backlink monitoring without any monthly fee.</li>
            </ul>
          </div>

          {/* ── Case 4: Multi-User Cost ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Teams Where Additional User Costs Are Prohibitive</h2>
          <p className="text-muted mb-4">
            Semrush Pro includes 1 user. Additional users cost $45&ndash;$100/month each depending on your plan. For a 3-person marketing team on Pro: $139.95 + (2 x $45) = $229.95/month. On Guru ($249.95/month): $249.95 + (2 x $80) = $409.95/month. The multi-user costs stack up fast.
          </p>
          <p className="text-muted mb-4">
            Mangools Premium at $44.90/month includes 3 user seats. Mangools Agency at $89.90/month includes 10 seats. For a 3-person team: Mangools Premium costs $44.90/month vs Semrush Pro with 2 extra users at $229.95/month. That&apos;s an 80% saving.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Mangools Premium</strong> &mdash; $44.90/month ($29.99/month annual). 3 user seats included. Unlimited lookups, 700+ suggestions, site profiler. Best multi-user value in SEO tools. <Link href="/tools/mangools" className="text-accent hover:underline">See Mangools review</Link></li>
              <li><strong className="text-foreground">Mangools Agency</strong> &mdash; $89.90/month ($59.99/month annual). 10 user seats included. Unlimited everything. Significantly cheaper than Semrush or Ahrefs for teams. <Link href="/tools/mangools" className="text-accent hover:underline">See Mangools review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Semrush IS the Right Choice</h2>
          <p className="text-muted mb-4">
            Semrush is the right choice for <strong className="text-foreground">marketing agencies and in-house teams with 10K+ monthly visitors who need SEO, PPC, content marketing, social media, and competitive intelligence in one platform.</strong>
          </p>
          <p className="text-muted mb-4">
            If your team uses keyword research AND competitive analysis AND PPC tools AND content optimization AND social media management, Semrush Guru at $249.95/month ($208.29/month annual) consolidates 5+ separate tool subscriptions into one platform with the largest keyword database (25B+ keywords). For agencies managing multiple client campaigns across channels, the consolidation saves money and reduces context-switching. The platform pays for itself when you&apos;re using 3+ of its modules regularly.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Semrush have a free tier?</h3>
                <p className="text-muted">Semrush offers a limited free plan: 10 requests/day, 1 project, 10 keywords to track, and limited data. It&apos;s useful for sampling the interface but not functional for ongoing SEO work. There&apos;s also a 7-day free trial of paid plans.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Semrush vs Ahrefs &mdash; which is better?</h3>
                <p className="text-muted">Ahrefs has a larger backlink index and is better for backlink-focused SEO. Semrush is broader, covering PPC, social media, and content marketing alongside SEO. If you only need SEO, both work. If you need a full marketing platform, Semrush wins on breadth.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Mangools good enough for serious SEO?</h3>
                <p className="text-muted">For keyword research and rank tracking, yes. Mangools&apos; KWFinder is arguably the most intuitive keyword tool available. For deep competitive analysis, site auditing at scale, and backlink research, Semrush or Ahrefs are more powerful. Mangools is the right tool until you outgrow it.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Semrush cost for a team?</h3>
                <p className="text-muted">Pro ($139.95/mo) includes 1 user. Additional users: $45/mo on Pro, $80/mo on Guru, $100/mo on Business. API access requires the Business tier at $499.95/month. Some tools (Agency Growth Kit, Trends, Local) require separate add-ons.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["semrush", "ahrefs", "mangools"]}
          comparisons={["semrush-vs-ahrefs"]}
          guides={["seo-tools-for-small-sites", "semrush-for-saas-companies"]}
        />
      </article>
    </>
  );
}
