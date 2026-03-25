import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "The Newsletter Stack for a One-Person Creator Under $150/Month",
  description:
    "Most creators overspend on newsletter tools. Here's the exact stack — with plan names, prices, and limits — that works from zero subscribers to 50,000.",
};

export default function NewsletterStackGuide() {
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
            <span className="text-foreground font-medium truncate">Newsletter Stack</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Stack Building
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          The Newsletter Stack for a One-Person Creator Under $150/Month
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 14 min read
        </p>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Tested free and paid tiers"
          sourceCount={3}
        />

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted mt-8">
          <p>
            I&apos;ve watched creators spend $300/month on tools before they have 500 subscribers.
            ConvertKit Creator Pro at $59, a Zapier paid plan at $29.99, Calendly Teams at $16/seat,
            some landing page builder at $39. It adds up fast and none of it moves the needle when
            you&apos;re still finding your voice.
          </p>
          <p>
            Here&apos;s the thing: you can run a legitimate newsletter operation for $0/month until
            you hit real traction. And even at scale, $150/month covers more than most solo creators
            need. The trick is knowing which tools to start with and when to upgrade.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The $0/Month Starter Stack</h2>
            <p>
              This is what you launch with. No credit card required for any of it.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5">Launch (free)</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">2,500 subscribers, unlimited sends, basic analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">100 tasks/month, 5 single-step zaps</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">Unlimited pages, 5MB file uploads, 10 guest collaborators</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong className="text-foreground">beehiiv Launch</strong> is the foundation.
              It gives you a hosted newsletter website, custom domain support, and a subscribe
              form &mdash; all free up to 2,500 subscribers. That&apos;s not a trial. It&apos;s
              their actual free tier with no expiration.
            </p>
            <p>
              <strong className="text-foreground">Zapier Free</strong> handles light automation:
              new subscriber notifications to Slack, forwarding signups to a Google Sheet for
              backup, or triggering a welcome DM. The free plan caps at 100 tasks/month and
              single-step zaps only. That&apos;s enough when you&apos;re below 500 subscribers.
            </p>
            <p>
              <strong className="text-foreground">Notion Free</strong> is your editorial calendar,
              content database, and swipe file. I track every newsletter issue, topic ideas,
              and performance notes in a single Notion database. Free tier is plenty &mdash;
              the paid plans ($10/month for Plus) only matter if you need team collaboration
              or larger file uploads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The $80/Month Growth Stack</h2>
            <p>
              Upgrade when you hit 2,500 subscribers or when you need automation sequences,
              referral programs, or paid subscriptions. Not before.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">What It Unlocks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5">Scale</td>
                    <td className="px-4 py-2.5">$39/mo</td>
                    <td className="px-4 py-2.5">Up to 10,000 subs, referral program, custom automations, paid subscriptions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">ConvertKit</td>
                    <td className="px-4 py-2.5">Creator</td>
                    <td className="px-4 py-2.5">$29/mo</td>
                    <td className="px-4 py-2.5">Automated sequences, visual builder, integrations, up to 1,000 subs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Calendly</td>
                    <td className="px-4 py-2.5">Standard</td>
                    <td className="px-4 py-2.5">$12/mo</td>
                    <td className="px-4 py-2.5">Unlimited event types, calendar integrations, reminders, payment collection</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong className="text-foreground">Why two email tools?</strong> This is the part
              that confuses people. beehiiv is your newsletter platform &mdash; it handles
              sending, subscriber management, and your public archive. ConvertKit is your
              automation backend &mdash; it handles drip sequences, tagging, and segmented
              campaigns triggered by subscriber behavior. You connect them via Zapier or
              beehiiv&apos;s native webhooks.
            </p>
            <p>
              You can skip ConvertKit entirely if beehiiv&apos;s built-in automations cover
              your needs. Many creators do. But if you sell courses, have multiple products, or
              need complex conditional sequences, ConvertKit&apos;s visual automation builder is
              meaningfully better.
            </p>
            <p>
              <strong className="text-foreground">Calendly Standard at $12/month</strong> enters
              the stack when you start doing sponsored content, guest interviews, or consulting
              calls. The free plan only allows one event type. Standard gives you unlimited
              types, automated reminders, and Stripe payment collection for paid calls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The $150/Month Scale Stack</h2>
            <p>
              For creators between 10,000 and 50,000 subscribers who are generating revenue.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Max</td>
                    <td className="px-4 py-2.5">Max</td>
                    <td className="px-4 py-2.5">$99/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">ConvertKit Creator</td>
                    <td className="px-4 py-2.5">Creator (5K subs)</td>
                    <td className="px-4 py-2.5">$66/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Calendly Standard</td>
                    <td className="px-4 py-2.5">Standard</td>
                    <td className="px-4 py-2.5">$12/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Total: ~$177/month. ConvertKit pricing scales with subscriber count &mdash;
              Creator plan jumps from $29 at 1K subs to $66 at 5K subs to $100 at 10K.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why Not Substack</h2>
            <p>
              Substack is free to use, and that&apos;s genuinely appealing. But Substack takes
              10% of your paid subscription revenue. At small scale, that&apos;s fine. At larger
              scale, the math gets brutal.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-2">
              <p className="text-foreground font-semibold">The 10% Revenue Cut at Scale</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>500 paid subscribers at $10/month = $5,000/month revenue. Substack takes $500.</li>
                <li>2,000 paid subscribers at $10/month = $20,000/month revenue. Substack takes $2,000.</li>
                <li>That $2,000/month buys you beehiiv Max ($99), ConvertKit Creator Pro ($100), and still leaves $1,800 on the table.</li>
              </ul>
            </div>
            <p className="mt-3">
              Substack also gives you limited design control, no automation capabilities, and
              no referral program. You can&apos;t A/B test subject lines. You can&apos;t build
              conditional email sequences. You can&apos;t tag subscribers by behavior.
            </p>
            <p>
              The one thing Substack does well: built-in network discovery. If you have zero
              audience and want to be found through Substack&apos;s recommendation engine, it&apos;s
              a reasonable starting point. But plan your exit from day one. Substack makes
              exporting your subscriber list easy (it&apos;s a CSV download), but you&apos;ll
              lose your publication URL and any SEO equity you&apos;ve built.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why Not Mailchimp</h2>
            <p>
              Mailchimp&apos;s pricing has a cliff. The free plan covers 500 contacts with
              1,000 sends/month. That sounds fine until you realize: 500 contacts sending a
              weekly newsletter = 2,000 sends/month. You&apos;ll hit the limit in two weeks.
            </p>
            <p>
              The jump to Mailchimp Standard is $13.99/month for 500 contacts. But it climbs
              fast: $27.99 at 1,500 contacts, $45.99 at 2,500, $78.99 at 5,000. By the time
              you have 10,000 contacts, you&apos;re paying $110/month &mdash; and you still
              don&apos;t get a hosted newsletter page, referral program, or native paid
              subscriptions.
            </p>
            <p>
              Mailchimp made sense in 2018. Today, beehiiv and ConvertKit are purpose-built
              for newsletters. Mailchimp is purpose-built for e-commerce email marketing.
              Different tool for a different job.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Migration Guide: Moving Off Substack or Mailchimp</h2>
            <p className="font-semibold text-foreground">From Substack:</p>
            <ol className="list-decimal pl-5 space-y-1.5 mt-2">
              <li>Export your subscriber list from Substack Settings &gt; Exports. You get a CSV with email, subscription date, and paid status.</li>
              <li>Import into beehiiv via their CSV import tool. beehiiv maps the fields automatically.</li>
              <li>Set up a redirect from your Substack URL to your new beehiiv publication (Substack doesn&apos;t support 301 redirects, so you&apos;ll need to publish a final post with your new link).</li>
              <li>If you had paid subscribers, use Stripe to transfer them. beehiiv has a Stripe integration that connects to your existing Stripe account.</li>
            </ol>
            <p className="font-semibold text-foreground mt-4">From Mailchimp:</p>
            <ol className="list-decimal pl-5 space-y-1.5 mt-2">
              <li>Export your audience from Mailchimp&apos;s Audience &gt; All Contacts &gt; Export. This gives you a CSV with tags and engagement data.</li>
              <li>Clean the list first. Remove contacts who haven&apos;t opened an email in 6+ months. Mailchimp charges you for dead weight; beehiiv doesn&apos;t, but importing unengaged contacts tanks your deliverability.</li>
              <li>Import into beehiiv. Recreate any tags you care about. Most Mailchimp tags are bloated anyway &mdash; migrate only the ones that drive actual segmentation decisions.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Follow This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">E-commerce businesses</strong> &mdash; you need Klaviyo or Mailchimp with product catalog integrations. Newsletter tools don&apos;t have purchase event triggers.</li>
              <li><strong className="text-foreground">Enterprise marketing teams</strong> &mdash; you need HubSpot or Marketo for lead scoring, attribution, and CRM integration. This stack is for solo operators.</li>
              <li><strong className="text-foreground">People who already have 50,000+ subscribers</strong> &mdash; at that scale, you should be evaluating custom infrastructure or enterprise newsletter plans. The economics change.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Buying paid plans before you have 1,000 subscribers.</strong> You don&apos;t need automation sequences when you have 200 readers. Write good content first.</li>
              <li><strong className="text-foreground">Using Zapier for everything.</strong> Before connecting a zap, check if the two tools have a native integration. beehiiv integrates directly with Notion, ConvertKit, and most analytics tools. Native integrations are faster and don&apos;t count against your Zapier task limit.</li>
              <li><strong className="text-foreground">Overthinking your landing page.</strong> beehiiv&apos;s built-in subscribe page converts fine. You don&apos;t need Carrd, Webflow, or a custom site until you&apos;re doing 10,000+ visits/month.</li>
              <li><strong className="text-foreground">Ignoring deliverability from day one.</strong> Set up your custom domain, authenticate SPF/DKIM records, and send a welcome email. These three things matter more than any tool choice.</li>
              <li><strong className="text-foreground">Paying for ConvertKit before using beehiiv&apos;s automations.</strong> beehiiv Scale ($39/mo) includes automation workflows. Try them first. Many creators never need ConvertKit at all.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              Start at $0. Upgrade only when you hit a specific limit &mdash; not when a tool
              feels inadequate. The jump from free to $80/month should happen around 2,500
              subscribers. The jump to $150/month should happen when newsletter revenue
              consistently exceeds $1,000/month. Every dollar you don&apos;t spend on tools is
              a dollar you can spend on content, promotion, or just keeping the lights on
              while you build.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best free newsletter platform for beginners?</h3>
                <p>beehiiv&apos;s Launch plan is the best free option for most creators. It supports up to 2,500 subscribers with unlimited sends, built-in analytics, and a hosted publication page. Kit (ConvertKit) also offers a generous free tier for up to 10,000 subscribers but limits automation features.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from a free newsletter tool to a paid plan?</h3>
                <p>Upgrade when you hit a concrete limit that blocks growth &mdash; not when a tool feels basic. Common triggers: exceeding subscriber limits, needing automation workflows, or wanting referral programs. For most creators, that happens around 2,500 subscribers or when revenue exceeds $500/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Substack worth it compared to beehiiv or ConvertKit?</h3>
                <p>Substack is worth it only if you have zero audience and want built-in network discovery. However, Substack takes 10% of paid subscription revenue, offers limited design control, and has no automation features. Once you have traction, beehiiv or Kit will save you money and give you more tools.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much should a solo newsletter creator spend on tools per month?</h3>
                <p>Most solo creators can run a complete newsletter stack for $0 until 2,500 subscribers. At scale (5,000&ndash;50,000 subscribers), expect $80&ndash;$150/month covering your email platform, basic automation, and analytics. Anything over $150/month as a solo operator is likely overspending.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["beehiiv", "convertkit", "mailchimp"]}
            comparisons={["beehiiv-vs-convertkit", "beehiiv-vs-substack"]}
            guides={["best-email-tool-creators", "migrate-substack-to-beehiiv"]}
          />
        </div>
      </div>
    </>
  );
}
