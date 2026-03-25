import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Building Client Portals Without Custom Development",
  description:
    "Use Notion as a client portal, ClickUp for shared projects, and HubSpot for client CRM views. Exact pricing and setup strategies for agencies and service businesses.",
};

export default function BestToolsForClientPortalsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Client Portals</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Best For Use Case
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Building Client Portals Without Custom Development
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Custom client portals cost $10K&ndash;$50K to build. These three tools give you
            80% of the functionality for under $100/month &mdash; and your clients can actually use them.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>13 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Three Approaches to Client Portals</h2>
            <p className="text-muted leading-relaxed mb-3">
              Every client portal needs three things: a place for shared documents, a way to track
              project progress, and a CRM view for relationship management. Instead of building
              custom software, you can combine existing tools.
            </p>
          </section>

          {/* Notion as Portal */}
          <section>
            <h2 className="text-xl font-bold mb-4">Notion as a Client Portal</h2>
            <p className="text-muted leading-relaxed mb-4">
              Notion&apos;s guest access and database views make it a surprisingly effective client
              portal. Create a template workspace per client with project dashboards, shared
              documents, and feedback databases.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Client Portal Fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">10 guest collaborators max &mdash; works for 1&ndash;3 clients</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/user/mo</td>
                    <td className="px-4 py-2.5 text-muted">100 guests, custom automations, 30-day history</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                    <td className="px-4 py-2.5 text-muted">$24/user/mo</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">250 guests, advanced permissions &mdash; best for agencies</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ClickUp for Shared Projects */}
          <section>
            <h2 className="text-xl font-bold mb-4">ClickUp for Shared Project Tracking</h2>
            <p className="text-muted leading-relaxed mb-4">
              ClickUp&apos;s guest access and custom views let clients see project status without
              seeing your internal work. Use Spaces per client with filtered views.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Client Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free Forever</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">100MB storage, unlimited tasks/members, limited views</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/member/mo ($7 annual)</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited storage, integrations, dashboards, Gantt</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Business</td>
                    <td className="px-4 py-2.5 text-muted">$19/member/mo ($12 annual)</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Google SSO, advanced automations, time tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* HubSpot for CRM */}
          <section>
            <h2 className="text-xl font-bold mb-4">HubSpot for Client CRM View</h2>
            <p className="text-muted leading-relaxed mb-4">
              HubSpot&apos;s free CRM gives you contact management, deal tracking, and client
              communication history. The customer portal feature (on Service Hub) lets clients
              submit tickets and check status.
            </p>

            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Portal Features</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Free Tools</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">CRM, contacts, deals, basic email (2,000/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Remove branding, 1,000 marketing contacts, email reporting</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Professional</td>
                    <td className="px-4 py-2.5 text-muted">$890/mo (flat)</td>
                    <td className="px-4 py-2.5 text-muted">Full customer portal, automation, custom reporting</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-accent-light/40 border border-accent/20 rounded-lg p-4 my-4">
              <p className="text-sm text-foreground">
                <strong>Reality check:</strong> HubSpot&apos;s customer portal requires Professional at $890/mo.
                For most agencies under 20 clients, Notion + ClickUp is more cost-effective as a client-facing portal.
              </p>
            </div>
          </section>

          {/* Recommended Combos */}
          <section>
            <h2 className="text-xl font-bold mb-4">Recommended Combinations</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1&ndash;5 clients, solo</td>
                    <td className="px-4 py-2.5 text-muted">Notion Free + HubSpot Free</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5&ndash;15 clients, small team</td>
                    <td className="px-4 py-2.5 text-muted">Notion Plus + ClickUp Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$22/user/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">15+ clients, agency</td>
                    <td className="px-4 py-2.5 text-muted">Notion Business + ClickUp Business + HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">$63/user/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Can clients edit documents in Notion?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Yes. Guest collaborators can edit pages you share with them. You control permissions
                  per page or per workspace section. Clients cannot see internal pages.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do clients need to pay for ClickUp?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  No. ClickUp guest accounts are free. Guests can view tasks, leave comments, and
                  upload files without a paid seat. Only your team members need paid seats.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Is HubSpot Free really enough for client management?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  HubSpot Free handles unlimited contacts, basic deal pipeline, and email tracking.
                  The limitation is HubSpot branding on forms and emails. For CRM-only use without
                  a client-facing portal, Free is genuinely enough for most agencies.
                </div>
              </details>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["notion", "clickup", "hubspot-crm"]}
            comparisons={["notion-vs-clickup"]}
            guides={["agency-operations-stack", "best-crm-agencies"]}
          />
        </div>
      </article>
    </>
  );
}
