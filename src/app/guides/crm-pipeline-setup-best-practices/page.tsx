import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "CRM Pipeline Setup: How Many Stages, What to Track, and Common Mistakes",
  description:
    "Best practices for Pipedrive, HubSpot, Close, and Freshsales. How many stages (5-7), what fields matter, and the exact tier where pipeline customization unlocks.",
};

export default function CrmPipelineSetupBestPracticesPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">CRM Pipeline Setup</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            CRM Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            CRM Pipeline Setup: How Many Stages, What to Track, and Common Mistakes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most CRM pipelines fail because they are either too simple (3 stages) or too complex (12 stages). Here is how to set up a pipeline that your team will actually use.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-3">The Right Number of Stages: 5 to 7</h2>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Research and practical experience converge on 5&ndash;7 stages for most B2B sales pipelines. Fewer than 5 and you lack visibility into where deals stall. More than 7 and reps stop updating the pipeline because it feels like bureaucracy.
            </p>
            <div className="border border-border rounded-lg p-4 bg-surface">
              <p className="text-sm font-semibold text-foreground mb-2">Recommended 6-Stage Pipeline Template</p>
              <ol className="text-sm text-muted space-y-1 list-decimal list-inside">
                <li><strong className="text-foreground">Lead In</strong> &mdash; New lead, not yet qualified</li>
                <li><strong className="text-foreground">Qualified</strong> &mdash; Confirmed budget, authority, need, timeline</li>
                <li><strong className="text-foreground">Demo / Discovery</strong> &mdash; First real conversation or product demo</li>
                <li><strong className="text-foreground">Proposal Sent</strong> &mdash; Formal proposal or quote delivered</li>
                <li><strong className="text-foreground">Negotiation</strong> &mdash; Pricing or terms discussion</li>
                <li><strong className="text-foreground">Closed Won / Closed Lost</strong> &mdash; Final outcome</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Where Pipeline Customization Unlocks by CRM</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Basic Pipeline</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Multiple Pipelines</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Custom Fields</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipeline Automation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite $14/seat</td>
                    <td className="px-4 py-2.5 text-muted">Lite $14/seat (unlimited)</td>
                    <td className="px-4 py-2.5 text-muted">Lite $14/seat (30 fields)</td>
                    <td className="px-4 py-2.5 text-muted">Growth $39/seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free</td>
                    <td className="px-4 py-2.5 text-muted">Starter $20/seat (2 pipelines)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free (10 custom properties)</td>
                    <td className="px-4 py-2.5 text-muted">Professional $890/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Close</td>
                    <td className="px-4 py-2.5 text-muted">Solo $19/seat</td>
                    <td className="px-4 py-2.5 text-muted">Growth $109/seat</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $49/seat</td>
                    <td className="px-4 py-2.5 text-muted">Growth $109/seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free</td>
                    <td className="px-4 py-2.5 text-muted">Pro $47/seat</td>
                    <td className="px-4 py-2.5 text-muted">Growth $11/seat</td>
                    <td className="px-4 py-2.5 text-muted">Growth $11/seat (basic)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">The 5 Custom Fields That Actually Matter</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>Most teams create 20+ custom fields and then nobody fills them in. Focus on these five:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong className="text-foreground">Deal Value</strong> &mdash; The expected revenue. Every CRM includes this by default.</li>
                <li><strong className="text-foreground">Expected Close Date</strong> &mdash; When you think this deal will close. Essential for forecasting.</li>
                <li><strong className="text-foreground">Lead Source</strong> &mdash; Where the deal came from (referral, website, cold outreach, event). Critical for ROI tracking.</li>
                <li><strong className="text-foreground">Decision Maker Identified</strong> &mdash; Boolean yes/no. Deals without a decision maker rarely close.</li>
                <li><strong className="text-foreground">Next Action Date</strong> &mdash; When to follow up. Forces reps to keep deals moving.</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Common Pipeline Setup Mistakes</h2>
            <div className="space-y-4 text-sm text-muted">
              <div className="border-l-2 border-red-400 pl-4">
                <p className="font-semibold text-foreground">Mistake 1: Too many stages</p>
                <p>More than 7 stages creates friction. Reps skip updates because moving deals through 12 stages feels like paperwork, not selling.</p>
              </div>
              <div className="border-l-2 border-red-400 pl-4">
                <p className="font-semibold text-foreground">Mistake 2: Stages based on your actions, not buyer actions</p>
                <p>&quot;Email Sent&quot; and &quot;Voicemail Left&quot; are activities, not stages. Stages should reflect where the buyer is in their decision process.</p>
              </div>
              <div className="border-l-2 border-red-400 pl-4">
                <p className="font-semibold text-foreground">Mistake 3: No &quot;Closed Lost&quot; reasons</p>
                <p>Tracking why deals are lost is more valuable than tracking why they are won. Add a required &quot;lost reason&quot; dropdown: pricing, timing, competitor, no decision, wrong fit.</p>
              </div>
              <div className="border-l-2 border-red-400 pl-4">
                <p className="font-semibold text-foreground">Mistake 4: Not setting deal rotting periods</p>
                <p>Deals sitting in one stage for weeks without activity are &quot;rotting.&quot; Pipedrive (Growth $39/seat+) and HubSpot (Professional $890/mo) support deal rotting alerts. If your CRM does not, set a weekly calendar reminder to audit stale deals.</p>
              </div>
              <div className="border-l-2 border-red-400 pl-4">
                <p className="font-semibold text-foreground">Mistake 5: Building the &quot;perfect&quot; pipeline before starting</p>
                <p>Start with 5 stages. Run for 30 days. Adjust based on where deals actually stall. Your pipeline should evolve from real data, not theory.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Platform-Specific Setup Tips</h2>
            <div className="space-y-4 text-sm text-muted">
              <p><strong className="text-foreground">Pipedrive:</strong> Start on Lite ($14/seat/mo). You get unlimited pipelines, 30 custom fields, and the visual drag-and-drop pipeline that Pipedrive is known for. Upgrade to Growth ($39/seat) when you need automations (auto-move deals between stages) and email sync.</p>
              <p><strong className="text-foreground">HubSpot:</strong> The free tier gives you 1 pipeline with up to 10 custom properties. That is enough to start. You need Starter ($20/seat/mo) for a second pipeline. Workflow automation (auto-assign, auto-move) requires Professional at $890/mo &mdash; that is the big jump.</p>
              <p><strong className="text-foreground">Close:</strong> Solo ($19/seat) gives you a basic pipeline. Multiple pipelines and workflows require Growth ($109/seat). Close is best for inside sales teams that value built-in calling (Power Dialer) over pipeline customization.</p>
              <p><strong className="text-foreground">Freshsales:</strong> The free tier includes a visual pipeline for up to 3 users. Growth ($11/seat) adds AI contact scoring and basic sequences. Multiple pipelines require Pro ($47/seat).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Should I use multiple pipelines or one pipeline with stages?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Use one pipeline if all your deals follow the same process. Use multiple pipelines if you have fundamentally different sales motions (e.g., inbound vs outbound, new business vs renewals, different product lines). Do not create a new pipeline for every minor variation.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  How often should I update my pipeline stages?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Review quarterly. Look at conversion rates between stages. If a stage has a 95%+ pass-through rate, it is not adding information &mdash; remove it. If a stage has a 30% drop-off, investigate whether you need to split it into two stages.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What is the cheapest CRM that supports pipeline automation?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Freshsales Growth at $11/seat/mo includes basic workflow automation. Pipedrive Growth at $39/seat is the next option with more powerful automations. HubSpot gates workflow automation behind Professional at $890/mo flat &mdash; a massive jump from Starter.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "close-crm", "freshsales"]}
            guides={["how-to-choose-crm", "crm-reporting-compared", "crm-for-service-businesses"]}
          />
        </div>
      </article>
    </>
  );
}
