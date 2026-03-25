import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Notion Lock-In Analysis: Export Quality, Database Limitations, and Real Alternatives",
  description:
    "Complete Notion vendor lock-in analysis. Export quality for pages and databases, what you lose, migration timeline, and exact alternative pricing for ClickUp, Asana, and Obsidian.",
};

export default function NotionLockInAnalysisPage() {
  return (
    <>
      {/* Breadcrumb */}
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
              Notion Lock-In Analysis
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Vendor Lock-In Analysis
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Notion Lock-In Analysis: Export Quality, Database Limitations, and Real Alternatives
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Notion&apos;s flexibility is its strength and its trap. The more databases, views,
            relations, and automations you build, the harder it is to leave. This guide tests
            what actually exports cleanly and what you lose.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* What Exports */}
          <section>
            <h2 className="text-xl font-bold mb-3">What You Can Export From Notion</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Data</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Export Format</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pages (text content)</td>
                    <td className="px-4 py-2.5 text-muted">Markdown, HTML, PDF</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Good (some formatting lost)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Databases (table data)</td>
                    <td className="px-4 py-2.5 text-muted">CSV</td>
                    <td className="px-4 py-2.5 text-yellow-600 font-semibold">Data exports, views don&apos;t</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Database relations</td>
                    <td className="px-4 py-2.5 text-muted">Not preserved in CSV</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Database views (board, timeline, calendar)</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automations</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Must rebuild</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Synced databases</td>
                    <td className="px-4 py-2.5 text-muted">No export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Connection lost</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Embedded content (files, images)</td>
                    <td className="px-4 py-2.5 text-muted">Included in export zip</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Full export</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Comments and discussions</td>
                    <td className="px-4 py-2.5 text-muted">Not included in export</td>
                    <td className="px-4 py-2.5 text-red-500 font-semibold">Lost</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Lock-In Points */}
          <section>
            <h2 className="text-xl font-bold mb-3">What Actually Locks You In</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Database Relations and Rollups</p>
                <p className="text-sm text-muted">
                  Notion&apos;s relation and rollup properties connect databases together. These
                  relationships don&apos;t export. If you have a Projects database linked to a
                  Tasks database linked to a Clients database, all those connections must be
                  manually rebuilt in the new tool.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Custom Database Views</p>
                <p className="text-sm text-muted">
                  Board views, timeline views, calendar views, and gallery views are Notion-specific
                  configurations. Each custom view with filters, sorts, and groupings must be
                  recreated. A database with 5&ndash;10 custom views takes 1&ndash;2 hours
                  to recreate per database.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Markdown Export Quality</p>
                <p className="text-sm text-muted">
                  Notion&apos;s Markdown export is decent for simple pages but lossy for complex
                  content. Toggle blocks, callouts, columns, synced blocks, and embedded databases
                  don&apos;t translate cleanly. The more Notion-specific features you use, the
                  more manual cleanup is needed.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-foreground mb-1">Team Workflows and Templates</p>
                <p className="text-sm text-muted">
                  If your team uses Notion templates for recurring processes (meeting notes, project
                  briefs, sprint planning), each template needs to be recreated. The institutional
                  knowledge embedded in your Notion setup is the deepest lock-in.
                </p>
              </div>
            </div>
          </section>

          {/* Alternative Pricing */}
          <section>
            <h2 className="text-xl font-bold mb-3">Alternative Platform Pricing</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Alternative</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Replaces</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">PM + docs + wiki</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana Starter</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$13.49/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Structured PM (no docs)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Obsidian</td>
                    <td className="px-4 py-2.5 text-muted">Personal</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0 (local files)</td>
                    <td className="px-4 py-2.5 text-muted">Notes + knowledge base (local-first)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Obsidian Sync</td>
                    <td className="px-4 py-2.5 text-muted">Sync add-on</td>
                    <td className="px-4 py-2.5 text-muted">$5/mo</td>
                    <td className="px-4 py-2.5 text-muted">Cross-device sync</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Important distinction</p>
              <p className="text-sm text-muted">
                No single tool replaces everything Notion does. If you use Notion for PM + docs +
                wiki, you may need ClickUp for PM ($10/seat) plus a separate wiki tool. If you
                primarily use Notion for notes and knowledge, Obsidian ($0) is a strong local-first
                alternative with Markdown files you always own.
              </p>
            </div>
          </section>

          {/* Migration Timeline */}
          <section>
            <h2 className="text-xl font-bold mb-3">Realistic Migration Timeline</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Task</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Time Estimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Export all Notion content (Markdown + CSV)</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Clean up Markdown exports</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;20 hours (depends on complexity)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Set up new platform and import data</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;16 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Rebuild database views and relations</td>
                    <td className="px-4 py-2.5 text-muted">8&ndash;40 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Rebuild templates and automations</td>
                    <td className="px-4 py-2.5 text-muted">4&ndash;16 hours</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 text-muted">Team training</td>
                    <td className="px-4 py-2.5 text-muted">1&ndash;2 weeks</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Total estimated timeline</td>
                    <td className="px-4 py-2.5 font-medium text-foreground">2&ndash;6 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Notion&apos;s Markdown export work well for Obsidian?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Partially. Simple pages export cleanly to Obsidian-compatible Markdown. But
                  Notion databases export as CSV (not Markdown), toggle blocks and callouts
                  use Notion-specific syntax, and internal links break. Community tools like
                  notion-to-obsidian help automate cleanup but manual review is still needed.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can ClickUp import from Notion?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  ClickUp has a Notion import feature that transfers pages and some database
                  content. It works for basic content but doesn&apos;t preserve database relations,
                  custom views, or automations. Manual cleanup is required for complex workspaces.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Notion lock-in worse than other PM tools?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Notion&apos;s lock-in is moderate for PM (similar to Asana or ClickUp) but
                  deeper for knowledge management. If you use Notion as your wiki and documentation
                  hub, the switching cost is higher because no other single tool combines docs +
                  databases + wiki the same way. Notion Plus at $12/seat/mo is fair pricing if
                  you value the all-in-one approach.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["notion", "clickup", "asana"]}
            comparisons={["notion-vs-clickup", "asana-vs-clickup"]}
            guides={["notion-vs-obsidian-decision", "switch-from-notion-to-clickup", "pm-tool-cost-over-3-years"]}
          />
        </div>
      </article>
    </>
  );
}
