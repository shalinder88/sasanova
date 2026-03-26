import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Slack Free Hides Your Messages. Here's What That Actually Costs.",
  description:
    "Slack Free limits you to 90-day message history and 10 integrations. Pro is $8.75/user/mo for unlimited history. Here's the hidden cost of losing institutional knowledge.",
};

export default function WhenSlackFreeCostsYou() {
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
              Slack Free Hides Your Messages
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
            <span className="text-[11px] text-muted">10 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Slack Free Hides Your Messages. Here&apos;s What That Actually Costs.
          </h1>
          <p className="text-lg text-muted">
            Slack Free gives you 90-day message history, 10 app integrations, and 1:1 huddles. Every 91st day, your oldest messages disappear. For teams that rely on Slack for decisions, context, and institutional knowledge, this hidden cost far exceeds $8.75/user/mo.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Slack and Discord vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">What Slack Free Actually Gives You</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">90-day message history.</strong> Messages older than 90 days are hidden (not deleted &mdash; they come back if you upgrade, but you can&apos;t search or view them on Free).</li>
            <li><strong className="text-foreground">10 app integrations.</strong> Hard limit on connected apps. Google Drive, Zoom, GitHub, and 7 others &mdash; then you&apos;re done.</li>
            <li><strong className="text-foreground">1:1 voice and video calls (huddles).</strong> One-on-one only. No group huddles.</li>
            <li><strong className="text-foreground">5GB total storage.</strong> Across the entire workspace, not per user.</li>
            <li><strong className="text-foreground">No guest access.</strong> You cannot invite external collaborators.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Slack Free</p>
            <p className="text-sm text-muted">
              You&apos;re a very small team (2&ndash;3 people) using Slack primarily for real-time chat, not as a knowledge base. You don&apos;t reference old conversations, you don&apos;t need more than 10 integrations, and your important decisions are documented elsewhere (Notion, Google Docs). For casual team chat, Slack Free works.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Hidden Cost: Losing Institutional Knowledge</h2>
          <p className="text-muted mb-4">
            The 90-day message history limit sounds manageable until you need to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Find a decision from 4 months ago.</strong> &ldquo;Why did we choose vendor X?&rdquo; &mdash; that conversation is gone.</li>
            <li><strong className="text-foreground">Onboard a new team member.</strong> They can&apos;t read any channel history older than 90 days. Context that took months to build vanishes.</li>
            <li><strong className="text-foreground">Debug a recurring issue.</strong> &ldquo;Didn&apos;t we fix this last quarter?&rdquo; &mdash; the thread with the solution is hidden.</li>
            <li><strong className="text-foreground">Reference a client conversation.</strong> Shared files, links, and context from client discussions disappear on a rolling 90-day basis.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The time cost</p>
            <p className="text-sm text-muted">
              If your team spends 30 minutes per week re-finding information that was in old Slack messages, that&apos;s 26 hours/year per person. At $50/hour, that&apos;s $1,300/year in lost productivity &mdash; per team member. Slack Pro for 5 users costs $525/year ($8.75 &times; 5 &times; 12). The math is clear.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Slack Pro: What $8.75/User/Mo Unlocks</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro ($8.75/user/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Message history</td>
                  <td className="px-4 py-2.5 text-red-400">90 days</td>
                  <td className="px-4 py-2.5 text-green-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">App integrations</td>
                  <td className="px-4 py-2.5 text-red-400">10</td>
                  <td className="px-4 py-2.5 text-green-400">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Huddles</td>
                  <td className="px-4 py-2.5">1:1 only</td>
                  <td className="px-4 py-2.5 text-green-400">Group (up to 50)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Guest access</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">AI summaries</td>
                  <td className="px-4 py-2.5 text-red-400">No</td>
                  <td className="px-4 py-2.5 text-green-400">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade: The Exact Triggers</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Slack Pro when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>Your team references old conversations more than once a week.</li>
              <li>You&apos;ve hit the 10 integration limit and need more connected apps.</li>
              <li>You need group huddles (video calls with 3+ people inside Slack).</li>
              <li>You&apos;re onboarding new team members who need channel history context.</li>
              <li>You work with external collaborators who need guest access.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Per-Seat Math</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Business+ Monthly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                  <td className="px-4 py-2.5">$43.75/mo</td>
                  <td className="px-4 py-2.5">$435/yr</td>
                  <td className="px-4 py-2.5">$90/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                  <td className="px-4 py-2.5">$87.50/mo</td>
                  <td className="px-4 py-2.5">$870/yr</td>
                  <td className="px-4 py-2.5">$180/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                  <td className="px-4 py-2.5">$218.75/mo</td>
                  <td className="px-4 py-2.5">$2,175/yr</td>
                  <td className="px-4 py-2.5 text-yellow-400">$450/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50 users</td>
                  <td className="px-4 py-2.5 text-yellow-400">$437.50/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">$4,350/yr</td>
                  <td className="px-4 py-2.5 text-red-400">$900/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Business+ at $15/user/mo adds SSO, advanced AI features, and compliance exports. Most teams under 25 people don&apos;t need it. Pro at $8.75/user/mo covers 90% of team needs.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Discord Free</h2>
          <p className="text-muted mb-4">
            Discord Free gives you features that Slack charges for:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Unlimited message history.</strong> Every message is permanent, searchable, and free.</li>
            <li><strong className="text-foreground">Unlimited integrations.</strong> No cap on connected bots or apps.</li>
            <li><strong className="text-foreground">Voice/video with up to 25 people.</strong> Group calls included for free.</li>
            <li><strong className="text-foreground">25MB file uploads.</strong> Per message, not total.</li>
          </ul>
          <p className="text-muted mb-4">
            Discord Nitro at $9.99/mo is optional and adds cosmetic features (500MB uploads, 4K streaming, custom emoji). For team communication, Discord Free provides more than Slack Free at $0. The tradeoff: Discord lacks business-grade integrations (Salesforce, Jira), SSO, audit logs, and enterprise compliance features. For startups and small teams that don&apos;t need those, Discord Free is genuinely better.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Are Slack Free messages deleted after 90 days?</h3>
                <p className="text-muted">No. Messages are hidden, not deleted. If you upgrade to Pro, all historical messages become visible and searchable again. Slack keeps them &mdash; they just restrict access on the Free plan.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Slack Pro worth $8.75/user/mo?</h3>
                <p className="text-muted">For any team that uses Slack as their primary communication tool, yes. Unlimited message history alone justifies the cost. The 90-day limit on Free means you lose access to decisions, context, and shared knowledge on a rolling basis. For 5 users, Pro costs $43.75/mo &mdash; less than one lost hour of productivity.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can Discord really replace Slack for a business?</h3>
                <p className="text-muted">For small teams (under 20 people) without enterprise compliance needs, yes. Discord offers unlimited messages, voice channels, and integrations for free. Many startups and open-source projects run entirely on Discord. The gaps are business-specific: no SSO, limited admin controls, no formal compliance exports.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does Slack Business+ make sense?</h3>
                <p className="text-muted">Business+ at $15/user/mo is necessary when your organization requires SSO for security compliance, needs compliance exports for regulatory reasons, or wants advanced AI features. For most teams under 50 people, Pro is sufficient.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["slack", "discord"]}
            comparisons={["slack-vs-discord"]}
            guides={["saas-pricing-traps-2026", "remote-team-communication"]}
          />
        </div>
      </article>
    </>
  );
}
