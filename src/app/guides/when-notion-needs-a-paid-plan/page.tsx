import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "When Notion's Free Tier Stops Being Enough",
  description:
    "Notion Free gives you unlimited pages but only 7-day history, 10 guests, and 5MB uploads. Plus is $12/user/mo, Business is $24/user/mo. Here are the exact triggers for upgrading.",
};

export default function WhenNotionNeedsPaidPlan() {
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
              When Notion Needs a Paid Plan
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Cost Threshold
            </span>
            <span className="text-[11px] text-muted">10 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            When Notion&apos;s Free Tier Stops Being Enough
          </h1>
          <p className="text-lg text-muted">
            Notion Free is genuinely generous: unlimited pages, unlimited blocks, and a capable workspace for individuals. But three specific limits &mdash; 7-day page history, 10 guest collaborators, and 5MB file uploads &mdash; create hard walls. This guide maps the exact moments you&apos;ll hit them.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Notion and ClickUp vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">What Notion Free Actually Gives You</h2>
          <p className="text-muted mb-4">
            Notion Free is not a trial. It does not expire. For individual use, it&apos;s one of the most capable free productivity tools available:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Unlimited pages and blocks.</strong> No cap on content creation.</li>
            <li><strong className="text-foreground">7-day page history.</strong> You can restore versions from the last 7 days only.</li>
            <li><strong className="text-foreground">10 guest collaborators.</strong> You can invite up to 10 people to view or edit specific pages.</li>
            <li><strong className="text-foreground">5MB file upload limit.</strong> Per file, not total. Images and PDFs under 5MB work fine.</li>
            <li><strong className="text-foreground">API access and basic automations.</strong> You can build integrations and simple automations.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Notion Free</p>
            <p className="text-sm text-muted">
              You&apos;re a solo user or small team (under 10 people) using Notion for personal notes, project tracking, or a knowledge base. You don&apos;t need version history beyond 7 days, don&apos;t upload large files, and don&apos;t share with more than 10 external guests. For this use case, Notion Free is genuinely enough.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Exact Triggers for Upgrading</h2>
          <p className="text-muted mb-4">
            Three specific situations force the upgrade. Each one hits suddenly:
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Trigger 1: You Need Version History Beyond 7 Days</h3>
          <p className="text-muted mb-4">
            On Free, page history only goes back 7 days. If you accidentally delete content or need to reference an older version, it&apos;s gone after a week. Plus extends this to 30 days ($12/user/mo). Business extends to 90 days ($24/user/mo). Enterprise gives unlimited history.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Trigger 2: You Need More Than 10 Guests</h3>
          <p className="text-muted mb-4">
            Notion Free caps guest collaborators at 10. The moment your 11th client, contractor, or collaborator needs access, you need Plus. Plus ($12/user/mo) removes the guest limit entirely &mdash; unlimited guest collaborators.
          </p>

          <h3 className="text-lg font-bold mt-8 mb-3">Trigger 3: You Upload Files Over 5MB</h3>
          <p className="text-muted mb-4">
            The 5MB per-file limit hits designers, agencies, and anyone working with media. A single high-res image or PDF can exceed 5MB. Plus removes this limit with unlimited file uploads.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Notion&apos;s Paid Tiers: What You Actually Get</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Upgrades</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">Unlimited pages, 7-day history, 10 guests</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                  <td className="px-4 py-2.5">$12/user/mo</td>
                  <td className="px-4 py-2.5">$120/user/yr</td>
                  <td className="px-4 py-2.5">30-day history, unlimited guests, unlimited uploads, custom automations</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                  <td className="px-4 py-2.5">$24/user/mo</td>
                  <td className="px-4 py-2.5">$240/user/yr</td>
                  <td className="px-4 py-2.5">90-day history, SAML SSO, advanced permissions, bulk PDF export</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Unlimited history, SCIM, audit logs, custom contracts</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Per-Seat Math: When It Gets Expensive</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plus Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plus Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Business Monthly</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1 user</td>
                  <td className="px-4 py-2.5">$12/mo</td>
                  <td className="px-4 py-2.5">$120/yr</td>
                  <td className="px-4 py-2.5">$24/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                  <td className="px-4 py-2.5">$60/mo</td>
                  <td className="px-4 py-2.5">$600/yr</td>
                  <td className="px-4 py-2.5">$120/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                  <td className="px-4 py-2.5">$120/mo</td>
                  <td className="px-4 py-2.5">$1,200/yr</td>
                  <td className="px-4 py-2.5 text-yellow-400">$240/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                  <td className="px-4 py-2.5 text-yellow-400">$300/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">$3,000/yr</td>
                  <td className="px-4 py-2.5 text-red-400">$600/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: ClickUp</h2>
          <p className="text-muted mb-4">
            ClickUp&apos;s Free Forever plan avoids several of Notion&apos;s free-tier limits:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Notion Free</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">ClickUp Free</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Storage</td>
                  <td className="px-4 py-2.5">5MB per file</td>
                  <td className="px-4 py-2.5">100MB total</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Members</td>
                  <td className="px-4 py-2.5">10 guests</td>
                  <td className="px-4 py-2.5">Unlimited members</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Tasks</td>
                  <td className="px-4 py-2.5">Unlimited pages</td>
                  <td className="px-4 py-2.5">Unlimited tasks</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Paid tier</td>
                  <td className="px-4 py-2.5">$12/user/mo (Plus)</td>
                  <td className="px-4 py-2.5 text-green-400">$10/member/mo (Unlimited)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            ClickUp Unlimited at $10/member/mo ($84/member/yr annually) is $2/member/mo cheaper than Notion Plus, and includes unlimited storage, integrations, dashboards, and Gantt charts. The tradeoff: ClickUp is a project management tool first, not a docs/wiki tool. If your primary need is documentation and knowledge management, Notion is still the better fit.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Notion Free really unlimited?</h3>
                <p className="text-muted">For pages and blocks, yes. The limits are on page history (7 days), guest collaborators (10), and file uploads (5MB per file). These are the walls that push you toward Plus.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use Notion Free for a team?</h3>
                <p className="text-muted">Notion Free is designed for individual use. You can invite up to 10 guests to specific pages, but for proper team workspaces with shared databases and permissions, you need Plus at minimum ($12/user/mo).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When does Notion Business make sense over Plus?</h3>
                <p className="text-muted">Business at $24/user/mo is worth it when you need SAML SSO for security compliance, advanced permissions (restricting who can edit what), 90-day page history, or bulk PDF export. Most small teams are fine on Plus.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Notion charge for guests on paid plans?</h3>
                <p className="text-muted">No. On Plus and above, guest collaborators are unlimited and free. Only workspace members (who can access everything) count toward your per-seat billing.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["notion", "clickup"]}
            comparisons={["notion-vs-clickup"]}
            guides={["when-clickup-free-hits-limits", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
