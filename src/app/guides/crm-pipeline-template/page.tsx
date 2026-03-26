import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "CRM Pipeline Template: 5 Stages That Actually Work",
  description:
    "A ready-to-use 5-stage CRM pipeline with stage names, win probabilities, and which CRM supports custom stages at which tier. Exact pricing for Pipedrive, HubSpot, Salesforce, Freshsales, and Zoho CRM.",
};

export default function CrmPipelineTemplatePage() {
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
              CRM Pipeline Template
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Template
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Pipeline Template: 5 Stages That Actually Work
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most CRM pipelines have too many stages, unclear exit criteria, and no win
            probability assigned. This template gives you 5 stages that map to how deals
            actually close, with suggested win probabilities and the exact CRM tier where
            custom pipeline stages unlock.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={5}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The 5 Stages */}
          <section>
            <h2 className="text-xl font-bold mb-3">The 5-Stage Pipeline</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Stage</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Win Probability</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Exit Criteria</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Max Days</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">1. Lead Qualified</td>
                    <td className="px-4 py-3">10%</td>
                    <td className="px-4 py-3">Budget confirmed, decision-maker identified, timeline exists</td>
                    <td className="px-4 py-3">14 days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">2. Discovery Complete</td>
                    <td className="px-4 py-3">25%</td>
                    <td className="px-4 py-3">Pain points documented, requirements gathered, stakeholders mapped</td>
                    <td className="px-4 py-3">14 days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">3. Proposal Sent</td>
                    <td className="px-4 py-3">50%</td>
                    <td className="px-4 py-3">Proposal delivered, pricing shared, follow-up meeting scheduled</td>
                    <td className="px-4 py-3">7 days</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">4. Negotiation</td>
                    <td className="px-4 py-3">75%</td>
                    <td className="px-4 py-3">Terms discussed, objections addressed, verbal agreement or redline</td>
                    <td className="px-4 py-3">14 days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">5. Closed Won / Lost</td>
                    <td className="px-4 py-3">100% / 0%</td>
                    <td className="px-4 py-3">Contract signed or deal explicitly lost with reason documented</td>
                    <td className="px-4 py-3">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Why 5 stages, not 7 or 10</p>
              <p className="text-sm text-muted">
                More stages create more friction. Sales reps skip stages or forget to update them.
                Five stages are enough to forecast accurately and identify where deals stall. If
                you need more granularity, use custom fields within a stage rather than adding stages.
              </p>
            </div>
          </section>

          {/* Platform Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-3">Which CRM Supports Custom Stages (and at What Tier)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">CRM</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Custom Stages On</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Multiple Pipelines</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-3">All plans (Lite and up)</td>
                    <td className="px-4 py-3">$14/seat/mo (Lite)</td>
                    <td className="px-4 py-3">Yes, on all plans</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">HubSpot CRM</td>
                    <td className="px-4 py-3">Free Tools (1 pipeline)</td>
                    <td className="px-4 py-3">$0/mo (Free)</td>
                    <td className="px-4 py-3">Multiple pipelines on Starter ($20/seat/mo)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-3">All plans</td>
                    <td className="px-4 py-3">$25/seat/mo (Starter Suite)</td>
                    <td className="px-4 py-3">Yes, but complex to configure</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-3">Free (1 pipeline)</td>
                    <td className="px-4 py-3">$0/mo (up to 3 users)</td>
                    <td className="px-4 py-3">Multiple on Pro ($47/seat/mo)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-4 py-3">Standard and up</td>
                    <td className="px-4 py-3">$20/seat/mo (Standard)</td>
                    <td className="px-4 py-3">Multiple on Professional ($35/seat/mo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Setup Tips */}
          <section>
            <h2 className="text-xl font-bold mb-3">Setting Up the Pipeline</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Name stages after outcomes, not activities.</strong>{" "}
                &quot;Discovery Complete&quot; is better than &quot;Had First Call.&quot; Outcomes
                are measurable; activities are vague.
              </li>
              <li>
                <strong className="text-foreground">Set win probabilities on day one.</strong> Most CRMs
                let you assign a percentage to each stage. This powers weighted pipeline reports and
                revenue forecasting. Use 10-25-50-75-100 as your starting point.
              </li>
              <li>
                <strong className="text-foreground">Add &quot;rotting&quot; indicators.</strong> Set the
                maximum days a deal should stay in each stage. Pipedrive and HubSpot both support
                deal rotting alerts. If a deal sits in Discovery for 21+ days, it is probably dead.
              </li>
              <li>
                <strong className="text-foreground">Require a &quot;lost reason&quot; on every closed-lost deal.</strong>{" "}
                This is the most valuable data your pipeline generates. Use a required dropdown field
                with 5&ndash;7 predefined reasons (price, timing, competitor, no budget, ghosted, etc.).
              </li>
              <li>
                <strong className="text-foreground">Keep one pipeline per sales process.</strong> If you
                sell consulting and products, use two separate pipelines. Do not try to fit different
                sales cycles into one pipeline with conditional stages.
              </li>
            </ol>
          </section>

          {/* Cheapest Setup */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Cheapest Way to Build This Pipeline</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Free:</strong> HubSpot Free Tools ($0) gives you
                a customizable pipeline with unlimited contacts and basic reporting. Freshsales Free
                ($0, up to 3 users) offers a visual pipeline with AI contact scoring.
              </li>
              <li>
                <strong className="text-foreground">Under $20/seat/mo:</strong> Pipedrive Lite
                ($14/seat/mo) gives you full pipeline customization with multiple pipelines. Best
                value for dedicated sales teams.
              </li>
              <li>
                <strong className="text-foreground">Need automations too:</strong> Pipedrive Growth
                ($39/seat/mo) adds automations and email sync. Freshsales Growth ($11/seat/mo) is
                cheaper if you need AI scoring and sequences.
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many pipeline stages should a CRM have?</h3>
                <p className="text-muted">3&ndash;7 stages is optimal for most businesses. Fewer than 3 gives you no forecasting visibility. More than 7 creates friction and data quality issues. Start with 5 and adjust after 90 days of real usage.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which CRM has the best pipeline view?</h3>
                <p className="text-muted">Pipedrive was built around the pipeline view and is widely considered the best visual pipeline CRM. HubSpot and Freshsales also have strong pipeline UIs. Salesforce requires more configuration to get a clean pipeline view.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I track win probability manually or automatically?</h3>
                <p className="text-muted">Set default probabilities per stage (automatic) but allow manual overrides for specific deals. Freshsales and HubSpot Professional offer AI-powered win probability predictions that supplement your stage-based defaults.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use a free CRM for this pipeline?</h3>
                <p className="text-muted">Yes. HubSpot Free Tools supports one custom pipeline with unlimited contacts. Freshsales Free supports one pipeline for up to 3 users. Both are fully functional for a small sales team implementing this 5-stage template.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "salesforce", "freshsales", "zoho-crm"]}
            comparisons={["pipedrive-vs-hubspot-crm", "freshsales-vs-pipedrive"]}
            guides={["crm-pipeline-setup-best-practices", "crm-reporting-features-ranked", "best-crm-sales-teams"]}
          />
        </div>
      </article>
    </>
  );
}
