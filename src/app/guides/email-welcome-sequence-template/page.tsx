import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Welcome Email Sequence Template: 5 Emails That Convert",
  description:
    "A ready-to-use 5-email welcome sequence template with timing, subject lines, and which platforms support automation at which pricing tier. Exact prices for Mailchimp, Kit, ActiveCampaign, beehiiv, and Brevo.",
};

export default function EmailWelcomeSequenceTemplatePage() {
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
              Email Welcome Sequence Template
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
            Welcome Email Sequence Template: 5 Emails That Convert
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            A welcome sequence is the highest-ROI automation you can build. These 5 emails,
            sent over 14 days, introduce your brand, deliver value, and convert subscribers
            into customers. Here is the exact template plus which email platforms support
            automated sequences at which pricing tier.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
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

          {/* The 5-Email Template */}
          <section>
            <h2 className="text-xl font-bold mb-3">The 5-Email Welcome Sequence</h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Email 1: Immediate &mdash; The Welcome</p>
                <p className="text-sm text-muted mb-2">
                  <strong>Send:</strong> Immediately after signup. <strong>Goal:</strong> Confirm
                  subscription, deliver promised lead magnet, set expectations for email frequency.
                </p>
                <p className="text-sm text-muted">
                  Keep it short. Deliver whatever you promised (PDF, discount, access). Tell them
                  what to expect: how often you email, what topics you cover. One clear CTA.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Email 2: Day 2 &mdash; Your Story</p>
                <p className="text-sm text-muted mb-2">
                  <strong>Send:</strong> 1&ndash;2 days after signup. <strong>Goal:</strong> Build
                  trust and connection by sharing who you are and why you started.
                </p>
                <p className="text-sm text-muted">
                  Personal stories increase reply rates by 2&ndash;3x. Share your origin story,
                  the problem you solve, and why you are different. Invite them to reply.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Email 3: Day 4 &mdash; Best Content</p>
                <p className="text-sm text-muted mb-2">
                  <strong>Send:</strong> 3&ndash;4 days after signup. <strong>Goal:</strong> Demonstrate
                  value with your highest-performing content.
                </p>
                <p className="text-sm text-muted">
                  Link to your best blog post, most-watched video, or most-downloaded resource.
                  This email proves you are worth reading. No selling yet.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Email 4: Day 7 &mdash; Social Proof</p>
                <p className="text-sm text-muted mb-2">
                  <strong>Send:</strong> 6&ndash;7 days after signup. <strong>Goal:</strong> Build
                  credibility through testimonials, case studies, or community size.
                </p>
                <p className="text-sm text-muted">
                  Share results from customers or readers. Numbers are powerful: revenue generated,
                  time saved, community size. Transition toward your offer.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-5">
                <p className="text-sm font-semibold text-foreground mb-1">Email 5: Day 14 &mdash; The Ask</p>
                <p className="text-sm text-muted mb-2">
                  <strong>Send:</strong> 12&ndash;14 days after signup. <strong>Goal:</strong> Present
                  your product, service, or primary CTA.
                </p>
                <p className="text-sm text-muted">
                  After delivering value in emails 1&ndash;4, this is where you make the ask.
                  Offer a trial, consultation, product, or paid subscription. Include a deadline
                  or limited-time incentive if appropriate.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Support */}
          <section>
            <h2 className="text-xl font-bold mb-3">Which Platforms Support This (and at What Tier)</h2>
            <p className="text-muted leading-relaxed mb-3">
              Not every email platform supports automated sequences on every plan. Here is where
              automation unlocks:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Platform</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Automation Unlocks At</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Price</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-3">Free (limited) / Standard</td>
                    <td className="px-4 py-3">$0 (250 contacts) / $20/mo (500 contacts)</td>
                    <td className="px-4 py-3">Free has basic automations. Standard unlocks customer journey builder with branching.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">Kit (ConvertKit)</td>
                    <td className="px-4 py-3">Creator plan</td>
                    <td className="px-4 py-3">$39/mo (1,000 subscribers)</td>
                    <td className="px-4 py-3">Free plan has limited automations. Creator unlocks full visual automation builder and sequences.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">ActiveCampaign</td>
                    <td className="px-4 py-3">Starter</td>
                    <td className="px-4 py-3">$15/mo (1,000 contacts)</td>
                    <td className="px-4 py-3">Basic automations on Starter. Advanced multi-step automations on Plus ($49/mo).</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-3">Scale</td>
                    <td className="px-4 py-3">$49/mo (unlimited subscribers)</td>
                    <td className="px-4 py-3">Launch (free) does not support automation sequences. Scale adds automated workflows.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">$18/mo (5,000 emails/mo)</td>
                    <td className="px-4 py-3">Free has limited automation (300 emails/day). Standard unlocks full marketing automation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Implementation Tips */}
          <section>
            <h2 className="text-xl font-bold mb-3">Implementation Tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Use plain text for emails 1&ndash;2.</strong> Personal
                emails (not marketing templates) get higher open and reply rates for the first
                touchpoints.
              </li>
              <li>
                <strong className="text-foreground">Test timing on your audience.</strong> The 1-2-4-7-14
                day cadence is a starting point. Some audiences respond better to a compressed
                5-day sequence; others need more breathing room.
              </li>
              <li>
                <strong className="text-foreground">Segment based on lead source.</strong> People who
                signed up from a blog post need different messaging than those who came from a
                paid ad. Create separate entry points for each source.
              </li>
              <li>
                <strong className="text-foreground">Set up exit conditions.</strong> If someone purchases
                before email 5, remove them from the welcome sequence. Most platforms support
                goal-based exits in their automation builders.
              </li>
            </ul>
          </section>

          {/* Cheapest Way to Start */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Cheapest Way to Build This Sequence</h2>
            <p className="text-muted leading-relaxed mb-3">
              If you are just starting out and want to build this welcome sequence for the
              lowest cost:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
              <li>
                <strong className="text-foreground">Under 250 contacts:</strong> Mailchimp Free ($0/mo)
                supports basic automations. Limited but functional for a simple 5-email sequence.
              </li>
              <li>
                <strong className="text-foreground">Under 1,000 contacts:</strong> ActiveCampaign Starter
                ($15/mo) offers the best automation builder at the lowest price point.
              </li>
              <li>
                <strong className="text-foreground">Under 10,000 contacts:</strong> Kit Newsletter (free)
                for basic emails, or Kit Creator ($39/mo) for full automation sequences.
              </li>
              <li>
                <strong className="text-foreground">Budget priority:</strong> Brevo Standard ($18/mo)
                gives you marketing automation with unlimited contacts. Best value if list size is
                your concern.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many emails should a welcome sequence have?</h3>
                <p className="text-muted">5 emails over 14 days is the standard starting point. Some creators run 3-email sequences (compressed) or 7-email sequences (extended). Start with 5 and adjust based on open rates and unsubscribe rates.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which email platform has the best automation builder?</h3>
                <p className="text-muted">ActiveCampaign has the most powerful automation builder across all tiers. Kit (ConvertKit) has the most intuitive visual builder for creators. Mailchimp&apos;s customer journey builder is strong but only on Standard ($20/mo) and above.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I build this sequence on a free plan?</h3>
                <p className="text-muted">Yes, with limitations. Mailchimp Free (250 contacts) supports basic automations. Kit Newsletter (free, 10,000 subscribers) has limited automation. Brevo Free (300 emails/day) allows simple workflows. For full sequence capability, expect to pay $15&ndash;$49/mo.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use HTML templates or plain text?</h3>
                <p className="text-muted">For welcome sequences, plain text (or minimal formatting) tends to outperform designed templates. Emails 1&ndash;3 should feel personal. Email 4&ndash;5 can use more design if you are including product images or social proof graphics.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["mailchimp", "convertkit", "activecampaign", "beehiiv", "brevo"]}
            comparisons={["mailchimp-vs-convertkit", "activecampaign-vs-convertkit"]}
            guides={["email-automation-sequences-compared", "automate-welcome-email-sequence", "best-email-tool-creators"]}
          />
        </div>
      </article>
    </>
  );
}
