import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Project Management Pricing Compared 2026: All Tools at 5/10/25/50 Users",
  description:
    "Side-by-side pricing for Notion, ClickUp, Asana, Monday.com, Basecamp, Trello, Jira, and Linear at 5, 10, 25, and 50 users. Exact plan names and annual totals.",
};

export default function ProjectManagementPricingCompared2026Page() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">PM Pricing Compared 2026</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Industry Pricing Report
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Project Management Pricing Compared: Every Tool at 5/10/25/50 Users (2026)
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every PM tool shows per-seat prices. Here is what you actually pay annually across
            eight major tools at real team sizes &mdash; including the free tier cutoffs and
            plan names that matter.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">How We Calculated</h2>
            <p className="text-muted leading-relaxed">
              All prices are monthly billing rates multiplied by user count. We used the most
              popular mid-tier plan for each tool (the plan most teams actually buy). Annual
              billing discounts are noted where significant.
            </p>
          </section>

          {/* Monthly Cost Table */}
          <section>
            <h2 className="text-xl font-bold mb-4">Monthly Cost by Team Size (Mid-Tier Plans)</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-3 py-2.5 font-semibold text-foreground">Tool (Plan)</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">5 users</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">10 users</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">25 users</th>
                    <th className="px-3 py-2.5 font-semibold text-foreground text-right">50 users</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Notion Plus<br /><span className="text-xs text-muted">$12/user/mo</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$60</td>
                    <td className="px-3 py-2.5 text-muted text-right">$120</td>
                    <td className="px-3 py-2.5 text-muted text-right">$300</td>
                    <td className="px-3 py-2.5 text-muted text-right">$600</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">ClickUp Unlimited<br /><span className="text-xs text-muted">$10/member/mo</span></td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$50</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$100</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$250</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$500</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Asana Starter<br /><span className="text-xs text-muted">$13.49/seat/mo</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$67</td>
                    <td className="px-3 py-2.5 text-muted text-right">$135</td>
                    <td className="px-3 py-2.5 text-muted text-right">$337</td>
                    <td className="px-3 py-2.5 text-muted text-right">$675</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Monday Standard<br /><span className="text-xs text-muted">$14/seat/mo (min 3)</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$70</td>
                    <td className="px-3 py-2.5 text-muted text-right">$140</td>
                    <td className="px-3 py-2.5 text-muted text-right">$350</td>
                    <td className="px-3 py-2.5 text-muted text-right">$700</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Trello Standard<br /><span className="text-xs text-muted">$6/user/mo</span></td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$30</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$60</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$150</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$300</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Jira Standard<br /><span className="text-xs text-muted">$8.15/user/mo</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$41</td>
                    <td className="px-3 py-2.5 text-muted text-right">$82</td>
                    <td className="px-3 py-2.5 text-muted text-right">$204</td>
                    <td className="px-3 py-2.5 text-muted text-right">$408</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Linear Standard<br /><span className="text-xs text-muted">$8/user/mo</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$40</td>
                    <td className="px-3 py-2.5 text-muted text-right">$80</td>
                    <td className="px-3 py-2.5 text-muted text-right">$200</td>
                    <td className="px-3 py-2.5 text-muted text-right">$400</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-3 py-2.5 font-medium text-foreground">Basecamp<br /><span className="text-xs text-muted">$15/user/mo or $349/mo flat</span></td>
                    <td className="px-3 py-2.5 text-muted text-right">$75</td>
                    <td className="px-3 py-2.5 text-muted text-right">$150</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$349*</td>
                    <td className="px-3 py-2.5 text-accent font-semibold text-right">$349*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              *Basecamp Pro at $349/mo (flat) includes unlimited users &mdash; becomes the best value above ~23 users.
            </p>
          </section>

          {/* Free Tier Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">Free Tier Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Plan Limits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited pages, 7-day history, 10 guests</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Unlimited tasks &amp; members, 60MB storage</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">Up to 2 users only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monday</td>
                    <td className="px-4 py-2.5 text-muted">Up to 2 seats, 3 boards</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited cards, 10 boards, 1 Power-Up/board</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Jira</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Up to 10 users, 2GB storage</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear</td>
                    <td className="px-4 py-2.5 text-muted">Up to 250 issues, unlimited members</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp</td>
                    <td className="px-4 py-2.5 text-muted">1 user, limited projects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Key Insights */}
          <section>
            <h2 className="text-xl font-bold mb-4">Key Pricing Insights</h2>
            <ul className="space-y-2 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">1.</span>
                <span><strong className="text-foreground">ClickUp and Trello are the cheapest per-seat</strong> at $10/mo and $6/mo respectively. Trello is simpler; ClickUp is more powerful.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">2.</span>
                <span><strong className="text-foreground">Basecamp Pro flips at 23+ users.</strong> At $349/mo flat for unlimited users, it becomes the cheapest option for larger teams.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">3.</span>
                <span><strong className="text-foreground">Jira Free is the best free tier for dev teams</strong> at 10 users with full Scrum/Kanban boards.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold mt-0.5">4.</span>
                <span><strong className="text-foreground">Linear offers the most polished UX</strong> at just $8/user/mo &mdash; comparable to Jira Standard but with a modern interface.</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which PM tool has the best value at 10 users?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Jira Free (up to 10 users) costs $0/mo with full features. If Jira is too complex,
                  ClickUp Unlimited at $100/mo or Linear Standard at $80/mo offer the best paid value.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do annual billing discounts matter?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. ClickUp Unlimited drops from $10 to $7/user/mo annually. Asana Starter drops
                  from $13.49 to $10.99/user/mo. For a 25-person team, annual billing on ClickUp saves
                  $900/year.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["notion", "clickup", "asana", "monday", "trello", "jira", "linear", "basecamp"]}
            comparisons={["jira-vs-linear", "monday-vs-asana"]}
            guides={["project-management-small-team", "notion-vs-clickup-vs-asana"]}
          />
        </div>
      </article>
    </>
  );
}
