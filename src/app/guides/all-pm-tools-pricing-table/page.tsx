import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Every PM Tool Pricing at a Glance",
  description:
    "Asana, ClickUp, Monday.com, Notion, Linear, Todoist, Basecamp, Trello, and Jira pricing compared in one table. All tiers, all prices, all limits from verified data.",
};

export default function AllPmToolsPricingTablePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">All PM Tools Pricing Table</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Comparison Matrix
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Every PM Tool Pricing at a Glance
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Nine project management tools, nine different pricing models. Per-seat, flat-rate,
            free tiers that actually work vs. free tiers that don&apos;t. Here&apos;s every plan
            and every price in one table so you can compare without opening nine browser tabs.
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
            <h2 className="text-xl font-bold mb-3">Free Tiers Compared</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier?</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Free Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Up to 2 users, unlimited tasks, list/board views only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited tasks/members, 60MB storage</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monday.com</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Up to 2 seats, 3 boards, unlimited docs</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited pages, 7-day history, 10 guests</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Up to 250 issues, unlimited members</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Todoist</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">5 projects, 5 collaborators, 5MB uploads</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Personal use, 1 user, limited projects</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited cards, 10 boards, 1 Power-Up/board</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Jira</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">Up to 10 users, 2GB storage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Paid Tier Pricing (Per Seat/Month)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier 1</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier 2</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier 3</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">Starter $13.49</td>
                    <td className="px-4 py-2.5 text-muted">Advanced $30.49</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited $10</td>
                    <td className="px-4 py-2.5 text-muted">Business $19</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monday.com</td>
                    <td className="px-4 py-2.5 text-muted">Basic $12</td>
                    <td className="px-4 py-2.5 text-muted">Standard $14</td>
                    <td className="px-4 py-2.5 text-muted">Pro $27</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Plus $12</td>
                    <td className="px-4 py-2.5 text-muted">Business $24</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear</td>
                    <td className="px-4 py-2.5 text-muted">Standard $8</td>
                    <td className="px-4 py-2.5 text-muted">Plus $14</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Todoist</td>
                    <td className="px-4 py-2.5 text-muted">Pro $7 (flat)</td>
                    <td className="px-4 py-2.5 text-muted">Business $10/seat</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp</td>
                    <td className="px-4 py-2.5 text-muted">$15/seat</td>
                    <td className="px-4 py-2.5 text-muted">Pro $349/mo flat</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello</td>
                    <td className="px-4 py-2.5 text-muted">Standard $6</td>
                    <td className="px-4 py-2.5 text-muted">Premium $12.50</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Jira</td>
                    <td className="px-4 py-2.5 text-muted">Standard $8.15</td>
                    <td className="px-4 py-2.5 text-muted">Premium $16</td>
                    <td className="px-4 py-2.5 text-muted">&mdash;</td>
                    <td className="px-4 py-2.5 text-muted">Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Cost at 10 Users/Month</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool (Tier 1)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (10 users)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual (10 users)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello Standard</td>
                    <td className="px-4 py-2.5 text-muted">$60/mo</td>
                    <td className="px-4 py-2.5 text-muted">$600/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Todoist Pro</td>
                    <td className="px-4 py-2.5 text-muted">$7/mo (flat, not per-seat)</td>
                    <td className="px-4 py-2.5 text-muted">$60/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear Standard</td>
                    <td className="px-4 py-2.5 text-muted">$80/mo</td>
                    <td className="px-4 py-2.5 text-muted">$960/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Jira Standard</td>
                    <td className="px-4 py-2.5 text-muted">$81.50/mo</td>
                    <td className="px-4 py-2.5 text-muted">$875/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                    <td className="px-4 py-2.5 text-muted">$840/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">$120/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,200/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monday.com Basic</td>
                    <td className="px-4 py-2.5 text-muted">$120/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,080/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana Starter</td>
                    <td className="px-4 py-2.5 text-muted">$134.90/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,318.80/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp</td>
                    <td className="px-4 py-2.5 text-muted">$150/mo (or $349 flat for unlimited)</td>
                    <td className="px-4 py-2.5 text-muted">$1,800/yr (or $3,588 flat)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which PM tool is cheapest for a 10-person team?</h3>
                <p className="text-muted">Todoist Pro at $7/month (flat, not per-seat) is the cheapest paid option but is a task manager, not a full PM tool. For project management: Trello Standard ($60/mo for 10 users) or ClickUp Unlimited ($100/mo) offer the most features per dollar.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Basecamp Pro worth $349/month for unlimited users?</h3>
                <p className="text-muted">Only if you have 24+ users. Below that, per-seat at $15/user is cheaper. At 25 users: $375/mo per-seat vs. $349 flat. Basecamp Pro becomes the clear winner above 25 team members, with unlimited users and 5TB storage.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which PM tool has the best free tier for teams?</h3>
                <p className="text-muted">ClickUp Free (unlimited tasks, unlimited members, 60MB storage) is the most generous for teams. Jira Free (10 users, Scrum and Kanban) is best for engineering teams. Notion Free is best for individuals (unlimited pages but limited collaboration).</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["asana", "clickup", "monday", "notion", "linear", "todoist", "basecamp", "trello", "jira"]}
            comparisons={["asana-vs-monday", "notion-vs-clickup", "jira-vs-linear"]}
            guides={[
              "project-management-small-team",
              "notion-vs-clickup-vs-asana",
              "pm-decision-in-5-minutes",
              "pm-tool-cost-over-3-years",
            ]}
          />
        </div>
      </article>
    </>
  );
}
