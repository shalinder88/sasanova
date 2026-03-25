import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Webflow (And What to Use Instead)",
  description:
    "Webflow is powerful but has a steep learning curve. Here are 4 situations where Webflow is the wrong choice — with simpler, cheaper alternatives for non-technical users.",
};

export default function WhoShouldNotUseWebflow() {
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
              Who Should NOT Use Webflow
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
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Webflow (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            Webflow generates clean, production-ready HTML/CSS/JS and gives designers full CSS control without code. It also has the steepest learning curve of any website builder. Here&apos;s when Webflow is the wrong choice &mdash; and what to use instead.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              Webflow is built for designers and agencies who understand CSS concepts (flexbox, grid, box model) and want pixel-perfect control. The Starter plan is free (webflow.io domain, 2 pages). Paid plans start at $18/month (Basic) for a custom domain. If you&apos;re not comfortable with web design concepts, you&apos;ll spend weeks learning before building a single page.
            </p>
          </div>

          {/* ── Case 1: Non-Technical Users ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Non-Technical Users Who Just Need a Website</h2>
          <p className="text-muted mb-4">
            Webflow scores a 5 out of 10 on ease of use in our testing. The interface exposes CSS properties like padding, margin, flexbox alignment, and positioning &mdash; concepts that non-designers find confusing. If you don&apos;t know the difference between padding and margin, Webflow will feel like learning to code without the code.
          </p>
          <p className="text-muted mb-4">
            Squarespace Basic at $25/month ($16/month annual) gives you beautiful, design-forward templates that work out of the box. Drag-and-drop editing with WYSIWYG controls, no CSS knowledge required. You sacrifice Webflow&apos;s precision but gain the ability to launch a professional site in an afternoon, not a month.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Squarespace Basic</strong> &mdash; $25/month ($16/month annual). Beautiful templates, unlimited bandwidth and storage, built-in commerce. No CSS knowledge needed. <Link href="/tools/squarespace" className="text-accent hover:underline">See Squarespace review</Link></li>
              <li><strong className="text-foreground">Framer Free</strong> &mdash; $0 (Framer subdomain). Visual editor with design-first approach. Easier than Webflow with impressive animations. Basic plan at $15/month for custom domain. <Link href="/tools/framer" className="text-accent hover:underline">See Framer review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Ease of Use</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Design Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Webflow Basic</td>
                  <td className="px-4 py-2.5">$18/mo</td>
                  <td className="px-4 py-2.5">5/10 (steep curve)</td>
                  <td className="px-4 py-2.5">Full CSS control</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Squarespace Basic</td>
                  <td className="px-4 py-2.5">$25/mo</td>
                  <td className="px-4 py-2.5">8/10</td>
                  <td className="px-4 py-2.5">Template-based</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Framer Basic</td>
                  <td className="px-4 py-2.5">$15/mo</td>
                  <td className="px-4 py-2.5">7/10</td>
                  <td className="px-4 py-2.5">Visual editor + animations</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Just Need a Landing Page ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Anyone Who Just Needs a Landing Page</h2>
          <p className="text-muted mb-4">
            Webflow&apos;s free Starter plan gives you a webflow.io subdomain and 2 pages. The Basic plan at $18/month gets you a custom domain and 150 pages. But if all you need is a single landing page for a product launch, event, or lead capture form, you&apos;re using a sports car to drive to the mailbox.
          </p>
          <p className="text-muted mb-4">
            Carrd Pro Standard at $19/year ($1.58/month) builds beautiful one-page sites with custom domains, forms, embeds, analytics, and payment integration. That&apos;s $1.58/month vs $18/month for Webflow &mdash; a 91% cost reduction for the same outcome.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Carrd Pro Standard</strong> &mdash; $19/year ($1.58/month). One-page sites with custom domains, forms, embeds, payments, and analytics. The cheapest way to build a professional landing page. <Link href="/tools/carrd" className="text-accent hover:underline">See Carrd review</Link></li>
              <li><strong className="text-foreground">Framer Free</strong> &mdash; $0 (Framer subdomain). Up to 1,000 pages on free plan with 10 CMS collections. Beautiful animations without Webflow&apos;s learning curve. <Link href="/tools/framer" className="text-accent hover:underline">See Framer review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: E-commerce ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Businesses That Need Serious E-commerce</h2>
          <p className="text-muted mb-4">
            Webflow has e-commerce features, but they&apos;re limited compared to dedicated platforms. No multi-currency support on lower plans, limited payment gateways, no native inventory management for multi-channel selling, and a much smaller app ecosystem than Shopify&apos;s 8,000+ apps.
          </p>
          <p className="text-muted mb-4">
            If you&apos;re selling more than a handful of products and need shipping calculators, inventory tracking, abandoned cart recovery, and multi-channel selling (Amazon, Instagram, POS), Shopify Basic at $39/month ($29/month annual) is purpose-built for this. The extra $10&ndash;$20/month over Webflow buys an entire e-commerce infrastructure.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Shopify Basic</strong> &mdash; $39/month ($29/month annual). 2 staff accounts, shipping discounts up to 77%, abandoned cart recovery, 8,000+ apps, multi-channel selling. The e-commerce standard for a reason. <Link href="/tools/shopify" className="text-accent hover:underline">See Shopify review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Teams Needing Quick Turnaround ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Teams That Need to Ship a Site This Week</h2>
          <p className="text-muted mb-4">
            Webflow&apos;s learning curve means even experienced designers need 1&ndash;2 weeks to become productive. For teams that need a site live by Friday, Webflow&apos;s power works against you. Every interaction, every animation, every responsive breakpoint requires manual configuration.
          </p>
          <p className="text-muted mb-4">
            Squarespace or Framer let a non-designer produce a polished site in 1&ndash;2 days using templates. The result won&apos;t have Webflow&apos;s custom precision, but it will be live and functional while you&apos;d still be adjusting Webflow&apos;s CSS grid.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Squarespace Core</strong> &mdash; $36/month ($24/month annual). Pick a template, customize text and images, publish. Professional results in hours, not weeks. <Link href="/tools/squarespace" className="text-accent hover:underline">See Squarespace review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Webflow IS the Right Choice</h2>
          <p className="text-muted mb-4">
            Webflow is the right choice for <strong className="text-foreground">designers and agencies who understand CSS and want pixel-perfect control over every element, interaction, and animation &mdash; without writing code.</strong>
          </p>
          <p className="text-muted mb-4">
            If you&apos;re a designer building client sites, Webflow&apos;s visual CSS editor, CMS, and clean code export are genuinely unmatched. The CMS plan at $29/month includes 20 CMS collections and 2,000 items &mdash; enough for most content-driven sites. For agencies, Webflow is a production tool that eliminates the designer-to-developer handoff entirely.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Webflow free?</h3>
                <p className="text-muted">The Starter plan is free with a webflow.io subdomain, 2 pages, and 50 CMS items. For a custom domain, you need the Basic plan at $18/month. The CMS plan at $29/month adds content management.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Webflow easier than coding?</h3>
                <p className="text-muted">Yes, but it still requires understanding CSS concepts. You&apos;re not writing code, but you&apos;re configuring CSS properties visually. If CSS concepts like flexbox, margin, and positioning are unfamiliar, the learning curve is significant.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Webflow vs Framer &mdash; which is easier?</h3>
                <p className="text-muted">Framer is easier for most users. It has a more intuitive visual editor and better animation defaults. Webflow gives you more CSS-level control but requires more knowledge to use effectively. Framer Basic at $15/month vs Webflow Basic at $18/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I export my site from Webflow?</h3>
                <p className="text-muted">Yes, Webflow exports clean HTML, CSS, and JavaScript. This is a significant advantage over most website builders that lock you into their hosting. You can take your code and host it anywhere.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["webflow", "squarespace", "framer", "carrd", "shopify"]}
          comparisons={["webflow-vs-framer", "webflow-vs-squarespace"]}
          guides={["website-builder-for-business", "design-tools-non-designers", "landing-page-builder-comparison"]}
        />
      </article>
    </>
  );
}
