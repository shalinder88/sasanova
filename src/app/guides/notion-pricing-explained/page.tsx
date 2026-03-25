import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Notion Pricing Explained: When Free Stops Being Enough",
  description:
    "Notion pricing decoded: Free (unlimited pages, 7-day history), Plus $12/user/mo, Business $24/user/mo, Enterprise custom. Guest limits, file uploads, and the exact upgrade triggers.",
};

export default function NotionPricingExplainedPage() {
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
              Notion Pricing Explained
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
            Notion Pricing Explained: When Free Stops Being Enough
          </h1>
          <p className="text-lg text-muted">
            Notion&apos;s free tier is genuinely generous &mdash; unlimited pages, unlimited blocks, and no time limit. But 7-day page history, 10 guest collaborators, and 5MB file uploads create pressure points that force upgrades at specific moments. This guide breaks down every tier and the exact triggers that push teams to pay.
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
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly (per user)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual (per user/mo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Additions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">Unlimited pages, 7-day history, 10 guests, 5MB uploads</td>
                </tr>
                <tr className="bg-surface-alt/50">
                  <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                  <td className="px-4 py-2.5">$12</td>
                  <td className="px-4 py-2.5">$10</td>
                  <td className="px-4 py-2.5">Unlimited file uploads, 30-day history, custom automations</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                  <td className="px-4 py-2.5">$24</td>
                  <td className="px-4 py-2.5">$20</td>
                  <td className="px-4 py-2.5">90-day history, advanced permissions, bulk PDF export, SAML SSO</td>
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
          <p className="text-muted mb-4">
            Notion uses per-user pricing on Plus and above. Free is genuinely free for individuals with no user limit, but the team-oriented features (guest access, version history, file sizes) create natural upgrade pressure as usage grows.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Each Tier Unlocks</h2>
          <h3 className="text-lg font-semibold mt-6 mb-3">Free &mdash; Surprisingly Capable</h3>
          <p className="text-muted mb-4">
            Notion Free gives you unlimited pages, unlimited blocks, and the full block-based editor with databases, boards, timelines, and calendars. For a solo user building a personal knowledge base, you may never need to pay.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The limits that matter:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">7-day page history.</strong> You can only restore previous versions from the last 7 days. Delete something on a Monday, and by the following Monday it&apos;s gone permanently. This is the trigger that forces many power users to Plus.</li>
            <li><strong className="text-foreground">10 guest collaborators.</strong> You can invite up to 10 people outside your workspace as guests. Hit 11 and you need Plus. This is the trigger for teams inviting clients or contractors.</li>
            <li><strong className="text-foreground">5MB file upload limit.</strong> Individual file uploads are capped at 5MB on Free. A single high-res image or PDF can exceed this. Plus removes the limit entirely.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Plus ($12/user/mo) &mdash; The Team Tier</h3>
          <p className="text-muted mb-4">
            Plus lifts file upload limits (unlimited), extends page history to 30 days, adds 100 guest collaborators, and enables custom automations. This is the tier where Notion becomes a proper team workspace.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When it&apos;s worth it:</strong> The moment you have more than 10 guests, need files larger than 5MB, or want version history beyond a week. For teams, Plus is the realistic starting tier.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Business ($24/user/mo) &mdash; Permissions and Compliance</h3>
          <p className="text-muted mb-4">
            Business extends page history to 90 days, adds advanced permissions (private teamspaces, granular access controls), bulk PDF export, and SAML SSO. Guest limit increases to 250.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">When it&apos;s worth it:</strong> When your organization needs SSO for security compliance, or when you have departments that need private workspaces invisible to other teams. The permissions model is the primary driver for Business adoption.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Enterprise (Custom) &mdash; Compliance and Control</h3>
          <p className="text-muted mb-4">
            Enterprise adds unlimited page history, SCIM provisioning (auto user management), audit logs, workspace analytics, and custom contracts. Pricing requires contacting sales and typically involves annual commitments with volume discounts.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Guest Access Trigger</h2>
          <p className="text-muted mb-4">
            Notion&apos;s guest system is the most common upgrade trigger for growing teams. Guests are people outside your workspace who can view or edit specific pages &mdash; clients, freelancers, contractors, advisors.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Free:</strong> 10 guests. Enough for a solo consultant sharing with a few clients.</li>
            <li><strong className="text-foreground">Plus:</strong> 100 guests. Enough for most agencies and small businesses.</li>
            <li><strong className="text-foreground">Business:</strong> 250 guests. For organizations with many external collaborators.</li>
            <li><strong className="text-foreground">Enterprise:</strong> Custom guest limits.</li>
          </ul>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The math:</strong> An agency with 15 clients, each with 1 point of contact, uses all 10 free guest slots plus 5 more. That forces a jump to Plus at $12/user/month for every workspace member &mdash; even if guests were the only reason to upgrade.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Hidden Costs</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Notion AI is a separate add-on.</strong> Notion AI costs $10/user/month on top of your plan (or $8/user/month on annual billing). It&apos;s not included in any tier. A 10-person team on Plus + AI pays $220/month, not $120.</li>
            <li><strong className="text-foreground">Per-user pricing scales linearly.</strong> Unlike tools with flat tiers, every person added to Notion costs the full per-user rate. A 50-person team on Plus pays $600/month ($12 x 50). There are no volume discounts until Enterprise.</li>
            <li><strong className="text-foreground">Guests are free but limited.</strong> Guests don&apos;t cost per-person, but they&apos;re capped per plan. If you need 150 guests, you need Business ($24/user) even if Plus features were otherwise sufficient.</li>
            <li><strong className="text-foreground">No offline access on Free.</strong> Offline mode for mobile and desktop requires a paid plan. If you travel frequently, this alone may force an upgrade.</li>
            <li><strong className="text-foreground">Performance at scale.</strong> Large Notion workspaces (1,000+ pages, complex databases) can become slow. There&apos;s no paid tier that fixes this &mdash; it&apos;s an architectural limitation. Consider this before committing years of content to the platform.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">Which Tier Do You Need?</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Free</strong> &mdash; Solo user or a personal knowledge base. You need unlimited pages, don&apos;t share with more than 10 people, and 7-day history is acceptable.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Plus ($12/user/mo)</strong> &mdash; Small teams (2&ndash;20) who need file uploads, 30-day history, and more than 10 guests. The right tier for most startups and small businesses.
            </p>
            <p className="text-sm text-muted mb-3">
              <strong className="text-foreground">Business ($24/user/mo)</strong> &mdash; Organizations needing SSO, private teamspaces, or advanced permission controls. Typically mid-market companies with compliance requirements.
            </p>
            <p className="text-sm text-muted">
              <strong className="text-foreground">Enterprise (custom)</strong> &mdash; Large organizations needing SCIM provisioning, audit logs, and unlimited version history. Contact sales for pricing.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Per-User Math at Team Scale</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plus/mo</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Business/mo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$60</td>
                  <td className="px-4 py-2.5">$120</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$120</td>
                  <td className="px-4 py-2.5">$240</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$300</td>
                  <td className="px-4 py-2.5">$600</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">50 users</td>
                  <td className="px-4 py-2.5">$0</td>
                  <td className="px-4 py-2.5">$600</td>
                  <td className="px-4 py-2.5">$1,200</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">Cheaper Alternative</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ClickUp Free</strong> gives you unlimited tasks, unlimited members, and 100MB storage at $0. If you primarily need project management (not docs/wiki), ClickUp Free is more generous than Notion Free for teams. ClickUp Unlimited at $10/member/month is $2 less than Notion Plus.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Obsidian</strong> is free for personal use with unlimited local files. If you want a knowledge base without collaboration needs, Obsidian gives you unlimited everything with no cloud dependency. The tradeoff: no real-time collaboration and a steeper learning curve.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Notion really free?</h3>
                <p className="text-muted">Yes. Notion Free gives you unlimited pages, unlimited blocks, and the full editor at $0 with no time limit. The limitations are 7-day page history, 10 guest collaborators, and 5MB file uploads. For solo use, it works indefinitely.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does Notion cost for a team?</h3>
                <p className="text-muted">Plus is $12/user/month ($10/user annual). A 10-person team pays $120/month. Business is $24/user/month ($20/user annual). Add Notion AI at $10/user/month if you want AI features. There are no volume discounts until Enterprise.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Notion AI cost extra?</h3>
                <p className="text-muted">Yes. Notion AI is $10/user/month ($8/user annual) on top of any plan, including Free. It&apos;s not bundled with any tier. A team of 10 on Plus + AI pays $220/month total.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from Notion Free?</h3>
                <p className="text-muted">Upgrade when you hit one of three triggers: you need more than 10 guest collaborators, you need file uploads larger than 5MB, or you&apos;ve been burned by the 7-day page history limit (accidentally deleted something you couldn&apos;t recover). Any one of these justifies Plus at $12/user/month.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["notion", "clickup", "obsidian"]}
            comparisons={["notion-vs-clickup"]}
            guides={["when-notion-needs-a-paid-plan", "notion-vs-obsidian-decision"]}
          />
        </div>
      </article>
    </>
  );
}
