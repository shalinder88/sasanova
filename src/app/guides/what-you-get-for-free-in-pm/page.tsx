import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What You Get for Free in Project Management: Every Free Tier Mapped",
  description:
    "ClickUp Free vs Notion Free vs Trello Free vs Asana Free vs Jira Free vs Linear Free: exact user limits, storage limits, and feature restrictions. Verified March 2026.",
};

export default function FreeInPMPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Free PM Tiers</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Feature Availability
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What You Get for Free in Project Management: Every Free Tier Mapped
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            PM tools have the widest free tier variations. ClickUp gives unlimited tasks and unlimited
            members. Asana caps at 2 users. Jira gives you 10 users. Notion gives unlimited pages
            but only 7-day history. Every restriction mapped so you know exactly what $0 gets you.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Free Tier Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">ClickUp</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Notion</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Trello</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Asana</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Jira</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Linear</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Users</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">1 (individual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">2 users</td>
                    <td className="px-4 py-2.5 text-muted">10 users</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Tasks/Issues</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited pages</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited cards</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">250 issues</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Storage</td>
                    <td className="px-4 py-2.5 text-muted">100MB</td>
                    <td className="px-4 py-2.5 text-muted">5MB uploads</td>
                    <td className="px-4 py-2.5 text-muted">10MB uploads</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">2GB</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Boards/Projects</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited spaces</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">10 boards/workspace</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Timeline/Gantt</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Unlimited $10/seat)</td>
                    <td className="px-4 py-2.5 text-muted">No (database timeline only)</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Premium $12.50/seat)</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Starter $13.49/seat)</td>
                    <td className="px-4 py-2.5 text-muted">Basic board only</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Plus $14/seat)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">First Paid Tier</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited $10/seat</td>
                    <td className="px-4 py-2.5 text-muted">Plus $12/seat</td>
                    <td className="px-4 py-2.5 text-muted">Standard $6/seat</td>
                    <td className="px-4 py-2.5 text-muted">Starter $13.49/seat</td>
                    <td className="px-4 py-2.5 text-muted">Standard $8.15/seat</td>
                    <td className="px-4 py-2.5 text-muted">Standard $8/seat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Most Generous Free Tier: ClickUp</h2>
            <p className="text-muted leading-relaxed mb-4">
              ClickUp Free gives unlimited tasks, unlimited members, and unlimited spaces. The only
              meaningful limit is 100MB storage. For a team that doesn&apos;t need file storage, ClickUp
              Free can run indefinitely. The trade-off: ClickUp can be overwhelming to set up.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Which PM free tier is best for teams?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  ClickUp Free for feature-hungry teams (unlimited members + tasks). Jira Free for
                  engineering teams (10 users, Scrum/Kanban boards). Trello Free for simple task
                  tracking (unlimited cards, 10 boards).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Why is Asana Free so limited?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Asana reduced their free tier from 15 users to 2 users. At 2 users, it&apos;s
                  essentially a solo tool. Starter at $13.49/seat is required for any real team use.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "project-management-small-team",
              "notion-vs-clickup-vs-asana",
              "what-you-get-for-free-in-crm",
              "what-you-get-for-free-in-automation",
            ]}
          />
        </div>
      </article>
    </>
  );
}
