import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "SaaS Costs for a 5-Person Team: Per-Seat Math Across Every Category",
  description:
    "Complete stack costs for a 5-person team. Per-seat math for CRM, PM, communication, email, automation, and more. Exact prices from verified vendor data.",
};

export default function SaaSCosts5PersonPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">SaaS Costs for 5-Person Team</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Team Size Scaling
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            SaaS Costs for a 5-Person Team: Per-Seat Math Across Every Category
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Five seats is the inflection point where free tiers break and per-seat pricing
            starts adding up fast. A CRM at $14/seat suddenly costs $70/month. Slack Pro at
            $8.75/user is $43.75/month. This guide shows every category with exact per-seat
            math at 5 users so you can forecast your real monthly bill.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>20 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">CRM at 5 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5 Seats/mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Billing Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Free Tools</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$0</td>
                    <td className="px-4 py-2.5 text-muted">Flat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">HubSpot</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$100</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Pipedrive</td>
                    <td className="px-4 py-2.5 text-muted">Lite</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$70</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Freshsales</td>
                    <td className="px-4 py-2.5 text-muted">Growth</td>
                    <td className="px-4 py-2.5 text-muted">$11/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$55</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoho CRM</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$20/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$100</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Salesforce</td>
                    <td className="px-4 py-2.5 text-muted">Starter Suite</td>
                    <td className="px-4 py-2.5 text-muted">$25/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$125</td>
                    <td className="px-4 py-2.5 text-muted">Per seat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Project Management at 5 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per Seat</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5 Seats/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">Free Forever</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ClickUp</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$10/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$50</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5 text-muted">Plus</td>
                    <td className="px-4 py-2.5 text-muted">$12/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$60</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Asana</td>
                    <td className="px-4 py-2.5 text-muted">Starter</td>
                    <td className="px-4 py-2.5 text-muted">$13.49/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$67.45</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monday.com</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$14/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$70</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Basecamp</td>
                    <td className="px-4 py-2.5 text-muted">Basecamp</td>
                    <td className="px-4 py-2.5 text-muted">$15/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$75</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Trello</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$6/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$30</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Linear</td>
                    <td className="px-4 py-2.5 text-muted">Standard</td>
                    <td className="px-4 py-2.5 text-muted">$8/seat</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Communication at 5 Seats</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per User</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">5 Users/mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Discord</td>
                    <td className="px-4 py-2.5 text-muted">Free</td>
                    <td className="px-4 py-2.5 text-muted">$0</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$0</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Slack</td>
                    <td className="px-4 py-2.5 text-muted">Pro</td>
                    <td className="px-4 py-2.5 text-muted">$8.75/user</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$43.75</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Microsoft Teams</td>
                    <td className="px-4 py-2.5 text-muted">Essentials</td>
                    <td className="px-4 py-2.5 text-muted">$4/user</td>
                    <td className="px-4 py-2.5 text-muted font-semibold">$20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Complete 5-Person Stack: Budget vs Premium</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Budget Pick</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost (5 seats)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Premium Pick</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost (5 seats)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">CRM</td>
                    <td className="px-4 py-2.5 text-muted">Freshsales Growth</td>
                    <td className="px-4 py-2.5 text-muted">$55/mo</td>
                    <td className="px-4 py-2.5 text-muted">HubSpot Starter</td>
                    <td className="px-4 py-2.5 text-muted">$100/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">PM</td>
                    <td className="px-4 py-2.5 text-muted">Trello Standard</td>
                    <td className="px-4 py-2.5 text-muted">$30/mo</td>
                    <td className="px-4 py-2.5 text-muted">Notion Plus</td>
                    <td className="px-4 py-2.5 text-muted">$60/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Chat</td>
                    <td className="px-4 py-2.5 text-muted">Discord Free</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">Slack Pro</td>
                    <td className="px-4 py-2.5 text-muted">$43.75/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Email</td>
                    <td className="px-4 py-2.5 text-muted">Brevo Starter</td>
                    <td className="px-4 py-2.5 text-muted">$9/mo</td>
                    <td className="px-4 py-2.5 text-muted">ActiveCampaign Starter</td>
                    <td className="px-4 py-2.5 text-muted">$15/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Make Core</td>
                    <td className="px-4 py-2.5 text-muted">$10.59/mo</td>
                    <td className="px-4 py-2.5 text-muted">Zapier Professional</td>
                    <td className="px-4 py-2.5 text-muted">$29.99/mo</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-surface-alt font-semibold">
                    <td className="px-4 py-2.5 text-foreground">Total</td>
                    <td className="px-4 py-2.5"></td>
                    <td className="px-4 py-2.5 text-foreground">$104.59/mo</td>
                    <td className="px-4 py-2.5"></td>
                    <td className="px-4 py-2.5 text-foreground">$248.74/mo</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can a 5-person team stay on free tiers?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Partially. HubSpot Free supports unlimited users. ClickUp Free supports unlimited members.
                  Discord is free. But Asana Free caps at 2 users, Notion Free is individual-only for full
                  features, and Slack Free hides messages after 90 days.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What&apos;s the biggest cost jump at 5 seats?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  CRM. Going from HubSpot Free to HubSpot Starter at 5 seats is $0 to $100/month.
                  Pipedrive Lite at 5 seats is $70/month. The cheapest paid CRM at 5 seats is
                  Freshsales Growth at $55/month.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "saas-costs-for-1-person-business",
              "saas-costs-for-10-person-team",
              "best-saas-stack-under-200",
              "per-seat-pricing-trap-explained",
            ]}
          />
        </div>
      </article>
    </>
  );
}
