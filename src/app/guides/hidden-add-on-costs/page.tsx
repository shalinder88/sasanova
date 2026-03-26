import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "SaaS Add-On Costs Nobody Warns You About",
  description:
    "Hidden add-on costs: Pipedrive LeadBooster and Web Visitors. HubSpot's separate Marketing + Sales Hubs. Notion AI ($10/user). ClickUp Brain ($7/member). Zapier premium apps. Exact prices from vendor pages.",
  openGraph: {
    title: "SaaS Add-On Costs Nobody Warns You About",
    description:
      "The add-ons, modules, and AI features that double your SaaS bill. Every price verified against vendor pages.",
  },
};

const addOnTraps = [
  {
    tool: "Pipedrive",
    slug: "pipedrive",
    basePlan: "Growth: $39/seat/mo",
    addOns: [
      { name: "LeadBooster", price: "$32.50/mo", what: "Chatbot, live chat, prospector, web forms. Not included in any plan." },
      { name: "Web Visitors", price: "$41/mo", what: "Identify companies visiting your website. Separate from LeadBooster." },
      { name: "Smart Docs", price: "$32.50/mo", what: "Document tracking, e-signatures, autofill from CRM fields." },
      { name: "Campaigns", price: "$13.33/mo", what: "Email marketing campaigns. Not included until Ultimate ($99/seat)." },
      { name: "Projects", price: "$6.67/mo", what: "Project management add-on. Separate from deal management." },
    ],
    realCost: "Pipedrive Growth ($39/seat) + LeadBooster ($32.50) + Web Visitors ($41) = $112.50/mo for one seat. That is 189% more than the advertised $39/seat price.",
    toolPage: "/tools/pipedrive",
  },
  {
    tool: "HubSpot",
    slug: "hubspot-crm",
    basePlan: "Starter: $20/seat/mo per Hub",
    addOns: [
      { name: "Marketing Hub Professional", price: "$890/mo flat", what: "Marketing automation, ABM, custom reporting. $3,000 mandatory onboarding." },
      { name: "Sales Hub Professional", price: "$890/mo flat", what: "Sequences, forecasting, playbooks. $3,000 mandatory onboarding." },
      { name: "Service Hub Professional", price: "$890/mo flat", what: "Ticketing, knowledge base, customer portal. Separate onboarding fee." },
      { name: "Operations Hub Starter", price: "$20/mo", what: "Data sync, custom properties, list segmentation." },
      { name: "CMS Hub Professional", price: "$500/mo", what: "Website pages, blog, SEO recommendations." },
    ],
    realCost: "HubSpot with Sales + Marketing Professional: $890 + $890 = $1,780/mo ($21,360/yr) plus $6,000 in onboarding fees. Year-one cost: $27,360. That is 7,400% more than the $20/seat Starter that got you in the door.",
    toolPage: "/tools/hubspot-crm",
  },
  {
    tool: "Notion",
    slug: "notion",
    basePlan: "Plus: $12/user/mo",
    addOns: [
      { name: "Notion AI", price: "$10/user/mo", what: "AI writing, summarization, autofill, Q&A across your workspace. Billed per user on top of base plan." },
    ],
    realCost: "Notion Plus + AI for a 5-person team: ($12 + $10) x 5 = $110/mo. The AI add-on nearly doubles the per-user cost from $12 to $22. For comparison, ClickUp includes basic AI in its Unlimited plan ($10/seat).",
    toolPage: "/tools/notion",
  },
  {
    tool: "ClickUp",
    slug: "clickup",
    basePlan: "Unlimited: $10/seat/mo",
    addOns: [
      { name: "ClickUp Brain", price: "$7/member/mo", what: "AI assistant for tasks, docs, and projects. Writing, summarization, and standup generation." },
    ],
    realCost: "ClickUp Unlimited + Brain for 5 members: ($10 + $7) x 5 = $85/mo. Brain increases per-seat cost by 70%. Basic AI features (text generation) are included in Unlimited, but Brain adds workspace-wide AI knowledge and standup reports.",
    toolPage: "/tools/clickup",
  },
  {
    tool: "Zapier",
    slug: "zapier",
    basePlan: "Professional: $29.99/mo (750 tasks)",
    addOns: [
      { name: "Additional tasks", price: "Varies by volume", what: "750 tasks included. 2,000 tasks: $103.50/mo (Team plan). Task overages are not possible; you hit the limit and Zaps stop." },
      { name: "Premium apps", price: "No extra charge (but require paid plan)", what: "Premium apps (Salesforce, Shopify, QuickBooks) require Professional plan minimum. Free plan cannot use premium app integrations." },
      { name: "Tables", price: "Included in paid plans", what: "Built-in database, but row limits scale by plan. Professional: 10,000 rows." },
      { name: "Multi-step Zaps", price: "Paid plans only", what: "Free plan: two-step only. Each step in a multi-step Zap consumes one task. A 5-step Zap uses 5 tasks per run." },
    ],
    realCost: "A 5-step Zap running 150 times/month uses 750 tasks &mdash; the entire Professional plan allowance on a single automation. Real-world teams with 5+ active multi-step Zaps typically need Team ($103.50/mo) or higher.",
    toolPage: "/tools/zapier",
  },
];

export default function HiddenAddOnCosts() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Hidden Add-On Costs</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Pricing Deep Dive
            </span>
            <span className="text-[11px] text-muted">14 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Add-On Costs Nobody Warns You About
          </h1>
          <p className="text-lg text-muted">
            The price on the SaaS pricing page is the starting price. The real cost includes add-ons, AI features, premium integrations, and module upgrades that can double or triple your bill. Here&apos;s what five major tools actually charge once you add the features you need.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="All add-on pricing verified against vendor pricing pages"
          sourceCount={5}
          reviewer="team"
        />

        <div className="prose prose-invert max-w-none mt-10">
          {/* Summary */}
          <div className="border border-accent/30 bg-accent/5 rounded-xl p-5 mb-10">
            <p className="text-sm text-foreground font-semibold mb-1">
              The add-on tax
            </p>
            <p className="text-sm text-muted">
              Pipedrive add-ons can add $126/mo to a $39/seat plan (323% increase). HubSpot&apos;s Hub-stacking model can turn a $20/seat CRM into a $1,780/mo platform. Notion AI ($10/user) nearly doubles the Plus plan cost. Always calculate the total cost with the features you actually need.
            </p>
          </div>

          {/* Tool Breakdowns */}
          {addOnTraps.map((trap) => (
            <section key={trap.slug} className="mb-12">
              <h2 className="text-xl font-bold mt-10 mb-2">{trap.tool}</h2>
              <p className="text-sm text-muted mb-4">Base plan: {trap.basePlan}</p>

              <div className="overflow-x-auto rounded-lg border border-border mt-3 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-surface-alt text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground">Add-On</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">What It Does</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {trap.addOns.map((addon) => (
                      <tr key={addon.name}>
                        <td className="px-4 py-2.5 font-medium text-foreground">{addon.name}</td>
                        <td className="px-4 py-2.5 text-red-400">{addon.price}</td>
                        <td className="px-4 py-2.5 text-muted">{addon.what}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border border-border rounded-xl p-4 bg-surface mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-1">Real cost</p>
                <p className="text-sm text-muted">{trap.realCost}</p>
                <p className="text-xs text-muted mt-2">
                  <Link href={trap.toolPage} className="text-accent hover:underline">
                    Full {trap.tool} pricing breakdown &rarr;
                  </Link>
                </p>
              </div>
            </section>
          ))}

          {/* How to Avoid */}
          <h2 className="text-xl font-bold mt-14 mb-4">How to Avoid the Add-On Trap</h2>
          <div className="border border-border rounded-xl p-5 bg-surface mb-8 space-y-3 text-sm text-muted">
            <p><strong className="text-foreground">1. List your required features first.</strong> Before looking at pricing pages, write down the 5-10 features you actually need. Then check which plan includes them all &mdash; including add-ons.</p>
            <p><strong className="text-foreground">2. Calculate the all-in price.</strong> Base plan + add-ons + per-seat math at your team size. Many tools look cheap at 1 seat but expensive at 5-10.</p>
            <p><strong className="text-foreground">3. Check if competitors include the feature.</strong> Pipedrive charges $32.50/mo for LeadBooster (chatbot). HubSpot Free includes a basic chatbot at $0. ClickUp includes basic AI in Unlimited ($10/seat) where Notion charges $10/user extra.</p>
            <p><strong className="text-foreground">4. Ask about bundles.</strong> Some vendors offer discounts when you buy multiple add-ons or modules together. HubSpot&apos;s CRM Suite bundles all Hubs at a discount vs buying individually.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-xl font-bold mt-14 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Are AI add-ons worth the extra cost?</h3>
              <p className="text-sm text-muted">
                It depends on usage. Notion AI ($10/user/mo) is worth it if your team uses AI writing and summarization daily. ClickUp Brain ($7/member/mo) is worth it for automated standups and AI project summaries. Both are expensive if your team rarely uses AI features &mdash; test during the trial before committing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Can I negotiate add-on pricing?</h3>
              <p className="text-sm text-muted">
                On enterprise plans, yes. Self-serve add-ons (Pipedrive, Notion) are usually fixed-price. HubSpot&apos;s onboarding fees and Hub bundles are often negotiable, especially at end of quarter.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Which tools have the most transparent all-in pricing?</h3>
              <p className="text-sm text-muted">
                Plausible, Cal.com, beehiiv, and Carrd have the most transparent pricing &mdash; what you see is what you pay. No add-ons, no per-feature charges, no hidden modules. All features at a tier are included.
              </p>
            </div>
          </div>
        </div>

        <RelatedLinks
          tools={["pipedrive", "hubspot-crm", "notion", "clickup", "zapier"]}
          comparisons={["hubspot-crm-vs-pipedrive", "notion-vs-clickup", "zapier-vs-make"]}
          guides={[
            "saas-pricing-traps-2026",
            "enterprise-pricing-trap",
            "pipedrive-pricing-explained",
            "clickup-pricing-explained",
            "notion-pricing-explained",
            "zapier-hidden-costs",
          ]}
        />
      </article>
    </>
  );
}
