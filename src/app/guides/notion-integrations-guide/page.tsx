import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Notion Integrations: What Works Natively and What Needs Zapier",
  description:
    "Notion connects to Slack and GitHub natively, but CRM, email, and calendar require Zapier ($29.99/mo) or Make ($10.59/mo). Complete integration map with exact costs for every connection method.",
};

export default function NotionIntegrationsGuide() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Notion Integrations Guide</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Integration Guide</span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Notion Integrations: What Works Natively and What Needs Zapier
          </h1>
          <p className="text-lg text-muted">
            Notion (Free &ndash; $24/user/mo Business) is a powerful workspace, but its integration story is thinner than most people expect. Here&apos;s what connects natively, what needs the API, and what requires Zapier ($29.99/mo) or Make ($10.59/mo) to bridge.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Native Integrations ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What Connects Natively (Free)</h2>
          <p className="text-muted mb-4">
            Notion&apos;s native integrations are limited but cover key developer and communication tools. These work on all plans including Free.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Slack:</strong> Embed Notion pages in Slack, get notifications for page changes, preview links. Free on both sides.</li>
            <li><strong className="text-foreground">GitHub:</strong> Link PRs and issues to Notion databases, sync status. Useful for engineering teams.</li>
            <li><strong className="text-foreground">Jira:</strong> Sync Jira issues into Notion databases. Two-way status sync on Plus ($12/user/mo) and above.</li>
            <li><strong className="text-foreground">Figma:</strong> Live embeds of Figma files in Notion pages. View-only, no editing.</li>
            <li><strong className="text-foreground">Google Drive:</strong> Embed and preview Google Docs, Sheets, and Slides. File picker integration.</li>
            <li><strong className="text-foreground">Loom:</strong> Embed Loom videos directly. Auto-generates preview thumbnails.</li>
          </ul>

          {/* ── Calendar Gap ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Calendar: The Biggest Gap</h2>
          <p className="text-muted mb-4">
            Notion has a calendar database view, but it does <strong className="text-foreground">not sync with Google Calendar or Outlook natively</strong>. This is one of Notion&apos;s most requested features and still missing. Your options:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Zapier ($29.99/mo):</strong> Create Notion database items from Google Calendar events, or vice versa. Consumes 1 task per event sync.</li>
            <li><strong className="text-foreground">Make ($10.59/mo):</strong> Same workflow, 1 operation per sync. At 10,000 ops/mo, handles ~330 events/day.</li>
            <li><strong className="text-foreground">Notion API (free):</strong> Build a custom sync with the API. Requires developer time. Notion API is available on all plans.</li>
          </ul>

          {/* ── Email Integration ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email: No Native Integration</h2>
          <p className="text-muted mb-4">
            Notion doesn&apos;t connect to Gmail or Outlook natively. You cannot send or receive emails from Notion. For email-to-Notion workflows:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Save emails to Notion:</strong> Zapier ($29.99/mo) or Make ($10.59/mo) can create Notion database items from starred/labeled Gmail messages.</li>
            <li><strong className="text-foreground">Notion Web Clipper (free):</strong> Browser extension saves any web page to a Notion database. Works for email viewed in a browser.</li>
            <li><strong className="text-foreground">Forward emails to Notion:</strong> Third-party tools like Save to Notion (free Chrome extension) handle this without middleware.</li>
          </ul>

          {/* ── CRM Integration ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: Middleware Required</h2>
          <p className="text-muted mb-4">
            Notion does not have native CRM integrations. Connecting to HubSpot (Free &ndash; $890/mo), Pipedrive ($14&ndash;$99/seat/mo), or Salesforce ($25&ndash;$350/seat/mo) requires middleware.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Connection Method</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Middleware Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">HubSpot</td>
                  <td className="px-4 py-2.5 text-muted">Zapier or Make</td>
                  <td className="px-4 py-2.5 text-muted">$10.59&ndash;$29.99/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Pipedrive</td>
                  <td className="px-4 py-2.5 text-muted">Zapier or Make</td>
                  <td className="px-4 py-2.5 text-muted">$10.59&ndash;$29.99/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Salesforce</td>
                  <td className="px-4 py-2.5 text-muted">Zapier or Make</td>
                  <td className="px-4 py-2.5 text-muted">$10.59&ndash;$29.99/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Some teams use Notion as their CRM &mdash; building contact and deal databases directly. This works for solo operators and small teams but lacks email tracking, pipeline automation, and reporting that dedicated CRMs like Pipedrive Lite ($14/seat/mo) provide natively.
          </p>

          {/* ── Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation: Native vs Middleware</h2>
          <p className="text-muted mb-4">
            Notion Plus ($12/user/mo) introduced custom automations in 2024 &mdash; database triggers that can update properties, send notifications, or create pages. These are internal to Notion only. For cross-app automation, you still need middleware.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Notion Automations vs Middleware</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li><strong className="text-foreground">Notion native (Plus $12/user/mo):</strong> When database item changes &rarr; update another property, send Slack message, create sub-page</li>
              <li><strong className="text-foreground">Zapier ($29.99/mo):</strong> When Notion database changes &rarr; do anything in 7,000+ apps</li>
              <li><strong className="text-foreground">Make ($10.59/mo):</strong> Same cross-app capability, 10,000 ops/mo, more complex branching</li>
            </ul>
          </div>

          {/* ── Slack Deep Dive ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Slack + Notion: The Best Native Integration</h2>
          <p className="text-muted mb-4">
            The Slack integration is Notion&apos;s strongest native connection. What it does: unfurls Notion links with rich previews, sends database update notifications to channels, and lets you create Notion pages from Slack messages. Both tools&apos; free tiers support the integration, though Slack Free limits you to 90-day message history and 10 integrations. Slack Pro ($8.75/user/mo) removes both limits.
          </p>

          {/* ── Cost Summary ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Full Integration Cost Map</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Connection</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Method</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Extra Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Slack</td><td className="px-4 py-2.5 text-muted">Native</td><td className="px-4 py-2.5 text-muted">$0</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">GitHub / Jira / Figma</td><td className="px-4 py-2.5 text-muted">Native</td><td className="px-4 py-2.5 text-muted">$0</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Google Drive / Loom</td><td className="px-4 py-2.5 text-muted">Native embed</td><td className="px-4 py-2.5 text-muted">$0</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Google Calendar</td><td className="px-4 py-2.5 text-muted">Middleware</td><td className="px-4 py-2.5 text-muted">$10.59&ndash;$29.99/mo</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Gmail / Outlook</td><td className="px-4 py-2.5 text-muted">Middleware</td><td className="px-4 py-2.5 text-muted">$10.59&ndash;$29.99/mo</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">CRM (HubSpot, Pipedrive, etc.)</td><td className="px-4 py-2.5 text-muted">Middleware</td><td className="px-4 py-2.5 text-muted">$10.59&ndash;$29.99/mo</td></tr>
                <tr><td className="px-4 py-2.5 text-foreground font-medium">Internal automation</td><td className="px-4 py-2.5 text-muted">Native (Plus+)</td><td className="px-4 py-2.5 text-muted">$12/user/mo (Plus plan)</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Can I use Notion as a CRM?</h3>
          <p className="text-muted mb-4">
            Yes, but with limitations. Notion databases can track contacts and deals. Free tier works for under 50 contacts. But you lose email tracking, automated sequences, and pipeline reporting that Pipedrive Lite ($14/seat/mo) provides. For solo operators managing 20-50 relationships, Notion-as-CRM works. Beyond that, use a dedicated tool.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Is Notion API free to use?</h3>
          <p className="text-muted mb-4">
            Yes. The Notion API is available on all plans including Free. Rate limits are generous (3 requests/second). Building custom integrations requires developer time but no API fees.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Do I need Notion Plus for integrations?</h3>
          <p className="text-muted mb-4">
            No. Native integrations (Slack, GitHub, Figma) and the API work on Notion Free. Plus ($12/user/mo) adds custom automations (internal triggers) and 30-day page history. You only need Plus for Notion-internal automation, not for external integrations.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "when-notion-needs-a-paid-plan",
            "notion-vs-obsidian-decision",
            "zapier-vs-native-integrations",
          ]}
          comparisons={["notion-vs-clickup"]}
        />
      </article>
    </>
  );
}
