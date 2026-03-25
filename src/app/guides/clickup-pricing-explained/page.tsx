import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "ClickUp Pricing Explained: Free Is Generous, But Here's the Catch",
  description:
    "ClickUp pricing decoded: Free Forever (unlimited tasks/members, 100MB), Unlimited $10/member/mo, Business $19/member/mo, Enterprise custom. Storage, integration, and feature limits explained.",
};

export default function ClickUpPricingExplainedPage() {
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
              ClickUp Pricing Explained
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
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            ClickUp Pricing Explained: Free Is Generous, But Here&apos;s the Catch
          </h1>
          <p className="text-lg text-muted">
            ClickUp Free gives you unlimited tasks and unlimited members &mdash; more generous than Asana (2 users) or Monday (2 seats). But 100MB total storage, limited views, and missing integrations create walls that push growing teams to pay. This guide breaks down every tier and the exact moments Free stops working.
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
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (per member)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per member/mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free Forever</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Unlimited tasks/members, 100MB storage, limited views</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Unlimited</td>
                  <td className="px-4 py-2.5">$10</td>
                  <td className="px-4 py-2.5">$7</td>
                  <td className="px-4 py-2.5">Unlimited storage, integrations, dashboards, Gantt charts</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                  <td className="px-4 py-2.5">$19</td>
                  <td className="px-4 py-2.5">$12</td>
                  <td className="px-4 py-2.5">Google SSO, advanced automations, time tracking, mind maps</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">White labeling, advanced permissions, enterprise API, MSA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            ClickUp uses per-member pricing. Members are people who create, assign, or comment on tasks. Guests (view-only access to specific items) are free on all plans. This is a meaningful distinction &mdash; if you have stakeholders who only review, they don&apos;t count toward your seat cost.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Tier Unlocks</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">Free Forever &mdash; Unlimited Tasks, Limited Everything Else</h3>
          <p className="text-muted mb-4">
            Free gives you unlimited tasks, unlimited members, unlimited lists and folders, and access to basic views (list, board, calendar). You also get ClickUp Docs, whiteboards, and real-time chat. The feature breadth on Free is genuinely impressive compared to competitors.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The catches:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">100MB total storage.</strong> Not per user &mdash; total across the entire workspace. A few attachments or documents can eat this up in days. This is the single biggest Free limitation.</li>
            <li><strong className="text-foreground">Limited views.</strong> Gantt charts, timelines, and mind maps are not available on Free. You get list, board, and calendar only.</li>
            <li><strong className="text-foreground">Limited integrations.</strong> Many integrations (Slack, GitHub, etc.) are restricted or unavailable on Free.</li>
            <li><strong className="text-foreground">100 automations per month.</strong> You can set up automations but are capped at 100 runs per month across the workspace.</li>
            <li><strong className="text-foreground">Limited dashboards.</strong> Reporting and custom dashboards are restricted.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Unlimited ($10/member/mo) &mdash; Where Most Teams Start</h3>
          <p className="text-muted mb-4">
            Unlimited removes the storage cap (unlimited storage), unlocks all integrations, adds Gantt charts, unlimited dashboards, and raises automation runs to 1,000/month. At $10/member, it&apos;s one of the cheapest paid PM tiers available.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why this is the sweet spot:</strong> Unlimited storage and full integrations turn ClickUp from a constrained tool into a capable workspace. Most teams hit the 100MB storage wall within their first month and upgrade here.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Business ($19/member/mo) &mdash; SSO, Automations, Time Tracking</h3>
          <p className="text-muted mb-4">
            Business adds Google SSO, advanced automations (25,000 runs/month), time tracking, mind maps, custom exporting, and advanced public sharing. The jump from $10 to $19 is 90%, so evaluate whether you need these specific features.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When it&apos;s worth it:</strong> If your organization requires SSO for compliance, or if you need built-in time tracking (replacing a separate tool like Toggl or Harvest). Advanced automations matter if you&apos;ve hit the 1,000/month Unlimited ceiling.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Enterprise (Custom) &mdash; White Labeling and Control</h3>
          <p className="text-muted mb-4">
            Enterprise adds white labeling, SAML SSO, advanced permissions with conditional logic, enterprise API, custom role creation, and a managed services agreement. Contact sales for pricing.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">100MB storage fills instantly.</strong> The Free tier&apos;s 100MB total storage is the most aggressive storage limit in PM tools. It&apos;s a trial in practice, even though it&apos;s marketed as &quot;forever.&quot;</li>
            <li><strong className="text-foreground">ClickUp AI is a separate cost.</strong> ClickUp Brain (AI features) costs $7/member/month on top of any paid plan. A 10-person team on Unlimited + AI pays $170/month, not $100.</li>
            <li><strong className="text-foreground">Feature overwhelm = onboarding cost.</strong> ClickUp has more features than any competitor. The hidden cost is the time your team spends learning and configuring it. Implementation takes 2&ndash;4x longer than Asana or Monday.</li>
            <li><strong className="text-foreground">Performance with large workspaces.</strong> ClickUp can slow down significantly with thousands of tasks, complex dashboards, or large files. This is a real operational cost that doesn&apos;t appear on the pricing page.</li>
            <li><strong className="text-foreground">Annual billing saves 30%+.</strong> Unlimited drops from $10 to $7/member on annual billing. But that&apos;s a 12-month commitment. For a 20-person team, annual Unlimited is $1,680/year vs $2,400/year monthly.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Free Forever</strong> &mdash; Testing ClickUp, solo use with minimal attachments, or a team evaluating before committing. Expect to upgrade within 1&ndash;2 months once storage runs out.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Unlimited ($10/member)</strong> &mdash; The right tier for 80% of teams. Unlimited storage, integrations, and dashboards cover most project management needs. Start here.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Business ($19/member)</strong> &mdash; Required for SSO compliance, built-in time tracking, or teams that hit the 1,000 automation/month ceiling. Evaluate whether you&apos;d otherwise pay for a separate time tracking tool.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Enterprise (custom)</strong> &mdash; Large organizations needing SAML SSO, white labeling, custom roles, or an MSA. Typically 100+ seats.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Per-Member Math at Team Scale</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Unlimited/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Business/mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 members</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$50</td>
                  <td className="px-4 py-2.5">$95</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 members</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$100</td>
                  <td className="px-4 py-2.5">$190</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 members</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$250</td>
                  <td className="px-4 py-2.5">$475</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50 members</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$500</td>
                  <td className="px-4 py-2.5">$950</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Asana Starter at $13.49/seat/mo</strong> is more expensive per seat but simpler to adopt. If your team doesn&apos;t need ClickUp&apos;s feature density (docs, whiteboards, chat, goals all in one), Asana&apos;s cleaner interface means faster adoption and less training cost.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Notion Plus at $12/user/mo</strong> is the better choice if your primary need is docs + wiki with some project management. Notion is more flexible for content-heavy workflows. ClickUp is better for task-heavy, deadline-driven project management.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is ClickUp Free really free forever?</h3>
                <p className="text-muted">Yes, ClickUp Free has no time limit. You get unlimited tasks and unlimited members at $0 indefinitely. The practical limitation is 100MB total storage, which most teams exhaust within weeks. The free tier works for evaluation or task management without file attachments.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does ClickUp cost for a team of 10?</h3>
                <p className="text-muted">$0 on Free (with 100MB total storage), $100/month on Unlimited, or $190/month on Business. Annual billing reduces Unlimited to $70/month and Business to $120/month for 10 members.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the difference between ClickUp Unlimited and Business?</h3>
                <p className="text-muted">Business adds Google SSO, advanced automations (25,000 vs 1,000 runs/month), time tracking, mind maps, and custom exporting. Most teams don&apos;t need Business unless they require SSO for compliance or built-in time tracking.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">ClickUp vs Notion: which is cheaper?</h3>
                <p className="text-muted">ClickUp Unlimited at $10/member is cheaper than Notion Plus at $12/user. Both have generous free tiers. ClickUp is better for project management; Notion is better for docs and knowledge bases. Choose based on your primary use case, not just price.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["clickup", "asana", "notion"]}
            comparisons={["notion-vs-clickup", "clickup-vs-asana"]}
            guides={["when-clickup-free-hits-limits", "notion-vs-clickup-vs-asana"]}
          />
        </div>
      </article>
    </>
  );
}
