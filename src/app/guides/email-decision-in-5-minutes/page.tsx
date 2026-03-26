import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Choose Your Email Platform in 5 Minutes: Decision Flowchart",
  description:
    "Answer 5 questions and get a specific email marketing recommendation. Mailchimp, Kit, beehiiv, ActiveCampaign, or Brevo — with exact pricing for each path.",
};

export default function EmailDecisionIn5MinutesPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Email Decision in 5 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Decision Quick-Guide
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Choose Your Email Platform in 5 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Five questions. One recommendation. No feature matrices.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>5 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 1: Are you a newsletter creator or a business?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Newsletter creator</strong> &rarr; <strong className="text-accent">beehiiv Launch (Free)</strong>. 2,500 subscribers, unlimited sends, custom domain, built-in referral program and ad network on Scale ($49/mo).</p>
              <p><strong className="text-foreground">Business sending marketing emails</strong> &rarr; Go to Question 2</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 2: Do you need advanced automation (conditional logic, lead scoring)?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, automation is critical</strong> &rarr; <strong className="text-accent">ActiveCampaign Starter at $15/mo</strong> (1,000 contacts). Best visual automation builder in the market. Plus at $49/mo adds CRM.</p>
              <p><strong className="text-foreground">No, just campaigns and basic sequences</strong> &rarr; Go to Question 3</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 3: How many contacts do you have?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Under 250</strong> &rarr; <strong className="text-accent">Mailchimp Free</strong> (250 contacts, 500 sends/mo). Decent for getting started.</p>
              <p><strong className="text-foreground">250&ndash;2,500</strong> &rarr; <strong className="text-accent">beehiiv Launch (Free)</strong> or <strong className="text-accent">Kit Newsletter (Free, 10K subscribers)</strong></p>
              <p><strong className="text-foreground">2,500+</strong> &rarr; Go to Question 4</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 4: Do you want to pay by contacts or by emails sent?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">By contacts (standard model)</strong> &rarr; <strong className="text-accent">Mailchimp Standard at $20/mo</strong> (500 contacts) or <strong className="text-accent">Kit Creator at $39/mo</strong> (1,000 subscribers).</p>
              <p><strong className="text-foreground">By emails sent (unlimited contacts)</strong> &rarr; <strong className="text-accent">Brevo Starter at $9/mo</strong> (5,000 emails/mo, unlimited contacts). Brevo Standard at $18/mo adds automation and A/B testing.</p>
            </div>
          </section>

          <section className="border border-border rounded-lg p-6">
            <h2 className="text-lg font-bold mb-2">Question 5: Do you sell digital products?</h2>
            <div className="space-y-2 text-sm text-muted">
              <p><strong className="text-foreground">Yes, courses/ebooks/memberships</strong> &rarr; <strong className="text-accent">Kit Creator at $39/mo</strong>. Built-in commerce for digital products with subscriber-centric model.</p>
              <p><strong className="text-foreground">No</strong> &rarr; Stick with your answer from Questions 1&ndash;4.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Quick Price Reference</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Entry Paid Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">250 contacts, 500 sends/mo</td>
                    <td className="px-4 py-2.5 text-muted">Essentials: $13/mo (500 contacts)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit (ConvertKit)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">10K subscribers, unlimited sends</td>
                    <td className="px-4 py-2.5 text-muted">Creator: $39/mo (1K subscribers)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">2,500 subscribers, unlimited sends</td>
                    <td className="px-4 py-2.5 text-muted">Scale: $49/mo (unlimited subscribers)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">300 emails/day, unlimited contacts</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Starter: $9/mo (5,000 emails/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                    <td className="px-4 py-2.5 text-muted">No free tier (14-day trial)</td>
                    <td className="px-4 py-2.5 text-muted">Starter: $15/mo (1K contacts)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why is Mailchimp not the default recommendation?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Mailchimp&apos;s free tier shrank to 250 contacts in recent years. Kit and beehiiv
                  offer far more generous free plans. Mailchimp is still good for e-commerce stores
                  that need product recommendations, but for most use cases, alternatives are cheaper.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What if I need both automation AND newsletter features?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Kit Creator ($39/mo) offers both: automation builder plus commerce for digital products.
                  ActiveCampaign has stronger automation but costs more as contacts grow. For newsletter
                  plus light automation, Kit is the best value.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "brevo"]}
            comparisons={["beehiiv-vs-convertkit"]}
            guides={["how-to-choose-email-platform", "best-email-tool-creators", "when-mailchimp-becomes-expensive"]}
          />
        </div>
      </article>
    </>
  );
}
