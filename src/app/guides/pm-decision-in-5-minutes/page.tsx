import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Choose Your Project Management Tool in 5 Minutes: Decision Flowchart",
  description:
    "Answer 5 questions to pick the right PM tool. Notion, ClickUp, Asana, Monday, Trello, Jira, or Linear — with exact pricing for each path.",
};

export default function PmDecisionIn5MinutesPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">PM Decision in 5 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Decision Quick-Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Choose Your Project Management Tool in 5 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            There are 200+ PM tools. These five questions narrow it to one.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 1: Is your team primarily engineering/development?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, software development</strong> &rarr; Go to Question 1B</p>
              <p><strong className="text-foreground">No, marketing/ops/mixed</strong> &rarr; Go to Question 2</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 1B: Do you need deep customization or speed?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Deep customization (enterprise, complex workflows)</strong> &rarr; <strong className="text-accent">Jira Standard at $8.15/user/mo</strong>. Free for up to 10 users. Scrum, Kanban, custom workflows, JQL.</p>
              <p><strong className="text-foreground">Speed and modern UX</strong> &rarr; <strong className="text-accent">Linear Standard at $8/user/mo</strong>. Free for up to 250 issues. Keyboard-first, opinionated, fast.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 2: Do you want one tool for docs + tasks + wiki?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, all-in-one</strong> &rarr; Go to Question 2B</p>
              <p><strong className="text-foreground">No, just task/project management</strong> &rarr; Go to Question 3</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 2B: Do you prefer flexibility or features?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Flexibility (build your own system)</strong> &rarr; <strong className="text-accent">Notion Plus at $12/user/mo</strong>. Free for personal use. Databases, wikis, docs, custom views. Requires setup time.</p>
              <p><strong className="text-foreground">Features (everything built-in)</strong> &rarr; <strong className="text-accent">ClickUp Unlimited at $10/member/mo</strong>. Free tier with unlimited tasks. Tasks, docs, chat, goals, time tracking, dashboards.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 3: How important is simplicity?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Maximum simplicity, minimal features</strong> &rarr; <strong className="text-accent">Trello Standard at $6/user/mo</strong>. Free for basic kanban. Boards, cards, checklists. Nothing more.</p>
              <p><strong className="text-foreground">Structured workflows with clean UX</strong> &rarr; <strong className="text-accent">Asana Starter at $13.49/seat/mo</strong>. Free for 2 users. Timeline, forms, workflow builder.</p>
              <p><strong className="text-foreground">Visual boards with automations</strong> &rarr; <strong className="text-accent">Monday Standard at $14/seat/mo</strong>. Free for 2 seats. Colorful boards, 250 automations/mo.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 5: Budget check &mdash; is flat-rate pricing important?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, predictable costs for 20+ users</strong> &rarr; Consider <strong className="text-accent">Basecamp Pro at $349/mo flat</strong> (unlimited users). Simpler features but zero per-seat scaling.</p>
              <p><strong className="text-foreground">Per-seat is fine</strong> &rarr; Stick with your answer from above.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Quick Price Reference</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Recommended Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited pages, 10 guests</td>
                    <td className="px-4 py-2.5 text-muted">Plus: $12/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited tasks &amp; members</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited: $10/member/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">Up to 2 users</td>
                    <td className="px-4 py-2.5 text-muted">Starter: $13.49/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monday</td>
                    <td className="px-4 py-2.5 text-muted">2 seats, 3 boards</td>
                    <td className="px-4 py-2.5 text-muted">Standard: $14/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello</td>
                    <td className="px-4 py-2.5 text-muted">10 boards, unlimited cards</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Standard: $6/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Jira</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">10 users, full features</td>
                    <td className="px-4 py-2.5 text-muted">Standard: $8.15/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear</td>
                    <td className="px-4 py-2.5 text-muted">250 issues</td>
                    <td className="px-4 py-2.5 text-muted">Standard: $8/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp</td>
                    <td className="px-4 py-2.5 text-muted">1 user</td>
                    <td className="px-4 py-2.5 text-muted">$15/user/mo or $349/mo flat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I use Notion as a full PM tool?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes, but it requires setup. Notion has no native Gantt charts (you can build one with
                  database views), no built-in time tracking, and limited automations compared to ClickUp
                  or Asana. It excels as a combined docs + lightweight PM tool.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is ClickUp too complex for small teams?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  It can be. ClickUp has more features than any competitor, which means more setup time
                  and potential overwhelm. For teams of 3&ndash;5 who want simplicity, Trello or Asana
                  are better starting points.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["notion", "clickup", "asana", "monday", "trello", "jira", "linear"]}
            comparisons={["jira-vs-linear"]}
            guides={["project-management-small-team", "project-management-pricing-compared-2026", "notion-vs-clickup-vs-asana"]}
          />
        </div>
      </article>
    </>
  );
}
