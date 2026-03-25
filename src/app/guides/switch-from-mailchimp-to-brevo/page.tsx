import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Mailchimp to Brevo: The Pay-Per-Send Alternative",
  description:
    "Why Brevo's email-based pricing beats Mailchimp's contact-based model, what you gain (unlimited contacts), what you lose (templates, social posting), and cost comparison at 5K/10K/25K contacts.",
};

export default function SwitchMailchimpToBrevoPage() {
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
              Mailchimp to Brevo
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
            Mailchimp to Brevo: The Pay-Per-Send Alternative
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Mailchimp charges by contacts. Brevo charges by emails sent. If you have a
            large list but don&apos;t email everyone every week, Brevo&apos;s pricing
            model can save you hundreds per month. This guide covers when the switch
            makes financial sense, what you lose in the move, and how to migrate
            without losing subscribers.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">

          {/* ── Why People Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Why People Switch from Mailchimp to Brevo</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Mailchimp&apos;s contact-based pricing punishes list growth.</strong> Mailchimp Standard starts at $20/mo for 500 contacts. At 5,000 contacts, it jumps to roughly $75/mo. At 25,000 contacts, you&apos;re looking at $230+/mo. Every subscriber you add increases your bill, even unengaged ones you rarely email.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Brevo charges by emails sent, not contacts stored.</strong> Brevo Free stores up to 100,000 contacts at no cost. You only pay when you send emails. Brevo Starter at $9/mo gives you 5,000 emails/month regardless of how many contacts you have. If you email a 10,000-person list twice a month (20,000 emails), Brevo Standard at $18/mo covers it.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">The Mailchimp free tier has shrunk.</strong> Mailchimp Free now caps at 250 contacts and 500 sends/month with limited automations. Brevo Free gives you 100,000 contacts and 300 emails/day (roughly 9,000/month). For growing businesses, Brevo&apos;s free plan is dramatically more generous.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Multi-channel in one platform.</strong> Brevo includes email, SMS marketing, WhatsApp campaigns, and a basic CRM on all plans. Mailchimp focuses on email with limited SMS (separate Mailchimp SMS pricing). For businesses that want email + SMS, Brevo consolidates both.
            </p>
          </section>

          {/* ── What You Gain ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Gain Moving to Brevo</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Unlimited contacts on every plan.</strong> Store as many contacts as you want (up to 100,000 on Free, unlimited on paid plans). Never pay extra just because your list is growing. This is the fundamental pricing advantage.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Built-in SMS and WhatsApp.</strong> Send SMS campaigns and WhatsApp messages from the same platform you use for email. No separate tool needed. Useful for e-commerce, appointment reminders, and time-sensitive promotions.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Included CRM.</strong> Brevo bundles a basic CRM (contact management, deals, tasks) at no extra cost. It won&apos;t replace Pipedrive or HubSpot, but for small businesses managing contacts and deals alongside email campaigns, it&apos;s a useful bonus.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Transactional email included.</strong> Brevo handles both marketing and transactional emails (order confirmations, password resets) on the same platform with a shared API. Mailchimp&apos;s transactional email (Mandrill) is a separate add-on.
            </p>
          </section>

          {/* ── What You Lose ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">What You Lose Leaving Mailchimp</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Template library and email editor polish.</strong> Mailchimp&apos;s email editor is one of the best in the market. The template library is extensive, the drag-and-drop builder is intuitive, and the design options are broad. Brevo&apos;s editor is functional but less polished.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Social media posting.</strong> Mailchimp includes social media scheduling and posting on Standard ($20/mo) and above. Brevo doesn&apos;t include social media management.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">E-commerce integration depth.</strong> Mailchimp&apos;s Shopify, WooCommerce, and BigCommerce integrations offer product recommendations, abandoned cart emails, and purchase-based segmentation. Brevo has e-commerce integrations but they&apos;re less mature.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Content optimizer and creative tools.</strong> Mailchimp offers a content optimizer that scores your email content, plus integration with Canva for design. Brevo focuses on sending functionality over creative tools.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Brand recognition.</strong> Mailchimp is the most recognized email marketing brand. Some businesses prefer the credibility and ecosystem familiarity. Brevo (formerly Sendinblue) is less well-known.
            </p>
          </section>

          {/* ── Cost Comparison ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Cost Comparison at Different Contact Levels</h2>
            <p className="text-muted mb-4">
              Monthly billing rates, verified March 2026. Mailchimp prices scale with contacts; Brevo prices scale with email volume.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo Standard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5K contacts, 20K emails/mo</td>
                    <td className="px-4 py-2.5">~$75/mo</td>
                    <td className="px-4 py-2.5">$18/mo</td>
                    <td className="px-4 py-2.5 text-green-400">~$57/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">10K contacts, 40K emails/mo</td>
                    <td className="px-4 py-2.5">~$115/mo</td>
                    <td className="px-4 py-2.5">~$35/mo</td>
                    <td className="px-4 py-2.5 text-green-400">~$80/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">25K contacts, 75K emails/mo</td>
                    <td className="px-4 py-2.5">~$230/mo</td>
                    <td className="px-4 py-2.5">~$65/mo</td>
                    <td className="px-4 py-2.5 text-green-400">~$165/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Price source:</strong> Mailchimp Standard base is $20/mo for 500 contacts, scaling with contact count. Brevo Standard is $18/mo for 5,000 emails/mo, scaling with email volume. Brevo Starter is $9/mo for 5,000 emails/mo without automation.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">When Brevo is NOT cheaper:</strong> If you have a small list (under 2,500 contacts) and send frequently, Mailchimp Essentials ($13/mo for 500 contacts) can be competitive. Also, if you email your entire list daily, the email volume with Brevo adds up. Brevo&apos;s advantage is strongest with large lists and moderate send frequency.
            </p>
          </section>

          {/* ── Who Should NOT Switch ── */}
          <section>
            <h2 className="text-xl font-bold mt-10 mb-4">Who Should NOT Switch to Brevo</h2>
            <p className="text-muted mb-4">
              <strong className="text-foreground">E-commerce businesses relying on Mailchimp integrations.</strong> If you use Mailchimp&apos;s deep Shopify integration for product recommendations, abandoned cart flows, and purchase-based segments, verify Brevo&apos;s e-commerce integrations match your needs before switching.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams that love Mailchimp&apos;s email editor.</strong> If your marketing team produces visually rich emails and relies on Mailchimp&apos;s template library and design tools, Brevo&apos;s editor may feel like a downgrade. Test it before committing.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Small lists with high send frequency.</strong> If you have 1,000 contacts and email them daily, you&apos;re sending 30,000 emails/month. Mailchimp Essentials for 1,000 contacts is around $27/mo. Brevo Standard for 20,000 emails/mo is $18/mo, but you&apos;d need more volume. The savings are minimal on small lists.
            </p>
            <p className="text-muted mb-4">
              <strong className="text-foreground">Teams needing social media management.</strong> If you use Mailchimp for both email and social posting, you&apos;ll need a separate social media tool (Buffer, Hootsuite) after switching to Brevo, adding to your total cost.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I import my Mailchimp contacts to Brevo?</h3>
                <p className="text-muted">Yes. Export your Mailchimp audience as CSV (Audience &rarr; All contacts &rarr; Export). Import into Brevo with field mapping. Tags, segments, and custom fields can be recreated. Automation workflows need to be rebuilt manually.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Brevo have automation like Mailchimp?</h3>
                <p className="text-muted">Yes. Brevo Standard ($18/mo) includes marketing automation with visual workflow builder, A/B testing, and advanced stats. The automation capabilities are comparable to Mailchimp Standard for most use cases.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Brevo&apos;s deliverability as good as Mailchimp&apos;s?</h3>
                <p className="text-muted">Brevo&apos;s deliverability is generally good but depends on your setup. Use a dedicated IP (available on higher plans), authenticate your domain (SPF, DKIM, DMARC), and warm up your sending reputation. Mailchimp&apos;s shared IP infrastructure has a longer track record.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens if I exceed my Brevo email limit?</h3>
                <p className="text-muted">You can upgrade your plan or purchase additional email credits. Brevo doesn&apos;t automatically charge overages &mdash; emails beyond your limit simply don&apos;t send until the next billing cycle or you upgrade.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/when-mailchimp-becomes-expensive"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">When Mailchimp Becomes Expensive</span>
                <span className="block text-xs text-muted mt-1">The exact subscriber count where the math breaks</span>
              </Link>
              <Link
                href="/guides/switch-from-mailchimp-to-activecampaign"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Mailchimp to ActiveCampaign</span>
                <span className="block text-xs text-muted mt-1">When you need real automation</span>
              </Link>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["mailchimp", "brevo"]}
          comparisons={["mailchimp-vs-brevo"]}
          guides={["when-mailchimp-becomes-expensive"]}
        />
      </article>
    </>
  );
}
