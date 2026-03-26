import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Costs for a 1-Person Business: Complete Stack Breakdown",
  description:
    "Every software category priced for a solo operator. CRM, email, automation, PM, analytics, scheduling, forms, chat, and more at $0 and paid tiers. Exact prices from verified vendor data.",
};

export default function SaaSCosts1PersonPage() {
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
              SaaS Costs for 1-Person Business
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Team Size Scaling
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Costs for a 1-Person Business: Complete Stack Breakdown
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Running a business solo means every dollar matters. The good news: you can
            run a complete software stack for $0/month using genuine free tiers. The bad
            news: free plans have limits that eventually cost you time. This guide maps
            every category with exact prices so you can decide where $0 works and where
            paying $10&ndash;$50/month buys back hours.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>18 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The $0/Month Solo Stack</h2>
            <p className="text-muted leading-relaxed mb-4">
              Every tool below has a verified free tier that works for a single user.
              No trials &mdash; these are permanent free plans.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited contacts, basic CRM, 2,000 email sends/mo, HubSpot branding</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email Marketing</td>
                    <td className="px-4 py-2.5 text-muted">Kit Newsletter (free)</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 subscribers, unlimited sends, no automations or integrations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Newsletter</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv Launch</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">2,500 subscribers, unlimited sends, custom domain, beehiiv branding</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">1,000 operations/mo, 2 active scenarios</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Project Management</td>
                    <td className="px-4 py-2.5 text-muted">Notion Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited pages, 7-day page history, 10 guest collaborators</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Task Management</td>
                    <td className="px-4 py-2.5 text-muted">Todoist Beginner</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">5 personal projects, 5 collaborators, 5MB uploads</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                    <td className="px-4 py-2.5 text-muted">Calendly Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">1 event type, 1 calendar connection</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Forms</td>
                    <td className="px-4 py-2.5 text-muted">Tally Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited forms, unlimited submissions, conditional logic, Tally branding</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Communication</td>
                    <td className="px-4 py-2.5 text-muted">Discord Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited messages, voice/video, screen sharing at 720p</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">PostHog Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">1M analytics events, 5K session replays, 1M feature flag requests</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Social Media</td>
                    <td className="px-4 py-2.5 text-muted">Buffer Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">3 channels, 10 posts per channel, 1 user</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Total: $0/month.</strong> Every price verified against vendor pricing pages,
              March 2026.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Best-Value Paid Solo Stack</h2>
            <p className="text-muted leading-relaxed mb-4">
              When free limits cost you time, these are the cheapest upgrades that
              actually matter for a solo operator.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool + Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Why Upgrade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14/mo</td>
                    <td className="px-4 py-2.5 text-muted">Visual pipeline, deal tracking, 3,000 deals</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                    <td className="px-4 py-2.5 text-muted">Brevo Starter</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">5,000 emails/mo, no daily limit, unlimited contacts</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo, unlimited scenarios</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">Plausible Starter</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">10K pageviews/mo, privacy-friendly, no cookies needed</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Social</td>
                    <td className="px-4 py-2.5 text-muted">Buffer Essentials (1 channel)</td>
                    <td className="px-4 py-2.5 text-muted">$6/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited posts, engagement tools, 30-day analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Total: $48.59/month.</strong> Keep Notion free, Tally free, Calendly free,
              and Discord free. Upgrade only the tools where limits cost you time or revenue.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Where Solo Operators Get Trapped</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Paying for seats you don&apos;t use</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Monday.com requires 3-seat minimum on paid plans ($12/seat/mo = $36/mo).
                  Asana free caps at 2 users. As a solo operator, tools with flat pricing
                  (Basecamp $15/mo) or single-seat pricing (Pipedrive Lite $14/seat) are better.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Enterprise CRM overkill</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Salesforce Starter Suite is $25/seat/mo &mdash; reasonable, but the implementation
                  complexity is high. HubSpot Free or Pipedrive Lite at $14/seat covers 95% of solo
                  CRM needs.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Zapier over Make at low volume</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Zapier Free gives you 100 tasks/month (two-step only). Make Free gives you 1,000
                  operations/month with 2 scenarios. For solo operators, Make&apos;s free tier stretches
                  10x further. Paid: Zapier Professional $29.99/mo vs Make Core $10.59/mo.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I really run a business on $0/month?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Yes, for early-stage businesses. HubSpot Free handles CRM, Kit free handles
                  email to 10,000 subscribers, Notion free handles docs and PM, and Tally free
                  handles forms. You hit limits when you need automations, remove branding, or
                  exceed subscriber caps.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What should I pay for first?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Automation (Make Core at $10.59/mo) is typically the highest-ROI first upgrade.
                  It eliminates repetitive tasks that cost you hours. After that, CRM
                  (Pipedrive Lite at $14/mo) if you manage deals.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">When do I outgrow the solo stack?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  When you hire your first employee or contractor who needs access. Most free tiers
                  cap at 1&ndash;3 users. See our 5-person team cost guide for the next level.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "saas-costs-for-5-person-team",
              "cheapest-saas-stack-2026",
              "solo-founder-stack",
              "best-free-saas-tools-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
