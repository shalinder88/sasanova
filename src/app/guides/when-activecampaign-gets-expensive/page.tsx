import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "When ActiveCampaign Stops Being Affordable: The Exact Thresholds",
  description:
    "ActiveCampaign Starter is $15/mo at 1,000 contacts. Then Plus jumps to $49/mo, Pro to $79/mo. The contact-tier trap scales steeply. Here are the exact thresholds and cheaper alternatives.",
};

export default function WhenActiveCampaignGetsExpensive() {
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
              When ActiveCampaign Gets Expensive
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Cost Threshold
            </span>
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            When ActiveCampaign Stops Being Affordable
          </h1>
          <p className="text-lg text-muted">
            ActiveCampaign Starter at $15/mo for 1,000 contacts is genuinely reasonable. But the jump to Plus ($49/mo) and Pro ($79/mo) hits fast &mdash; and then the contact-tier multiplier makes every plan dramatically more expensive. This guide maps the exact price cliffs so you can plan before you&apos;re locked in.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from ActiveCampaign, Kit, and Brevo vendor pages"
          sourceCount={4}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Phase 1: Starter Is Genuinely Affordable</h2>
          <p className="text-muted mb-4">
            ActiveCampaign Starter at $15/month (or $108/year billed annually) for 1,000 contacts gives you:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Email marketing and basic automations.</strong> Enough for welcome sequences, simple drip campaigns, and basic segmentation.</li>
            <li><strong className="text-foreground">1,000 contacts included.</strong> That&apos;s the base tier &mdash; prices scale steeply from here.</li>
            <li><strong className="text-foreground">Basic integrations.</strong> Shopify, WordPress, Zapier &mdash; the essentials work.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Starter</p>
            <p className="text-sm text-muted">
              You have under 1,000 contacts, only need basic email sequences and automations, and don&apos;t need CRM, landing pages, or lead scoring. For simple newsletter + drip campaign use cases, Starter at $15/mo is fair value.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Phase 2: Plus at $49/mo &mdash; The First Jump</h2>
          <p className="text-muted mb-4">
            Plus costs $49/month ($348/year annually) for 1,000 contacts. That&apos;s a 227% increase over Starter for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">CRM with pipeline management.</strong> Deal tracking, win probability, and contact scoring.</li>
            <li><strong className="text-foreground">Landing pages.</strong> Built-in page builder for lead capture.</li>
            <li><strong className="text-foreground">Lead scoring.</strong> Automated scoring based on engagement and fit.</li>
            <li><strong className="text-foreground">SMS marketing.</strong> Add SMS to your automation sequences.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Phase 3: Pro at $79/mo &mdash; The Power Tier</h2>
          <p className="text-muted mb-4">
            Pro costs $79/month ($588/year annually) for 1,000 contacts &mdash; a 427% increase over Starter:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Predictive sending.</strong> AI optimizes send times per contact.</li>
            <li><strong className="text-foreground">Split automations.</strong> A/B test entire automation paths, not just subject lines.</li>
            <li><strong className="text-foreground">Site messaging.</strong> On-site chat and targeted messages.</li>
            <li><strong className="text-foreground">Attribution reporting.</strong> Track which channels drive conversions.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">The Contact-Tier Trap: Where It Really Gets Expensive</h2>
          <p className="text-muted mb-4">
            ActiveCampaign&apos;s real pricing trap isn&apos;t the plan tier &mdash; it&apos;s the contact scaling. Every plan&apos;s base price is for 1,000 contacts. As your list grows, prices multiply:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Contacts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Starter</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plus</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                  <td className="px-4 py-2.5">$15/mo</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$99/mo</td>
                  <td className="px-4 py-2.5">$149/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">$159/mo</td>
                  <td className="px-4 py-2.5">$229/mo</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                  <td className="px-4 py-2.5 text-yellow-400">$159/mo</td>
                  <td className="px-4 py-2.5 text-red-400">$289/mo</td>
                  <td className="px-4 py-2.5 text-red-400">$389/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            At 25,000 contacts, even Starter costs $159/mo &mdash; more than 10x the base price. Pro at 25,000 contacts ($389/mo) means you&apos;re paying $4,668/year for email marketing and automation.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade: The Exact Triggers</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade from Starter to Plus when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>You need CRM functionality &mdash; deal tracking, pipeline management, or contact scoring.</li>
              <li>You&apos;re running paid ads and need landing pages without a separate tool.</li>
              <li>You need lead scoring to prioritize sales outreach.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade from Plus to Pro when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>You&apos;re A/B testing automation paths, not just email subject lines.</li>
              <li>You need predictive sending to optimize delivery times per contact.</li>
              <li>You want attribution reporting to track which channels convert.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Kit or Brevo</h2>
          <p className="text-muted mb-4">
            When ActiveCampaign&apos;s contact-tier pricing gets steep, two alternatives stand out:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                  <td className="px-4 py-2.5">Newsletter (Free)</td>
                  <td className="px-4 py-2.5 text-green-400">$0/mo</td>
                  <td className="px-4 py-2.5">10,000 subscribers, unlimited sends, no automations</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                  <td className="px-4 py-2.5">Creator</td>
                  <td className="px-4 py-2.5 text-green-400">$39/mo</td>
                  <td className="px-4 py-2.5">1,000 subs, automations, integrations</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0/mo</td>
                  <td className="px-4 py-2.5">100,000 contacts, 300 emails/day</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                  <td className="px-4 py-2.5">Standard</td>
                  <td className="px-4 py-2.5 text-green-400">$18/mo</td>
                  <td className="px-4 py-2.5">5,000 emails/mo, automation, A/B testing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo&apos;s key advantage:</strong> It charges by emails sent, not contacts stored. You can have 100,000 contacts on the free plan. At 10,000+ contacts, Brevo Standard at $18/mo is dramatically cheaper than ActiveCampaign Starter at $79/mo for the same contact count.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit&apos;s key advantage:</strong> The free Newsletter tier supports 10,000 subscribers with unlimited sends. For creators who just need email without complex automation, Kit free beats ActiveCampaign Starter at any list size.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does ActiveCampaign have a free plan?</h3>
                <p className="text-muted">No. ActiveCampaign does not offer a free tier. The cheapest option is Starter at $15/mo for 1,000 contacts. There is a 14-day free trial, but no permanent free plan.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does ActiveCampaign Enterprise cost?</h3>
                <p className="text-muted">Enterprise starts at $145/mo for 1,000 contacts ($1,068/year annually). It includes custom objects, HIPAA support, and a dedicated account rep. Contact-tier pricing applies on top of the base price.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is ActiveCampaign worth it over Brevo?</h3>
                <p className="text-muted">ActiveCampaign has a significantly more powerful automation builder. If you need complex branching logic, split automations, and predictive sending, it justifies the premium. If you primarily send campaigns and basic sequences, Brevo Standard at $18/mo delivers 80% of the value at a fraction of the cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I downgrade ActiveCampaign plans?</h3>
                <p className="text-muted">Yes, but you lose access to features immediately. If you built automations using Plus or Pro features (CRM pipelines, split automations), those stop working on downgrade. Plan your exit before building complex workflows on a higher tier.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["activecampaign", "brevo", "convertkit"]}
            comparisons={["activecampaign-vs-mailchimp", "activecampaign-vs-hubspot-crm"]}
            guides={["when-mailchimp-becomes-expensive", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
