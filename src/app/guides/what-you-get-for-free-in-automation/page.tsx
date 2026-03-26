import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What You Get for Free in Automation: Every Free Tier Mapped",
  description:
    "Zapier Free vs Make Free vs n8n Community: exact task limits, scenario limits, and what's walled off. Verified March 2026.",
};

export default function FreeInAutomationPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Free Automation Tiers</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Feature Availability
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What You Get for Free in Automation: Every Free Tier Mapped
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Automation tools count usage differently &mdash; Zapier counts tasks, Make counts
            operations, n8n counts executions. Free tiers range from 100 tasks (Zapier) to
            unlimited (n8n self-hosted). This guide normalizes everything so you can compare fairly.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>14 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Free Tier Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zapier Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Make Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Community</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Usage Limit</td>
                    <td className="px-4 py-2.5 text-muted">100 tasks/month</td>
                    <td className="px-4 py-2.5 text-muted">1,000 operations/month</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited (self-hosted)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Workflow Limit</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited Zaps</td>
                    <td className="px-4 py-2.5 text-muted">2 active scenarios</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Multi-Step</td>
                    <td className="px-4 py-2.5 text-muted">No (two-step only)</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Integrations</td>
                    <td className="px-4 py-2.5 text-muted">7,000+ apps</td>
                    <td className="px-4 py-2.5 text-muted">1,800+ apps</td>
                    <td className="px-4 py-2.5 text-muted">400+ nodes + custom HTTP</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Hosting</td>
                    <td className="px-4 py-2.5 text-muted">Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Cloud</td>
                    <td className="px-4 py-2.5 text-muted">Self-hosted required</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">First Paid Tier</td>
                    <td className="px-4 py-2.5 text-muted">Professional $29.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">Core $10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">Starter $20/mo (cloud)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Task Counting Trap</h2>
            <p className="text-muted leading-relaxed mb-4">
              Zapier counts each step in a multi-step Zap as a separate task. A 5-step Zap that
              runs once uses 5 tasks. On the free plan (100 tasks), that&apos;s only 20 runs per month.
              Make counts operations per module but gives you 10x the volume at the Core tier ($10.59/mo).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Which automation free tier is most useful?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Make Free. 1,000 operations/month with multi-step scenarios is genuinely usable for
                  a solo operator. Zapier Free&apos;s 100 tasks with two-step-only is very limiting.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is n8n really free?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  The self-hosted Community edition is free and unlimited. But you need a server ($5&ndash;$20/month
                  for a VPS) and the technical ability to manage Docker. Cloud-hosted n8n starts at $20/month.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "best-free-automation-tool-2026",
              "automation-pricing-compared",
              "what-you-get-for-free-in-pm",
              "set-up-lead-capture-in-30-minutes",
            ]}
          />
        </div>
      </article>
    </>
  );
}
