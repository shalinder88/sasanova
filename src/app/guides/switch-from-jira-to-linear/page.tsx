import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Jira to Linear: When Jira Becomes Too Heavy",
  description:
    "Why engineering teams switch from Jira to Linear, what engineers love about Linear (speed, keyboard-first UX), what PMs miss from Jira (custom workflows, roadmaps), and cost comparison.",
};

export default function SwitchJiraToLinearPage() {
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
              Jira to Linear
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Migration Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Jira to Linear: When Jira Becomes Too Heavy
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Jira is the industry standard for issue tracking. Linear is the modern
            challenger built for speed. Engineering teams switch when Jira&apos;s
            configuration complexity, slow performance, and cluttered interface start
            costing more time than they save. This guide covers what engineers love
            about Linear, what project managers miss from Jira, and the real cost math.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">

          {/* ── Why People Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Why People Switch from Jira to Linear</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Jira is slow.</strong> Page loads, searching, creating issues &mdash; Jira Cloud has performance issues that compound across hundreds of daily interactions. Linear is built as a local-first app with instant search, real-time sync, and sub-100ms response times. Engineers who spend hours in their issue tracker notice the difference immediately.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Configuration overload.</strong> Jira offers infinite customization: custom issue types, workflow transitions, permission schemes, notification schemes, screens, screen schemes, and field configurations. Most teams use a fraction of these options but maintain all the complexity. Linear is opinionated &mdash; it ships with sensible defaults that work for most engineering teams.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Keyboard-first design.</strong> Linear is designed for developers who prefer keyboard shortcuts over mouse clicks. Create issues, change status, assign, label, and navigate entirely with the keyboard. Jira has shortcuts but they feel bolted on. Linear&apos;s keyboard navigation feels native.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Modern developer experience.</strong> Linear integrates tightly with GitHub/GitLab (auto-closing issues on merge, branch naming), has first-class Slack integration, and feels like a tool built by and for engineers. Jira serves all teams (marketing, HR, operations), which dilutes the developer experience.
            </p>
          </section>

          {/* ── What Engineers Love About Linear ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What Engineers Love About Linear</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Speed.</strong> Everything in Linear is fast. Issue creation takes 2 seconds. Search results appear as you type. Views load instantly. After using Jira, this feels transformative. Engineers report spending less time managing issues and more time writing code.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">GitHub/GitLab sync.</strong> Create a branch from a Linear issue and it auto-formats the branch name. Open a PR referencing the issue and Linear updates the status. Merge the PR and the issue moves to Done. The bidirectional sync eliminates manual status updates.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Cycles (sprints without the ceremony).</strong> Linear&apos;s Cycles are streamlined sprint management. Auto-schedule issues, track velocity, and review what shipped &mdash; without Jira&apos;s sprint planning overhead. Issues not completed automatically roll to the next cycle.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Beautiful, minimal UI.</strong> Linear&apos;s interface is clean and focused. No configuration menus, no cluttered sidebars, no competing information. The aesthetic appeal matters &mdash; it makes the tool enjoyable to use daily.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Triage workflow.</strong> Linear&apos;s Triage inbox collects new issues for review before they enter the backlog. This prevents backlog pollution and ensures every issue is reviewed and prioritized before being assigned.
            </p>
          </section>

          {/* ── What PMs Miss From Jira ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What PMs Miss from Jira</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Custom workflows.</strong> Jira lets you define complex workflow transitions: In Review &rarr; QA &rarr; Staging &rarr; Production with specific conditions and validators at each step. Linear has a fixed set of statuses (Backlog, Todo, In Progress, Done, Cancelled) with limited customization. Teams with regulatory or compliance-driven workflows may find this too constraining.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Advanced roadmaps.</strong> Jira Premium ($16/user/mo) includes Advanced Roadmaps with cross-project dependencies, capacity planning, and scenario modeling. Linear has Projects and Roadmaps (on Plus, $14/user/mo) but they&apos;re less mature for complex, multi-team planning.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Reporting and dashboards.</strong> Jira&apos;s reporting (burndown charts, velocity reports, control charts, cumulative flow diagrams) and custom dashboards are deep. JQL (Jira Query Language) enables complex data queries. Linear&apos;s reporting is basic by comparison.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Atlassian ecosystem.</strong> Jira integrates seamlessly with Confluence (docs), Bitbucket (code), and the entire Atlassian Marketplace (thousands of plugins). Linear integrates with common tools but has no comparable ecosystem.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Non-engineering team usage.</strong> Jira serves marketing, HR, IT, and operations teams through Jira Service Management and custom project types. Linear is built exclusively for software development. If your company uses Jira across departments, switching engineering to Linear creates a split-tool environment.
            </p>
          </section>

          {/* ── Cost Comparison ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Cost Comparison</h2>
            <p className="text-muted mb-4">
              Monthly billing rates, verified March 2026.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Jira Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Jira Premium</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Linear Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Linear Plus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                    <td className="px-4 py-2.5">$81.50/mo</td>
                    <td className="px-4 py-2.5">$160/mo</td>
                    <td className="px-4 py-2.5">$80/mo</td>
                    <td className="px-4 py-2.5">$140/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                    <td className="px-4 py-2.5">$203.75/mo</td>
                    <td className="px-4 py-2.5">$400/mo</td>
                    <td className="px-4 py-2.5">$200/mo</td>
                    <td className="px-4 py-2.5">$350/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">50 users</td>
                    <td className="px-4 py-2.5">$407.50/mo</td>
                    <td className="px-4 py-2.5">$800/mo</td>
                    <td className="px-4 py-2.5">$400/mo</td>
                    <td className="px-4 py-2.5">$700/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Price source:</strong> Jira Standard is $8.15/user/mo, Premium is $16/user/mo. Linear Standard is $8/user/mo, Plus is $14/user/mo (all monthly billing).
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Free tiers:</strong> Jira Free supports up to 10 users with 2GB storage and Scrum/Kanban boards. Linear Free supports unlimited members with up to 250 issues. For small teams evaluating both tools, both free plans are functional.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">The real cost comparison:</strong> Per-seat prices are nearly identical. The cost savings from Linear come from reduced configuration time, faster daily workflows, and less need for a dedicated Jira admin. These are productivity gains, not direct cost savings.
            </p>
          </section>

          {/* ── Who Should NOT Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to Linear</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Organizations using Jira across multiple departments.</strong> If marketing, HR, and operations also use Jira, moving engineering to Linear creates a tool split. Cross-team visibility, shared dashboards, and linked issues between departments break.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams with complex, regulated workflows.</strong> If your development process requires specific approval gates, compliance checkpoints, or audit trails in the issue tracker, Jira&apos;s custom workflows and permission schemes handle this better than Linear&apos;s opinionated approach.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Large engineering orgs (100+ engineers).</strong> Linear works well for teams of 10&ndash;50. At 100+ engineers with multiple teams, sub-teams, and cross-project dependencies, Jira&apos;s Advanced Roadmaps and organizational hierarchy may be necessary.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams heavily invested in the Atlassian ecosystem.</strong> If you use Confluence for documentation, Bitbucket for code, and Jira for issues, the tight integration between these tools is hard to replicate. Switching to Linear means losing Confluence-Jira linking and Bitbucket integration depth.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Linear have a Jira importer?</h3>
                <p className="text-muted">Yes. Linear has a native Jira import that brings over issues, statuses, assignees, labels, and comments. Custom fields, attachments, and workflow configurations need manual setup. The import typically takes minutes for small projects, hours for large Jira instances.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can Linear handle Scrum?</h3>
                <p className="text-muted">Linear&apos;s Cycles are its version of sprints. You set a cycle duration, assign issues, and track completion. It lacks Jira&apos;s sprint planning ceremony features (story point estimation views, sprint scope change tracking) but covers the core sprint workflow.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Linear only for engineering teams?</h3>
                <p className="text-muted">Primarily, yes. Linear is designed for software development workflows. Some teams use it for design and product management, but it&apos;s not built for marketing, HR, or operations like Jira can be configured for.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How fast is Linear really?</h3>
                <p className="text-muted">Noticeably faster than Jira Cloud. Linear uses local-first architecture, meaning most interactions happen instantly without waiting for server responses. Search, navigation, and issue updates feel near-instantaneous. This is the feature engineers cite most frequently when explaining why they prefer Linear.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/switch-from-asana-to-clickup"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Asana to ClickUp</span>
                <span className="block text-xs text-muted mt-1">Another PM migration with similar trade-offs</span>
              </Link>
              <Link
                href="/tools/linear"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Linear Review</span>
                <span className="block text-xs text-muted mt-1">Full pricing, features, and honest verdict</span>
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["jira", "linear"]}
          comparisons={["jira-vs-linear"]}
          guides={["switch-from-asana-to-clickup"]}
        />
      </article>
    </>
  );
}
