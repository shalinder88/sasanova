import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Setting Up Communication Tools for a Remote Team of 5-50",
  description:
    "Slack vs Discord vs Teams for small remote teams. Plus Loom for async video and Notion for docs. Total stack costs at 10, 25, and 50 people.",
};

export default function RemoteTeamCommunicationGuide() {
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
            <span className="text-foreground font-medium truncate">Remote Team Communication</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Remote Work
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Setting Up Communication Tools for a Remote Team of 5&ndash;50
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2025 &middot; 13 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Remote communication stacks have a growth problem that nobody warns you about.
            At 5 people, everything works. Slack free tier, a shared Google Drive, maybe a
            Zoom link pinned in a channel. At 15 people, messages get lost. At 30, people
            start scheduling meetings to discuss things that should have been a Loom video.
            At 50, you&apos;re spending $1,000/month on tools and still can&apos;t find
            last week&apos;s decision about the pricing page.
          </p>
          <p>
            The fix isn&apos;t better tools. It&apos;s picking the right tools for your
            team size and establishing communication norms before the chaos starts. This
            guide covers the exact stack at three scales: 10, 25, and 50 people.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Slack vs Discord vs Teams: The Honest Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Slack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Discord</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Microsoft Teams</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier message history</td>
                    <td className="px-4 py-2.5">90 days</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier file storage</td>
                    <td className="px-4 py-2.5">None (90-day retention)</td>
                    <td className="px-4 py-2.5">8MB per file</td>
                    <td className="px-4 py-2.5">5GB shared</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Paid plan (per user/mo)</td>
                    <td className="px-4 py-2.5">$8.75 (Pro)</td>
                    <td className="px-4 py-2.5">$0 (Nitro optional)</td>
                    <td className="px-4 py-2.5">$4 (Essentials)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Video calls</td>
                    <td className="px-4 py-2.5">Huddles (1:1 free, group on Pro)</td>
                    <td className="px-4 py-2.5">Unlimited voice/video channels</td>
                    <td className="px-4 py-2.5">Up to 300 participants</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Integrations</td>
                    <td className="px-4 py-2.5">2,600+ (best ecosystem)</td>
                    <td className="px-4 py-2.5">Limited (bots only)</td>
                    <td className="px-4 py-2.5">Microsoft 365 deep integration</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Threads</td>
                    <td className="px-4 py-2.5">Excellent</td>
                    <td className="px-4 py-2.5">Forum channels only</td>
                    <td className="px-4 py-2.5">Decent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Search quality</td>
                    <td className="px-4 py-2.5">Very good</td>
                    <td className="px-4 py-2.5">Poor</td>
                    <td className="px-4 py-2.5">Good</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Best for</td>
                    <td className="px-4 py-2.5">Professional teams, SaaS</td>
                    <td className="px-4 py-2.5">Dev teams, communities</td>
                    <td className="px-4 py-2.5">Microsoft 365 shops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Contrarian Take: Discord Is Underrated for Small Teams</h2>
            <p>
              Most &ldquo;professional&rdquo; teams dismiss Discord because it looks like a gaming app.
              That&apos;s a mistake for teams under 15. Discord gives you unlimited message history,
              unlimited voice channels, and screen sharing &mdash; all free. Slack charges $8.75/user/month
              for comparable features.
            </p>
            <p>
              At 10 people, that&apos;s $87.50/month you&apos;re saving. Over a year, that&apos;s $1,050.
              For an early-stage startup burning cash, that matters.
            </p>
            <p>
              The real drawback isn&apos;t professionalism &mdash; it&apos;s search and integrations.
              Discord&apos;s search is genuinely bad for finding old conversations. And while Slack
              integrates with everything (Jira, GitHub, Notion, Linear, Figma), Discord&apos;s integration
              ecosystem is limited to webhooks and bots. When your team starts needing automated
              notifications from your ticketing system in your chat tool, that&apos;s when Discord stops
              being enough.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Slack Wins at 15+ People. Here&apos;s What You Actually Need.</h2>
            <p>
              Once your team crosses 15 people, three things happen: conversations get noisy, context
              gets lost, and new hires can&apos;t find anything. Slack&apos;s threading, search, and
              integration ecosystem handle all three. Here&apos;s the plan breakdown that matters:
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <div>
                <p className="text-foreground font-semibold">Slack Pro ($8.75/user/month)</p>
                <p className="mt-1">Unlimited message history, unlimited integrations, group huddles, 10GB file storage per user. This is the plan 90% of teams need. The jump from Free to Pro is the only upgrade that matters.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Slack Business+ ($12.50/user/month)</p>
                <p className="mt-1">Adds SAML SSO, data exports, and 99.99% uptime SLA. You need this at 50+ people or when compliance requires SSO. Not before.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Skip: Slack Enterprise Grid</p>
                <p className="mt-1">Custom pricing, starts around $30/user/month. Designed for companies with multiple Slack workspaces. If you have fewer than 200 people, you don&apos;t need this.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Microsoft Teams: Only If You&apos;re Already Paying for Microsoft 365</h2>
            <p>
              Teams gets a bad reputation, and some of it is deserved &mdash; the UI is cluttered,
              notifications are unreliable, and channel organization feels unintuitive. But if your
              company already pays for Microsoft 365 Business Basic ($6/user/month), Teams is included.
              Paying for Slack on top of that is throwing money away unless Slack&apos;s integration
              ecosystem is critical to your workflow.
            </p>
            <p>
              Teams is genuinely good at video calls (up to 300 participants), screen sharing, and
              document collaboration via SharePoint. It&apos;s genuinely bad at async communication,
              threading, and quick informal chat. If your team communicates primarily through documents
              and meetings, Teams works. If your team communicates primarily through chat and quick
              pings, Slack works better.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Async Layer: Loom + Notion</h2>
            <p>
              Chat is synchronous by default. People expect responses within minutes. That&apos;s
              toxic for deep work. Every remote team above 10 people needs an intentional async layer.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Paid Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Loom</td>
                    <td className="px-4 py-2.5">25 videos, 5 min max</td>
                    <td className="px-4 py-2.5">$15/user/mo (Business)</td>
                    <td className="px-4 py-2.5">Status updates, demos, code reviews, bug reports</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5">Unlimited pages, 10 guests</td>
                    <td className="px-4 py-2.5">$10/user/mo (Plus)</td>
                    <td className="px-4 py-2.5">Docs, wikis, meeting notes, project specs, decisions log</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong className="text-foreground">Loom</strong> replaces meetings that should have been
              videos. A 3-minute Loom replaces a 30-minute meeting where one person talks and everyone
              else listens. The free tier&apos;s 5-minute limit and 25 video cap makes it unusable
              for teams. Budget for the Business plan ($15/user/month) but only for people who record
              frequently &mdash; typically managers, designers, and engineers. Not everyone needs a license.
            </p>
            <p>
              <strong className="text-foreground">Notion</strong> replaces scattered Google Docs. One
              workspace, one search bar, one source of truth. The free tier works for up to 10 people
              if you don&apos;t need advanced permissions. At 15+ people, you need the Plus plan
              ($10/user/month) for unlimited file uploads, team spaces, and proper access controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Total Stack Cost at Three Scales</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 people</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">25 people</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">50 people</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Slack Pro</td>
                    <td className="px-4 py-2.5">$87.50/mo</td>
                    <td className="px-4 py-2.5">$218.75/mo</td>
                    <td className="px-4 py-2.5">$437.50/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Loom Business (50% of team)</td>
                    <td className="px-4 py-2.5">$75/mo (5 seats)</td>
                    <td className="px-4 py-2.5">$187.50/mo (12 seats)</td>
                    <td className="px-4 py-2.5">$375/mo (25 seats)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5">$100/mo</td>
                    <td className="px-4 py-2.5">$250/mo</td>
                    <td className="px-4 py-2.5">$500/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoom (optional)</td>
                    <td className="px-4 py-2.5">$0 (use Slack huddles)</td>
                    <td className="px-4 py-2.5">$13.33/mo (1 host)</td>
                    <td className="px-4 py-2.5">$13.33/mo (1 host)</td>
                  </tr>
                  <tr className="bg-surface-alt font-semibold">
                    <td className="px-4 py-2.5 text-foreground">Total</td>
                    <td className="px-4 py-2.5 text-foreground">$262.50/mo</td>
                    <td className="px-4 py-2.5 text-foreground">$669.58/mo</td>
                    <td className="px-4 py-2.5 text-foreground">$1,325.83/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Per person</td>
                    <td className="px-4 py-2.5">$26.25</td>
                    <td className="px-4 py-2.5">$26.78</td>
                    <td className="px-4 py-2.5">$26.52</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Budget alternative: Replace Slack with Discord (saves $87&ndash;$437/mo), replace Loom
              with free Loom tier + written updates ($0), and use Notion free tier at 10 people ($0).
              Minimum viable stack at 10 people: $0/month.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Budget Stack: Under $100/Month for 10 People</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Function</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Chat</td>
                    <td className="px-4 py-2.5">Discord</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Video calls</td>
                    <td className="px-4 py-2.5">Discord / Google Meet</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Async video</td>
                    <td className="px-4 py-2.5">Loom</td>
                    <td className="px-4 py-2.5">Free (25 videos, 5 min)</td>
                    <td className="px-4 py-2.5">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Docs + Wiki</td>
                    <td className="px-4 py-2.5">Notion</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                  </tr>
                  <tr className="bg-surface-alt font-semibold">
                    <td className="px-4 py-2.5 text-foreground" colSpan={3}>Total</td>
                    <td className="px-4 py-2.5 text-foreground">$0/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Yes, this works. The tradeoffs are Discord&apos;s bad search, Loom&apos;s tight video
              limits (write more, record less), and Notion free&apos;s 10-guest cap. These are
              livable constraints at 10 people. When they start causing real friction &mdash; someone
              can&apos;t find a critical conversation, Loom limits block a workflow &mdash; upgrade one
              tool at a time. Don&apos;t upgrade all at once.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Stack</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Companies with strict compliance requirements.</strong> HIPAA, SOC 2, or FedRAMP compliance limits your options to Teams (with Microsoft 365 E5) or Slack Enterprise Grid. Discord is not compliant with any enterprise security framework.</li>
              <li><strong className="text-foreground">Teams that are mostly co-located.</strong> If 80% of your team is in the same office, you don&apos;t need this stack. You need a whiteboard, a meeting room, and maybe Slack for the few remote people.</li>
              <li><strong className="text-foreground">Customer-facing teams.</strong> If your communication tool also needs to serve customers (support channels, community), evaluate Intercom, Front, or dedicated community platforms. Internal tools and customer tools shouldn&apos;t be the same product.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Defaulting to Slack without considering the cost.</strong> At 50 people, Slack Pro alone is $437.50/month ($5,250/year). If your team doesn&apos;t use integrations heavily, Discord or Teams might cover your needs for a fraction of the cost.</li>
              <li><strong className="text-foreground">Buying Loom licenses for everyone.</strong> Most team members are video consumers, not creators. Buy licenses for the 30&ndash;50% of people who actually record. Everyone else can watch for free.</li>
              <li><strong className="text-foreground">Skipping the async layer entirely.</strong> Chat-only remote teams default to real-time communication. This kills deep work, especially across time zones. Loom + Notion (or equivalent) isn&apos;t optional &mdash; it&apos;s what keeps async-first teams productive.</li>
              <li><strong className="text-foreground">Using Slack channels for documentation.</strong> Slack is for ephemeral conversation. Anything that needs to be found later belongs in Notion (or your docs tool of choice). The moment you pin something in Slack as a &ldquo;source of truth,&rdquo; you&apos;ve already lost.</li>
              <li><strong className="text-foreground">Adding tools before adding norms.</strong> No tool fixes bad communication habits. Before buying anything, establish: response time expectations, when to use chat vs video vs docs, and how decisions get documented. Tools amplify norms, good or bad.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              Budget about $25&ndash;$27 per person per month for a professional remote communication
              stack (Slack + Loom + Notion). You can cut that to $0 at 10 people with Discord and free
              tiers, but the savings stop making sense past 15 people when search and integrations
              become critical.
            </p>
            <p>
              The highest-ROI investment isn&apos;t the chat tool. It&apos;s the async layer.
              A team that replaces half its meetings with Loom videos and documents decisions
              in Notion will outperform a team with the fanciest Slack setup and no async discipline.
              Buy the norms before you buy the tools.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Discord appropriate for professional remote teams?</h3>
                <p>Yes, for teams under 15 people who prioritize budget. Discord provides unlimited message history and voice channels for free. The limitations are poor search, limited integrations, and no enterprise compliance. Tech startups and dev teams use it successfully, but it becomes inadequate as teams grow past 15 and need integration-heavy workflows.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does a full remote communication stack cost per person?</h3>
                <p>A professional stack (Slack Pro + Loom Business for half the team + Notion Plus) costs about $26&ndash;$27 per person per month, roughly consistent from 10 to 50 people. A budget stack using Discord and free tiers can run at $0 per person for teams of 10 or fewer.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use Slack or Microsoft Teams for my remote team?</h3>
                <p>If you already pay for Microsoft 365, use Teams &mdash; it&apos;s included. Teams excels at video calls and document collaboration. If you don&apos;t use Microsoft 365 and your team communicates primarily via chat, Slack is better at threading, search, and third-party integrations. Don&apos;t pay for both.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need Loom for my remote team?</h3>
                <p>If your team has more than 3 meetings per day that are mostly one person presenting, yes. Loom replaces &ldquo;this could have been an email&rdquo; meetings with 3&ndash;5 minute videos. The free tier (25 videos, 5-minute max) is too limited for teams. Budget $15/user/month for frequent recorders only &mdash; not the whole team.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
