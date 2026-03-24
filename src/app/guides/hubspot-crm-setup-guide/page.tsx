import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HubSpot CRM Setup in 30 Minutes: The No-Nonsense Guide",
  description:
    "Set up HubSpot CRM from scratch in 30 minutes. Account creation, contact imports, deal pipeline configuration, email integration, and your first automation — with the common mistakes to avoid.",
};

export default function HubspotCrmSetupGuide() {
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
              HubSpot CRM Setup Guide
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
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            HubSpot CRM Setup in 30 Minutes: The No-Nonsense Guide
          </h1>
          <p className="text-lg text-muted">
            You picked HubSpot. Good. Now you need it running &mdash; not next week after watching 14 tutorials, but today. This guide walks you through account creation to first automation in 30 minutes flat. No theory, no &ldquo;best practices&rdquo; essays. Just the steps, in order, with time estimates.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Total Time Estimate ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Total Setup Time: ~30 Minutes</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Account creation &amp; initial settings &mdash; 5 minutes</li>
              <li>Import contacts &mdash; 8 minutes</li>
              <li>Set up deal pipeline &mdash; 5 minutes</li>
              <li>Email integration &mdash; 5 minutes</li>
              <li>First automation &mdash; 7 minutes</li>
            </ul>
          </div>

          {/* ── Step 1: Account Creation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 1: Account Creation and Initial Settings <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <p className="text-muted mb-4">
            Go to hubspot.com and click &ldquo;Get started free.&rdquo; Use your work email, not a personal one &mdash; HubSpot ties account ownership to the email domain, and switching later is a pain. If your company already has a HubSpot account, ask the admin to invite you instead of creating a new one. Duplicate accounts cause data fragmentation.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Sign up with your work email.</strong> Google or Microsoft SSO is fastest. Skip the company size questions &mdash; they&apos;re for HubSpot&apos;s sales team, not your setup.</li>
            <li><strong className="text-foreground">Set your company name and timezone.</strong> Settings &rarr; Account Defaults &rarr; General. Get the timezone right now. Changing it later messes with email scheduling and activity timestamps.</li>
            <li><strong className="text-foreground">Set your currency.</strong> Settings &rarr; Account Defaults &rarr; Currency. Add your primary currency. You can add secondary currencies later, but the default affects every deal you create.</li>
            <li><strong className="text-foreground">Upload your company logo.</strong> Settings &rarr; Account Defaults &rarr; Branding. This shows up in email templates, meeting links, and forms. Skip if you don&apos;t have one ready &mdash; it&apos;s cosmetic.</li>
            <li><strong className="text-foreground">Skip the onboarding wizard.</strong> HubSpot&apos;s guided setup tries to sell you features. Click &ldquo;Skip&rdquo; or &ldquo;I&apos;ll do this later&rdquo; on every prompt. This guide is faster.</li>
          </ol>

          {/* ── Step 2: Import Contacts ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 2: Import Contacts <span className="text-sm font-normal text-muted">(8 minutes)</span></h2>
          <p className="text-muted mb-4">
            You have contacts somewhere &mdash; a spreadsheet, another CRM, or a pile of business cards you photographed. Here&apos;s how to get them into HubSpot cleanly.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">From a Spreadsheet (CSV/Excel)</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Clean your spreadsheet first.</strong> Remove duplicate rows. Make sure every contact has at least an email address. HubSpot uses email as the unique identifier &mdash; contacts without email addresses create orphan records.</li>
            <li><strong className="text-foreground">Standardize column headers.</strong> Use &ldquo;First Name,&rdquo; &ldquo;Last Name,&rdquo; &ldquo;Email,&rdquo; &ldquo;Phone,&rdquo; &ldquo;Company.&rdquo; HubSpot&apos;s import tool auto-maps standard headers. Creative column names mean manual mapping.</li>
            <li><strong className="text-foreground">Go to Contacts &rarr; Import.</strong> Click &ldquo;Start an import&rdquo; &rarr; &ldquo;File from computer&rdquo; &rarr; &ldquo;One file&rdquo; &rarr; &ldquo;One object&rdquo; &rarr; &ldquo;Contacts.&rdquo;</li>
            <li><strong className="text-foreground">Upload and map columns.</strong> HubSpot will auto-detect most fields. Review the mapping carefully. If a column doesn&apos;t match, create a custom property or skip it.</li>
            <li><strong className="text-foreground">Don&apos;t check &ldquo;create list from import.&rdquo;</strong> You can segment later. Import lists clutter your nav and rarely match what you actually need.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">From Another CRM (Salesforce, Pipedrive, Zoho)</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Export from your old CRM first.</strong> Every CRM has a CSV export. Use it. Don&apos;t rely on HubSpot&apos;s native integrations for migration &mdash; they sync ongoing data, they don&apos;t migrate history.</li>
            <li><strong className="text-foreground">Export contacts, companies, and deals separately.</strong> Three CSV files. HubSpot imports each object type individually.</li>
            <li><strong className="text-foreground">Import contacts first, then companies, then deals.</strong> This order matters. Deals reference contacts and companies. If those don&apos;t exist yet, your deal associations break.</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Import Gotcha</p>
            <p className="text-sm text-muted">
              HubSpot&apos;s free tier allows unlimited contacts in the CRM, but only 2,000 marketing email sends per month. Importing 10,000 contacts doesn&apos;t cost you anything &mdash; but trying to email all of them does. Set imported contacts to &ldquo;non-marketing&rdquo; by default and selectively promote the ones you actually email.
            </p>
          </div>

          {/* ── Step 3: Deal Pipeline ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 3: Set Up Your Deal Pipeline <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <p className="text-muted mb-4">
            HubSpot gives you a default pipeline with stages like &ldquo;Appointment Scheduled,&rdquo; &ldquo;Qualified to Buy,&rdquo; &ldquo;Presentation Scheduled.&rdquo; These are generic and probably wrong for your business. Fix them now.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Settings &rarr; Objects &rarr; Deals &rarr; Pipelines.</strong></li>
            <li><strong className="text-foreground">Edit the default pipeline.</strong> Rename it to match your business (e.g., &ldquo;Sales Pipeline&rdquo; or &ldquo;Client Acquisition&rdquo;).</li>
            <li><strong className="text-foreground">Set 4&ndash;6 stages maximum.</strong> Here&apos;s a proven starting point for most B2B businesses:</li>
          </ol>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stage</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Win Probability</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What It Means</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lead In</td>
                  <td className="px-4 py-2.5">10%</td>
                  <td className="px-4 py-2.5">Initial interest, no meeting yet</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Meeting Booked</td>
                  <td className="px-4 py-2.5">25%</td>
                  <td className="px-4 py-2.5">Discovery call scheduled</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Proposal Sent</td>
                  <td className="px-4 py-2.5">50%</td>
                  <td className="px-4 py-2.5">Pricing/scope shared</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Negotiation</td>
                  <td className="px-4 py-2.5">75%</td>
                  <td className="px-4 py-2.5">Discussing terms, close is likely</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Closed Won</td>
                  <td className="px-4 py-2.5">100%</td>
                  <td className="px-4 py-2.5">Deal signed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Closed Lost</td>
                  <td className="px-4 py-2.5">0%</td>
                  <td className="px-4 py-2.5">Deal dead</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Set win probabilities for each stage.</strong> This powers HubSpot&apos;s revenue forecast. The numbers above are starting points &mdash; adjust after 30&ndash;60 days of real data.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Delete the stages you don&apos;t use.</strong> The default pipeline has 7 stages. Most businesses need 4&ndash;6. Extra stages slow down your team and make the pipeline board harder to read.
          </p>

          {/* ── Step 4: Email Integration ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 4: Connect Your Email <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <p className="text-muted mb-4">
            Email integration is one of HubSpot&apos;s strongest features on the free tier. Every email you send and receive gets logged to the contact record automatically. Here&apos;s how to set it up.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Gmail</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Settings &rarr; General &rarr; Email &rarr; Connect personal email.</strong></li>
            <li><strong className="text-foreground">Select Gmail and authorize with Google OAuth.</strong> HubSpot requests read/send permissions. This is required for two-way logging.</li>
            <li><strong className="text-foreground">Enable &ldquo;Log emails in CRM.&rdquo;</strong> This logs every sent email to the matching contact record. You can exclude specific addresses (e.g., personal contacts) later.</li>
            <li><strong className="text-foreground">Install the HubSpot Chrome extension (optional but useful).</strong> It adds HubSpot tracking, templates, and meeting links directly inside Gmail.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Outlook / Microsoft 365</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Settings &rarr; General &rarr; Email &rarr; Connect personal email.</strong></li>
            <li><strong className="text-foreground">Select Office 365 and authorize.</strong> Your Microsoft admin may need to whitelist HubSpot&apos;s app registration first. If you get a permissions error, that&apos;s why.</li>
            <li><strong className="text-foreground">Enable email logging.</strong> Same as Gmail &mdash; two-way sync logs sent and received emails to contact records.</li>
            <li><strong className="text-foreground">Install the Outlook add-in.</strong> Settings &rarr; General &rarr; Email &rarr; &ldquo;Install HubSpot Sales Outlook add-in.&rdquo;</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Email Integration Limitation on Free</p>
            <p className="text-sm text-muted">
              Free accounts get email logging and tracking (200 notifications/month). You do not get email sequences (automated follow-up chains) &mdash; that requires Starter ($20/seat/month). You also get 5 email templates total on the free plan. If you send templated outreach, you&apos;ll hit this limit fast.
            </p>
          </div>

          {/* ── Step 5: First Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 5: Create Your First Automation <span className="text-sm font-normal text-muted">(7 minutes)</span></h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s free tier doesn&apos;t include full workflow automation (that&apos;s Professional at $890/month). But you can set up basic automations that save real time without paying a cent.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Free Automation: Task Creation on Deal Stage Change</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Automations &rarr; Workflows (if available) or use deal-based automation.</strong> On free, this is accessible via Settings &rarr; Objects &rarr; Deals &rarr; Pipeline automation.</li>
            <li><strong className="text-foreground">Set a trigger: &ldquo;When a deal moves to Proposal Sent.&rdquo;</strong></li>
            <li><strong className="text-foreground">Set an action: &ldquo;Create a task &mdash; Follow up in 3 days.&rdquo;</strong> Assign it to the deal owner.</li>
            <li><strong className="text-foreground">Save and test.</strong> Move a test deal to &ldquo;Proposal Sent&rdquo; and verify the task appears in your task queue.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Free Automation: Auto-Rotate Lead Assignment</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Settings &rarr; Objects &rarr; Contacts &rarr; Lead assignment.</strong></li>
            <li><strong className="text-foreground">Create a rotation rule.</strong> Round-robin incoming contacts across your sales reps. This works on free if you use HubSpot forms as your lead source.</li>
            <li><strong className="text-foreground">Test with a form submission.</strong> Submit your own form and verify the contact gets assigned to the correct rep.</li>
          </ol>

          {/* ── Common Setup Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Setup Mistakes</h2>
          <ul className="list-disc pl-5 space-y-3 text-muted mb-4">
            <li>
              <strong className="text-foreground">Creating too many pipeline stages.</strong> Eight, nine, ten stages &mdash; your team won&apos;t use them consistently. Deals will sit in wrong stages because reps can&apos;t remember the difference between &ldquo;Qualified&rdquo; and &ldquo;Needs Analysis&rdquo; and &ldquo;Decision Maker Identified.&rdquo; Start with 5 stages. Add one only when you have a proven reason.
            </li>
            <li>
              <strong className="text-foreground">Importing dirty data.</strong> Duplicate emails, missing names, phone numbers in the email field. HubSpot will import whatever you give it, including garbage. Spend 10 minutes cleaning your CSV. Remove rows without email addresses. Deduplicate. Your future self will thank you.
            </li>
            <li>
              <strong className="text-foreground">Creating custom properties for everything.</strong> HubSpot lets you create unlimited custom fields. Resist the urge on day one. Use the default properties (first name, last name, email, company, phone, job title, lifecycle stage). You&apos;ll know what custom properties you actually need after two weeks of use.
            </li>
            <li>
              <strong className="text-foreground">Connecting personal email to a shared CRM.</strong> If multiple people share one HubSpot account, do not connect a personal Gmail that contains non-work emails. Those emails get logged to contact records and become visible to your team.
            </li>
            <li>
              <strong className="text-foreground">Setting all imported contacts to &ldquo;marketing contact.&rdquo;</strong> Marketing contacts count toward your email limits and (on paid plans) your contact tier pricing. Import as non-marketing by default. Promote to marketing only the contacts you actively email.
            </li>
          </ul>

          {/* ── What to Skip on Day 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip on Day 1</h2>
          <p className="text-muted mb-4">
            HubSpot has hundreds of features. Ignoring most of them on day one is the right call. Here&apos;s what to postpone:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Custom reporting and dashboards.</strong> You need at least 2&ndash;4 weeks of data before any report tells you anything useful. Build reports after you have 20+ deals moving through your pipeline.</li>
            <li><strong className="text-foreground">Advanced workflow automation.</strong> Complex if/then workflows on day one are premature. You don&apos;t know your actual process yet. Use HubSpot for a month, then automate the repetitive parts.</li>
            <li><strong className="text-foreground">Lead scoring.</strong> You need behavioral data (email opens, page views, form submissions) to build a useful lead score. That data takes time to accumulate.</li>
            <li><strong className="text-foreground">Chatbots and live chat.</strong> Get your pipeline and contacts working first. Adding chat to your website is a week-two task at the earliest.</li>
            <li><strong className="text-foreground">Third-party integrations (beyond email).</strong> Don&apos;t connect Slack, Zoom, Zapier, or anything else until you understand your HubSpot workflow. Connecting tools before you have a process creates noise, not value.</li>
            <li><strong className="text-foreground">Marketing Hub features.</strong> Landing pages, email campaigns, and ad tracking are separate products inside HubSpot. Set up the CRM first. Add marketing tools once your contact management is solid.</li>
          </ul>

          {/* ── What Your First Week Looks Like ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What Your First Week Should Look Like</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Day</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Day 1</td>
                  <td className="px-4 py-2.5">Complete this guide. Account, import, pipeline, email, first automation.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Day 2&ndash;3</td>
                  <td className="px-4 py-2.5">Use HubSpot for actual work. Log deals, send emails, create tasks. Note friction points.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Day 4&ndash;5</td>
                  <td className="px-4 py-2.5">Add 1&ndash;2 custom properties you genuinely need. Adjust pipeline stages if one isn&apos;t getting used.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Week 2</td>
                  <td className="px-4 py-2.5">Set up your first saved view/filter. Connect one integration (Slack or Zoom). Invite teammates if applicable.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does HubSpot CRM setup actually take?</h3>
                <p className="text-muted">About 30 minutes for a functional setup &mdash; account, contacts imported, pipeline configured, email connected. Getting comfortable with daily use takes about a week. Full optimization (custom properties, saved views, integrations) takes 2&ndash;4 weeks.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I import contacts from a spreadsheet for free?</h3>
                <p className="text-muted">Yes. HubSpot Free allows unlimited CSV/Excel imports with no contact limits for CRM storage. You can import thousands of contacts without paying anything. The limit is on marketing emails (2,000/month on free), not on CRM storage.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I start on HubSpot Free or go straight to Starter?</h3>
                <p className="text-muted">Start on Free. The features that matter for setup &mdash; contacts, deals, email logging, meeting scheduler &mdash; are all included. Upgrade to Starter ($20/seat/month) only when you need email sequences, more than 5 templates, or want to remove HubSpot branding. Most teams get 1&ndash;3 months of use before needing Starter.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need to connect Gmail/Outlook, or can I just use HubSpot for emails?</h3>
                <p className="text-muted">You can use HubSpot&apos;s built-in email for marketing sends, but it&apos;s not a replacement for your inbox. Connecting Gmail or Outlook gives you automatic email logging on contact records, email tracking (open/click notifications), and the ability to send from HubSpot using your own email address. This is what makes HubSpot useful for sales &mdash; without it, you&apos;re just keeping a contact list.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the best number of pipeline stages?</h3>
                <p className="text-muted">Four to six. Fewer than four and you lose visibility into deal progress. More than six and reps stop moving deals through stages consistently. Start with 5 (Lead In, Meeting Booked, Proposal Sent, Negotiation, Closed Won/Lost) and adjust after you have 30 days of real pipeline activity.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use HubSpot CRM without buying Marketing Hub or Sales Hub?</h3>
                <p className="text-muted">Yes. The CRM is a standalone free product. Marketing Hub and Sales Hub are optional paid add-ons. Many companies use HubSpot CRM for years without ever buying a Hub. The CRM handles contacts, companies, deals, tasks, and email logging at $0.</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
