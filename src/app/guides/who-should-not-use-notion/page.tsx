import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use Notion (Despite What Twitter Says)",
  description:
    "Notion is everywhere — but it's genuinely wrong for 4 common use cases. Here's who should skip Notion, with specific alternatives and real pricing for each scenario.",
};

export default function WhoShouldNotUseNotion() {
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
              Who Should NOT Use Notion
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
            Who Should NOT Use Notion (Despite What Twitter Says)
          </h1>
          <p className="text-lg text-muted">
            Notion is the most aesthetically pleasing productivity tool on the market. It&apos;s also the tool most likely to consume weeks of your time building systems you never actually use. Here&apos;s when Notion is genuinely the wrong choice &mdash; and what works better.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Context ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Core Problem</p>
            <p className="text-sm text-muted">
              Notion is a general-purpose workspace. It can be a wiki, a project manager, a CRM, a habit tracker, a writing tool, and a database. The problem: it&apos;s mediocre at all of these compared to purpose-built tools. The flexibility that makes Notion attractive is the same flexibility that makes it average at any single job.
            </p>
          </div>

          {/* ── Case 1: Real Project Management ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Teams Needing Real Project Management</h2>
          <p className="text-muted mb-4">
            Notion has databases that can display as boards, timelines, calendars, and lists. It looks like project management. But it lacks the features actual project teams depend on: native Gantt charts with dependencies, time tracking, workload balancing, sprint management, resource allocation, and proper recurring tasks.
          </p>
          <p className="text-muted mb-4">
            You can build a Notion project tracker that looks beautiful. You cannot build one that automatically reschedules downstream tasks when a deadline slips, tracks how many hours your team spent on a project, or alerts you when someone is overallocated. These aren&apos;t edge cases &mdash; they&apos;re core PM requirements for teams above 5 people.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notion</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ClickUp</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Asana</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Gantt with Dependencies</td>
                  <td className="px-4 py-2.5">No (timeline view only)</td>
                  <td className="px-4 py-2.5">Yes (all plans)</td>
                  <td className="px-4 py-2.5">Yes (Premium+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Time Tracking</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">Yes (built-in)</td>
                  <td className="px-4 py-2.5">Via integration</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Workload View</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">Yes (Business+)</td>
                  <td className="px-4 py-2.5">Yes (Business+)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Sprint Management</td>
                  <td className="px-4 py-2.5">Manual (build yourself)</td>
                  <td className="px-4 py-2.5">Yes (native Sprints)</td>
                  <td className="px-4 py-2.5">Via Boards</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automations</td>
                  <td className="px-4 py-2.5">Basic (limited triggers)</td>
                  <td className="px-4 py-2.5">Advanced (100+ templates)</td>
                  <td className="px-4 py-2.5">Advanced (Rules builder)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">ClickUp</strong> &mdash; Free tier available. Unlimited plan at $7/member/month. The most feature-dense PM tool on the market. Gantt charts, time tracking, sprints, goals, whiteboards, and docs in one platform. <Link href="/tools/clickup" className="text-accent hover:underline">See ClickUp review</Link></li>
              <li><strong className="text-foreground">Asana</strong> &mdash; Free for up to 10 users. Premium at $10.99/user/month. Cleaner UX than ClickUp, better workflow automation (Rules), and strong for cross-functional teams that need process standardization. <Link href="/tools/asana" className="text-accent hover:underline">See Asana review</Link></li>
            </ul>
          </div>

          {/* ── Case 2: Second Brain / Personal Knowledge ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Solo Users Building a Second Brain</h2>
          <p className="text-muted mb-4">
            The &ldquo;second brain in Notion&rdquo; trend produced thousands of YouTube tutorials and beautiful templates. It also produced a lot of frustrated users who discovered that Notion is a poor tool for personal knowledge management.
          </p>
          <p className="text-muted mb-4">
            The problems: Notion requires internet connectivity (no offline access), loads slowly on large workspaces, doesn&apos;t support bidirectional linking as a core paradigm, stores your data on their servers (not locally), and has a search function that struggles with large knowledge bases. For a personal knowledge system you&apos;ll use for years, these are dealbreakers.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notion</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Obsidian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Offline Access</td>
                  <td className="px-4 py-2.5">No (caches recently viewed pages)</td>
                  <td className="px-4 py-2.5">Yes (local-first, all files)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Data Ownership</td>
                  <td className="px-4 py-2.5">Cloud (Notion&apos;s servers)</td>
                  <td className="px-4 py-2.5">Local Markdown files (yours)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Bidirectional Links</td>
                  <td className="px-4 py-2.5">Basic (backlinks panel)</td>
                  <td className="px-4 py-2.5">Core feature (graph view)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Search Speed (10K+ notes)</td>
                  <td className="px-4 py-2.5">Slow</td>
                  <td className="px-4 py-2.5">Instant (local index)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Price</td>
                  <td className="px-4 py-2.5">Free (personal) / $10/mo (Plus)</td>
                  <td className="px-4 py-2.5">Free / $4/mo (Sync) / $8/mo (Publish)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Obsidian</strong> &mdash; Free for personal use. Sync at $4/month, Publish at $8/month. Local-first, Markdown-based, with a plugin ecosystem of 1,800+ community plugins. Your notes are plain text files on your computer &mdash; no vendor lock-in, instant search, full offline access. <Link href="/tools/obsidian" className="text-accent hover:underline">See Obsidian review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: Offline Access ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Anyone Who Needs Reliable Offline Access</h2>
          <p className="text-muted mb-4">
            Notion is a cloud-first application. It caches recently viewed pages for limited offline viewing, but you cannot create new pages, reliably edit existing ones, or search your workspace without internet. If you work from planes, trains, coffee shops with unreliable WiFi, or anywhere connectivity is inconsistent, Notion will frustrate you.
          </p>
          <p className="text-muted mb-4">
            This isn&apos;t a temporary limitation &mdash; it&apos;s an architectural decision. Notion&apos;s database model requires server-side computation. True offline support would require a fundamental rewrite of how Notion works.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Obsidian</strong> &mdash; 100% offline by default. All files are local Markdown. Obsidian Sync ($4/month) adds cross-device sync when you&apos;re online, but the app works perfectly without it. <Link href="/tools/obsidian" className="text-accent hover:underline">See Obsidian review</Link></li>
              <li><strong className="text-foreground">Apple Notes</strong> &mdash; Free, built into every Apple device, syncs via iCloud, and works fully offline. For simple note-taking without the complexity of a database tool, Apple Notes is underrated.</li>
            </ul>
          </div>

          {/* ── Case 4: Permissions and Compliance ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Large Teams Needing Permissions and Compliance</h2>
          <p className="text-muted mb-4">
            Notion&apos;s permission model is simple: workspace-level, then page-level. There are no role-based access controls, no audit logs on lower tiers (audit logs require Enterprise), no data residency options, and limited compliance certifications. For regulated industries (healthcare, finance, legal) or companies with 50+ employees needing granular access control, Notion isn&apos;t built for you.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notion Business</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Confluence Standard</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">SharePoint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Price (50 users)</td>
                  <td className="px-4 py-2.5">$12/user/mo ($600/mo)</td>
                  <td className="px-4 py-2.5">$6.05/user/mo ($303/mo)</td>
                  <td className="px-4 py-2.5">Included in M365 Business</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Audit Logs</td>
                  <td className="px-4 py-2.5">Enterprise only</td>
                  <td className="px-4 py-2.5">All plans</td>
                  <td className="px-4 py-2.5">All plans</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Role-Based Access</td>
                  <td className="px-4 py-2.5">Limited (workspace groups)</td>
                  <td className="px-4 py-2.5">Yes (space + page level)</td>
                  <td className="px-4 py-2.5">Yes (granular, AD-integrated)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Data Residency</td>
                  <td className="px-4 py-2.5">US only (Enterprise for options)</td>
                  <td className="px-4 py-2.5">US, EU, AU</td>
                  <td className="px-4 py-2.5">Multi-region</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HIPAA Compliance</td>
                  <td className="px-4 py-2.5">No</td>
                  <td className="px-4 py-2.5">With Atlassian Guard</td>
                  <td className="px-4 py-2.5">Yes (with proper config)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Confluence</strong> &mdash; From $6.05/user/month (Standard). Mature permission model, audit logs, data residency, and deep integration with Jira and the Atlassian ecosystem. The UI is less pretty than Notion but the admin controls are significantly stronger.</li>
              <li><strong className="text-foreground">SharePoint / Microsoft 365</strong> &mdash; Included with Microsoft 365 Business ($12.50/user/month). If your company already uses Microsoft 365, SharePoint is essentially free. Active Directory integration, granular permissions, compliance center, and eDiscovery for regulated industries.</li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When Notion IS the Best Choice</h2>
          <p className="text-muted mb-4">
            Notion genuinely excels in two scenarios:
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scenario 1: Startups and small teams (5&ndash;20 people) that want docs, wiki, and light project tracking in one tool.</strong> Notion replaces the need for a separate wiki (Confluence), docs tool (Google Docs), and basic task tracker (Trello). The free plan supports up to 10 guest collaborators, and the Plus plan at $10/member/month is cheaper than buying three separate tools. The key: use Notion for documentation and light tracking, not as a replacement for a real PM tool.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scenario 2: Content teams and knowledge workers who live in documents.</strong> Notion&apos;s editor is one of the best in the market &mdash; better than Confluence, better than Google Docs for structured content. If your team primarily creates, organizes, and shares written content (SOPs, meeting notes, product specs, internal wikis), Notion&apos;s database + document model is genuinely hard to beat.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Notion free?</h3>
                <p className="text-muted">Notion has a free plan for individuals with unlimited pages and blocks. Team use requires the Plus plan at $10/member/month. The free plan is genuinely usable for personal use and small projects, but the 10-guest limit and lack of admin controls push teams to paid plans quickly.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can Notion replace a project management tool?</h3>
                <p className="text-muted">For teams under 5 with simple task tracking, yes. For teams above 5 or with any complexity (dependencies, sprints, time tracking, resource management), no. The gap between Notion&apos;s project views and a dedicated PM tool like ClickUp or Asana is significant and grows with team size.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is Notion so popular if it&apos;s not the best at anything?</h3>
                <p className="text-muted">Notion is the best at being pretty and flexible. The UI is genuinely beautiful, the block-based editor is intuitive, and the ability to build custom systems is satisfying. For many users, having one tool that does everything at 70% quality beats three tools that each do one thing at 95%. The question is whether you&apos;re in the group where 70% is enough.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Will Notion ever add offline support?</h3>
                <p className="text-muted">Notion has been promising better offline support for years. Incremental improvements have shipped (cached pages), but full offline editing and creation would require architectural changes to their database model. Don&apos;t plan your workflow around future features that may never ship.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How hard is it to migrate away from Notion?</h3>
                <p className="text-muted">Moderately difficult. Notion exports to Markdown and CSV, but database views, relations, rollups, and embedded content don&apos;t translate cleanly. Simple pages export well. Complex databases with formulas and relations will require manual recreation in any new tool. Budget 1&ndash;2 weeks for a workspace with heavy database use.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["notion", "obsidian", "clickup", "asana"]}
          comparisons={["notion-vs-obsidian", "notion-vs-clickup", "clickup-vs-asana"]}
          guides={["notion-vs-obsidian-decision", "switch-from-notion-to-clickup", "notion-vs-clickup-vs-asana", "project-management-small-team"]}
        />
      </article>
    </>
  );
}
