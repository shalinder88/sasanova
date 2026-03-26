import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The Complete $0/Month SaaS Stack: Every Free Tier Ranked (2026)",
  description:
    "Every tool in our database with freeTier=true, organized by category and ranked by free tier generosity. CRM, Email, Automation, PM, Analytics, Support, Scheduling, Design, Chat, and more.",
  alternates: { canonical: "https://sasanova.com/guides/complete-free-saas-stack-guide" },
};

export default function CompleteFreeStackGuidePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Complete $0/Month SaaS Stack</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Stack Building
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Complete $0/Month SaaS Stack: Every Free Tier Ranked
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            We pulled every tool with a genuine free tier from our database and organized them by category.
            No trials. No credit-card-required &ldquo;free&rdquo; plans. These are tools you can use
            indefinitely at $0/month with real functionality. Ranked by how generous the free tier actually is.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>20 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Email &amp; Newsletters</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Generosity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                    <td className="px-4 py-2.5 text-muted">10,000 subscribers, unlimited emails, no advanced automations, no integrations</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Excellent</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">Up to 100,000 contacts, 300 emails/day, Brevo branding</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Excellent</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">2,500 subscribers, unlimited sends, custom domain, website builder, beehiiv branding</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Very Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Substack</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited subscribers, unlimited sends, 10% cut of paid subscriptions</td>
                    <td className="px-4 py-2.5 text-muted">Good (revenue share)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Up to 250 contacts, 500 emails/month, 1 audience, basic templates, limited reporting</td>
                    <td className="px-4 py-2.5 text-muted">Poor</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Buttondown</td>
                    <td className="px-4 py-2.5 text-muted">100 subscribers, basic features</td>
                    <td className="px-4 py-2.5 text-muted">Minimal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Pick:</strong> Kit for newsletter growth (10K subs). Brevo for email marketing (100K contacts, 300 emails/day).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">CRM</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Generosity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot CRM</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited contacts, basic CRM features, 2,000 email sends/mo, HubSpot branding</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Excellent</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Attio</td>
                    <td className="px-4 py-2.5 text-muted">Up to 3 seats, 50,000 records, core CRM features</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Very Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-4 py-2.5 text-muted">Up to 3 users, basic lead/contact/deal management, 5,000 records</td>
                    <td className="px-4 py-2.5 text-muted">Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5 text-muted">Up to 3 users, contact management, built-in chat, email, and phone</td>
                    <td className="px-4 py-2.5 text-muted">Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Pick:</strong> HubSpot for solo founders (unlimited contacts). Zoho for small teams wanting basic automation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Automation</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Generosity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (self-hosted)</td>
                    <td className="px-4 py-2.5 text-muted">Self-hosted community edition is free and unlimited</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Excellent (if technical)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">1,000 operations/month, 2 active scenarios</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Very Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">100 tasks/month, unlimited Zaps, two-step only (single trigger + single action)</td>
                    <td className="px-4 py-2.5 text-muted">Limited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">100 credits/month, 3 active workflows</td>
                    <td className="px-4 py-2.5 text-muted">Limited</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Pick:</strong> Make for cloud users (1,000 ops, multi-step). n8n self-hosted for developers (unlimited).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Project Management &amp; Tasks</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Generosity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">60MB storage, unlimited tasks and members, limited views</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Very Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited pages for individuals, 7-day page history, 10 guest collaborators</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Very Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited cards, up to 10 boards/workspace, 1 Power-Up per board</td>
                    <td className="px-4 py-2.5 text-muted">Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Todoist</td>
                    <td className="px-4 py-2.5 text-muted">5 personal projects, 5 collaborators per project, 5MB file uploads</td>
                    <td className="px-4 py-2.5 text-muted">Good</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear</td>
                    <td className="px-4 py-2.5 text-muted">Up to 250 issues, unlimited members, all core features</td>
                    <td className="px-4 py-2.5 text-muted">Good (for dev teams)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">Up to 2 users, unlimited tasks and projects, list and board views only</td>
                    <td className="px-4 py-2.5 text-muted">Limited (2 users)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Pick:</strong> ClickUp for teams (unlimited members). Notion for docs + PM. Todoist for personal tasks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Analytics</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Generosity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PostHog</td>
                    <td className="px-4 py-2.5 text-muted">1M analytics events, 5K session replays, 1M feature flag requests, unlimited team members</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Excellent</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mixpanel</td>
                    <td className="px-4 py-2.5 text-muted">1M events/month, core analytics features, unlimited saved reports</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Excellent</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Hotjar</td>
                    <td className="px-4 py-2.5 text-muted">20K monthly sessions, unlimited heatmaps, session recordings, 1-month data retention</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Very Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong className="text-foreground">Pick:</strong> PostHog for product analytics + feature flags. Hotjar for heatmaps and UX insights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Communication, Design, Scheduling &amp; More</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best Free Pick</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Chat</td>
                    <td className="px-4 py-2.5 text-muted">Discord</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited messages, voice/video calls, screen sharing at 720p, 25MB file uploads</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Design</td>
                    <td className="px-4 py-2.5 text-muted">Canva</td>
                    <td className="px-4 py-2.5 text-muted">2M+ templates, 5GB storage, basic editor, limited AI features</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                    <td className="px-4 py-2.5 text-muted">Cal.com</td>
                    <td className="px-4 py-2.5 text-muted">1 user, unlimited event types, unlimited bookings, open source</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Forms</td>
                    <td className="px-4 py-2.5 text-muted">Tally</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited forms, unlimited submissions, conditional logic, file uploads (10MB), Tally branding</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Meeting Notes</td>
                    <td className="px-4 py-2.5 text-muted">tl;dv</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited recordings, AI meeting notes, timestamps, 5K AI credits/month</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Help Desk</td>
                    <td className="px-4 py-2.5 text-muted">Freshdesk</td>
                    <td className="px-4 py-2.5 text-muted">Up to 2 agents, email ticketing, knowledge base, basic reporting</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">AI Writing</td>
                    <td className="px-4 py-2.5 text-muted">ChatGPT / Claude</td>
                    <td className="px-4 py-2.5 text-muted">Free tiers with daily message limits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-3 text-muted leading-relaxed">
              <li><strong className="text-foreground">Using 15 free tools instead of 3 paid ones.</strong> Managing login credentials, learning interfaces, and working around limitations across 15 tools costs more in time than paying for 3 well-chosen paid tools. Focus on the 3&ndash;5 free tiers that genuinely serve your needs.</li>
              <li><strong className="text-foreground">Not exporting data regularly.</strong> Free tiers can change at any time. Mailchimp cut its free tier from 2,000 to 250 contacts. Export your data from every free tool monthly.</li>
              <li><strong className="text-foreground">Ignoring the hidden cost of free.</strong> Your time has value. If you spend 5 hours/week working around free tier limitations, that&apos;s $12,500/year at $50/hour. A $100/month paid stack saves you money if it reclaims even 2 of those hours.</li>
              <li><strong className="text-foreground">Assuming free tiers stay free.</strong> Vendors regularly reduce free tier limits. Build your workflow assuming you may need to upgrade or switch within 12 months.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I actually run a business on $0/month in software?</h3>
                <p className="text-muted">Yes, for a solo operation or very small team. The combination of HubSpot CRM (free), Kit (free newsletter), Make (free automation), ClickUp (free PM), and Cal.com (free scheduling) covers the basics. You will hit limits once you need automation, advanced reporting, or team features.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which free tools have the best upgrade path?</h3>
                <p className="text-muted">Freshsales ($11/seat/mo), Make ($10.59/mo), and Buttondown ($9/mo) have the cheapest first paid plans. HubSpot has the steepest upgrade cliff: Starter is $20/seat/mo but Professional jumps to $890/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the single most generous free tier in SaaS?</h3>
                <p className="text-muted">PostHog: 1 million analytics events, 5,000 session replays, 1 million feature flag requests, and unlimited team members. For email, Kit at 10,000 subscribers with unlimited sends. For CRM, HubSpot with unlimited contacts.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "convertkit", "make", "clickup", "posthog", "cal-com"]}
            comparisons={["zapier-vs-make", "hubspot-crm-vs-pipedrive"]}
            guides={[
              "best-free-newsletter-platform-2026",
              "best-free-crm-comparison-2026",
              "best-free-automation-tool-2026",
              "best-saas-stack-under-100",
              "best-free-saas-tools-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
