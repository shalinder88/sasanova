import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "The Free Tier Limits That Actually Matter (And the Ones That Don't)",
  description:
    "HubSpot Free: 2,000 email sends/mo matters. Notion Free: 7-day history rarely matters. ClickUp Free: 60MB storage matters fast. Across 15+ tools, which free tier limits hit first and which are irrelevant.",
};

export default function FreeTierLimitsThatMatter() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Free Tier Limits That Matter</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Feature Deep-Dive</span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Free Tier Limits That Actually Matter (And the Ones That Don&apos;t)
          </h1>
          <p className="text-lg text-muted">
            Every SaaS tool advertises a free plan. Few explain which limits will force you to upgrade in weeks versus years. Here&apos;s a cross-category analysis of free tier limits from tools.ts data &mdash; which ones hit first, which are irrelevant, and what the upgrade costs when you hit the wall.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Limits That Hit Fast ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Limits That Hit Fast (Weeks to Months)</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Limit</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Why It Matters</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Upgrade Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Mailchimp Free</td>
                  <td className="px-4 py-2.5 text-muted">250 contacts</td>
                  <td className="px-4 py-2.5 text-muted">Hit within first week if you import any existing list</td>
                  <td className="px-4 py-2.5 text-muted">$13/mo Essentials (500 contacts)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">ClickUp Free</td>
                  <td className="px-4 py-2.5 text-muted">60MB storage</td>
                  <td className="px-4 py-2.5 text-muted">Filled within weeks with any file attachments</td>
                  <td className="px-4 py-2.5 text-muted">$10/member/mo Unlimited</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Zapier Free</td>
                  <td className="px-4 py-2.5 text-muted">100 tasks/mo, 2-step only</td>
                  <td className="px-4 py-2.5 text-muted">Multi-step workflows need paid. 100 tasks is ~3/day.</td>
                  <td className="px-4 py-2.5 text-muted">$29.99/mo Professional</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Slack Free</td>
                  <td className="px-4 py-2.5 text-muted">90-day message history</td>
                  <td className="px-4 py-2.5 text-muted">Lose institutional knowledge every 3 months</td>
                  <td className="px-4 py-2.5 text-muted">$8.75/user/mo Pro</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Asana Personal</td>
                  <td className="px-4 py-2.5 text-muted">2 users maximum</td>
                  <td className="px-4 py-2.5 text-muted">Adding a 3rd team member requires paid plan</td>
                  <td className="px-4 py-2.5 text-muted">$13.49/seat/mo Starter</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Monday Free</td>
                  <td className="px-4 py-2.5 text-muted">2 seats, 3 boards</td>
                  <td className="px-4 py-2.5 text-muted">3 boards is almost nothing for any real project</td>
                  <td className="px-4 py-2.5 text-muted">$12/seat/mo Basic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Make Free</td>
                  <td className="px-4 py-2.5 text-muted">1,000 ops/mo, 2 scenarios</td>
                  <td className="px-4 py-2.5 text-muted">2 active scenarios limits you to 2 workflows</td>
                  <td className="px-4 py-2.5 text-muted">$10.59/mo Core</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Limits That Rarely Matter ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Limits That Rarely Matter (Months to Never)</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Limit</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Why It Rarely Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Notion Free</td>
                  <td className="px-4 py-2.5 text-muted">7-day page history</td>
                  <td className="px-4 py-2.5 text-muted">Most users never need to restore pages older than 7 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">HubSpot Free</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot branding on forms/emails</td>
                  <td className="px-4 py-2.5 text-muted">Small teams often don&apos;t care about branding</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Kit Newsletter</td>
                  <td className="px-4 py-2.5 text-muted">No advanced automations</td>
                  <td className="px-4 py-2.5 text-muted">10,000 subscribers with unlimited sends is generous for newsletters</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">beehiiv Launch</td>
                  <td className="px-4 py-2.5 text-muted">2,500 subscriber cap</td>
                  <td className="px-4 py-2.5 text-muted">Takes months to hit 2,500 for most new newsletters</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Linear Free</td>
                  <td className="px-4 py-2.5 text-muted">250 issues</td>
                  <td className="px-4 py-2.5 text-muted">250 active issues is enough for months of development</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">PostHog Free</td>
                  <td className="px-4 py-2.5 text-muted">1M events, 5K replays</td>
                  <td className="px-4 py-2.5 text-muted">Most sites under 50K visitors never exceed 1M events</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Grammarly Free</td>
                  <td className="px-4 py-2.5 text-muted">100 AI prompts/month</td>
                  <td className="px-4 py-2.5 text-muted">Most users use Grammarly for grammar, not AI generation</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── The Real Upgrade Triggers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The 5 Universal Upgrade Triggers</h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Team size:</strong> Asana (3rd user), Monday (3rd user), Slack (11th integration). Adding people forces upgrades faster than features do.</li>
            <li><strong className="text-foreground">Storage:</strong> ClickUp (60MB), Notion (5MB uploads on Free). File-heavy teams hit this in weeks.</li>
            <li><strong className="text-foreground">Automation:</strong> Zapier (100 tasks/mo), Make (2 scenarios). Any serious workflow exceeds free limits quickly.</li>
            <li><strong className="text-foreground">Contact/subscriber volume:</strong> Mailchimp (250), beehiiv (2,500), Kit (10,000 but no automation). Growth makes free tiers untenable.</li>
            <li><strong className="text-foreground">History/retention:</strong> Slack (90 days), Notion (7 days). The cost of lost information is invisible but real.</li>
          </ol>

          {/* ── Best Free Tiers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Genuinely Best Free Tiers</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">HubSpot Free CRM:</strong> Unlimited contacts, deal pipeline, email logging, forms, live chat. The limit that matters is 2,000 email sends/mo.</li>
            <li><strong className="text-foreground">PostHog Free:</strong> 1M analytics events, 5K session replays, 1M feature flag requests, unlimited team members. Absurdly generous.</li>
            <li><strong className="text-foreground">Kit Newsletter:</strong> 10,000 subscribers with unlimited sends. No automation, but the subscriber limit is 40x Mailchimp Free&apos;s 250.</li>
            <li><strong className="text-foreground">Notion Free:</strong> Unlimited pages for individuals. The 7-day history is the only meaningful limit.</li>
            <li><strong className="text-foreground">n8n Community:</strong> Free, self-hosted, unlimited executions. The cost is your server ($5&ndash;$20/mo) and time.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Which free tier should I start with if I&apos;m building a business from scratch?</h3>
          <p className="text-muted mb-4">
            HubSpot Free (CRM) + Kit Newsletter (email, 10K subscribers free) + Notion Free (docs/PM) + Make Free (2 automations) + PostHog Free (analytics). Total: $0/mo. This stack handles CRM, email, project management, basic automation, and analytics for months.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">What&apos;s the first free tier limit most people hit?</h3>
          <p className="text-muted mb-4">
            Team size. Adding a 3rd person to Asana or Monday forces an upgrade to $13.49/seat/mo or $12/seat/mo respectively. For solo operators, contact limits (Mailchimp 250, beehiiv 2,500) or automation limits (Zapier 100 tasks) hit first.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Are free tiers just sales funnels?</h3>
          <p className="text-muted mb-4">
            Some are genuinely useful (HubSpot, PostHog, Kit, Notion). Others are essentially demos with crippling limits (Mailchimp 250 contacts, Monday 3 boards). The difference: useful free tiers let you accomplish real work for months. Demo free tiers force upgrades within days.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "best-free-tools-startups",
            "how-much-should-software-cost",
            "when-free-crm-costs-more",
            "saas-pricing-traps-2026",
          ]}
        />
      </article>
    </>
  );
}
