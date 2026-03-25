import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Slack Pricing Explained: What 90-Day History Actually Costs You",
  description:
    "Slack pricing decoded: Free (90-day history, 10 integrations), Pro $8.75/user/mo, Business+ $18/user/mo, Enterprise Grid custom. The knowledge loss calculation and when to pay.",
};

export default function SlackPricingExplainedPage() {
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
              Slack Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Slack Pricing Explained: What 90-Day History Actually Costs You
          </h1>
          <p className="text-lg text-muted">
            Slack&apos;s free tier hides messages older than 90 days. That sounds like a minor limitation until your team needs to reference a decision made 4 months ago and the message is gone. This guide breaks down every tier, the real cost of the free tier&apos;s knowledge loss, and when paying $8.75/user/month is cheaper than losing institutional memory.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Every Tier at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (per user)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per user/mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">90-day message history, 10 integrations, 1:1 video, 5GB storage</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                  <td className="px-4 py-2.5">$8.75</td>
                  <td className="px-4 py-2.5">$7.25</td>
                  <td className="px-4 py-2.5">Unlimited history, unlimited integrations, group video (50), guest access, AI summaries</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business+</td>
                  <td className="px-4 py-2.5">$18</td>
                  <td className="px-4 py-2.5">$15</td>
                  <td className="px-4 py-2.5">SSO (SAML), advanced AI, compliance exports, 99.99% SLA</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise Grid</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Unlimited workspaces, DLP, eDiscovery, HIPAA, EKM, dedicated CSM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Slack uses per-user pricing on all paid tiers. Every active member of your workspace counts as a user. Guests (people invited to specific channels from outside your org) also count toward user limits on Free but can be added at reduced cost on paid tiers.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The 90-Day History Problem</h2>
          <p className="text-muted mb-4">
            Slack Free hides messages older than 90 days. They&apos;re not deleted &mdash; they&apos;re inaccessible. If you upgrade later, they come back. But while you&apos;re on Free, here&apos;s what this actually costs:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Lost decisions.</strong> A pricing decision made in January is invisible by April. Someone asks &quot;why did we choose X?&quot; and nobody can find the conversation.</li>
            <li><strong className="text-foreground">Lost links and references.</strong> That useful article someone shared? That API documentation link? Gone after 90 days.</li>
            <li><strong className="text-foreground">Lost onboarding context.</strong> New hires can&apos;t read historical discussions to understand how the team works. They have to ask questions that were already answered.</li>
            <li><strong className="text-foreground">Lost accountability.</strong> Who agreed to what? When was it decided? Without message history, there&apos;s no record.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The knowledge loss calculation</p>
            <p className="text-sm text-muted">
              If your team of 10 spends an average of 30 minutes per week searching for information that was in Slack but is now hidden, that&apos;s 5 hours per week of lost productivity. At a conservative $40/hour, that&apos;s $200/week or $800/month in lost time. Slack Pro for 10 users costs $87.50/month. The math is rarely close.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The 10-Integration Limit</h2>
          <p className="text-muted mb-4">
            Slack Free limits you to 10 app integrations. That sounds like enough until you count: Google Drive (1), Zoom (2), GitHub (3), Jira (4), Google Calendar (5), Notion (6), Figma (7), HubSpot (8), Zapier (9), Loom (10). You&apos;re at the limit with a basic tech stack.
          </p>
          <p className="text-muted mb-4">
            On Slack Pro, integrations are unlimited. The 2,600+ app marketplace opens fully, and the integration limit stops being a constraint.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Tier Adds</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">Free &mdash; Functional but Fragile</h3>
          <p className="text-muted mb-4">
            Channels, direct messages, 1:1 voice/video calls, threads, and basic file sharing at $0. For a team of 2&ndash;5 people working closely who don&apos;t need long-term message history or many integrations, Free works.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Pro ($8.75/user/mo) &mdash; The Standard</h3>
          <p className="text-muted mb-4">
            Pro removes the 90-day limit (unlimited message history), unlocks all integrations, adds group video calls (up to 50), Slack Huddles, guest access for external collaborators, Slack AI summaries, and 10GB storage per user.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why most teams end up here:</strong> Unlimited history and unlimited integrations are table stakes for any team that relies on Slack as their communication hub. Pro is the real starting tier for business use.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Business+ ($18/user/mo) &mdash; Compliance and SSO</h3>
          <p className="text-muted mb-4">
            Business+ adds SAML SSO, advanced Slack AI features, compliance message exports, data loss prevention tools, and a 99.99% uptime SLA. The jump from $8.75 to $18 is primarily driven by SSO and compliance needs.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When it&apos;s worth it:</strong> If your IT team requires SAML SSO for all tools, or if you need compliance exports for regulatory purposes. Most teams under 50 people don&apos;t need Business+.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Enterprise Grid (Custom) &mdash; Multi-Workspace Organizations</h3>
          <p className="text-muted mb-4">
            Enterprise Grid adds unlimited connected workspaces, enterprise key management (EKM), DLP with third-party tools, eDiscovery, HIPAA compliance, FedRAMP (GovSlack), and a dedicated customer success manager. For large organizations with multiple departments needing separate workspaces that interconnect.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Per-user pricing scales linearly.</strong> Every active user costs the full per-user rate. A 50-person team on Pro pays $437.50/month ($5,250/year). There are no volume discounts until Enterprise Grid.</li>
            <li><strong className="text-foreground">Slack AI is included in Pro and above</strong> but the AI features have usage considerations. Heavy AI summarization of long threads may consume more than expected.</li>
            <li><strong className="text-foreground">Guest access costs on paid tiers.</strong> External guests on Pro and Business+ may be billed as full users or at reduced rates depending on their access level. Single-channel guests are typically free; multi-channel guests count as paid users.</li>
            <li><strong className="text-foreground">No built-in project management.</strong> Slack is communication, not task management. You&apos;ll need a separate PM tool (Asana, ClickUp, Linear), adding to your total stack cost.</li>
            <li><strong className="text-foreground">Notification overload at scale.</strong> Large Slack workspaces (100+ people, 50+ channels) create significant notification management overhead. This is a productivity cost, not a dollar cost, but it&apos;s real.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Free</strong> &mdash; Solo or 2&ndash;3 person team where 90-day history is acceptable and you use fewer than 10 integrations. Rare in practice for real teams.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Pro ($8.75/user)</strong> &mdash; The right tier for 90% of teams. Unlimited history, unlimited integrations, and group video calls cover standard business communication needs.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Business+ ($18/user)</strong> &mdash; Required for SAML SSO compliance, message export for regulatory needs, or the 99.99% uptime SLA. Typically mid-market to enterprise companies.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Enterprise Grid (custom)</strong> &mdash; Organizations needing multiple connected workspaces, HIPAA, EKM, or FedRAMP compliance. Typically 500+ users.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Per-User Math at Team Scale</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Business+/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro/yr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$87.50</td>
                  <td className="px-4 py-2.5">$180</td>
                  <td className="px-4 py-2.5">$1,050</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$218.75</td>
                  <td className="px-4 py-2.5">$450</td>
                  <td className="px-4 py-2.5">$2,625</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$437.50</td>
                  <td className="px-4 py-2.5">$900</td>
                  <td className="px-4 py-2.5">$5,250</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">100 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$875</td>
                  <td className="px-4 py-2.5">$1,800</td>
                  <td className="px-4 py-2.5">$10,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Discord</strong> is free with unlimited message history, unlimited integrations, unlimited voice/video channels, and no user cap. For startups, communities, and teams that don&apos;t need enterprise compliance, Discord gives you more for $0 than Slack Free. The tradeoffs: no SAML SSO, no compliance exports, fewer business-specific integrations, and a less professional perception.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Microsoft Teams</strong> is included with Microsoft 365 Business Basic ($6/user/month). If your team already pays for Microsoft 365, Teams is effectively free and includes unlimited chat history, video meetings, and file storage. The tradeoff: Teams&apos; third-party app ecosystem is smaller than Slack&apos;s, and many developers and startups find its UX less intuitive.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Slack cost per user?</h3>
                <p className="text-muted">Free for basic use with 90-day message limits. Pro is $8.75/user/month ($7.25 annual). Business+ is $18/user/month ($15 annual). Enterprise Grid is custom. A 25-person team on Pro pays $218.75/month or $2,625/year.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Slack Free delete messages after 90 days?</h3>
                <p className="text-muted">No, messages are hidden, not deleted. They become inaccessible on the Free plan but are preserved. If you upgrade to Pro or higher, all historical messages become visible again. However, while on Free, you cannot search for or view messages older than 90 days.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Slack worth paying for?</h3>
                <p className="text-muted">For teams of 5+ people, almost always yes. The knowledge loss from 90-day history limits and the 10-integration cap create real productivity costs that typically exceed $8.75/user/month. For teams of 2&ndash;3 people with simple needs, Free may be sufficient.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Slack vs Discord: which is better for teams?</h3>
                <p className="text-muted">Slack is better for business teams that need SSO, compliance exports, and deep SaaS integrations (Salesforce, Jira, HubSpot). Discord is better for startups and communities that want unlimited free features, voice channels, and don&apos;t need enterprise compliance. Many startups use Discord until they hit 20&ndash;50 employees, then switch to Slack.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["slack", "discord", "microsoft-teams"]}
            comparisons={["slack-vs-discord"]}
            guides={["when-slack-free-costs-you", "discord-vs-slack-for-communities"]}
          />
        </div>
      </article>
    </>
  );
}
