import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Set Up Website Analytics in 30 Minutes: Plausible or PostHog",
  description:
    "Install Plausible ($9/mo) or PostHog (free) and build your first dashboard in 30 minutes. Privacy-friendly analytics without the Google Analytics complexity.",
};

export default function SetUpAnalyticsPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Analytics in 30 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Practical Workflow
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Set Up Website Analytics in 30 Minutes: Plausible or PostHog
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Google Analytics is free but complex and raises privacy concerns. Plausible ($9/month)
            gives you clean, privacy-friendly web analytics. PostHog (free tier: 1M events/month)
            gives you product analytics, session replay, and feature flags. Both install in minutes.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Choose Your Analytics Tool</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plausible Starter</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">PostHog Free</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Price</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Type</td>
                    <td className="px-4 py-2.5 text-muted">Web analytics (pageviews)</td>
                    <td className="px-4 py-2.5 text-muted">Product analytics (events)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free Limit</td>
                    <td className="px-4 py-2.5 text-muted">No free tier (30-day trial)</td>
                    <td className="px-4 py-2.5 text-muted">1M events/mo, 5K session replays</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Script Size</td>
                    <td className="px-4 py-2.5 text-muted">&lt;1KB</td>
                    <td className="px-4 py-2.5 text-muted">~70KB</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Cookies</td>
                    <td className="px-4 py-2.5 text-muted">No cookies (GDPR compliant)</td>
                    <td className="px-4 py-2.5 text-muted">Uses cookies (consent needed)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Session Replay</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Yes (5,000/mo free)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Feature Flags</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Yes (1M requests/mo free)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Best For</td>
                    <td className="px-4 py-2.5 text-muted">Content sites, blogs, marketing pages</td>
                    <td className="px-4 py-2.5 text-muted">SaaS products, web apps</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Pick Plausible</strong> if you want simple pageview analytics without cookies.
              <strong> Pick PostHog</strong> if you want product analytics, session replay, and feature
              flags for free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Step-by-Step: Plausible Setup (15 Minutes)</h2>
            <div className="space-y-4">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 1&ndash;3: Create Account</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Sign up at plausible.io. Start 30-day free trial (no credit card required).
                  Add your website domain. Plausible generates a unique script tag for your site.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 3&ndash;8: Install Script</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Copy the script tag (under 1KB). Paste it in your website&apos;s &lt;head&gt; tag.
                  For WordPress: use the official Plausible plugin. For Next.js: add to your
                  layout.tsx. For Webflow/Squarespace: use the custom code injection settings.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 8&ndash;15: Set Up Goals and First Dashboard</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Go to your Plausible dashboard. Set up goal tracking for key pages (pricing,
                  signup, contact). Add UTM tracking for campaigns. Set up email or Slack reports
                  (included in Starter $9/mo plan). Your dashboard is live &mdash; data appears in real time.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Step-by-Step: PostHog Setup (20 Minutes)</h2>
            <div className="space-y-4">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 1&ndash;5: Create Account and Project</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Sign up at app.posthog.com. Create a project. PostHog generates your unique
                  JavaScript snippet with your API key.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 5&ndash;12: Install and Autocapture</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Add the PostHog snippet to your site&apos;s &lt;head&gt; tag. PostHog automatically
                  captures pageviews, clicks, and form submissions (autocapture). No extra code needed
                  for basic analytics. Session replay starts recording automatically (5,000/mo free).
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 12&ndash;20: Build Your First Dashboard</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Create a dashboard with key insights: Pageview trends, Top pages, Referral sources,
                  User retention. Add a funnel: Landing page &rarr; Pricing page &rarr; Signup. PostHog&apos;s
                  free tier includes unlimited team members and 1M events/month.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Should I still use Google Analytics?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Google Analytics 4 is free and powerful, but requires cookie consent banners in the EU
                  and has a steep learning curve. If you just need pageview analytics, Plausible at $9/mo
                  is simpler, faster, and privacy-friendly. PostHog free covers product analytics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I use both Plausible and PostHog?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Yes. Plausible for clean web analytics ($9/mo) and PostHog for product analytics
                  and session replay (free). Total: $9/month for comprehensive coverage.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "choosing-analytics-tool",
              "set-up-lead-capture-in-30-minutes",
              "set-up-social-scheduling-in-30-minutes",
              "saas-costs-for-1-person-business",
            ]}
          />
        </div>
      </article>
    </>
  );
}
