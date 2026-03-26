import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What Changed in Automation This Quarter (Q1 2026)",
  description:
    "Every significant automation tool change in Q1 2026: Bardeen jumped to $99/mo (was ~$10), Zapier Free still 100 tasks, Make stable at $10.59/mo. Exact pricing changes and what they mean.",
};

export default function AutomationChangesQ12026Page() {
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
              Automation Changes Q1 2026
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Competitive Intelligence
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What Changed in Automation This Quarter (Q1 2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            The automation market saw the most dramatic pricing shift of any SaaS category in
            Q1 2026. Bardeen&apos;s paid tier jumped to $99/month. Meanwhile, the Big Three
            (Zapier, Make, n8n) held prices steady. Here is what changed and what it means for
            your automation stack.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-accent font-semibold">Quarterly update</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Q1 2026 Automation Pricing Snapshot</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">First Paid</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Changed?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-muted">Zapier</td><td className="px-4 py-2.5 text-muted">100 tasks/mo, 2-step</td><td className="px-4 py-2.5 text-muted">Professional $29.99/mo (750 tasks)</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Make</td><td className="px-4 py-2.5 text-muted">1,000 ops/mo, 2 scenarios</td><td className="px-4 py-2.5 text-muted">Core $10.59/mo (10,000 ops)</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">n8n</td><td className="px-4 py-2.5 text-muted">Unlimited (self-hosted)</td><td className="px-4 py-2.5 text-muted">Starter $20/mo (2,500 executions)</td><td className="px-4 py-2.5 text-muted">No</td></tr>
                  <tr className="bg-yellow-50 dark:bg-yellow-900/10"><td className="px-4 py-2.5 font-semibold text-foreground">Bardeen</td><td className="px-4 py-2.5 text-muted">100 credits/mo</td><td className="px-4 py-2.5 font-semibold text-foreground">Starter $99/mo (15K credits/yr)</td><td className="px-4 py-2.5 font-semibold text-accent">Yes &mdash; major increase</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Bardeen: From Budget Tool to Enterprise Pricing</h2>
            <p className="text-muted leading-relaxed mb-4">
              Bardeen&apos;s pricing story is the most dramatic in Q1 2026. The Starter plan is
              now $99/month (15,000 credits/year). Teams is $500/month (120,000 credits/year).
              Enterprise is $1,500/month (500,000+ credits/year). The free tier remains at 100
              credits/month for basic automations.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">The context:</strong> At $99/month, Bardeen
              costs more than Zapier Professional ($29.99/month, 750 tasks) and Make Pro
              ($18.82/month, 10,000 ops) combined. Both Zapier and Make run without a browser,
              connect to more apps, and offer broader automation capabilities.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">When Bardeen still makes sense:</strong> Browser-native
              scraping (LinkedIn profiles, web research), Chrome-based form filling, and automations
              that require interacting with websites that have no API. These are things Zapier
              and Make cannot do. But for standard app-to-app automation, Bardeen at $99/month
              is significantly overpriced.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to do:</strong> If you are a Bardeen
              user for standard automations (Slack notifications, CRM updates, email sequences),
              migrate to Zapier Free or Make Core. Save the $99/month. If you specifically need
              browser scraping, evaluate whether the frequency justifies the cost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Zapier: Stable but Watch the Volume Trap</h2>
            <p className="text-muted leading-relaxed mb-4">
              Zapier&apos;s pricing has not changed in Q1 2026: Free (100 tasks/month), Professional
              ($29.99/month, 750 tasks), Team ($103.50/month, 2,000 tasks). But the task-counting
              model continues to catch teams off guard.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              The reminder: Zapier counts each step in a multi-step Zap as a separate task. A
              5-step Zap running once uses 5 tasks. On the Professional plan (750 tasks/month),
              a 5-step Zap can only run 150 times per month. That is about 5 times per day.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong className="text-foreground">What to watch:</strong> If you are approaching
              the 750-task limit on Professional, compare the cost of upgrading to Team
              ($103.50/month for 2,000 tasks) vs switching to Make Core ($10.59/month for 10,000
              operations). Make gives you roughly 13x the volume per dollar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Make: Still the Best Value in Automation</h2>
            <p className="text-muted leading-relaxed mb-4">
              Make pricing remains unchanged: Free (1,000 ops/month, 2 scenarios), Core
              ($10.59/month, 10,000 ops), Pro ($18.82/month, 10,000 ops + custom functions),
              Teams ($34.12/month, 10,000 ops + team features).
            </p>
            <p className="text-muted leading-relaxed mb-4">
              At $10.59/month for 10,000 operations with unlimited scenarios, Make Core
              remains the best value in automation. The gap between Make and Zapier has not changed
              &mdash; Make is 3x cheaper for comparable volume &mdash; but Make&apos;s steeper
              learning curve continues to keep non-technical users on Zapier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">n8n: The Self-Hosted Wild Card</h2>
            <p className="text-muted leading-relaxed mb-4">
              n8n pricing is stable: Community self-hosted (free, unlimited), Starter cloud
              ($20/month, 2,500 executions), Pro cloud ($50/month, 10,000 executions). The
              self-hosted option remains the only truly free unlimited automation platform.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              n8n&apos;s self-hosted community edition requires Docker and server management.
              The real cost is your time: plan for 2&ndash;4 hours of initial setup and 1&ndash;2
              hours/month of maintenance. If your time is worth $50/hour, that is $100/month in
              implicit cost &mdash; comparable to Zapier Professional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Cost Comparison That Matters</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Bardeen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-muted">Light use (&lt;100/mo)</td><td className="px-4 py-2.5 text-muted">$0</td><td className="px-4 py-2.5 text-muted">$0</td><td className="px-4 py-2.5 text-muted">$0*</td><td className="px-4 py-2.5 text-muted">$0</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">Medium (750/mo)</td><td className="px-4 py-2.5 text-muted">$29.99</td><td className="px-4 py-2.5 text-muted">$10.59</td><td className="px-4 py-2.5 text-muted">$20</td><td className="px-4 py-2.5 text-muted">$99</td></tr>
                  <tr><td className="px-4 py-2.5 text-muted">High (5,000/mo)</td><td className="px-4 py-2.5 text-muted">$103.50</td><td className="px-4 py-2.5 text-muted">$10.59</td><td className="px-4 py-2.5 text-muted">$50</td><td className="px-4 py-2.5 text-muted">$500</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-xs mb-4">*n8n self-hosted is $0 but requires server costs ($5&ndash;$20/month) and maintenance time.</p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why did Bardeen&apos;s price increase so dramatically?</h3>
                <p className="text-muted">Bardeen shifted from a growth-stage pricing model (cheap to acquire users) to a revenue-optimization model. The browser-based automation niche has few direct competitors, giving Bardeen pricing power with existing users who depend on its scraping capabilities.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I switch from Zapier to Make to save money?</h3>
                <p className="text-muted">If you are on Zapier Professional ($29.99/month) and comfortable with visual workflow builders, yes. Make Core ($10.59/month) gives you 10,000 operations vs 750 tasks. The learning curve is 4&ndash;8 hours. If your team is non-technical, the simplicity premium of Zapier may be worth the extra cost.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Will Zapier raise prices in 2026?</h3>
                <p className="text-muted">Zapier has historically tightened free tiers rather than raising paid prices. The current 100 tasks/month free tier is already down from historical levels. Expect potential free tier changes before paid tier price increases.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "bardeen"]}
            comparisons={["zapier-vs-make", "make-vs-n8n"]}
            guides={[
              "saas-pricing-changes-2026",
              "automation-complexity-ladder",
              "when-zapier-costs-more-than-make",
              "zapier-pricing-history",
              "how-to-choose-automation-tool",
            ]}
          />
        </div>
      </article>
    </>
  );
}
