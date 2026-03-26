import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Slack (And What to Use Instead)",
  description:
    "Slack's free tier hides messages after 90 days and paid plans start at $8.75/seat/month. Here are 4 situations where Slack is the wrong choice, with free and cheaper alternatives.",
};

export default function WhoShouldNotUseSlack() {
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
              Who Should NOT Use Slack
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Slack (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            Slack is the default team messaging tool &mdash; and for many teams, it&apos;s the most expensive way to send messages. The free tier hides your message history after 90 days, and paid plans scale linearly with headcount. Here&apos;s when to skip Slack entirely.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              Slack Pro costs $8.75/seat/month for unlimited message history. For a 10-person team, that&apos;s $87.50/month just for chat. Discord gives you unlimited messages, voice channels, and video for free. If your team is small, async-heavy, or budget-conscious, Slack&apos;s per-seat pricing doesn&apos;t make sense.
            </p>
          </div>

          {/* ── Case 1: Budget Teams ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Budget-Conscious Teams Who Need Message History</h2>
          <p className="text-muted mb-4">
            Slack&apos;s free plan limits you to 90-day message history, 10 app integrations, 1:1 voice/video calls only, and 5GB total storage. After 90 days, your older messages aren&apos;t deleted &mdash; they&apos;re hidden. To see them again, upgrade to Pro at $8.75/seat/month ($7.25/seat/month annual).
          </p>
          <p className="text-muted mb-4">
            Discord Free gives you unlimited messages with full history, voice channels with up to 25 people, video, screen sharing, and no limit on integrations. For a 10-person team: Slack Pro costs $87.50/month. Discord costs $0. The difference over a year is $1,050.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Discord Free</strong> &mdash; $0. Unlimited messages, unlimited history, voice channels (25 people), video, screen sharing. Nitro at $9.99/month adds 500MB uploads and 4K streaming but is optional. <Link href="/tools/discord" className="text-accent hover:underline">See Discord review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">10-Person Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Message History</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Voice/Video</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Slack Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">90 days only</td>
                  <td className="px-4 py-2.5">1:1 only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Slack Pro</td>
                  <td className="px-4 py-2.5">$87.50/mo</td>
                  <td className="px-4 py-2.5">Unlimited</td>
                  <td className="px-4 py-2.5">Group (50 people)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Discord Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Unlimited</td>
                  <td className="px-4 py-2.5">Voice channels (25 people)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Async-Heavy Teams ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Async-Heavy Teams That Don&apos;t Need Real-Time Chat</h2>
          <p className="text-muted mb-4">
            Slack is designed for real-time messaging. Channels, threads, huddles, notifications &mdash; the entire UX pushes toward immediate responses. If your team works across time zones and values thoughtful, long-form communication over quick back-and-forth, Slack&apos;s constant notification pressure works against your culture.
          </p>
          <p className="text-muted mb-4">
            A Notion workspace (free for individuals, $12/seat/month for Plus) combined with Loom for async video replaces most of what teams use Slack for: project updates, decision discussions, and knowledge sharing. The information is organized, searchable, and doesn&apos;t scroll away in a message stream.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Notion</strong> &mdash; Free for individuals, $12/seat/month (Plus). Pages for updates, databases for project tracking, comments for discussions. Information stays organized instead of scrolling away. <Link href="/tools/notion" className="text-accent hover:underline">See Notion review</Link></li>
              <li><strong className="text-foreground">Loom</strong> &mdash; Free for up to 25 videos. Async video messages replace meetings and long Slack threads. A 3-minute Loom replaces a 15-minute synchronous conversation.</li>
            </ul>
          </div>

          {/* ── Case 3: Small Teams Under 5 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Small Teams Under 5 People</h2>
          <p className="text-muted mb-4">
            For a team of 3&ndash;4 people, Slack is a dedicated messaging app solving a problem you might not have. At that size, you can coordinate in a shared Notion workspace, a group iMessage, or a Discord server. Adding Slack means another app to check, another set of notifications, and another monthly bill if you want full message history.
          </p>
          <p className="text-muted mb-4">
            Slack Pro for 4 people is $35/month. That&apos;s $420/year for a chat app. Discord is free. A group chat is free. The question isn&apos;t whether Slack is good &mdash; it&apos;s whether the communication overhead of a tiny team justifies a dedicated tool.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Discord Free</strong> &mdash; $0. Create a private server for your team. Text channels, voice channels, screen sharing. No message limits, no integration caps at small scale. <Link href="/tools/discord" className="text-accent hover:underline">See Discord review</Link></li>
              <li><strong className="text-foreground">Microsoft Teams (Free)</strong> &mdash; $0 for up to 100 participants. Chat, video meetings, file sharing. Makes sense if your team already uses Microsoft 365.</li>
            </ul>
          </div>

          {/* ── Case 4: Large Teams Watching Costs ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Growing Teams Where Per-Seat Chat Costs Add Up</h2>
          <p className="text-muted mb-4">
            Slack&apos;s per-seat pricing is straightforward but expensive at scale. Slack Pro at $8.75/seat/month for 50 people is $437.50/month, or $5,250/year. Business+ at $15/seat/month for the same team is $9,000/year. For a chat tool.
          </p>
          <p className="text-muted mb-4">
            Discord&apos;s free tier handles teams of 50+ without any per-seat costs. The trade-off is fewer enterprise features (no SSO, no compliance exports, no SLA). If you need those enterprise features, Slack Business+ or Enterprise Grid may be unavoidable &mdash; but if you don&apos;t, the savings are substantial.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Discord Free</strong> &mdash; $0 for unlimited users. Server Boost at $4.99/month per boost adds server-wide perks (not per-user pricing). Two boosts unlock 50MB uploads and better audio. <Link href="/tools/discord" className="text-accent hover:underline">See Discord review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Slack IS the Right Choice</h2>
          <p className="text-muted mb-4">
            Slack is the right choice for <strong className="text-foreground">teams of 10&ndash;200 people that rely heavily on third-party app integrations and need a mature, enterprise-ready messaging platform.</strong>
          </p>
          <p className="text-muted mb-4">
            Slack&apos;s 2,600+ app integrations are unmatched. If your team needs GitHub notifications in channels, Salesforce deal alerts, Jira ticket updates, and Zapier automations all flowing through a single messaging platform, no other tool comes close. The Workflow Builder for internal automations is also genuinely useful for operations teams. At $8.75/seat/month (Pro), the integration ecosystem alone can justify the cost.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Slack Free delete messages after 90 days?</h3>
                <p className="text-muted">No, messages aren&apos;t deleted. They&apos;re hidden behind the 90-day limit. If you upgrade to a paid plan, your full history becomes visible again. But while you&apos;re on free, you can&apos;t search or access messages older than 90 days.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Discord professional enough for a business team?</h3>
                <p className="text-muted">Discord was originally built for gaming but is now used by thousands of startups, open-source projects, and small businesses. It lacks enterprise features (SSO, compliance exports, admin audit logs) but the core messaging, voice, and video features are solid for teams under 50.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Slack cost for a 25-person team?</h3>
                <p className="text-muted">Slack Pro at 25 seats: $218.75/month ($2,625/year). Business+ at 25 seats: $450/month ($5,400/year). Discord for the same team: $0.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate from Slack to Discord?</h3>
                <p className="text-muted">Slack message history can be exported (admin required) but won&apos;t import directly into Discord. You&apos;ll start fresh. The main migration cost is team habits &mdash; people are used to Slack&apos;s UX. Plan for a 2&ndash;4 week parallel period where both tools run simultaneously.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["slack", "discord", "notion"]}
          comparisons={["slack-vs-discord"]}
          guides={["remote-team-communication", "discord-vs-slack-for-communities"]}
        />
      </article>
    </>
  );
}
