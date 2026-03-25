import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The 7 Biggest Website Builder Mistakes",
  description:
    "Mistake #1: Paying Squarespace Core ($36/mo) for a one-page site when Carrd costs $19/year. Mistake #2: Choosing Wix then trying to migrate. Real 12-month costs with domain, hosting, and plugins included.",
};

export default function BiggestWebsiteBuilderMistakes() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Biggest Website Builder Mistakes</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Buyer Mistakes</span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The 7 Biggest Website Builder Mistakes
          </h1>
          <p className="text-lg text-muted">
            Website builders are the tool people overspend on most dramatically. A landing page that costs $19/year on Carrd somehow costs $432/year on Squarespace. Here are the 7 mistakes &mdash; with real 12-month cost calculations.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Mistake 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 1: Paying for a Multi-Page Builder When You Need One Page</h2>
          <p className="text-muted mb-4">
            Squarespace Basic costs $25/mo ($192/yr annual). Wix Core costs $29/mo ($348/yr). Both are designed for multi-page websites. If you need a landing page, portfolio, or link-in-bio site, Carrd Pro Standard costs $19/year &mdash; that&apos;s <strong className="text-foreground">$173&ndash;$329/year cheaper</strong> for the same job. Framer Free gives you a full website with subdomain for $0.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">One-page site: Carrd ($19/yr Pro Standard). Simple portfolio: Framer Free ($0) or Framer Basic ($15/mo with custom domain). Multi-page business site: Squarespace Basic ($25/mo) or Webflow Basic ($18/mo). Match the tool to your actual page count.</p>
          </div>

          {/* ── Mistake 2 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 2: Choosing Wix and Then Trying to Leave</h2>
          <p className="text-muted mb-4">
            Wix sites cannot be exported. There is no HTML export, no content migration tool, no way to take your site structure to another platform. If you build 50 pages on Wix Core ($29/mo) and decide to switch after 12 months, you&apos;ve spent $348 and need to rebuild from scratch. Webflow ($18&ndash;$29/mo), Squarespace ($25&ndash;$36/mo), and Framer ($15&ndash;$45/mo) all offer better export paths.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">If you might ever switch platforms, avoid Wix. Webflow exports clean HTML/CSS. Squarespace exports content XML. Framer is harder to export but uses standard React components. Wix is the most locked-in builder on the market.</p>
          </div>

          {/* ── Mistake 3 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 3: Picking Webflow When You Don&apos;t Need CMS</h2>
          <p className="text-muted mb-4">
            Webflow CMS ($29/mo) is powerful for blogs, portfolios, and content-heavy sites. But many businesses need a 5&ndash;10 page static site with no blog. Webflow Basic ($18/mo) removes CMS entirely. Framer Basic ($15/mo) gives you CMS for $3/mo less. Carrd Pro Plus ($49/year = ~$4/mo) handles up to 25 sites for less than one month of Webflow.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">No blog/CMS needed: Framer Basic ($15/mo) or Webflow Basic ($18/mo). Blog/CMS needed: Webflow CMS ($29/mo) or Framer Pro ($45/mo). Simple landing pages: Carrd ($19/yr). Don&apos;t pay for CMS you won&apos;t use.</p>
          </div>

          {/* ── Mistake 4 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 4: Forgetting the Real 12-Month Cost</h2>
          <p className="text-muted mb-4">
            Website builders quote monthly prices, but the real cost includes domain ($12&ndash;$20/year), email hosting ($0&ndash;$72/year), SSL (free on all modern builders), and any premium templates or plugins. The real first-year costs:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Builder</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">12-Month Cost (with domain)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Carrd</td>
                  <td className="px-4 py-2.5 text-muted">Pro Standard</td>
                  <td className="px-4 py-2.5 text-muted">$19 + ~$15 domain = ~$34/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Framer</td>
                  <td className="px-4 py-2.5 text-muted">Basic</td>
                  <td className="px-4 py-2.5 text-muted">$120/yr annual + ~$15 domain = ~$135/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Webflow</td>
                  <td className="px-4 py-2.5 text-muted">Basic</td>
                  <td className="px-4 py-2.5 text-muted">$168/yr annual + ~$15 domain = ~$183/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Squarespace</td>
                  <td className="px-4 py-2.5 text-muted">Basic</td>
                  <td className="px-4 py-2.5 text-muted">$192/yr + free domain (yr 1) = ~$192/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Wix</td>
                  <td className="px-4 py-2.5 text-muted">Core</td>
                  <td className="px-4 py-2.5 text-muted">$348/yr + free domain (yr 1) = ~$348/yr</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Always calculate the 12-month cost including domain. The difference between Carrd ($34/yr) and Wix Core ($348/yr) is $314/year &mdash; for many use cases, the cheaper tool does the same job.</p>
          </div>

          {/* ── Mistake 5 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 5: Choosing a Builder for E-commerce When Shopify Exists</h2>
          <p className="text-muted mb-4">
            Squarespace Plus ($49/mo) and Wix Business ($39/mo) include e-commerce features, but they&apos;re website builders with e-commerce bolted on. Shopify Basic ($39/mo) is a purpose-built e-commerce platform with better inventory management, shipping tools, abandoned cart recovery, and 8,000+ apps. If you sell more than 5 products, Shopify at the same or lower price gives you significantly better commerce features.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Selling products as primary business: Shopify Basic ($39/mo). Website with a small shop (under 5 products): Squarespace Core ($36/mo, 0% transaction fee). Digital products only: Gumroad or Lemon Squeezy. Don&apos;t force a website builder to be an e-commerce platform.</p>
          </div>

          {/* ── Mistake 6 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 6: Paying for the Highest Tier for SEO Features</h2>
          <p className="text-muted mb-4">
            Wix Business Elite ($159/mo) advertises &ldquo;advanced SEO tools.&rdquo; Squarespace Advanced ($72/mo) includes &ldquo;advanced analytics.&rdquo; The truth: SEO fundamentals (title tags, meta descriptions, alt text, XML sitemaps) are available on the lowest tiers of every builder. Advanced SEO requires external tools like Semrush ($139.95/mo) or Ahrefs ($129/mo), not premium website builder tiers.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Use the cheapest builder tier that supports custom domains and basic SEO settings (all of them do). Invest in content quality and a proper SEO tool if needed. The $87/mo gap between Squarespace Basic ($25/mo) and Advanced ($72/mo) buys no meaningful SEO advantage.</p>
          </div>

          {/* ── Mistake 7 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Mistake 7: Not Considering Framer for Design-Heavy Sites</h2>
          <p className="text-muted mb-4">
            Teams that need visually impressive sites default to Webflow ($18&ndash;$49/mo) because of its reputation. Framer (Free &ndash; $45/mo Pro) offers comparable design flexibility with a simpler interface, built-in CMS, animations, and localization. Framer Basic ($15/mo) undercuts Webflow Basic ($18/mo) and includes CMS, which Webflow charges $29/mo for. The design quality gap has closed significantly.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What to Do Instead</p>
            <p className="text-sm text-muted">Trial both Framer and Webflow for your specific site. If you need Webflow&apos;s clean code export or complex CMS relationships, Webflow wins. If you need beautiful design with simpler setup, Framer saves $3&ndash;$14/mo and ships faster.</p>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">What&apos;s the cheapest way to build a professional website?</h3>
          <p className="text-muted mb-4">
            One-page: Carrd Pro Standard ($19/year). Multi-page without blog: Framer Basic ($15/mo) or Webflow Basic ($18/mo). Multi-page with blog: Webflow CMS ($29/mo) or Squarespace Basic ($25/mo). The absolute cheapest professional option is Carrd at $1.58/month.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Is Squarespace still worth it in 2026?</h3>
          <p className="text-muted mb-4">
            For beautiful template-based sites where you don&apos;t want to think about design, yes. Squarespace Basic ($25/mo) includes stunning templates, free domain for year one, and unlimited bandwidth. But Framer and Webflow now match Squarespace&apos;s design quality with more flexibility. Squarespace&apos;s advantage is simplicity &mdash; less design freedom but faster time-to-launch.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Can I start on Carrd and migrate to a full builder later?</h3>
          <p className="text-muted mb-4">
            Yes, but Carrd sites are one-page only. There&apos;s nothing to &ldquo;migrate&rdquo; &mdash; you&apos;ll rebuild on the new platform. Since Carrd Pro Standard is $19/year, the sunk cost is negligible. Use Carrd to validate your idea, then rebuild on Framer or Webflow when you need multiple pages.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "website-builder-for-business",
            "landing-page-builder-comparison",
          ]}
          comparisons={["squarespace-vs-wix", "webflow-vs-framer"]}
        />
      </article>
    </>
  );
}
