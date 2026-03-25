import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Your Spreadsheet CRM is Costing You Deals: When and How to Switch",
  description:
    "The exact moment spreadsheets break as a CRM, which CRM fits which stage, 30-minute setup guides, and the $0 CRM options that actually work. Practical migration guide for spreadsheet-to-CRM transitions.",
};

export default function MigrateSpreadsheetToCrm() {
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
              Spreadsheet to CRM Migration
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              CRM Migration
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Your Spreadsheet CRM is Costing You Deals: When and How to Switch
          </h1>
          <p className="text-lg text-muted">
            A Google Sheet with columns for name, email, status, and notes isn&apos;t a CRM. It&apos;s a contact list that you update when you remember. And it works &mdash; until it doesn&apos;t. This guide covers the exact moment spreadsheets stop working, which CRM to pick based on how you sell, and how to make the switch in an afternoon.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-10 mb-4">The Exact Moment Spreadsheets Break</h2>
          <p className="text-muted mb-4">
            Spreadsheets as a CRM fail at a predictable point. It&apos;s not a contact count &mdash; it&apos;s a complexity threshold. Here are the five warning signs:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">You forget to follow up.</strong> Not once &mdash; repeatedly. A warm lead emails you, you add them to the sheet, then two weeks later you realize you never responded. A CRM with activity reminders prevents this. A spreadsheet can&apos;t nag you.</li>
            <li><strong className="text-foreground">You have 50&ndash;100+ active contacts.</strong> Below 50, most people can keep track mentally with a sheet as backup. Above 100, the scrolling, Ctrl+F searching, and manual sorting becomes a time sink. The sweet spot for switching is the 50&ndash;100 range.</li>
            <li><strong className="text-foreground">Multiple people need access.</strong> The moment a second person edits the sheet, you get conflicting updates, overwritten cells, and version confusion. Even Google Sheets with shared editing becomes chaotic when two people are updating deal statuses simultaneously.</li>
            <li><strong className="text-foreground">You need email context.</strong> A spreadsheet tells you someone&apos;s email address. A CRM shows you the last 15 emails you exchanged, when they opened your proposal, and that they visited your pricing page yesterday. Without email integration, you&apos;re flying blind.</li>
            <li><strong className="text-foreground">You can&apos;t answer &quot;how&apos;s the pipeline?&quot;</strong> If someone asks how many deals are in progress, what your expected close rate is, or which deals are stalling, you have to manually count and calculate. A CRM generates this in one click.</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The honest threshold:</p>
            <p className="text-sm text-muted">
              If you have fewer than 30 active contacts, no team members who need access, and your &quot;sales process&quot; is just replying to emails &mdash; stay on your spreadsheet. A CRM adds overhead you don&apos;t need yet. Come back when you start losing track of conversations.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Which CRM for Which Stage</h2>
          <p className="text-muted mb-4">
            Not every CRM fits every situation. Here&apos;s the decision based on how you work:
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">If You Are...</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Use This</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Starting Cost</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">A networker / relationship builder</td>
                  <td className="px-4 py-2.5">Folk</td>
                  <td className="px-4 py-2.5">$0 (200 contacts) / $20/mo</td>
                  <td className="px-4 py-2.5">Groups contacts by relationship, not pipeline. Chrome extension imports from LinkedIn.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">A deal closer with defined stages</td>
                  <td className="px-4 py-2.5">Pipedrive</td>
                  <td className="px-4 py-2.5">$14/user/mo</td>
                  <td className="px-4 py-2.5">Visual pipeline built for moving deals through stages. Activity-based selling reminders.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">A small team wanting free + growth path</td>
                  <td className="px-4 py-2.5">HubSpot Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Unlimited contacts, basic pipeline, email tracking. Upgrades available as you scale.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">An inside sales team doing outreach</td>
                  <td className="px-4 py-2.5">Close</td>
                  <td className="px-4 py-2.5">$59/user/mo</td>
                  <td className="px-4 py-2.5">Built-in calling, email sequences, and SMS. No separate outreach tool needed.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">A startup wanting modern + AI-native</td>
                  <td className="px-4 py-2.5">Attio</td>
                  <td className="px-4 py-2.5">$0 (3 seats) / $34/seat/mo</td>
                  <td className="px-4 py-2.5">Auto-enriches contacts from email. Flexible data model. Clean UI.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Budget-conscious, need full features</td>
                  <td className="px-4 py-2.5">Freshsales</td>
                  <td className="px-4 py-2.5">$0 (3 users) / $11/user/mo</td>
                  <td className="px-4 py-2.5">Free tier with phone and chat built in. Growth plan at $11/mo is hard to beat on value.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">30-Minute Setup: Folk (For Relationship Builders)</h2>
          <p className="text-muted mb-4">
            Folk is the right choice if your work is about maintaining relationships, not tracking deal stages. Consultants, freelancers, investors, BD professionals, community builders.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Sign up and connect your email</strong> (3 min). Folk pulls contacts from your inbox automatically. Connect Gmail or Outlook and let it sync.</li>
            <li><strong className="text-foreground">Create 3&ndash;4 groups</strong> (5 min). Think in categories, not stages. Examples: &quot;Active Clients,&quot; &quot;Warm Prospects,&quot; &quot;Industry Network,&quot; &quot;Past Projects.&quot; Each contact can belong to multiple groups.</li>
            <li><strong className="text-foreground">Import your spreadsheet</strong> (5 min). Export your Google Sheet as CSV. In Folk, go to import, upload the CSV, map columns to Folk fields. Name and email are required. Add tags to match your groups.</li>
            <li><strong className="text-foreground">Install the Chrome extension</strong> (2 min). This lets you add contacts directly from LinkedIn, Twitter, or Gmail with one click. It&apos;s the feature that makes Folk sticky.</li>
            <li><strong className="text-foreground">Set up a reminder sequence</strong> (10 min). Create an email sequence for checking in with warm contacts every 2&ndash;3 weeks. Folk&apos;s Standard plan ($20/mo) includes this.</li>
            <li><strong className="text-foreground">Add 5 contacts manually</strong> (5 min). Don&apos;t just import. Add your top 5 contacts with full context notes. This builds the habit of using Folk as your primary contact tool.</li>
          </ol>

          <h2 className="text-xl font-bold mt-10 mb-4">30-Minute Setup: Pipedrive (For Deal Closers)</h2>
          <p className="text-muted mb-4">
            Pipedrive works when you have a repeatable sales process with clear stages. Lead comes in, gets qualified, receives a proposal, signs or doesn&apos;t.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Sign up and name your pipeline</strong> (2 min). One pipeline is enough to start. Name it after your main revenue stream.</li>
            <li><strong className="text-foreground">Define 4&ndash;6 stages</strong> (5 min). Keep it simple. Example: &quot;New Lead&quot; &rarr; &quot;Contacted&quot; &rarr; &quot;Meeting Booked&quot; &rarr; &quot;Proposal Sent&quot; &rarr; &quot;Negotiation&quot; &rarr; &quot;Won/Lost.&quot; You can always add stages later.</li>
            <li><strong className="text-foreground">Connect your email</strong> (3 min). Gmail or Outlook. This enables automatic email logging and open tracking. Non-negotiable &mdash; skip this and you won&apos;t use Pipedrive.</li>
            <li><strong className="text-foreground">Import your spreadsheet</strong> (5 min). Pipedrive&apos;s CSV import maps your columns to contacts, organizations, and deals. If your spreadsheet has a &quot;status&quot; or &quot;stage&quot; column, map it to Pipedrive pipeline stages.</li>
            <li><strong className="text-foreground">Set up one automation</strong> (10 min). Start with: &quot;When a deal moves to Proposal Sent, create a follow-up activity in 3 days.&quot; This single automation prevents your most common leak &mdash; forgetting to follow up after sending a proposal. Requires Advanced plan ($39/mo) for automations.</li>
            <li><strong className="text-foreground">Install the mobile app</strong> (5 min). Half your CRM updates happen after meetings or calls. If you don&apos;t have the app, you won&apos;t log activities until you&apos;re back at your desk &mdash; and by then you&apos;ve forgotten the details.</li>
          </ol>

          <h2 className="text-xl font-bold mt-10 mb-4">30-Minute Setup: HubSpot Free (For Teams That Want $0)</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s free CRM is genuinely useful if you accept its limitations. Unlimited contacts, basic pipeline, email tracking, and meeting scheduling at no cost.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Create your account</strong> (3 min). Use your business email. HubSpot will ask about your company size and goals &mdash; skip the onboarding wizard if it tries to sell you a paid plan.</li>
            <li><strong className="text-foreground">Connect email and calendar</strong> (3 min). Gmail or Outlook. This gives you email tracking (know when contacts open your emails) and meeting scheduling (like Calendly, but free).</li>
            <li><strong className="text-foreground">Import your spreadsheet</strong> (5 min). Settings &rarr; Import &rarr; Start an import &rarr; File from computer. HubSpot walks you through column mapping. It handles deduplication reasonably well.</li>
            <li><strong className="text-foreground">Set up deal stages</strong> (5 min). Sales &rarr; Deals &rarr; customize your pipeline stages. Same logic as Pipedrive: 4&ndash;6 stages that match your actual process.</li>
            <li><strong className="text-foreground">Create a dashboard</strong> (5 min). HubSpot gives you a default sales dashboard. Customize it to show deals by stage, activities completed, and deals expected to close this month.</li>
            <li><strong className="text-foreground">Set up 2&ndash;3 email templates</strong> (9 min). Free tier gives you 5 templates. Create your most-used outreach messages as templates for faster sending.</li>
          </ol>

          <h2 className="text-xl font-bold mt-10 mb-4">What to Import and What to Leave Behind</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Bring These</h3>
              <ul className="list-disc pl-4 space-y-1.5 text-sm text-muted">
                <li>Name and email address</li>
                <li>Company name</li>
                <li>Last contact date</li>
                <li>Deal value or revenue potential</li>
                <li>Source (how you found them)</li>
                <li>Current status or stage</li>
                <li>One notes field with key context</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-3">Leave Behind</h3>
              <ul className="list-disc pl-4 space-y-1.5 text-sm text-muted">
                <li>Contacts older than 18 months with no interaction</li>
                <li>Phone numbers you&apos;ve never dialed</li>
                <li>Mailing addresses you&apos;ll never use</li>
                <li>Duplicate rows (deduplicate before importing)</li>
                <li>Columns you created but never filled in</li>
                <li>Contacts from events you attended 3+ years ago</li>
                <li>Any row where you can&apos;t remember who the person is</li>
              </ul>
            </div>
          </div>
          <p className="text-muted mb-4">
            The goal isn&apos;t to move your entire spreadsheet. It&apos;s to start fresh with clean, current data. A CRM with 150 active, up-to-date contacts is worth more than one with 2,000 stale entries you&apos;ll never touch.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The $0 CRM Options That Actually Work</h2>
          <p className="text-muted mb-4">
            If you&apos;re not ready to pay, these free tiers are genuinely functional &mdash; not just trial bait.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Limits</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What&apos;s Missing</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Free</td>
                  <td className="px-4 py-2.5">Unlimited contacts, basic pipeline, 5 email templates, 200 tracking notifications/mo</td>
                  <td className="px-4 py-2.5">No automation, no sequences, HubSpot branding, limited reporting</td>
                  <td className="px-4 py-2.5">Teams wanting a growth path to paid features</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Folk Free</td>
                  <td className="px-4 py-2.5">200 contacts, Chrome extension, basic groups and tags</td>
                  <td className="px-4 py-2.5">No email sequences, limited enrichment, 200 contact cap</td>
                  <td className="px-4 py-2.5">Individuals managing a small network</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Freshsales Free</td>
                  <td className="px-4 py-2.5">Up to 3 users, contact management, built-in phone and chat</td>
                  <td className="px-4 py-2.5">No pipeline view, no automation, no reporting</td>
                  <td className="px-4 py-2.5">Tiny teams that want built-in calling for free</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM Free</td>
                  <td className="px-4 py-2.5">Up to 3 users, 5,000 records, basic lead/contact/deal management</td>
                  <td className="px-4 py-2.5">No workflows, no custom dashboards, basic modules only</td>
                  <td className="px-4 py-2.5">Teams already using Zoho apps</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Attio Free</td>
                  <td className="px-4 py-2.5">Up to 3 seats, 25,000 records, email sync, auto-enrichment</td>
                  <td className="px-4 py-2.5">No advanced automations, no AI features, no API access</td>
                  <td className="px-4 py-2.5">Startups wanting automatic contact enrichment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The honest verdict on free CRMs:</strong> HubSpot Free is the most functional free CRM for teams. Attio Free is the most modern. Folk Free is usable but the 200-contact cap means you&apos;ll outgrow it fast. Freshsales and Zoho Free work but feel dated compared to the competition.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to a CRM Yet</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Under 30 active contacts with no team.</strong> Your spreadsheet works. A CRM adds a login, an app, and a learning curve you don&apos;t need. Revisit when you hit 50+ contacts.</li>
            <li><strong className="text-foreground">Your business doesn&apos;t involve repeat contact.</strong> If you sell a product once and never talk to the customer again (some e-commerce, one-time services), a CRM adds friction with no payoff. Your order management system is your CRM.</li>
            <li><strong className="text-foreground">You&apos;re not losing deals due to disorganization.</strong> If your follow-up rate is solid, your close rate is healthy, and you can answer pipeline questions from memory &mdash; the spreadsheet isn&apos;t broken. Don&apos;t fix what works.</li>
            <li><strong className="text-foreground">You hate software and won&apos;t use it.</strong> A CRM you don&apos;t open is worse than a spreadsheet you check daily. Be honest about your habits. If you know you&apos;ll abandon the CRM after two weeks, save yourself the setup time.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li>
              <strong className="text-foreground">Picking a CRM based on features you don&apos;t need.</strong> Salesforce has territory management. You have 12 clients. Picking a tool for where you might be in 3 years means paying for complexity today. Pick for your current reality.
            </li>
            <li>
              <strong className="text-foreground">Importing your entire contact history.</strong> That spreadsheet with 3,000 rows going back to 2018? Import the last 12&ndash;18 months of active contacts. Archive the rest. Starting clean is the entire point of switching.
            </li>
            <li>
              <strong className="text-foreground">Skipping the email integration.</strong> If your emails don&apos;t automatically log in the CRM, you have to manually copy email context into contact records. Nobody does this. Connect your email on day one or the CRM becomes another silo.
            </li>
            <li>
              <strong className="text-foreground">Creating too many pipeline stages.</strong> Five to six stages is enough for most businesses. More stages means more friction when updating deals. Start simple, add stages only when you notice gaps.
            </li>
            <li>
              <strong className="text-foreground">Not setting a cutoff date for the spreadsheet.</strong> If you keep using both the spreadsheet and the CRM, you&apos;ll maintain neither. Pick a date &mdash; two weeks from migration &mdash; and stop updating the spreadsheet completely.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">The Bottom Line</h2>
          <p className="text-muted mb-4">
            The spreadsheet-to-CRM migration is the easiest migration in software. You&apos;re moving from a flat file to a purpose-built tool. There&apos;s no legacy system to untangle, no automations to rebuild, no integrations to reconnect. Export CSV, import CSV, connect your email, done.
          </p>
          <p className="text-muted mb-6">
            The hard part isn&apos;t the migration. It&apos;s the habit change. A CRM only works if you use it daily. Start with the minimum viable setup &mdash; contacts, email connection, and one pipeline. Build the habit before you build the system. The best CRM for a spreadsheet refugee is the one you&apos;ll still be using in 90 days.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I switch from a spreadsheet to a CRM?</h3>
                <p className="text-muted">When you regularly forget to follow up with leads, have more than 50 active contacts, need to share access with team members, or can&apos;t quickly answer how many deals are in your pipeline. Below 30 contacts with no team, a spreadsheet is fine.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best free CRM to replace a spreadsheet?</h3>
                <p className="text-muted">HubSpot Free is the most full-featured free CRM with unlimited contacts and a basic pipeline. Attio Free is the most modern with auto-enrichment from email. Folk Free works for relationship managers but caps at 200 contacts. Freshsales Free includes built-in phone and chat for up to 3 users.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I import my spreadsheet into a CRM?</h3>
                <p className="text-muted">Export your spreadsheet as a CSV file. In your chosen CRM, look for an import or upload option (every CRM has one). Map your spreadsheet columns to CRM fields (name, email, company, etc.). Clean your data first: remove duplicates, delete contacts you haven&apos;t talked to in 18+ months, and standardize field formats.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which is better for small businesses: Pipedrive or HubSpot?</h3>
                <p className="text-muted">Pipedrive ($14/user/month) is better for teams focused on closing deals with a defined sales process. HubSpot Free is better for teams that want $0 cost and a growth path to marketing tools. If you need automation, HubSpot requires Professional at $890/month while Pipedrive offers it at $39/user/month (Advanced plan).</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "close-crm", "zoho-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "close-crm-vs-pipedrive", "zoho-crm-vs-hubspot-crm"]}
            guides={[
              "crm-solo-founder",
              "best-crm-freelancers-consultants",
              "pipedrive-setup-guide",
            ]}
          />
        </div>
      </article>
    </>
  );
}
