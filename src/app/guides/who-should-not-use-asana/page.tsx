import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Asana (And What to Use Instead)",
  description:
    "Asana is great for structured teams — but its free tier now only supports 2 users and it's overkill for solo operators. Here are 4 situations where Asana is the wrong choice.",
};

export default function WhoShouldNotUseAsana() {
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
              Who Should NOT Use Asana
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
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use Asana (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            Asana is one of the most polished project management tools on the market. It&apos;s also increasingly expensive, with a free tier that now caps at just 2 users. Here are the situations where Asana is the wrong fit &mdash; and what to use instead.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              Asana is built for structured teams of 5&ndash;50 people who want clean task management, timelines, and workflow automation. If you&apos;re a solo founder, need docs and PM in one tool, or are watching your budget closely, Asana is not the right choice. The Personal (free) plan only supports 2 users with basic views.
            </p>
          </div>

          {/* ── Case 1: Solo Founders ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Solo Founders and One-Person Businesses</h2>
          <p className="text-muted mb-4">
            Asana&apos;s Personal plan is free for up to 2 users with unlimited tasks and projects &mdash; but only list and board views. No timeline, no workflow builder, no forms, no dashboards. For a solo founder, Asana&apos;s structure (projects, sections, tasks, subtasks) adds overhead without proportional benefit.
          </p>
          <p className="text-muted mb-4">
            Todoist Pro at $7/month gives a solo operator everything they need: 300 projects, natural language task entry, reminders, calendar view, and a mobile app that loads instantly. It&apos;s built for individuals, not teams, and the difference shows in every interaction.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Todoist Pro</strong> &mdash; $7/month (flat, not per seat). 300 projects, natural language input, reminders, calendar layout. Purpose-built for individual task management. <Link href="/tools/todoist" className="text-accent hover:underline">See Todoist review</Link></li>
              <li><strong className="text-foreground">Notion Free</strong> &mdash; $0 for unlimited pages, 7-day history, 10 guest collaborators. Tasks, docs, and wiki in one workspace. More flexible than Asana for solo operators who also need notes and docs. <Link href="/tools/notion" className="text-accent hover:underline">See Notion review</Link></li>
            </ul>
          </div>

          {/* ── Case 2: Docs + PM in One ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Teams Wanting Docs and PM in One Tool</h2>
          <p className="text-muted mb-4">
            Asana is a pure project management tool. It has task descriptions and comments, but no wiki, no document editor, no knowledge base. If your team needs to write meeting notes, maintain a company wiki, and manage projects in the same tool, you&apos;ll need Asana plus a separate docs tool (Notion, Confluence, Google Docs), which means paying for and maintaining two platforms.
          </p>
          <p className="text-muted mb-4">
            Notion Plus at $12/seat/month ($10/seat/month annual) combines docs, wikis, databases, and project management in one workspace. You sacrifice Asana&apos;s dedicated PM features (native timeline, resource management, goals) but gain a single tool for everything. For a 5-person team: Asana Starter at $13.49/seat = $67.45/month. Notion Plus at $12/seat = $60/month, and it includes docs.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Notion Plus</strong> &mdash; $12/seat/month. Tasks, docs, wikis, and databases in one workspace. Less PM-specific than Asana but eliminates the need for a separate docs tool. <Link href="/tools/notion" className="text-accent hover:underline">See Notion review</Link></li>
              <li><strong className="text-foreground">ClickUp Unlimited</strong> &mdash; $10/seat/month ($7/seat/month annual). Tasks, docs, chat, whiteboards, and goals in one platform. More features than Asana at a lower price, though with a steeper learning curve. <Link href="/tools/clickup" className="text-accent hover:underline">See ClickUp review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">5-Seat Monthly Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Includes Docs?</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">PM Strength</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Asana Starter</td>
                  <td className="px-4 py-2.5">$67.45/mo</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">Strong (timeline, workflows)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                  <td className="px-4 py-2.5">$60/mo</td>
                  <td className="px-4 py-2.5">Yes</td>
                  <td className="px-4 py-2.5">Moderate (databases)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                  <td className="px-4 py-2.5">$50/mo</td>
                  <td className="px-4 py-2.5">Yes</td>
                  <td className="px-4 py-2.5">Strong (Gantt, goals, sprints)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 3: Budget-Conscious Teams ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Budget-Conscious Teams of 3&ndash;10 People</h2>
          <p className="text-muted mb-4">
            Asana&apos;s free Personal plan now only supports 2 users. The moment you add a third person, you need Starter at $13.49/seat/month. For a 5-person team, that&apos;s $67.45/month for features that ClickUp includes at $50/month (Unlimited) or that Notion covers at $60/month (Plus).
          </p>
          <p className="text-muted mb-4">
            If you need Advanced features (portfolios, goals, custom rules, approvals), the jump is to $30.49/seat/month &mdash; that&apos;s $152.45/month for 5 people. At that price, ClickUp Business ($19/seat = $95/month) gives you more features for less money.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">ClickUp Unlimited</strong> &mdash; $10/seat/month. Unlimited storage, integrations, dashboards, Gantt charts. Free tier supports unlimited members. <Link href="/tools/clickup" className="text-accent hover:underline">See ClickUp review</Link></li>
              <li><strong className="text-foreground">Monday.com Basic</strong> &mdash; $12/seat/month ($9/seat/month annual). Unlimited boards, 5GB storage, visual board interface. Minimum 3 seats on paid plans. <Link href="/tools/monday" className="text-accent hover:underline">See Monday.com review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Need Maximum Customization ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Teams That Need Maximum Customization</h2>
          <p className="text-muted mb-4">
            Asana is opinionated by design &mdash; and that&apos;s usually a feature. But if your workflow doesn&apos;t fit Asana&apos;s model (list, board, timeline, calendar views with tasks and subtasks), you&apos;ll fight the tool. Asana doesn&apos;t have mind maps, whiteboards, time tracking (built-in), or the level of custom field types that ClickUp offers.
          </p>
          <p className="text-muted mb-4">
            ClickUp has 15+ views including mind maps, whiteboards, and embedded docs. It scores a 10 out of 10 on feature power in our testing (vs Asana&apos;s 7). If your team needs a highly customized workspace, ClickUp&apos;s flexibility is unmatched at its price point.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">ClickUp Unlimited</strong> &mdash; $10/seat/month. Maximum feature density with 15+ views, custom fields, and deep automation. Trade simplicity for flexibility. <Link href="/tools/clickup" className="text-accent hover:underline">See ClickUp review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Asana IS the Right Choice</h2>
          <p className="text-muted mb-4">
            Asana is the right choice for <strong className="text-foreground">marketing, operations, and product teams of 5&ndash;50 people who want a clean, structured PM tool that guides their workflow instead of requiring them to build one from scratch.</strong>
          </p>
          <p className="text-muted mb-4">
            Asana&apos;s ease of use (8/10) means higher team adoption than ClickUp (5/10). The Starter plan at $13.49/seat/month includes timeline, workflow builder, and forms. For teams that value &ldquo;it just works&rdquo; over &ldquo;it does everything,&rdquo; Asana&apos;s opinionated approach saves time in the long run.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many users does Asana&apos;s free plan support?</h3>
                <p className="text-muted">The Personal (free) plan supports up to 2 users with unlimited tasks and projects. It includes list and board views only &mdash; no timeline, no workflow builder, no forms.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Asana cheaper or more expensive than ClickUp?</h3>
                <p className="text-muted">ClickUp is cheaper at every paid tier. ClickUp Unlimited ($10/seat/month) vs Asana Starter ($13.49/seat/month). ClickUp Business ($19/seat/month) vs Asana Advanced ($30.49/seat/month). ClickUp also has a more generous free tier (unlimited members vs 2 users).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can Asana handle docs and wiki?</h3>
                <p className="text-muted">No. Asana has task descriptions and comments, but no document editor, wiki, or knowledge base features. You&apos;ll need a separate tool like Notion or Google Docs for documentation.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is it hard to switch away from Asana?</h3>
                <p className="text-muted">Moderately. Tasks and projects export via CSV/JSON, but workflow automations, goal tracking, and portfolio structures don&apos;t transfer. Migration difficulty increases the longer you use Asana&apos;s advanced features.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["asana", "clickup", "notion", "todoist", "monday"]}
          comparisons={["asana-vs-clickup", "asana-vs-notion", "asana-vs-monday"]}
          guides={["project-management-small-team", "notion-vs-clickup-vs-asana"]}
        />
      </article>
    </>
  );
}
