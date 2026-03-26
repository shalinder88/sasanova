import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Cold Outreach Stack: Prospecting + Email + CRM",
  description:
    "Build a sales outreach stack with Apollo.io for prospecting, Lemlist or Instantly for sequences, and Pipedrive or Close for pipeline management. Exact verified pricing.",
};

export default function BestToolsForSalesOutreachPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Sales Outreach Stack</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Best For Use Case
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Cold Outreach Stack: Prospecting + Email + CRM
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Cold outreach requires three tools that work together: a database to find prospects,
            a sequencing tool to reach them, and a CRM to manage the pipeline. Here is the
            stack with exact pricing at every tier.
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

          {/* Layer 1: Prospecting */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 1: Prospecting &mdash; Apollo.io</h2>
            <p className="text-muted leading-relaxed mb-4">
              Apollo.io combines a B2B contact database of 275M+ contacts with built-in sequences
              and a lightweight CRM. It is the most popular all-in-one prospecting tool for startups.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Credits &amp; Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited email credits (fair use), 5 mobile credits/mo, basic filters</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basic</td>
                    <td className="px-4 py-2.5 text-muted">$59/seat/mo ($49/seat/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">5,000 credits/mo, advanced filters, sequences, A/B testing</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$99/seat/mo ($79/seat/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">10,000 credits/mo, dialer, call recordings, AI features</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Organization</td>
                    <td className="px-4 py-2.5 text-muted">$149/seat/mo ($119/seat/mo annual, min 3 users)</td>
                    <td className="px-4 py-2.5 text-muted">15,000 credits/mo, advanced security, custom reports</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Layer 2: Email Sequences */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 2: Email Sequences &mdash; Lemlist vs Instantly</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Lemlist</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Instantly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Entry plan</td>
                    <td className="px-4 py-2.5 text-muted">Email Pro: $79/seat/mo ($55/seat/mo annual)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Growth: $37/mo ($30/mo annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mid-tier plan</td>
                    <td className="px-4 py-2.5 text-muted">Multichannel Expert: $109/seat/mo ($79/seat/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">Hypergrowth: $97/mo ($77.58/mo annual)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email accounts</td>
                    <td className="px-4 py-2.5 text-muted">3 accounts (Email Pro), extras $9/mo each</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited accounts on all plans</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email warm-up</td>
                    <td className="px-4 py-2.5 text-muted">Included</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited warm-up on all plans</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Multichannel</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Email + LinkedIn + calls (Multichannel plan)</td>
                    <td className="px-4 py-2.5 text-muted">Email only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Volume limits</td>
                    <td className="px-4 py-2.5 text-muted">1,000 B2B credits (Email Pro)</td>
                    <td className="px-4 py-2.5 text-muted">1,000 active leads, 5,000 emails/mo (Growth)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">B2B database</td>
                    <td className="px-4 py-2.5 text-muted">Built-in (credit-based)</td>
                    <td className="px-4 py-2.5 text-muted">Separate subscription ($47&ndash;$197/mo)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Verdict:</strong> Choose <strong>Instantly</strong> ($37/mo) for high-volume email-only outreach
                with unlimited accounts. Choose <strong>Lemlist</strong> ($79/seat/mo) if you need multichannel
                outreach across email, LinkedIn, and calls.
              </p>
            </div>
          </section>

          {/* Layer 3: CRM */}
          <section>
            <h2 className="text-xl font-bold mb-4">Layer 3: Pipeline CRM &mdash; Pipedrive vs Close</h2>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pipedrive</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Close</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Entry plan</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Lite: $14/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Solo: $19/seat/mo (1 user only)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Growth plan</td>
                    <td className="px-4 py-2.5 text-muted">Growth: $39/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Essentials: $49/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pro plan</td>
                    <td className="px-4 py-2.5 text-muted">Premium: $49/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Growth: $109/seat/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Built-in calling</td>
                    <td className="px-4 py-2.5 text-muted">Add-on</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Power Dialer included (Essentials+)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email sequences</td>
                    <td className="px-4 py-2.5 text-muted">Basic email sync (Growth+)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Built-in sequences on all plans</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cost at 5 reps</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$195/mo (Growth)</td>
                    <td className="px-4 py-2.5 text-muted">$245/mo (Essentials)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Verdict:</strong> Choose <strong>Pipedrive Growth</strong> ($39/seat/mo) for visual pipeline
                management at a lower price point. Choose <strong>Close</strong> ($49/seat/mo) if you want
                built-in calling, SMS, and email sequences in the CRM itself.
              </p>
            </div>
          </section>

          {/* Recommended Stacks */}
          <section>
            <h2 className="text-xl font-bold mb-4">Recommended Outreach Stacks</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tools</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost (1 rep)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Budget</td>
                    <td className="px-4 py-2.5 text-muted">Apollo Free + Instantly Growth + Pipedrive Lite</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$51/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Standard</td>
                    <td className="px-4 py-2.5 text-muted">Apollo Basic + Instantly Growth + Pipedrive Growth</td>
                    <td className="px-4 py-2.5 text-muted">$135/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Multichannel</td>
                    <td className="px-4 py-2.5 text-muted">Apollo Professional + Lemlist Multichannel + Close Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$257/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can Apollo.io replace a separate sequence tool?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Apollo includes built-in sequences on paid plans. For teams doing moderate volume
                  (under 5,000 emails/month), Apollo alone may be enough. For high-volume outreach with
                  unlimited email accounts, Instantly is better.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do I need a separate CRM if Close has built-in sequences?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Close can serve as both CRM and sequence tool. If you choose Close, you may not need
                  Instantly or Lemlist at all. The tradeoff is that Close starts at $49/seat/mo (Essentials)
                  versus $37/mo for Instantly plus $14/seat/mo for Pipedrive Lite.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about Instantly&apos;s hidden costs?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Instantly splits outreach, lead database, and CRM into separate subscriptions. The lead
                  database is $47&ndash;$197/mo extra, and the CRM is $47&ndash;$97/mo extra. If you need both,
                  the total cost can exceed $130/mo. Pairing Instantly (outreach only) with Apollo (database)
                  and Pipedrive (CRM) often gives better value.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["apollo-io", "lemlist", "instantly", "pipedrive", "close-crm"]}
            comparisons={["close-crm-vs-pipedrive"]}
            guides={["best-crm-sales-teams", "automate-lead-capture"]}
          />
        </div>
      </article>
    </>
  );
}
