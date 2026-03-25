import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Pipedrive to HubSpot: When You Need Marketing + Sales Together",
  description:
    "Why teams upgrade from Pipedrive to HubSpot, the pricing cliff reality from Starter to Professional, what transfers and what breaks, and when Pipedrive plus a separate marketing tool is actually cheaper.",
};

export default function SwitchPipedriveToHubspotPage() {
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
              Pipedrive to HubSpot
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Migration Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Pipedrive to HubSpot: When You Need Marketing + Sales Together
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Pipedrive is a sales CRM. HubSpot is a platform. Teams switch when they
            need marketing automation, content tools, and reporting that connects
            marketing spend to closed deals. But HubSpot&apos;s pricing structure has
            a cliff that catches most teams off guard. This guide covers the real
            migration path, the true costs, and when staying on Pipedrive with a
            separate marketing tool makes more financial sense.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">

          {/* ── Why Teams Upgrade from Pipedrive ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Why Teams Upgrade from Pipedrive</h2>
            <p className="text-muted mb-4">
              Pipedrive does one thing well: managing sales pipelines. Drag a deal from stage to stage, log activities, see a forecast. For pure sales teams, it&apos;s hard to beat. The trouble starts when the business needs marketing automation, lead nurturing, content management, or attribution reporting that ties marketing channels to revenue.
            </p>
            <p className="text-muted mb-4">
              Pipedrive&apos;s built-in email marketing (Campaigns add-on) is basic. No multi-step automations, no lead scoring, no landing page builder, no blog, no attribution modeling. You can bolt on third-party tools &mdash; ActiveCampaign for email, Unbounce for landing pages, Google Analytics for attribution &mdash; but now you&apos;re managing 4 tools instead of 1, and none of them share a contact record.
            </p>
            <p className="text-muted mb-4">
              The other trigger is reporting depth. Pipedrive shows sales metrics: deal velocity, conversion rates, activity completion. HubSpot shows the full funnel: which blog post brought the lead, which email sequence warmed them, which sales rep closed them, and how long each stage took. For companies where the CEO asks &ldquo;what&apos;s our cost per qualified lead by channel?&rdquo; Pipedrive can&apos;t answer that.
            </p>
          </section>

          {/* ── The HubSpot Pricing Cliff Reality ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">The HubSpot Pricing Cliff Reality</h2>
            <p className="text-muted mb-4">
              HubSpot&apos;s pricing has three tiers that feel like three different products. Understanding this cliff before you migrate prevents a very expensive surprise 6 months in.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Free and Starter ($20/mo per seat for Sales Hub):</strong> Genuinely useful. Contact management, deal pipeline, email tracking, meeting scheduler, quotes, basic reporting. Starter removes the HubSpot branding and adds simple automation. For a team of 5, that&apos;s $100/mo. Competitive with Pipedrive.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Professional ($100/mo per seat for Sales Hub, $890/mo for Marketing Hub):</strong> This is the cliff. Sales Hub Professional adds sequences, forecasting, custom reporting, and required fields. Marketing Hub Professional adds marketing automation, lead scoring, blog, landing pages, A/B testing, and attribution. That Marketing Hub price is per account, not per seat &mdash; but it&apos;s $890/mo with a $3,000 onboarding fee. Annual commitment required.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">The math that catches teams:</strong> A team of 10 on Pipedrive Advanced ($28/seat/mo) pays $280/mo. Moving to HubSpot Sales Hub Professional ($100/seat/mo) is $1,000/mo. Add Marketing Hub Professional at $890/mo and you&apos;re at $1,890/mo. That&apos;s 6.75x what you were paying Pipedrive. And you haven&apos;t added Service Hub or Content Hub yet.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Users</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive Advanced</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Starter Bundle</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">HubSpot Professional (Sales + Mkt)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                    <td className="px-4 py-2.5">$140/mo</td>
                    <td className="px-4 py-2.5">$100/mo</td>
                    <td className="px-4 py-2.5">$1,390/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">15 users</td>
                    <td className="px-4 py-2.5">$420/mo</td>
                    <td className="px-4 py-2.5">$300/mo</td>
                    <td className="px-4 py-2.5">$2,390/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                    <td className="px-4 py-2.5">$700/mo</td>
                    <td className="px-4 py-2.5">$500/mo</td>
                    <td className="px-4 py-2.5">$3,390/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              <strong className="text-foreground">HubSpot Starter is the sweet spot &mdash; if it has enough features.</strong> At 15 users, HubSpot Starter Bundle ($300/mo) is cheaper than Pipedrive Advanced ($420/mo). But Starter doesn&apos;t include marketing automation sequences, lead scoring, custom reporting, or forecasting. If those are why you&apos;re switching, you need Professional, and Professional is 5&ndash;8x the price.
            </p>
          </section>

          {/* ── What Transfers vs What Breaks ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What Transfers Easily vs What Breaks</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Asset</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Transfers?</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Contacts and companies</td>
                    <td className="px-4 py-2.5 text-green-400">Yes</td>
                    <td className="px-4 py-2.5">HubSpot has a native Pipedrive import tool. Maps standard fields automatically.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Deals and pipeline stages</td>
                    <td className="px-4 py-2.5 text-green-400">Yes</td>
                    <td className="px-4 py-2.5">Deal data imports. Pipeline stages need to be recreated first, then mapped.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Custom fields</td>
                    <td className="px-4 py-2.5 text-yellow-400">Mostly</td>
                    <td className="px-4 py-2.5">Create matching properties in HubSpot first. Some field types may not map 1:1.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Activity history (calls, emails, notes)</td>
                    <td className="px-4 py-2.5 text-yellow-400">Partial</td>
                    <td className="px-4 py-2.5">Notes import. Email history needs manual CSV work. Call logs are tricky.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Automations (Pipedrive workflow automations)</td>
                    <td className="px-4 py-2.5 text-red-400">No</td>
                    <td className="px-4 py-2.5">Rebuild in HubSpot workflows. Document everything before migration.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Email sequences</td>
                    <td className="px-4 py-2.5 text-red-400">No</td>
                    <td className="px-4 py-2.5">Recreate in HubSpot sequences (Professional) or workflows.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Reports and dashboards</td>
                    <td className="px-4 py-2.5 text-red-400">No</td>
                    <td className="px-4 py-2.5">Export Pipedrive Insights reports as reference, rebuild in HubSpot.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Integrations (Zapier, Slack, etc.)</td>
                    <td className="px-4 py-2.5 text-red-400">No</td>
                    <td className="px-4 py-2.5">Reconnect every integration to HubSpot. Most apps have native HubSpot connectors.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              The contact and deal data move reasonably well. Everything around those records &mdash; automations, sequences, reports, integrations &mdash; gets rebuilt from scratch. For a team of 15 with 3 pipeline stages and basic automations, the data migration takes a day. The rebuild takes 2&ndash;3 weeks.
            </p>
          </section>

          {/* ── When Pipedrive + Separate Tool Is Cheaper ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">When Pipedrive + a Separate Marketing Tool Is Actually Cheaper</h2>
            <p className="text-muted mb-4">
              Before committing to HubSpot Professional, do this math: what does Pipedrive + a standalone marketing tool cost?
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">15 users, 10K contacts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Sales Pro + Marketing Pro</td>
                    <td className="px-4 py-2.5">~$2,390/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Advanced + ActiveCampaign Plus</td>
                    <td className="px-4 py-2.5">~$560/mo ($420 + $139)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Advanced + Brevo Business</td>
                    <td className="px-4 py-2.5">~$485/mo ($420 + $65)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Advanced + Kit Creator Pro</td>
                    <td className="px-4 py-2.5">~$587/mo ($420 + $167)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              Pipedrive + ActiveCampaign costs roughly 25% of HubSpot Professional. The tradeoff: two tools instead of one, data lives in two places, and attribution reporting requires manual work or a connector like Zapier. For some teams, that tradeoff is worth $1,800/mo in savings. For others, the unified platform justifies the premium.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">The breakpoint:</strong> HubSpot Professional makes financial sense when your marketing-to-sales handoff is complex enough that separate tools create real friction &mdash; leads falling through cracks, attribution gaps costing you ad budget, sales reps not seeing marketing context. If your process is &ldquo;marketing generates leads, sales calls them,&rdquo; two tools work fine.
            </p>
          </section>

          {/* ── Who Should NOT Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to HubSpot</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams that only need CRM.</strong> If your workflow is manage contacts, track deals, log activities &mdash; and that&apos;s it &mdash; HubSpot Free or Starter gives you no meaningful advantage over Pipedrive, and Pipedrive&apos;s UI is more focused. You&apos;d be migrating sideways, not up.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams allergic to annual contracts.</strong> HubSpot Professional requires an annual commitment. Pipedrive is month-to-month on all plans. If cash flow predictability or flexibility matters, the annual lock-in is a real constraint.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Small teams under 5 people.</strong> At 5 users, HubSpot Professional (Sales + Marketing) runs ~$1,390/mo. That&apos;s $278/user/mo for a small team. Pipedrive + a marketing tool costs $100&ndash;$140/user/mo total. The per-person math doesn&apos;t favor HubSpot until the unified platform saves significant time across a larger team.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams that love Pipedrive&apos;s simplicity.</strong> Pipedrive&apos;s interface is built for sales reps who want to open the app, see their deals, and know what to do. HubSpot&apos;s interface has menus within menus within menus. If your team adopted Pipedrive because they hated complex software, HubSpot won&apos;t go over well.
            </p>
          </section>

          {/* ── Common Mistakes ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Common Migration Mistakes</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Mistake 1: Starting on Starter and assuming you&apos;ll upgrade later.</strong> HubSpot Starter to Professional isn&apos;t an upgrade &mdash; it&apos;s a 5&ndash;10x price increase with a $3,000 onboarding fee. Know which tier you actually need before migrating. If you need Professional features, budget for Professional from day one.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Mistake 2: Not recreating pipeline stages before importing.</strong> HubSpot needs your pipeline structure set up before deals import. If you import deals without matching stages, everything lands in a default pipeline with wrong stage assignments. Map your Pipedrive stages to HubSpot stages first.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Mistake 3: Forgetting the onboarding fee.</strong> HubSpot Professional requires a one-time onboarding fee: $3,000 for Marketing Hub Professional, $500 for Sales Hub Professional. This isn&apos;t optional. It&apos;s mandatory. Budget for $3,500+ in upfront fees before the first monthly bill.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Mistake 4: Importing dirty data from Pipedrive.</strong> This migration is an opportunity to clean house. Export from Pipedrive, review in a spreadsheet, remove stale contacts, fix duplicate companies, and standardize field values before importing to HubSpot. HubSpot charges for marketing contacts &mdash; importing junk means paying for junk.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Mistake 5: Underestimating adoption time.</strong> Pipedrive is dead simple. HubSpot requires training. Budget 1&ndash;2 weeks for sales reps to get comfortable, and expect productivity to dip during the transition. Assign a HubSpot champion on the team to handle questions.
            </p>
          </section>

          {/* ── The Verdict ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">The Verdict</h2>
            <p className="text-muted mb-4">
              Pipedrive to HubSpot makes sense when your business has outgrown a pure sales CRM and needs marketing automation, content tools, and full-funnel reporting under one roof. The unified contact record &mdash; seeing every email, page visit, form submission, deal stage, and support ticket in one place &mdash; is genuinely powerful for companies with complex buyer journeys.
            </p>
            <p className="text-muted mb-4">
              It doesn&apos;t make sense when HubSpot Starter has enough features for your needs (in which case you&apos;re paying roughly the same as Pipedrive), or when the Professional pricing cliff puts you at 5&ndash;8x your current spend without a clear ROI path. Run the Pipedrive + marketing tool cost comparison first. If the two-tool approach saves $1,000+/mo and your marketing-to-sales handoff is straightforward, stay on Pipedrive.
            </p>
            <p className="text-muted mb-4">
              The migration itself is manageable &mdash; 2&ndash;4 weeks for most teams. HubSpot&apos;s Pipedrive import tool handles the data. The real cost is time: rebuilding automations, training the team, and waiting for the reporting to show ROI on a much larger software investment.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does HubSpot have a native Pipedrive import tool?</h3>
                <p className="text-muted">Yes. HubSpot offers a direct data migration from Pipedrive that imports contacts, companies, deals, and notes. Custom fields require manual property creation in HubSpot first. The import tool handles the mapping once properties exist.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use HubSpot Free CRM and keep Pipedrive?</h3>
                <p className="text-muted">You can run both in parallel temporarily, but maintaining two CRMs creates data sync nightmares. Some teams use HubSpot Free for marketing and Pipedrive for sales with a Zapier sync, but this breaks at scale. Choose one system of record.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How long does the Pipedrive to HubSpot migration take?</h3>
                <p className="text-muted">Data migration: 1&ndash;2 days. Automation and workflow rebuild: 1&ndash;2 weeks. Team training and adoption: 1&ndash;2 weeks. Total: 3&ndash;5 weeks from start to full cutover. Budget an additional 2 weeks of parallel running.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Starter enough or do I need Professional?</h3>
                <p className="text-muted">If you need marketing automation sequences, lead scoring, custom reporting, blog tools, or A/B testing, you need Professional. If you need basic CRM with email tracking and a simple pipeline, Starter works. The feature gap between Starter and Professional is massive &mdash; bigger than the gap between Pipedrive and HubSpot Starter.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about Pipedrive Professional vs HubSpot Professional?</h3>
                <p className="text-muted">Pipedrive Professional ($50/seat/mo) adds revenue forecasting, team management, and custom dashboards. It&apos;s a solid upgrade from Advanced. But it still doesn&apos;t include marketing automation, content tools, or full-funnel attribution. If those are what you need, Pipedrive Professional doesn&apos;t close the gap.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/hubspot-pricing-reality"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">HubSpot Pricing Reality</span>
                <span className="block text-xs text-muted mt-1">The full breakdown of what HubSpot actually costs</span>
              </Link>
              <Link
                href="/guides/switch-from-hubspot-to-pipedrive"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">HubSpot to Pipedrive</span>
                <span className="block text-xs text-muted mt-1">The reverse migration when HubSpot is too much</span>
              </Link>
              <Link
                href="/guides/best-crm-sales-teams"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">CRM for Sales Teams of 5&ndash;25</span>
                <span className="block text-xs text-muted mt-1">HubSpot vs Pipedrive vs Close head-to-head</span>
              </Link>
              <Link
                href="/guides/migrate-salesforce-to-hubspot"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Salesforce to HubSpot Migration</span>
                <span className="block text-xs text-muted mt-1">The enterprise-level HubSpot migration guide</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["pipedrive", "hubspot-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive", "pipedrive-vs-salesforce"]}
            guides={[
              "hubspot-crm-setup-guide",
              "hubspot-pricing-reality",
              "crm-annual-cost-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
