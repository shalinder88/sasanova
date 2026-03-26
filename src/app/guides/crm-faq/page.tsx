import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Questions Answered: 25 Things Small Teams Actually Ask",
  description:
    "Direct answers to the 25 most common CRM questions. Specific tool names, real per-seat prices, and definitive recommendations for HubSpot, Pipedrive, Salesforce, Freshsales, and Zoho.",
};

export default function CRMFAQPage() {
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
              CRM FAQ
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Questions Answered: 25 Things Small Teams Actually Ask
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Straight answers to the CRM questions buyers actually have. No
            &ldquo;schedule a demo&rdquo; runarounds. Every answer names specific
            tools, specific prices, and gives a definitive recommendation.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>10 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Getting Started */}
          <section>
            <h2 className="text-xl font-bold mb-6">Getting Started</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Do I really need a CRM?</h3>
                <p className="text-muted leading-relaxed">
                  If you have fewer than 50 contacts and one person handling sales, a spreadsheet works fine. Once you have multiple people touching deals, leads falling through cracks, or you can&apos;t remember when you last followed up, you need a CRM. The trigger is usually around 50&ndash;100 active contacts or 2+ salespeople.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best free CRM?</h3>
                <p className="text-muted leading-relaxed">
                  HubSpot Free CRM supports unlimited contacts and up to 5 users with basic deal tracking, email logging, and a meeting scheduler. The catch: limited to 1 deal pipeline, 1 automation, and no custom reporting. For pure free CRM, HubSpot is the most generous. Zoho Free supports 3 users with 5,000 records. Freshsales Free supports 3 users with basic contact management.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the cheapest CRM per seat?</h3>
                <p className="text-muted leading-relaxed">
                  Freshsales Growth at $11/seat/month (billed annually) is the cheapest paid CRM with meaningful features. Zoho Standard at $14/seat/month is next. Pipedrive Lite at $14/seat/month follows. HubSpot Starter begins at $20/seat/month. Salesforce Starter is $25/user/month. These are annual billing prices &mdash; monthly billing adds 20&ndash;30%.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How much does a CRM actually cost per year?</h3>
                <p className="text-muted leading-relaxed">
                  For a 5-person team (annual billing): Freshsales Growth costs $660/year. Pipedrive Lite costs $840/year. HubSpot Starter costs $1,200/year. Salesforce Starter costs $1,500/year. Salesforce Pro Suite costs $6,000/year. The jump from small-business CRMs to Salesforce is dramatic &mdash; factor in implementation costs of $5,000&ndash;$50,000 for Salesforce.
                </p>
              </div>
            </div>
          </section>

          {/* Choosing a CRM */}
          <section>
            <h2 className="text-xl font-bold mb-6">Choosing a CRM</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is Salesforce worth it for small teams?</h3>
                <p className="text-muted leading-relaxed">
                  No, unless you have 50+ users or need enterprise-grade customization. Salesforce Pro Suite is $100/user/month and requires a dedicated admin (salary: $70K&ndash;$120K/year). For teams under 25 people, Pipedrive or HubSpot delivers 80% of the functionality at 20% of the cost. Salesforce makes sense when you need complex workflow rules, custom objects, and deep integrations across hundreds of users.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">HubSpot vs Pipedrive: which should I pick?</h3>
                <p className="text-muted leading-relaxed">
                  Pipedrive if you want a focused sales CRM that&apos;s fast to set up and your team will actually use ($14/seat/month). HubSpot if you want marketing + sales + service in one platform and can handle more complexity (free for basics, $20/seat/month for Starter). Pipedrive is better for pure sales teams. HubSpot is better when marketing and sales need to share data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best CRM for a solo founder?</h3>
                <p className="text-muted leading-relaxed">
                  Folk at $20/month for relationship-focused work (consulting, partnerships, networking). Pipedrive Lite at $14/month for deal-focused sales. HubSpot Free if you want $0 and can live with limited features. Most solo founders don&apos;t need a CRM at all until they&apos;re juggling 50+ active relationships or deals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best CRM for real estate?</h3>
                <p className="text-muted leading-relaxed">
                  Follow Up Boss at $69/user/month is the industry standard for real estate agents and teams, with built-in lead routing and IDX integration. For solo agents on a budget, Pipedrive at $14/month handles contact and deal management well. HubSpot Free works too but lacks real estate-specific features like property tracking and MLS integration.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best CRM for agencies?</h3>
                <p className="text-muted leading-relaxed">
                  Pipedrive Premium at $49/seat/month for agencies focused on new business development (multiple pipelines, revenue forecasting). HubSpot Starter at $20/seat/month for agencies that also manage client marketing. Close at $59/seat/month for high-volume outbound agencies that need built-in calling and SMS.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I use Notion as a CRM?</h3>
                <p className="text-muted leading-relaxed">
                  Technically yes, but you shouldn&apos;t past 50 contacts. Notion lacks email tracking, automated follow-up reminders, deal pipeline analytics, and activity logging. You&apos;ll spend more time maintaining your Notion CRM than using a real one. If budget is the issue, HubSpot Free does everything Notion does for CRM purposes and more, at $0.
                </p>
              </div>
            </div>
          </section>

          {/* Features & Functionality */}
          <section>
            <h2 className="text-xl font-bold mb-6">Features &amp; Functionality</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which CRM has the best reporting?</h3>
                <p className="text-muted leading-relaxed">
                  Salesforce has the most powerful reporting with custom report types, cross-object reporting, and dashboards &mdash; but only on Pro Suite ($100/user/month) and above. HubSpot has good reporting on Professional ($100/seat/month) but limited on Starter. Pipedrive includes solid deal and activity reports on all plans. For small teams, Pipedrive&apos;s built-in reports cover 90% of what you need.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which CRM integrates best with email?</h3>
                <p className="text-muted leading-relaxed">
                  HubSpot has the deepest Gmail and Outlook integration: email tracking, templates, sequences, and a sidebar that shows CRM data in your inbox. All plans including Free. Pipedrive also offers email sync with open tracking on all plans. Salesforce requires Salesforce Inbox (additional cost) for comparable integration. For email-heavy sales teams, HubSpot&apos;s email integration is the best.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Do CRMs include email marketing?</h3>
                <p className="text-muted leading-relaxed">
                  HubSpot includes basic email marketing on Free (2,000 sends/month with HubSpot branding) and full email marketing on Marketing Hub Starter ($20/month). Freshsales includes email campaigns on Growth plan. Most other CRMs (Pipedrive, Close, Salesforce) do not include email marketing &mdash; you need a separate tool like ActiveCampaign or Kit.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which CRM has the best mobile app?</h3>
                <p className="text-muted leading-relaxed">
                  Pipedrive has the highest-rated mobile app (4.6 on iOS) with full deal management, activity logging, and offline access. HubSpot&apos;s mobile app (4.5 on iOS) is good for quick contact lookups and email tracking. Salesforce&apos;s mobile app is powerful but sluggish on older devices. For field sales teams who live on their phones, Pipedrive&apos;s mobile experience is the smoothest.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can a CRM replace my project management tool?</h3>
                <p className="text-muted leading-relaxed">
                  No. CRMs manage customer relationships and deals. Project management tools manage tasks and deliverables. HubSpot has basic task management, but it&apos;s not a replacement for ClickUp ($7/seat/month), Asana (free for 2 users), or Linear ($8/seat/month). Use a CRM for pre-sale and a PM tool for post-sale delivery.
                </p>
              </div>
            </div>
          </section>

          {/* Migration & Implementation */}
          <section>
            <h2 className="text-xl font-bold mb-6">Migration &amp; Implementation</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How long does CRM implementation take?</h3>
                <p className="text-muted leading-relaxed">
                  Pipedrive or HubSpot Starter: 1&ndash;3 days for a team of 5. HubSpot Professional: 2&ndash;4 weeks with proper pipeline and automation setup. Salesforce: 1&ndash;3 months minimum, often 6+ months for enterprise. The biggest time sink is always data cleanup and process definition, not the software setup itself.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I migrate from a spreadsheet to a CRM?</h3>
                <p className="text-muted leading-relaxed">
                  Clean your spreadsheet first: remove duplicates, standardize company names, add missing emails. Export as CSV. Import into your CRM &mdash; HubSpot, Pipedrive, and Freshsales all have CSV import wizards that map columns to CRM fields. Budget 2&ndash;4 hours for lists under 5,000 contacts. The import takes minutes; the cleanup takes hours.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I switch CRMs without losing data?</h3>
                <p className="text-muted leading-relaxed">
                  Contact data, deal data, and notes transfer cleanly via CSV export/import between any CRM. What you lose: automation workflows (must be rebuilt), email templates, activity history (call logs, email opens), and custom field mappings. Budget 1 week for a team of 10 switching between Pipedrive, HubSpot, or Freshsales. Salesforce migrations take 2&ndash;4 weeks minimum.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Should I switch from HubSpot to Pipedrive?</h3>
                <p className="text-muted leading-relaxed">
                  Yes, if your team only uses the sales features and finds HubSpot overwhelming. Pipedrive is focused, fast, and cheaper ($14 vs $20/seat/month on Starter). No, if you rely on HubSpot&apos;s marketing tools, forms, landing pages, or the free email marketing. The migration itself takes 1&ndash;2 days for teams under 15 people.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I get my team to actually use the CRM?</h3>
                <p className="text-muted leading-relaxed">
                  Choose a CRM that&apos;s simpler than you think you need &mdash; Pipedrive over Salesforce, HubSpot Starter over Professional. Mandate that deals only count if they&apos;re in the CRM. Connect email and calendar so logging happens automatically. The #1 reason CRM adoption fails is the tool is too complex for the team&apos;s actual workflow.
                </p>
              </div>
            </div>
          </section>

          {/* Cost & Value */}
          <section>
            <h2 className="text-xl font-bold mb-6">Cost &amp; Value</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What are the hidden costs of a CRM?</h3>
                <p className="text-muted leading-relaxed">
                  Implementation consulting ($2,000&ndash;$50,000 for Salesforce, usually $0 for Pipedrive/HubSpot Starter). Data migration if you hire someone ($500&ndash;$5,000). Add-on costs: HubSpot charges extra for custom reporting ($100/month), Salesforce charges for API access on lower tiers. Training time: budget 2&ndash;8 hours per user for onboarding.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is HubSpot really free?</h3>
                <p className="text-muted leading-relaxed">
                  The CRM is genuinely free with unlimited contacts and 5 users. The catch: limited to 1 deal pipeline, 3 dashboards, no custom reporting, HubSpot branding on emails and forms, and only 1 automation. Once you need more, Starter is $20/seat/month. The jump to Professional is $100/seat/month &mdash; that&apos;s where the real cost hits. Many teams get locked in at Free and face sticker shock when upgrading.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">When should I upgrade from a free CRM?</h3>
                <p className="text-muted leading-relaxed">
                  Upgrade when you need: multiple deal pipelines (HubSpot Free has 1), custom reporting, workflow automation, or you&apos;re hitting user limits. For HubSpot, that means upgrading to Starter at $20/seat/month or Pipedrive Lite at $14/seat/month. Don&apos;t upgrade just for features &mdash; upgrade when the free tier is visibly costing you deals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Zoho vs HubSpot: which is the better value?</h3>
                <p className="text-muted leading-relaxed">
                  Zoho is cheaper per seat ($14 vs $20/month for entry-level paid) and includes more modules (email, social, inventory, invoicing). HubSpot has a better UI, stronger integrations, and a more generous free tier. For budget-conscious teams who want everything in one suite, Zoho wins on value. For teams who prioritize ease of use and ecosystem, HubSpot wins.
                </p>
              </div>
            </div>
          </section>

          {/* Source note */}
          <section className="border-t border-border pt-6 mt-8">
            <p className="text-xs text-muted leading-relaxed">
              Prices reflect published rates as of March 2026. All platforms adjust pricing periodically.
              Verify current pricing on each vendor&apos;s website before purchasing. Sasanova is
              editorially independent &mdash; see our{" "}
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                editorial policy
              </Link>.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={["hubspot", "pipedrive", "salesforce", "freshsales", "zoho-crm"]}
          comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-salesforce", "salesforce-vs-hubspot-crm"]}
          guides={[
            "crm-annual-cost-2026",
            "best-crm-freelancers-consultants",
            "best-crm-sales-teams",
            "best-free-crm-2026",
            "hubspot-pricing-reality",
          ]}
        />
      </article>
    </>
  );
}
