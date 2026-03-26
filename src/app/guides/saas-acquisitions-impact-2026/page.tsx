import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "How SaaS Acquisitions Affect Your Pricing in 2026",
  description:
    "What happens to pricing after SaaS acquisitions: Intuit+Mailchimp (free tier shrank 87%), Salesforce+Slack (pricing stable), Atlassian+Loom (free tier restricted). Patterns and what to expect.",
};

export default function SaasAcquisitionsImpact2026Page() {
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
              SaaS Acquisitions Impact 2026
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Competitive Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            How SaaS Acquisitions Affect Your Pricing
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            When a SaaS tool gets acquired, the first question is always: &ldquo;Will my price
            go up?&rdquo; The answer, based on recent history, is usually yes &mdash; but the
            timeline and mechanism vary. Here are the patterns from major acquisitions and what
            they mean for your bill.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>15 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Acquisition Impact Scorecard</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Acquisition</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price Impact</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier Impact</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-muted">Intuit + Mailchimp</td><td className="px-4 py-2.5 text-muted">2021</td><td className="px-4 py-2.5 font-semibold text-foreground">Significant</td><td className="px-4 py-2.5 font-semibold text-foreground">87% reduction</td><td className="px-4 py-2.5 text-muted">12&ndash;24 months</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Salesforce + Slack</td><td className="px-4 py-2.5 text-muted">2021</td><td className="px-4 py-2.5 text-muted">Moderate</td><td className="px-4 py-2.5 text-muted">Reduced (90-day history)</td><td className="px-4 py-2.5 text-muted">12&ndash;18 months</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Atlassian + Loom</td><td className="px-4 py-2.5 text-muted">2023</td><td className="px-4 py-2.5 text-muted">Minimal so far</td><td className="px-4 py-2.5 text-muted">Restricted (25 videos, 5-min limit)</td><td className="px-4 py-2.5 text-muted">12&ndash;36 months</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Intuit + Mailchimp: The Worst-Case Scenario</h2>
            <p className="text-muted leading-relaxed mb-4">
              Intuit acquired Mailchimp for $12 billion in September 2021. At the time, Mailchimp
              Free included 2,000 contacts and 10,000 sends/month. By 2024, the free tier had
              shrunk to 250 contacts and 500 sends/month &mdash; an 87.5% reduction in contacts
              and 95% reduction in sends.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Current Mailchimp pricing:</strong> Free (250
              contacts, 500 sends), Essentials ($13/month, 500 contacts), Standard ($20/month,
              500 contacts), Premium ($350/month, 10,000 contacts). Each tier includes a base
              contact count; additional contacts cost extra.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The pattern:</strong> Intuit needed to justify
              the $12B price tag. The playbook was classic post-acquisition monetization: tighten
              the free tier to force conversion, raise paid plan prices, and cross-sell Intuit
              products. The free tier went from a functional email marketing tool to a demo.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What users should have done:</strong> Migrated
              to beehiiv (free for 2,500 subscribers), Kit (free for 10,000 subscribers), or Brevo
              (free for 100,000 contacts, 300 emails/day) within 6 months of the acquisition
              announcement. The switching cost was low then; it increases with every month of
              accumulated data and automations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Salesforce + Slack: The Subtle Squeeze</h2>
            <p className="text-muted leading-relaxed mb-4">
              Salesforce acquired Slack for $27.7 billion in July 2021. Unlike Mailchimp, Slack&apos;s
              pricing changes were subtler. The free tier now limits message history to 90 days
              (previously unlimited searchable history for the most recent 10,000 messages) and
              caps integrations at 10.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Current Slack pricing:</strong> Free (90-day
              history, 10 integrations), Pro ($8.75/seat/month), Business+ ($18/seat/month),
              Enterprise Grid (custom). Slack AI features are being layered as premium additions.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The pattern:</strong> Salesforce positioned
              Slack as the communication hub for the Salesforce ecosystem. Free tier restrictions
              push teams to Pro. Enterprise features push teams to Business+ or Enterprise Grid,
              which ties deeper into Salesforce&apos;s platform.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The alternative:</strong> Discord is free with
              unlimited message history. Microsoft Teams is included with Microsoft 365 subscriptions
              many teams already pay for. For budget-conscious teams, the Slack premium is
              increasingly hard to justify.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Atlassian + Loom: Still Unfolding</h2>
            <p className="text-muted leading-relaxed mb-4">
              Atlassian acquired Loom for $975 million in October 2023. So far, the pricing
              changes have been focused on the free tier: Loom Starter now limits you to 25
              videos per person, 5-minute recordings, and 720p quality.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">Current Loom pricing:</strong> Starter ($0, 25
              videos, 5-min limit), Business ($18/seat/month, unlimited videos), Business + AI
              ($24/seat/month), Enterprise (custom).
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The pattern:</strong> Atlassian is integrating
              Loom into its suite (Jira, Confluence). Expect deeper Atlassian integrations on
              paid tiers and further free tier restrictions. The 25-video and 5-minute caps are
              likely the beginning, not the end, of free tier tightening.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to watch:</strong> If Loom follows the
              Mailchimp post-acquisition pattern, expect the free tier to tighten further within
              12&ndash;18 months. If you rely heavily on Loom Free, start evaluating alternatives
              or budget for the Business plan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Post-Acquisition Pricing Playbook</h2>
            <p className="text-muted leading-relaxed mb-4">
              Every acquisition follows a predictable pattern:
            </p>
            <ol className="list-decimal list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Months 1&ndash;6:</strong> &ldquo;Nothing is changing.&rdquo; The acquirer reassures users and completes the integration.</li>
              <li><strong className="text-foreground">Months 6&ndash;12:</strong> Free tier starts tightening. Feature gates shift. New &ldquo;premium&rdquo; features appear.</li>
              <li><strong className="text-foreground">Months 12&ndash;24:</strong> Paid plan prices adjust upward. Cross-selling begins. Features from the free tier move to paid.</li>
              <li><strong className="text-foreground">Months 24+:</strong> New pricing model stabilizes at a higher level. Original users either pay more, accept fewer features, or switch.</li>
            </ol>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The lesson:</strong> When a tool you use gets
              acquired, start evaluating alternatives immediately. Not because you must switch, but
              because switching costs only increase over time. Having a backup plan ready is worth
              more than waiting to see what happens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">How to Protect Yourself</h2>
            <ul className="list-disc list-inside text-muted mb-4 space-y-3">
              <li><strong className="text-foreground">Export your data quarterly.</strong> Every tool on this list supports CSV or API export. Keep a recent backup so you are never locked in by data.</li>
              <li><strong className="text-foreground">Avoid deep customization on acquired tools.</strong> The more you build on a platform, the higher the switching cost. Mailchimp users with 50 automated workflows found it much harder to leave than users with simple campaigns.</li>
              <li><strong className="text-foreground">Lock in pricing when possible.</strong> If a tool you rely on gets acquired, ask about annual or multi-year pricing locks before the first increase hits.</li>
              <li><strong className="text-foreground">Favor open-source and self-hostable tools.</strong> Ghost (self-hosted), n8n (self-hosted), and Cal.com (self-hosted) cannot have their pricing changed on you because you control the deployment.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I switch immediately when my tool gets acquired?</h3>
                <p className="text-muted">Not immediately, but start planning. You typically have 6&ndash;12 months before meaningful pricing changes. Use that time to evaluate alternatives, test migrations, and build your export pipeline. Do not wait until the price increase hits.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does every acquisition lead to price increases?</h3>
                <p className="text-muted">Almost always, within 12&ndash;24 months. The acquirer paid a premium for the company and needs to increase revenue to justify the price. The mechanism varies (free tier restrictions, paid plan increases, feature gating) but the direction is consistent.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Are open-source tools immune to pricing changes?</h3>
                <p className="text-muted">Self-hosted open-source tools (Ghost, n8n Community) are immune because you control the deployment. Cloud-hosted versions of open-source tools can still change pricing. The protection is in the self-hosting option, not the open-source license alone.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "slack", "loom", "ghost", "n8n"]}
            comparisons={["mailchimp-vs-beehiiv"]}
            guides={[
              "saas-pricing-changes-2026",
              "mailchimp-pricing-history",
              "saas-free-tier-changes-2026",
              "software-switching-cost-guide",
              "when-to-switch-software",
            ]}
          />
        </div>
      </article>
    </>
  );
}
