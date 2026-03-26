import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Asana Pricing Explained: Why Free Went from 10 Users to 2",
  description:
    "Asana pricing decoded: Free (2 users), Starter $13.49/seat/mo, Advanced $30.49/seat/mo ($24.99 annual), Enterprise custom. The user limit change, tier comparison, and when each tier makes sense.",
};

export default function AsanaPricingExplainedPage() {
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
              Asana Pricing Explained
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Asana Pricing Explained: Why Free Went from 10 Users to 2
          </h1>
          <p className="text-lg text-muted">
            Asana&apos;s free tier used to support 10 users. Now it&apos;s 2. That single change pushed thousands of small teams into paid plans. This guide covers every tier, the impact of the user limit reduction, and the exact moments each upgrade makes financial sense.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Every Tier at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (per seat)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per seat/mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Personal (Free)</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Up to 2 users, unlimited tasks/projects, list and board views</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                  <td className="px-4 py-2.5">$13.49</td>
                  <td className="px-4 py-2.5">$10.99</td>
                  <td className="px-4 py-2.5">Timeline, workflow builder, forms, unlimited dashboards</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Advanced</td>
                  <td className="px-4 py-2.5">$30.49</td>
                  <td className="px-4 py-2.5">$24.99</td>
                  <td className="px-4 py-2.5">Portfolios, goals, custom rules, approvals, proofing</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">SAML, data loss prevention, custom branding, audit logs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Asana uses per-seat pricing on Starter and Advanced. The free tier is now limited to 2 users with basic views only. Annual billing offers meaningful discounts: Starter drops from $13.49 to $10.99/seat, and Advanced from $30.49 to $24.99/seat.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The User Limit Change That Changed Everything</h2>
          <p className="text-muted mb-4">
            Asana&apos;s free tier originally supported up to 15 users, then dropped to 10, and now stands at 2. This matters because:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Teams of 3&ndash;10 that ran on Asana Free now must pay.</strong> A team of 5 on Starter costs $67.45/month ($54.95 annual). That&apos;s a jump from $0 to $660&ndash;$810/year overnight.</li>
            <li><strong className="text-foreground">ClickUp Free has no user limit.</strong> Teams displaced from Asana Free have a direct alternative in ClickUp, which allows unlimited members at $0 (with a 60MB storage cap instead).</li>
            <li><strong className="text-foreground">The 2-user limit makes Free nearly useless for teams.</strong> Free Asana is now effectively a personal task manager, not a team tool. Any team collaboration requires paying.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">What the 2-user free tier actually works for</p>
            <p className="text-sm text-muted">
              A duo &mdash; co-founders, a manager and their assistant, or two freelancers collaborating. Unlimited tasks and projects at $0, but only list and board views. The moment a third person joins, you&apos;re paying $13.49/seat/month minimum.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Tier Adds</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">Personal Free &mdash; Solo or Duo Only</h3>
          <p className="text-muted mb-4">
            Free gives you unlimited tasks, unlimited projects, list view, board view, calendar view, and basic reporting. You can assign tasks, set due dates, and create subtasks. For 1&ndash;2 people managing personal or shared tasks, it&apos;s functional.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Missing from Free:</strong> Timeline (Gantt), workflow builder, forms, dashboards, custom fields, and milestones. No integrations beyond basic file attachments.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Starter ($13.49/seat/mo) &mdash; The Real Starting Point</h3>
          <p className="text-muted mb-4">
            Starter adds Timeline view (Gantt), Workflow Builder for automations, Asana Forms for intake requests, unlimited dashboards, and custom fields. It also unlocks integrations like Salesforce, Tableau, and Adobe Creative Cloud.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why most teams start here:</strong> Timeline and Workflow Builder are the two features that separate Asana from a basic to-do list. Without them, you might as well use Trello (which is simpler and has a more generous free tier for basic boards).
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Advanced ($30.49/seat/mo) &mdash; Strategy and Governance</h3>
          <p className="text-muted mb-4">
            Advanced adds Portfolios (track multiple projects in one view), Goals (OKR-style goal tracking), custom rules with conditional logic, approvals, proofing (review and comment on images/PDFs), and advanced reporting.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When it&apos;s worth it:</strong> When you manage 10+ projects simultaneously and need portfolio-level visibility, or when your organization tracks goals/OKRs and wants them connected to project tasks. Advanced is 126% more expensive than Starter, so the features need to justify the premium.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Enterprise (Custom) &mdash; Compliance and Admin Control</h3>
          <p className="text-muted mb-4">
            Enterprise adds SAML SSO, data loss prevention, custom branding, audit logs, service accounts, and a dedicated customer success manager. Pricing is custom and requires contacting sales.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">The 2-user Free trap.</strong> Asana&apos;s free tier is effectively a single-user or duo tool. Any real team collaboration requires Starter. The effective starting price for teams is $13.49/seat/month, not $0.</li>
            <li><strong className="text-foreground">Asana AI is a separate add-on.</strong> Asana Intelligence (AI features) is bundled with Enterprise or available as an add-on. It is not included in Starter or Advanced by default.</li>
            <li><strong className="text-foreground">Goals and Portfolios require Advanced.</strong> If you need OKR tracking or portfolio views, you need Advanced at $30.49/seat. That&apos;s 2.3x the Starter price for features some competitors include in cheaper tiers.</li>
            <li><strong className="text-foreground">Reporting depth requires paid tiers.</strong> Free gives you basic status charts. Custom dashboards require Starter. Advanced reporting (workload, burndown) requires Advanced.</li>
            <li><strong className="text-foreground">No docs or wiki.</strong> Unlike Notion or ClickUp, Asana doesn&apos;t have built-in documentation. You&apos;ll need a separate docs tool (Notion, Google Docs, Confluence), adding to your total stack cost.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Personal Free</strong> &mdash; 1&ndash;2 people managing personal tasks or a simple shared workspace. Functional but limited.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Starter ($13.49/seat)</strong> &mdash; Teams of 3&ndash;25 who need Timeline, Workflow Builder, forms, and custom fields. The right tier for most small-to-mid teams doing project management.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Advanced ($30.49/seat, $24.99 annual)</strong> &mdash; Organizations managing 10+ projects that need portfolio views, goal tracking, and custom rule logic. Also required for proofing workflows (design teams reviewing assets).
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Enterprise (custom)</strong> &mdash; Large organizations needing SAML SSO, DLP, audit logs, or dedicated support. Typically 50+ seats.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Per-Seat Math at Team Scale</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Starter/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Advanced/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Advanced Annual/mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 seats</td>
                  <td className="px-4 py-2.5">$67.45</td>
                  <td className="px-4 py-2.5">$152.45</td>
                  <td className="px-4 py-2.5">$124.95</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 seats</td>
                  <td className="px-4 py-2.5">$134.90</td>
                  <td className="px-4 py-2.5">$304.90</td>
                  <td className="px-4 py-2.5">$249.90</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 seats</td>
                  <td className="px-4 py-2.5">$337.25</td>
                  <td className="px-4 py-2.5">$762.25</td>
                  <td className="px-4 py-2.5">$624.75</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50 seats</td>
                  <td className="px-4 py-2.5">$674.50</td>
                  <td className="px-4 py-2.5">$1,524.50</td>
                  <td className="px-4 py-2.5">$1,249.50</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ClickUp Unlimited at $10/member/mo</strong> costs 26% less than Asana Starter and includes Gantt charts, unlimited dashboards, and unlimited integrations. The tradeoff: ClickUp is more complex to set up and can feel overwhelming. If your team values simplicity, Asana&apos;s cleaner interface may justify the price difference.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Notion Plus at $12/user/mo</strong> is the better pick for teams that need docs + project management in one. Asana excels at structured task workflows, but if your work is equally document-heavy and task-heavy, Notion gives you both for a similar price.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How many users does Asana Free support?</h3>
                <p className="text-muted">Asana Free (Personal) supports up to 2 users. It was previously 10 users, then reduced. Any team of 3+ people needs Starter at $13.49/seat/month minimum.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Asana cost per month?</h3>
                <p className="text-muted">Free for up to 2 users. Starter is $13.49/seat/month ($10.99 annual). Advanced is $30.49/seat/month ($24.99 annual). Enterprise is custom pricing. A 10-person team on Starter pays $134.90/month or $109.90/month on annual billing.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why did Asana reduce the free tier from 10 to 2 users?</h3>
                <p className="text-muted">Asana needed to increase paid conversion rates. Many small teams ran entirely on the free tier without upgrading. Reducing to 2 users forces team collaboration behind the paywall, which is Asana&apos;s primary use case and revenue driver.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Asana worth it vs ClickUp?</h3>
                <p className="text-muted">Asana is worth the premium if your team values a clean, structured interface with fast adoption. ClickUp offers more features at lower cost ($10/member vs $13.49/seat) but requires more setup time and can overwhelm teams. Choose Asana for simplicity, ClickUp for feature density.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["asana", "clickup", "notion"]}
            comparisons={["clickup-vs-asana"]}
            guides={["switch-from-asana-to-clickup", "who-should-not-use-asana"]}
          />
        </div>
      </article>
    </>
  );
}
