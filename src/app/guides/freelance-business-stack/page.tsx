import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "The Freelancer's Complete Stack Under $30/Month",
  description:
    "CRM, invoicing, scheduling, email, proposals, and automation for freelancers. HubSpot Free CRM + Wave Free + Cal.com Free + Kit Free + Google Docs + Zapier Free = $0/month. When to upgrade each tool.",
  openGraph: {
    title: "The Freelancer's Complete Stack Under $30/Month",
    description:
      "Six essential tools for freelancers, all starting free. Exact upgrade triggers and costs when you outgrow each free tier.",
  },
};

const stackTools = [
  {
    category: "CRM",
    tool: "HubSpot Free CRM",
    slug: "hubspot-crm",
    price: "$0/mo",
    annualPrice: "$0/yr",
    why: "Unlimited contacts, deal pipeline, email tracking, meeting scheduling, and live chat. The free tier handles everything a freelancer needs for client management without paying a cent.",
    upgradeWhen: "Upgrade to HubSpot Starter ($20/seat/mo) when you need email sequences and want to remove HubSpot branding. Or switch to Pipedrive Lite ($14/seat/mo) if you prefer a simpler, visual pipeline.",
    toolPage: "/tools/hubspot-crm",
  },
  {
    category: "Invoicing & Accounting",
    tool: "Wave Starter (Free)",
    slug: "wave",
    price: "$0/mo",
    annualPrice: "$0/yr",
    why: "Unlimited invoicing, basic accounting, and receipt scanning. One of the few genuinely free accounting tools with no contact limits. Revenue comes from payment processing (2.9% + $0.60 per credit card transaction).",
    upgradeWhen: "Upgrade to Wave Pro ($16/mo) when you need automatic bank imports and transaction categorization. Switch to QuickBooks Simple Start ($35/mo) when you need inventory management or multi-currency.",
    toolPage: "/tools/wave",
  },
  {
    category: "Scheduling",
    tool: "Cal.com Free",
    slug: "cal-com",
    price: "$0/mo",
    annualPrice: "$0/yr",
    why: "1 user, unlimited event types, unlimited bookings. Open source. Unlike Calendly Free (1 event type only), Cal.com gives you unlimited event types at $0. That means separate booking pages for discovery calls, project kickoffs, and check-ins.",
    upgradeWhen: "Upgrade to Cal.com Team ($15/seat/mo) only if you hire subcontractors and need round-robin scheduling. Most freelancers never need to upgrade.",
    toolPage: "/tools/cal-com",
  },
  {
    category: "Email Marketing",
    tool: "Kit Newsletter (Free)",
    slug: "convertkit",
    price: "$0/mo",
    annualPrice: "$0/yr",
    why: "Up to 10,000 subscribers with unlimited sends, landing pages, and forms. The most generous free tier for creator-focused email. Build your audience while you freelance.",
    upgradeWhen: "Upgrade to Kit Creator ($39/mo) when you need automated email sequences and integrations. Until then, the free tier handles broadcast emails and basic subscriber management.",
    toolPage: "/tools/convertkit",
  },
  {
    category: "Proposals & Contracts",
    tool: "Google Docs",
    slug: null,
    price: "$0/mo",
    annualPrice: "$0/yr",
    why: "Free, collaborative, and everyone already has a Google account. Create proposal templates, SOWs, and contracts. Share view-only links for a professional presentation.",
    upgradeWhen: "Switch to PandaDoc Essentials ($35/seat/mo) when you need e-signatures, document analytics (who viewed what), and template libraries. Or use PandaDoc Free eSign ($0) for unlimited e-signatures without the editor.",
    toolPage: null,
  },
  {
    category: "Automation",
    tool: "Zapier Free",
    slug: "zapier",
    price: "$0/mo",
    annualPrice: "$0/yr",
    why: "100 tasks/month with unlimited Zaps (two-step only). Enough to automate your core workflows: new form submission sends to CRM, new client triggers a welcome email, invoice paid updates your pipeline.",
    upgradeWhen: "Upgrade to Zapier Professional ($29.99/mo) when you need multi-step Zaps or exceed 100 tasks/month. Or switch to Make Free (1,000 ops/month, 2 scenarios) for more volume at $0.",
    toolPage: "/tools/zapier",
  },
];

export default function FreelanceBusinessStack() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Freelance Business Stack</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Real-World Stack
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            The Freelancer&apos;s Complete Stack Under $30/Month
          </h1>
          <p className="text-lg text-muted">
            You don&apos;t need to spend $200/month on software to run a freelance business. Here&apos;s a complete stack &mdash; CRM, invoicing, scheduling, email, proposals, and automation &mdash; that starts at $0 and only costs money when your revenue justifies it.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="All free tiers verified against vendor pricing pages"
          sourceCount={6}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Summary Box */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The $0 freelance stack
            </p>
            <p className="text-sm text-muted">
              HubSpot Free CRM + Wave Free + Cal.com Free + Kit Free + Google Docs + Zapier Free. Total: $0/month. Every tool on this list has a genuinely useful free tier with no trial expiration.
            </p>
          </div>

          {/* Stack Breakdown */}
          {stackTools.map((tool, idx) => (
            <section key={tool.category} className="mb-10">
              <h2 className="text-xl font-bold mt-10 mb-2">
                {idx + 1}. {tool.category}: {tool.tool}
              </h2>
              <div className="border border-border rounded-xl p-5 bg-surface mb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-lg font-bold text-foreground">{tool.tool}</p>
                    {tool.toolPage && (
                      <p className="text-xs text-muted mt-0.5">
                        <Link href={tool.toolPage} className="text-accent hover:underline">
                          Full review and pricing &rarr;
                        </Link>
                      </p>
                    )}
                  </div>
                  <span className="text-sm font-mono text-green-400 whitespace-nowrap">
                    {tool.price}
                  </span>
                </div>
                <p className="text-sm text-muted mb-3">{tool.why}</p>
                <div className="border-t border-border pt-3">
                  <p className="text-xs text-muted">
                    <strong className="text-foreground">When to upgrade:</strong> {tool.upgradeWhen}
                  </p>
                </div>
              </div>
            </section>
          ))}

          {/* Cost Comparison Table */}
          <h2 className="text-xl font-bold mt-14 mb-4">Monthly Cost at Three Revenue Stages</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pre-Revenue ($0)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">$3K/mo Revenue</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">$10K/mo Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                  <td className="px-4 py-2.5 text-green-400">HubSpot Free ($0)</td>
                  <td className="px-4 py-2.5">HubSpot Free ($0)</td>
                  <td className="px-4 py-2.5">Pipedrive Lite ($14)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Invoicing</td>
                  <td className="px-4 py-2.5 text-green-400">Wave Free ($0)</td>
                  <td className="px-4 py-2.5">Wave Free ($0)</td>
                  <td className="px-4 py-2.5">Wave Pro ($16)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scheduling</td>
                  <td className="px-4 py-2.5 text-green-400">Cal.com Free ($0)</td>
                  <td className="px-4 py-2.5">Cal.com Free ($0)</td>
                  <td className="px-4 py-2.5">Cal.com Free ($0)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                  <td className="px-4 py-2.5 text-green-400">Kit Free ($0)</td>
                  <td className="px-4 py-2.5">Kit Free ($0)</td>
                  <td className="px-4 py-2.5">Kit Creator ($39)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Proposals</td>
                  <td className="px-4 py-2.5 text-green-400">Google Docs ($0)</td>
                  <td className="px-4 py-2.5">Google Docs ($0)</td>
                  <td className="px-4 py-2.5">PandaDoc Essentials ($35)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                  <td className="px-4 py-2.5 text-green-400">Zapier Free ($0)</td>
                  <td className="px-4 py-2.5">Zapier Free ($0)</td>
                  <td className="px-4 py-2.5">Make Core ($10.59)</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-bold text-foreground">Total</td>
                  <td className="px-4 py-2.5 font-bold text-green-400">$0/mo</td>
                  <td className="px-4 py-2.5 font-bold text-green-400">$0/mo</td>
                  <td className="px-4 py-2.5 font-bold text-amber-400">$114.59/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why Cal.com over Calendly?</h3>
              <p className="text-sm text-muted">
                Calendly Free limits you to 1 event type. Cal.com Free gives you unlimited event types and unlimited bookings. For a freelancer with different meeting types (discovery, kickoff, check-in), Cal.com is objectively more generous at $0. Calendly Standard is $12/user/mo if you prefer its polish.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Why not use a CRM with built-in invoicing?</h3>
              <p className="text-sm text-muted">
                No free CRM includes real invoicing. HubSpot Free handles client relationships; Wave Free handles money. They do different things well. Trying to force one tool to do both means paying $50+/month for a mediocre version of each.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">When does this stack stop being free?</h3>
              <p className="text-sm text-muted">
                Most freelancers can run on $0/month until they hit $5K+/month in revenue. The first upgrade is usually either email (Kit Creator at $39/mo for sequences) or CRM (Pipedrive Lite at $14/seat/mo for a visual pipeline). Neither is urgent until you have 20+ active client conversations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Can I replace Zapier with Make on the free tier?</h3>
              <p className="text-sm text-muted">
                Yes. Make Free gives you 1,000 operations/month vs Zapier&apos;s 100 tasks/month. Make counts operations per step, so a 5-step scenario uses 5 ops per run. Still, 1,000 ops goes much further than 100 tasks. The trade-off: Make has a steeper learning curve.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["hubspot-crm", "wave", "cal-com", "convertkit", "zapier", "pandadoc", "pipedrive", "make"]}
          comparisons={["hubspot-crm-vs-pipedrive", "zapier-vs-make"]}
          guides={[
            "best-crm-freelancers-consultants",
            "accounting-freelancers",
            "solo-founder-stack",
            "best-free-tools-startups",
            "when-hubspot-stops-being-cheap",
            "scheduling-tool-comparison",
          ]}
        />
      </article>
    </>
  );
}
