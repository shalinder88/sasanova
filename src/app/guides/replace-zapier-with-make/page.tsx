import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Replace Zapier with Make (Same Automations, 65% Less)",
  description:
    "Zapier Professional costs $29.99/mo for 750 tasks. Make Core costs $10.59/mo for 10,000 operations. Step-by-step migration for the top 5 Zaps, with exact pricing and what to watch out for.",
};

export default function ReplaceZapierWithMake() {
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
              Replace Zapier with Make
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
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace Zapier with Make (Same Automations, 65% Less)
          </h1>
          <p className="text-lg text-muted">
            Zapier Professional gives you 750 tasks/mo for $29.99. Make Core
            gives you 10,000 operations/mo for $10.59. That&apos;s 13x more
            volume at 65% less cost. The trade-off is a steeper learning curve
            &mdash; but if you&apos;re already building multi-step Zaps,
            you&apos;ll pick up Make quickly. Here&apos;s how to migrate your
            top workflows.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Price Comparison ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              The Math
            </p>
            <p className="text-sm text-muted">
              Zapier Professional: <strong className="text-foreground">$29.99/mo</strong> ($239.88/yr) for 750 tasks/mo, unlimited Zaps, multi-step.
              <br />
              Make Core: <strong className="text-foreground">$10.59/mo</strong> ($108/yr) for 10,000 ops/mo, unlimited scenarios.
              <br />
              Savings: <strong className="text-foreground">$19.40/mo ($232/yr)</strong>. At higher volumes the gap widens &mdash; Zapier Team at $103.50/mo (2,000 tasks) vs Make Pro at $18.82/mo (10,000 ops).
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
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Tool
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Plan
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Monthly Price
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Volume
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Annual Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Zapier
                  </td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5">100 tasks/mo, two-step only</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Zapier
                  </td>
                  <td className="px-4 py-2.5">Professional</td>
                  <td className="px-4 py-2.5">$29.99/mo</td>
                  <td className="px-4 py-2.5">750 tasks/mo, multi-step</td>
                  <td className="px-4 py-2.5">$239.88/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Zapier
                  </td>
                  <td className="px-4 py-2.5">Team</td>
                  <td className="px-4 py-2.5">$103.50/mo</td>
                  <td className="px-4 py-2.5">2,000 tasks/mo</td>
                  <td className="px-4 py-2.5">$828/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Make
                  </td>
                  <td className="px-4 py-2.5">Free</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5">1,000 ops/mo, 2 scenarios</td>
                  <td className="px-4 py-2.5">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Make
                  </td>
                  <td className="px-4 py-2.5">Core</td>
                  <td className="px-4 py-2.5">$10.59/mo</td>
                  <td className="px-4 py-2.5">
                    10,000 ops/mo, unlimited scenarios
                  </td>
                  <td className="px-4 py-2.5">$108/yr</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Make
                  </td>
                  <td className="px-4 py-2.5">Pro</td>
                  <td className="px-4 py-2.5">$18.82/mo</td>
                  <td className="px-4 py-2.5">
                    10,000 ops/mo, custom functions, priority
                  </td>
                  <td className="px-4 py-2.5">$192/yr</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── What You Gain / Lose ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            What You Gain vs. What You Lose
          </h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    What You Gain
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    What You Lose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    65% lower cost at equivalent functionality
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Zapier&apos;s broader app catalog (7,000+ vs 1,800+)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    13x more operations per dollar (10,000 vs 750)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Simpler UX &mdash; Make&apos;s visual builder has a steeper learning curve
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Routers, filters, and error handling built in
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Zapier&apos;s Tables (built-in database) and Interfaces (forms/pages)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    No multi-step task multiplier penalty
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Team familiarity &mdash; if your team already knows Zapier
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Data stores (built-in key/value storage)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Zapier&apos;s AI actions for LLM-powered workflows
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Top 5 Zap Migrations ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Step-by-Step Migration: Top 5 Zaps
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            1. Form Submission &rarr; CRM Contact
          </h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zapier:</strong> Typeform/Tally
            trigger &rarr; Create Contact in HubSpot/Pipedrive.
            <br />
            <strong className="text-foreground">Make:</strong> Same trigger
            module (Typeform or Webhook) &rarr; CRM module (Create Contact).
            Direct 1:1 translation. Add a Router if you want to create the
            contact in both CRM and a Google Sheet simultaneously.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            2. New Email Subscriber &rarr; Welcome Sequence
          </h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zapier:</strong> Mailchimp
            trigger (new subscriber) &rarr; Add to drip campaign.
            <br />
            <strong className="text-foreground">Make:</strong> Email platform
            trigger &rarr; HTTP module or email platform module to add tag or
            start automation. Most email platforms (ActiveCampaign, Kit, beehiiv)
            have native Make integrations.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            3. Stripe Payment &rarr; Notification + Spreadsheet
          </h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zapier:</strong> Stripe trigger
            (payment) &rarr; Slack notification + Google Sheets row. This is a
            3-step Zap, consuming 3 tasks per run.
            <br />
            <strong className="text-foreground">Make:</strong> Stripe trigger
            &rarr; Router &rarr; Branch 1: Slack message, Branch 2: Google
            Sheets row. In Make, both branches count as individual operations,
            but you have 10,000 ops to work with instead of 250 effective runs
            (750 tasks &divide; 3 steps).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            4. Calendar Event &rarr; CRM Activity Log
          </h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zapier:</strong> Google Calendar
            trigger &rarr; Create Activity in Pipedrive.
            <br />
            <strong className="text-foreground">Make:</strong> Google Calendar
            module (watch events) &rarr; Pipedrive module (create activity).
            Direct 1:1 translation. Add a Filter to only log external meetings.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            5. New Blog Post &rarr; Social Media Posts
          </h3>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Zapier:</strong> RSS trigger
            &rarr; Post to Twitter + LinkedIn + Buffer. A 4-step Zap consuming 4
            tasks per run.
            <br />
            <strong className="text-foreground">Make:</strong> RSS module &rarr;
            Router &rarr; 3 branches (Twitter, LinkedIn, Buffer). Each branch
            is 1 operation. Total: 4 operations per run out of 10,000/mo.
          </p>

          {/* ── Who Should NOT Switch ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Who Should NOT Switch
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">
                Teams with non-technical users who built the Zaps.
              </strong>{" "}
              Make&apos;s visual builder is more powerful but less intuitive than
              Zapier&apos;s step-by-step wizard. If the person maintaining
              automations has zero technical background, the retraining cost may
              outweigh the savings.
            </li>
            <li>
              <strong className="text-foreground">
                Workflows depending on Zapier-exclusive integrations.
              </strong>{" "}
              Zapier connects to 7,000+ apps; Make connects to 1,800+. Check
              that all your current app connections exist in Make before
              committing. Niche or industry-specific apps are more likely to be
              missing.
            </li>
            <li>
              <strong className="text-foreground">
                Low-volume users on Zapier&apos;s free plan.
              </strong>{" "}
              If you use fewer than 100 tasks/mo with simple 2-step Zaps,
              Zapier&apos;s free tier already costs you nothing. Make&apos;s free
              tier gives more (1,000 ops, but only 2 active scenarios).
              Switching adds complexity for no cost benefit.
            </li>
            <li>
              <strong className="text-foreground">
                Teams using Zapier Tables or Interfaces.
              </strong>{" "}
              These are Zapier-only features with no Make equivalent. If
              you&apos;ve built internal tools using Zapier Tables (database) or
              Interfaces (forms/pages), migration requires replacing those with
              separate tools.
            </li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            How does Make count operations vs Zapier&apos;s tasks?
          </h3>
          <p className="text-muted mb-4">
            Zapier counts every step in a Zap as one task. A 5-step Zap uses 5
            tasks per run, meaning 750 tasks/mo = only 150 runs of that Zap.
            Make counts each module execution as one operation, which sounds
            similar &mdash; but with 10,000 ops/mo on Core ($10.59), you get
            2,000 runs of that same 5-step workflow. That&apos;s 13x more
            capacity at 65% less cost.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Is Make reliable enough for business-critical automations?
          </h3>
          <p className="text-muted mb-4">
            Yes. Make has built-in error handling (retry, break, ignore, commit),
            which is actually more sophisticated than Zapier&apos;s. You can set
            up error routes that trigger alerts or fallback actions. Make also
            offers execution logs and scenario history for debugging.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            How long does migration take?
          </h3>
          <p className="text-muted mb-4">
            Plan 1&ndash;2 hours per Zap for simple workflows and 2&ndash;4
            hours for complex multi-step Zaps with conditional logic. Most teams
            with 10&ndash;20 Zaps complete migration in a week of part-time
            work. Run both platforms in parallel during testing.
          </p>
        </div>

        {/* ── Related Links ── */}
        <RelatedLinks
          tools={["zapier", "make"]}
          comparisons={["zapier-vs-make"]}
          guides={[
            "who-should-not-use-zapier",
            "when-zapier-costs-more-than-make",
            "multi-step-automation-cost-trap",
          ]}
        />
      </article>
    </>
  );
}
