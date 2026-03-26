import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every Free Tier Change in 2026 (Running Tracker)",
  description:
    "A running list of every SaaS free tier change in 2026. Mailchimp (250 contacts), Asana (2 users), Loom (25 videos), Slack (90-day history). Which tools tightened, which expanded. Updated as changes happen.",
};

export default function SaasFreeTierChanges2026Page() {
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
              Free Tier Changes 2026
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Competitive Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Every Free Tier Change in 2026 (Running Tracker)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Free tiers are the most unstable part of SaaS pricing. They get tightened without
            warning, often buried in changelog entries. This page tracks every significant free
            tier change across the tools we cover &mdash; what changed, when, and what your
            alternatives are.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-accent font-semibold">Living document</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Current Free Tier Limits (March 2026)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Limits</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="bg-red-50 dark:bg-red-900/10"><td className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</td><td className="px-4 py-2.5 text-muted">Email</td><td className="px-4 py-2.5 text-muted">250 contacts, 500 sends/mo</td><td className="px-4 py-2.5 text-accent font-semibold">Tightened</td></tr>
                  <tr className="bg-red-50 dark:bg-red-900/10"><td className="px-4 py-2.5 font-semibold text-foreground">Asana</td><td className="px-4 py-2.5 text-muted">PM</td><td className="px-4 py-2.5 text-muted">2 users, unlimited tasks</td><td className="px-4 py-2.5 text-accent font-semibold">Tightened</td></tr>
                  <tr className="bg-red-50 dark:bg-red-900/10"><td className="px-4 py-2.5 font-semibold text-foreground">Loom</td><td className="px-4 py-2.5 text-muted">Video</td><td className="px-4 py-2.5 text-muted">25 videos/person, 5-min recordings</td><td className="px-4 py-2.5 text-accent font-semibold">Tightened</td></tr>
                  <tr className="bg-red-50 dark:bg-red-900/10"><td className="px-4 py-2.5 font-semibold text-foreground">Slack</td><td className="px-4 py-2.5 text-muted">Chat</td><td className="px-4 py-2.5 text-muted">90-day history, 10 integrations</td><td className="px-4 py-2.5 text-accent font-semibold">Tightened</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Zapier</td><td className="px-4 py-2.5 text-muted">Automation</td><td className="px-4 py-2.5 text-muted">100 tasks/mo, 2-step only</td><td className="px-4 py-2.5 text-muted">Stable</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Make</td><td className="px-4 py-2.5 text-muted">Automation</td><td className="px-4 py-2.5 text-muted">1,000 ops/mo, 2 scenarios</td><td className="px-4 py-2.5 text-muted">Stable</td></tr>
                  <tr className="bg-green-50 dark:bg-green-900/10"><td className="px-4 py-2.5 text-muted">beehiiv</td><td className="px-4 py-2.5 text-muted">Newsletter</td><td className="px-4 py-2.5 text-muted">2,500 subscribers, unlimited sends</td><td className="px-4 py-2.5 text-green-600 font-semibold">Generous</td></tr>
                  <tr className="bg-green-50 dark:bg-green-900/10"><td className="px-4 py-2.5 text-muted">Kit (ConvertKit)</td><td className="px-4 py-2.5 text-muted">Email</td><td className="px-4 py-2.5 text-muted">10,000 subscribers, unlimited sends</td><td className="px-4 py-2.5 text-green-600 font-semibold">Generous</td></tr>
                  <tr className="bg-green-50 dark:bg-green-900/10"><td className="px-4 py-2.5 text-muted">Brevo</td><td className="px-4 py-2.5 text-muted">Email</td><td className="px-4 py-2.5 text-muted">100K contacts, 300 emails/day</td><td className="px-4 py-2.5 text-green-600 font-semibold">Generous</td></tr>
                  <tr className="bg-green-50 dark:bg-green-900/10"><td className="px-4 py-2.5 text-muted">HubSpot CRM</td><td className="px-4 py-2.5 text-muted">CRM</td><td className="px-4 py-2.5 text-muted">Unlimited contacts, 2K emails/mo</td><td className="px-4 py-2.5 text-green-600 font-semibold">Generous</td></tr>
                  <tr className="bg-green-50 dark:bg-green-900/10"><td className="px-4 py-2.5 text-muted">n8n</td><td className="px-4 py-2.5 text-muted">Automation</td><td className="px-4 py-2.5 text-muted">Unlimited (self-hosted)</td><td className="px-4 py-2.5 text-green-600 font-semibold">Generous</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Freshsales</td><td className="px-4 py-2.5 text-muted">CRM</td><td className="px-4 py-2.5 text-muted">3 users, basic CRM</td><td className="px-4 py-2.5 text-muted">Stable</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Zoho CRM</td><td className="px-4 py-2.5 text-muted">CRM</td><td className="px-4 py-2.5 text-muted">3 users, 5K records</td><td className="px-4 py-2.5 text-muted">Stable</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Attio</td><td className="px-4 py-2.5 text-muted">CRM</td><td className="px-4 py-2.5 text-muted">3 seats, 50K records</td><td className="px-4 py-2.5 text-muted">Stable</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Bardeen</td><td className="px-4 py-2.5 text-muted">Automation</td><td className="px-4 py-2.5 text-muted">100 credits/mo</td><td className="px-4 py-2.5 text-muted">Stable (but paid jumped to $99)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Tightened Tiers: What Changed and Why</h2>

            <h3 className="text-lg font-semibold mb-2 mt-6">Mailchimp: 87.5% Contact Reduction Since 2019</h3>
            <p className="text-muted leading-relaxed mb-4">
              Mailchimp&apos;s free tier trajectory: 2,000 contacts (2019) &rarr; 500 contacts
              (2023) &rarr; 250 contacts (2024). Sends went from 10,000/month to 1,000/month to
              500/month. At 250 contacts and 500 sends, the free tier cannot sustain even a small
              newsletter. The Essentials plan at $13/month for 500 contacts is the real starting
              point.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Free alternative:</strong> beehiiv Launch (2,500
              subscribers, unlimited sends) or Kit Newsletter (10,000 subscribers, unlimited sends).
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-6">Asana: Down to 2 Users</h3>
            <p className="text-muted leading-relaxed mb-4">
              Asana Personal (free) now limits you to 2 users with unlimited tasks and projects
              but only list and board views. The Starter plan is $13.49/seat/month for timeline,
              workflow builder, and forms. For teams of 3+, Asana requires a paid plan.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Free alternative:</strong> ClickUp Free (unlimited
              users, limited features), Notion Free (unlimited blocks for individuals), or Trello
              Free (unlimited boards, limited power-ups).
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-6">Loom: 25 Videos with 5-Minute Cap</h3>
            <p className="text-muted leading-relaxed mb-4">
              Loom Starter restricts free users to 25 videos per person and 5-minute maximum
              recording length at 720p. Previously, the free tier was more generous. The Business
              plan at $18/seat/month removes all limits with unlimited videos, unlimited recording
              length, and 4K quality.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Free alternative:</strong> OBS (free, open-source
              screen recording) or Tella (free tier for basic recordings). No free tool fully
              replaces Loom&apos;s instant sharing and viewer analytics.
            </p>

            <h3 className="text-lg font-semibold mb-2 mt-6">Slack: 90-Day Message History</h3>
            <p className="text-muted leading-relaxed mb-4">
              Slack Free now hides messages older than 90 days. You also get only 10 app integrations
              and 1:1 voice/video calls (no group calls). Slack Pro at $8.75/seat/month restores
              unlimited history, unlimited integrations, and group video for up to 50 people.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Free alternative:</strong> Discord (free,
              unlimited message history, unlimited users). Microsoft Teams (included with many
              Microsoft 365 plans).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Generous Tiers: Who Is Still Giving Away Value</h2>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Kit Newsletter (free, 10,000 subscribers):</strong> The
              most generous email free tier by subscriber count. Limited to basic sending &mdash;
              no automations, no integrations. But for newsletter-only use cases, 10,000
              subscribers with unlimited sends is exceptional.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Brevo Free (100,000 contacts, 300 emails/day):</strong> The
              most generous by contact storage. 300 emails/day = ~9,000/month, which is enough
              for most small businesses. The limitation is Brevo branding on emails.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">HubSpot Free (unlimited contacts, 2,000 emails/month):</strong> The
              most generous CRM free tier. Unlimited contacts with basic CRM features. The 2,000
              email limit and HubSpot branding are the main constraints.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">beehiiv Launch (2,500 subscribers, unlimited sends):</strong> Strong
              free tier for newsletter creators with website builder, custom domain, and basic
              analytics included. The main limitation is beehiiv branding.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">n8n Community (unlimited, self-hosted):</strong> The
              only truly unlimited free tier in automation. Requires Docker and server management,
              but you get unlimited executions, unlimited workflows, and full data sovereignty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Pattern: Why Free Tiers Shrink</h2>
            <p className="text-muted leading-relaxed mb-4">
              Free tiers shrink for one reason: the company&apos;s growth stage changed. In the
              growth stage, generous free tiers acquire users cheaply. In the profitability stage,
              those free users are converted or cut. The Mailchimp trajectory (2,000 &rarr; 250
              contacts over 5 years) is the template. Tools currently in their growth stage
              (beehiiv, Kit, Attio) will likely follow this pattern once growth slows and
              investor pressure shifts from user acquisition to revenue.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Self-hosted and open-source tools are the exception.</strong> Ghost
              self-hosted, n8n Community, and Cal.com Open are structurally free because the code
              is open. The company monetizes through managed hosting, not by restricting the free tier.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which free tiers are most likely to shrink next?</h3>
                <p className="text-muted">beehiiv and Kit are the most likely candidates. Both are growth-stage companies offering generous free tiers to acquire users. When they shift to profitability, expect subscriber limits to tighten or features to gate behind paid plans. This could be 12&ndash;24 months away.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I avoid free tiers entirely?</h3>
                <p className="text-muted">No. Free tiers are excellent for starting. But build your workflow so you can migrate when the free tier tightens. Export data regularly. Avoid deep customization you cannot rebuild elsewhere. Treat free tiers as temporary, not permanent.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Mailchimp Free still worth using?</h3>
                <p className="text-muted">At 250 contacts and 500 sends/month, Mailchimp Free is only useful as a demo. Kit Free (10,000 subscribers) and beehiiv Launch (2,500 subscribers) both offer dramatically more. Switch unless you specifically need Mailchimp&apos;s e-commerce integrations.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Are open-source free tiers safe from changes?</h3>
                <p className="text-muted">Self-hosted versions are permanently free because you run the software yourself. Cloud-hosted versions (n8n Cloud, Ghost Pro) can still change pricing. The safety is in the self-hosting option, not the open-source license alone.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "beehiiv", "convertkit", "brevo", "hubspot-crm", "zapier", "make", "n8n", "asana", "slack", "loom"]}
            comparisons={["mailchimp-vs-beehiiv", "beehiiv-vs-convertkit", "zapier-vs-make"]}
            guides={[
              "saas-pricing-changes-2026",
              "saas-acquisitions-impact-2026",
              "email-platform-changes-q1-2026",
              "all-email-free-tiers-compared",
              "all-crm-free-tiers-compared",
              "best-free-saas-tools-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
