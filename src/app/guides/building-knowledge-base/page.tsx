import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Building a Knowledge Base That Your Team Actually Uses",
  description:
    "Most internal wikis die within 3 months. Here's why they fail, which tools work, and the 3 rules that keep a knowledge base alive past launch day.",
};

export default function BuildingKnowledgeBase() {
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
              Building a Knowledge Base
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Knowledge Management
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Building a Knowledge Base That Your Team Actually Uses
          </h1>
          <p className="text-lg text-muted">
            Every growing team has the same experience. Someone says &ldquo;we need a wiki.&rdquo; A motivated person spends a weekend building it. Everyone agrees it&apos;s great. Two months later, half the pages are outdated and nobody looks at it. The wiki dies. Then six months later, someone new says &ldquo;we need a wiki.&rdquo; The cycle repeats. This guide breaks that cycle.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">The Wiki Death Spiral</h2>
          <p className="text-muted mb-4">
            Understanding why wikis fail is more useful than knowing which tool to pick. The failure pattern is predictable and it has five stages.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Stage 1: Enthusiasm.</strong> Someone (usually a founder or ops person) creates a wiki and writes 20&ndash;30 pages over a weekend. Onboarding docs, process guides, team directory, meeting templates. Everyone is impressed.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Stage 2: Adoption.</strong> For 2&ndash;4 weeks, people actually use it. New hires go through onboarding docs. Someone finds a process they didn&apos;t know existed. Small wins.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Stage 3: Drift.</strong> The person who built the wiki gets busy with other work. A process changes but nobody updates the page. Someone follows outdated instructions and gets burned. Trust erodes.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Stage 4: Avoidance.</strong> People stop checking the wiki because they&apos;ve been burned by wrong information. They ask questions in Slack instead. The wiki becomes a ghost town with a few loyalists.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Stage 5: Abandonment.</strong> The wiki sits there, 80% outdated, 100% ignored. The team operates on tribal knowledge again. Six months later, someone suggests building a wiki.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Choosing the Right Tool</h2>
          <p className="text-muted mb-4">
            The tool matters less than the maintenance system, but it still matters. Here&apos;s an honest breakdown.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Notion</strong> &mdash; Best all-rounder for teams of 3&ndash;50. Free for up to 10 guests, $10/user/month on Plus. Databases let you build structured knowledge (process libraries, tool directories, decision logs). The sidebar navigation is intuitive. Downsides: search is mediocre, page load times can lag on large workspaces, and permissions are all-or-nothing at the free tier. Most teams can run a solid wiki on Notion Plus for $10&ndash;18/user/month.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Obsidian</strong> &mdash; Best for individuals and very small teams. Free for personal use, $50/user/year for commercial. Markdown-based, local-first, blazing fast search. Linking between notes is natural and powerful. But collaboration is the weakness. Obsidian Sync ($8/month) works for 1&ndash;3 people sharing a vault. Beyond that, the collaboration model breaks down. Use Obsidian for personal knowledge, not team wikis.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Coda</strong> &mdash; Best for structured, data-heavy knowledge. Free for up to 5 editors, $10/doc maker/month on Pro, up to $36/doc maker/month on Team. Coda&apos;s strength is that pages can contain live data tables, formulas, and automations. If your knowledge base needs calculated fields (inventory, capacity planning, pricing matrices), Coda handles it better than Notion. Downside: steeper learning curve and slower performance on large documents.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Confluence</strong> &mdash; The enterprise default. $6.05/user/month Standard, $11.55/user/month Premium. If your company already uses Jira, Confluence is the path of least resistance. The integration is tight: link Jira tickets to wiki pages, embed project boards. But the editing experience is frustrating, the search is surprisingly bad for a product this mature, and page organization becomes chaotic without strict governance. Teams use Confluence because they have to, not because they want to.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The 3 Rules That Keep a Wiki Alive</h2>
          <p className="text-muted mb-4">
            These aren&apos;t suggestions. They&apos;re requirements. Skip any one and the wiki dies.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Rule 1: Every Page Has an Owner</h3>
          <p className="text-muted mb-4">
            Not a team. Not &ldquo;everyone.&rdquo; A named person. The owner&apos;s job isn&apos;t to write everything &mdash; it&apos;s to make sure the page stays accurate. If a process changes, the page owner updates it or delegates the update. If nobody owns a page, nobody maintains it. Put the owner&apos;s name at the top of every single page. When someone leaves the company, reassign their pages on their last day. This is not optional.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Rule 2: Every Page Has a Freshness Date</h3>
          <p className="text-muted mb-4">
            Add a &ldquo;Last verified&rdquo; date to every page. Set a review cadence: monthly for frequently changing content, quarterly for stable processes. Build a simple dashboard (a Notion database view or Coda table) that shows pages sorted by last-verified date. Any page not verified in 90+ days gets flagged. The owner reviews it, makes updates if needed, and resets the date. This takes 5 minutes per page per quarter. Without it, you can&apos;t tell the difference between current information and two-year-old instructions someone forgot about.
          </p>

          <h3 className="text-lg font-semibold mt-8 mb-3">Rule 3: Search Has to Work</h3>
          <p className="text-muted mb-4">
            If someone can&apos;t find information in under 30 seconds, they&apos;ll ask in Slack instead. Search quality depends on two things: the tool&apos;s search engine and your naming conventions. Use descriptive page titles (&ldquo;How to Process a Refund&rdquo; not &ldquo;Refund Policy v3 FINAL&rdquo;). Add tags or properties to every page. Create a master index page for each department. Notion&apos;s search is passable. Confluence&apos;s is unreliable. Obsidian&apos;s is excellent. If your tool&apos;s search is weak, compensate with better structure and a strong table of contents.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Pages to Create First</h2>
          <p className="text-muted mb-4">
            Don&apos;t try to document everything at once. Start with the pages people actually need. In this order:
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Onboarding guide.</strong> What a new hire needs in their first week. Tool access, key contacts, where to find things, company norms. This page gets used every time someone joins and forces you to keep it current.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Core processes.</strong> The 5&ndash;10 things your team does repeatedly. How to deploy code. How to process a refund. How to submit expenses. How to request time off. Document the ones people ask about in Slack most often.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Decision log.</strong> Why did we choose Stripe over Paddle? Why did we switch from Slack to Discord? Why is our pricing model usage-based? These decisions get relitigated every 6 months unless you write down the reasoning when it&apos;s fresh.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Team directory and contacts.</strong> Who does what, how to reach them, what they&apos;re responsible for. Especially useful once you&apos;re past 10 people and &ldquo;just ask anyone&rdquo; stops working.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Don&apos;t Build a Wiki for This</h2>
          <p className="text-muted mb-4">
            Not everything belongs in a knowledge base. Putting the wrong content in your wiki clutters it and makes useful information harder to find.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Real-time discussions</strong> belong in Slack or Teams. A wiki page for &ldquo;brainstorming ideas for Q2 launch&rdquo; will never be updated after the brainstorm ends. Use a channel, have the discussion, then move the conclusions to the wiki.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">One-off meeting notes</strong> don&apos;t need wiki pages. They need a shared doc or a Notion database with a date filter. The wiki should contain decisions that came from meetings, not the raw transcript.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Personal task lists</strong> belong in your project management tool, not the team wiki. Mixing individual work tracking with team knowledge makes both worse.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Rapidly changing data</strong> (sprint status, sales numbers, support queue metrics) belongs in dashboards connected to live data, not manually updated wiki pages. The moment that data is typed into a wiki, it&apos;s already stale.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Build a Knowledge Base</h2>
          <p className="text-muted mb-4">
            If your team is 2&ndash;3 people who sit in the same room (or the same Slack channel) and communicate constantly, a wiki adds overhead without enough payoff. Pin important messages, keep a shared doc for processes, and skip the wiki until your team reaches 5+ people.
          </p>
          <p className="text-muted mb-4">
            If nobody on the team has time to maintain it, don&apos;t build it. An outdated wiki is worse than no wiki because it looks trustworthy but contains wrong information. Wait until you can assign maintenance to a real person with real hours allocated for it.
          </p>
          <p className="text-muted mb-6">
            If your team&apos;s processes change weekly, a wiki can&apos;t keep up. Stabilize your processes first, then document them. Documenting chaos just creates documented chaos.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best tool for building a team knowledge base?</h3>
                <p>Notion is the best all-around choice for team knowledge bases, combining docs, databases, and wikis in one tool. GitBook is better for developer documentation. Confluence works for teams already in the Atlassian ecosystem. For small teams, Notion&apos;s free plan covers most needs.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I keep a knowledge base from going stale?</h3>
                <p>Assign an owner to every document. Set quarterly review reminders. Delete or archive pages that nobody has viewed in 6 months. The single biggest reason knowledge bases fail is that nobody is accountable for keeping them current.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use Notion or Confluence for documentation?</h3>
                <p>Use Notion if your team values flexibility, modern UX, and all-in-one functionality. Use Confluence if you are already invested in the Atlassian ecosystem (Jira, Bitbucket) and need deep integration with those tools. For new teams starting fresh, Notion is almost always the better choice.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["notion", "slite", "coda", "obsidian"]}
            comparisons={["obsidian-vs-notion", "notion-vs-clickup"]}
            guides={[
              "notion-vs-obsidian-decision",
              "project-management-small-team",
              "ai-research-workflow",
            ]}
          />
        </div>
      </article>
    </>
  );
}
