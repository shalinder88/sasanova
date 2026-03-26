import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Content Marketing Stack Under $150/Month",
  description:
    "Build a complete content marketing stack with Semrush or Mangools for SEO, Grammarly for editing, Notion for planning, Buffer for distribution, and beehiiv for newsletter. Exact pricing.",
};

export default function BestToolsForContentMarketingPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Content Marketing Stack</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Best For Use Case
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Content Marketing Stack Under $150/Month
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Most content marketing stacks cost $300&ndash;$500/month once you add SEO tools,
            editing software, planning tools, distribution, and a newsletter platform. Here is how
            to get the full stack for under $150.
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
            <h2 className="text-xl font-bold mb-3">The Five-Tool Content Stack</h2>
            <p className="text-muted leading-relaxed">
              A content marketing engine needs five layers: <strong className="text-foreground">SEO research</strong> (what to write),
              <strong className="text-foreground"> editing</strong> (write it well), <strong className="text-foreground">planning</strong> (organize the calendar),
              <strong className="text-foreground"> distribution</strong> (social media), and <strong className="text-foreground">newsletter</strong> (own your audience).
            </p>
          </section>

          {/* SEO: Semrush vs Mangools */}
          <section>
            <h2 className="text-xl font-bold mb-4">SEO Research: Semrush vs Mangools</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Semrush Pro</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mangools Basic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monthly price</td>
                    <td className="px-4 py-2.5 text-muted">$139.95/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$49.90/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Annual price</td>
                    <td className="px-4 py-2.5 text-muted">$116.62/mo ($1,399.40/yr)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$29.99/mo ($359.88/yr)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Keyword database</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">25B+ keywords</td>
                    <td className="px-4 py-2.5 text-muted">Smaller database</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Keyword tracking</td>
                    <td className="px-4 py-2.5 text-muted">500 keywords</td>
                    <td className="px-4 py-2.5 text-muted">200 tracked keywords</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Competitive analysis</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Deep: PPC, backlinks, traffic estimates</td>
                    <td className="px-4 py-2.5 text-muted">Basic SERP analysis only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Best for</td>
                    <td className="px-4 py-2.5 text-muted">Agencies, enterprise content teams</td>
                    <td className="px-4 py-2.5 text-muted">Bloggers, freelancers, small businesses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>For the $150 budget:</strong> Choose Mangools Basic at $49.90/mo. If you need competitive
                intelligence, Semrush Pro at $139.95/mo consumes nearly the entire budget alone.
              </p>
            </div>
          </section>

          {/* Editing: Grammarly */}
          <section>
            <h2 className="text-xl font-bold mb-4">Editing: Grammarly</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">Basic grammar/spelling, tone detection, 100 AI prompts/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$30/mo (monthly) &bull; $12/mo (annual)</td>
                    <td className="px-4 py-2.5 text-muted">Advanced rewrites, plagiarism detection, 2,000 AI prompts/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              Grammarly Free is sufficient for most content marketers. Upgrade to Pro ($12/mo annual)
              only if you need plagiarism checking or advanced AI rewrites.
            </p>
          </section>

          {/* Planning: Notion */}
          <section>
            <h2 className="text-xl font-bold mb-4">Content Planning: Notion</h2>
            <p className="text-muted leading-relaxed mb-3">
              Use Notion as a content calendar, brief database, and writing workspace. The Free plan
              works for solo operators. Notion Plus at <strong className="text-foreground">$12/user/mo</strong> adds
              custom automations for publishing workflows and 30-day version history.
            </p>
            <p className="text-muted leading-relaxed">
              For a solo content marketer, Notion Free ($0) handles everything you need. Teams should
              budget $12/user/mo for Plus.
            </p>
          </section>

          {/* Distribution: Buffer */}
          <section>
            <h2 className="text-xl font-bold mb-4">Social Distribution: Buffer</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Channels &amp; Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">3 channels, 10 posts per channel, 1 user</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$6/channel/mo ($5 annual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited posts, engagement tools, 30-day analytics</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Team</td>
                    <td className="px-4 py-2.5 text-muted">$12/channel/mo ($10 annual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited users, approval workflows</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              With 5 social channels on Essentials, you pay <strong className="text-foreground">$30/mo</strong> ($25 annual).
              Buffer Free works if you only manage 3 channels with 10 scheduled posts each.
            </p>
          </section>

          {/* Newsletter: beehiiv */}
          <section>
            <h2 className="text-xl font-bold mb-4">Newsletter: beehiiv</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Launch (Free)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">2,500 subscribers, unlimited sends, custom domain</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scale</td>
                    <td className="px-4 py-2.5 text-muted">$49/mo ($43/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited subscribers, ad network, referral program</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Max</td>
                    <td className="px-4 py-2.5 text-muted">$109/mo ($96/mo annual)</td>
                    <td className="px-4 py-2.5 text-muted">Priority support, API access, advanced analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Budget Summary */}
          <section>
            <h2 className="text-xl font-bold mb-4">Total Stack: Under $150/Month</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mangools</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                    <td className="px-4 py-2.5 text-muted">$49.90</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Grammarly</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Buffer</td>
                    <td className="px-4 py-2.5 text-muted">Essentials (5 channels)</td>
                    <td className="px-4 py-2.5 text-muted">$30</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Scale</td>
                    <td className="px-4 py-2.5 text-muted">$49</td>
                  </tr>
                  <tr className="bg-surface-alt">
                    <td className="px-4 py-2.5 font-bold text-foreground" colSpan={2}>Total</td>
                    <td className="px-4 py-2.5 font-bold text-accent">$128.90/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted leading-relaxed">
              The $0 version (Mangools Entry at $29.90 + all free tiers) brings it down to
              <strong className="text-foreground"> $29.90/mo</strong>. Scale up to beehiiv Scale and Buffer Essentials
              as your audience grows.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why Mangools over Ahrefs or Semrush?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Budget. Mangools Basic is $49.90/mo vs Semrush Pro at $139.95/mo and Ahrefs Lite
                  at $129/mo. For content marketers focused on keyword research and rank tracking,
                  Mangools covers the essentials at a fraction of the price.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Why beehiiv over Mailchimp for newsletter?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  beehiiv Launch is free for 2,500 subscribers with unlimited sends. Mailchimp Free
                  limits you to 250 contacts and 500 sends/month. beehiiv also includes a built-in
                  referral program and ad network for monetization.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["semrush", "mangools", "grammarly", "buffer", "beehiiv"]}
            comparisons={[]}
            guides={["seo-tools-for-small-sites", "social-media-management-stack", "best-email-tool-creators"]}
          />
        </div>
      </article>
    </>
  );
}
