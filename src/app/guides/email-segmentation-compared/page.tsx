import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Segmentation: What Each Platform Lets You Do at Each Tier",
  description:
    "Basic segments, behavioral segments, predictive segments, custom fields and tags across Mailchimp, Kit, beehiiv, ActiveCampaign, and Brevo. Exact prices for every segmentation feature.",
};

export default function EmailSegmentationCompared() {
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
              Email Segmentation Compared
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Email Marketing
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Segmentation: What Each Platform Lets You Do at Each Tier
          </h1>
          <p className="text-lg text-muted">
            Every email platform claims to offer segmentation. The reality is that basic tag-based segments are free everywhere, behavioral segments cost $15&ndash;$49/mo, and predictive segmentation is a premium feature costing $79/mo or more. This guide breaks down exactly what segmentation features you get at each price tier across Mailchimp, Kit, beehiiv, ActiveCampaign, and Brevo.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Segmentation Tiers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Three Levels of Segmentation</h2>
          <div className="space-y-4 mb-6">
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">1. Basic Segments (Available on Free Tiers)</h3>
              <p className="text-sm text-muted">Filter contacts by tag, custom field, location, or signup source. Every platform in this comparison offers basic segmentation on their free or lowest tier. This handles 80% of segmentation needs for lists under 10,000.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">2. Behavioral Segments ($15&ndash;$49/mo)</h3>
              <p className="text-sm text-muted">Filter by email engagement (opens, clicks), website activity (pages visited, products viewed), purchase history, and automation interactions. This is where segmentation becomes genuinely powerful for revenue growth.</p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5">
              <h3 className="text-sm font-bold text-foreground mb-2">3. Predictive Segments ($79/mo+)</h3>
              <p className="text-sm text-muted">AI-driven segments that predict purchase likelihood, churn risk, or optimal send time. Only ActiveCampaign Pro ($79/mo) and Mailchimp Premium ($350/mo) offer true predictive segmentation. Most businesses under 25,000 contacts don&apos;t need this.</p>
            </div>
          </div>

          {/* ── Platform Comparison Table ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Segmentation Features by Platform and Tier</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
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
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Tags/custom fields</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Launch ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($15/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Basic segments</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Launch ($0)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($15/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Free ($0)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Engagement-based segments</td>
                  <td className="px-4 py-2.5 text-green-400">Essentials ($13/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Creator ($39/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Scale ($49/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Starter ($15/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($18/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Behavioral (site tracking)</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($20/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-green-400">Plus ($49/mo)</td>
                  <td className="px-4 py-2.5 text-green-400">Standard ($18/mo)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Lead scoring</td>
                  <td className="px-4 py-2.5 text-yellow-400">Standard ($20/mo, basic)</td>
                  <td className="px-4 py-2.5 text-green-400">Creator Pro ($79/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-green-400">Plus ($49/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Predictive segments</td>
                  <td className="px-4 py-2.5 text-yellow-400">Premium ($350/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                  <td className="px-4 py-2.5 text-green-400">Pro ($79/mo)</td>
                  <td className="px-4 py-2.5 text-red-400">Not available</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Segment conditions limit</td>
                  <td className="px-4 py-2.5">5 (Free), unlimited (paid)</td>
                  <td className="px-4 py-2.5">Unlimited (all plans)</td>
                  <td className="px-4 py-2.5">Unlimited (paid)</td>
                  <td className="px-4 py-2.5">Unlimited (all plans)</td>
                  <td className="px-4 py-2.5">Unlimited (all plans)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Platform Breakdowns ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">ActiveCampaign: The Segmentation Leader</h2>
          <p className="text-muted mb-4">
            ActiveCampaign has the deepest segmentation capabilities in this comparison. Even the Starter plan ($15/mo for 1,000 contacts) includes tags, custom fields, and engagement-based segments. Plus ($49/mo) adds site tracking, lead scoring, and CRM-integrated segments. Pro ($79/mo) unlocks predictive sending and split automations based on predicted behavior.
          </p>
          <p className="text-muted mb-4">
            The gap between ActiveCampaign and everything else becomes significant at the behavioral level. Site tracking on Plus ($49/mo) lets you segment by pages visited, products viewed, and custom events &mdash; capabilities that Mailchimp charges $20/mo for (Standard) and Kit and beehiiv don&apos;t offer at all.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Mailchimp: Broad but Expensive at Scale</h2>
          <p className="text-muted mb-4">
            Mailchimp offers strong segmentation that improves with each tier. Free ($0, 250 contacts) gives you basic tag and field segments with a 5-condition limit. Essentials ($13/mo) adds engagement-based filtering. Standard ($20/mo) adds predicted demographics, purchase likelihood, and customer lifetime value segments.
          </p>
          <p className="text-muted mb-4">
            The issue: Mailchimp&apos;s contact-based pricing makes advanced segmentation expensive at scale. Standard is $20/mo at 500 contacts but jumps significantly as your list grows. Full predictive segmentation requires Premium ($350/mo).
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Kit: Simple Tags That Work</h2>
          <p className="text-muted mb-4">
            Kit&apos;s segmentation model is built entirely around tags and custom fields. The Newsletter plan ($0, 10,000 subscribers) includes basic tagging and segments. Creator ($39/mo) adds engagement-based filtering. Creator Pro ($79/mo) adds subscriber scoring.
          </p>
          <p className="text-muted mb-4">
            Kit doesn&apos;t offer site tracking or behavioral segmentation. Its approach is simpler: tag subscribers based on what they click, what they buy, and what forms they use. For most creator businesses, this is sufficient.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">beehiiv and Brevo: Good Basics</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">beehiiv</strong> offers audience segmentation on Launch ($0) with basic filters. Scale ($49/mo) adds engagement-based segments and advanced analytics. No lead scoring or site tracking &mdash; beehiiv is a newsletter platform, not a marketing automation tool.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Brevo</strong> provides surprisingly robust segmentation even on Free ($0). Contact attributes, engagement filters, and transactional behavior are available early. Standard ($18/mo) adds site tracking and marketing automation. The combination of unlimited contacts and decent segmentation makes Brevo a strong value play.
          </p>

          {/* ── The Opinionated Verdict ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Opinionated Verdict</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">If segmentation is your priority:</strong> ActiveCampaign. The depth of behavioral and predictive segmentation is unmatched. Plus at $49/mo gives you lead scoring and site tracking that competitors charge $350/mo for (Mailchimp Premium) or don&apos;t offer at all.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">If you just need tags and basic segments:</strong> Kit (free for 10K subscribers) or Brevo (free for unlimited contacts). Both provide tags and basic segment builders on free tiers.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">If you need behavioral segments on a budget:</strong> Brevo Standard at $18/mo includes site tracking and automation-triggered segments. That&apos;s less than half the price of ActiveCampaign Plus ($49/mo) for similar behavioral capabilities.
            </p>
          </div>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need behavioral segmentation?</h3>
                <p className="text-muted">If you sell products or services online and your list is over 5,000, behavioral segmentation (based on site visits, purchases, and engagement patterns) typically improves revenue per email by 20&ndash;40%. Below 5,000, basic tag-based segments work fine.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is predictive segmentation?</h3>
                <p className="text-muted">AI-driven grouping that predicts subscriber behavior (purchase likelihood, churn risk, optimal send time). ActiveCampaign Pro ($79/mo) and Mailchimp Premium ($350/mo) offer it. Most businesses under 25,000 contacts see better ROI from behavioral segments first.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which platform has the best free-tier segmentation?</h3>
                <p className="text-muted">Brevo Free allows unlimited contacts with basic segmentation. Kit Newsletter Free offers tags and basic segments for up to 10,000 subscribers. Mailchimp Free limits you to 250 contacts with a 5-condition segment limit.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is lead scoring worth paying for?</h3>
                <p className="text-muted">Lead scoring is valuable if you have a sales team following up on email leads. ActiveCampaign Plus ($49/mo) and Kit Creator Pro ($79/mo) offer it. If you&apos;re a solo creator or small newsletter, basic engagement segments serve the same purpose for free.</p>
              </div>
            </div>
          </section>

          {/* ── Related Guides ── */}
          <div className="border-t border-border mt-12 pt-8">
            <h2 className="text-lg font-bold mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/guides/email-template-design-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Template Builders</span>
                <span className="block text-xs text-muted mt-1">Which platforms have the best designer</span>
              </Link>
              <Link
                href="/guides/email-analytics-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Analytics Compared</span>
                <span className="block text-xs text-muted mt-1">What you actually see at each price tier</span>
              </Link>
              <Link
                href="/guides/email-automation-sequences-compared"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Automation Sequences</span>
                <span className="block text-xs text-muted mt-1">Which platform does it best</span>
              </Link>
              <Link
                href="/guides/email-marketing-annual-cost-2026"
                className="border border-border rounded-lg p-4 hover:border-accent/30 transition-colors block"
              >
                <span className="text-sm font-semibold text-foreground">Email Marketing Annual Costs</span>
                <span className="block text-xs text-muted mt-1">What you will actually pay in 2026</span>
              </Link>
            </div>
          </div>

          <RelatedLinks
            tools={["mailchimp", "activecampaign", "convertkit", "beehiiv", "brevo"]}
            comparisons={["mailchimp-vs-kit-detailed", "hubspot-vs-activecampaign-full-comparison"]}
            guides={[
              "email-template-design-compared",
              "email-analytics-compared",
              "email-automation-sequences-compared",
            ]}
          />
        </div>
      </article>
    </>
  );
}
