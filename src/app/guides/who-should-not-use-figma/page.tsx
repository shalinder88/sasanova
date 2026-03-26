import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Figma (And What to Use Instead)",
  description:
    "Figma is the industry-standard design tool — for designers. If you're not a designer, Figma is the wrong tool. Here are 4 situations where you should skip Figma.",
};

export default function WhoShouldNotUseFigma() {
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
              Who Should NOT Use Figma
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
            Who Should NOT Use Figma (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            Figma is the industry-standard collaborative design tool. It&apos;s also built specifically for UI/UX designers and product teams. If you&apos;re not designing interfaces, Figma is the wrong tool for the job. Here&apos;s who should skip it.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              Figma is for UI/UX design, prototyping, and design systems. The Starter (free) plan gives you 3 design files. Professional is $15/editor/month ($12/editor/month annual). If you need social media graphics, marketing materials, or websites &mdash; not interface design &mdash; there are simpler, cheaper tools built for your use case.
            </p>
          </div>

          {/* ── Case 1: Not a Designer ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. You&apos;re Not a Designer (And Don&apos;t Want to Become One)</h2>
          <p className="text-muted mb-4">
            Figma is a professional design tool with auto layout, components, variants, constraints, and design tokens. These features are essential for product designers. They&apos;re incomprehensible to a marketing manager who just needs to make a social media post or a presentation slide.
          </p>
          <p className="text-muted mb-4">
            Canva Free gives you access to 2M+ templates, drag-and-drop editing, and one-click resizing for every social platform. Canva Pro at $15/month (flat, not per seat) adds 140M+ premium assets, Brand Kit, and Magic Studio AI. It&apos;s designed for non-designers. You&apos;ll produce professional-looking content in minutes, not hours.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Canva Free</strong> &mdash; $0. 2M+ templates, 5GB storage, basic AI features. Drag-and-drop editor designed for non-designers. Social media, presentations, documents, and print materials. <Link href="/tools/canva" className="text-accent hover:underline">See Canva review</Link></li>
              <li><strong className="text-foreground">Canva Pro</strong> &mdash; $15/month (flat). 140M+ premium assets, 1TB storage, Brand Kit, Magic Studio with 500 AI credits/month. The professional upgrade for non-designers who need premium content. <Link href="/tools/canva" className="text-accent hover:underline">See Canva review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Built For</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Learning Curve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Figma Professional</td>
                  <td className="px-4 py-2.5">$15/editor/mo</td>
                  <td className="px-4 py-2.5">UI/UX designers</td>
                  <td className="px-4 py-2.5">Medium (design knowledge required)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Canva Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Everyone (non-designers)</td>
                  <td className="px-4 py-2.5">Very low (template-based)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Canva Pro</td>
                  <td className="px-4 py-2.5">$15/mo (flat)</td>
                  <td className="px-4 py-2.5">Marketing teams</td>
                  <td className="px-4 py-2.5">Very low</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Social Media Graphics ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. You Just Need Social Media Graphics</h2>
          <p className="text-muted mb-4">
            Figma can create social media graphics, but it&apos;s like using Photoshop to crop a photo. You can do it, but the tool isn&apos;t optimized for it. No built-in templates for Instagram posts, no one-click resize for different platforms, no stock photo library, no brand kit templates.
          </p>
          <p className="text-muted mb-4">
            Canva has thousands of social media templates pre-sized for every platform, a drag-and-drop editor, and one-click Magic Resize that adapts a design to any format. The workflow that takes 30 minutes in Figma takes 5 minutes in Canva.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Canva Pro</strong> &mdash; $15/month (flat). Magic Resize for instant multi-platform formatting. Content Planner for scheduling. Brand Kit for consistent branding. 140M+ stock photos, videos, and graphics. <Link href="/tools/canva" className="text-accent hover:underline">See Canva review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: Building Marketing Sites ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. You&apos;re Building Marketing Websites (Not Designing UI)</h2>
          <p className="text-muted mb-4">
            A common mistake: teams design marketing sites in Figma, then hand the designs off to developers to build. This creates a designer &rarr; developer workflow that adds weeks and thousands of dollars to every project. Figma designs are static mockups that require separate implementation.
          </p>
          <p className="text-muted mb-4">
            Framer and Webflow let you design AND publish directly. What you see is what ships. Framer Basic at $15/month gives you a visual editor with real animations, CMS, and hosting. Webflow CMS at $29/month gives you full CSS control with a powerful CMS. Both eliminate the design-to-development handoff entirely.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Framer Basic</strong> &mdash; $15/month ($10/month annual). Visual website builder with real-time preview, animations, CMS, and custom domain. Design and publish in one tool. <Link href="/tools/framer" className="text-accent hover:underline">See Framer review</Link></li>
              <li><strong className="text-foreground">Webflow CMS</strong> &mdash; $29/month ($23/month annual). Full CSS control, 20 CMS collections, 2,000 CMS items, 50GB bandwidth. Design-to-production in one platform. <Link href="/tools/webflow" className="text-accent hover:underline">See Webflow review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Budget-Conscious Teams ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Teams Where Per-Editor Pricing Becomes Expensive</h2>
          <p className="text-muted mb-4">
            Figma&apos;s free Starter plan gives you 3 design files and 3 FigJam boards with unlimited viewers. Professional is $15/editor/month ($12/editor/month annual). Organization is $45/editor/month (annual only). For a 10-person design team on Organization: $450/month, or $5,400/year.
          </p>
          <p className="text-muted mb-4">
            If most of your team doesn&apos;t need editor access &mdash; they just need to view, comment, and export assets &mdash; the free Starter plan with unlimited viewers may be enough. But if your organization is pushing everyone onto editor seats, the costs escalate quickly for users who rarely open the design tool.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead (for non-design team members)</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Canva Teams</strong> &mdash; $10/seat/month (minimum 3 users). Everyone gets design access, Brand Kit, approvals, and team workspace. Better for cross-functional teams where non-designers need to create content. <Link href="/tools/canva" className="text-accent hover:underline">See Canva review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Figma IS the Right Choice</h2>
          <p className="text-muted mb-4">
            Figma is the right choice for <strong className="text-foreground">product design teams who need real-time collaboration on UI/UX design, prototyping, design systems, and developer handoff.</strong>
          </p>
          <p className="text-muted mb-4">
            If your team designs digital interfaces &mdash; apps, dashboards, SaaS products &mdash; Figma is the industry standard for a reason. Real-time multiplayer editing, components with variants, auto layout, prototyping, Dev Mode for developer handoff, and a plugin ecosystem make it indispensable. The Professional plan at $15/editor/month ($12/editor/month annual) is well-priced for the value it delivers to actual designers.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Figma free?</h3>
                <p className="text-muted">The Starter plan is free with 3 Figma design files, 3 FigJam boards, and unlimited viewers. Professional starts at $15/editor/month ($12/editor/month annual). Viewers are always free.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can non-designers use Figma?</h3>
                <p className="text-muted">Technically yes, but the learning curve is steep if you don&apos;t have design experience. Canva is specifically built for non-designers and will produce better results faster for marketing materials, social graphics, and presentations.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Figma vs Canva &mdash; when do I use which?</h3>
                <p className="text-muted">Figma for UI/UX design, app interfaces, prototypes, and design systems. Canva for social media graphics, presentations, documents, marketing materials, and anything template-based. They&apos;re complementary, not competing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can Figma build websites?</h3>
                <p className="text-muted">Figma can design websites but can&apos;t publish them. You&apos;ll need a developer or a tool like Framer/Webflow to turn designs into live sites. Some plugins offer Figma-to-code conversion, but results vary. For marketing sites, Framer or Webflow are better end-to-end solutions.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["figma", "canva", "framer", "webflow"]}
          comparisons={["figma-vs-canva"]}
          guides={["design-tools-non-designers", "website-builder-for-business"]}
        />
      </article>
    </>
  );
}
