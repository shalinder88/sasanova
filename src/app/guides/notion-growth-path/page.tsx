import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Notion Growth Path: Free → Plus → Business — Team-Size Decisions",
  description:
    "Notion pricing by team size: Free (10 guests, 7-day history), Plus $12/user/mo (unlimited guests, 30-day history), Business $24/user/mo (SAML, 90-day history). Exact upgrade triggers.",
};

export default function NotionGrowthPathPage() {
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
              Notion Growth Path
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Tool Maturity
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Notion Growth Path: Free &rarr; Plus &rarr; Business &mdash; Team-Size Decisions
          </h1>
          <p className="text-lg text-muted">
            Notion Free is genuinely unlimited for individuals &mdash; unlimited pages, unlimited blocks. The limits only bite when you add team members: 10 guest collaborators and 7-day page history on Free. Plus at $12/user/mo removes those limits. Business at $24/user/mo adds SAML SSO and advanced permissions. This guide maps the exact team-size triggers for each upgrade.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Pricing verified from Notion vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">The Three Tiers at a Glance</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Limits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Unlimited pages, 7-day page history, 10 guest collaborators</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                  <td className="px-4 py-2.5">$12/user/mo</td>
                  <td className="px-4 py-2.5">$120/user/yr ($10/user/mo)</td>
                  <td className="px-4 py-2.5">Unlimited file uploads, 30-day history, unlimited guests, custom automations</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                  <td className="px-4 py-2.5">$24/user/mo</td>
                  <td className="px-4 py-2.5">$240/user/yr ($20/user/mo)</td>
                  <td className="px-4 py-2.5">90-day history, advanced permissions, bulk PDF export, SAML SSO</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Unlimited history, SCIM, audit logs, custom contracts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 1: Free &mdash; Unlimited for Individuals</h2>
          <p className="text-muted mb-4">
            Notion Free is one of the best free productivity tiers available. You get unlimited pages, unlimited blocks, databases, and the full block-based editor. For a single person or a very small team, Free works indefinitely.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Free Limits That Matter</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>10 guest collaborators &mdash; the primary team-size constraint. Guests can view and comment but not edit (unless they&apos;re workspace members)</li>
              <li>7-day page history &mdash; if you accidentally delete content, you have 7 days to restore it. After that, it&apos;s gone</li>
              <li>5MB file upload limit &mdash; fine for images and documents, insufficient for large files</li>
              <li>No custom automations &mdash; database automations (auto-assign, status changes) require Plus</li>
              <li>Limited analytics &mdash; no usage insights or page analytics</li>
            </ul>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Plus</p>
            <p className="text-sm text-muted">When you need more than 10 guest collaborators, when 7-day page history feels risky for important content, when you need larger file uploads, or when database automations would save significant time. The most common trigger is simply adding team member #11.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 2: Plus ($12/user/mo) &mdash; The Team Tier</h2>
          <p className="text-muted mb-4">
            Plus removes the guest limit, extends page history to 30 days, adds unlimited file uploads, and enables custom automations. At $12/user/mo ($10/user/mo annual), it&apos;s competitively priced for a team workspace.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">What Plus Adds</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>Unlimited guest collaborators</li>
              <li>30-day page history (up from 7)</li>
              <li>Unlimited file uploads (no size limits)</li>
              <li>Custom automations in databases (auto-assign tasks, change statuses, send notifications)</li>
              <li>Synced databases (pull data from other tools)</li>
            </ul>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Cost by Team Size</h3>
            <div className="overflow-x-auto rounded-lg border border-border mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2 font-semibold text-foreground">Team Size</th>
                    <th className="px-4 py-2 font-semibold text-foreground">Monthly</th>
                    <th className="px-4 py-2 font-semibold text-foreground">Annual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2">5 users</td>
                    <td className="px-4 py-2">$60/mo</td>
                    <td className="px-4 py-2">$600/yr</td>
                  </tr>
                  <tr className="bg-surface-alt/50">
                    <td className="px-4 py-2">10 users</td>
                    <td className="px-4 py-2">$120/mo</td>
                    <td className="px-4 py-2">$1,200/yr</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">25 users</td>
                    <td className="px-4 py-2">$300/mo</td>
                    <td className="px-4 py-2">$3,000/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-accent-light border border-accent/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-foreground font-semibold mb-1">Trigger to Upgrade to Business</p>
            <p className="text-sm text-muted">When your IT/security team requires SAML SSO, when you need advanced permission controls (lock specific pages/databases), when 30-day page history isn&apos;t enough for compliance, or when you need bulk PDF export for documentation. Typically driven by security requirements at 25+ person companies.</p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Stage 3: Business ($24/user/mo) &mdash; Security and Permissions</h2>
          <p className="text-muted mb-4">
            Business doubles the per-user cost from Plus for features that primarily matter to mid-size and enterprise teams: SAML SSO, advanced permissions, 90-day page history, and bulk PDF export.
          </p>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">What Business Adds</h3>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              <li>SAML SSO &mdash; single sign-on required by most enterprise IT policies</li>
              <li>Advanced permissions &mdash; fine-grained page and database access controls</li>
              <li>90-day page history (up from 30) &mdash; better for compliance</li>
              <li>Bulk PDF export &mdash; export entire workspaces as PDFs</li>
              <li>Private teamspaces &mdash; sections only specific teams can access</li>
            </ul>
          </div>
          <div className="bg-surface-alt rounded-lg p-4 border border-border mb-6">
            <h3 className="text-sm font-bold text-foreground mb-2">Do You Actually Need Business?</h3>
            <p className="text-sm text-muted">
              The honest answer: most teams under 25 people do not. SAML SSO is a compliance requirement, not a productivity feature. Advanced permissions only matter if you have content that specific team members genuinely should not see. If you&apos;re upgrading for 90-day history alone, consider whether exporting backups on Plus is sufficient.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Notion vs. ClickUp at Each Stage</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Stage</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notion</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ClickUp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">Unlimited pages, 10 guests</td>
                  <td className="px-4 py-2.5">Unlimited tasks/members, 100MB storage</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Team tier</td>
                  <td className="px-4 py-2.5">Plus $12/user/mo</td>
                  <td className="px-4 py-2.5">Unlimited $10/member/mo (includes time tracking)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business tier</td>
                  <td className="px-4 py-2.5">$24/user/mo (SAML, permissions)</td>
                  <td className="px-4 py-2.5">Business $19/member/mo (SSO, advanced automations)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Notion Free enough for a small team?</h3>
                <p className="text-muted">Yes, for teams of 1&ndash;5 who don&apos;t need guest access beyond 10 people. Notion Free gives unlimited pages and blocks. The 7-day page history and 10-guest limit are the only meaningful constraints.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from Notion Free to Plus?</h3>
                <p className="text-muted">When you need more than 10 guest collaborators, when database automations would save time, or when 7-day page history feels risky. At $12/user/mo ($10/user/mo annual), Plus is affordable for teams of 5&ndash;20.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Notion Business worth $24/user/month?</h3>
                <p className="text-muted">Only if your IT/security team requires SAML SSO or advanced permissions. For teams under 25, Notion Plus ($12/user/mo) covers everything most teams need. Business is a security-driven upgrade, not a productivity-driven one.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does Notion pricing compare to ClickUp?</h3>
                <p className="text-muted">ClickUp Unlimited is $10/member/mo vs Notion Plus at $12/user/mo. ClickUp includes time tracking and more PM features. Notion is better for docs/wiki-heavy teams. ClickUp is better for project management-heavy teams. At the Business tier, ClickUp ($19/member) is cheaper than Notion ($24/user).</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["notion", "clickup"]}
            comparisons={["notion-vs-clickup"]}
            guides={["who-should-not-use-notion", "switch-from-notion-to-clickup", "notion-vs-obsidian-decision"]}
          />
        </div>
      </article>
    </>
  );
}
