import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "ClickUp Free Is Generous. Here's When It Stops Being Enough.",
  description:
    "ClickUp Free gives you unlimited tasks, unlimited members, and 60MB storage. Unlimited is $10/member/mo. Here are the exact triggers for upgrading.",
};

export default function WhenClickUpFreeHitsLimits() {
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
              When ClickUp Free Hits Its Limits
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
            ClickUp Free Is Generous. Here&apos;s When It Stops Being Enough.
          </h1>
          <p className="text-lg text-muted">
            ClickUp&apos;s Free Forever plan is one of the most generous free tiers in project management: unlimited tasks, unlimited members, and no time limit. But 60MB storage, limited views, and no advanced reporting create walls that growing teams hit faster than expected.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from ClickUp and Notion vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">What ClickUp Free Actually Gives You</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Unlimited tasks.</strong> No cap on the number of tasks, subtasks, or checklists you create.</li>
            <li><strong className="text-foreground">Unlimited members.</strong> You can add your entire team without hitting a user limit.</li>
            <li><strong className="text-foreground">60MB storage.</strong> Total storage across the entire workspace. This is the first wall most teams hit.</li>
            <li><strong className="text-foreground">Limited views.</strong> List, Board, and Calendar views are available. Gantt, Timeline, Mind Map, and Workload views are restricted.</li>
            <li><strong className="text-foreground">Basic integrations.</strong> A limited set of integrations compared to paid plans.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on ClickUp Free</p>
            <p className="text-sm text-muted">
              You&apos;re a solo user or small team that primarily uses task lists and Kanban boards. You don&apos;t upload files to ClickUp (you use Google Drive or Dropbox instead), you don&apos;t need Gantt charts or advanced dashboards, and you&apos;re comfortable with basic reporting. For task management alone, ClickUp Free is genuinely enough.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Exact Triggers for Upgrading</h2>

          <h3 className="text-lg font-bold mt-8 mb-3">Trigger 1: You Hit 60MB Storage</h3>
          <p className="text-muted mb-4">
            60MB is surprisingly small for a workspace. A few dozen attachments, screenshots, or design files will fill it. Once you hit the cap, you can&apos;t upload anything new. ClickUp Unlimited ($10/member/mo) gives you unlimited storage.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Trigger 2: You Need Advanced Reporting and Dashboards</h3>
          <p className="text-muted mb-4">
            Free plan dashboards are limited to basic widgets. If you need custom dashboards with sprint velocity, team workload, or time tracking reports, that requires Unlimited or Business.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Trigger 3: You Need Gantt Charts with Dependencies</h3>
          <p className="text-muted mb-4">
            Gantt view with task dependencies is an Unlimited feature. If your project planning requires visualizing dependencies and critical paths, Free won&apos;t work.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Trigger 4: You Need Integrations</h3>
          <p className="text-muted mb-4">
            Free plan integrations are limited. Unlimited unlocks the full integration catalog &mdash; Slack, GitHub, GitLab, Figma, Google Drive, and more.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">ClickUp&apos;s Paid Tiers Compared</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Upgrades</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free Forever</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">Unlimited tasks/members, 60MB storage</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Unlimited</td>
                  <td className="px-4 py-2.5">$10/member/mo</td>
                  <td className="px-4 py-2.5">$84/member/yr</td>
                  <td className="px-4 py-2.5">Unlimited storage, integrations, dashboards, Gantt charts</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                  <td className="px-4 py-2.5">$19/member/mo</td>
                  <td className="px-4 py-2.5">$144/member/yr</td>
                  <td className="px-4 py-2.5">Google SSO, advanced automations, time tracking, mind maps</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">White labeling, advanced permissions, enterprise API</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade: The Decision</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Unlimited ($10/member/mo) when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>You&apos;ve hit or are approaching the 60MB storage cap.</li>
              <li>You need Gantt charts with task dependencies for project planning.</li>
              <li>You need dashboards for reporting to stakeholders or clients.</li>
              <li>You need integrations with Slack, GitHub, or other tools.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Business ($19/member/mo) when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li>Your organization requires Google SSO for security compliance.</li>
              <li>You need advanced automations beyond Unlimited&apos;s basic set.</li>
              <li>You need native time tracking for client billing or team management.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Per-Seat Math</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Unlimited Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Unlimited Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1 member</td>
                  <td className="px-4 py-2.5">$10/mo</td>
                  <td className="px-4 py-2.5">$84/yr</td>
                  <td className="px-4 py-2.5 text-green-400">Very affordable</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 members</td>
                  <td className="px-4 py-2.5">$50/mo</td>
                  <td className="px-4 py-2.5">$420/yr</td>
                  <td className="px-4 py-2.5 text-green-400">Reasonable</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 members</td>
                  <td className="px-4 py-2.5">$100/mo</td>
                  <td className="px-4 py-2.5">$840/yr</td>
                  <td className="px-4 py-2.5 text-green-400">Good value for full PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 members</td>
                  <td className="px-4 py-2.5">$250/mo</td>
                  <td className="px-4 py-2.5">$2,100/yr</td>
                  <td className="px-4 py-2.5 text-yellow-400">Consider annual billing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Notion Free</h2>
          <p className="text-muted mb-4">
            If your primary need is docs, wikis, and lightweight project tracking (not full PM with Gantt charts and sprints), Notion Free offers unlimited pages with no storage concerns for text-based content. The tradeoff: Notion Free caps file uploads at 5MB per file and guests at 10, but for knowledge management it&apos;s hard to beat.
          </p>
          <p className="text-muted mb-4">
            When Notion&apos;s paid plan ($12/user/mo for Plus) is needed, it&apos;s only $2/user/mo more than ClickUp Unlimited. The real question is whether you need a project management tool (ClickUp) or a workspace/wiki tool (Notion).
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is ClickUp Free really free forever?</h3>
                <p className="text-muted">Yes. ClickUp&apos;s Free Forever plan does not expire. You get unlimited tasks, unlimited members, and basic views at $0 with no time limit. The limits are on storage (60MB), views, and integrations.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I work around the 60MB storage limit?</h3>
                <p className="text-muted">Yes. Store files in Google Drive, Dropbox, or another cloud storage service and link to them from ClickUp tasks. This keeps your ClickUp storage usage near zero. Many teams on Free do this indefinitely.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is ClickUp Unlimited worth $10/member/mo?</h3>
                <p className="text-muted">For teams that need full project management with Gantt charts, dashboards, and integrations, $10/member/mo is competitive. It&apos;s cheaper than Asana Premium ($10.99/member/mo) and significantly cheaper than Monday.com Standard ($12/member/mo) for comparable features.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does ClickUp charge for guests?</h3>
                <p className="text-muted">ClickUp Free allows unlimited members in the workspace. On paid plans, guest access (people with limited permissions) does not count toward your member billing.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["clickup", "notion", "asana"]}
            comparisons={["clickup-vs-notion", "clickup-vs-asana"]}
            guides={["when-notion-needs-a-paid-plan", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
