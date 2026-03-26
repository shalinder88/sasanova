import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Replace HubSpot with Pipedrive + ActiveCampaign (Save $700+/Month)",
  description:
    "HubSpot Professional costs $890/mo flat. Pipedrive Growth ($39/seat) + ActiveCampaign Starter ($15/mo) delivers 80% of the functionality for a fraction of the price. Exact pricing, migration steps, and what you lose.",
};

export default function ReplaceHubspotWithPipedriveActivecampaign() {
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
              Replace HubSpot with Pipedrive + ActiveCampaign
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
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Replace HubSpot with Pipedrive + ActiveCampaign (Save $700+/Month)
          </h1>
          <p className="text-lg text-muted">
            HubSpot Professional costs $890/mo flat &mdash; and that&apos;s just
            one Hub. Pipedrive handles your CRM and pipeline. ActiveCampaign
            handles email automation. Together they cover 80% of what HubSpot
            Professional does, at a fraction of the cost. Here&apos;s the exact
            math, what you gain, what you lose, and how to migrate.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Price Comparison ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              The Math
            </p>
            <p className="text-sm text-muted">
              HubSpot Professional: <strong className="text-foreground">$890/mo</strong> flat (2,000 marketing contacts, includes CRM + automation + reporting).
              <br />
              Replacement: Pipedrive Growth at <strong className="text-foreground">$39/seat/mo</strong> + ActiveCampaign Starter at <strong className="text-foreground">$15/mo</strong> (1,000 contacts) = <strong className="text-foreground">$54/mo for 1 user</strong>.
              <br />
              Savings: <strong className="text-foreground">$836/mo ($10,032/yr)</strong> for a solo operator. Even at 5 seats, Pipedrive Growth ($195) + ActiveCampaign Starter ($15) = $210/mo &mdash; still $680/mo less than HubSpot Professional.
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
                    Billing Model
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    HubSpot
                  </td>
                  <td className="px-4 py-2.5">Professional</td>
                  <td className="px-4 py-2.5">$890/mo</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">
                    CRM, 2,000 marketing contacts, automation, custom reporting,
                    ABM
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Pipedrive
                  </td>
                  <td className="px-4 py-2.5">Growth</td>
                  <td className="px-4 py-2.5">$39/seat/mo</td>
                  <td className="px-4 py-2.5">Per seat</td>
                  <td className="px-4 py-2.5">
                    Automations, email sync, scheduler
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    ActiveCampaign
                  </td>
                  <td className="px-4 py-2.5">Starter</td>
                  <td className="px-4 py-2.5">$15/mo</td>
                  <td className="px-4 py-2.5">Flat</td>
                  <td className="px-4 py-2.5">
                    1,000 contacts, email marketing, basic automations
                  </td>
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
                    $700&ndash;$836/mo in savings (depending on seats)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Single-platform reporting across CRM + marketing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Pipedrive&apos;s best-in-class visual pipeline and sales UX
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Native contact-level journey view (CRM + email in one screen)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    ActiveCampaign&apos;s superior automation builder
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    HubSpot&apos;s built-in landing page builder and form analytics
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Simpler per-tool pricing with no surprise tier jumps
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    ABM (Account-Based Marketing) features
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Best-of-breed tools that each excel at one job
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    The convenience of a single vendor for support and billing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Migration Steps ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Migration Steps
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 1: Export Your HubSpot Data
          </h3>
          <p className="text-muted mb-4">
            Export contacts, companies, deals, and activity history from HubSpot
            as CSV files. Go to Contacts &rarr; Actions &rarr; Export. Do the
            same for Deals and Companies. Download your email templates
            separately &mdash; HubSpot does not include them in CSV exports.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 2: Set Up Pipedrive
          </h3>
          <p className="text-muted mb-4">
            Create your Pipedrive account on the Growth plan ($39/seat/mo).
            Import contacts and deals via CSV. Map HubSpot&apos;s custom
            properties to Pipedrive custom fields. Set up your pipeline stages to
            mirror your existing HubSpot deal stages. Connect your email (Gmail
            or Outlook) for 2-way sync.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 3: Set Up ActiveCampaign
          </h3>
          <p className="text-muted mb-4">
            Sign up for ActiveCampaign Starter ($15/mo for 1,000 contacts).
            Import your marketing contacts from the HubSpot CSV export. Recreate
            your email automations &mdash; ActiveCampaign&apos;s automation
            builder is more powerful than HubSpot&apos;s, so most workflows
            translate 1:1 or better. Rebuild your email templates using
            ActiveCampaign&apos;s drag-and-drop editor.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 4: Connect Pipedrive + ActiveCampaign
          </h3>
          <p className="text-muted mb-4">
            Use the native Pipedrive&ndash;ActiveCampaign integration or connect
            them via Zapier/Make. Key automations to set up: new deal won &rarr;
            add to post-sale email sequence, new contact in Pipedrive &rarr; add
            to ActiveCampaign list, and lead scoring updates synced between
            platforms.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 5: Run Parallel for 2 Weeks
          </h3>
          <p className="text-muted mb-4">
            Keep HubSpot active for 2 weeks while you verify data integrity,
            test automations, and train your team on the new tools. Once
            everything is confirmed working, cancel HubSpot. Do not delete your
            HubSpot account immediately &mdash; keep it as a read-only reference
            for 30 days.
          </p>

          {/* ── Who Should NOT Switch ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Who Should NOT Switch
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">
                Teams using HubSpot&apos;s ABM features heavily.
              </strong>{" "}
              Neither Pipedrive nor ActiveCampaign has account-based marketing
              tools at the same depth. If ABM is central to your strategy, the
              switch will hurt.
            </li>
            <li>
              <strong className="text-foreground">
                Companies with 50+ HubSpot workflows.
              </strong>{" "}
              Migrating dozens of complex workflows is a multi-week project.
              Calculate the time cost against the monthly savings before
              committing.
            </li>
            <li>
              <strong className="text-foreground">
                Teams that rely on HubSpot&apos;s native reporting across
                marketing + sales.
              </strong>{" "}
              Cross-platform reporting with Pipedrive + ActiveCampaign requires
              a third tool (a dashboard or spreadsheet). If unified reporting
              drives your decisions, stay on HubSpot.
            </li>
            <li>
              <strong className="text-foreground">
                Organizations locked into annual HubSpot contracts.
              </strong>{" "}
              HubSpot annual contracts are non-refundable. Wait until your
              renewal date, then switch.
            </li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Can ActiveCampaign replace HubSpot&apos;s email marketing entirely?
          </h3>
          <p className="text-muted mb-4">
            Yes, and in many cases it does it better. ActiveCampaign&apos;s
            automation builder is more flexible than HubSpot&apos;s, with
            conditional logic, split actions, and goal tracking. The main gap is
            landing pages &mdash; ActiveCampaign doesn&apos;t have a built-in
            page builder, so you&apos;ll need a separate tool or your website
            for that.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            What if my contact list grows beyond 1,000?
          </h3>
          <p className="text-muted mb-4">
            ActiveCampaign Starter scales with your contact count. At 2,500
            contacts it&apos;s roughly $30/mo, at 5,000 contacts roughly $49/mo.
            Even at 10,000 contacts, ActiveCampaign Plus at ~$100/mo is still
            far cheaper than HubSpot Professional at $890/mo.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Do Pipedrive and ActiveCampaign integrate well together?
          </h3>
          <p className="text-muted mb-4">
            They have a native integration that syncs contacts and deal data.
            For more complex workflows, Zapier or Make can bridge any gaps. Most
            teams find the native integration sufficient for standard CRM +
            email marketing workflows.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            How long does migration typically take?
          </h3>
          <p className="text-muted mb-4">
            For a team of 1&ndash;5 with fewer than 20 workflows: 1&ndash;2
            weeks including parallel run time. For larger teams with complex
            automation trees: 3&ndash;4 weeks. The data migration itself takes a
            day; rebuilding automations takes the rest.
          </p>
        </div>

        {/* ── Related Links ── */}
        <RelatedLinks
          tools={["hubspot-crm", "pipedrive", "activecampaign"]}
          comparisons={["hubspot-crm-vs-pipedrive"]}
          guides={[
            "who-should-not-use-hubspot",
            "hubspot-pricing-reality",
            "when-hubspot-stops-being-cheap",
          ]}
        />
      </article>
    </>
  );
}
