import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What $20/Month Gets You in SaaS: The Definitive Budget Guide",
  description:
    "What $20/month buys across CRM, email, automation, PM, analytics, scheduling, and more. The definitive guide for budget-conscious founders. Exact verified prices.",
};

export default function What20DollarsGetsYouPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">$20/Month SaaS Guide</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Feature Availability
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What $20/Month Gets You in SaaS: The Definitive Budget Guide
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Twenty dollars is the magic number in SaaS &mdash; it&apos;s what most founders are willing
            to spend per tool without overthinking it. This guide maps exactly what $20/month buys
            in every software category, from CRM to analytics, so you can allocate a limited budget
            across the tools that matter most.
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
            <h2 className="text-xl font-bold mb-3">What $20/Month Buys in Every Category</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best Under $20</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What You Get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">Pipedrive Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Visual pipeline, 3,000 deals, 30 custom fields</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM (cheaper)</td>
                    <td className="px-4 py-2.5 text-muted">Freshsales Growth</td>
                    <td className="px-4 py-2.5 text-muted">$11/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">AI contact scoring, sequences, visual pipeline, 2K bot sessions</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">1,000 marketing contacts, remove branding, email health</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email Marketing</td>
                    <td className="px-4 py-2.5 text-muted">Brevo Standard</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">5,000 emails/mo, automation, A/B testing, advanced stats</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email (cheaper)</td>
                    <td className="px-4 py-2.5 text-muted">Mailchimp Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$13/mo</td>
                    <td className="px-4 py-2.5 text-muted">500 contacts, 5,000 sends/mo, email + chat support</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo, unlimited scenarios</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Pro</td>
                    <td className="px-4 py-2.5 text-muted">$18.82/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 ops/mo, custom functions, priority execution</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Project Management</td>
                    <td className="px-4 py-2.5 text-muted">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited uploads, 30-day history, custom automations</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PM (cheaper)</td>
                    <td className="px-4 py-2.5 text-muted">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited storage, integrations, dashboards, Gantt charts</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Communication</td>
                    <td className="px-4 py-2.5 text-muted">Slack Pro</td>
                    <td className="px-4 py-2.5 text-muted">$8.75/user/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited history, integrations, group video (50)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                    <td className="px-4 py-2.5 text-muted">Calendly Standard</td>
                    <td className="px-4 py-2.5 text-muted">$12/user/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited event types, group events, workflows</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">Plausible Starter</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">10K pageviews/mo, 3-year retention, privacy-friendly</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">Plausible Growth</td>
                    <td className="px-4 py-2.5 text-muted">$14/mo</td>
                    <td className="px-4 py-2.5 text-muted">3 sites, 3 team members, shared links, embedded dashboards</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Social Media</td>
                    <td className="px-4 py-2.5 text-muted">Buffer Essentials (3 channels)</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">3 channels, unlimited posts, engagement tools, 30-day analytics</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Newsletter</td>
                    <td className="px-4 py-2.5 text-muted">Buttondown Basic</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited subscribers, custom domain, automation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The $20/Month Total Budget Stack</h2>
            <p className="text-muted leading-relaxed mb-4">
              If your total budget is $20/month across all tools, here&apos;s the best allocation:
              Make Core ($10.59) + Plausible Starter ($9) = $19.59/month. Everything else stays
              on free tiers: HubSpot Free (CRM), Kit Free (email), Notion Free (PM), Tally Free
              (forms), Discord Free (chat), Buffer Free (social), Calendly Free (scheduling).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">What&apos;s the single best $20/month spend?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Depends on your bottleneck. For most solo founders: Make Core at $10.59/month
                  (automation saves hours) + Plausible Starter at $9/month (know your traffic).
                  For sales: Pipedrive Lite at $14/month (real pipeline management).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What can&apos;t I get for under $20?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Zapier Professional ($29.99/mo), beehiiv Scale ($49/mo), ActiveCampaign Starter
                  ($15/mo is under $20 but just barely), and Notion Business ($24/seat/mo). Enterprise
                  features (SSO, audit logs) are nowhere near $20.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "cheapest-saas-stack-2026",
              "best-saas-stack-under-100",
              "saas-costs-for-1-person-business",
              "what-you-get-for-free-in-crm",
            ]}
          />
        </div>
      </article>
    </>
  );
}
