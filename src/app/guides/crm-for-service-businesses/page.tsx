import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Best CRM for Service Businesses: Plumbers, Lawyers, Consultants",
  description:
    "Service businesses need relationship tracking over deal pipelines. Folk, Pipedrive Lite, and HubSpot Free compared with exact prices for service-business use cases.",
};

export default function CrmForServiceBusinessesPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">CRM for Service Businesses</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            CRM Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Best CRM for Service Businesses: Plumbers, Lawyers, Consultants
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            SaaS sales teams need pipelines. Service businesses need relationship management. The CRM that works for a 20-person sales team is usually the wrong choice for a law firm, consulting practice, or plumbing company.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-3">Why Service Businesses Are Different</h2>
            <div className="space-y-3 text-sm text-muted">
              <p>Most CRMs are designed for SaaS or B2B sales: deals flow through a pipeline, conversion rates matter, and the relationship ends (or changes) after the sale. Service businesses work differently:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong className="text-foreground">Repeat business matters more than new deals.</strong> A plumber&apos;s best customer calls every year. A lawyer&apos;s clients return for different matters.</li>
                <li><strong className="text-foreground">Relationships are ongoing, not deal-based.</strong> You need to know when you last spoke to someone, not what &quot;stage&quot; they are in.</li>
                <li><strong className="text-foreground">Referrals are the primary growth channel.</strong> Tracking who referred whom is often more valuable than lead scoring.</li>
                <li><strong className="text-foreground">Simplicity beats power.</strong> A solo consultant does not need 50 custom fields. They need to know who to follow up with this week.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Three CRM Options for Service Businesses</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Best For</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Starting Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Strength</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot Free</td>
                    <td className="px-4 py-2.5 text-muted">Solo to small teams wanting $0 start</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0 (Starter: $20/seat)</td>
                    <td className="px-4 py-2.5 text-muted">Free email sync, contact tracking, basic pipeline</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive Lite</td>
                    <td className="px-4 py-2.5 text-muted">Teams that do close deals but want simplicity</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat/mo</td>
                    <td className="px-4 py-2.5 text-muted">Visual pipeline, activity tracking, simplest UX</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales Free</td>
                    <td className="px-4 py-2.5 text-muted">Small teams wanting AI scoring at low cost</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">$0 (Growth: $11/seat)</td>
                    <td className="px-4 py-2.5 text-muted">Built-in phone, email, chat; AI scoring on Growth</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">HubSpot Free: The Zero-Cost Starting Point</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">What you get for $0:</strong> Unlimited contacts, 1 deal pipeline, email sync (Gmail/Outlook), email tracking, meeting scheduling, forms, live chat, and basic reporting.</p>
              <p><strong className="text-foreground">Why it works for service businesses:</strong> Contact timeline shows every interaction (emails, calls, meetings) in one place. For a consultant tracking 50&ndash;200 active relationships, HubSpot Free does everything you need.</p>
              <p><strong className="text-foreground">When you outgrow it:</strong> You need a second pipeline (Starter $20/seat), or you want automation (Professional $890/mo &mdash; a brutal jump).</p>
              <p><strong className="text-foreground">The trap:</strong> HubSpot&apos;s free-to-paid jump is the steepest in the CRM market. Free is genuinely free and useful. But if you ever need marketing automation, you go from $0 to $890/mo overnight. For service businesses, this rarely matters because you usually do not need complex automation.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Pipedrive Lite: The Sales-Lite Option</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">$14/seat/mo:</strong> Visual pipeline, lead and deal management, 30 custom fields, activity tracking, mobile app.</p>
              <p><strong className="text-foreground">Why it works for service businesses:</strong> If your business does involve a sales-like process (proposals, quotes, follow-ups), Pipedrive&apos;s visual pipeline makes it dead simple to see where every opportunity stands. Plumbing companies bidding on projects, consultants sending proposals &mdash; this maps well to Pipedrive.</p>
              <p><strong className="text-foreground">Limitation:</strong> Email sync requires Growth at $39/seat/mo. On Lite, you need to manually BCC emails or use a third-party integration. For a solo operator managing 20 deals, this might be acceptable. For a team, budget for Growth.</p>
              <p><strong className="text-foreground">Upgrade path:</strong> Growth ($39/seat) adds email sync, automations, group emailing, and a scheduler. Premium ($49/seat) adds advanced reporting and e-signatures.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Freshsales Free: Built-In Communication</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">What you get for $0:</strong> Up to 3 users, contact and account management, built-in chat, email, and phone. Basic pipeline.</p>
              <p><strong className="text-foreground">Why it works for service businesses:</strong> The built-in phone is a standout feature. Service businesses that take client calls can log them directly in the CRM without a separate phone tool. The free tier supports 3 users, covering most small service teams.</p>
              <p><strong className="text-foreground">Upgrade path:</strong> Growth at $11/seat/mo adds AI contact scoring, visual pipeline, and email sequences. Pro at $47/seat adds multiple pipelines and AI deal insights.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Recommendations by Service Type</h2>
            <div className="space-y-4 text-sm text-muted">
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Solo Consultant / Freelancer</p>
                <p>HubSpot Free. You need contact tracking and email sync, not pipelines. Free tier is more than enough. Cost: $0.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Law Firm (2&ndash;10 people)</p>
                <p>HubSpot Free or Freshsales Free. Track client relationships, log communications, and manage matters. The built-in phone on Freshsales is useful for client intake calls. Cost: $0 to $11/seat on Freshsales Growth.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Plumbing / HVAC / Contracting</p>
                <p>Pipedrive Lite at $14/seat. Proposals and quotes map naturally to a pipeline. The mobile app is essential for field workers. Growth ($39/seat) when you need to track email communication with customers.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <p className="font-semibold text-foreground">Marketing Agency</p>
                <p>Pipedrive Growth at $39/seat. Agencies need multiple pipelines (new business vs renewals), email sync, and deal management. Freshsales Pro ($47/seat) is an alternative if you want AI deal insights.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do service businesses even need a CRM?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  If you have more than 20 active client relationships, yes. Below that, a spreadsheet might work. But the moment you forget to follow up with a past client who could bring repeat business, the CRM pays for itself. At $0 (HubSpot Free), there is no reason not to use one.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What about Salesforce for service businesses?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Salesforce Starter Suite at $25/seat/mo is overkill for most service businesses. The setup complexity, learning curve, and cost are not justified unless you have 20+ users and complex reporting needs. A consultant with 3 people does not need Salesforce.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Should I use Zoho CRM for my service business?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Zoho CRM Free (3 users, 5,000 records) is an option, but the interface is less intuitive than HubSpot or Freshsales. Zoho shines when you are already using other Zoho products (Zoho Books, Zoho Desk). Standard at $20/seat/mo adds workflows and email sync. It is viable but not the first recommendation for simplicity.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["hubspot-crm", "pipedrive", "freshsales", "zoho-crm"]}
            guides={["best-crm-freelancers-consultants", "crm-pipeline-setup-best-practices", "when-free-crm-costs-more"]}
          />
        </div>
      </article>
    </>
  );
}
