import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Platform Feature Tiers: What You Unlock at Each Price Point",
  description:
    "For Mailchimp, Kit, beehiiv, ActiveCampaign, and Brevo: what's free, what's in the first paid tier, and what requires premium. Exact tier names and prices.",
};

export default function EmailPlatformFeatureTiersExplainedPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Email Platform Feature Tiers</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Email Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Platform Feature Tiers: What You Unlock at Each Price Point
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every email platform gates features behind tiers. Here is exactly what you get at free, entry paid, and premium levels on each platform.
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
            <h2 className="text-xl font-bold mb-3">Why Feature Tiers Matter More Than Base Price</h2>
            <p className="text-sm text-muted leading-relaxed">
              A $13/mo plan sounds cheap until you realize automation requires the $20/mo tier and advanced reporting requires $350/mo. The base price tells you nothing. The tier gates tell you everything. Below is a platform-by-platform breakdown of exactly what unlocks at each level.
            </p>
          </section>

          {/* Mailchimp */}
          <section>
            <h2 className="text-xl font-bold mb-4">Mailchimp: 4 Tiers, Steep Jumps</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Unlocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">250 contacts, 500 sends/mo, 1 audience, basic templates, limited reporting. Limited automations (single-step only).</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Essentials</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$13/mo</td>
                    <td className="px-4 py-2.5 text-muted">500 contacts, 5,000 sends/mo. Unlocks: email + chat support, A/B testing (subject lines), remove Mailchimp branding, 3 audiences, basic email templates.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Standard</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$20/mo</td>
                    <td className="px-4 py-2.5 text-muted">500 contacts, 6,000 sends/mo. Unlocks: advanced automations (Customer Journey Builder), send-time optimization, content optimizer, custom-coded templates, 5 audiences, advanced segmentation.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Premium</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$350/mo</td>
                    <td className="px-4 py-2.5 text-muted">10,000 contacts, 150,000 sends/mo. Unlocks: phone support, advanced segmentation (unlimited), multivariate testing, comparative reporting.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-3">
              <strong className="text-foreground">The gate that hurts most:</strong> Advanced automations (Customer Journey Builder) require Standard at $20/mo. If you need automation, you skip Essentials entirely.
            </p>
          </section>

          {/* Kit */}
          <section>
            <h2 className="text-xl font-bold mb-4">Kit (ConvertKit): 3 Tiers, Creator-Focused</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Unlocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Newsletter (Free)</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">10,000 subscribers, unlimited sends. Landing pages, forms, subscriber tagging. No advanced automations, no third-party integrations, no live chat support.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Creator</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$39/mo (1K subs)</td>
                    <td className="px-4 py-2.5 text-muted">Unlocks: visual automation builder, third-party integrations, live chat support, free migration from other tools, commerce (sell digital products).</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Creator Pro</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$79/mo (1K subs)</td>
                    <td className="px-4 py-2.5 text-muted">Unlocks: advanced reporting, subscriber scoring, newsletter referral program (SparkLoop-style), priority support.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-3">
              <strong className="text-foreground">The gate that hurts most:</strong> Automations and integrations are gated behind Creator at $39/mo. The free tier is generous for sending but you cannot build sequences or connect other tools.
            </p>
          </section>

          {/* beehiiv */}
          <section>
            <h2 className="text-xl font-bold mb-4">beehiiv: 3 Tiers + Enterprise, Newsletter-First</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Unlocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Launch (Free)</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">2,500 subscribers, unlimited sends, custom domain, website builder. No ad network, no referral program, no A/B testing, beehiiv branding.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scale</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo ($43/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited subscribers. Unlocks: ad network (Boosts), referral program, paid subscriptions, polls, A/B testing, premium themes, remove beehiiv branding, audience segmentation.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Max</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$109/mo ($96/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">Everything in Scale plus: priority support, API access, advanced analytics, newsroom multi-publication support.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-3">
              <strong className="text-foreground">The gate that hurts most:</strong> Monetization (Boosts, paid subscriptions, ad network) all require Scale at $49/mo. The free tier is for building an audience; monetization costs money.
            </p>
          </section>

          {/* ActiveCampaign */}
          <section>
            <h2 className="text-xl font-bold mb-4">ActiveCampaign: 4 Tiers, No Free Plan</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Unlocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$15/mo (1K contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Email marketing, basic automations (limited), email templates, inline forms, segmentation, site tracking (limited).</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49/mo (1K contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Unlocks: CRM with pipeline management, landing pages, lead scoring, SMS marketing, custom audiences (Facebook), deep data integrations.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$79/mo (1K contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Unlocks: predictive sending, split automations, site messaging, attribution reporting, win probability.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$145/mo (1K contacts)</td>
                    <td className="px-4 py-2.5 text-muted">Unlocks: custom objects, HIPAA support, dedicated account rep, custom mail server domain, custom reporting.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-3">
              <strong className="text-foreground">The gate that hurts most:</strong> CRM and lead scoring require Plus at $49/mo. If you want email + CRM in one tool, you are paying $49/mo minimum. Contact-tier pricing also scales steeply: prices multiply as your list grows beyond 1,000.
            </p>
          </section>

          {/* Brevo */}
          <section>
            <h2 className="text-xl font-bold mb-4">Brevo: 4 Tiers + Enterprise, Unlimited Contacts on Every Plan</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Unlocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted">Up to 100,000 contacts, 300 emails/day. Brevo branding on emails. Basic email editor, transactional emails, SMS (pay-as-you-go).</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">5,000 emails/mo, no daily sending limit. Unlocks: basic reporting, remove daily cap. Brevo branding still present.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Standard</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">5,000 emails/mo. Unlocks: marketing automation, A/B testing, advanced statistics, remove Brevo branding.</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$499/mo</td>
                    <td className="px-4 py-2.5 text-muted">150,000+ emails, dedicated IP, marketing automation, Facebook Ads integration, phone support.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted mt-3">
              <strong className="text-foreground">The gate that hurts most:</strong> Marketing automation and A/B testing require Standard at $18/mo. But $18/mo for automation with unlimited contacts is the cheapest automation-capable plan across all five platforms.
            </p>
          </section>

          {/* Cross-platform comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">Side-by-Side: When Does Each Feature Unlock?</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">ActiveCampaign</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basic email sending</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Advanced automations</td>
                    <td className="px-4 py-2.5 text-muted">Standard $20</td>
                    <td className="px-4 py-2.5 text-muted">Creator $39</td>
                    <td className="px-4 py-2.5 text-muted">N/A (not a marketing automation tool)</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15</td>
                    <td className="px-4 py-2.5 text-muted">Standard $18</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">A/B testing</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $13</td>
                    <td className="px-4 py-2.5 text-muted">Creator $39</td>
                    <td className="px-4 py-2.5 text-muted">Scale $49</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15</td>
                    <td className="px-4 py-2.5 text-muted">Standard $18</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Remove platform branding</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $13</td>
                    <td className="px-4 py-2.5 text-muted">Free (no branding)</td>
                    <td className="px-4 py-2.5 text-muted">Scale $49</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15 (no branding)</td>
                    <td className="px-4 py-2.5 text-muted">Standard $18</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM / lead scoring</td>
                    <td className="px-4 py-2.5 text-muted">N/A</td>
                    <td className="px-4 py-2.5 text-muted">N/A</td>
                    <td className="px-4 py-2.5 text-muted">N/A</td>
                    <td className="px-4 py-2.5 text-muted">Plus $49</td>
                    <td className="px-4 py-2.5 text-muted">Free (basic CRM)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Custom domain</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $13</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Bottom Line: Where the Value Is</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Best free tier for subscribers:</strong> Kit Newsletter (10,000 subscribers, unlimited sends). No contest.</p>
              <p><strong className="text-foreground">Best free tier for contacts:</strong> Brevo Free (100,000 contacts, 300 emails/day).</p>
              <p><strong className="text-foreground">Cheapest automation:</strong> ActiveCampaign Starter at $15/mo or Brevo Standard at $18/mo.</p>
              <p><strong className="text-foreground">Cheapest monetization:</strong> beehiiv Scale at $49/mo (unlimited subscribers, ad network, paid subscriptions, 0% platform cut on subscriptions).</p>
              <p><strong className="text-foreground">Biggest tier jump:</strong> Mailchimp Standard ($20/mo) to Premium ($350/mo) &mdash; a 1,650% increase.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which platform has the most generous free tier?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Kit Newsletter: 10,000 subscribers with unlimited sends. Brevo is second with 100,000 contacts but caps at 300 emails/day. beehiiv Launch is third with 2,500 subscribers and unlimited sends plus a custom domain.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which platform offers automation at the lowest price?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  ActiveCampaign Starter at $15/mo includes basic automations. Brevo Standard at $18/mo includes marketing automation with unlimited contacts. Both are significantly cheaper than Mailchimp Standard ($20/mo) or Kit Creator ($39/mo) for automation access.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why is ActiveCampaign&apos;s Essentials tier not listed?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  ActiveCampaign does not have an Essentials tier. Their tiers are Starter ($15/mo), Plus ($49/mo), Pro ($79/mo), and Enterprise ($145/mo), all at 1,000 contacts base. There is no free tier &mdash; only a 14-day trial.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "activecampaign", "brevo"]}
            comparisons={["beehiiv-vs-convertkit", "mailchimp-vs-convertkit"]}
            guides={["how-to-choose-email-platform", "email-list-size-cost-calculator", "best-free-email-tool-2026"]}
          />
        </div>
      </article>
    </>
  );
}
