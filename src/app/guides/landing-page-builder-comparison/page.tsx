import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Landing Page Builders: When to Pay $99/Month and When $0 Works",
  description:
    "Unbounce vs Instapage vs Leadpages vs Carrd compared with real pricing, conversion rate data, and cost-per-landing-page math. Find out when free is enough.",
};

export default function LandingPageBuilderGuide() {
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
            <span className="text-foreground font-medium truncate">Landing Page Builders</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Conversion
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Landing Page Builders: When to Pay $99/Month and When $0 Works
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 12 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Landing page builders are one of the most oversold categories in marketing software.
            Unbounce charges $99/month for their Build plan. Instapage starts at $199/month. Meanwhile,
            Carrd costs $19/year &mdash; not per month, per year &mdash; and a well-built Carrd page
            converts just as well as an Unbounce page for most use cases.
          </p>
          <p>
            The difference isn&apos;t design quality. It&apos;s testing infrastructure, traffic volume,
            and how many pages you need. Here&apos;s how to figure out which category you fall into
            before you commit to a $1,200/year tool.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Real Pricing Breakdown</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pages Included</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Feature</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Carrd</td>
                    <td className="px-4 py-2.5">Pro Plus</td>
                    <td className="px-4 py-2.5">$1.58/mo ($19/yr)</td>
                    <td className="px-4 py-2.5">25 sites</td>
                    <td className="px-4 py-2.5">Custom domains, forms, embeds</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Leadpages</td>
                    <td className="px-4 py-2.5">Standard</td>
                    <td className="px-4 py-2.5">$49/mo (annual)</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Templates, pop-ups, alert bars</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Leadpages</td>
                    <td className="px-4 py-2.5">Pro</td>
                    <td className="px-4 py-2.5">$99/mo (annual)</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">A/B testing, online payments</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Unbounce</td>
                    <td className="px-4 py-2.5">Build</td>
                    <td className="px-4 py-2.5">$99/mo (annual)</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Smart Traffic AI, A/B testing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Unbounce</td>
                    <td className="px-4 py-2.5">Experiment</td>
                    <td className="px-4 py-2.5">$149/mo (annual)</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Advanced A/B, Smart Traffic</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Instapage</td>
                    <td className="px-4 py-2.5">Build</td>
                    <td className="px-4 py-2.5">$199/mo (annual)</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">Heatmaps, 1:1 ad-to-page, server-side A/B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Cost Per Landing Page: The Math Nobody Does</h2>
            <p>
              The real question isn&apos;t &ldquo;how much does the tool cost?&rdquo; It&apos;s
              &ldquo;how much am I paying per active landing page?&rdquo;
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Active Pages</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Carrd ($19/yr)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Leadpages ($49/mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Unbounce ($99/mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Instapage ($199/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">1 page</td>
                    <td className="px-4 py-2.5">$1.58/mo</td>
                    <td className="px-4 py-2.5">$49/mo</td>
                    <td className="px-4 py-2.5">$99/mo</td>
                    <td className="px-4 py-2.5">$199/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">5 pages</td>
                    <td className="px-4 py-2.5">$0.32/mo</td>
                    <td className="px-4 py-2.5">$9.80/mo</td>
                    <td className="px-4 py-2.5">$19.80/mo</td>
                    <td className="px-4 py-2.5">$39.80/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">20 pages</td>
                    <td className="px-4 py-2.5">$0.08/mo</td>
                    <td className="px-4 py-2.5">$2.45/mo</td>
                    <td className="px-4 py-2.5">$4.95/mo</td>
                    <td className="px-4 py-2.5">$9.95/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              If you&apos;re running 1-3 landing pages, the premium tools cost $30-$200 per page
              per month. That only makes sense if each page generates enough revenue to justify
              the tool cost. A landing page getting 500 visitors/month with a 3% conversion rate
              produces 15 leads. If those leads are worth $50 each, the page generates $750/month
              &mdash; and Unbounce&apos;s A/B testing might squeeze out an extra 0.5%, adding 2-3
              more leads ($100-150). That pays for the tool. If your leads are worth $5 each, it doesn&apos;t.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Conversion Rate Claims vs. Reality</h2>
            <p>
              Every landing page builder claims their templates convert at 10-30%. Let&apos;s be
              direct: those numbers come from cherry-picked case studies and include pages with
              extremely targeted traffic from retargeting ads.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-2">
              <p className="text-foreground font-semibold">Realistic Conversion Rates by Traffic Source</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Organic search traffic:</strong> 2-5% conversion rate on a good page</li>
                <li><strong className="text-foreground">Paid search (Google Ads):</strong> 3-8% with proper message match</li>
                <li><strong className="text-foreground">Social media ads:</strong> 1-4% for cold audiences, 5-12% for retargeting</li>
                <li><strong className="text-foreground">Email list traffic:</strong> 10-25% (warm audience, already opted in)</li>
              </ul>
            </div>
            <p className="mt-3">
              The builder you use accounts for maybe 0.5-1% of variance. The traffic source,
              offer quality, and headline account for the other 95%. A well-written Carrd page
              with a strong offer will outperform a poorly written Unbounce page with Smart
              Traffic every time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Platform-by-Platform Verdict</h2>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Carrd: For 80% of People Reading This</h3>
            <p>
              Carrd Pro Plus at $19/year gives you 25 sites with custom domains, forms, Google
              Analytics, and payment widgets (Stripe, PayPal). The editor is simple &mdash; no
              drag-and-drop builder, just sections you customize. That simplicity is a feature,
              not a limitation. You can build a clean landing page in 30 minutes.
            </p>
            <p className="mt-2">
              Carrd does not have A/B testing, pop-ups, or analytics beyond what you get from
              Google Analytics. If you need those features, upgrade. If you don&apos;t &mdash;
              and most people don&apos;t &mdash; Carrd saves you $1,000+/year.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Leadpages: For Small Businesses Running Multiple Campaigns</h3>
            <p>
              Leadpages Standard ($49/month) is the right step up from Carrd when you need
              unlimited pages, pop-ups, alert bars, and better template variety. The template
              library is the largest of any landing page builder &mdash; 200+ templates organized
              by industry and conversion goal.
            </p>
            <p className="mt-2">
              Skip Standard and go to Pro ($99/month) only if you need A/B testing. Standard
              doesn&apos;t include it, and A/B testing only matters if you have enough traffic
              to reach statistical significance. You need roughly 1,000 visitors per variant
              per test. If you&apos;re getting under 2,000 visitors/month to a page, A/B
              testing is theater.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Unbounce: For Marketing Teams Spending $5K+/Month on Ads</h3>
            <p>
              Unbounce Build ($99/month) makes sense when you&apos;re running paid campaigns
              with enough volume to benefit from Smart Traffic &mdash; their AI that routes
              visitors to the variant most likely to convert them based on attributes like
              device, location, and referral source. Smart Traffic needs about 50 conversions
              per page to start working. Below that, it&apos;s just A/B testing with extra steps.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Instapage: For Enterprise PPC Teams</h3>
            <p>
              Instapage at $199/month is built for teams managing dozens of ad campaigns that each
              need a dedicated landing page with 1:1 ad-to-page message match. The server-side A/B
              testing, heatmaps, and collaboration features are designed for agencies and in-house
              PPC teams spending $20K+/month on ads. If that&apos;s not you, this tool is not for you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Buy a Landing Page Builder</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Anyone getting under 1,000 visitors/month to their landing pages.</strong> At low traffic, no amount of optimization moves the needle. Focus on traffic first, conversion optimization second.</li>
              <li><strong className="text-foreground">Teams with developers on staff.</strong> A developer can build a landing page in your existing framework (Next.js, WordPress, Webflow) that loads faster and costs nothing extra per month. Landing page builders exist to remove the developer dependency, not to be technically superior.</li>
              <li><strong className="text-foreground">People running one campaign at a time.</strong> If you only need one landing page, Carrd at $19/year or even a free Notion page with Super.so handles it. Paying $49-199/month for a single page is wasteful.</li>
              <li><strong className="text-foreground">Businesses without a follow-up system.</strong> A high-converting landing page that dumps leads into a spreadsheet nobody checks is $99/month for nothing. Set up your CRM and email sequences before optimizing your landing page.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">A/B testing with insufficient traffic.</strong> You need roughly 1,000 visitors per variant to reach statistical significance for a meaningful conversion lift. Testing with 200 visitors and declaring a winner is noise, not data.</li>
              <li><strong className="text-foreground">Choosing based on template design.</strong> Templates are starting points. Every platform lets you customize. Pick based on features (A/B testing, integrations, pop-ups), not template aesthetics.</li>
              <li><strong className="text-foreground">Ignoring page speed.</strong> Landing page builders add JavaScript overhead. A Carrd page loads in under 1 second. An Unbounce page with dynamic text replacement, pop-ups, and tracking scripts can take 3-4 seconds. Every additional second of load time costs you 7% of conversions.</li>
              <li><strong className="text-foreground">Building landing pages before validating the offer.</strong> The highest-converting landing page in the world won&apos;t save a bad offer. Test your offer with a basic page first. Invest in the builder once you know people want what you&apos;re selling.</li>
              <li><strong className="text-foreground">Paying for unlimited pages and using three.</strong> Audit your active pages every quarter. If you&apos;re on Unbounce at $99/month running 3 pages, you&apos;re paying $33/page/month for something Carrd handles at $0.63/page/month.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Verdict</h2>
            <p>
              <strong className="text-foreground">Use Carrd ($19/year)</strong> if you need 1-10 landing
              pages and don&apos;t need A/B testing. This is the right answer for freelancers, solo
              founders, and small businesses running basic lead capture.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Use Leadpages Standard ($49/month)</strong> when you
              need pop-ups, alert bars, and a large template library across multiple campaigns.
              Upgrade to Pro ($99/month) only when you have enough traffic to A/B test properly.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Use Unbounce ($99/month)</strong> when you&apos;re spending
              $5K+/month on ads and need Smart Traffic&apos;s automatic optimization. Below that ad spend,
              the AI features don&apos;t have enough data to outperform manual A/B testing.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">Skip Instapage</strong> unless you&apos;re an agency or
              enterprise team managing 20+ ad campaigns simultaneously. At $199/month, it needs to be
              saving you significant time on page creation and testing to justify the premium.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best free landing page builder?</h3>
                <p>Carrd&apos;s free tier lets you build a single one-page site with a carrd.co subdomain. For a custom domain and forms, Carrd Pro Plus at $19/year is effectively free compared to alternatives. Google Sites and Notion with Super.so are genuinely free but offer less design control.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do landing page builders actually improve conversion rates?</h3>
                <p>The builder itself contributes maybe 0.5-1% of conversion rate variance. What matters is the offer, headline, and traffic source. Premium builders help through A/B testing and optimization features, but only if you have enough traffic (1,000+ visitors per variant) to use those features meaningfully.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much traffic do I need for A/B testing to work?</h3>
                <p>Roughly 1,000 visitors per variant to detect a meaningful conversion rate difference (1-2 percentage points) with statistical confidence. For a two-variant test, that means 2,000 total visitors per test. At 500 visitors/month, a single test takes 4 months &mdash; by which point your offer and audience may have changed.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use Unbounce or Instapage for Google Ads?</h3>
                <p>Unbounce if you&apos;re spending $5K-$20K/month on ads and want AI-powered traffic routing. Instapage if you&apos;re spending $20K+ and need 1:1 ad-to-page personalization at scale with server-side testing. Below $5K/month in ad spend, neither tool will meaningfully outperform Leadpages or even Carrd.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["unbounce", "leadpages", "instapage", "carrd", "webflow"]}
            comparisons={["leadpages-vs-unbounce", "unbounce-vs-instapage", "webflow-vs-framer"]}
            guides={[
              "website-builder-for-business",
              "design-tools-non-designers",
              "automate-lead-capture",
            ]}
          />
        </div>
      </div>
    </>
  );
}
