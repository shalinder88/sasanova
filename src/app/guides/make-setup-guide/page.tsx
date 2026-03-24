import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Make (Integromat) Setup: Your First Automation Without the Confusion",
  description:
    "Set up Make from scratch: account creation, free tier limits, understanding scenarios and modules, building your first automation, error handling, scheduling, and when to upgrade from free to Core.",
};

export default function MakeSetupGuide() {
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
              Make Setup Guide
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
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Make (Integromat) Setup: Your First Automation Without the Confusion
          </h1>
          <p className="text-lg text-muted">
            Make is the automation platform people switch to when Zapier gets too expensive or too limited. It&apos;s more powerful, significantly cheaper at scale, and uses a visual flowchart builder that looks intimidating at first but clicks after 15 minutes. This guide gets you from signup to a running automation with proper error handling &mdash; the thing Zapier doesn&apos;t make you learn.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Total Time Estimate ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Total Setup Time: ~50 Minutes</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Account creation &amp; free tier orientation &mdash; 5 minutes</li>
              <li>Understanding scenarios, modules, and operations &mdash; 10 minutes (reading)</li>
              <li>Build your first scenario &mdash; 15 minutes</li>
              <li>Error handling basics &mdash; 10 minutes</li>
              <li>Scheduling and monitoring &mdash; 10 minutes</li>
            </ul>
          </div>

          {/* ── Step 1: Account Creation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 1: Account Creation and Free Tier Limits <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Sign up at make.com.</strong> Email or Google SSO. No credit card required for the free plan.</li>
            <li><strong className="text-foreground">Skip the onboarding wizard.</strong> Make shows you a guided tour with sample scenarios. Skip it &mdash; we&apos;ll build something real instead.</li>
            <li>
              <strong className="text-foreground">Understand your free tier limits:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">1,000 operations per month.</strong> An &ldquo;operation&rdquo; is any module that processes data. More on this below.</li>
                <li><strong className="text-foreground">2 active scenarios.</strong> You can build more, but only 2 can be turned on at once.</li>
                <li><strong className="text-foreground">Minimum 15-minute scheduling interval.</strong> Scenarios check for new data every 15 minutes at fastest.</li>
                <li><strong className="text-foreground">10 MB data transfer limit.</strong> Fine for text data. Can be tight for file attachments.</li>
              </ul>
            </li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Operations vs. Zapier Tasks</p>
            <p className="text-sm text-muted">
              Make counts every module that runs as one operation. A scenario with a trigger + 3 actions uses 4 operations per run (trigger counts too). Zapier only counts actions (triggers are free). So 1,000 Make operations is roughly equivalent to 250&ndash;500 Zapier tasks depending on scenario complexity. However, Make&apos;s paid tiers are dramatically cheaper than Zapier&apos;s, so the math favors Make at any real volume.
            </p>
          </div>

          {/* ── Step 2: Concepts ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 2: Understanding Scenarios, Modules, and Operations <span className="text-sm font-normal text-muted">(10 minutes reading)</span></h2>
          <p className="text-muted mb-4">
            Make uses different terminology than Zapier. Understanding these three concepts upfront prevents confusion for the entire time you use the platform.
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Make Term</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Equivalent</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What It Is</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scenario</td>
                  <td className="px-4 py-2.5">Zap</td>
                  <td className="px-4 py-2.5">A complete automation workflow. The whole thing from trigger to final action.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Module</td>
                  <td className="px-4 py-2.5">Step (trigger or action)</td>
                  <td className="px-4 py-2.5">A single node in the flowchart. Each module connects to an app and performs one operation (watch, create, update, search, etc.).</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Operation</td>
                  <td className="px-4 py-2.5">Task (but different counting)</td>
                  <td className="px-4 py-2.5">One module processing one bundle of data. Every module that runs = 1 operation. Triggers count too.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Router</td>
                  <td className="px-4 py-2.5">Paths</td>
                  <td className="px-4 py-2.5">Splits the scenario into multiple branches based on conditions. Free to use (no extra operations).</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Filter</td>
                  <td className="px-4 py-2.5">Filter</td>
                  <td className="px-4 py-2.5">Conditional gate between modules. If the condition fails, downstream modules don&apos;t run (saving operations).</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Bundle</td>
                  <td className="px-4 py-2.5">No direct equivalent</td>
                  <td className="px-4 py-2.5">A packet of data flowing through the scenario. If a trigger returns 5 items, 5 bundles flow through, and each downstream module runs 5 times (5 operations each).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The visual builder is Make&apos;s core advantage.</strong> Unlike Zapier&apos;s linear step list, Make shows your automation as a flowchart. You drag modules onto a canvas, draw connections between them, and can see the entire flow at a glance. This makes complex automations (routers, error handlers, loops) manageable instead of confusing.
          </p>

          {/* ── Step 3: Build First Scenario ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 3: Build Your First Scenario Step by Step <span className="text-sm font-normal text-muted">(15 minutes)</span></h2>
          <p className="text-muted mb-4">
            We&apos;ll build a practical automation: when a new row is added to a Google Sheet, create a contact in your CRM (HubSpot, Pipedrive, or any CRM Make supports). This is a pattern that works for lead capture, form responses, or manual data entry.
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
            <li>
              <strong className="text-foreground">Click &ldquo;Create a new scenario.&rdquo;</strong> You&apos;ll see an empty canvas with a single empty circle (the starting module).
            </li>
            <li>
              <strong className="text-foreground">Click the empty circle and search for &ldquo;Google Sheets.&rdquo;</strong> Select &ldquo;Watch New Rows.&rdquo; This is your trigger &mdash; it checks for new rows at your set interval.
            </li>
            <li>
              <strong className="text-foreground">Connect your Google account.</strong> Click &ldquo;Create a connection&rdquo; and authorize Make via Google OAuth. Select the specific spreadsheet and sheet tab.
            </li>
            <li>
              <strong className="text-foreground">Set &ldquo;Limit&rdquo; to 10.</strong> This means each run processes up to 10 new rows. On the free plan, processing 10 rows = 10 operations from this module alone, so be mindful.
            </li>
            <li>
              <strong className="text-foreground">Click the right side of the Google Sheets module</strong> to add the next module. A &ldquo;+&rdquo; button appears. Click it and search for your CRM (e.g., &ldquo;HubSpot&rdquo;).
            </li>
            <li>
              <strong className="text-foreground">Select &ldquo;Create a Contact&rdquo; (or &ldquo;Create a Person&rdquo; for Pipedrive).</strong> Connect your CRM account.
            </li>
            <li>
              <strong className="text-foreground">Map the fields.</strong> Click each CRM field and select the corresponding Google Sheets column from the dropdown. Email &rarr; Column A (or whatever your email column is). First Name &rarr; Column B. And so on.
            </li>
            <li>
              <strong className="text-foreground">Click &ldquo;Run once&rdquo;</strong> at the bottom left. Make will process any new rows currently in your sheet. A green checkmark on each module means success. A red X means something went wrong &mdash; click the module to see the error.
            </li>
            <li>
              <strong className="text-foreground">Check your CRM.</strong> Verify the contact was created with the correct data.
            </li>
            <li>
              <strong className="text-foreground">Turn on scheduling</strong> (Step 5 below) once you&apos;ve confirmed it works.
            </li>
          </ol>

          {/* ── Step 4: Error Handling ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 4: Error Handling Basics <span className="text-sm font-normal text-muted">(10 minutes)</span></h2>
          <p className="text-muted mb-4">
            This is the section that separates Make from Zapier. Zapier hides errors in a task history log that most people never check. Make forces you to decide what happens when something breaks &mdash; and that&apos;s genuinely better for production automations.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">How Make Handles Errors</h3>
          <p className="text-muted mb-4">
            When a module fails (API timeout, invalid data, rate limit), Make can do one of five things. Right-click any module and select &ldquo;Add error handler&rdquo; to configure:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Error Handler</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What It Does</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">When to Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Resume</td>
                  <td className="px-4 py-2.5">Ignores the error and continues to the next module</td>
                  <td className="px-4 py-2.5">When the failed step is optional (e.g., Slack notification)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Rollback</td>
                  <td className="px-4 py-2.5">Undoes all actions in the current run</td>
                  <td className="px-4 py-2.5">When partial execution would create data inconsistency</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Commit</td>
                  <td className="px-4 py-2.5">Stops processing but keeps completed actions</td>
                  <td className="px-4 py-2.5">When you want to save what worked and investigate later</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Break</td>
                  <td className="px-4 py-2.5">Stores the failed bundle in a queue for retry</td>
                  <td className="px-4 py-2.5">When errors are transient (API timeouts, rate limits) and retrying will likely succeed</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Ignore</td>
                  <td className="px-4 py-2.5">Suppresses the error completely</td>
                  <td className="px-4 py-2.5">Rarely &mdash; only for known, harmless errors you&apos;ve explicitly decided to skip</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3">Set Up Error Handling for Your First Scenario</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Right-click the CRM module &rarr; &ldquo;Add error handler.&rdquo;</strong></li>
            <li><strong className="text-foreground">Add a &ldquo;Break&rdquo; handler.</strong> This is the safest default. If the CRM API fails (timeout, duplicate contact), the failed row goes into a retry queue instead of being lost.</li>
            <li><strong className="text-foreground">Set retry attempts to 3</strong> with increasing delays. Break handlers retry automatically at intervals you set.</li>
            <li><strong className="text-foreground">Optionally add a notification module on the error path.</strong> Connect an &ldquo;Email&rdquo; or &ldquo;Slack&rdquo; module after the error handler to notify yourself when something fails. This uses 1 extra operation per error but prevents silent failures.</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Why This Matters</p>
            <p className="text-sm text-muted">
              In Zapier, a failed task shows up as a line item in your task history. In Make, you choose whether to retry, skip, rollback, or alert. This is more setup work upfront but means your automations are production-grade from day one instead of silently failing for weeks.
            </p>
          </div>

          {/* ── Step 5: Scheduling ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 5: Scheduling and Execution Monitoring <span className="text-sm font-normal text-muted">(10 minutes)</span></h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Turn On Scheduling</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Click the clock icon</strong> at the bottom of your scenario canvas.</li>
            <li><strong className="text-foreground">Set the interval.</strong> Free plan minimum is 15 minutes. For a Google Sheets &rarr; CRM scenario, 15 minutes is fine. New rows don&apos;t need instant processing.</li>
            <li><strong className="text-foreground">Toggle the scenario ON</strong> using the switch at the bottom left of the canvas. The scenario is now active and will run every 15 minutes.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Monitor Executions</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to the scenario page &rarr; &ldquo;History&rdquo; tab.</strong> This shows every execution with status (success, warning, error), operation count, and processing time.</li>
            <li><strong className="text-foreground">Click any execution to see the data flow.</strong> Make shows you the exact data that passed through each module. This is invaluable for debugging &mdash; you see what went in and what came out at every step.</li>
            <li><strong className="text-foreground">Set up execution notifications.</strong> Scenario settings &rarr; Notifications. Enable &ldquo;Errors&rdquo; to get emailed when a scenario fails. Skip &ldquo;Warnings&rdquo; unless you want high-frequency alerts.</li>
            <li><strong className="text-foreground">Check operation usage.</strong> Dashboard &rarr; Usage. Track your monthly operation consumption. Free tier is 1,000/month &mdash; monitor weekly to avoid surprises.</li>
          </ol>

          {/* ── When to Upgrade ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">When to Move from Free to Core</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Trigger to Upgrade</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Hitting 1,000 operations/month</td>
                  <td className="px-4 py-2.5">Core gives you 10,000 ops/month for $10.59/month. That&apos;s 10x the capacity for about $10.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Need more than 2 active scenarios</td>
                  <td className="px-4 py-2.5">Core unlocks unlimited active scenarios.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Need faster scheduling (under 15 minutes)</td>
                  <td className="px-4 py-2.5">Core allows 1-minute intervals. Useful for time-sensitive automations.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Need data stores</td>
                  <td className="px-4 py-2.5">Make&apos;s built-in key-value database (data stores) is a Core+ feature. Useful for deduplication and state tracking.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The free-to-Core upgrade is one of the best values in SaaS.</strong> $10.59/month for 10,000 operations, unlimited scenarios, 1-minute intervals, and data stores. Compare that to Zapier Professional at $29.99/month for 750 tasks with single-step still counting. Make&apos;s Core plan costs less and does more.
          </p>

          {/* ── Common Setup Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Setup Mistakes</h2>
          <ul className="list-disc pl-5 space-y-3 text-muted mb-4">
            <li>
              <strong className="text-foreground">Not understanding operation counting.</strong> A scenario with 5 modules that processes 10 items uses 50 operations (5 modules &times; 10 items). On the free plan, that&apos;s 5% of your monthly limit in one run. Set low limits on trigger modules (5&ndash;10 items per run) until you understand your consumption.
            </li>
            <li>
              <strong className="text-foreground">Skipping error handlers.</strong> Make lets you build scenarios without error handling. Don&apos;t. Add at least a &ldquo;Break&rdquo; handler on every action module. Silent failures accumulate and create data gaps you won&apos;t notice for weeks.
            </li>
            <li>
              <strong className="text-foreground">Using &ldquo;Run once&rdquo; to test with live data.</strong> &ldquo;Run once&rdquo; processes real data. If your scenario creates contacts or sends emails, the test creates real contacts and sends real emails. Use test/sandbox accounts for initial testing, or at least verify the output module is pointed at the right place.
            </li>
            <li>
              <strong className="text-foreground">Building complex scenarios before understanding bundles.</strong> Bundles are Make&apos;s superpower and its biggest gotcha. If a trigger returns 5 items, every downstream module runs 5 times. If you have a router that splits into 2 paths with 3 modules each, that&apos;s 5 &times; 6 = 30 operations. Understand bundle flow before building multi-path scenarios.
            </li>
            <li>
              <strong className="text-foreground">Connecting too many apps at once.</strong> Each app connection uses OAuth tokens that can expire. Start with 2&ndash;3 app connections. Add more as you build scenarios that need them. Unused connections create maintenance overhead (token refresh failures).
            </li>
          </ul>

          {/* ── What to Skip on Day 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip on Day 1</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Custom functions.</strong> Make lets you write JavaScript transformations inside modules. Powerful but unnecessary for your first scenarios. Use built-in functions (text replace, date format, math) instead.</li>
            <li><strong className="text-foreground">Data stores.</strong> Make&apos;s built-in key-value database is useful for deduplication and tracking state between runs. But it adds complexity. Use a Google Sheet as your &ldquo;database&rdquo; for the first month &mdash; it&apos;s easier to inspect and debug.</li>
            <li><strong className="text-foreground">Complex routers.</strong> Routers split scenarios into branches. Start with linear scenarios (trigger &rarr; action &rarr; action). Add branching when you have a specific condition that requires different outputs.</li>
            <li><strong className="text-foreground">Webhooks.</strong> Custom webhooks are how you connect apps that don&apos;t have native Make modules. But they require understanding HTTP methods, headers, and JSON parsing. Stick to built-in modules first.</li>
            <li><strong className="text-foreground">Templates marketplace.</strong> Make has a templates library. Most templates are over-engineered for simple use cases. Build from scratch so you understand every module in your scenario.</li>
          </ul>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make really cheaper than Zapier?</h3>
                <p className="text-muted">At any real volume, yes. Make Core at $10.59/month gives you 10,000 operations and unlimited scenarios. Zapier Professional at $29.99/month gives you 750 tasks with unlimited Zaps. Even accounting for Make&apos;s trigger-counting (which inflates operation numbers), Make typically costs 50&ndash;80% less for equivalent automation volume.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What counts as an operation in Make?</h3>
                <p className="text-muted">Every module that processes data counts as one operation. Unlike Zapier (where triggers are free), Make counts trigger modules too. A scenario with a trigger + 2 actions processing 1 item uses 3 operations. Processing 10 items uses 30 operations. Filters and routers themselves don&apos;t count, but modules after them do.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Make harder to learn than Zapier?</h3>
                <p className="text-muted">For simple automations: slightly. Make&apos;s visual canvas and terminology (scenarios, modules, bundles) take about 15 minutes longer to grasp than Zapier&apos;s linear step builder. For complex automations: Make is actually easier because the visual flowchart makes branching, error handling, and data flow visible instead of buried in nested menus.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many apps does Make integrate with?</h3>
                <p className="text-muted">Over 1,800 native integrations, plus HTTP/webhook modules for connecting anything with an API. Zapier has 7,000+ integrations. If you need a niche app, check Make&apos;s app directory first. For mainstream SaaS tools (Google, Slack, HubSpot, Stripe, Shopify, etc.), both platforms have native support.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate my Zaps from Zapier to Make?</h3>
                <p className="text-muted">Not automatically. There&apos;s no import tool. You rebuild each automation manually in Make. For simple Zaps (trigger + action), rebuilding takes 5&ndash;10 minutes each. Complex multi-step Zaps with paths can take 30+ minutes. The time investment pays off through lower monthly costs, but it&apos;s a manual migration.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from the free plan?</h3>
                <p className="text-muted">When you consistently exceed 1,000 operations per month or need more than 2 active scenarios. Core at $10.59/month is the obvious next step &mdash; it&apos;s the cheapest per-operation plan in the automation space. Most users who are actively automating hit the free limit within 2&ndash;4 weeks.</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
