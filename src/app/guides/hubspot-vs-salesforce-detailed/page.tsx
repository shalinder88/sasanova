import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "HubSpot vs Salesforce: The Complete 2026 Comparison",
  description:
    "HubSpot Free Tools vs Salesforce Starter Suite at $25/seat — a complete comparison of pricing, features, ecosystem, and total cost of ownership for teams of every size.",
};

export default function HubSpotVsSalesforceDetailedPage() {
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
              HubSpot vs Salesforce
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Detailed Comparison
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            HubSpot vs Salesforce: The Complete 2026 Comparison
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">Quick verdict:</strong> HubSpot wins for teams under 50 people who want marketing + sales + CRM in one platform without hiring a consultant. Salesforce wins for enterprises that need infinite customization, AppExchange apps, and are willing to invest in setup and admin. For most small-to-mid businesses, HubSpot is the better starting point.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>28 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Pricing verified from vendor sites</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Pricing Table */}
          <section>
            <h2 className="text-xl font-bold mb-3">Side-by-Side Pricing</h2>
            <p className="text-muted leading-relaxed mb-4">
              HubSpot and Salesforce have fundamentally different pricing architectures. HubSpot bundles marketing, sales, and service into tiered &ldquo;Hubs&rdquo; with a massive free tier. Salesforce prices per seat per cloud with no free option.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Plan</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">HubSpot CRM</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Salesforce Sales Cloud</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Free / Entry</td>
                    <td className="py-3 px-4">Free Tools &mdash; $0 (unlimited contacts, 2,000 emails/mo)</td>
                    <td className="py-3 px-4">Starter Suite &mdash; $25/seat/mo ($300/yr)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Starter / Pro</td>
                    <td className="py-3 px-4">Starter &mdash; $20/seat/mo ($216/yr)</td>
                    <td className="py-3 px-4">Pro Suite &mdash; $100/seat/mo ($1,200/yr)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">Professional</td>
                    <td className="py-3 px-4">Professional &mdash; $890/mo flat ($10,680/yr)</td>
                    <td className="py-3 px-4">Enterprise &mdash; $175/seat/mo ($2,100/yr)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-foreground">Enterprise</td>
                    <td className="py-3 px-4">Enterprise &mdash; $3,600/mo flat ($43,200/yr)</td>
                    <td className="py-3 px-4">Unlimited &mdash; $350/seat/mo ($4,200/yr)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              HubSpot Professional and Enterprise are flat-rate (includes seats). Salesforce is strictly per-seat at every tier.
            </p>
          </section>

          {/* Feature Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-3">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">HubSpot</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Salesforce</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Free tier</td>
                    <td className="py-2 px-4">Yes &mdash; unlimited contacts, basic CRM</td>
                    <td className="py-2 px-4">No &mdash; starts at $25/seat/mo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Built-in email marketing</td>
                    <td className="py-2 px-4">Yes &mdash; 2,000 sends/mo free</td>
                    <td className="py-2 px-4">No &mdash; requires Pardot/Marketing Cloud</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Custom objects</td>
                    <td className="py-2 px-4">Enterprise only ($3,600/mo)</td>
                    <td className="py-2 px-4">Enterprise+ ($175/seat/mo)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Workflow automation</td>
                    <td className="py-2 px-4">Professional+ (visual builder)</td>
                    <td className="py-2 px-4">Enterprise+ (Flow Builder)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">App marketplace</td>
                    <td className="py-2 px-4">1,600+ integrations</td>
                    <td className="py-2 px-4">4,000+ AppExchange apps</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Custom development</td>
                    <td className="py-2 px-4">Limited (Operations Hub for custom code)</td>
                    <td className="py-2 px-4">Full platform (Apex, Visualforce, LWC)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">AI features</td>
                    <td className="py-2 px-4">ChatSpot, content assistant</td>
                    <td className="py-2 px-4">Einstein AI (Unlimited tier)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Reporting</td>
                    <td className="py-2 px-4">Good &mdash; custom dashboards on Pro+</td>
                    <td className="py-2 px-4">Excellent &mdash; deeply customizable</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-4 font-medium text-foreground">Ease of use</td>
                    <td className="py-2 px-4">High &mdash; designed for non-technical users</td>
                    <td className="py-2 px-4">Low &mdash; typically needs admin/consultant</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium text-foreground">Compliance</td>
                    <td className="py-2 px-4">SOC 2, GDPR, ISO 27001</td>
                    <td className="py-2 px-4">SOC 2, GDPR, ISO 27001, HIPAA, FedRAMP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Choose HubSpot if / Choose Salesforce if */}
          <section>
            <h2 className="text-xl font-bold mb-3">Decision Framework</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-bold text-foreground mb-2">Choose HubSpot if:</p>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want a free CRM to start with</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need marketing + sales + service in one platform</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Your team is under 50 people</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You don&apos;t have a dedicated CRM admin</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Ease of onboarding matters more than customization depth</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-bold text-foreground mb-2">Choose Salesforce if:</p>
                <ul className="space-y-1.5 text-sm text-muted">
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need maximum customization (custom objects, Apex code)</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You require HIPAA or FedRAMP compliance</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Your sales process has complex territory/quota structures</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You have budget for a Salesforce admin or consultant</li>
                  <li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You need AppExchange&apos;s 4,000+ specialized apps</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What HubSpot does better */}
          <section>
            <h2 className="text-xl font-bold mb-3">What HubSpot Does Better</h2>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Onboarding and UX.</strong> HubSpot is usable on day one. The interface is clean, the learning curve is gentle, and most features are self-explanatory. Salesforce typically requires 2&ndash;4 weeks of setup and often a consultant for initial configuration.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Bundled marketing tools.</strong> HubSpot includes email marketing, forms, live chat, and basic automation even on the free tier. Getting equivalent functionality in Salesforce means purchasing Marketing Cloud or Pardot separately &mdash; a five- to six-figure annual commitment.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Content management.</strong> HubSpot has a built-in CMS for landing pages, blogs, and websites. Salesforce has no comparable feature &mdash; you&apos;ll need Salesforce Experience Cloud (separate product, separate cost).
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Free tier.</strong> HubSpot Free Tools is one of the most generous free CRM offerings in the market. Unlimited contacts, email tracking, deal pipeline, meeting scheduling, live chat, and forms &mdash; all at $0. Salesforce has no free option.
            </p>
          </section>

          {/* What Salesforce does better */}
          <section>
            <h2 className="text-xl font-bold mb-3">What Salesforce Does Better</h2>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Customization depth.</strong> Salesforce is essentially a platform, not just a CRM. With Apex (a Java-like language), Lightning Web Components, and Flows, you can build virtually any business application on top of Salesforce. HubSpot&apos;s customization is limited to what the UI allows.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Enterprise ecosystem.</strong> AppExchange has 4,000+ apps covering every niche: CPQ (configure-price-quote), contract management, territory planning, commission calculation, and industry-specific solutions. HubSpot&apos;s marketplace is growing but has roughly 40% of the breadth.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              <strong className="text-foreground">Reporting power.</strong> Salesforce reporting with Tableau (included in some plans) is genuinely best-in-class. Cross-object reports, custom report types, bucketing, row-level formulas, and scheduled report delivery. HubSpot reporting is good but has guardrails that advanced analysts bump into.
            </p>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Compliance.</strong> Salesforce supports HIPAA, FedRAMP, and SOX compliance at the platform level. HubSpot supports SOC 2 and GDPR but not HIPAA or FedRAMP &mdash; making Salesforce mandatory for healthcare, government, and highly regulated industries.
            </p>
          </section>

          {/* Cost at 3 sizes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Total Annual Cost at Three Team Sizes</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Team Size</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">HubSpot</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Salesforce</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">5 users (Starter/Pro)</td>
                    <td className="py-3 px-4">$1,080/yr (Starter at $216/yr/seat)</td>
                    <td className="py-3 px-4">$6,000/yr (Pro Suite at $1,200/yr/seat)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium text-foreground">20 users (Professional/Enterprise)</td>
                    <td className="py-3 px-4">$10,680/yr (Professional flat rate)</td>
                    <td className="py-3 px-4">$42,000/yr (Enterprise at $2,100/yr/seat)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-foreground">50 users (Enterprise/Unlimited)</td>
                    <td className="py-3 px-4">$43,200/yr (Enterprise flat rate)</td>
                    <td className="py-3 px-4">$210,000/yr (Unlimited at $4,200/yr/seat)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              HubSpot Professional and Enterprise pricing is flat-rate and includes a set number of seats. Salesforce pricing is strictly per-seat. Additional HubSpot marketing contacts cost extra beyond included tiers.
            </p>
          </section>

          {/* Migration */}
          <section>
            <h2 className="text-xl font-bold mb-3">Migration Between the Two</h2>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">HubSpot to Salesforce</p>
                <p className="text-sm text-muted">
                  <strong>Effort:</strong> High (2&ndash;6 weeks for a 20-person team). <strong>What transfers:</strong> Contacts, companies, deals, notes, emails (via CSV or native integration). <strong>What breaks:</strong> HubSpot workflows, email sequences, landing pages, forms, and any Marketing Hub content. You&apos;ll need to rebuild automations in Salesforce Flow and find replacements for marketing tools (Pardot, Marketing Cloud, or third-party alternatives).
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Salesforce to HubSpot</p>
                <p className="text-sm text-muted">
                  <strong>Effort:</strong> High (2&ndash;8 weeks depending on Salesforce customization). <strong>What transfers:</strong> Standard objects (leads, contacts, accounts, opportunities) via HubSpot&apos;s native Salesforce import. <strong>What breaks:</strong> Custom objects (HubSpot Enterprise required), Apex triggers, Flow automations, AppExchange integrations, and custom report types. Data migration companies charge $5K&ndash;$50K+ depending on complexity.
                </p>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes When Choosing</h2>
            <div className="space-y-3">
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Choosing Salesforce because &ldquo;we might need it someday&rdquo;</p>
                <p className="text-sm text-muted">
                  Salesforce&apos;s power comes with overhead. If you&apos;re a 10-person team buying Enterprise at $175/seat/mo &ldquo;just in case,&rdquo; you&apos;re paying $21,000/year for features you&apos;re not using. Start with HubSpot free. Migrate when you actually hit its limits.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Ignoring HubSpot&apos;s price cliff at Professional</p>
                <p className="text-sm text-muted">
                  HubSpot Starter is $20/seat/mo. Professional is $890/mo flat &mdash; a 4,350% jump from a single Starter seat. If your team grows into needing automation, custom reporting, or ABM, the cost shock is real.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Not budgeting for Salesforce implementation</p>
                <p className="text-sm text-muted">
                  Salesforce license cost is often 30&ndash;50% of total first-year cost. Implementation consulting, data migration, custom development, and admin training add $10K&ndash;$100K+ depending on complexity.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-surface p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Comparing base prices without considering the full stack</p>
                <p className="text-sm text-muted">
                  HubSpot includes email, forms, live chat, and landing pages. Salesforce requires separate purchases for marketing (Pardot at $1,250+/mo), service (Service Cloud at $25+/seat/mo), and content (Experience Cloud). The total Salesforce ecosystem cost is often 2&ndash;5x the CRM license alone.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can HubSpot and Salesforce integrate with each other?</h3>
                <p className="text-sm text-muted">Yes. HubSpot offers a native Salesforce integration that syncs contacts, companies, deals, and activities bidirectionally. Many companies use HubSpot for marketing and Salesforce for sales, though this creates data complexity and costs for both platforms.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Free really free forever?</h3>
                <p className="text-sm text-muted">Yes. HubSpot Free Tools has no time limit. It includes unlimited contacts, deal pipeline, email tracking, forms, and live chat. The limitations are feature depth (no automation, no custom reporting) and HubSpot branding on forms and emails.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need a Salesforce consultant?</h3>
                <p className="text-sm text-muted">For Starter Suite with basic needs, probably not. For Pro Suite and above with custom processes, almost certainly yes. Certified Salesforce consultants charge $100&ndash;$250/hour. Budget $5K&ndash;$25K for initial setup depending on complexity.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which is better for a 5-person sales team?</h3>
                <p className="text-sm text-muted">HubSpot. The free tier handles basic CRM needs, and Starter at $20/seat/mo ($1,200/yr total for 5 seats with annual billing) is a fraction of Salesforce Pro Suite at $6,000/yr. You won&apos;t miss Salesforce&apos;s advanced features at this size.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I switch from HubSpot to Salesforce?</h3>
                <p className="text-sm text-muted">When you need custom objects beyond HubSpot Enterprise limits, when compliance requires HIPAA/FedRAMP, when your sales process needs territory management or CPQ, or when your team exceeds 100 people and you need complex organizational hierarchies.</p>
              </div>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["hubspot-crm", "salesforce"]}
            comparisons={["hubspot-crm-vs-salesforce"]}
            guides={["when-hubspot-stops-being-cheap", "salesforce-hidden-costs", "how-to-choose-crm"]}
          />
        </div>
      </article>
    </>
  );
}
