import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use ActiveCampaign (And What to Use Instead)",
  description:
    "ActiveCampaign is the most powerful email automation platform — but it's overkill for most people. Here are 4 situations where ActiveCampaign is the wrong choice, with specific alternatives.",
};

export default function WhoShouldNotUseActiveCampaign() {
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
              Who Should NOT Use ActiveCampaign
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">11 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use ActiveCampaign (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            ActiveCampaign has one of the most powerful automation builders in email marketing. It also has no free tier, a steep learning curve, and pricing that climbs fast as your contacts grow. Here are the situations where it&apos;s the wrong choice.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              ActiveCampaign is built for small to mid-size businesses that need sophisticated email automation with CRM integration. Starter starts at $15/month for 1,000 contacts. If you just need a newsletter tool, have under 1,000 contacts, or don&apos;t need advanced automation, you&apos;re paying for power you won&apos;t use.
            </p>
          </div>

          {/* ── Case 1: Just Need a Newsletter ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. You Just Need to Send a Newsletter</h2>
          <p className="text-muted mb-4">
            ActiveCampaign&apos;s Starter plan is $15/month for 1,000 contacts. It includes email marketing and basic automations. But if your use case is &ldquo;write a weekly newsletter and send it to my list,&rdquo; you&apos;re paying for an automation engine, CRM features, and site tracking you&apos;ll never touch.
          </p>
          <p className="text-muted mb-4">
            Kit (ConvertKit) has a free Newsletter plan for up to 10,000 subscribers with unlimited sends. beehiiv&apos;s Launch plan is free for 2,500 subscribers with unlimited sends. Both are purpose-built for newsletter creators with cleaner interfaces for writing and publishing.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Kit (ConvertKit)</strong> &mdash; Free Newsletter plan for 10,000 subscribers. Creator plan from $39/month (1,000 subscribers) adds automations and integrations. Built for creators who write, not marketers who automate. <Link href="/tools/convertkit" className="text-accent hover:underline">See Kit review</Link></li>
              <li><strong className="text-foreground">beehiiv</strong> &mdash; Free Launch plan for 2,500 subscribers, unlimited sends. Scale plan at $49/month for unlimited subscribers with ad network, referral program, and monetization tools. <Link href="/tools/beehiiv" className="text-accent hover:underline">See beehiiv review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">1,000 Contacts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">10,000 Contacts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Newsletter Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Starter</td>
                  <td className="px-4 py-2.5">$15/mo</td>
                  <td className="px-4 py-2.5">~$79/mo</td>
                  <td className="px-4 py-2.5">No (automation-focused)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit Newsletter (Free)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">beehiiv Launch (Free)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$49/mo (Scale)</td>
                  <td className="px-4 py-2.5">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Under 1,000 Contacts ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. You Have Under 1,000 Contacts</h2>
          <p className="text-muted mb-4">
            ActiveCampaign has no free tier. The Starter plan begins at $15/month for 1,000 contacts, and the Plus plan (which unlocks the CRM, landing pages, and lead scoring) is $49/month. If you have 200 contacts, you&apos;re paying for capacity you won&apos;t use for months or years.
          </p>
          <p className="text-muted mb-4">
            At that stage, Brevo&apos;s free tier gives you up to 100,000 contacts and 300 emails per day. Kit&apos;s free plan supports 10,000 subscribers. Both let you grow for free while you build your audience. By the time you hit the limits where ActiveCampaign&apos;s automation power matters, you&apos;ll know whether you actually need it.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Brevo Free</strong> &mdash; $0 for up to 100,000 contacts and 300 emails/day. Starter at $9/month for 5,000 emails/month removes the daily limit. Standard at $18/month adds marketing automation and A/B testing. <Link href="/tools/brevo" className="text-accent hover:underline">See Brevo review</Link></li>
              <li><strong className="text-foreground">Kit Newsletter (Free)</strong> &mdash; $0 for 10,000 subscribers with unlimited sends. No advanced automations, but perfect for growing a list from scratch. <Link href="/tools/convertkit" className="text-accent hover:underline">See Kit review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: Don't Need CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. You Don&apos;t Need CRM or Sales Features</h2>
          <p className="text-muted mb-4">
            ActiveCampaign&apos;s Plus plan at $49/month bundles email marketing with a CRM, pipeline management, landing pages, and lead scoring. If you already have a CRM (Pipedrive, HubSpot, or even a spreadsheet) and just want to send marketing emails with automation, half of what you&apos;re paying for is wasted.
          </p>
          <p className="text-muted mb-4">
            Brevo Standard at $18/month gives you marketing automation, A/B testing, and advanced stats for 5,000 emails/month with unlimited contacts. That&apos;s the email automation piece without the CRM piece &mdash; at 63% less cost than ActiveCampaign Plus.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Brevo Standard</strong> &mdash; $18/month for 5,000 emails/month, unlimited contacts, marketing automation, A/B testing, and advanced stats. Pairs well with any external CRM. <Link href="/tools/brevo" className="text-accent hover:underline">See Brevo review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Complexity Averse ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Your Team Finds Automation Builders Intimidating</h2>
          <p className="text-muted mb-4">
            ActiveCampaign&apos;s automation builder is genuinely one of the most powerful in the market. It&apos;s also complex. Conditional splits, wait conditions, goal nodes, site tracking triggers, lead scoring rules &mdash; it takes time to learn. ActiveCampaign scores a 5 out of 10 on ease of use in our testing. If your team doesn&apos;t have someone who enjoys building workflows, the automation builder will sit unused.
          </p>
          <p className="text-muted mb-4">
            Kit&apos;s visual automation builder is simpler and more intuitive. It has fewer features but covers 80% of what most creators and small businesses need: welcome sequences, tag-based triggers, and time-delay sequences. You give up conditional logic depth but gain something more important: a tool your team will actually use.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Kit Creator</strong> &mdash; $39/month for 1,000 subscribers. Visual automation builder, integrations, live chat support. Simpler than ActiveCampaign but covers the automations most businesses need. <Link href="/tools/convertkit" className="text-accent hover:underline">See Kit review</Link></li>
            </ul>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When ActiveCampaign IS the Right Choice</h2>
          <p className="text-muted mb-4">
            ActiveCampaign is the right choice for <strong className="text-foreground">small to mid-size businesses (2,000&ndash;50,000 contacts) that need sophisticated email automation with CRM integration and have someone on the team who enjoys building complex workflows.</strong>
          </p>
          <p className="text-muted mb-4">
            The Plus plan at $49/month for 1,000 contacts gives you an automation builder that rivals HubSpot Professional ($890/month), plus a built-in CRM with pipeline management. For e-commerce brands running lifecycle campaigns with conditional splits, abandoned cart sequences, and predictive sending, ActiveCampaign&apos;s Pro plan at $79/month delivers enterprise-level automation at a fraction of the cost.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does ActiveCampaign have a free tier?</h3>
                <p className="text-muted">No. ActiveCampaign has no free plan. The cheapest option is Starter at $15/month for 1,000 contacts. There is a 14-day free trial.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does ActiveCampaign cost at 10,000 contacts?</h3>
                <p className="text-muted">Pricing scales with contacts. At 10,000 contacts, expect to pay roughly $79&ndash;$145/month depending on the plan tier. Check their pricing page for exact numbers at your contact count &mdash; it changes frequently.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is ActiveCampaign better than Mailchimp?</h3>
                <p className="text-muted">For automation, yes &mdash; significantly. ActiveCampaign&apos;s automation builder is more powerful, more flexible, and easier to scale. But if you just need basic email campaigns without sophisticated automation, Mailchimp or Brevo will cost less and be simpler to use.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I migrate from ActiveCampaign to another tool?</h3>
                <p className="text-muted">Contact lists export easily via CSV. Automations, tags, and lead scoring rules do not transfer. The more complex your automation trees, the harder migration becomes. Budget 2&ndash;4 weeks to rebuild automations in a new tool.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["activecampaign", "convertkit", "beehiiv", "brevo", "mailchimp"]}
          comparisons={["activecampaign-vs-mailchimp", "activecampaign-vs-brevo"]}
          guides={["how-to-choose-email-platform", "best-email-tool-creators", "switch-from-mailchimp-to-activecampaign"]}
        />
      </article>
    </>
  );
}
