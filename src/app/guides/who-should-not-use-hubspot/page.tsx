import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Who Should NOT Use HubSpot (And What to Use Instead)",
  description:
    "HubSpot is great — for the right team. Here are 5 situations where HubSpot is the wrong choice, with specific alternatives and real pricing for each case.",
};

export default function WhoShouldNotUseHubspot() {
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
              Who Should NOT Use HubSpot
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Anti-Recommendation
            </span>
            <span className="text-[11px] text-muted">12 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Who Should NOT Use HubSpot (And What to Use Instead)
          </h1>
          <p className="text-lg text-muted">
            HubSpot is recommended everywhere because it has one of the highest affiliate payouts in SaaS. That doesn&apos;t mean it&apos;s right for you. Here are the five situations where HubSpot is genuinely the wrong choice &mdash; and what to use instead, with real pricing.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Quick Decision Box ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">The Quick Version</p>
            <p className="text-sm text-muted">
              HubSpot is built for marketing-led B2B companies with 5&ndash;50 employees who want CRM, email marketing, and sales tools in one platform. If that&apos;s not you, you&apos;re probably overpaying or fighting the tool. Read on for specifics.
            </p>
          </div>

          {/* ── Case 1: Solo Founders ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">1. Solo Founders and One-Person Businesses</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s free CRM looks attractive on paper: unlimited contacts, deal tracking, email logging. But the moment you need anything beyond basics &mdash; email sequences, more than 5 templates, custom reporting &mdash; you hit a paywall. Starter is $20/seat/month (manageable), but the features most solo founders actually need live in Professional at $890/month.
          </p>
          <p className="text-muted mb-4">
            The bigger problem: HubSpot is designed for teams. The interface has team permissions, approval workflows, lead rotation, and multi-pipeline management that a solo operator will never use. Every click navigates past features built for someone else.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Pipedrive</strong> &mdash; Starts at $14/seat/month (Essential). Built specifically for sales-focused individuals and small teams. Visual pipeline, simple UI, no feature bloat. <Link href="/tools/pipedrive" className="text-accent hover:underline">See Pipedrive review</Link></li>
              <li><strong className="text-foreground">Folk</strong> &mdash; Starts at $20/seat/month. Designed for relationship-driven solo operators (consultants, founders, VCs). Imports contacts from LinkedIn, email, and Twitter automatically. <Link href="/tools/folk" className="text-accent hover:underline">See Folk review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly Cost (Solo)</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Starter</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                  <td className="px-4 py-2.5">CRM + basic email (limited sequences)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Professional</td>
                  <td className="px-4 py-2.5">$890/mo</td>
                  <td className="px-4 py-2.5">Full automation, sequences, reporting</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Essential</td>
                  <td className="px-4 py-2.5">$14/mo</td>
                  <td className="px-4 py-2.5">Full CRM + visual pipeline + email sync</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Folk Standard</td>
                  <td className="px-4 py-2.5">$20/mo</td>
                  <td className="px-4 py-2.5">CRM + contact enrichment + sequences</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Case 2: Small Teams Without Marketing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">2. Teams Under 5 Without Marketing Needs</h2>
          <p className="text-muted mb-4">
            If your team is 2&ndash;4 people and your primary need is tracking deals and contacts &mdash; not running email campaigns, building landing pages, or scoring leads &mdash; HubSpot&apos;s value proposition collapses. The CRM is free, sure, but it&apos;s also limited. And the paid plans are priced for companies that use HubSpot&apos;s marketing features, which you won&apos;t.
          </p>
          <p className="text-muted mb-4">
            At 3 seats on Pipedrive Advanced ($29/seat/month = $87/month total), you get email automation, workflow automation, and a clean pipeline UI. The equivalent in HubSpot requires Professional at $890/month plus $45/additional seat. For a 3-person sales team: HubSpot Professional costs $980/month vs Pipedrive Advanced at $87/month. That&apos;s an 11x price difference.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Pipedrive Advanced</strong> &mdash; $29/seat/month. Email automation, workflow builder, 2-way email sync, custom fields, and integrations with most tools. Purpose-built for sales teams. <Link href="/tools/pipedrive" className="text-accent hover:underline">See Pipedrive review</Link></li>
            </ul>
          </div>

          {/* ── Case 3: Deep Customization ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">3. Companies Needing Deep Customization</h2>
          <p className="text-muted mb-4">
            HubSpot is opinionated software. It has a specific way it wants you to manage contacts, deals, and marketing campaigns. If your sales process doesn&apos;t fit HubSpot&apos;s model &mdash; complex approval chains, multi-object relationships, industry-specific fields, or deeply custom reporting &mdash; you&apos;ll spend more time fighting HubSpot than using it.
          </p>
          <p className="text-muted mb-4">
            HubSpot&apos;s custom objects (Enterprise only, $3,600/month for Sales Hub) are limited compared to Salesforce&apos;s fully relational data model. If you need custom objects, junction objects, formula fields, and Apex-level logic, HubSpot will frustrate you.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Salesforce</strong> &mdash; Starts at $25/user/month (Starter Suite). Infinitely customizable with custom objects, validation rules, Apex code, and Flow automation. You&apos;ll pay more in implementation, but the platform bends to your process instead of forcing you into theirs. <Link href="/tools/salesforce" className="text-accent hover:underline">See Salesforce review</Link></li>
            </ul>
          </div>

          {/* ── Case 4: Bootstrapped Startups ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">4. Bootstrapped Startups Watching Every Dollar</h2>
          <p className="text-muted mb-4">
            HubSpot&apos;s pricing has the steepest cliff in SaaS. Free &rarr; Starter ($20/seat/month) is fine. Starter &rarr; Professional is a 44x price increase: $20/month to $890/month. There is no middle tier. If you need workflow automation, A/B testing, custom reporting, or more than basic email sequences, you jump from $240/year to $10,680/year overnight.
          </p>
          <p className="text-muted mb-4">
            For a bootstrapped startup with 3&ndash;5 people, $890/month is a meaningful line item. And that&apos;s just Sales Hub Professional. If you also want Marketing Hub Professional, add another $890/month. Total: $1,780/month, or $21,360/year, before any add-on seats or contact tier overages.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Pipedrive Power + ActiveCampaign Lite</strong> &mdash; Pipedrive at $49/seat/month for CRM + ActiveCampaign at $29/month for marketing automation. Total for a 3-person team: ~$176/month vs HubSpot&apos;s $890+/month. You get 80% of the functionality at 20% of the cost.</li>
              <li><strong className="text-foreground">Brevo (formerly Sendinblue)</strong> &mdash; Free tier with 300 emails/day. Business plan at $18/month for marketing email + basic CRM built in. Good for teams that need email marketing without a separate CRM budget. <Link href="/tools/brevo" className="text-accent hover:underline">See Brevo review</Link></li>
            </ul>
          </div>

          {/* ── Case 5: Email-Only Needs ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">5. Teams That Only Need Email Marketing</h2>
          <p className="text-muted mb-4">
            If you don&apos;t need a CRM, don&apos;t need deal tracking, and just want to send email campaigns and build automated sequences &mdash; HubSpot is the most expensive way to do it. HubSpot Marketing Hub Professional (required for real automation) is $890/month. ActiveCampaign does the same email automation for $49/month (Plus plan, 1,000 contacts). Kit (ConvertKit) does it for $25/month at the same list size.
          </p>
          <p className="text-muted mb-4">
            HubSpot bundles email marketing with CRM, landing pages, social media, and SEO tools. If you only use the email piece, you&apos;re paying for an entire marketing suite you&apos;ll never touch.
          </p>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Use Instead</p>
            <ul className="text-sm text-muted space-y-2 list-none pl-0">
              <li><strong className="text-foreground">Kit (ConvertKit)</strong> &mdash; Free up to 10,000 subscribers (limited features). Creator plan from $25/month. Best for creators and content-driven businesses with simple automation needs. <Link href="/tools/kit" className="text-accent hover:underline">See Kit review</Link></li>
              <li><strong className="text-foreground">ActiveCampaign</strong> &mdash; Starts at $15/month (Starter, 1,000 contacts). Plus plan at $49/month unlocks the visual automation builder that rivals HubSpot Professional. Best for businesses that need sophisticated email automation without a CRM price tag. <Link href="/tools/activecampaign" className="text-accent hover:underline">See ActiveCampaign review</Link></li>
            </ul>
          </div>

          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">1,000 Contacts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">10,000 Contacts</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Automation Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Professional</td>
                  <td className="px-4 py-2.5">$890/mo</td>
                  <td className="px-4 py-2.5">$890/mo (2K included)</td>
                  <td className="px-4 py-2.5">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign Plus</td>
                  <td className="px-4 py-2.5">$49/mo</td>
                  <td className="px-4 py-2.5">$149/mo</td>
                  <td className="px-4 py-2.5">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Kit Creator</td>
                  <td className="px-4 py-2.5">$25/mo</td>
                  <td className="px-4 py-2.5">$100/mo</td>
                  <td className="px-4 py-2.5">Yes (visual builder)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Brevo Business</td>
                  <td className="px-4 py-2.5">$18/mo</td>
                  <td className="px-4 py-2.5">$18/mo (unlimited contacts)</td>
                  <td className="px-4 py-2.5">Yes (marketing automation)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── The Exception ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Exception: When HubSpot Free Actually Makes Sense</h2>
          <p className="text-muted mb-4">
            There is one scenario where HubSpot is genuinely the best choice at $0: <strong className="text-foreground">a B2B company of 5&ndash;20 people that wants CRM, basic email, meeting scheduling, forms, and live chat in one platform &mdash; and is willing to stay on Free or Starter until they genuinely outgrow it.</strong>
          </p>
          <p className="text-muted mb-4">
            HubSpot Free gives you more bundled functionality than any other free CRM. Unlimited contacts, email logging, meeting links, forms, basic reporting, and a mobile app. If your team uses these features together &mdash; not just CRM, but the meeting scheduler for booking calls, forms for lead capture, and email logging for sales activity &mdash; the integration between them is genuinely better than stitching together Pipedrive + Calendly + Tally + a separate email tool.
          </p>
          <p className="text-muted mb-4">
            The key: you have to be disciplined about not upgrading to Professional until the math makes sense. For most companies, that means $100K+ in annual revenue and a clear ROI case for the automation features.
          </p>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is HubSpot Free really free forever?</h3>
                <p className="text-muted">Yes, the CRM is free with no time limit. But free has meaningful limits: 5 email templates, 200 email tracking notifications/month, no sequences, no custom reporting. Most teams outgrow free within 3&ndash;6 months, and the next meaningful tier is $890/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I use HubSpot just as a CRM without the marketing tools?</h3>
                <p className="text-muted">You can, and many do. But then you&apos;re paying for HubSpot&apos;s CRM specifically, which at Professional ($890/month for Sales Hub) is significantly more expensive than Pipedrive ($29&ndash;$49/seat/month) or Close ($49&ndash;$99/seat/month) for CRM-only use.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why do so many sites recommend HubSpot?</h3>
                <p className="text-muted">HubSpot runs one of the highest-paying affiliate programs in SaaS: up to $1,000 per sale for recurring commissions. Many recommendation sites are optimizing for their own revenue, not your best outcome. That doesn&apos;t mean HubSpot is bad &mdash; it means you should evaluate it against alternatives, not just trust the recommendation.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about HubSpot Starter at $20/month?</h3>
                <p className="text-muted">Starter removes some branding and adds basic features (email health reporting, simple automation, 5,000 email templates). It&apos;s reasonable for its price. The issue is that most features people actually want &mdash; sequences, workflows, custom reporting &mdash; require Professional. Starter is a stepping stone, not a destination.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What if I&apos;m already on HubSpot and want to switch?</h3>
                <p className="text-muted">Migration from HubSpot is moderately difficult. Contacts and companies export easily via CSV. Deal history, email logs, and workflow logic do not transfer. Budget 2&ndash;4 weeks for a clean migration, and expect to rebuild automations from scratch in your new tool.</p>
              </div>
            </div>
          </section>
        </div>

        <RelatedLinks
          tools={["hubspot-crm", "pipedrive", "folk", "activecampaign", "salesforce"]}
          comparisons={["hubspot-crm-vs-pipedrive", "hubspot-crm-vs-salesforce"]}
          guides={["hubspot-pricing-reality", "crm-solo-founder", "switch-from-hubspot-to-pipedrive", "best-crm-sales-teams"]}
        />
      </article>
    </>
  );
}
