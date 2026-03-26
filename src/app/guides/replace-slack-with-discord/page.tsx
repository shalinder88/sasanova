import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Replace Slack Pro with Discord (Save $105/User/Year)",
  description:
    "Slack Pro costs $8.75/user/mo ($105/yr). Discord is free with unlimited messages and history. When Discord works as a Slack replacement, when it doesn't, and how to migrate your team.",
};

export default function ReplaceSlackWithDiscord() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/guides"
              className="hover:text-accent transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              Replace Slack Pro with Discord
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Replacement Stack
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace Slack Pro with Discord (Save $105/User/Year)
          </h1>
          <p className="text-lg text-muted">
            Slack Pro costs $8.75/user/mo &mdash; that&apos;s $105/user/year.
            For a 20-person team, you&apos;re spending $2,100/year on team chat.
            Discord offers unlimited messages, unlimited history, voice
            channels, video, and screen sharing &mdash; all for free. The
            trade-off: Discord lacks enterprise compliance, structured
            workflows, and the professional integrations Slack is known for.
            Here&apos;s when the switch makes sense and how to do it.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Price Comparison ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              The Math
            </p>
            <p className="text-sm text-muted">
              Slack Pro: <strong className="text-foreground">$8.75/user/mo</strong> ($87/user/yr annual billing, $105/user/yr monthly). Unlimited history, unlimited integrations, group video.
              <br />
              Discord Free: <strong className="text-foreground">$0/user/mo</strong>. Unlimited messages, unlimited history, voice/video (25 people), 25MB uploads, 720p streaming.
              <br />
              Savings: <strong className="text-foreground">$105/user/yr</strong> (monthly billing) or <strong className="text-foreground">$87/user/yr</strong> (annual). For a 20-person team: <strong className="text-foreground">$1,740&ndash;$2,100/yr</strong>.
            </p>
          </div>

          {/* ── Pricing Table ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Exact Pricing Comparison
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Tool
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Plan
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Per User/Month
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Annual (per user)
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Slack
                  </td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">
                    90-day history, 10 integrations, 1:1 video
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Slack
                  </td>
                  <td className="px-4 py-2.5">Pro</td>
                  <td className="px-4 py-2.5">$8.75</td>
                  <td className="px-4 py-2.5">$87</td>
                  <td className="px-4 py-2.5">
                    Unlimited history, unlimited integrations, group video (50)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Slack
                  </td>
                  <td className="px-4 py-2.5">Business+</td>
                  <td className="px-4 py-2.5">$18</td>
                  <td className="px-4 py-2.5">$180</td>
                  <td className="px-4 py-2.5">
                    SSO, compliance exports, 99.99% SLA
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Discord
                  </td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">
                    Unlimited messages/history, voice/video (25), 25MB uploads
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Discord
                  </td>
                  <td className="px-4 py-2.5">Nitro Basic</td>
                  <td className="px-4 py-2.5">$2.99</td>
                  <td className="px-4 py-2.5">$29.99</td>
                  <td className="px-4 py-2.5">
                    50MB uploads, custom emoji, custom app icons
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Discord
                  </td>
                  <td className="px-4 py-2.5">Nitro</td>
                  <td className="px-4 py-2.5">$9.99</td>
                  <td className="px-4 py-2.5">$99.99</td>
                  <td className="px-4 py-2.5">
                    500MB uploads, 4K streaming, 2 Server Boosts
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── When Discord Works ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            When Discord Works as a Slack Replacement
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">Small startups (2&ndash;15 people).</strong>{" "}
              Discord&apos;s free tier has everything a small team needs: channels, threads, voice rooms, screen sharing. No artificial limits on history or integrations that matter at this scale.
            </li>
            <li>
              <strong className="text-foreground">Developer and open-source teams.</strong>{" "}
              Discord has strong GitHub integration via bots, community features for contributors, and voice channels for pair programming. Many open-source projects already use Discord.
            </li>
            <li>
              <strong className="text-foreground">Community-driven businesses.</strong>{" "}
              If your business blends internal team chat with external community (customers, partners, supporters), Discord&apos;s role-based permissions let you run both in one server.
            </li>
            <li>
              <strong className="text-foreground">Remote teams that value always-on voice.</strong>{" "}
              Discord&apos;s persistent voice channels (join/leave anytime without &ldquo;calling&rdquo;) create a virtual office feel that Slack huddles approximate but don&apos;t match.
            </li>
          </ul>

          {/* ── When Discord Doesn't Work ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            When Discord Does NOT Work
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">Enterprise compliance requirements.</strong>{" "}
              Discord has no SSO, no audit logs, no DLP, no eDiscovery, and no compliance exports. If your industry or clients require SOC 2 evidence for your communication tools, Discord is a non-starter.
            </li>
            <li>
              <strong className="text-foreground">Heavy integration workflows.</strong>{" "}
              Slack connects natively to 2,600+ business apps. Discord&apos;s integrations are bot-based and developer-focused. If you rely on Slack &rarr; Jira, Slack &rarr; Salesforce, or Slack Workflow Builder automations, Discord has no equivalent.
            </li>
            <li>
              <strong className="text-foreground">Client-facing communication.</strong>{" "}
              Discord&apos;s gaming origins can create perception issues with enterprise clients. Slack Connect (shared channels between organizations) has no Discord counterpart.
            </li>
          </ul>

          {/* ── What You Gain / Lose ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            What You Gain vs. What You Lose
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    What You Gain
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    What You Lose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    $105/user/yr in savings (entire cost eliminated)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    SSO, audit logs, compliance exports, DLP
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Unlimited message history on the free tier
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Slack Connect (shared channels with external orgs)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Persistent voice channels (virtual office)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Workflow Builder (no-code automations)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Built-in community features (forums, events, stages)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    2,600+ native business app integrations
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Role-based permissions for mixed internal/external use
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Professional perception with enterprise clients
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Migration Steps ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Migration Steps</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 1: Create Your Discord Server
          </h3>
          <p className="text-muted mb-4">
            Create a new Discord server (free). Set up categories and channels to
            mirror your Slack workspace structure. Use categories to group
            channels (e.g., &ldquo;Engineering,&rdquo; &ldquo;Marketing,&rdquo;
            &ldquo;General&rdquo;). Create voice channels for standup, pair
            programming, and casual conversation.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 2: Set Up Roles and Permissions
          </h3>
          <p className="text-muted mb-4">
            Create roles matching your team structure (Admin, Engineering,
            Marketing, etc.). Configure channel permissions so each team can see
            relevant channels. Discord&apos;s permission system is more granular
            than Slack&apos;s, which is both an advantage and a complexity cost.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 3: Install Essential Bots
          </h3>
          <p className="text-muted mb-4">
            Add bots to replace Slack integrations. Key bots: GitHub (PR
            notifications), a scheduling bot (standup reminders), and a webhook
            bot for custom integrations. Most business-critical Slack
            integrations can be replicated with Discord webhooks or Zapier/Make
            connections to Discord.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 4: Export and Archive Slack History
          </h3>
          <p className="text-muted mb-4">
            Export your Slack workspace data (Workspace Settings &rarr; Import/Export).
            This gives you a JSON archive of all messages. Store this archive for
            reference. Note: Discord does not support importing Slack history, so
            this is a read-only backup, not a migration.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 5: Invite Team and Run Parallel
          </h3>
          <p className="text-muted mb-4">
            Invite your team to the Discord server. Run both Slack and Discord
            in parallel for 1&ndash;2 weeks. Designate Discord as the primary
            channel and let Slack activity wind down naturally. Once the team is
            settled, cancel your Slack Pro subscription.
          </p>

          {/* ── Who Should NOT Switch ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Who Should NOT Switch
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">
                Companies with compliance or audit requirements.
              </strong>{" "}
              If you need message retention policies, eDiscovery, DLP, or SSO,
              Discord cannot provide them. This is a hard blocker for regulated
              industries, enterprise clients, and companies handling sensitive
              data.
            </li>
            <li>
              <strong className="text-foreground">
                Teams with heavy Slack Workflow Builder usage.
              </strong>{" "}
              Slack&apos;s Workflow Builder lets non-technical users create
              forms, approval flows, and automated routines. Discord has no
              equivalent. You&apos;d need external tools to replicate these
              workflows.
            </li>
            <li>
              <strong className="text-foreground">
                Organizations where Slack Connect is critical.
              </strong>{" "}
              If you share Slack channels with clients, vendors, or partners,
              there is no Discord equivalent. Client communication would need to
              move to email or a separate tool.
            </li>
            <li>
              <strong className="text-foreground">
                Large organizations (50+ people) with complex channel structures.
              </strong>{" "}
              Discord servers can get unwieldy at scale. Slack&apos;s search,
              channel management, and admin tools are more mature for large teams.
            </li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Is Discord really free for business use?
          </h3>
          <p className="text-muted mb-4">
            Yes. Discord&apos;s free tier includes unlimited messages, unlimited
            message history, voice/video calls for up to 25 people, and screen
            sharing at 720p. Nitro ($9.99/mo per user) adds larger file uploads,
            4K streaming, and cosmetic upgrades &mdash; but these are optional
            and not needed for team communication.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Won&apos;t clients think we&apos;re unprofessional?
          </h3>
          <p className="text-muted mb-4">
            It depends on your industry. In tech, gaming, crypto, and creator
            spaces, Discord is the norm. In finance, legal, healthcare, or
            enterprise B2B, Discord may raise eyebrows. The solution: use
            Discord internally and a professional tool (email, Slack Connect, or
            a client portal) for external communication.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Can I import Slack messages into Discord?
          </h3>
          <p className="text-muted mb-4">
            No. Discord does not support importing Slack message history. Export
            your Slack data and keep it as an archive. In practice, most teams
            find they rarely reference old Slack messages after 30 days.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            What about screen sharing quality?
          </h3>
          <p className="text-muted mb-4">
            Discord Free streams at 720p/30fps. Nitro upgrades this to
            1080p/60fps or 4K/30fps. Slack&apos;s screen sharing is HD on Pro.
            For most team use cases (code reviews, demos, presentations), 720p
            is sufficient. If screen quality is critical, a single Nitro
            subscription ($9.99/mo) still costs less than Slack Pro for 2+ users.
          </p>
        </div>

        {/* ── Related Links ── */}
        <RelatedLinks
          tools={["slack", "discord"]}
          comparisons={["slack-vs-discord"]}
          guides={[
            "who-should-not-use-slack",
          ]}
        />
      </article>
    </>
  );
}
