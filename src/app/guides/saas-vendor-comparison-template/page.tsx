import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "SaaS Vendor Comparison Template: Evaluate Any Tool in 10 Minutes",
  description:
    "A 10-point scoring framework to evaluate any SaaS tool. Score pricing, features, lock-in risk, support, and more. Works for CRMs, email platforms, automation tools, and project management.",
};

export default function SaasVendorComparisonTemplatePage() {
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
              SaaS Vendor Comparison Template
            </span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Workflow Template
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Vendor Comparison Template: Evaluate Any Tool in 10 Minutes
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Stop spending hours comparing feature lists. This 10-point scoring framework
            gives you a structured, repeatable way to evaluate any SaaS tool. Score each
            vendor on the criteria that actually matter, then compare the totals.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>10 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Framework developed from 100+ tool evaluations"
          sourceCount={3}
        />
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The 10-Point Framework */}
          <section>
            <h2 className="text-xl font-bold mb-3">The 10-Point Scoring Framework</h2>
            <p className="text-muted leading-relaxed mb-3">
              Rate each criterion on a scale of 1&ndash;10. Multiply by the weight to get
              a weighted score. Total the weighted scores to compare vendors. Higher is better.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">#</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Criterion</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Weight</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">What to Score</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">1</td>
                    <td className="px-4 py-3 font-medium text-foreground">True Cost (Year 1)</td>
                    <td className="px-4 py-3">3x</td>
                    <td className="px-4 py-3">Monthly + annual + onboarding + add-ons. Not the headline price.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">2</td>
                    <td className="px-4 py-3 font-medium text-foreground">Core Feature Fit</td>
                    <td className="px-4 py-3">3x</td>
                    <td className="px-4 py-3">Does it solve your top 3 problems? Ignore features you will never use.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">3</td>
                    <td className="px-4 py-3 font-medium text-foreground">Ease of Setup</td>
                    <td className="px-4 py-3">2x</td>
                    <td className="px-4 py-3">Can you set it up in a day? A week? Do you need a consultant?</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">4</td>
                    <td className="px-4 py-3 font-medium text-foreground">Pricing Transparency</td>
                    <td className="px-4 py-3">2x</td>
                    <td className="px-4 py-3">Can you find the real price in 2 minutes? Hidden fees? Contact sales?</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">5</td>
                    <td className="px-4 py-3 font-medium text-foreground">Scaling Cost</td>
                    <td className="px-4 py-3">2x</td>
                    <td className="px-4 py-3">What is the cost at 2x and 5x your current usage? Per-seat traps?</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">6</td>
                    <td className="px-4 py-3 font-medium text-foreground">Data Export</td>
                    <td className="px-4 py-3">2x</td>
                    <td className="px-4 py-3">Can you export all your data? CSV? API? How hard is migration?</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">7</td>
                    <td className="px-4 py-3 font-medium text-foreground">Integration Quality</td>
                    <td className="px-4 py-3">1x</td>
                    <td className="px-4 py-3">Does it connect to your existing stack? Native or via Zapier only?</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">8</td>
                    <td className="px-4 py-3 font-medium text-foreground">Support Quality</td>
                    <td className="px-4 py-3">1x</td>
                    <td className="px-4 py-3">Chat, email, phone? Response time? Is support gated behind higher tiers?</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3 font-medium text-foreground">9</td>
                    <td className="px-4 py-3 font-medium text-foreground">Contract Flexibility</td>
                    <td className="px-4 py-3">1x</td>
                    <td className="px-4 py-3">Monthly billing? Annual only? Early termination penalty?</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">10</td>
                    <td className="px-4 py-3 font-medium text-foreground">Vendor Stability</td>
                    <td className="px-4 py-3">1x</td>
                    <td className="px-4 py-3">How long have they been around? Profitable? Recent acquisitions?</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-lg border border-border bg-surface p-5 my-6">
              <p className="text-sm font-semibold text-foreground mb-2">Maximum score: 180</p>
              <p className="text-sm text-muted">
                The total possible weighted score is 180 (10 points x 18 total weight). A score
                above 130 indicates an excellent fit. Between 100&ndash;130 is acceptable with
                trade-offs. Below 100 means you should look at other options.
              </p>
            </div>
          </section>

          {/* Example Evaluation */}
          <section>
            <h2 className="text-xl font-bold mb-3">Example: CRM Evaluation</h2>
            <p className="text-muted leading-relaxed mb-3">
              Here is a simplified example comparing two CRMs using the framework:
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Criterion (Weight)</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Pipedrive Growth</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Salesforce Pro Suite</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">True Cost (3x)</td>
                    <td className="px-4 py-3">8 (24) &mdash; $39/seat/mo, no onboarding fee</td>
                    <td className="px-4 py-3">4 (12) &mdash; $100/seat/mo, annual only</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Ease of Setup (2x)</td>
                    <td className="px-4 py-3">9 (18) &mdash; Same-day setup</td>
                    <td className="px-4 py-3">3 (6) &mdash; Typically needs consultant</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="px-4 py-3">Contract Flexibility (1x)</td>
                    <td className="px-4 py-3">9 (9) &mdash; Monthly billing available</td>
                    <td className="px-4 py-3">2 (2) &mdash; Annual contracts only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted leading-relaxed">
              This is a partial example. In a full evaluation, you would score all 10 criteria
              and compare the total weighted scores to make a data-driven decision.
            </p>
          </section>

          {/* How to Use */}
          <section>
            <h2 className="text-xl font-bold mb-3">How to Use This Template</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted mb-4">
              <li>
                <strong className="text-foreground">Shortlist 2&ndash;3 vendors.</strong> Do not evaluate
                more than 3 tools at once. Use our comparison pages to narrow down your shortlist first.
              </li>
              <li>
                <strong className="text-foreground">Score independently before discussing.</strong> If
                multiple team members are involved, have each person score independently. Then
                compare scores to surface disagreements.
              </li>
              <li>
                <strong className="text-foreground">Adjust weights for your priorities.</strong> If
                budget is your primary constraint, increase the cost weights. If features matter
                most, increase the feature fit weight.
              </li>
              <li>
                <strong className="text-foreground">Calculate the 24-month cost, not just month 1.</strong> Many
                tools look cheap at launch but become expensive as you grow. Score based on
                projected usage, not just current needs.
              </li>
              <li>
                <strong className="text-foreground">Do a trial before the final decision.</strong> The
                scorecard narrows your options. A 14-day trial with real data confirms the choice.
              </li>
            </ol>
          </section>

          {/* FAQ */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is True Cost weighted 3x?</h3>
                <p className="text-muted">Because cost is the most common reason teams regret a SaaS choice. The tool that looked affordable at signup becomes expensive at scale. Triple-weighting cost ensures it dominates the evaluation, which matches real-world decision-making.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I compare free plans using this template?</h3>
                <p className="text-muted">Compare free plans against the paid tier you will eventually need. Free plans score high on cost but often low on features and support. The template helps you see the full picture beyond the initial price tag.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many tools should I compare?</h3>
                <p className="text-muted">2&ndash;3 maximum. Comparing more leads to analysis paralysis. Use our category pages and decision frameworks to narrow your shortlist before applying this evaluation template.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use this for any SaaS category?</h3>
                <p className="text-muted">Yes. The 10 criteria are universal. Whether you are evaluating CRMs, email platforms, automation tools, or project management software, the same framework applies. Adjust the weights to match your priorities.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["pipedrive", "hubspot-crm", "zapier", "mailchimp"]}
            comparisons={[]}
            guides={["new-tool-evaluation-checklist", "saas-audit-checklist", "how-much-should-software-cost"]}
          />
        </div>
      </article>
    </>
  );
}
