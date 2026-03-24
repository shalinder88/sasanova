import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Choosing a Website Builder in 2026: Beyond the Marketing Pages",
  description:
    "Squarespace vs Wix vs Webflow vs Framer vs Carrd vs WordPress compared honestly. Real 12-month costs including domain, hosting, and plugins. Plus migration difficulty between platforms.",
};

export default function WebsiteBuilderGuide() {
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
            <span className="text-foreground font-medium truncate">Website Builder</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Web Development
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Choosing a Website Builder in 2026: Beyond the Marketing Pages
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 15 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Every website builder looks amazing in their templates gallery. Then you buy a plan, start
            customizing, and realize the template you liked requires the Business plan, the custom
            domain costs extra, and that one layout feature needs a third-party plugin that charges
            $8/month. The advertised price is never the real price.
          </p>
          <p>
            I&apos;ve built or migrated sites on all six of these platforms. Here&apos;s what the marketing
            pages don&apos;t tell you &mdash; including what it actually costs over 12 months and how
            painful it is to leave.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Real Cost Over 12 Months</h2>
            <p>
              This table includes the plan cost, a custom domain (if not included), SSL, and the most
              common add-ons a typical small business actually needs.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">12-Month Total</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Carrd</td>
                    <td className="px-4 py-2.5">Pro Plus</td>
                    <td className="px-4 py-2.5">$1.58/mo (billed $19/yr)</td>
                    <td className="px-4 py-2.5">~$31</td>
                    <td className="px-4 py-2.5">Custom domain (buy separately ~$12/yr), SSL, forms, widgets</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Framer</td>
                    <td className="px-4 py-2.5">Mini</td>
                    <td className="px-4 py-2.5">$5/mo</td>
                    <td className="px-4 py-2.5">~$72</td>
                    <td className="px-4 py-2.5">Custom domain (buy separately ~$12/yr), SSL, 1,000 pages</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Squarespace</td>
                    <td className="px-4 py-2.5">Personal</td>
                    <td className="px-4 py-2.5">$16/mo</td>
                    <td className="px-4 py-2.5">$192</td>
                    <td className="px-4 py-2.5">Free domain (1st year), SSL, unlimited bandwidth</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Squarespace</td>
                    <td className="px-4 py-2.5">Business</td>
                    <td className="px-4 py-2.5">$33/mo</td>
                    <td className="px-4 py-2.5">$396</td>
                    <td className="px-4 py-2.5">Everything above + e-commerce (3% tx fee), CSS/JS injection</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Wix</td>
                    <td className="px-4 py-2.5">Light</td>
                    <td className="px-4 py-2.5">$17/mo</td>
                    <td className="px-4 py-2.5">$204</td>
                    <td className="px-4 py-2.5">Custom domain (1st year free), 2GB storage, light analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Wix</td>
                    <td className="px-4 py-2.5">Business</td>
                    <td className="px-4 py-2.5">$32/mo</td>
                    <td className="px-4 py-2.5">$384</td>
                    <td className="px-4 py-2.5">50GB storage, payment processing, no Wix branding</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Webflow</td>
                    <td className="px-4 py-2.5">Basic</td>
                    <td className="px-4 py-2.5">$14/mo</td>
                    <td className="px-4 py-2.5">~$180</td>
                    <td className="px-4 py-2.5">Custom domain (buy separately), SSL, 150 pages, CMS</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Webflow</td>
                    <td className="px-4 py-2.5">CMS</td>
                    <td className="px-4 py-2.5">$23/mo</td>
                    <td className="px-4 py-2.5">~$288</td>
                    <td className="px-4 py-2.5">2,000 CMS items, 10GB asset storage, form submissions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">WordPress.com</td>
                    <td className="px-4 py-2.5">Personal</td>
                    <td className="px-4 py-2.5">$4/mo (billed annually)</td>
                    <td className="px-4 py-2.5">$48</td>
                    <td className="px-4 py-2.5">Free domain (1st year), 6GB storage, no ads</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">WordPress (self-hosted)</td>
                    <td className="px-4 py-2.5">Hosting + themes</td>
                    <td className="px-4 py-2.5">~$10&ndash;$30/mo</td>
                    <td className="px-4 py-2.5">$120&ndash;$360+</td>
                    <td className="px-4 py-2.5">Hosting (SiteGround, Cloudways), domain, SSL, plugins vary</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              All prices based on annual billing where available. Monthly billing is typically 20&ndash;30% higher.
              Domain registration averages $12&ndash;15/year through Namecheap, Cloudflare, or Porkbun.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Squarespace: The Safe Default</h2>
            <p>
              Squarespace is the Honda Accord of website builders. It&apos;s not the cheapest, not the most
              powerful, not the most customizable. But it works reliably, looks professional out of the box,
              and you won&apos;t need a developer to maintain it.
            </p>
            <p>
              <strong className="text-foreground">The Personal plan at $16/month</strong> is enough for
              most service businesses, portfolios, and informational sites. You get a custom domain
              (free first year, then ~$20/yr through Squarespace or use your own), SSL, unlimited pages,
              and professional templates.
            </p>
            <p>
              <strong className="text-foreground">Upgrade to Business ($33/month) if:</strong> you need
              e-commerce (basic, with a 3% transaction fee), custom CSS/JavaScript injection, pop-ups,
              or advanced analytics. For serious e-commerce, skip to the Basic Commerce plan ($36/month)
              which removes the transaction fee.
            </p>
            <p>
              <strong className="text-foreground">The limitation:</strong> you can&apos;t build truly
              custom layouts. Squarespace&apos;s editor is template-driven. You can swap sections, change
              colors, adjust fonts &mdash; but you can&apos;t pixel-position elements or create custom
              animations. If you want a unique, design-forward site, Webflow or Framer give you more control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Wix: More Flexible, More Chaotic</h2>
            <p>
              Wix gives you more design freedom than Squarespace but less structure. The drag-and-drop
              editor lets you place anything anywhere &mdash; which is great for creative control and
              terrible for maintaining consistency as your site grows.
            </p>
            <p>
              <strong className="text-foreground">The app marketplace is Wix&apos;s real strength.</strong> Need
              booking? There&apos;s an app. Need a restaurant menu? There&apos;s an app. Need event
              ticketing? There&apos;s an app. Many are free or cheap. This makes Wix surprisingly powerful
              for niche businesses.
            </p>
            <p>
              <strong className="text-foreground">The catch:</strong> some essential features require paid
              apps that add $5&ndash;$20/month to your bill. A booking system, CRM integration, or advanced
              form builder might each be separate subscriptions. Your $17/month Wix plan can quietly
              become $50/month with apps.
            </p>
            <p>
              <strong className="text-foreground">Performance concerns are real.</strong> Wix sites
              historically loaded slower than Squarespace or Webflow. Wix has improved significantly, but
              if page speed is critical for SEO or user experience, test your site carefully.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Webflow: For Designers Who Want Control</h2>
            <p>
              Webflow is a visual development tool, not a traditional website builder. It gives you the
              power of custom HTML/CSS without writing code &mdash; but you need to understand how CSS
              works conceptually. Flexbox, grid, positioning, responsive breakpoints &mdash; Webflow
              exposes all of it through a visual interface.
            </p>
            <p>
              <strong className="text-foreground">This means:</strong> a designer or developer can build
              anything in Webflow. Pixel-perfect layouts, complex animations, CMS-driven dynamic pages.
              But a business owner with no design background will struggle. Webflow has a learning curve
              measured in weeks, not hours.
            </p>
            <p>
              <strong className="text-foreground">The CMS is excellent.</strong> Webflow&apos;s CMS lets
              you create custom content types (blog posts, team members, case studies, products) with
              structured fields. It&apos;s more flexible than Squarespace&apos;s blog-only approach but
              less complex than WordPress.
            </p>
            <p>
              <strong className="text-foreground">The pricing model splits design and hosting.</strong> You
              can design in Webflow for free (with a webflow.io subdomain). You only pay the $14&ndash;$23/month
              hosting plan when you connect a custom domain. This is fair &mdash; you can build your entire
              site before committing.
            </p>
            <p>
              <strong className="text-foreground">Choose Webflow if:</strong> you or someone on your team
              understands CSS concepts, you want a CMS-driven site, or you need custom interactions/animations.
              Skip it if you want to edit your site yourself and don&apos;t have design skills.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Framer: The New Contender</h2>
            <p>
              Framer emerged from the prototyping world and has rapidly become a legitimate website builder.
              It&apos;s visually similar to Webflow but with a gentler learning curve and better animation
              defaults. Sites built in Framer tend to feel more dynamic out of the box.
            </p>
            <p>
              <strong className="text-foreground">The Mini plan at $5/month</strong> is one of the best
              deals in this space. Custom domain, SSL, 1,000 pages, and no branding. For a simple
              portfolio or landing page, it&apos;s hard to beat.
            </p>
            <p>
              <strong className="text-foreground">Where Framer falls short:</strong> the CMS is basic
              compared to Webflow. E-commerce support is limited. Blog functionality exists but isn&apos;t
              as mature. Framer is best for marketing sites, portfolios, and landing pages &mdash; not
              for content-heavy sites or online stores.
            </p>
            <p>
              <strong className="text-foreground">The community and template ecosystem</strong> is
              growing fast. Third-party Framer templates are often beautifully designed and cost $20&ndash;$50
              one-time. That&apos;s cheaper than most premium Squarespace or WordPress themes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Carrd: For Single-Page Sites</h2>
            <p>
              Carrd does one thing: single-page websites. Landing pages, link-in-bio pages, simple
              portfolios, waitlist pages, coming-soon pages. It does this better and cheaper than
              anything else.
            </p>
            <p>
              <strong className="text-foreground">At $19/year for Pro Plus,</strong> Carrd is absurdly
              cheap. You get custom domains, forms, payment widgets (Stripe, PayPal), and Google Analytics.
              For a freelancer who needs a simple web presence, Carrd is the answer.
            </p>
            <p>
              <strong className="text-foreground">The limitation is the name:</strong> single page. If you
              need multiple pages, a blog, or any kind of CMS, Carrd isn&apos;t it. It&apos;s a landing
              page builder, not a website builder. Don&apos;t try to make it something it&apos;s not.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">WordPress: The Nuclear Option</h2>
            <p>
              WordPress powers 40%+ of the web. It can do literally anything. But &ldquo;can&rdquo; and
              &ldquo;should&rdquo; are different conversations.
            </p>
            <p>
              <strong className="text-foreground">Self-hosted WordPress</strong> (WordPress.org + your own
              hosting) gives you maximum flexibility and ownership. You control everything: themes, plugins,
              database, server configuration. This is the right choice for complex sites with custom
              functionality, large content libraries, or specific performance requirements.
            </p>
            <p>
              <strong className="text-foreground">The hidden cost is maintenance.</strong> WordPress
              requires updates (core, theme, plugins), security monitoring, backups, and occasional
              troubleshooting when a plugin update breaks something. Budget 2&ndash;4 hours/month for
              maintenance or $50&ndash;$200/month for a managed WordPress host like WP Engine or Kinsta
              that handles it for you.
            </p>
            <p>
              <strong className="text-foreground">WordPress.com</strong> (the hosted version) is simpler
              but more limited. The Personal plan at $4/month is cheap, but you can&apos;t install custom
              plugins until the Business plan ($33/month). At that price, you&apos;re competing with
              Squarespace and Webflow, which are more polished for the same money.
            </p>
            <p>
              <strong className="text-foreground">Choose self-hosted WordPress if:</strong> you need
              WooCommerce for e-commerce, have 500+ blog posts, need specific plugins, or want full
              data ownership. Choose anything else if you want a simple site you can set up in a weekend
              and not think about.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Migration Difficulty Between Platforms</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">From</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">To</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Difficulty</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What Transfers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Squarespace</td>
                    <td className="px-4 py-2.5">WordPress</td>
                    <td className="px-4 py-2.5">Moderate</td>
                    <td className="px-4 py-2.5">Blog posts export as XML. Pages require manual rebuild. Images transfer.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Wix</td>
                    <td className="px-4 py-2.5">Anything</td>
                    <td className="px-4 py-2.5">Hard</td>
                    <td className="px-4 py-2.5">No export. Blog posts can be scraped. Pages must be rebuilt from scratch.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Webflow</td>
                    <td className="px-4 py-2.5">Anything</td>
                    <td className="px-4 py-2.5">Moderate</td>
                    <td className="px-4 py-2.5">CMS content exports as CSV. Code can be exported (but messy). Design requires rebuild.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Framer</td>
                    <td className="px-4 py-2.5">Anything</td>
                    <td className="px-4 py-2.5">Hard</td>
                    <td className="px-4 py-2.5">No content export. CMS items require manual migration. Design requires rebuild.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">WordPress</td>
                    <td className="px-4 py-2.5">Anything</td>
                    <td className="px-4 py-2.5">Easy&ndash;Moderate</td>
                    <td className="px-4 py-2.5">Full XML export, database access. Content migrates well. Design requires rebuild.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Carrd</td>
                    <td className="px-4 py-2.5">Anything</td>
                    <td className="px-4 py-2.5">Easy</td>
                    <td className="px-4 py-2.5">Single page &mdash; just rebuild it. Takes 1&ndash;2 hours on any platform.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong className="text-foreground">The migration lesson:</strong> Wix and Framer are the
              hardest to leave. If there&apos;s any chance you&apos;ll outgrow your platform, factor
              migration difficulty into your decision. WordPress and Squarespace are the easiest to
              migrate away from.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">E-commerce businesses with 100+ products</strong> &mdash; you need Shopify, WooCommerce, or BigCommerce. General website builders handle small stores but aren&apos;t built for catalog management at scale.</li>
              <li><strong className="text-foreground">Businesses needing custom web applications</strong> &mdash; if you need user authentication, dashboards, or database-driven features, you need a developer building with Next.js, Rails, or similar frameworks, not a website builder.</li>
              <li><strong className="text-foreground">Large organizations with compliance requirements</strong> &mdash; if you need WCAG AAA accessibility, SOC 2 hosting, or specific data residency, you need enterprise web infrastructure, not a $16/month builder.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Choosing based on templates.</strong> Every platform has beautiful templates. They all look different once you add your actual content (mediocre photos, too-long headlines, inconsistent brand colors). Pick the platform, not the template.</li>
              <li><strong className="text-foreground">Starting with WordPress when you don&apos;t need it.</strong> If you&apos;re a 5-person consulting firm that needs a 6-page website, WordPress is overkill. Squarespace or Framer gets you live in a weekend with zero maintenance.</li>
              <li><strong className="text-foreground">Buying annual plans immediately.</strong> Every builder offers a discount for annual billing. But if you&apos;re trying a new platform, start monthly. Pay the premium for one month to confirm it works for you before committing to 12 months.</li>
              <li><strong className="text-foreground">Ignoring mobile responsiveness.</strong> More than 60% of web traffic is mobile. Every platform claims to be mobile-responsive, but the reality varies. Preview your site on an actual phone before launching &mdash; the builder&apos;s mobile preview is often optimistic.</li>
              <li><strong className="text-foreground">Registering your domain through the website builder.</strong> Buy your domain separately through Cloudflare, Namecheap, or Porkbun. It&apos;s cheaper ($10&ndash;$12/year vs $20&ndash;$40 through builders) and you keep it if you switch platforms.</li>
              <li><strong className="text-foreground">Picking Webflow or Framer without design skills.</strong> These tools are powerful but assume visual design competence. A non-designer using Webflow will produce a worse site than a non-designer using Squarespace. Know your skill level.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the cheapest website builder for a small business?</h3>
                <p>Carrd at $19/year is the cheapest for single-page sites. For multi-page sites, Framer Mini at $5/month or WordPress.com Personal at $4/month are the most affordable. Squarespace at $16/month is the best value when you factor in included features and ease of use.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Squarespace or Wix better for a business website?</h3>
                <p>Squarespace produces more consistently professional results with less effort. Wix offers more flexibility and a larger app marketplace for niche needs (booking, restaurants, events). For most service businesses, Squarespace is the safer choice.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use WordPress in 2026?</h3>
                <p>Only if you need it. Self-hosted WordPress makes sense for large content sites, WooCommerce stores, or specific plugin requirements. For a simple business website, Squarespace, Webflow, or Framer are easier to manage and produce comparable results with less maintenance.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I switch website builders later?</h3>
                <p>Yes, but difficulty varies. WordPress and Squarespace are easiest to migrate from. Wix and Framer are hardest because they don&apos;t offer content export tools. If you anticipate switching, avoid Wix or keep your content backed up separately.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
