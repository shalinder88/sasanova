import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Notion vs Trello vs ClickUp: Which Free Tier Actually Works for Small Teams?",
  description:
    "Side-by-side comparison of Notion, Trello, and ClickUp free tiers with exact limits, paid upgrade prices, and honest verdicts for teams under 10 people.",
};

export default function NotionVsTrelloVsClickupForSmallTeams() {
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
              Notion vs Trello vs ClickUp Free Tiers
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Comparison
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Notion vs Trello vs ClickUp: Which Free Tier Actually Works for Small Teams?
          </h1>
          <p className="text-lg text-muted">
            All three offer free plans. All three promise unlimited something. But the limits that matter are different on each, and the upgrade prices diverge sharply. Here&apos;s what you actually get for $0 and what it costs when free stops being enough.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">The Free Tiers, Side by Side</h2>
          <p className="text-muted mb-4">
            All three tools have genuine free plans &mdash; not trials. But what &ldquo;free&rdquo; includes varies enormously.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Notion Free</h3>
          <p className="text-muted mb-4">
            Unlimited pages, 7-day page history, and 10 guest collaborators. You get the full block-based editor, databases (table, board, timeline, calendar, gallery views), wiki functionality, and the API. The meaningful limits: file uploads cap at 5MB per file, and page history only goes back 7 days. For a team of 1&ndash;5 working on docs, wikis, and lightweight project tracking, Notion Free is genuinely usable for months.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Trello Free</h3>
          <p className="text-muted mb-4">
            Unlimited cards, up to 10 boards per workspace, 1 Power-Up per board, and 10MB file uploads. That 10-board cap is the constraint that bites first. If your team uses one board per project, you can track 10 projects before hitting the wall. The 1 Power-Up per board limit means you pick one integration (calendar view, Slack sync, or custom fields) and that&apos;s it. No timeline view, no dashboard view, no table view on Free &mdash; those require Premium at $12.50/user/month.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">ClickUp Free Forever</h3>
          <p className="text-muted mb-4">
            Unlimited tasks, unlimited members, 60MB storage. That storage limit is the real constraint &mdash; 60MB total across your entire workspace fills up fast if you attach files. You get multiple views (list, board, calendar) but with limited options. The upside: unlimited members means a 10-person team can all use it without paying. The downside: limited views and basic reporting mean you&apos;ll feel the ceiling on project visibility.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Free Tier Walls Off</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">Notion: Collaboration Is the Gate</h3>
          <p className="text-muted mb-4">
            Notion Free works beautifully for individuals and tiny teams. The 10 guest collaborator limit is where it breaks for growing teams. You also lose version history beyond 7 days &mdash; if someone deletes critical content on day 8, it&apos;s gone. Custom automations are paid-only. The upgrade: Notion Plus at $12/user/month (or $10/user/month billed annually) unlocks unlimited file uploads, 30-day history, and custom automations.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Trello: Views and Power-Ups Are the Gate</h3>
          <p className="text-muted mb-4">
            Trello Free is a kanban board. That&apos;s it. If kanban is all you need, it&apos;s excellent. But the moment you want timeline views, table views, dashboards, custom fields, or more than one integration per board, you&apos;re paying. Standard at $6/user/month ($5/user/month annually) unlocks unlimited boards, custom fields, and advanced checklists. Premium at $12.50/user/month ($10/user/month annually) adds timeline, table, calendar, and dashboard views.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">ClickUp: Storage and Advanced Views Are the Gate</h3>
          <p className="text-muted mb-4">
            ClickUp gives you the most on the free tier in terms of raw task management. But 60MB of storage is almost nothing for a team that shares files. The real upgrade trigger is when you need Gantt charts, unlimited integrations, or custom dashboards. The Unlimited plan at $10/member/month ($7/member/month annually) unlocks unlimited storage, integrations, dashboards, and Gantt charts.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Paid Plan Comparison</h2>
          <p className="text-muted mb-4">
            When free stops working, here&apos;s what each tool costs for a team of 5:
          </p>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li><strong className="text-foreground">Notion Plus:</strong> $12/user/month = $60/month for 5 users ($50/month billed annually)</li>
            <li><strong className="text-foreground">Trello Standard:</strong> $6/user/month = $30/month for 5 users ($25/month billed annually)</li>
            <li><strong className="text-foreground">Trello Premium:</strong> $12.50/user/month = $62.50/month for 5 users ($50/month billed annually)</li>
            <li><strong className="text-foreground">ClickUp Unlimited:</strong> $10/member/month = $50/month for 5 users ($35/month billed annually)</li>
          </ul>
          <p className="text-muted mb-4">
            Trello Standard is the cheapest paid option, but it doesn&apos;t include the views most teams want. At the &ldquo;full features&rdquo; tier, all three cluster around $50&ndash;62.50/month for a team of 5.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Free Tier Wins for Which Team</h2>

          <h3 className="text-lg font-semibold mt-8 mb-3">Choose Notion Free If:</h3>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Your team needs docs AND project management in one place</li>
            <li>You want maximum flexibility (databases, wikis, custom views)</li>
            <li>You have 1&ndash;3 people and don&apos;t need extensive guest collaboration</li>
            <li>You&apos;re willing to invest time in setup (Notion has a learning curve)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">Choose Trello Free If:</h3>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>Your workflow fits a kanban board and nothing more</li>
            <li>You want the absolute easiest onboarding for a non-technical team</li>
            <li>10 boards and 1 Power-Up per board is genuinely enough</li>
            <li>Simple visual task tracking is the goal, not project management</li>
          </ul>

          <h3 className="text-lg font-semibold mt-8 mb-3">Choose ClickUp Free If:</h3>
          <ul className="list-disc list-inside text-muted mb-4 space-y-2">
            <li>You have a larger team (unlimited members on Free is a real advantage)</li>
            <li>You need more task management features without paying yet</li>
            <li>You don&apos;t share many files (the 60MB cap is the binding constraint)</li>
            <li>You want the most features at $0, even if the interface is busier</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Use Any of These Free Tiers</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Teams over 10 people.</strong> All three free tiers start breaking at scale. Notion caps guest collaborators at 10. Trello caps boards at 10. ClickUp caps storage at 60MB. If you have 15+ people, budget for a paid plan from day one.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Teams needing enterprise compliance.</strong> SSO, audit logs, and SCIM provisioning are Enterprise-tier features on all three platforms. Notion Enterprise, Trello Enterprise, and ClickUp Enterprise are all custom-priced. If compliance is a requirement, free tiers are not an option.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Teams that need dedicated project management.</strong> If you need resource planning, workload management, or advanced reporting, none of these free tiers will satisfy. You&apos;re looking at ClickUp Business at $19/member/month or Notion Business at $24/user/month at minimum.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes When Choosing</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Picking based on features you don&apos;t use.</strong> ClickUp has the most features. But if your team only needs kanban boards, all those features become clutter. Match the tool to your actual workflow, not the feature list.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ignoring the learning curve.</strong> Notion requires setup. You build your own system from scratch. Trello works in 5 minutes. ClickUp is somewhere in between. If your team won&apos;t invest time in configuration, Notion is the wrong choice regardless of its power.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Assuming free means temporary.</strong> Trello Free is genuinely usable long-term if you only need kanban boards. Notion Free works indefinitely for solo users and tiny teams. Don&apos;t upgrade out of anxiety &mdash; upgrade when you hit a specific, documented wall.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Not testing migration difficulty.</strong> Once you build workflows in any of these tools, switching is painful. Notion exports to Markdown/CSV but loses database relations. Trello exports to JSON. ClickUp exports to CSV/Excel. Try the free tier for 2&ndash;4 weeks before committing your whole team.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which is best for a team of 3?</h3>
                <p className="text-muted">Notion Free. You get unlimited pages, databases, and wikis for up to 10 guest collaborators. For a 3-person team doing docs and project tracking, it covers everything without paying.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which has the best free tier for just task management?</h3>
                <p className="text-muted">ClickUp Free Forever. Unlimited tasks and unlimited members with multiple views. The 60MB storage cap only matters if you attach files directly to tasks.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which is easiest to set up?</h3>
                <p className="text-muted">Trello. It scores a 10/10 for ease of use in our ratings. Create a board, add cards, start dragging. There&apos;s effectively no learning curve. Notion and ClickUp both require meaningful setup time.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What does the cheapest paid plan cost on each?</h3>
                <p className="text-muted">Trello Standard is $6/user/month. ClickUp Unlimited is $10/member/month. Notion Plus is $12/user/month. All are billed monthly; annual billing drops each by roughly 15&ndash;20%.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Notion as a project management tool?</h3>
                <p className="text-muted">Yes, but it requires setup. Notion gives you databases with board, timeline, and calendar views, but you build the project management system yourself. ClickUp and Trello are opinionated PM tools out of the box. Notion is a workspace you configure into a PM tool.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["notion", "trello", "clickup"]}
            comparisons={[]}
            guides={[
              "project-management-small-team",
              "switch-from-notion-to-clickup",
              "notion-vs-clickup-vs-asana",
              "best-free-tools-startups",
            ]}
          />
        </div>
      </article>
    </>
  );
}
