import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monetization Guide (Internal)",
  description: "Internal reference for Sasanova affiliate monetization.",
  robots: "noindex, nofollow",
};

const affiliatePrograms = [
  {
    tool: "HubSpot",
    network: "Impact",
    commission: "30% recurring for up to 12 months",
    signUp: "Apply via Impact Radius marketplace",
    cookie: "90 days",
  },
  {
    tool: "beehiiv",
    network: "Direct",
    commission: "50-60% recurring for 12 months",
    signUp: "Apply at beehiiv.com/partners",
    cookie: "60 days",
  },
  {
    tool: "ConvertKit / Kit",
    network: "Direct",
    commission: "30% recurring for 24 months",
    signUp: "Apply at convertkit.com/affiliates",
    cookie: "90 days",
  },
  {
    tool: "Pipedrive",
    network: "Direct",
    commission: "20% recurring for 12 months",
    signUp: "Apply at pipedrive.com/affiliate",
    cookie: "30 days",
  },
  {
    tool: "Notion",
    network: "Currently closed",
    commission: "N/A",
    signUp: "Waitlist only; check periodically",
    cookie: "N/A",
  },
  {
    tool: "Zapier",
    network: "Impact",
    commission: "Tiered CPA ($5-$50 per paid signup)",
    signUp: "Apply via Impact Radius marketplace",
    cookie: "30 days",
  },
  {
    tool: "Make",
    network: "PartnerStack",
    commission: "20% recurring for 12 months",
    signUp: "Apply via PartnerStack marketplace",
    cookie: "90 days",
  },
  {
    tool: "Calendly",
    network: "PartnerStack",
    commission: "15-20% recurring",
    signUp: "Apply via PartnerStack marketplace",
    cookie: "90 days",
  },
];

export default function MonetizationGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="inline-block px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-warning-light text-warning rounded-md mb-3">
          Internal &mdash; Not for public distribution
        </span>
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          Monetization Guide
        </h1>
        <p className="text-sm text-muted">
          Reference document for the Sasanova site operator. This page is
          noindexed and not linked in site navigation.
        </p>
      </div>

      {/* Target affiliate programs */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Target Affiliate Programs</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt text-left">
                <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Network</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Commission</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">How to Sign Up</th>
                <th className="px-4 py-2.5 font-semibold text-foreground">Cookie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {affiliatePrograms.map((p) => (
                <tr key={p.tool} className="hover:bg-surface transition-colors">
                  <td className="px-4 py-2.5 font-medium text-foreground">{p.tool}</td>
                  <td className="px-4 py-2.5 text-muted">{p.network}</td>
                  <td className="px-4 py-2.5 text-muted">{p.commission}</td>
                  <td className="px-4 py-2.5 text-muted">{p.signUp}</td>
                  <td className="px-4 py-2.5 text-muted">{p.cookie}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Where affiliate links appear */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Where Affiliate Links Appear</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
          <li>
            <strong className="text-foreground">Tool pages</strong> &mdash; The{" "}
            <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">AffiliateCTA</code>{" "}
            component renders a primary &quot;Try [Tool]&quot; button linked to the
            affiliate URL.
          </li>
          <li>
            <strong className="text-foreground">Comparison pages</strong> &mdash; The{" "}
            <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">ComparisonCTA</code>{" "}
            component shows side-by-side CTAs for both tools.
          </li>
          <li>
            <strong className="text-foreground">Best-of and alternatives pages</strong>{" "}
            &mdash; &quot;Visit [Tool]&quot; buttons in ranking cards link to the
            affiliate URL when available.
          </li>
          <li>
            <strong className="text-foreground">Pricing pages</strong> &mdash;
            &quot;Start free trial&quot; or &quot;Sign up&quot; buttons may use
            affiliate links.
          </li>
        </ul>
      </section>

      {/* Editorial rules */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Editorial Independence Rules</h2>
        <div className="rounded-lg border border-border bg-surface p-5 space-y-3 text-sm text-muted">
          <p>
            <strong className="text-foreground">Rankings NEVER depend on affiliate availability.</strong>{" "}
            Every tool is scored using the same multi-axis methodology whether or
            not it has an affiliate program.
          </p>
          <p>
            Tools without affiliate programs receive identical editorial
            treatment: full reviews, comparison inclusion, and fair ranking
            placement.
          </p>
          <p>
            Affiliate status is never disclosed to the editorial team during the
            scoring process. Monetization decisions are made after editorial
            content is finalized.
          </p>
        </div>
      </section>

      {/* Replacing placeholder URLs */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          Replacing Placeholder Affiliate URLs
        </h2>
        <div className="rounded-lg border border-border bg-surface p-5 space-y-3 text-sm text-muted">
          <p>
            Throughout the codebase and data files, placeholder affiliate URLs
            use the format:
          </p>
          <code className="block bg-surface-alt px-3 py-2 rounded text-xs text-foreground">
            #your-affiliate-link-here
          </code>
          <p className="mt-2">To replace them:</p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              Sign up for the affiliate program (see the table above for
              network details).
            </li>
            <li>
              Generate your unique tracking link from the affiliate dashboard.
            </li>
            <li>
              Search the codebase for{" "}
              <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">
                #your-affiliate-link-here
              </code>{" "}
              and replace each occurrence with the correct tracking URL for that
              tool.
            </li>
            <li>
              Ensure every affiliate link uses{" "}
              <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">
                rel=&quot;noopener noreferrer sponsored&quot;
              </code>{" "}
              and{" "}
              <code className="text-xs bg-surface-alt px-1 py-0.5 rounded">
                target=&quot;_blank&quot;
              </code>
              .
            </li>
            <li>
              Test the link to confirm tracking fires correctly (check the
              affiliate dashboard for click attribution).
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
