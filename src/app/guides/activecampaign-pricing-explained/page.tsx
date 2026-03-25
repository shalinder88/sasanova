import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "ActiveCampaign Pricing Explained: Contact Tiers Change Everything",
  description:
    "ActiveCampaign pricing decoded: Starter $15/mo, Plus $49/mo, Pro $79/mo, Enterprise $145/mo at 1,000 contacts. How prices scale, feature gating, and when alternatives are cheaper.",
};

export default function ActiveCampaignPricingExplainedPage() {
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
              ActiveCampaign Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            ActiveCampaign Pricing Explained: Contact Tiers Change Everything
          </h1>
          <p className="text-lg text-muted">
            ActiveCampaign&apos;s pricing page shows $15/month. What it doesn&apos;t show is that price is for 1,000 contacts &mdash; and the bill multiplies as your list grows. The automation features are genuinely powerful, but they&apos;re gated behind higher tiers. This guide breaks down every tier, every contact threshold, and the exact moments when ActiveCampaign stops being affordable.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Base Pricing at 1,000 Contacts</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                  <td className="px-4 py-2.5">$15/mo</td>
                  <td className="px-4 py-2.5">$9/mo</td>
                  <td className="px-4 py-2.5">Email marketing, basic automations, inline forms</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$29/mo</td>
                  <td className="px-4 py-2.5">CRM, landing pages, lead scoring, SMS marketing</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                  <td className="px-4 py-2.5">$79/mo</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">Predictive sending, split automations, site messaging</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">$145/mo</td>
                  <td className="px-4 py-2.5">$89/mo</td>
                  <td className="px-4 py-2.5">Custom objects, HIPAA support, dedicated account rep</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            All prices above are at the 1,000-contact tier. There is no free plan. ActiveCampaign removed its free trial length to 14 days. The pricing model is flat-rate per tier (not per-seat), which means adding team members doesn&apos;t increase cost &mdash; but adding contacts does.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">How Prices Scale With Contacts</h2>
          <p className="text-muted mb-4">
            This is where ActiveCampaign pricing gets complicated. The base prices above are for 1,000 contacts. As your list grows, the price increases at every tier:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Contacts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Starter</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plus</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1,000</td>
                  <td className="px-4 py-2.5">$15</td>
                  <td className="px-4 py-2.5">$49</td>
                  <td className="px-4 py-2.5">$79</td>
                  <td className="px-4 py-2.5">$145</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">2,500</td>
                  <td className="px-4 py-2.5">$39</td>
                  <td className="px-4 py-2.5">$69</td>
                  <td className="px-4 py-2.5">$149</td>
                  <td className="px-4 py-2.5">$249</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5,000</td>
                  <td className="px-4 py-2.5">$69</td>
                  <td className="px-4 py-2.5">$119</td>
                  <td className="px-4 py-2.5">$209</td>
                  <td className="px-4 py-2.5">$349</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10,000</td>
                  <td className="px-4 py-2.5">$119</td>
                  <td className="px-4 py-2.5">$189</td>
                  <td className="px-4 py-2.5">$339</td>
                  <td className="px-4 py-2.5">$499</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25,000</td>
                  <td className="px-4 py-2.5">$229</td>
                  <td className="px-4 py-2.5">$369</td>
                  <td className="px-4 py-2.5">$549</td>
                  <td className="px-4 py-2.5">Custom</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50,000</td>
                  <td className="px-4 py-2.5">$339</td>
                  <td className="px-4 py-2.5">$489</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The scaling trap:</strong> Starter starts at $15 for 1,000 contacts but hits $119/month at 10,000 contacts &mdash; a 693% increase. By 25,000 contacts, Starter alone costs $229/month. At that point, you&apos;re paying more than many competitors charge for their premium tiers.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Automation Feature Gating</h2>
          <p className="text-muted mb-4">
            ActiveCampaign&apos;s greatest strength &mdash; its automation builder &mdash; is progressively unlocked across tiers:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Starter:</strong> Basic automations only. Linear sequences (do A, then B, then C). No conditional branching, no split testing within automations, no goals.</li>
            <li><strong className="text-foreground">Plus:</strong> Full automation builder with conditional logic, CRM pipeline automations, lead scoring, and SMS within automations. This is where ActiveCampaign becomes genuinely powerful.</li>
            <li><strong className="text-foreground">Pro:</strong> Predictive sending (AI picks optimal send times per contact), split automations (A/B test entire automation paths), site messaging, and attribution reporting.</li>
            <li><strong className="text-foreground">Enterprise:</strong> Custom objects (model custom data types), HIPAA compliance, uptime SLA, and a dedicated account representative.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The key insight</p>
            <p className="text-sm text-muted">
              If you&apos;re choosing ActiveCampaign for its automation, you need Plus at minimum. Starter&apos;s automations are so limited that you might as well use Kit or Mailchimp. Plus ($49/mo at 1,000 contacts) is the real starting price for the ActiveCampaign experience.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">No free tier.</strong> ActiveCampaign has no free plan. Kit gives you 10,000 subscribers free. beehiiv gives you 2,500 free. Brevo gives you 300 emails/day free. ActiveCampaign charges from contact one.</li>
            <li><strong className="text-foreground">Contact counting includes unsubscribed.</strong> Unlike some platforms, ActiveCampaign counts all contacts in your account toward your tier &mdash; including people who unsubscribed but weren&apos;t deleted. Regularly purge unengaged and unsubscribed contacts.</li>
            <li><strong className="text-foreground">CRM is Plus only.</strong> The built-in CRM with deal pipeline, win probability, and sales automation requires Plus ($49/mo). Starter gives you contacts and email only.</li>
            <li><strong className="text-foreground">Landing pages are Plus only.</strong> Building landing pages within ActiveCampaign requires Plus. Starter users need a separate landing page tool.</li>
            <li><strong className="text-foreground">SMS costs extra.</strong> SMS marketing is available on Plus and above, but messages cost additional credits. It&apos;s not unlimited &mdash; you buy SMS credits on top of your plan.</li>
            <li><strong className="text-foreground">Annual billing saves 40%+.</strong> The gap between monthly and annual is significant. Starter drops from $15 to $9/mo. But annual means a 12-month commitment upfront.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Starter ($15/mo)</strong> &mdash; You only need basic email marketing with simple automations. You don&apos;t need CRM, landing pages, or conditional logic. Honest assessment: most people choosing ActiveCampaign need more than Starter offers.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Plus ($49/mo)</strong> &mdash; The right tier for most ActiveCampaign users. You get the full automation builder, CRM, landing pages, lead scoring, and SMS. Start here if automation is your primary reason for choosing ActiveCampaign.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Pro ($79/mo)</strong> &mdash; Worth it if you run enough volume to benefit from predictive sending, need split automation testing, or want attribution reporting. Typically makes sense at 5,000+ contacts with active automation workflows.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Enterprise ($145/mo)</strong> &mdash; Only if you need HIPAA compliance, custom objects, or a dedicated account rep. Very few small-to-mid businesses need Enterprise.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit (ConvertKit) free tier</strong> gives you 10,000 subscribers at $0 with unlimited emails. If your automation needs are moderate (welcome sequences, simple tagging), Kit handles it for free. Kit Creator at $39/mo adds full automations for 1,000 subscribers &mdash; $10/mo less than ActiveCampaign Plus.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo (Sendinblue)</strong> charges by emails sent, not contacts stored. You can have 100,000 contacts for free and pay based on email volume starting at $9/month. For companies with large lists but moderate send frequency, Brevo can be dramatically cheaper.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does ActiveCampaign actually cost?</h3>
                <p className="text-muted">At 1,000 contacts: Starter $15/mo, Plus $49/mo, Pro $79/mo, Enterprise $145/mo. But those prices increase with your contact count. At 10,000 contacts, Starter is $119/mo and Plus is $189/mo. Annual billing saves 40%+.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does ActiveCampaign have a free plan?</h3>
                <p className="text-muted">No. ActiveCampaign has a 14-day free trial but no permanent free tier. The cheapest option is Starter at $15/month for 1,000 contacts. For a free alternative, Kit offers 10,000 subscribers at $0.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is ActiveCampaign more expensive than Mailchimp?</h3>
                <p className="text-muted">ActiveCampaign&apos;s automation builder is significantly more powerful. It includes conditional branching, CRM pipeline, predictive sending, and split automation testing that Mailchimp doesn&apos;t offer. You&apos;re paying for automation depth, not just email sending. If you only send newsletters, Mailchimp or Kit is cheaper.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is ActiveCampaign Starter worth it?</h3>
                <p className="text-muted">Only if you need more than a basic newsletter tool but less than full marketing automation. Starter&apos;s automations are limited (no conditional logic, no CRM). If you&apos;re choosing ActiveCampaign for its automation power, you need Plus at minimum.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["activecampaign", "convertkit", "brevo"]}
            comparisons={["activecampaign-vs-brevo", "convertkit-vs-activecampaign"]}
            guides={["when-activecampaign-gets-expensive", "switch-from-activecampaign-to-kit"]}
          />
        </div>
      </article>
    </>
  );
}
