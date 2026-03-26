import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Replace Asana with Notion + ClickUp: Docs + Tasks in Two Tools",
  description:
    "Asana Starter costs $13.49/seat/mo. Notion Free + ClickUp Free gives you docs, wikis, and unlimited tasks for $0 total. When the free combo wins, when Asana is still worth it, and how to migrate.",
};

export default function ReplaceAsanaWithNotionClickup() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/guides"
              className="hover:text-accent transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">
              Replace Asana with Notion + ClickUp
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Replacement Stack
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace Asana with Notion + ClickUp: Docs + Tasks in Two Tools
          </h1>
          <p className="text-lg text-muted">
            Asana is great at structured project management, but it
            doesn&apos;t do docs or wikis. So teams bolt on a second
            tool anyway. Here&apos;s the case for replacing Asana
            Starter ($13.49/seat/mo) with Notion Free + ClickUp Free
            &mdash; a $0 total that covers docs, wikis, tasks, and
            project management.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Price Comparison ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              The Math
            </p>
            <p className="text-sm text-muted">
              Asana Starter: <strong className="text-foreground">$13.49/seat/mo</strong> (per seat). For a 5-person team: $67.45/mo ($809/yr).
              <br />
              Replacement: Notion Free (<strong className="text-foreground">$0</strong>) + ClickUp Free Forever (<strong className="text-foreground">$0</strong>) = <strong className="text-foreground">$0/mo total</strong>.
              <br />
              Savings: <strong className="text-foreground">$67.45/mo ($809/yr)</strong> for a 5-person team. Even at 10 users, you save $134.90/mo ($1,619/yr).
            </p>
          </div>

          {/* ── Pricing Table ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Exact Pricing Comparison
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Billing Model</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                  <td className="px-4 py-2.5">Starter</td>
                  <td className="px-4 py-2.5">$13.49/seat/mo</td>
                  <td className="px-4 py-2.5">Per seat</td>
                  <td className="px-4 py-2.5">Timeline, workflow builder, forms, unlimited dashboards</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">Unlimited pages, 7-day page history, 10 guest collaborators</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                  <td className="px-4 py-2.5">Free Forever</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">100MB storage, unlimited tasks, unlimited members</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── When the Combo Wins ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            When the Notion + ClickUp Combo Wins
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">You need docs alongside tasks.</strong>{" "}
              Asana has no wiki or docs feature. Notion&apos;s block-based editor and databases fill this gap perfectly, while ClickUp handles the project management Asana was doing.
            </li>
            <li>
              <strong className="text-foreground">Your team is under 15 people.</strong>{" "}
              Both free tiers handle small teams well. Notion Free gives unlimited pages for individuals and small teams. ClickUp Free gives unlimited tasks and members.
            </li>
            <li>
              <strong className="text-foreground">You want maximum flexibility.</strong>{" "}
              Notion&apos;s databases (table, board, timeline, calendar, gallery) plus ClickUp&apos;s task views give you more customization options than Asana Starter.
            </li>
            <li>
              <strong className="text-foreground">Budget is tight.</strong>{" "}
              $0 vs $13.49/seat/mo is hard to argue with, especially for bootstrapped teams and startups.
            </li>
          </ul>

          {/* ── When to Stay on Asana ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            When to Stay on Asana
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">You value simplicity over features.</strong>{" "}
              Asana is opinionated and clean. Running two tools means two interfaces, two learning curves, and two places to check.
            </li>
            <li>
              <strong className="text-foreground">Your team is already productive on Asana.</strong>{" "}
              Switching costs are real. If your workflows are established and running smoothly, the $13.49/seat is often worth the productivity consistency.
            </li>
            <li>
              <strong className="text-foreground">You need Portfolios and Goals.</strong>{" "}
              Asana Advanced ($30.49/seat/mo) offers Portfolios, Goals, and approvals that neither Notion Free nor ClickUp Free can match.
            </li>
          </ul>

          {/* ── What You Gain / Lose ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            What You Gain vs. What You Lose
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">What You Gain</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What You Lose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">$13.49/seat/mo in savings (100% savings)</td>
                  <td className="px-4 py-2.5 text-muted">Single-tool simplicity for task management</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Notion&apos;s powerful docs, wikis, and databases</td>
                  <td className="px-4 py-2.5 text-muted">Asana&apos;s clean, opinionated workflow builder</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">ClickUp&apos;s unlimited tasks with Gantt, boards, and lists</td>
                  <td className="px-4 py-2.5 text-muted">Asana&apos;s timeline view and form-based intake</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">Two best-of-breed tools instead of one generalist</td>
                  <td className="px-4 py-2.5 text-muted">One login, one notification center, one search</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Upgrade Paths ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            When Free Tiers Hit Limits
          </h2>
          <p className="text-muted mb-4">
            If you outgrow the free tiers, Notion Plus is $12/user/mo and ClickUp Unlimited is $10/member/mo. Combined that&apos;s $22/user/mo &mdash; still $8.51/user/mo more than Asana Starter alone, but you get docs, wikis, unlimited storage, and full project management features that Asana Starter doesn&apos;t include.
          </p>

          {/* ── Migration Steps ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Migration Steps
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 1: Export Asana Data
          </h3>
          <p className="text-muted mb-4">
            Export your projects as CSV files from Asana (Project &rarr; Export &rarr; CSV). Download each project separately. Note your custom field configurations and workflow rules, as these will need to be rebuilt.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 2: Set Up Notion for Docs and Wiki
          </h3>
          <p className="text-muted mb-4">
            Create a Notion workspace and build your team wiki, meeting notes, and documentation hub. Use Notion&apos;s database templates for knowledge bases. This is where Notion excels over Asana &mdash; structured docs that link to each other.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 3: Set Up ClickUp for Tasks and Projects
          </h3>
          <p className="text-muted mb-4">
            Create a ClickUp workspace on the Free Forever plan. Import your Asana CSV exports. ClickUp has a native Asana importer that maps tasks, assignees, due dates, and subtasks. Rebuild your workflow automations using ClickUp&apos;s automation features.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 4: Run Parallel for 1 Week
          </h3>
          <p className="text-muted mb-4">
            Keep Asana active for one week while your team adjusts. Verify all tasks migrated correctly, test any automations, and make sure the team knows which tool to use for what: Notion for docs, ClickUp for tasks.
          </p>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Why not just use ClickUp for both tasks and docs?
          </h3>
          <p className="text-muted mb-4">
            You can. ClickUp has a Docs feature. But Notion&apos;s docs and database system is significantly more powerful and flexible. The combination gives you best-of-breed for both use cases, and both are free.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            What about Asana&apos;s free Personal plan?
          </h3>
          <p className="text-muted mb-4">
            Asana Personal is free but limited to 2 users. If your team is just 1&ndash;2 people, Asana Personal might be enough. But the moment you add a third person, you&apos;re on Starter at $13.49/seat/mo. The Notion + ClickUp combo scales to unlimited members on free tiers.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Does ClickUp Free have enough features to replace Asana Starter?
          </h3>
          <p className="text-muted mb-4">
            For most small teams, yes. ClickUp Free gives you unlimited tasks, unlimited members, multiple views (list, board, calendar), and 100MB storage. The main limitation is storage. If you need more, ClickUp Unlimited at $10/member/mo adds unlimited storage, integrations, and dashboards.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Can I integrate Notion and ClickUp?
          </h3>
          <p className="text-muted mb-4">
            Not natively, but both integrate with Zapier and Make. You can set up automations like: new ClickUp task &rarr; create linked Notion page, or new Notion database entry &rarr; create ClickUp task. Most teams use them side by side without deep integration.
          </p>
        </div>

        {/* ── Related Links ── */}
        <RelatedLinks
          tools={["asana", "notion", "clickup"]}
          comparisons={["notion-vs-clickup", "asana-vs-monday"]}
          guides={[
            "when-clickup-free-hits-limits",
            "when-notion-needs-a-paid-plan",
            "notion-vs-clickup-vs-asana",
          ]}
        />
      </article>
    </>
  );
}
