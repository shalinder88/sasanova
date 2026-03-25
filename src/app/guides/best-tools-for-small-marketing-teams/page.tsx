import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Marketing Team Stack for 3-5 People Under $300/Month",
  description:
    "The exact marketing team software stack under $300/month. ActiveCampaign Starter $15/mo, HubSpot Starter $20/seat x 3 = $60/mo, Make Core $10.59/mo, Plausible $9/mo, Buffer Essentials $6/channel x 4 = $24/mo, Canva Pro $15/mo. Total: ~$133.59/mo. Verified pricing.",
  openGraph: {
    title: "Marketing Team Stack for 3-5 People Under $300/Month",
    description:
      "Email, CRM, automation, analytics, social media, and design for marketing teams of 3-5. Total: ~$133.59/month with verified pricing.",
  },
};

export default function BestToolsForSmallMarketingTeams() {
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
              Best Tools for Small Marketing Teams
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Persona Stack
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Marketing Team Stack for 3&ndash;5 People Under $300/Month
          </h1>
          <p className="text-lg text-muted">
            A marketing team of 3&ndash;5 needs email marketing, CRM, workflow automation, analytics, social media scheduling, and design tools. Most teams overspend by choosing enterprise tiers or all-in-one platforms too early. Here&apos;s a complete stack for ~$133.59/month &mdash; every price verified.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Marketing Team Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Email Marketing</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/activecampaign" className="text-accent hover:underline">ActiveCampaign</Link></td>
                  <td className="px-4 py-2.5 text-muted">Starter (1,000 contacts)</td>
                  <td className="px-4 py-2.5 text-muted">$15/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/hubspot-crm" className="text-accent hover:underline">HubSpot CRM</Link></td>
                  <td className="px-4 py-2.5 text-muted">Starter (3 seats)</td>
                  <td className="px-4 py-2.5 text-muted">$60/mo ($20/seat x 3)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/make" className="text-accent hover:underline">Make</Link></td>
                  <td className="px-4 py-2.5 text-muted">Core</td>
                  <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/plausible" className="text-accent hover:underline">Plausible</Link></td>
                  <td className="px-4 py-2.5 text-muted">Starter</td>
                  <td className="px-4 py-2.5 text-muted">$9/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Social Media</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/buffer" className="text-accent hover:underline">Buffer</Link></td>
                  <td className="px-4 py-2.5 text-muted">Essentials (4 channels)</td>
                  <td className="px-4 py-2.5 text-muted">$24/mo ($6/channel x 4)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Design</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/canva" className="text-accent hover:underline">Canva</Link></td>
                  <td className="px-4 py-2.5 text-muted">Pro</td>
                  <td className="px-4 py-2.5 text-muted">$15/mo</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total Monthly Cost</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">~$133.59/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-muted mb-4">
            That&apos;s $133.59/month for a complete marketing stack covering email, CRM, automation, analytics, social, and design. For comparison, HubSpot Marketing Hub Professional alone costs $890/month.
          </p>

          {/* ── Email Marketing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Email Marketing: ActiveCampaign Starter ($15/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ActiveCampaign Starter at $15/mo</strong> gives you email marketing, basic automations, and 1,000 contacts. ActiveCampaign has one of the most powerful automation builders in the industry. Build welcome sequences, lead nurture flows, and re-engagement campaigns with visual branching logic.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why not HubSpot for email too?</strong> HubSpot Free includes email (2,000 sends/mo with branding), but the automation capabilities are locked behind Professional ($890/mo). ActiveCampaign Starter gives you automation at $15/mo &mdash; a 98% savings over HubSpot Professional for the feature that matters most.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Scaling note:</strong> ActiveCampaign pricing increases with contacts. At 2,500 contacts, Starter is ~$39/mo. At 10,000, it&apos;s ~$79/mo. Watch your contact count and clean your list regularly.
          </p>

          {/* ── CRM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">CRM: HubSpot Starter ($20/seat x 3 = $60/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">HubSpot Starter at $20/seat/mo</strong> removes HubSpot branding, adds email health reporting, and gives each team member their own login. For 3 marketing team members, that&apos;s $60/mo. You get unlimited contacts, deal pipeline, meeting scheduling, and basic reporting.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Alternative:</strong> Start with HubSpot Free ($0/mo, unlimited contacts) if your team can share a single login and tolerate HubSpot branding on forms and email. Upgrade to Starter when you need individual user tracking and cleaner branding.
          </p>

          {/* ── Automation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Automation: Make Core ($10.59/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Make Core at $10.59/mo</strong> connects ActiveCampaign, HubSpot, Buffer, and everything else with 10,000 operations/month. Sync new HubSpot contacts to ActiveCampaign, post new blog content to social media, update analytics dashboards, and trigger Slack notifications for new leads.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why Make over Zapier?</strong> Zapier Professional costs $29.99/mo for 750 tasks. Make Core gives 10,000 operations for $10.59/mo. For marketing teams running multiple automations daily, Make&apos;s pricing advantage is significant. Pro ($18.82/mo) adds custom functions and debugging tools.
          </p>

          {/* ── Analytics ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Analytics: Plausible Starter ($9/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Plausible Starter at $9/mo</strong> gives you privacy-friendly web analytics for 1 site with 10K pageviews/month. The single-page dashboard shows traffic sources, top pages, UTM parameters, and goal conversions. No cookie consent banner needed. The entire marketing team can share one dashboard link.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Growth tier ($14/mo)</strong> adds 3 sites and 3 team members with shared links and embedded dashboards &mdash; better for teams managing multiple properties.
          </p>

          {/* ── Social ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Social Media: Buffer Essentials ($6/channel x 4 = $24/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Buffer Essentials at $6/channel/mo</strong> gives unlimited scheduled posts, engagement tools, and 30-day analytics per channel. A typical marketing team manages 4 channels (LinkedIn, Twitter/X, Instagram, Facebook) = $24/mo. Buffer&apos;s per-channel pricing means you only pay for what you use.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Buffer Free</strong> covers 3 channels with 10 posts per channel. Use the free tier to test Buffer before committing. Team ($12/channel/mo) adds unlimited users, approval workflows, and custom permissions.
          </p>

          {/* ── Design ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Design: Canva Pro ($15/mo)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Canva Pro at $15/mo</strong> gives one user access to 140M+ premium assets, 1TB storage, Brand Kit, background remover, and 500 AI credits/month. Create social media graphics, email headers, presentation decks, and marketing collateral without a designer.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">For teams:</strong> Canva Teams ($10/user/mo, min 3 users = $30/mo) adds team workspace, design approvals, and 1TB/member. If multiple team members create graphics, Teams is more cost-effective than sharing a single Pro account.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">HubSpot Marketing Hub Professional ($890/mo):</strong> The classic overspend. ActiveCampaign Starter ($15/mo) gives you automation. HubSpot Starter ($60/mo for 3 seats) gives you CRM. Together: $75/mo vs $890/mo for overlapping features.</li>
            <li><strong className="text-foreground">Hootsuite ($149/mo+):</strong> Hootsuite removed its free tier and now starts at $149/mo. Buffer Essentials at $24/mo for 4 channels does the same job for social scheduling at a fraction of the cost.</li>
            <li><strong className="text-foreground">Sprout Social ($249/mo):</strong> Enterprise-grade social management. Not justified for teams under 10 managing fewer than 10 social accounts.</li>
            <li><strong className="text-foreground">Semrush/Ahrefs ($99+/mo):</strong> Powerful SEO tools, but a marketing team should nail content creation and distribution before investing in advanced SEO tooling. Google Search Console is free and sufficient initially.</li>
            <li><strong className="text-foreground">Figma for marketing graphics:</strong> Figma is for UI/UX design. Canva is built for marketing graphics. Don&apos;t make your marketers learn a design tool built for designers.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Marketing Teams Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Going all-in on HubSpot Professional.</strong> The $890/mo Marketing Hub Professional tier is designed for companies with 20+ person marketing teams. A team of 3&ndash;5 gets 90% of the value from HubSpot Starter + ActiveCampaign Starter for $75/mo.</li>
            <li><strong className="text-foreground">Using Zapier for everything.</strong> At 750 tasks/mo for $29.99/mo, Zapier gets expensive for marketing teams running daily automations. Make Core offers 13x more operations per dollar.</li>
            <li><strong className="text-foreground">Not tracking UTM parameters.</strong> Every social post, email link, and ad should have UTM tags. Plausible tracks these automatically. Without UTMs, you can&apos;t attribute traffic to campaigns.</li>
            <li><strong className="text-foreground">Paying for design when Canva Free works.</strong> Canva Free has 2M+ templates and basic features. Test the free tier before committing to Pro ($15/mo). Pro&apos;s Brand Kit and premium assets are the main reasons to upgrade.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Can I start cheaper?</h3>
          <p className="text-muted mb-4">
            Yes. Use HubSpot Free CRM ($0), Brevo Free email (300/day), Make Free (1,000 ops, 2 scenarios), Plausible trial, Buffer Free (3 channels, 10 posts), and Canva Free. Total: $0/mo. Upgrade each tool individually as you hit limits.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Why ActiveCampaign instead of Mailchimp?</h3>
          <p className="text-muted mb-4">
            ActiveCampaign Starter ($15/mo at 1,000 contacts) includes automation. Mailchimp Standard ($20/mo at 500 contacts) also includes automation but at a higher price with fewer contacts. ActiveCampaign&apos;s automation builder is more powerful, and pricing is more transparent as you scale.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When does this stack become insufficient?</h3>
          <p className="text-muted mb-4">
            When your marketing team exceeds 5 people, your contact list exceeds 10,000, or you need advanced attribution modeling. At that point, evaluate HubSpot Professional ($890/mo) as a consolidated platform or upgrade individual tools (ActiveCampaign Plus at $49/mo, Plausible Business at $19/mo).
          </p>
        </div>

        <RelatedLinks
          tools={["activecampaign", "hubspot-crm", "make", "plausible", "buffer", "canva"]}
          comparisons={["make-vs-zapier", "activecampaign-vs-mailchimp"]}
          guides={[
            "best-automation-marketing-teams",
            "when-hubspot-stops-being-cheap",
            "social-media-management-stack",
            "design-tools-non-designers",
            "choosing-analytics-tool",
            "automation-zapier-vs-make-vs-n8n",
          ]}
        />
      </article>
    </>
  );
}
