import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "3-Year PM Tool Cost as Your Team Grows: Asana vs ClickUp vs Notion",
  description:
    "Exact 3-year cost projection for Asana, ClickUp, and Notion as your team grows from 3 to 10 to 25 members. Real pricing from vendor sites.",
};

export default function PmToolCostOver3YearsPage() {
  return (
    <>
      {/* Breadcrumb */}
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
              3-Year PM Tool Cost
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Year-Over-Year Cost
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            3-Year PM Tool Cost as Your Team Grows: Asana vs ClickUp vs Notion
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Project management tools charge per seat, so costs scale linearly with your team.
            This guide projects exact costs as you grow from 3 members (Year 1) to 10 (Year 2)
            to 25 (Year 3) &mdash; the typical trajectory of a growing startup.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Pricing Basis */}
          <section>
            <h2 className="text-xl font-bold mb-3">Plans Used in This Analysis</h2>
            <p className="text-muted leading-relaxed mb-4">
              We compare the mid-tier paid plan for each tool &mdash; the tier most growing
              teams land on after outgrowing free.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$13.49/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Timeline, workflow builder, forms, dashboards</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited storage, integrations, Gantt, dashboards</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited uploads, 30-day history, automations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 1: 3 members */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 1: 3 Members</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 3 members, all three tools are affordable. ClickUp&apos;s Free Forever plan
              (unlimited tasks and members, 60MB storage) could even work here, but most
              teams need the Unlimited plan&apos;s integrations and storage.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana Starter</td>
                    <td className="px-4 py-2.5 text-muted">3 &times; $13.49 = $40.47/mo</td>
                    <td className="px-4 py-2.5 text-muted">$485.64/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">3 &times; $10 = $30/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$360/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">3 &times; $12 = $36/mo</td>
                    <td className="px-4 py-2.5 text-muted">$432/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 2: 10 members */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 2: 10 Members</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 10 members, per-seat costs start to become a real budget line item. The
              difference between ClickUp ($10/seat) and Asana ($13.49/seat) adds up to
              $419/year &mdash; meaningful for a startup.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana Starter</td>
                    <td className="px-4 py-2.5 text-muted">10 &times; $13.49 = $134.90/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,618.80/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">10 &times; $10 = $100/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$1,200/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">10 &times; $12 = $120/mo</td>
                    <td className="px-4 py-2.5 text-muted">$1,440/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Year 3: 25 members */}
          <section>
            <h2 className="text-xl font-bold mb-3">Year 3: 25 Members</h2>
            <p className="text-muted leading-relaxed mb-4">
              At 25 members, you&apos;re spending $3,000&ndash;$4,000/year on project management
              alone. Many teams at this size also consider upgrading to higher tiers: Asana
              Advanced ($30.49/seat) for goals and portfolios, ClickUp Business ($19/seat) for
              advanced automations, or Notion Business ($24/seat) for advanced permissions.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mid-Tier Monthly</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mid-Tier Annual</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Upper-Tier Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">25 &times; $13.49 = $337.25/mo</td>
                    <td className="px-4 py-2.5 text-muted">$4,047/yr</td>
                    <td className="px-4 py-2.5 text-muted">Advanced: $9,147/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">25 &times; $10 = $250/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$3,000/yr</td>
                    <td className="px-4 py-2.5 text-muted">Business: $5,700/yr</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">25 &times; $12 = $300/mo</td>
                    <td className="px-4 py-2.5 text-muted">$3,600/yr</td>
                    <td className="px-4 py-2.5 text-muted">Business: $7,200/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3-Year Total */}
          <section>
            <h2 className="text-xl font-bold mb-3">3-Year Total Cost Summary</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool (Mid-Tier)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 1</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 2</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Year 3</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">3-Year Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana Starter</td>
                    <td className="px-4 py-2.5 text-muted">$486</td>
                    <td className="px-4 py-2.5 text-muted">$1,619</td>
                    <td className="px-4 py-2.5 text-muted">$4,047</td>
                    <td className="px-4 py-2.5 text-muted">$6,152</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$360</td>
                    <td className="px-4 py-2.5 text-muted">$1,200</td>
                    <td className="px-4 py-2.5 text-muted">$3,000</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$4,560</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">$432</td>
                    <td className="px-4 py-2.5 text-muted">$1,440</td>
                    <td className="px-4 py-2.5 text-muted">$3,600</td>
                    <td className="px-4 py-2.5 text-muted">$5,472</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-surface-alt rounded-lg p-4 my-4">
              <p className="text-sm text-foreground font-medium mb-1">Key Takeaway</p>
              <p className="text-sm text-muted">
                ClickUp Unlimited saves $1,592 vs Asana Starter and $912 vs Notion Plus over
                3 years. However, Notion doubles as docs/wiki, potentially replacing a separate
                tool. And Asana&apos;s structured approach requires less setup time. The cheapest
                tool isn&apos;t always the best value when you factor in what else you need.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can I use free tiers for all three years?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  ClickUp Free has unlimited tasks and members but only 60MB storage.
                  Notion Free works for individuals but limits guest access and page history.
                  Asana Personal limits you to 2 users. For teams of 3+, you&apos;ll need paid plans.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Does Notion replace the need for a separate wiki or docs tool?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Notion combines project management, docs, wiki, and databases. If you&apos;d
                  otherwise pay for Confluence ($6.05/user/mo) or a separate wiki, Notion&apos;s
                  $12/seat/mo becomes the better overall value despite not being the cheapest PM tool.
                </div>
              </details>
              <details className="group bg-surface rounded-lg border border-border">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which tool handles the transition from small team to 25+ members best?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  ClickUp and Notion scale smoothly because their per-seat pricing stays flat.
                  Asana scales well too, but teams often need to upgrade from Starter ($13.49/seat)
                  to Advanced ($30.49/seat) around 15&ndash;20 members for features like goals
                  and portfolios.
                </div>
              </details>
            </div>
          </section>

        </div>

        {/* Related Links */}
        <div className="mt-12">
          <RelatedLinks
            tools={["asana", "clickup", "notion"]}
            comparisons={["asana-vs-clickup", "notion-vs-clickup"]}
            guides={["project-management-small-team", "notion-vs-trello-vs-clickup-for-small-teams"]}
          />
        </div>
      </article>
    </>
  );
}
