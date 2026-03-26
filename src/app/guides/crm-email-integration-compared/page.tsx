import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Email Integration: Gmail and Outlook Sync Across 6 CRMs",
  description:
    "Which CRMs sync email natively, which need Zapier/Make, and which tier it requires. HubSpot, Pipedrive, Salesforce, Zoho, Close, and Freshsales compared with exact prices.",
};

export default function CrmEmailIntegrationComparedPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">CRM Email Integration</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            CRM Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Email Integration: Gmail and Outlook Sync Across 6 CRMs
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Email sync is the single most important CRM integration. If your emails do not appear automatically in the CRM, your team will not use it. Here is what actually works on each platform.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-4">Email Sync Comparison Table</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Gmail Sync</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Outlook Sync</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tier Required</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Native (Free)</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Native (Free)</td>
                    <td className="px-3 py-2.5 text-muted">Free Tools</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-3 py-2.5 text-muted">Native (Growth+)</td>
                    <td className="px-3 py-2.5 text-muted">Native (Growth+)</td>
                    <td className="px-3 py-2.5 text-muted">Growth</td>
                    <td className="px-3 py-2.5 text-muted">$39/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-3 py-2.5 text-muted">Native (all tiers)</td>
                    <td className="px-3 py-2.5 text-muted">Native (all tiers)</td>
                    <td className="px-3 py-2.5 text-muted">Starter Suite</td>
                    <td className="px-3 py-2.5 text-muted">$25/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-3 py-2.5 text-muted">Native (Standard+)</td>
                    <td className="px-3 py-2.5 text-muted">Native (Standard+)</td>
                    <td className="px-3 py-2.5 text-muted">Standard</td>
                    <td className="px-3 py-2.5 text-muted">$20/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Close</td>
                    <td className="px-3 py-2.5 text-muted">Native (Essentials+)</td>
                    <td className="px-3 py-2.5 text-muted">Native (Essentials+)</td>
                    <td className="px-3 py-2.5 text-muted">Essentials</td>
                    <td className="px-3 py-2.5 text-muted">$49/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Native (Free)</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">Native (Free)</td>
                    <td className="px-3 py-2.5 text-muted">Free</td>
                    <td className="px-3 py-2.5 text-accent font-semibold">$0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">What &quot;Email Sync&quot; Actually Means</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>There are three levels of email integration, and vendors are not always clear about which they offer:</p>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Level 1: BCC / Manual Logging</p>
                <p>You BCC a special email address to log emails in the CRM. Requires manual effort on every email. Available on most free tiers.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Level 2: Two-Way Sync</p>
                <p>Emails you send and receive in Gmail/Outlook automatically appear on the contact record in the CRM. No manual effort. This is what actually drives CRM adoption.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Level 3: Send from CRM</p>
                <p>Send emails directly from the CRM interface, with tracking (opens, clicks, replies). Usually includes templates and sequences.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Platform-by-Platform Details</h2>
            <div className="space-y-6 text-sm text-muted">
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">HubSpot</h3>
                <p>HubSpot offers the most generous email integration. The Free Tools tier includes two-way email sync with Gmail and Outlook, email tracking (opens and clicks), email templates, and the ability to send from HubSpot. This alone makes HubSpot Free worth considering even if you use another CRM for deals. Sequences (automated follow-up emails) require Starter at $20/seat/mo.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Pipedrive</h3>
                <p>Email sync is gated behind Growth at $39/seat/mo. On Lite ($14/seat), you get BCC logging only. This is a significant limitation &mdash; Pipedrive Lite is great for pipeline management but poor for email tracking. If email integration matters to you, budget for Growth from day one.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Salesforce</h3>
                <p>Gmail and Outlook integration is available on all plans starting at Starter Suite ($25/seat/mo). Salesforce uses Einstein Activity Capture to sync emails. Setup is more complex than other CRMs and may require admin configuration. The sidebar plugin for Gmail/Outlook works well once configured.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Zoho CRM</h3>
                <p>Email sync requires Standard at $20/seat/mo. The Free tier (3 users) includes basic email but not true two-way sync. Zoho works best when paired with Zoho Mail for a fully integrated experience. Gmail and Outlook sync work but require the Zoho extension.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Close</h3>
                <p>Close stands out because email is a core feature, not an add-on. Essentials ($49/seat) includes full two-way email sync, email sequences, and the ability to send emails from Close. Close also includes built-in calling (Power Dialer on Essentials, Predictive Dialer on Scale $149/seat), making it uniquely strong for inside sales. Solo ($19/seat) is limited to 1 user with basic features.</p>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">Freshsales</h3>
                <p>The Free tier includes built-in email (send and receive), plus Gmail and Outlook sync. Growth ($11/seat) adds email sequences. This makes Freshsales one of the most cost-effective options if email integration is your primary requirement.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">When You Need Zapier or Make Instead</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>Sometimes the native email sync is not enough, and you need middleware (Zapier or Make) for specific workflows:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Syncing email activity to a CRM that does not support your provider natively</li>
                <li>Triggering CRM actions based on specific email events (e.g., reply received &rarr; move deal stage)</li>
                <li>Logging emails from shared inboxes or support tools into the CRM</li>
                <li>Connecting niche email clients that lack native CRM integrations</li>
              </ul>
              <p className="mt-3"><strong className="text-foreground">Cost of middleware:</strong> Zapier Professional starts at $29.99/mo for 750 tasks. Make Core starts at $10.59/mo for 10,000 operations. For simple email-to-CRM logging, Make is typically 60&ndash;70% cheaper than Zapier.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which CRM has the best free email integration?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  HubSpot Free. It includes two-way Gmail/Outlook sync, email tracking, templates, and the ability to send from HubSpot &mdash; all at $0. Freshsales Free is second, with built-in email plus Gmail/Outlook sync for up to 3 users.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is Pipedrive worth $39/seat just for email sync?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  If email sync is critical (it usually is), then yes &mdash; Pipedrive Growth at $39/seat is the real starting tier for most teams. Lite at $14/seat is only sufficient if your team is disciplined about BCC logging, which almost nobody is long-term.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I use Close just for email without the calling features?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes, but you would be paying for features you do not use. Close Essentials at $49/seat includes calling, which is its differentiator. If you only need email + CRM, HubSpot Free or Freshsales Growth ($11/seat) are more cost-effective.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "salesforce", "zoho-crm", "close-crm", "freshsales"]}
            guides={["crm-integrations-that-matter", "crm-pipeline-setup-best-practices", "how-to-choose-crm"]}
          />
        </div>
      </article>
    </>
  );
}
