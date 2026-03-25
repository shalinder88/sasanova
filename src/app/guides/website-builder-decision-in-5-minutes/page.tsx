import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Choose Your Website Builder in 5 Minutes: Decision Flowchart",
  description:
    "Answer 5 questions to pick the right website builder. Squarespace, Wix, Webflow, Framer, Carrd, or WordPress — with exact pricing for each path.",
};

export default function WebsiteBuilderDecisionIn5MinutesPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Website Builder Decision in 5 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Decision Quick-Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Choose Your Website Builder in 5 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            From $19/year to $49/month. Five questions to find the right builder for your budget
            and skill level.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 1: Is this a one-page site (landing page, portfolio, link-in-bio)?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, one page is enough</strong> &rarr; <strong className="text-accent">Carrd Pro Standard at $19/year</strong> ($1.58/mo). Custom domain, forms, embeds, analytics. Cheapest option by far.</p>
              <p><strong className="text-foreground">No, I need multiple pages</strong> &rarr; Go to Question 2</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 2: Do you need e-commerce (selling products)?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, selling physical products</strong> &rarr; <strong className="text-accent">Squarespace Core at $36/mo</strong> ($24/mo annual). Beautiful templates, 0% transaction fee, built-in e-commerce. Or Wix Core at $29/mo with e-commerce tools.</p>
              <p><strong className="text-foreground">No e-commerce needed</strong> &rarr; Go to Question 3</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 3: How important is design control?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">I want pixel-perfect control</strong> &rarr; Go to Question 3B</p>
              <p><strong className="text-foreground">Templates are fine, I want easy</strong> &rarr; Go to Question 4</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 3B: Do you know CSS/HTML?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, comfortable with CSS</strong> &rarr; <strong className="text-accent">Webflow CMS at $29/site/mo</strong> ($23 annual). Full CSS control, powerful CMS, clean code output.</p>
              <p><strong className="text-foreground">No, but I want creative control</strong> &rarr; <strong className="text-accent">Framer Basic at $15/site/mo</strong> ($10 annual). Visual design tool with CMS, animations, and responsive design. Easier than Webflow.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 4: Do you value design quality or app ecosystem?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Design quality (beautiful templates)</strong> &rarr; <strong className="text-accent">Squarespace Basic at $25/mo</strong> ($16/mo annual). Industry-leading templates, clean aesthetic, all-inclusive.</p>
              <p><strong className="text-foreground">App ecosystem (bookings, marketing, forms)</strong> &rarr; <strong className="text-accent">Wix Core at $29/mo</strong> ($29/mo annual). 300+ apps, AI site generator, e-commerce tools.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 5: Do you need a blog with plugins?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, serious blogging with plugins</strong> &rarr; <strong className="text-accent">WordPress.com Business at $25/mo</strong> ($25/mo annual). Full WordPress plugin access, 50GB storage, SFTP. Or self-hosted WordPress for maximum control.</p>
              <p><strong className="text-foreground">Simple blog is fine</strong> &rarr; Stick with your answer from above. All builders include basic blogging.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Quick Price Reference</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Builder</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Recommended Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Carrd</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free (3 sites, .carrd.co URL)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Pro Standard: $19/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Squarespace</td>
                    <td className="px-4 py-2.5 text-muted">Basic: $25/mo ($16/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">Core: $36/mo ($24/mo annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Wix</td>
                    <td className="px-4 py-2.5 text-muted">Light: $17/mo</td>
                    <td className="px-4 py-2.5 text-muted">Core: $29/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Framer</td>
                    <td className="px-4 py-2.5 text-muted">Free (Framer subdomain)</td>
                    <td className="px-4 py-2.5 text-muted">Basic: $15/site/mo ($10 annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Webflow</td>
                    <td className="px-4 py-2.5 text-muted">Starter: Free (2 pages)</td>
                    <td className="px-4 py-2.5 text-muted">CMS: $29/site/mo ($23 annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">WordPress.com</td>
                    <td className="px-4 py-2.5 text-muted">Free (wordpress.com subdomain)</td>
                    <td className="px-4 py-2.5 text-muted">Business: $25/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I migrate from one builder to another?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  It depends. Webflow exports clean HTML/CSS. WordPress exports content via XML. Wix and
                  Squarespace are harder to migrate away from &mdash; your design is locked in. Carrd
                  Pro Plus exports site files. Start with the right builder to avoid migration pain.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Carrd really $19/year?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Carrd Pro Standard is $19/year (billed annually) for up to 10 sites with custom
                  domains, forms, embeds, and analytics. The most expensive plan (Pro Plus) is $49/year.
                  It is one-page only &mdash; not suitable for multi-page sites.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["squarespace", "wix", "webflow", "framer", "carrd"]}
            comparisons={["squarespace-vs-wix", "framer-vs-webflow"]}
            guides={["website-builder-for-business", "landing-page-builder-comparison"]}
          />
        </div>
      </article>
    </>
  );
}
