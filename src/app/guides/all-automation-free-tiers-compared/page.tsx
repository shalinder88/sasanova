import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every Automation Tool Free Tier in One Table",
  description:
    "Zapier, Make, n8n, Pipedream, and Bardeen free tier limits compared. Task/operation counts, active workflow limits, and which free tier gives you the most automation capacity.",
};

export default function AllAutomationFreetiersComparedPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">All Automation Free Tiers Compared</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Comparison Matrix
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Every Automation Tool Free Tier in One Table
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Five automation platforms offer free plans, but they measure volume differently:
            tasks, operations, executions, and credits. Here&apos;s every limit normalized so
            you can make a fair comparison.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">The Definitive Automation Free Tier Table</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Volume</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Unit</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Active Workflows</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">100/mo</td>
                    <td className="px-4 py-2.5 text-muted">Tasks (each step counts)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited Zaps</td>
                    <td className="px-4 py-2.5 text-muted">2-step only (trigger + 1 action)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">1,000/mo</td>
                    <td className="px-4 py-2.5 text-muted">Operations (each module counts)</td>
                    <td className="px-4 py-2.5 text-muted">2 active scenarios</td>
                    <td className="px-4 py-2.5 text-muted">2-scenario limit, not volume</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (self-hosted)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Executions</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Self-host required (Docker)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">100/mo</td>
                    <td className="px-4 py-2.5 text-muted">Credits</td>
                    <td className="px-4 py-2.5 text-muted">3 active workflows</td>
                    <td className="px-4 py-2.5 text-muted">Developer-focused, code required</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Bardeen</td>
                    <td className="px-4 py-2.5 text-muted">100/mo</td>
                    <td className="px-4 py-2.5 text-muted">Credits</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited non-premium</td>
                    <td className="px-4 py-2.5 text-muted">Browser extension only, Starter $99/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Volume Comparison: How Far Does Free Get You?</h2>
            <p className="text-muted leading-relaxed mb-4">
              A typical 3-step automation (trigger + 2 actions) consuming differently across platforms:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost per Run</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Runs/Month</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cheapest Paid Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zapier</td>
                    <td className="px-4 py-2.5 text-muted">N/A (2-step only on free)</td>
                    <td className="px-4 py-2.5 text-muted">0 (3-step needs Professional)</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo (750 tasks)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Make</td>
                    <td className="px-4 py-2.5 text-muted">3 operations</td>
                    <td className="px-4 py-2.5 text-muted">~333 runs</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo (10,000 ops)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">n8n (self-hosted)</td>
                    <td className="px-4 py-2.5 text-muted">1 execution</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$0 (self-hosted) or $20/mo cloud</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedream</td>
                    <td className="px-4 py-2.5 text-muted">~3 credits</td>
                    <td className="px-4 py-2.5 text-muted">~33 runs</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo (2,000 credits)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              <strong>Most generous free tier:</strong> n8n self-hosted (unlimited everything, but you manage the server).
              For cloud-hosted, Make Free (1,000 ops = ~333 three-step runs) gives you 10x more capacity than
              Zapier Free (100 tasks, 2-step only).
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why does Zapier Free only allow 2-step Zaps?</h3>
                <p className="text-muted">Zapier gates multi-step Zaps behind the Professional plan ($29.99/mo). On Free, every Zap must be exactly one trigger + one action. This means no filters, no conditional logic, and no adding a Slack notification after creating a CRM record. It&apos;s the most restrictive free tier of any automation tool.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is self-hosting n8n really free?</h3>
                <p className="text-muted">The software is free and open source. You pay for hosting: $5&ndash;20/month on Railway, Render, or a VPS. Plus your time maintaining it. For technical teams, this is the most cost-effective option at any volume. For non-technical teams, Make Cloud is the better choice.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What happens when I hit a free tier limit?</h3>
                <p className="text-muted">Zapier: workflows pause until next month or you upgrade. Make: scenarios stop executing. Pipedream: workflows queue and execute next month. None of the platforms charge overages on free &mdash; they stop, not bill.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["zapier", "make", "n8n", "pipedream", "bardeen"]}
            comparisons={["zapier-vs-make", "zapier-vs-n8n", "make-vs-n8n"]}
            guides={[
              "best-free-automation-tool-2026",
              "automation-pricing-compared",
              "automation-task-volume-benchmarks",
              "how-to-choose-automation-tool",
            ]}
          />
        </div>
      </article>
    </>
  );
}
