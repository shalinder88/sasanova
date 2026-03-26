import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Spending Audit: Find $500+/Month in Wasted Subscriptions",
  description:
    "Step-by-step SaaS audit process. Common waste patterns: duplicate tools, unused seats, missed annual billing. Which categories to cut first. Real price examples from tools.ts.",
};

export default function SaasSpendingAuditTemplate() {
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
              SaaS Spending Audit Template
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Budget Constraint
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Spending Audit: Find $500+/Month in Wasted Subscriptions
          </h1>
          <p className="text-lg text-muted">
            The average small business uses 34 SaaS tools and underestimates spend by 2&ndash;3x. Duplicate tools, unused seats, forgotten trials, and missed annual billing discounts add up fast. A 60-minute audit typically finds $200&ndash;$800/month in recoverable spend. Here is the step-by-step process.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">Step 1: Build the Complete Inventory (15 Minutes)</h2>
          <p className="text-muted mb-4">
            Pull credit card and bank statements for the last 3 months. Search for recurring charges from: Stripe, PayPal, App Store, Google Play, and direct card charges. List every subscription with its monthly cost, billing cycle (monthly vs annual), and number of seats. Most teams discover 3&ndash;5 subscriptions they forgot about in this step alone.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Step 2: Identify Duplicate Categories (10 Minutes)</h2>
          <p className="text-muted mb-4">
            The most common waste pattern is paying for multiple tools in the same category. Common duplicates:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">CRM overlap:</strong> HubSpot Starter ($20/seat) AND Pipedrive Lite ($14/seat). Pick one. Savings: $14&ndash;$20/seat/month.</li>
            <li><strong className="text-foreground">Automation overlap:</strong> Zapier Professional ($29.99/month) AND Make Core ($10.59/month). Switch to Make Core if volume allows. Savings: $29.99/month.</li>
            <li><strong className="text-foreground">Email overlap:</strong> Mailchimp Standard ($20/month) AND ActiveCampaign Starter ($15/month). Consolidate. Savings: $15&ndash;$20/month.</li>
            <li><strong className="text-foreground">PM overlap:</strong> Notion Plus ($12/user) AND ClickUp Unlimited ($10/member). Choose one workspace. Savings: $10&ndash;$12/user/month.</li>
            <li><strong className="text-foreground">Communication overlap:</strong> Slack Pro ($8.75/user) AND Microsoft Teams Essentials ($4/user). If you pay for Microsoft 365, Teams is included. Savings: $8.75/user/month.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Step 3: Audit Seat Count (10 Minutes)</h2>
          <p className="text-muted mb-4">
            Per-seat tools are the biggest waste vector. For each per-seat subscription, check: how many seats are provisioned versus how many people actively used the tool in the last 30 days? Common findings:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Salesforce Pro Suite at $100/seat with 5 unused seats = $500/month wasted</li>
            <li>Slack Pro at $8.75/user with 10 inactive users = $87.50/month wasted</li>
            <li>Pipedrive Growth at $39/seat with 3 unused seats = $117/month wasted</li>
            <li>Notion Plus at $12/user with 8 unused seats = $96/month wasted</li>
          </ul>
          <p className="text-muted mb-4">
            Removing unused seats is the fastest way to recover spend. No workflow disruption, no migration, just fewer seats.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Step 4: Switch to Annual Billing (5 Minutes)</h2>
          <p className="text-muted mb-4">
            Check which subscriptions are on monthly billing that could switch to annual. Typical annual billing savings:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">Canva Pro:</strong> $15/month &rarr; $10/month annual (save $60/year)</li>
            <li><strong className="text-foreground">Slack Pro:</strong> $8.75/user &rarr; $7.25/user annual (save $18/user/year)</li>
            <li><strong className="text-foreground">Notion Plus:</strong> $12/user &rarr; $10/user annual (save $24/user/year)</li>
            <li><strong className="text-foreground">beehiiv Scale:</strong> $49/month &rarr; $43/month annual (save $72/year)</li>
            <li><strong className="text-foreground">Make Core:</strong> $10.59/month &rarr; $9/month annual (save $19/year)</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Step 5: Downgrade Overprovisioned Plans (10 Minutes)</h2>
          <p className="text-muted mb-4">
            Check whether your current plan tier matches your actual usage. Common overprovisioning:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">HubSpot Professional ($890/month)</strong> when Starter ($20/seat) covers your needs. If you are not using custom reporting, ABM, or advanced automation, you are overpaying by $800+/month.</li>
            <li><strong className="text-foreground">Zapier Team ($103.50/month)</strong> when you use under 2,000 tasks. Make Core at $10.59/month handles 10,000 operations. Savings: $93/month.</li>
            <li><strong className="text-foreground">Salesforce Enterprise ($175/seat)</strong> when Pro Suite ($100/seat) covers your workflow. At 20 seats: $1,500/month in savings.</li>
            <li><strong className="text-foreground">Slack Business+ ($18/user)</strong> when Pro ($8.75/user) has everything your team needs. At 25 users: $231.25/month in savings.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Step 6: Replace Expensive Tools with Cheaper Alternatives (10 Minutes)</h2>
          <p className="text-muted mb-4">
            Some tools are simply overpriced relative to alternatives:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">Zapier Professional ($29.99/month, 750 tasks) &rarr; Make Core ($10.59/month, 10,000 ops):</strong> Save $19.40/month</li>
            <li><strong className="text-foreground">Mailchimp Standard ($20+/month at 500 contacts) &rarr; Brevo Starter ($9/month for 5,000 emails):</strong> Save $11+/month</li>
            <li><strong className="text-foreground">Calendly Standard ($12/user) &rarr; Cal.com Free (unlimited bookings):</strong> Save $12/user/month</li>
            <li><strong className="text-foreground">Slack Pro ($8.75/user) &rarr; Discord Free (unlimited everything):</strong> Save $8.75/user/month</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Example: A 15-Person Team Audit</h2>
          <p className="text-muted mb-4">
            Before audit: HubSpot Professional ($890), Zapier Team ($103.50), Slack Pro x15 ($131.25), Salesforce Pro Suite x5 ($500), Mailchimp Standard ($75), Notion Plus x15 ($180), Canva Pro ($15), Calendly Standard x5 ($60). Total: $1,954.75/month.
          </p>
          <p className="text-muted mb-4">
            After audit: Remove Salesforce (duplicate with HubSpot, save $500). Downgrade HubSpot to Starter x5 ($100). Switch Zapier to Make Core ($10.59). Switch Slack to Discord Free ($0). Switch Mailchimp to Brevo Starter ($9). Switch Calendly to Cal.com Free ($0). Keep Notion Plus x15 ($180). Keep Canva Pro ($15). Total: $314.59/month. Savings: $1,640.16/month ($19,681.92/year).
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How often should I audit SaaS spending?</h3>
                <p>Quarterly. New subscriptions creep in monthly, seat counts drift, and vendors silently raise prices. A quarterly 30-minute check prevents the slow accumulation that turns a $200/month stack into $2,000/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the average SaaS waste per company?</h3>
                <p>Studies consistently find 25&ndash;30% of SaaS spend is wasted on unused seats, duplicate tools, and overprovisioned plans. For a company spending $2,000/month, that is $500&ndash;$600/month in recoverable costs.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which SaaS categories should I cut first?</h3>
                <p>Start with per-seat tools with unused seats (instant savings, zero workflow impact). Then eliminate duplicate categories. Then switch to annual billing. Then evaluate cheaper alternatives. This order minimizes disruption while maximizing savings.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "zapier", "make", "slack", "salesforce", "mailchimp"]}
            comparisons={["zapier-vs-make", "hubspot-crm-vs-pipedrive", "slack-vs-discord"]}
            guides={[
              "negotiate-saas-pricing",
              "how-much-should-software-cost",
              "saas-pricing-traps-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
