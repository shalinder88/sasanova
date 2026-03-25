import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Trello to Notion: When Boards Aren't Enough",
  description:
    "Why teams outgrow Trello, what Notion adds (docs, wikis, databases), what you lose (simplicity, Power-Ups), cost comparison, and migration steps.",
};

export default function SwitchTrelloToNotionPage() {
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
              Trello to Notion
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
            Trello to Notion: When Boards Aren&apos;t Enough
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Trello is the simplest project tool you&apos;ll ever use. Notion is the
            most flexible workspace you&apos;ll ever configure. Teams switch when
            they need docs, wikis, and databases alongside their tasks &mdash; and
            Trello&apos;s card-and-board model can&apos;t stretch that far. This guide
            covers what you gain, what you lose, and whether the trade-off is worth it.
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
            <h2 className="text-xl font-bold mt-10 mb-4">Why People Switch from Trello to Notion</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Trello is one-dimensional.</strong> Everything is a card on a board. That&apos;s elegant for simple workflows but limiting when you need meeting notes linked to tasks, a project wiki alongside your kanban, or a database that filters by multiple properties. Trello cards can hold descriptions and checklists, but they&apos;re not documents.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">No built-in documentation.</strong> Teams using Trello inevitably end up with Google Docs, Confluence, or Dropbox Paper for documentation. Notion combines tasks and docs in one workspace, eliminating the tool-switching problem.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Limited views on free plan.</strong> Trello Free gives you board view only with up to 10 boards per workspace and 1 Power-Up per board. Timeline, Table, Calendar, and Dashboard views require Premium ($12.50/user/mo). Notion Free gives you unlimited pages with Table, Board, Timeline, Calendar, and Gallery views.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Database limitations.</strong> Trello&apos;s custom fields (paid feature) are basic compared to Notion&apos;s database system. Notion lets you create relational databases, rollups, formulas, and linked views &mdash; turning your workspace into a custom app.
            </p>
          </section>

          {/* ── What You Gain ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Gain Moving to Notion</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Docs, wikis, and databases in one tool.</strong> Notion&apos;s block-based editor handles meeting notes, project specs, team handbooks, and process documentation. Pages nest inside pages. Databases embed inside documents. You build an internal wiki that&apos;s actually connected to your task management.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Multiple views on every database.</strong> Create a task database and view it as a Board (Trello-style), Table, Timeline, Calendar, or Gallery &mdash; all from the same data. Add filters, sorts, and groupings to create purpose-specific views for different teams or contexts.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Relational databases.</strong> Link a Projects database to a Tasks database to a Clients database. Roll up task completion into project progress. Create dashboards that pull from multiple data sources. This is impossible in Trello without extensive Power-Up stacking.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">AI assistant built in.</strong> Notion AI can summarize pages, draft content, translate text, and extract action items from meeting notes. Trello has Butler automations but no AI content features.
            </p>
          </section>

          {/* ── What You Lose ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Lose Leaving Trello</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Simplicity.</strong> Trello is the easiest project management tool to learn. Drag cards across columns. Done. Notion requires setup: you build your own task databases, configure properties, create views. The flexibility that makes Notion powerful also makes it time-consuming to configure.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Power-Up ecosystem.</strong> Trello&apos;s Power-Ups connect to hundreds of tools directly on your board: time tracking, Gantt charts, voting, card aging, custom fields. Notion has integrations but nothing as seamlessly embedded as Trello&apos;s Power-Up system.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Instant onboarding.</strong> New team members understand Trello in minutes. Notion workspaces take time to learn &mdash; not because Notion is hard, but because each workspace is custom-built. Your team needs documentation about your Notion setup itself.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Butler automations simplicity.</strong> Trello&apos;s Butler automation uses natural-language rules that non-technical users can set up. Notion&apos;s automations are improving but less intuitive for simple workflows.
            </p>
          </section>

          {/* ── Cost Comparison ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Cost Comparison</h2>
            <p className="text-muted mb-4">
              All prices are monthly billing rates, verified March 2026.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Trello Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Trello Premium</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Notion Plus</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Notion Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                    <td className="px-4 py-2.5">$30/mo</td>
                    <td className="px-4 py-2.5">$62.50/mo</td>
                    <td className="px-4 py-2.5">$60/mo</td>
                    <td className="px-4 py-2.5">$120/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">15 users</td>
                    <td className="px-4 py-2.5">$90/mo</td>
                    <td className="px-4 py-2.5">$187.50/mo</td>
                    <td className="px-4 py-2.5">$180/mo</td>
                    <td className="px-4 py-2.5">$360/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                    <td className="px-4 py-2.5">$150/mo</td>
                    <td className="px-4 py-2.5">$312.50/mo</td>
                    <td className="px-4 py-2.5">$300/mo</td>
                    <td className="px-4 py-2.5">$600/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Price source:</strong> Trello Standard is $6/user/mo, Premium is $12.50/user/mo. Notion Plus is $12/user/mo, Business is $24/user/mo (all monthly billing).
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">The honest math:</strong> Notion Plus costs double Trello Standard. But Notion Plus replaces both Trello AND your wiki/docs tool. If you&apos;re paying for Trello Standard ($6/user/mo) plus Confluence ($6.05/user/mo for Standard), Notion Plus ($12/user/mo) replaces both at roughly the same cost.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Free tiers:</strong> Trello Free gives unlimited cards but 10 boards/workspace and 1 Power-Up/board. Notion Free gives unlimited pages, all views, but 7-day page history and 10 guest collaborators. For individuals, both free plans are genuinely functional.
            </p>
          </section>

          {/* ── Who Should NOT Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to Notion</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams that just need simple kanban.</strong> If your workflow is &ldquo;To Do &rarr; In Progress &rarr; Done&rdquo; and you don&apos;t need docs or databases, Trello does that better and simpler. Notion for basic kanban is over-engineered.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams that rely heavily on Power-Ups.</strong> If you&apos;ve built workflows around specific Trello Power-Ups (time tracking, card dependencies, Gantt views), verify Notion has equivalent functionality before switching. Many Power-Up features have no Notion equivalent.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams that want zero setup time.</strong> Trello works out of the box. Notion requires someone to architect the workspace &mdash; databases, templates, views, permissions. If nobody on your team wants to be the Notion architect, the workspace will be messy and underutilized.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Non-technical teams who need the fastest onboarding.</strong> Trello scores a perfect 10 for ease of use. Notion&apos;s flexibility creates a learning curve that some teams never fully climb.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I import Trello boards into Notion?</h3>
                <p className="text-muted">Yes. Notion has a native Trello importer (Settings &rarr; Import &rarr; Trello). Each board becomes a Notion database with Board view. Cards become pages. Lists become a Status property. Checklists, descriptions, and labels import. Attachments and Power-Up data may need manual transfer.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Notion overkill for a small team?</h3>
                <p className="text-muted">It depends on your needs. If you only need task boards, yes &mdash; Trello is simpler. If you also need meeting notes, a team wiki, and project documentation, Notion consolidates those into one tool and is worth the setup investment.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Notion have automations like Trello Butler?</h3>
                <p className="text-muted">Notion has automations (on Plus plans and above) that trigger on database property changes. They&apos;re less mature than Trello Butler but growing. For complex automations, connect Notion to Zapier or Make.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Notion like Trello with just board views?</h3>
                <p className="text-muted">Absolutely. Create a database, add a Board view grouped by Status, and you have a kanban board. But you&apos;re paying for Notion&apos;s full feature set. If you only use Board view, Trello is simpler and cheaper.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/switch-from-notion-to-clickup"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Notion to ClickUp</span>
                <span className="block text-xs text-muted mt-1">When you outgrow Notion for project management</span>
              </Link>
              <Link
                href="/guides/switch-from-asana-to-clickup"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Asana to ClickUp</span>
                <span className="block text-xs text-muted mt-1">Feature density vs clean interface</span>
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["trello", "notion"]}
          comparisons={["trello-vs-notion"]}
          guides={["switch-from-notion-to-clickup"]}
        />
      </article>
    </>
  );
}
