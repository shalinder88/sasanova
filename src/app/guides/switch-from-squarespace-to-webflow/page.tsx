import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Squarespace to Webflow: When Templates Aren't Enough",
  description:
    "Why designers outgrow Squarespace, what Webflow offers (full CSS control, CMS, interactions), the learning curve reality, and cost comparison.",
};

export default function SwitchSquarespaceToWebflowPage() {
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
              Squarespace to Webflow
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Migration Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Squarespace to Webflow: When Templates Aren&apos;t Enough
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Squarespace gives you beautiful templates. Webflow gives you a visual design
            tool that generates production-ready code. Teams switch when they hit
            Squarespace&apos;s customization ceiling &mdash; when the template feels
            constraining, custom animations aren&apos;t possible, and the CMS can&apos;t
            handle complex content structures. The trade-off is a steep learning curve
            for significantly more design freedom.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">

          {/* ── Why People Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Why People Switch from Squarespace to Webflow</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Template customization limits.</strong> Squarespace templates look great but constrain layout options. Moving a section, creating a non-standard grid, or building a custom header often requires CSS injection or isn&apos;t possible at all. Webflow gives you control over every CSS property visually.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">No real animation or interaction support.</strong> Squarespace offers basic animations (fade in, slide up). Webflow&apos;s Interactions engine enables scroll-based animations, parallax effects, multi-step transitions, and Lottie animations. For agencies and designers, this is the primary draw.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">CMS limitations.</strong> Squarespace&apos;s CMS handles blogs and products but struggles with complex content types (case studies with multiple sections, team directories with filterable attributes, portfolio items with rich metadata). Webflow&apos;s CMS supports custom collections, reference fields, and multi-reference fields for relational content.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Code export.</strong> Webflow lets you export clean HTML, CSS, and JavaScript. You own the code. Squarespace locks you into their hosting platform with no code export. If you ever want to move to custom hosting, Webflow gives you an exit path.
            </p>
          </section>

          {/* ── What You Gain ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Gain Moving to Webflow</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Full visual CSS control.</strong> Every element in Webflow can be styled with any CSS property: flexbox, grid, custom breakpoints, precise spacing, typography controls, gradient backgrounds. You design pixel-perfect layouts without writing code, while Webflow generates clean code underneath.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Interactions and animations.</strong> Build scroll-triggered animations, hover effects, page load sequences, and complex multi-step interactions visually. The Interactions panel lets you design animations that would otherwise require JavaScript libraries.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Powerful CMS.</strong> Webflow&apos;s CMS supports custom content types with reference fields, conditional visibility, dynamic pages, and collection lists. Build complex content architectures that Squarespace&apos;s blog-and-products CMS can&apos;t match.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Class-based styling system.</strong> Webflow uses CSS classes. Create a style once, apply it everywhere, update globally. This promotes consistency and makes redesigns manageable. Squarespace uses template-specific styles that are harder to maintain.
            </p>
          </section>

          {/* ── What You Lose ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Lose Leaving Squarespace</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Ease of use.</strong> Squarespace is designed for non-designers. Pick a template, edit content, publish. Webflow requires understanding layout concepts (flexbox, grid), the box model, and responsive design. The learning curve is measured in weeks, not hours.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Built-in e-commerce with lower friction.</strong> Squarespace e-commerce is included on all plans (with a 2% transaction fee on Basic at $25/mo, 0% on Core at $36/mo). Webflow E-commerce is a separate add-on starting at $29/mo on top of hosting. For simple online stores, Squarespace is more straightforward.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Integrated tools.</strong> Squarespace includes email marketing (add-on), scheduling via Acuity, and member areas. Webflow focuses on the website and requires third-party tools for email, scheduling, and memberships (often through integrations like Memberstack).
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Quick content editing for non-technical team members.</strong> Squarespace&apos;s inline editor lets anyone update text and images. Webflow&apos;s Editor mode allows content edits but the Designer requires training. Marketing teams may need to rely on a developer or designer for structural changes.
            </p>
          </section>

          {/* ── Cost Comparison ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Cost Comparison</h2>
            <p className="text-muted mb-4">
              Monthly billing rates for site plans, verified March 2026.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Use Case</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Squarespace</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Webflow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Basic website</td>
                    <td className="px-4 py-2.5">Basic: $25/mo</td>
                    <td className="px-4 py-2.5">Basic: $18/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Website with CMS</td>
                    <td className="px-4 py-2.5">Core: $36/mo</td>
                    <td className="px-4 py-2.5">CMS: $29/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Business/advanced site</td>
                    <td className="px-4 py-2.5">Plus: $49/mo</td>
                    <td className="px-4 py-2.5">Business: $49/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Advanced/enterprise</td>
                    <td className="px-4 py-2.5">Advanced: $72/mo</td>
                    <td className="px-4 py-2.5">Enterprise: custom</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                    <td className="px-4 py-2.5">No (14-day trial)</td>
                    <td className="px-4 py-2.5">Yes (webflow.io domain, 2 pages)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Price source:</strong> Squarespace Basic $25/mo, Core $36/mo, Plus $49/mo, Advanced $72/mo (monthly billing). Webflow Basic $18/mo (no CMS), CMS $29/mo, Business $49/mo (monthly billing). Webflow Starter is free with limited features.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">The hidden cost:</strong> Webflow is cheaper on paper but consider the design time investment. A Squarespace site can launch in a weekend. A custom Webflow site takes 2&ndash;6 weeks for someone learning the platform. If you hire a Webflow designer/agency, that&apos;s $3,000&ndash;$15,000+ for a custom build.
            </p>
          </section>

          {/* ── Who Should NOT Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to Webflow</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Non-designers who just need a website.</strong> If you picked Squarespace because you&apos;re not a designer and want something that looks professional with minimal effort, Webflow will frustrate you. It requires understanding web design concepts that Squarespace abstracts away.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Simple e-commerce stores.</strong> Squarespace&apos;s built-in e-commerce is simpler to set up and manage. Webflow E-commerce requires more configuration and the CMS-based approach to products has a steeper learning curve.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams without a dedicated web designer.</strong> If nobody on your team can dedicate time to learning Webflow (budget 40+ hours for proficiency), the platform will be underutilized. You&apos;ll build a site that looks worse than a Squarespace template because you don&apos;t know how to leverage the tool.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Businesses that need scheduling, email, and memberships built in.</strong> Squarespace bundles Acuity Scheduling and member areas. Webflow requires third-party tools for each, adding complexity and cost.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate my Squarespace site to Webflow?</h3>
                <p className="text-muted">Not automatically. Squarespace doesn&apos;t export to a format Webflow can import directly. You&apos;ll need to rebuild the design in Webflow and migrate content manually or via CSV for blog posts. Images need to be re-uploaded. It&apos;s effectively a redesign.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does it take to learn Webflow?</h3>
                <p className="text-muted">For someone with web design knowledge (HTML/CSS concepts): 1&ndash;2 weeks to be productive, 1&ndash;2 months for advanced features. For a complete beginner: 2&ndash;3 months of consistent learning. Webflow University provides excellent free tutorials.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Webflow good for SEO?</h3>
                <p className="text-muted">Yes. Webflow generates clean, semantic HTML and provides full control over meta tags, alt text, Open Graph tags, sitemaps, and 301 redirects. Its SEO tools are more granular than Squarespace&apos;s. The clean code structure also tends to perform well in Core Web Vitals.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can non-technical team members edit a Webflow site?</h3>
                <p className="text-muted">Yes, using Webflow&apos;s Editor mode. Editors can update text, images, and CMS content without accessing the Designer. They can&apos;t change layout or styles. This works well for marketing teams updating blog posts and page content.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/tools/squarespace"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Squarespace Review</span>
                <span className="block text-xs text-muted mt-1">Full pricing, features, and honest verdict</span>
              </Link>
              <Link
                href="/tools/webflow"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Webflow Review</span>
                <span className="block text-xs text-muted mt-1">Full pricing, features, and honest verdict</span>
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["squarespace", "webflow"]}
          comparisons={["squarespace-vs-webflow"]}
          guides={[]}
        />
      </article>
    </>
  );
}
