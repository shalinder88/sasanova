import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pipedrive Setup for Sales Teams: Pipeline to First Deal",
  description:
    "Set up Pipedrive for your sales team: account creation, pipeline customization, contact import, email sync, activity scheduling, and dashboard basics. From zero to first tracked deal.",
};

export default function PipedriveSetupGuide() {
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
              Pipedrive Setup Guide
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Implementation Guide
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Pipedrive Setup for Sales Teams: Pipeline to First Deal
          </h1>
          <p className="text-lg text-muted">
            Pipedrive does one thing better than any other CRM: visual pipeline management. It was built for salespeople who think in deals, not marketers who think in campaigns. This guide gets your team from sign-up to tracking live deals in under 40 minutes. No certifications required.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Total Time Estimate ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Total Setup Time: ~40 Minutes</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Account creation &amp; pipeline customization &mdash; 10 minutes</li>
              <li>Import contacts and deals &mdash; 10 minutes</li>
              <li>Email sync and tracking &mdash; 5 minutes</li>
              <li>Activity types and scheduling &mdash; 8 minutes</li>
              <li>Dashboard and reporting basics &mdash; 7 minutes</li>
            </ul>
          </div>

          {/* ── Step 1: Account & Pipeline ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 1: Account Creation and Pipeline Customization <span className="text-sm font-normal text-muted">(10 minutes)</span></h2>
          <p className="text-muted mb-4">
            Pipedrive offers a 14-day free trial on all plans (no credit card required). Start with the Advanced plan trial &mdash; it includes email sync, automations, and the scheduler, which are the features that make Pipedrive worth using.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Sign up at pipedrive.com.</strong> Use your work email. Name your company account &mdash; this becomes the workspace name teammates see.</li>
            <li><strong className="text-foreground">Skip the onboarding flow.</strong> Pipedrive walks you through sample data. Skip it &mdash; sample data clutters your real workspace and you have to delete it later.</li>
            <li><strong className="text-foreground">Go to Settings &rarr; Company settings.</strong> Set your currency, timezone, and fiscal year start. Get these right now &mdash; they affect deal values and reporting from day one.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Customize Your Pipeline</h3>
          <p className="text-muted mb-4">
            The default pipeline stages are generic. Replace them with stages that match your actual sales process.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Deals &rarr; Pipeline (top of the board view).</strong> Click the pencil icon to edit stages.</li>
            <li><strong className="text-foreground">Delete the default stages</strong> and create your own. Here&apos;s a proven starting point:</li>
          </ol>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stage</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Probability %</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What Happens Here</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Qualified</td>
                  <td className="px-4 py-2.5">20%</td>
                  <td className="px-4 py-2.5">Lead confirmed as a real opportunity with budget and need</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Meeting Scheduled</td>
                  <td className="px-4 py-2.5">40%</td>
                  <td className="px-4 py-2.5">Discovery or demo call booked</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Proposal Made</td>
                  <td className="px-4 py-2.5">60%</td>
                  <td className="px-4 py-2.5">Pricing or scope document sent</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Negotiation</td>
                  <td className="px-4 py-2.5">80%</td>
                  <td className="px-4 py-2.5">Terms being discussed, close expected</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Won</td>
                  <td className="px-4 py-2.5">100%</td>
                  <td className="px-4 py-2.5">Deal signed and closed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Set deal rotting periods.</strong> Under each stage, set a &ldquo;rot&rdquo; time (e.g., 7 days for Qualified, 14 days for Proposal Made). Pipedrive highlights stale deals in red &mdash; this is one of its best features for keeping reps accountable.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">If you have multiple revenue streams,</strong> create separate pipelines. Example: one for new business, one for renewals. Settings &rarr; Pipelines &rarr; Add Pipeline. Don&apos;t cram different deal types into one pipeline &mdash; it makes forecasting useless.
          </p>

          {/* ── Step 2: Import ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 2: Import Contacts and Deals <span className="text-sm font-normal text-muted">(10 minutes)</span></h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Prepare your CSV.</strong> Pipedrive imports three object types: People (contacts), Organizations (companies), and Deals. Export these from your old CRM or spreadsheet as separate CSVs.</li>
            <li><strong className="text-foreground">Go to &ldquo;...&rdquo; (more) &rarr; Import data.</strong></li>
            <li><strong className="text-foreground">Import People first.</strong> Map columns: Name, Email, Phone, Organization. Pipedrive auto-creates organizations from the organization field &mdash; so you don&apos;t need to import organizations separately if they&apos;re included in your people export.</li>
            <li><strong className="text-foreground">Import Deals second.</strong> Map: Deal title, Value, Pipeline stage, Associated contact. Deals need to reference existing contacts, so import order matters.</li>
            <li><strong className="text-foreground">Review the duplicate detection settings.</strong> Pipedrive checks for duplicate emails during import. Set it to &ldquo;Skip duplicates&rdquo; (not &ldquo;Merge&rdquo;) for your first import. Merging can overwrite data unpredictably.</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Import Tip</p>
            <p className="text-sm text-muted">
              Pipedrive&apos;s Essential plan limits you to 3,000 open deals. If you&apos;re importing historical deals, mark old ones as Won or Lost before importing &mdash; only open deals count toward the limit. Advanced plan and above have no deal limit.
            </p>
          </div>

          {/* ── Step 3: Email ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 3: Email Sync and Tracking <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <p className="text-muted mb-4">
            Pipedrive&apos;s email sync logs every email you send and receive to the associated contact&apos;s timeline. This is the feature that makes a CRM useful vs. a fancy spreadsheet.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Settings &rarr; Personal preferences &rarr; Email sync.</strong></li>
            <li><strong className="text-foreground">Connect Gmail or Outlook.</strong> Click &ldquo;Connect account&rdquo; and authorize via OAuth. Takes 30 seconds.</li>
            <li><strong className="text-foreground">Choose sync direction.</strong> Two-way sync logs both sent and received emails. One-way (sent only) is an option if you want privacy for incoming personal emails.</li>
            <li><strong className="text-foreground">Enable email tracking.</strong> Settings &rarr; Personal preferences &rarr; Email tracking. This adds invisible tracking pixels to outgoing emails so you see when contacts open your emails.</li>
            <li><strong className="text-foreground">Enable link tracking.</strong> Same settings page. Tracks when contacts click links in your emails. Useful for knowing who read your proposal.</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Email Sync Requires Advanced Plan</p>
            <p className="text-sm text-muted">
              Full email sync (two-way, with tracking) requires the Advanced plan ($39/seat/month) or higher. The Essential plan ($14/seat/month) does not include email sync &mdash; you can send emails from Pipedrive but they won&apos;t auto-log to contact timelines. If email integration is important (and for sales teams, it is), the Advanced plan is the real starting point.
            </p>
          </div>

          {/* ── Step 4: Activities ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 4: Activity Types and Scheduling <span className="text-sm font-normal text-muted">(8 minutes)</span></h2>
          <p className="text-muted mb-4">
            Pipedrive is built around activities &mdash; calls, emails, meetings, tasks. Every deal should always have a next activity scheduled. Deals without next activities are deals you&apos;re forgetting.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Settings &rarr; Company settings &rarr; Activity types.</strong></li>
            <li>
              <strong className="text-foreground">Customize activity types to match your sales process:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">Call</strong> &mdash; default, keep it</li>
                <li><strong className="text-foreground">Meeting</strong> &mdash; default, keep it</li>
                <li><strong className="text-foreground">Email</strong> &mdash; default, keep it</li>
                <li><strong className="text-foreground">Follow-up</strong> &mdash; add this for generic check-ins</li>
                <li><strong className="text-foreground">Demo</strong> &mdash; add this if you give product demonstrations</li>
                <li><strong className="text-foreground">Proposal review</strong> &mdash; add this if you walk clients through proposals</li>
              </ul>
            </li>
            <li><strong className="text-foreground">Delete activity types you won&apos;t use.</strong> Fewer options = faster data entry for reps.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Set Up the Scheduler</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Activities &rarr; Scheduler.</strong></li>
            <li><strong className="text-foreground">Connect your Google or Outlook calendar.</strong> This enables Pipedrive to show your availability and avoid double-booking.</li>
            <li><strong className="text-foreground">Create a booking link.</strong> Set available hours, meeting duration, and buffer times. Share this link with prospects instead of going back and forth on email.</li>
            <li><strong className="text-foreground">Scheduler is included on Advanced plan and above.</strong> Essential plan does not include it.</li>
          </ol>

          {/* ── Step 5: Dashboard ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 5: Dashboard and Reporting Basics <span className="text-sm font-normal text-muted">(7 minutes)</span></h2>
          <p className="text-muted mb-4">
            Pipedrive ships with pre-built dashboards that work out of the box. Don&apos;t over-customize on day one &mdash; you need data in the system first.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Insights &rarr; Dashboards.</strong> The default dashboard shows deal pipeline, activities completed, revenue forecast, and win rate.</li>
            <li>
              <strong className="text-foreground">Add 3 essential reports</strong> if they&apos;re not already there:
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">Pipeline value by stage</strong> &mdash; shows total deal value at each pipeline stage</li>
                <li><strong className="text-foreground">Activities completed this week</strong> &mdash; tracks rep activity (calls made, emails sent, meetings held)</li>
                <li><strong className="text-foreground">Deal conversion rate by stage</strong> &mdash; shows where deals drop off in your pipeline</li>
              </ul>
            </li>
            <li><strong className="text-foreground">Set the dashboard as your homepage.</strong> Insights &rarr; three-dot menu &rarr; &ldquo;Set as default view.&rdquo; This forces you (and your team) to see pipeline health every time you open Pipedrive.</li>
            <li><strong className="text-foreground">Skip custom reports for now.</strong> The pre-built reports are sufficient for the first 30 days. Custom reports (available on Professional plan and above) make sense once you have 30+ deals and want specific funnel analysis.</li>
          </ol>

          {/* ── When to Add Integrations ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">When to Add Integrations vs. Keep It Simple</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Integration</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Add Now</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Add Later</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Gmail / Outlook</td>
                  <td className="px-4 py-2.5 text-green-400">Day 1</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Google Calendar</td>
                  <td className="px-4 py-2.5 text-green-400">Day 1</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Slack</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">Week 2 &mdash; once you know what notifications you actually want</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zapier / Make</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">Week 3+ &mdash; automate after you know your workflow</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Zoom / Google Meet</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">Week 2 &mdash; if you use the scheduler for prospect booking</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp / email marketing</td>
                  <td className="px-4 py-2.5">&mdash;</td>
                  <td className="px-4 py-2.5">Month 2+ &mdash; Pipedrive is not a marketing tool, connect when you need contact sync</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            The rule: connect email and calendar on day one because they&apos;re core CRM functions. Connect everything else after you&apos;ve used Pipedrive for at least a week and know what&apos;s actually creating friction.
          </p>

          {/* ── Common Setup Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Setup Mistakes</h2>
          <ul className="list-disc pl-5 space-y-3 text-muted mb-4">
            <li>
              <strong className="text-foreground">Starting on Essential to save money.</strong> Essential ($14/seat) lacks email sync, automations, and the scheduler. These are the features that make Pipedrive useful. Advanced ($39/seat) is the real starting plan for sales teams. The $25/seat difference pays for itself with the first deal you don&apos;t lose to a missed follow-up.
            </li>
            <li>
              <strong className="text-foreground">Creating 8+ pipeline stages.</strong> Same problem as HubSpot &mdash; too many stages and reps stop using them consistently. Start with 5. The drag-and-drop board becomes unusable on small screens when you have 8+ columns.
            </li>
            <li>
              <strong className="text-foreground">Not setting deal rotting periods.</strong> Deal rotting (deals turning red after X days without activity) is one of Pipedrive&apos;s best features. If you don&apos;t set it, deals sit and die silently. Set aggressive rot timers &mdash; 5 days for early stages, 10 days for later stages.
            </li>
            <li>
              <strong className="text-foreground">Importing without cleaning data first.</strong> Phone numbers in the email column, company names with typos, duplicate contacts with slightly different email addresses. Pipedrive will import all of it. Clean your CSV first. Five extra minutes of data prep saves hours of CRM cleanup.
            </li>
            <li>
              <strong className="text-foreground">Letting reps skip activity scheduling.</strong> The number one predictor of CRM adoption failure is reps who stop logging activities. Mandate the rule: every deal must have a next scheduled activity. Pipedrive shows deals without next activities as a warning &mdash; use that as a management tool.
            </li>
          </ul>

          {/* ── What to Skip on Day 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip on Day 1</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Workflow automations.</strong> Pipedrive&apos;s automation builder (Advanced plan+) lets you auto-assign deals, create activities on stage changes, and send emails on triggers. Set these up after week 2, once you know your actual workflow.</li>
            <li><strong className="text-foreground">Custom fields beyond the basics.</strong> Add custom fields only when you have a specific data point you need to track. &ldquo;Just in case&rdquo; custom fields become a graveyard of empty fields that slow down deal entry.</li>
            <li><strong className="text-foreground">Web forms and chatbots.</strong> Pipedrive has lead capture forms (called LeadBooster, add-on at $32.50/company/month). These are fine but optional. Most teams use their website forms + Zapier instead.</li>
            <li><strong className="text-foreground">Revenue forecasting.</strong> Forecasting requires at least 30 days of real deal data to mean anything. Set it up at the end of month one.</li>
            <li><strong className="text-foreground">Team permissions and visibility settings.</strong> If you have 2&ndash;3 reps, everyone seeing everything is fine. Set up visibility rules when you hire rep #5 or have separate teams.</li>
          </ul>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Pipedrive have a free plan?</h3>
                <p className="text-muted">No. Pipedrive offers a 14-day free trial (no credit card required) but has no permanent free tier. The Essential plan starts at $14/seat/month (billed annually). For sales teams, the Advanced plan at $39/seat/month is the practical starting point because it includes email sync and automations.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does Pipedrive compare to HubSpot CRM?</h3>
                <p className="text-muted">Pipedrive is a sales-focused CRM with a visual pipeline as the centerpiece. HubSpot is a marketing-and-sales platform with a CRM built in. Pipedrive is easier to set up, cheaper for small teams (Advanced at $39/seat vs. HubSpot Professional at $890/month flat), and more focused on deal management. HubSpot is better if you need marketing automation, content tools, or a customer service hub in the same platform.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I import data from HubSpot or Salesforce into Pipedrive?</h3>
                <p className="text-muted">Yes. Export contacts, companies, and deals from your old CRM as CSV files. Import them into Pipedrive in order: people first, then deals. Pipedrive&apos;s import mapper handles most field mappings automatically. Notes, email history, and custom objects from Salesforce require manual handling or a paid migration tool like Import2.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which Pipedrive plan should my sales team start on?</h3>
                <p className="text-muted">Advanced ($39/seat/month). Essential lacks email sync and automations &mdash; the two features that make a CRM more than a spreadsheet. Professional ($49/seat/month) adds advanced reporting, revenue forecasts, and e-signatures &mdash; useful but not essential for getting started. Upgrade to Professional after 30&ndash;60 days if you need deeper analytics.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many deals can I track in Pipedrive?</h3>
                <p className="text-muted">Essential plan: 3,000 open deals. Advanced and above: unlimited. &ldquo;Open&rdquo; means active deals &mdash; won and lost deals don&apos;t count toward the limit. If you have more than 3,000 active deals, you need Advanced or higher. Most teams under 25 reps never hit the 3,000 limit.</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
