import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Design Tool Pricing Compared 2026: All Tools Per Editor",
  description:
    "Side-by-side pricing for Figma, Canva, Framer, Webflow, and Miro per editor/seat. Free tiers, annual costs, and which plan you actually need.",
};

export default function DesignToolPricingCompared2026Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Design Tool Pricing 2026</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Industry Pricing Report
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Design Tool Pricing Compared: Every Tool Per Editor (2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Design tools charge per editor, per seat, or per site. This report normalizes
            pricing across five major design platforms so you can compare apples to apples.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-4">Per-Editor Pricing Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Paid Plan</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Figma</td>
                    <td className="px-3 py-2.5 text-muted">3 files, 3 FigJam boards</td>
                    <td className="px-3 py-2.5 text-muted">Professional</td>
                    <td className="px-3 py-2.5 text-muted">$15/editor/mo ($12 annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Canva</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">2M+ templates, 5GB storage</td>
                    <td className="px-3 py-2.5 text-muted">Pro</td>
                    <td className="px-3 py-2.5 text-muted">$15/mo flat ($10/mo annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Canva Teams</td>
                    <td className="px-3 py-2.5 text-muted">&mdash;</td>
                    <td className="px-3 py-2.5 text-muted">Teams (min 3)</td>
                    <td className="px-3 py-2.5 text-muted">$10/seat/mo ($8.33 annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Framer</td>
                    <td className="px-3 py-2.5 text-muted">1K pages, Framer subdomain</td>
                    <td className="px-3 py-2.5 text-muted">Basic</td>
                    <td className="px-3 py-2.5 text-muted">$15/site/mo ($10 annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Framer Pro</td>
                    <td className="px-3 py-2.5 text-muted">&mdash;</td>
                    <td className="px-3 py-2.5 text-muted">Pro</td>
                    <td className="px-3 py-2.5 text-muted">$45/site/mo ($30 annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Webflow</td>
                    <td className="px-3 py-2.5 text-muted">2 pages, 1GB bandwidth</td>
                    <td className="px-3 py-2.5 text-muted">CMS</td>
                    <td className="px-3 py-2.5 text-muted">$29/site/mo ($23 annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Miro</td>
                    <td className="px-3 py-2.5 text-muted">3 editable boards</td>
                    <td className="px-3 py-2.5 text-muted">Starter</td>
                    <td className="px-3 py-2.5 text-muted">$10/member/mo ($8 annual)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Cost at 5 Designers/Editors</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground text-right">Monthly Billing</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground text-right">Annual Billing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Figma Professional</td>
                    <td className="px-4 py-2.5 text-muted text-right">$75/mo</td>
                    <td className="px-4 py-2.5 text-muted text-right">$60/mo ($720/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Canva Teams</td>
                    <td className="px-4 py-2.5 text-accent font-semibold text-right">$50/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold text-right">$41.67/mo ($500/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Miro Starter</td>
                    <td className="px-4 py-2.5 text-accent font-semibold text-right">$50/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold text-right">$40/mo ($480/yr)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted">
              Note: Framer and Webflow are priced per site, not per editor. Viewers are free on all platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Key Pricing Insights</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-foreground">Figma viewers are free.</strong> You only pay for editors. Most teams have 2&ndash;3 editors and many viewers, keeping costs lower than the per-seat price suggests.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-foreground">Canva Pro is per-person flat, not per-seat.</strong> One Canva Pro subscription at $15/mo covers one person across all devices. Canva Teams starts at $10/seat/mo (minimum 3 people).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-foreground">Framer and Webflow are site-priced.</strong> You pay per published site, not per designer. An agency building 10 client sites on Webflow CMS pays $290/mo regardless of how many designers work on them.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do I need Figma if I have Canva?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  They serve different purposes. Canva is for marketing graphics, social media, and
                  presentations. Figma is for UI/UX design, prototyping, and design systems. Most
                  product teams need Figma; most marketing teams need Canva.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Webflow more expensive than Framer?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Slightly. Webflow CMS is $29/site/mo vs Framer Basic at $15/site/mo. Webflow Pro at
                  $45/site/mo is comparable to Framer Pro at $45/site/mo. Webflow offers more CMS power;
                  Framer offers easier visual design.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["figma", "canva", "framer", "webflow", "miro"]}
            comparisons={["figma-vs-canva", "framer-vs-webflow"]}
            guides={["design-tools-non-designers", "website-builder-for-business"]}
          />
        </div>
      </article>
    </>
  );
}
