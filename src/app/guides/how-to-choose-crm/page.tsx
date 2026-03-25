import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "How to Choose a CRM Without Overthinking It",
  description:
    "A decision framework for choosing the right CRM. Relationship vs deal-driven, team size matrix, free tier traps, integration checklist, and the Salesforce reality check.",
  openGraph: {
    title: "How to Choose a CRM Without Overthinking It",
    description:
      "One question decides your CRM. Relationship-driven or deal-driven? Follow the framework and stop evaluating.",
  },
};

const teamSizeMatrix = [
  {
    size: "1 person (solo founder)",
    needs: "Contact tracking, basic pipeline, email logging",
    recommendation: "HubSpot Free CRM or Folk Free",
    monthlyBudget: "$0",
    reasoning:
      "You do not need per-seat pricing. HubSpot Free gives unlimited contacts and a basic pipeline. Folk Free is better if you manage relationships without a formal sales process.",
  },
  {
    size: "2-5 people (small team)",
    needs: "Shared pipeline, deal stages, activity tracking, basic reporting",
    recommendation: "Pipedrive Essential ($14/seat) or HubSpot Starter ($20/mo for 2 seats)",
    monthlyBudget: "$28-100",
    reasoning:
      "At this size, you need everyone seeing the same pipeline. Pipedrive is fastest to adopt. HubSpot Starter bundles 2 seats with marketing tools.",
  },
  {
    size: "5-25 people",
    needs: "Automation, custom reporting, territory management, forecasting",
    recommendation: "HubSpot Professional ($100/mo + $50/seat) or Close ($49/seat)",
    monthlyBudget: "$250-1,500",
    reasoning:
      "This is where CRM complexity starts to matter. HubSpot Professional adds workflow automation and custom reporting. Close is purpose-built for outbound sales teams with built-in calling and SMS.",
  },
  {
    size: "25+ people",
    needs: "Advanced automation, custom objects, revenue operations, compliance",
    recommendation: "HubSpot Enterprise or Salesforce (yes, really)",
    monthlyBudget: "$1,500-5,000+",
    reasoning:
      "At 25+ seats, enterprise features earn their cost. But read the Salesforce section below before committing to a multi-year contract.",
  },
];

const freeTierTraps = [
  {
    trap: "Feature gating that creates switching costs",
    explanation:
      "HubSpot Free is generous with contacts but limits automation, reporting, and email sequences. By the time you need those features, your team is trained on HubSpot and migration feels impossible. The free tier is the marketing funnel.",
  },
  {
    trap: "Data format lock-in",
    explanation:
      "Some CRMs use proprietary field types, custom object relationships, or activity logging formats that do not export cleanly. When you try to leave, you discover that 6 months of sales activity history is trapped.",
  },
  {
    trap: "The upgrade cliff",
    explanation:
      "HubSpot Free to Starter is $20/month. Starter to Professional is $100/month + $50/seat. That is a 10x jump. Salesforce has a similar pattern: Essentials to Professional doubles the per-seat cost. Plan for the tier you will actually need in 12 months.",
  },
  {
    trap: "Missing integrations on free plans",
    explanation:
      "Free CRM tiers often restrict API access, native integrations, or webhook support. If your CRM cannot talk to your email tool and form builder, you are manually copying data — and that defeats the purpose.",
  },
];

const integrationChecklist = [
  {
    integration: "Email (Gmail/Outlook sync)",
    why: "Automatic logging of email conversations against contacts. Without this, your CRM is a database nobody updates.",
    dayOne: true,
  },
  {
    integration: "Calendar (Google Calendar/Outlook)",
    why: "Meeting scheduling links from the CRM, automatic activity logging when calls happen. Saves 5-10 minutes per rep per day.",
    dayOne: true,
  },
  {
    integration: "Forms (Tally, Typeform, or native)",
    why: "Web form submissions create contacts automatically. Without this, someone copies form responses into the CRM manually — and stops after week 2.",
    dayOne: true,
  },
  {
    integration: "Automation (Zapier, Make, or native)",
    why: "Connecting your CRM to everything else. Important but not day one — set up your pipeline first, then automate.",
    dayOne: false,
  },
  {
    integration: "Accounting (QuickBooks, Xero)",
    why: "Connecting deals to invoices. Useful at scale but a distraction when you have fewer than 50 customers.",
    dayOne: false,
  },
  {
    integration: "Marketing email (ActiveCampaign, Kit, etc.)",
    why: "Syncing subscriber engagement data with your CRM. Matters when you run nurture campaigns, not on day one.",
    dayOne: false,
  },
];

export default function HowToChooseCRM() {
  return (
    <>
      {/* Breadcrumb */}
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
              How to Choose a CRM
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Decision Framework
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How to Choose a CRM Without Overthinking It
          </h1>
          <p className="text-lg text-muted">
            There are 700+ CRM tools on the market. You need one. The decision
            comes down to one question, a team size check, and a 3-integration
            test. This framework gets you to a decision in 15 minutes, not 15
            demos.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Free and paid tiers across 10 CRM platforms"
          sourceCount={20}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* The One Question */}
          <h2 className="text-xl font-bold mt-10 mb-4">
            The One Question That Decides Your CRM
          </h2>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-6 mb-8">
            <p className="text-base font-bold text-foreground mb-3">
              Are you relationship-driven or deal-driven?
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4 bg-surface">
                <p className="text-sm font-bold text-foreground mb-1">
                  Relationship-Driven
                </p>
                <p className="text-xs text-muted mb-2">
                  You manage ongoing relationships, not a pipeline of deals.
                  Think: consultants, agencies, VCs, recruiters, partnership
                  managers, community builders.
                </p>
                <p className="text-xs text-muted mb-2">
                  You care about: who you talked to last, context on every
                  person, warm introductions, relationship history.
                </p>
                <div className="border-t border-border pt-2 mt-2">
                  <p className="text-sm font-bold text-accent">
                    Best picks:
                  </p>
                  <p className="text-sm text-foreground">
                    <Link
                      href="/tools/folk"
                      className="text-accent hover:underline"
                    >
                      Folk
                    </Link>{" "}
                    ($20/seat/mo) or{" "}
                    <Link
                      href="/tools/attio"
                      className="text-accent hover:underline"
                    >
                      Attio
                    </Link>{" "}
                    ($29/seat/mo)
                  </p>
                </div>
              </div>
              <div className="border border-border rounded-lg p-4 bg-surface">
                <p className="text-sm font-bold text-foreground mb-1">
                  Deal-Driven
                </p>
                <p className="text-xs text-muted mb-2">
                  You move prospects through a pipeline to close deals. Think:
                  sales teams, real estate agents, SaaS founders, agencies with
                  a sales process.
                </p>
                <p className="text-xs text-muted mb-2">
                  You care about: deal stages, close rates, revenue forecasting,
                  activity metrics, pipeline velocity.
                </p>
                <div className="border-t border-border pt-2 mt-2">
                  <p className="text-sm font-bold text-accent">
                    Best picks:
                  </p>
                  <p className="text-sm text-foreground">
                    <Link
                      href="/tools/pipedrive"
                      className="text-accent hover:underline"
                    >
                      Pipedrive
                    </Link>{" "}
                    ($14/seat/mo) or{" "}
                    <Link
                      href="/tools/close"
                      className="text-accent hover:underline"
                    >
                      Close
                    </Link>{" "}
                    ($49/seat/mo)
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-border rounded-lg p-4 bg-surface mt-4">
              <p className="text-sm font-bold text-foreground mb-1">
                Both (Marketing + Sales together)
              </p>
              <p className="text-xs text-muted mb-2">
                You need marketing automation, lead nurturing, AND a sales
                pipeline in one system. Think: growing SaaS companies, agencies
                with inbound marketing.
              </p>
              <div className="border-t border-border pt-2 mt-2">
                <p className="text-sm font-bold text-accent">Best pick:</p>
                <p className="text-sm text-foreground">
                  <Link
                    href="/tools/hubspot-crm"
                    className="text-accent hover:underline"
                  >
                    HubSpot
                  </Link>{" "}
                  (Free CRM, paid Marketing Hub from $20/mo, Sales Hub from
                  $20/mo)
                </p>
              </div>
            </div>
          </div>

          {/* Team Size Matrix */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Team Size Decision Matrix
          </h2>
          <p className="text-muted mb-6">
            Your team size determines how much CRM complexity you can absorb.
            Buying a CRM your team will not use is worse than having no CRM at
            all.
          </p>

          <div className="space-y-4 mb-8">
            {teamSizeMatrix.map((tier) => (
              <div
                key={tier.size}
                className="border border-border rounded-xl p-5 bg-surface"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-sm font-bold text-foreground">
                    {tier.size}
                  </p>
                  <span className="text-sm font-mono text-green-400 whitespace-nowrap">
                    {tier.monthlyBudget}/mo
                  </span>
                </div>
                <p className="text-xs text-muted mb-2">
                  <strong className="text-foreground">You need:</strong>{" "}
                  {tier.needs}
                </p>
                <p className="text-xs text-muted mb-2">
                  <strong className="text-foreground">Recommendation:</strong>{" "}
                  {tier.recommendation}
                </p>
                <p className="text-xs text-muted">{tier.reasoning}</p>
              </div>
            ))}
          </div>

          {/* Free Tier Trap */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            The Free Tier Trap: When Free Costs More in Switching Later
          </h2>
          <p className="text-muted mb-6">
            Free CRM tiers are marketing funnels, not charity. Every vendor
            designs their free tier to make you dependent before you pay. That
            is not inherently bad — but understand the game.
          </p>

          <div className="space-y-4 mb-8">
            {freeTierTraps.map((item) => (
              <div
                key={item.trap}
                className="border border-red-500/20 bg-red-500/5 rounded-xl p-5"
              >
                <p className="text-sm font-bold text-foreground mb-1">
                  {item.trap}
                </p>
                <p className="text-sm text-muted">{item.explanation}</p>
              </div>
            ))}
          </div>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-foreground mb-1">
              The honest advice on free tiers
            </p>
            <p className="text-sm text-muted">
              Free CRMs are fine for solo founders and teams under 3. But if you
              know you will need automation and reporting within 12 months,
              starting on a $14/seat paid plan (Pipedrive Essential) avoids
              retraining your team when you hit the upgrade cliff. The cost of
              re-adoption is higher than the cost of $14/month.
            </p>
          </div>

          {/* Integration Checklist */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Integration Checklist: The Only 3 That Matter Day 1
          </h2>
          <p className="text-muted mb-6">
            CRM vendors advertise hundreds of integrations. On day one, you
            need exactly three working. Everything else can wait.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Integration
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">
                    Why
                  </th>
                  <th className="px-4 py-2.5 font-semibold text-foreground text-center">
                    Day 1?
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {integrationChecklist.map((item) => (
                  <tr key={item.integration}>
                    <td className="px-4 py-2.5 font-medium text-foreground whitespace-nowrap">
                      {item.integration}
                    </td>
                    <td className="px-4 py-2.5 text-muted">{item.why}</td>
                    <td className="px-4 py-2.5 text-center">
                      {item.dayOne ? (
                        <span className="text-green-400 font-bold">Yes</span>
                      ) : (
                        <span className="text-muted">Later</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Salesforce Reality Check */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            You Probably Don&apos;t Need Salesforce
          </h2>
          <p className="text-muted mb-4">
            Salesforce is the most powerful CRM on the market. It is also the
            most expensive, the hardest to implement, and the most likely to
            fail at companies under 50 people. Here is the reality check.
          </p>

          <div className="border border-border rounded-xl p-5 bg-surface mb-4 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">
                The real cost is 3-5x the per-seat price.
              </strong>{" "}
              Salesforce Professional is $80/user/month. Add an admin ($60-90K
              salary or $150/hr consultant), implementation ($10-50K), add-ons
              (CPQ, Pardot, Einstein), and your real cost is $300-500 per user
              per month. See{" "}
              <Link
                href="/guides/salesforce-hidden-costs"
                className="text-accent hover:underline"
              >
                Salesforce hidden costs
              </Link>
              .
            </p>
            <p>
              <strong className="text-foreground">
                Most small teams underutilize it by 80%.
              </strong>{" "}
              Salesforce has thousands of features. Teams under 25 people
              typically use pipeline management, email logging, and basic
              reports — all of which Pipedrive does for $14/seat/month.
            </p>
            <p>
              <strong className="text-foreground">
                Annual contracts with auto-renewal.
              </strong>{" "}
              Salesforce locks you into annual contracts that auto-renew 60 days
              before expiration. Miss the cancellation window and you owe
              another year.
            </p>
          </div>

          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-8">
            <p className="text-sm font-bold text-foreground mb-1">
              When Salesforce actually makes sense
            </p>
            <p className="text-sm text-muted">
              You have 25+ sales reps, a dedicated Salesforce admin, complex
              CPQ needs, enterprise compliance requirements, or you are
              integrating with other Salesforce ecosystem products (Pardot,
              Tableau, MuleSoft). If none of these apply, see{" "}
              <Link
                href="/guides/who-should-not-use-salesforce"
                className="text-accent hover:underline"
              >
                who should not use Salesforce
              </Link>
              .
            </p>
          </div>

          {/* Common Mistakes */}
          <h2 className="text-xl font-bold mt-14 mb-4">Common Mistakes</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p>
              <strong className="text-foreground">
                Buying for the company you want to be, not the company you are.
              </strong>{" "}
              A 3-person startup does not need enterprise CRM. Buy for your
              current team size and plan to migrate in 18-24 months when you
              outgrow it.
            </p>
            <p>
              <strong className="text-foreground">
                Prioritizing features over adoption.
              </strong>{" "}
              The best CRM is the one your team uses. A simple CRM with 90%
              adoption beats a powerful CRM with 30% adoption every time.
              Pipedrive wins on adoption speed for a reason.
            </p>
            <p>
              <strong className="text-foreground">
                Skipping the data cleanup before migration.
              </strong>{" "}
              Moving dirty data into a new CRM creates a dirty new CRM. Clean
              your contacts, merge duplicates, and standardize field formats
              before migrating. See the{" "}
              <Link
                href="/guides/crm-data-migration-checklist"
                className="text-accent hover:underline"
              >
                CRM data migration checklist
              </Link>
              .
            </p>
            <p>
              <strong className="text-foreground">
                Evaluating based on demo, not on daily use.
              </strong>{" "}
              Every CRM looks good in a 30-minute demo. The real test is: will a
              sales rep update it at 5pm on a Friday after a long week? If the
              daily workflow has too much friction, adoption collapses.
            </p>
            <p>
              <strong className="text-foreground">
                Not testing the mobile app.
              </strong>{" "}
              If your team is in the field (real estate, outside sales), the
              mobile CRM experience matters more than the desktop version. Test
              it on a phone before you commit.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-8">
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Do I even need a CRM if I have fewer than 20 customers?
              </p>
              <p className="text-sm text-muted">
                Maybe not. A spreadsheet works until you have 20-30 active
                conversations happening simultaneously, miss a follow-up, or
                need someone else to pick up where you left off. See{" "}
                <Link
                  href="/guides/migrate-spreadsheet-to-crm"
                  className="text-accent hover:underline"
                >
                  when to move from spreadsheet to CRM
                </Link>
                .
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                HubSpot Free vs Pipedrive Essential — which one?
              </p>
              <p className="text-sm text-muted">
                HubSpot Free if you want $0 cost and plan to add marketing
                tools later. Pipedrive Essential ($14/seat/mo) if you want a
                faster, cleaner pipeline-focused experience. See{" "}
                <Link
                  href="/compare/hubspot-crm-vs-pipedrive"
                  className="text-accent hover:underline"
                >
                  HubSpot vs Pipedrive comparison
                </Link>
                .
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                Can I use my CRM for email marketing too?
              </p>
              <p className="text-sm text-muted">
                HubSpot and ActiveCampaign combine CRM + email well. Pipedrive
                and Close have basic email but are not email marketing platforms.
                For most small teams, a dedicated email tool (Kit,
                ActiveCampaign) plus a CRM (Pipedrive, HubSpot Free) works
                better than forcing one tool to do both.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                What is the best CRM for real estate?
              </p>
              <p className="text-sm text-muted">
                Follow Up Boss is purpose-built for real estate. But
                Pipedrive Essential ($14/seat/mo) works well for solo agents who
                want a simpler and cheaper option. See{" "}
                <Link
                  href="/guides/best-crm-real-estate"
                  className="text-accent hover:underline"
                >
                  best CRM for real estate
                </Link>
                .
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-surface">
              <p className="text-sm font-bold text-foreground mb-1">
                How long does CRM implementation actually take?
              </p>
              <p className="text-sm text-muted">
                HubSpot Free or Pipedrive: 1-2 hours for basic setup, 1 week
                for full team adoption. HubSpot Professional: 2-4 weeks with
                customization. Salesforce: 1-3 months with a consultant. The
                more complex the tool, the longer until your team sees value.
              </p>
            </div>
          </div>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={[
            "hubspot-crm",
            "pipedrive",
            "close",
            "folk",
            "attio",
            "salesforce",
            "freshsales",
            "zoho-crm",
          ]}
          comparisons={[
            "hubspot-crm-vs-pipedrive",
            "hubspot-crm-vs-salesforce",
            "pipedrive-vs-close",
          ]}
          guides={[
            "crm-solo-founder",
            "best-crm-freelancers-consultants",
            "best-crm-sales-teams",
            "best-free-crm-2026",
            "crm-data-migration-checklist",
            "salesforce-hidden-costs",
            "hubspot-pricing-reality",
            "crm-faq",
            "how-to-choose-email-platform",
            "how-to-choose-automation-tool",
            "how-much-should-software-cost",
          ]}
        />
      </article>
    </>
  );
}
