import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "6 Notion Features Most People Miss",
  description:
    "Notion Free includes database relations, synced blocks, and API access. Plus ($12/user/mo) unlocks automations. Most users barely scratch the surface of what Notion can do.",
};

export default function NotionFeaturesMostPeopleMissPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span>
            <span className="text-foreground font-medium truncate">Notion Features Most People Miss</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Hidden Features</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">6 Notion Features Most People Miss</h1>
          <p className="text-muted text-lg leading-relaxed">Notion users typically use it as a note-taking app. But the platform includes a relational database engine, API access, synced blocks, and automations that most users never discover.</p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>10 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">1. Database Relations and Rollups (Free — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Link databases together like a relational database. Create a Projects database linked to Tasks, then use rollups to calculate completion percentages. Available on the free tier. Eliminates the need for Airtable for many use cases.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Relational data modeling without Airtable ($20/seat/mo). Rollups give you calculated fields across linked databases.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">2. Synced Blocks (Free — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Create a block that syncs across multiple pages. Edit it once, it updates everywhere. Perfect for company-wide announcements, shared headers, or standardized templates. Available on free tier.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Single source of truth for repeated content. No more updating 15 pages when a process changes.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">3. API Access (Free — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Notion has a full REST API available on all tiers including free. Build custom integrations, pull data into dashboards, or create automated workflows with Zapier ($29.99/mo) or Make ($10.59/mo).</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Turn Notion into a lightweight CRM, content calendar, or project tracker with custom automations.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">4. Database Automations (Plus — $12/user/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Plus tier unlocks custom automations triggered by database changes. When a status changes to Done, automatically move to archive. When a due date arrives, send a Slack notification. Reduces the need for external automation tools.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Native automations without Zapier. Can replace simple Zaps and save $29.99/month.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">5. Database Templates (Free — $0)</h2>
            <p className="text-muted leading-relaxed mb-2">Create template entries in any database. New meeting notes auto-populate with agenda, attendees, and action items. New project entries get pre-filled checklists. Saves 5-10 minutes per entry.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Standardized processes without process management software.</p></div>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">6. Advanced Permissions (Business — $24/user/mo)</h2>
            <p className="text-muted leading-relaxed mb-2">Business tier adds workspace-level permissions, private teamspaces, and bulk PDF export. Essential for teams that share Notion with clients or external partners. Free and Plus only have basic sharing controls.</p>
            <div className="bg-surface rounded-lg border border-border p-3"><p className="text-sm text-muted"><strong className="text-foreground">Why This Matters:</strong> Client portals and external sharing without exposing your full workspace.</p></div>
          </section>
          <RelatedLinks
            tools={["notion"]}
            comparisons={["notion-vs-clickup"]}
            guides={["notion-pricing-explained", "is-notion-free-enough", "notion-integrations-guide"]}
          />
        </div>
      </article>
    </>
  );
}
