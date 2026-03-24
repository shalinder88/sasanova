import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your First 5 Zapier Automations: A Practical Setup Guide",
  description:
    "Set up Zapier and build 5 practical automations step-by-step: form to CRM, subscriber to Slack, calendar to notes, blog to social, and weekly digest. Plus free tier task-counting tips.",
};

export default function ZapierSetupGuide() {
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
              Zapier Setup Guide
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
            Your First 5 Zapier Automations: A Practical Setup Guide
          </h1>
          <p className="text-lg text-muted">
            Zapier connects 7,000+ apps with no-code automations called Zaps. The free plan gives you 100 tasks per month and 5 Zaps. That&apos;s enough to automate the 5 most tedious parts of your workflow &mdash; if you pick the right ones. This guide walks you through account setup and 5 high-value automations, step by step.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Total Time Estimate ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Total Setup Time: ~45 Minutes</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Account setup &amp; orientation &mdash; 5 minutes</li>
              <li>Automation #1: Form &rarr; CRM &mdash; 8 minutes</li>
              <li>Automation #2: Subscriber &rarr; Slack &mdash; 7 minutes</li>
              <li>Automation #3: Calendar &rarr; Notes doc &mdash; 8 minutes</li>
              <li>Automation #4: Blog &rarr; Social draft &mdash; 8 minutes</li>
              <li>Automation #5: Weekly report &rarr; Email &mdash; 9 minutes</li>
            </ul>
          </div>

          {/* ── Account Setup ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Account Setup and Free Tier Orientation <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Sign up at zapier.com.</strong> Use your work email. Google SSO is fastest.</li>
            <li><strong className="text-foreground">Skip the suggested templates.</strong> Zapier shows you pre-made Zaps during onboarding. Ignore them &mdash; they&apos;re designed to consume your limited tasks quickly. We&apos;ll build targeted automations instead.</li>
            <li><strong className="text-foreground">Understand the free tier limits:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">100 tasks/month.</strong> A &ldquo;task&rdquo; is one action that runs successfully. A 2-step Zap that triggers 50 times uses 50 tasks (the trigger doesn&apos;t count, only actions do).</li>
                <li><strong className="text-foreground">5 Zaps total.</strong> You can have 5 active automations at once.</li>
                <li><strong className="text-foreground">Single-step only.</strong> Free Zaps can only have one trigger and one action. Multi-step (trigger &rarr; action &rarr; action) requires Professional at $29.99/month.</li>
                <li><strong className="text-foreground">15-minute polling.</strong> Zapier checks for new triggers every 15 minutes on free. Not instant.</li>
              </ul>
            </li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Free Tier Math</p>
            <p className="text-sm text-muted">
              100 tasks/month across 5 Zaps means about 20 tasks per Zap per month. If one automation triggers daily (30 tasks), you have 70 tasks left for the other four. Plan accordingly &mdash; high-frequency automations eat your task budget fast.
            </p>
          </div>

          {/* ── Automation #1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation #1: New Form Submission &rarr; CRM Contact <span className="text-sm font-normal text-muted">(8 minutes)</span></h2>
          <p className="text-muted mb-4">
            Every time someone fills out your contact form (Tally, Typeform, Google Forms, or HubSpot Forms), automatically create or update a contact in your CRM. No manual data entry.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Click &ldquo;Create Zap.&rdquo;</strong></li>
            <li><strong className="text-foreground">Trigger: Choose your form tool</strong> (e.g., Tally). Event: &ldquo;New Submission.&rdquo; Connect your account and select the specific form.</li>
            <li><strong className="text-foreground">Test the trigger.</strong> Zapier pulls in a recent submission as sample data. If you have no submissions, create a test one first.</li>
            <li><strong className="text-foreground">Action: Choose your CRM</strong> (e.g., HubSpot). Event: &ldquo;Create or Update Contact.&rdquo;</li>
            <li><strong className="text-foreground">Map the fields.</strong> Email from the form &rarr; Email in the CRM. First Name &rarr; First Name. Map whatever fields your form collects.</li>
            <li><strong className="text-foreground">Test the action.</strong> Zapier creates a real contact in your CRM with the sample data. Verify it shows up correctly.</li>
            <li><strong className="text-foreground">Turn on the Zap.</strong></li>
          </ol>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Task usage:</strong> 1 task per form submission. If you get 15 form submissions per month, that&apos;s 15 tasks.
          </p>

          {/* ── Automation #2 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation #2: New Email Subscriber &rarr; Slack Notification <span className="text-sm font-normal text-muted">(7 minutes)</span></h2>
          <p className="text-muted mb-4">
            Get a Slack message every time someone subscribes to your newsletter. Small thing, but it keeps subscriber growth visible to your team without checking dashboards.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Create Zap &rarr; Trigger: your email platform</strong> (beehiiv, Mailchimp, Kit). Event: &ldquo;New Subscriber.&rdquo;</li>
            <li><strong className="text-foreground">Action: Slack.</strong> Event: &ldquo;Send Channel Message.&rdquo;</li>
            <li><strong className="text-foreground">Select the Slack channel</strong> (e.g., #growth or #newsletter).</li>
            <li><strong className="text-foreground">Format the message.</strong> Something like: &ldquo;New subscriber: [email] from [source].&rdquo; Map the subscriber email and source fields from your trigger.</li>
            <li><strong className="text-foreground">Test and turn on.</strong></li>
          </ol>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Task usage:</strong> 1 task per new subscriber. If you get 50 subscribers per month, that&apos;s 50 tasks. High-growth lists can blow through your free tier limit &mdash; consider turning this off if you exceed 30&ndash;40 subscribers/month and need tasks for other Zaps.
          </p>

          {/* ── Automation #3 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation #3: New Calendar Event &rarr; Meeting Notes Doc <span className="text-sm font-normal text-muted">(8 minutes)</span></h2>
          <p className="text-muted mb-4">
            Automatically create a Google Doc (or Notion page) with meeting details every time a new event appears on your calendar. Pre-populated with attendee names, date, and a notes template.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Create Zap &rarr; Trigger: Google Calendar.</strong> Event: &ldquo;New Event.&rdquo; Select the calendar.</li>
            <li><strong className="text-foreground">Add a filter (optional, uses a built-in feature):</strong> Only trigger for events with more than one attendee (skip personal calendar blocks).</li>
            <li><strong className="text-foreground">Action: Google Docs.</strong> Event: &ldquo;Create Document from Template.&rdquo;</li>
            <li><strong className="text-foreground">Create a template doc in Google Drive first.</strong> Include placeholders: Meeting Title, Date, Attendees, Agenda, Notes, Action Items. Zapier fills in the dynamic parts.</li>
            <li><strong className="text-foreground">Map the fields:</strong> Event name &rarr; Meeting Title. Start time &rarr; Date. Attendees &rarr; Attendees list.</li>
            <li><strong className="text-foreground">Set the output folder</strong> in Google Drive so meeting notes don&apos;t scatter everywhere.</li>
            <li><strong className="text-foreground">Test and turn on.</strong></li>
          </ol>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Task usage:</strong> 1 task per calendar event. If you have 3 meetings per week, that&apos;s 12&ndash;15 tasks per month.
          </p>

          {/* ── Automation #4 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation #4: New Blog Post &rarr; Social Media Draft <span className="text-sm font-normal text-muted">(8 minutes)</span></h2>
          <p className="text-muted mb-4">
            Every time you publish a blog post, automatically create a social media draft so you don&apos;t forget to promote it. This doesn&apos;t auto-post (you review first) &mdash; it creates a draft you can edit and schedule.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Create Zap &rarr; Trigger: RSS by Zapier.</strong> Event: &ldquo;New Item in Feed.&rdquo; Enter your blog&apos;s RSS feed URL.</li>
            <li><strong className="text-foreground">Action: Buffer (or your social scheduler).</strong> Event: &ldquo;Create Draft.&rdquo;</li>
            <li><strong className="text-foreground">Format the draft:</strong> Map the post title and URL from the RSS item. Add a standard intro like: &ldquo;New post: [Title] &mdash; [URL]&rdquo;</li>
            <li><strong className="text-foreground">Select the social profile(s)</strong> you want drafts created for (Twitter/X, LinkedIn, etc.).</li>
            <li><strong className="text-foreground">Test and turn on.</strong></li>
          </ol>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Task usage:</strong> 1 task per blog post. If you publish 4 posts per month, that&apos;s 4 tasks. Extremely efficient.
          </p>

          {/* ── Automation #5 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation #5: Weekly Report &rarr; Email Digest <span className="text-sm font-normal text-muted">(9 minutes)</span></h2>
          <p className="text-muted mb-4">
            Automatically pull data from a Google Sheet (or Airtable) and send a weekly summary email to yourself or your team. Works for sales numbers, content metrics, or any data you track in spreadsheets.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Create Zap &rarr; Trigger: Schedule by Zapier.</strong> Event: &ldquo;Every Week.&rdquo; Pick Monday morning.</li>
            <li><strong className="text-foreground">Action: Gmail (or Outlook).</strong> Event: &ldquo;Send Email.&rdquo;</li>
            <li><strong className="text-foreground">Set the recipient</strong> (yourself or a team distribution list).</li>
            <li><strong className="text-foreground">Build the email body.</strong> On the free plan (single-step), you&apos;re limited to a static email with a link to your tracking spreadsheet. Format it as: &ldquo;Weekly reminder: Review this week&apos;s numbers at [Google Sheet link].&rdquo;</li>
            <li><strong className="text-foreground">For dynamic data in the email:</strong> This requires multi-step (Professional plan) &mdash; trigger: Schedule &rarr; action 1: Lookup Spreadsheet Row &rarr; action 2: Send Email with data. If you&apos;re on free, the reminder-with-link approach works.</li>
            <li><strong className="text-foreground">Test and turn on.</strong></li>
          </ol>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Task usage:</strong> 1 task per week = 4&ndash;5 tasks per month. Almost nothing.
          </p>

          {/* ── Task Counting Tips ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Task Counting Tips: Stay on Free Longer</h2>
          <p className="text-muted mb-4">
            The free tier&apos;s 100 tasks/month can last months if you&apos;re strategic. Here&apos;s how to stretch it:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Strategy</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">How It Saves Tasks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Use filters</td>
                  <td className="px-4 py-2.5">Filters don&apos;t count as tasks. A Zap that triggers on &ldquo;new email&rdquo; but filters for &ldquo;from: @important-client.com&rdquo; only uses a task when the filter passes.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Avoid high-frequency triggers</td>
                  <td className="px-4 py-2.5">A &ldquo;new email received&rdquo; trigger fires constantly. &ldquo;New form submission&rdquo; fires only when someone submits. Choose low-frequency triggers for free.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pause Zaps you don&apos;t need this month</td>
                  <td className="px-4 py-2.5">You have 5 Zap slots but can rotate. Run 3 Zaps this month, swap 2 next month for different automations.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Monitor task usage weekly</td>
                  <td className="px-4 py-2.5">Settings &rarr; Billing shows task usage. Check weekly mid-month. If you&apos;re at 80 tasks by day 15, pause the highest-frequency Zap.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Use webhooks instead of polling</td>
                  <td className="px-4 py-2.5">Some apps (Stripe, GitHub) support webhooks that trigger instantly without polling. Webhooks are more efficient and don&apos;t create phantom task consumption from failed polls.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Task Budget for All 5 ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Monthly Task Budget for All 5 Automations</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Automation #1 (Form &rarr; CRM): ~15 tasks</li>
              <li>Automation #2 (Subscriber &rarr; Slack): ~30 tasks</li>
              <li>Automation #3 (Calendar &rarr; Notes): ~15 tasks</li>
              <li>Automation #4 (Blog &rarr; Social): ~4 tasks</li>
              <li>Automation #5 (Weekly digest): ~4 tasks</li>
              <li className="font-semibold text-foreground pt-1 border-t border-border mt-1">Total: ~68 tasks/month (32 tasks buffer)</li>
            </ul>
          </div>

          {/* ── Common Setup Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Setup Mistakes</h2>
          <ul className="list-disc pl-5 space-y-3 text-muted mb-4">
            <li>
              <strong className="text-foreground">Building multi-step Zaps on the free plan.</strong> Free only supports single-step (one trigger, one action). If you try to add a second action, Zapier prompts you to upgrade. Plan your automations as single-step first.
            </li>
            <li>
              <strong className="text-foreground">Not testing before turning on.</strong> Always run the test step for both trigger and action. A Zap that looks right in the builder but maps the wrong field will silently corrupt your CRM or spam your Slack channel.
            </li>
            <li>
              <strong className="text-foreground">Using &ldquo;New Email&rdquo; as a trigger.</strong> This fires on every email you receive. On the free plan, you&apos;ll burn through 100 tasks in a day or two. If you must trigger on email, add a filter (specific sender, subject line keyword) to limit frequency.
            </li>
            <li>
              <strong className="text-foreground">Forgetting that tasks reset monthly.</strong> Unused tasks don&apos;t roll over. If you used 40 tasks this month, you don&apos;t get 160 next month. It resets to 100.
            </li>
            <li>
              <strong className="text-foreground">Connecting sensitive accounts without reviewing permissions.</strong> Zapier requests broad permissions from connected apps. Before connecting your Google account, review what Zapier can access. You can often use a service account or limited-permission OAuth for safer integration.
            </li>
          </ul>

          {/* ── What to Skip on Day 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip on Day 1</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Zapier Tables and Interfaces.</strong> These are Zapier&apos;s newer database and form-builder products. They&apos;re useful, but add complexity. Set up your core automations first.</li>
            <li><strong className="text-foreground">AI actions.</strong> Zapier offers AI-powered actions (summarize, classify, extract). They&apos;re cool but consume tasks and add latency. Optimize your basic automations before adding AI steps.</li>
            <li><strong className="text-foreground">Team workspaces.</strong> If you&apos;re the only person using Zapier, skip workspace setup. It adds admin overhead with no benefit for solo users.</li>
            <li><strong className="text-foreground">Complex paths and branching.</strong> Conditional logic (Paths) is a Professional feature and adds complexity. Get your single-step automations running reliably first. Add branching when you have a specific need, not because it seems useful.</li>
            <li><strong className="text-foreground">Connecting more than 5 apps.</strong> You have 5 Zap slots. Don&apos;t connect 15 apps &ldquo;just in case.&rdquo; Connect only the apps you&apos;re actively using in a Zap. Unused connections create security surface area.</li>
          </ul>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many tasks does the Zapier free plan include?</h3>
                <p className="text-muted">100 tasks per month, 5 active Zaps, and single-step automations only (one trigger + one action). Tasks are counted per successful action execution. Triggers and filters don&apos;t count. Tasks reset monthly and don&apos;t roll over.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What counts as a &ldquo;task&rdquo; in Zapier?</h3>
                <p className="text-muted">Each action that successfully runs counts as one task. If a Zap has a trigger and one action, each time it runs uses 1 task. Multi-step Zaps (Professional plan) use one task per action step. Triggers, filters, and error retries don&apos;t count as tasks.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from free to Professional?</h3>
                <p className="text-muted">When you consistently hit 100 tasks before month-end, need more than 5 active Zaps, or need multi-step automations. Professional costs $29.99/month and gives you 750 tasks, unlimited Zaps, and multi-step support. If you&apos;re close to the limit, check if pausing low-priority Zaps can extend free usage first.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Zapier or Make better for beginners?</h3>
                <p className="text-muted">Zapier is easier to learn and has more pre-built integrations (7,000+ vs 1,800+). Make is cheaper at scale and more powerful for complex workflows. If you&apos;re non-technical and want to automate simple tasks, start with Zapier. If you need complex logic or high-volume automations, evaluate Make.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Zapier to connect apps that aren&apos;t in their library?</h3>
                <p className="text-muted">Yes, via webhooks. If an app can send or receive HTTP requests, you can connect it to Zapier using &ldquo;Webhooks by Zapier&rdquo; as a trigger or action. This is more technical (requires understanding URLs, JSON, and HTTP methods) but covers almost any API-enabled app.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How fast do Zapier automations run?</h3>
                <p className="text-muted">Free plan: Zapier checks for new triggers every 15 minutes. Professional: every 2 minutes. Webhook-based triggers (Stripe, GitHub, etc.) fire instantly on all plans. If you need real-time automation, use apps that support webhooks rather than polling.</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
