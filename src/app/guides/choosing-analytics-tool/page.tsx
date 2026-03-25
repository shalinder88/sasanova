import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "How to Choose an Analytics Tool Without Drowning in Data",
  description:
    "PostHog vs Mixpanel vs Amplitude vs Plausible vs Hotjar. When you need product analytics vs web analytics vs session recording, and the truth about free tiers.",
};

export default function ChoosingAnalyticsToolGuide() {
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
            <span className="text-foreground font-medium truncate">Choosing Analytics</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Analytics
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          How to Choose an Analytics Tool Without Drowning in Data
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 13 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            The analytics tool market has a dirty secret: most companies install the wrong category
            of tool, then blame the tool when they can&apos;t find insights. A content site installing
            Mixpanel is like buying a race car to drive to the grocery store. A SaaS product running
            only Google Analytics is like diagnosing a patient with a thermometer and nothing else.
          </p>
          <p>
            There are three distinct categories of analytics, and you probably only need one or two
            of them right now. This guide will help you figure out which category you need, then pick
            the right tool within it.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Three Categories You Need to Understand</h2>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-4">
              <div>
                <p className="text-foreground font-semibold">1. Web Analytics (traffic-focused)</p>
                <p className="mt-1">How many visitors, where they come from, which pages they view, bounce rates. Best for: content sites, landing pages, marketing teams.</p>
                <p className="mt-1"><strong className="text-foreground">Tools:</strong> Plausible, Fathom, Google Analytics 4, Simple Analytics</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">2. Product Analytics (behavior-focused)</p>
                <p className="mt-1">What users do inside your product, feature adoption, funnels, retention curves, cohort analysis. Best for: SaaS, apps, anything with logged-in users.</p>
                <p className="mt-1"><strong className="text-foreground">Tools:</strong> PostHog, Mixpanel, Amplitude, Heap</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">3. Session Recording &amp; Heatmaps (visual-focused)</p>
                <p className="mt-1">Watch actual user sessions, see click heatmaps, identify UX friction. Best for: conversion optimization, form debugging, redesign projects.</p>
                <p className="mt-1"><strong className="text-foreground">Tools:</strong> Hotjar, FullStory, Microsoft Clarity (free), PostHog</p>
              </div>
            </div>
            <p className="mt-4">
              <strong className="text-foreground">The non-obvious insight:</strong> most startups need web
              analytics AND product analytics but install only one. Content businesses usually only
              need web analytics. And session recordings are a project tool, not an always-on tool &mdash;
              you turn them on when investigating a specific problem, not as a default.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Comparison: Five Tools, Head to Head</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">PostHog</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mixpanel</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Amplitude</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plausible</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Hotjar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Category</td>
                    <td className="px-4 py-2.5">Product + Session</td>
                    <td className="px-4 py-2.5">Product</td>
                    <td className="px-4 py-2.5">Product</td>
                    <td className="px-4 py-2.5">Web</td>
                    <td className="px-4 py-2.5">Session + Heatmaps</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Free tier</td>
                    <td className="px-4 py-2.5">1M events/mo</td>
                    <td className="px-4 py-2.5">20M events/mo</td>
                    <td className="px-4 py-2.5">50K MTUs</td>
                    <td className="px-4 py-2.5">None</td>
                    <td className="px-4 py-2.5">35 daily sessions</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Paid starts at</td>
                    <td className="px-4 py-2.5">Usage-based (~$0)</td>
                    <td className="px-4 py-2.5">$28/mo (Growth)</td>
                    <td className="px-4 py-2.5">Custom pricing</td>
                    <td className="px-4 py-2.5">$9/mo</td>
                    <td className="px-4 py-2.5">$32/mo (Plus)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Session recording</td>
                    <td className="px-4 py-2.5">Yes (5K free/mo)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (add-on)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (core feature)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Feature flags</td>
                    <td className="px-4 py-2.5">Yes (1M free/mo)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (Experiment)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">A/B testing</td>
                    <td className="px-4 py-2.5">Yes (built-in)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (Experiment)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Self-host option</td>
                    <td className="px-4 py-2.5">Yes (open source)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (open source)</td>
                    <td className="px-4 py-2.5">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Cookie-free tracking</td>
                    <td className="px-4 py-2.5">Optional</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (default)</td>
                    <td className="px-4 py-2.5">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">GDPR compliance ease</td>
                    <td className="px-4 py-2.5">Good (EU hosting)</td>
                    <td className="px-4 py-2.5">Complex</td>
                    <td className="px-4 py-2.5">Complex</td>
                    <td className="px-4 py-2.5">Excellent (no cookies)</td>
                    <td className="px-4 py-2.5">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Free Tier Reality Check</h2>
            <p>
              Free tiers in analytics are the most misleading in all of SaaS. Here&apos;s what actually
              happens when you outgrow them.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-4">
              <div>
                <p className="text-foreground font-semibold">PostHog: Genuinely generous, then pay-as-you-go</p>
                <p className="mt-1">1 million events/month free. After that, $0.00031 per event. A product with 50K monthly active users generating 20 events each = 1M events. You stay free until real traction. The pricing cliff barely exists &mdash; it scales linearly. This is the best free tier in product analytics, full stop.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Mixpanel: Looks generous, hides the gotcha</p>
                <p className="mt-1">20 million events/month sounds incredible. But the free plan caps at 5 saved reports and has no group analytics. The moment you need to track company-level metrics (not just users), you&apos;re on Growth at $28/month. And Mixpanel&apos;s Growth plan pricing jumps hard at 100M events: contact sales, minimum $833/month.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Amplitude: MTU-based pricing is a trap</p>
                <p className="mt-1">50K Monthly Tracked Users sounds fine. But Amplitude counts any user who triggers any event. A marketing page visitor who fires a pageview counts as 1 MTU. If your website and product share the same Amplitude project, your free tier evaporates fast. Growth pricing starts around $49/month and isn&apos;t listed publicly &mdash; they want you on a sales call.</p>
              </div>
              <div>
                <p className="text-foreground font-semibold">Hotjar: Free tier is a tease</p>
                <p className="mt-1">35 daily sessions on the free plan. That&apos;s roughly 1,000 recordings per month. For a site with 10K visitors, you&apos;re recording 10% of sessions. The Plus plan at $32/month gets you 100 daily sessions. Business at $80/month gets 500. It adds up fast if you want meaningful sample sizes.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">PostHog Wins for Most Startups. Here&apos;s Why.</h2>
            <p>
              If you&apos;re building a software product and can only pick one analytics tool, pick PostHog.
              Not because it&apos;s the best at any single thing, but because it&apos;s the only tool that
              covers product analytics, session recording, feature flags, and A/B testing in one platform.
            </p>
            <p>
              The math is simple: PostHog free tier replaces Mixpanel free ($0) + Hotjar free ($0) +
              LaunchDarkly Starter ($10/month) + Google Optimize (discontinued). One snippet, one dashboard,
              one data model. You stop wasting time stitching data across three tools to answer one question.
            </p>
            <p>
              The contrarian angle: PostHog is not the best product analytics tool. Mixpanel&apos;s query
              builder is more polished. Amplitude&apos;s behavioral cohorts are more powerful. But PostHog
              is 80% as good at each thing while being the only one that does all of them. For a team
              under 20 people, the breadth matters more than the depth.
            </p>
            <p>
              <strong className="text-foreground">The catch:</strong> PostHog&apos;s learning curve is steeper
              than Mixpanel. The UI is functional, not elegant. Documentation is extensive but assumes
              technical comfort. If your analytics person is a marketer who lives in spreadsheets,
              Mixpanel will be a friendlier experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">When Each Tool Is the Right Choice</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">PostHog:</strong> You&apos;re a startup with a software product, engineering-led team, want everything in one tool, and value open source. You&apos;ll self-serve and won&apos;t need hand-holding.</li>
              <li><strong className="text-foreground">Mixpanel:</strong> You have a dedicated product/growth analyst, need advanced funnel analysis, and your team is non-technical enough to need a polished UI. You&apos;re willing to pair it with a separate session recording tool.</li>
              <li><strong className="text-foreground">Amplitude:</strong> You&apos;re a mid-stage startup (Series B+) with complex product analytics needs, multiple product lines, and budget for enterprise pricing. Amplitude&apos;s behavioral cohorts and predictive analytics justify the cost at scale.</li>
              <li><strong className="text-foreground">Plausible:</strong> You run a content site, blog, or marketing pages. You want clean traffic data without cookie banners. You don&apos;t need product analytics. $9/month and done.</li>
              <li><strong className="text-foreground">Hotjar:</strong> You&apos;re doing a UX audit, redesigning a checkout flow, or debugging why a specific page has a 90% bounce rate. Use it as a project tool, not an always-on analytics platform. Microsoft Clarity is free and covers 80% of what Hotjar does &mdash; start there.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Smart Combo: Two Tools That Cover Everything</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Business Type</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool 1</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool 2</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">SaaS startup (early)</td>
                    <td className="px-4 py-2.5">PostHog (free tier)</td>
                    <td className="px-4 py-2.5">Plausible ($9/mo)</td>
                    <td className="px-4 py-2.5">$9/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">SaaS startup (growth)</td>
                    <td className="px-4 py-2.5">PostHog (paid)</td>
                    <td className="px-4 py-2.5">Plausible ($9/mo)</td>
                    <td className="px-4 py-2.5">$30&ndash;100/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Content/media site</td>
                    <td className="px-4 py-2.5">Plausible ($9/mo)</td>
                    <td className="px-4 py-2.5">Microsoft Clarity (free)</td>
                    <td className="px-4 py-2.5">$9/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">E-commerce</td>
                    <td className="px-4 py-2.5">Mixpanel (free tier)</td>
                    <td className="px-4 py-2.5">Hotjar ($32/mo)</td>
                    <td className="px-4 py-2.5">$32/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Follow This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Enterprise companies with data teams.</strong> You need a data warehouse (BigQuery, Snowflake), a BI tool (Looker, Metabase), and event tracking piped through Segment or RudderStack. Tool-level analytics won&apos;t cut it.</li>
              <li><strong className="text-foreground">Mobile-first apps.</strong> If your product is primarily iOS/Android, evaluate Firebase Analytics (free, deep mobile integration) and Amplitude (strong mobile SDKs) before PostHog, which is web-first.</li>
              <li><strong className="text-foreground">Heavily regulated industries.</strong> Healthcare (HIPAA), finance (SOC 2), and government have compliance requirements that limit your options to specific vendors. Check compliance docs before feature docs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Installing a product analytics tool on a content site.</strong> If you don&apos;t have logged-in users, you don&apos;t need Mixpanel. Plausible or Fathom gives you everything relevant for a fraction of the complexity.</li>
              <li><strong className="text-foreground">Tracking everything from day one.</strong> Start with 5&ndash;10 key events, not 200. More events = more noise = more confusion. You can always add events later. You can&apos;t un-overwhelm your team.</li>
              <li><strong className="text-foreground">Confusing pageviews with events.</strong> Plausible charges by pageviews. PostHog and Mixpanel charge by events. A single page load can fire 10+ events (page view, scroll, click, form focus...). Compare your projected event volume, not your pageview count, when estimating costs.</li>
              <li><strong className="text-foreground">Assuming free means free forever.</strong> Amplitude&apos;s free tier counts MTUs, not events. One viral blog post can burn through your monthly limit in a day. Set up billing alerts before you get a surprise invoice.</li>
              <li><strong className="text-foreground">Running Hotjar permanently.</strong> Session recordings are for investigations, not monitoring. Recording every session on every page slows your site and generates thousands of hours of footage nobody watches. Record targeted pages during specific research sprints.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              Pick the category first, then the tool. If you&apos;re building software: PostHog free tier
              covers you until you&apos;re well past product-market fit. If you&apos;re running a content
              business: Plausible at $9/month plus Microsoft Clarity (free) gives you everything. If
              you&apos;re optimizing conversion: Hotjar or Clarity for a targeted sprint, not as a
              permanent install.
            </p>
            <p>
              The biggest waste isn&apos;t picking the wrong tool. It&apos;s installing the right tool
              and never looking at the data. Set a weekly 15-minute analytics review. If you won&apos;t
              do that, the cheapest option is the best option &mdash; because expensive data you ignore
              is just a more expensive way to ignore data.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the difference between web analytics and product analytics?</h3>
                <p>Web analytics (Plausible, GA4) tracks traffic: visitors, page views, sources, bounce rates. Product analytics (PostHog, Mixpanel) tracks behavior: what logged-in users do inside your app, feature adoption, funnels, and retention. Content sites need web analytics. Software products need product analytics. Most startups need both.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is PostHog really free?</h3>
                <p>PostHog&apos;s free tier includes 1 million events/month, 5,000 session recordings, 1 million feature flag evaluations, and 250 survey responses. After that, pricing is usage-based starting at fractions of a cent per event. Most early-stage startups stay within the free tier for months.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use Google Analytics 4 or Plausible?</h3>
                <p>GA4 is free and powerful but complex to configure and requires cookie consent banners in the EU. Plausible costs $9/month, requires no cookies, and shows you one clean dashboard. If you need advanced attribution modeling or e-commerce tracking, use GA4. For everything else, Plausible saves hours of setup time.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do I need session recording software?</h3>
                <p>Only for specific projects: debugging a checkout drop-off, testing a redesigned page, or running a UX audit. Start with Microsoft Clarity (completely free, unlimited recordings) before paying for Hotjar. Don&apos;t run session recordings permanently on every page &mdash; it slows your site and creates unwatchable amounts of footage.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["posthog", "mixpanel", "amplitude", "plausible", "hotjar"]}
            comparisons={["posthog-vs-mixpanel", "mixpanel-vs-amplitude", "posthog-vs-amplitude", "hotjar-vs-posthog"]}
            guides={[
              "best-tools-saas-startup",
              "seo-tools-for-small-sites",
            ]}
          />
        </div>
      </div>
    </>
  );
}
