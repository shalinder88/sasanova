import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "PM Views Compared: Kanban, Gantt, Timeline, Calendar Across 5 Tools",
  description:
    "Which PM views each tool offers at which tier. Asana locks Timeline behind Starter ($13.49/seat). ClickUp Free has boards. Monday Standard ($14/seat) adds Gantt. Linear has no Gantt. Notion has everything free.",
};

export default function ProjectManagementViewsCompared() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">PM Views Compared</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Feature Deep-Dive</span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            PM Views Compared: Kanban, Gantt, Timeline, Calendar Across 5 Tools
          </h1>
          <p className="text-lg text-muted">
            Every PM tool advertises &ldquo;multiple views.&rdquo; But which views are actually available on which tier? Asana locks Timeline behind $13.49/seat/mo. Monday locks Gantt behind $14/seat/mo. ClickUp gives you almost everything free. Here&apos;s the full comparison.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Master View Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">View Availability by Tool and Tier</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">View</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Asana</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ClickUp</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monday</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notion</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Linear</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">List / Table</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Kanban / Board</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Calendar</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">$12/seat Basic</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-muted">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Timeline / Gantt</td>
                  <td className="px-4 py-2.5 text-muted">$13.49/seat Starter</td>
                  <td className="px-4 py-2.5 text-muted">$10/seat Unlimited</td>
                  <td className="px-4 py-2.5 text-muted">$14/seat Standard</td>
                  <td className="px-4 py-2.5 text-muted">Free (timeline DB)</td>
                  <td className="px-4 py-2.5 text-muted">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Chart / Workload</td>
                  <td className="px-4 py-2.5 text-muted">$30.49/seat Advanced</td>
                  <td className="px-4 py-2.5 text-muted">$19/seat Business</td>
                  <td className="px-4 py-2.5 text-muted">$27/seat Pro</td>
                  <td className="px-4 py-2.5 text-muted">Not native</td>
                  <td className="px-4 py-2.5 text-muted">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Mind Map</td>
                  <td className="px-4 py-2.5 text-muted">Not available</td>
                  <td className="px-4 py-2.5 text-muted">$19/seat Business</td>
                  <td className="px-4 py-2.5 text-muted">Not available</td>
                  <td className="px-4 py-2.5 text-muted">Not available</td>
                  <td className="px-4 py-2.5 text-muted">Not available</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Tool by Tool ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Asana: Clean Views, Paid Timeline</h2>
          <p className="text-muted mb-4">
            Asana Personal (Free, up to 2 users) gives you list and board views. Calendar is also free. Timeline (Gantt-style) requires Starter at $13.49/seat/mo. Portfolios and Goals (cross-project tracking) require Advanced at $30.49/seat/mo. Asana&apos;s views are polished and intuitive, but the per-seat pricing for Timeline makes it expensive for larger teams.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">ClickUp: Most Views, Free Tier</h2>
          <p className="text-muted mb-4">
            ClickUp Free Forever gives you list, board, and calendar views with unlimited tasks and members. Gantt charts require Unlimited ($10/member/mo). Mind maps and advanced dashboards require Business ($19/member/mo). ClickUp offers the most view types of any PM tool, but the free tier has 60MB storage limit and the interface can feel overwhelming.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Monday.com: Colorful, Tiered Views</h2>
          <p className="text-muted mb-4">
            Monday Free (up to 2 seats) gives you table view and 3 boards. Basic ($12/seat/mo) adds unlimited boards. Standard ($14/seat/mo) unlocks Timeline, Gantt, and Calendar views. Pro ($27/seat/mo) adds chart view, time tracking, and private boards. Monday&apos;s strength is visual appeal; its weakness is the 3-seat minimum on all paid plans.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Notion: Everything Free (Sort Of)</h2>
          <p className="text-muted mb-4">
            Notion Free gives you all database views: table, board, timeline, calendar, gallery. No view is locked behind paid tiers. The catch: Notion&apos;s views are database views, not dedicated PM views. There&apos;s no Gantt chart with dependencies, no resource management, no workload balancing. You get flexibility without PM-specific power. Plus is $12/user/mo for automations and better history.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Linear: Minimal by Design</h2>
          <p className="text-muted mb-4">
            Linear Free (up to 250 issues) has list and board views. Standard ($8/seat/mo) adds unlimited issues, cycles, and projects. Plus ($14/seat/mo) adds roadmaps. Linear deliberately does not offer Gantt, calendar, or timeline views. It&apos;s built for engineering teams who want speed over visual variety.
          </p>

          {/* ── Cost Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Monthly Cost for Full View Access (5-Person Team)</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier for Gantt/Timeline</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (5 seats)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 text-foreground font-medium">ClickUp Unlimited</td><td className="px-4 py-2.5 text-muted">Unlimited</td><td className="px-4 py-2.5 text-muted">$50/mo</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Notion Free</td><td className="px-4 py-2.5 text-muted">Free (timeline DB)</td><td className="px-4 py-2.5 text-muted">$0/mo</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Asana Starter</td><td className="px-4 py-2.5 text-muted">Starter</td><td className="px-4 py-2.5 text-muted">$67.45/mo</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Monday Standard</td><td className="px-4 py-2.5 text-muted">Standard</td><td className="px-4 py-2.5 text-muted">$70/mo</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Linear</td><td className="px-4 py-2.5 text-muted">N/A (no Gantt)</td><td className="px-4 py-2.5 text-muted">$40/mo (Standard)</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Which tool has the best Gantt chart?</h3>
          <p className="text-muted mb-4">
            Monday.com&apos;s Gantt view (Standard $14/seat/mo) is the most polished for non-technical teams. Asana Timeline (Starter $13.49/seat/mo) is cleaner but less feature-rich. ClickUp&apos;s Gantt (Unlimited $10/member/mo) is the cheapest and has dependency tracking. Notion&apos;s timeline is a database view without real Gantt features like dependencies.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Do I need Gantt charts?</h3>
          <p className="text-muted mb-4">
            Most teams under 10 people don&apos;t. Kanban boards handle 80% of project visualization needs. Gantt charts become valuable when you have dependencies between tasks, multiple parallel workstreams, or fixed deadlines that cascade. If none of that applies, save $10&ndash;$14/seat/mo and use boards.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Is Notion good enough for PM if I don&apos;t need Gantt dependencies?</h3>
          <p className="text-muted mb-4">
            For small teams (under 10), yes. Notion&apos;s free database views (board, timeline, calendar, table) cover basic project management. You lose dedicated PM features like sprints, workload management, and dependencies. The trade-off: zero cost and maximum flexibility versus less structure.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "project-management-small-team",
            "when-clickup-free-hits-limits",
          ]}
          comparisons={["asana-vs-monday", "clickup-vs-asana"]}
        />
      </article>
    </>
  );
}
