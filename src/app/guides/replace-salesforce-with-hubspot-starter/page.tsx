import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title:
    "Replace Salesforce with HubSpot Starter (Save $60+/Seat/Month)",
  description:
    "Salesforce Pro Suite costs $100/seat/mo. HubSpot Starter costs $20/seat/mo. You lose deep customization and AppExchange, but gain simplicity and $960/seat/yr in savings. Exact pricing and migration guide.",
};

export default function ReplaceSalesforceWithHubspotStarter() {
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
              Replace Salesforce with HubSpot Starter
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
            Replace Salesforce with HubSpot Starter (Save $60+/Seat/Month)
          </h1>
          <p className="text-lg text-muted">
            Salesforce Pro Suite costs $100/seat/mo and requires admin overhead
            most small teams never signed up for. HubSpot Starter is $20/seat/mo
            with a dramatically simpler interface. For teams that use 20% of
            Salesforce&apos;s features and pay 100% of the price, this is the
            switch that makes sense.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Price Comparison ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">
              The Math
            </p>
            <p className="text-sm text-muted">
              Salesforce Pro Suite: <strong className="text-foreground">$100/seat/mo</strong> ($1,200/seat/yr). Complete CRM with forecasting, quotes, custom dashboards.
              <br />
              HubSpot Starter: <strong className="text-foreground">$20/seat/mo</strong> ($216/seat/yr on annual billing). 1,000 marketing contacts, remove branding, email health reporting.
              <br />
              Savings: <strong className="text-foreground">$80/seat/mo ($960/seat/yr)</strong>. For a 10-person team: $9,600/yr. Plus you eliminate the need for a Salesforce admin.
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
                    Per Seat/Month
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Annual (per seat)
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Salesforce
                  </td>
                  <td className="px-4 py-2.5">Starter Suite</td>
                  <td className="px-4 py-2.5">$25/seat</td>
                  <td className="px-4 py-2.5">$300/seat</td>
                  <td className="px-4 py-2.5">
                    Basic CRM, lead/contact/opportunity management
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Salesforce
                  </td>
                  <td className="px-4 py-2.5">Pro Suite</td>
                  <td className="px-4 py-2.5">$100/seat</td>
                  <td className="px-4 py-2.5">$1,200/seat</td>
                  <td className="px-4 py-2.5">
                    Complete CRM, forecasting, quotes, custom dashboards
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    Salesforce
                  </td>
                  <td className="px-4 py-2.5">Enterprise</td>
                  <td className="px-4 py-2.5">$175/seat</td>
                  <td className="px-4 py-2.5">$2,100/seat</td>
                  <td className="px-4 py-2.5">
                    Advanced customization, workflow automation, API
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    HubSpot
                  </td>
                  <td className="px-4 py-2.5">Free Tools</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">
                    Unlimited contacts, basic CRM, 2,000 email sends/mo
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    HubSpot
                  </td>
                  <td className="px-4 py-2.5">Starter</td>
                  <td className="px-4 py-2.5">$20/seat</td>
                  <td className="px-4 py-2.5">$216/seat</td>
                  <td className="px-4 py-2.5">
                    1,000 marketing contacts, remove branding, email health
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
                    $80/seat/mo in savings ($960/seat/yr)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Salesforce&apos;s deep customization (custom objects, Apex code, Flows)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Dramatically simpler interface &mdash; reps onboard in hours, not weeks
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    AppExchange marketplace (2,000+ third-party apps)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Built-in marketing tools (email, forms, landing pages)
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Advanced sales forecasting and territory management
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    No need for a dedicated Salesforce admin
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Enterprise-grade compliance (FedRAMP, HIPAA)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-muted">
                    Free CRM tier available for budget-conscious scaling
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    Relational data model depth (junction objects, formula fields)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Migration Steps ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Migration Steps</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 1: Audit Your Salesforce Usage
          </h3>
          <p className="text-muted mb-4">
            Before migrating, audit which Salesforce features your team actually
            uses. Pull login reports, check which custom objects have data, and
            list active Flows and Process Builders. If fewer than 5 custom
            objects are in active use and you have no Apex code, HubSpot Starter
            can likely handle your needs.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 2: Export Salesforce Data
          </h3>
          <p className="text-muted mb-4">
            Use Salesforce Data Loader to export Leads, Contacts, Accounts,
            Opportunities, and Activity history as CSV files. Also export any
            Reports you rely on &mdash; you&apos;ll need to rebuild them in
            HubSpot. Document your current pipeline stages, custom fields, and
            lead scoring rules.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 3: Set Up HubSpot
          </h3>
          <p className="text-muted mb-4">
            Create a HubSpot account and upgrade to Starter ($20/seat/mo).
            Import your data via CSV. Map Salesforce custom fields to HubSpot
            custom properties. Replicate your pipeline stages. Set up your email
            integration (Gmail or Outlook). Configure deal stages, contact
            lifecycle stages, and basic automation workflows.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 4: Reconnect Integrations
          </h3>
          <p className="text-muted mb-4">
            Identify all Salesforce integrations (Zapier/Make automations, email
            tools, billing systems) and reconnect them to HubSpot. HubSpot has
            native integrations with most popular tools. For anything missing,
            use Zapier or Make as a bridge.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Step 5: Train and Run Parallel
          </h3>
          <p className="text-muted mb-4">
            HubSpot&apos;s interface is simpler than Salesforce&apos;s, so
            training is faster. Run both platforms in parallel for 2&ndash;4
            weeks. Verify data accuracy, test that automations fire correctly,
            and confirm reporting matches. Cancel Salesforce after your team is
            comfortable. Note: Salesforce contracts are annual and
            non-cancellable mid-term.
          </p>

          {/* ── Who Should NOT Switch ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Who Should NOT Switch
          </h2>
          <ul className="space-y-2 text-muted list-none pl-0">
            <li>
              <strong className="text-foreground">
                Teams with significant Apex code or custom Flows.
              </strong>{" "}
              If you have custom Apex triggers, batch jobs, or complex Flow
              automations, HubSpot cannot replicate them. HubSpot&apos;s
              workflow builder is simpler and more limited than
              Salesforce&apos;s automation tools.
            </li>
            <li>
              <strong className="text-foreground">
                Organizations relying on AppExchange apps.
              </strong>{" "}
              Salesforce&apos;s AppExchange has 2,000+ apps for industry-specific
              needs (CPQ, territory management, compliance). HubSpot&apos;s App
              Marketplace is growing but significantly smaller. Check that your
              critical integrations exist in HubSpot first.
            </li>
            <li>
              <strong className="text-foreground">
                Companies in regulated industries needing FedRAMP or HIPAA.
              </strong>{" "}
              Salesforce offers FedRAMP authorization and HIPAA compliance at
              enterprise tiers. HubSpot&apos;s compliance certifications are
              more limited. If regulatory compliance drives your CRM choice,
              verify HubSpot meets your requirements.
            </li>
            <li>
              <strong className="text-foreground">
                Sales teams with complex forecasting needs.
              </strong>{" "}
              Salesforce&apos;s forecasting, territory management, and CPQ
              (Configure-Price-Quote) tools are enterprise-grade. HubSpot
              Starter offers basic deal tracking and reporting, but nothing
              approaching Salesforce&apos;s depth in these areas.
            </li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Why not HubSpot Free instead of Starter?
          </h3>
          <p className="text-muted mb-4">
            HubSpot Free is genuinely useful, but it includes HubSpot branding
            on forms and emails, limits you on email templates, and lacks
            automation workflows. At $20/seat/mo, Starter removes branding and
            adds enough functionality to replace a basic Salesforce setup. For
            teams coming from Salesforce, the branding limitation of the free
            tier is usually a dealbreaker.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            What about HubSpot Professional at $890/mo?
          </h3>
          <p className="text-muted mb-4">
            If you need the full automation, reporting, and ABM features of
            HubSpot Professional, the $890/mo price is comparable to Salesforce
            Pro Suite for a 9-person team. At that point, you should evaluate
            whether HubSpot Professional or Salesforce better fits your specific
            workflow needs, not just price.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            Can I migrate my Salesforce reports to HubSpot?
          </h3>
          <p className="text-muted mb-4">
            Not directly. Salesforce reports don&apos;t export in a format
            HubSpot can import. You&apos;ll need to rebuild reports in
            HubSpot&apos;s reporting tool. The good news: HubSpot&apos;s report
            builder is simpler and most common sales reports (pipeline value,
            deal velocity, rep activity) can be set up in an afternoon.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">
            How long does migration typically take?
          </h3>
          <p className="text-muted mb-4">
            For a team of 5&ndash;15 with a standard sales pipeline and no
            custom Apex code: 2&ndash;4 weeks including parallel run time. Data
            migration takes 1&ndash;2 days. Rebuilding reports and automations
            takes 3&ndash;5 days. The rest is training and parallel validation.
          </p>
        </div>

        {/* ── Related Links ── */}
        <RelatedLinks
          tools={["salesforce", "hubspot-crm"]}
          comparisons={["salesforce-vs-hubspot-crm"]}
          guides={[
            "who-should-not-use-salesforce",
            "salesforce-hidden-costs",
            "when-hubspot-stops-being-cheap",
          ]}
        />
      </article>
    </>
  );
}
