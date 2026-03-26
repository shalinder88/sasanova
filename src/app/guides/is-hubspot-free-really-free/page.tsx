import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is HubSpot Free Really Free? (Yes, With Limits)",
  description:
    "HubSpot Free CRM is genuinely free with unlimited contacts. But 2,000 email sends/month, HubSpot branding, and basic reporting. The real cost is the $890/mo Professional upgrade.",
};

export default function IsHubspotFreeReallyFreePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is HubSpot Free Really Free?</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Quick Answer
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Is HubSpot Free Really Free?
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">Yes, HubSpot Free CRM is genuinely free</strong> with
            no credit card required and no time limit. You get unlimited contacts, a basic CRM,
            email marketing (2,000 sends/month), forms, and live chat. But there are real
            limits that push you toward Starter ($20/seat/month) and eventually Professional
            ($890/month flat).
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>8 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">What Free Actually Includes</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>Unlimited contacts and companies</li>
              <li>Basic CRM (deals, tasks, activities)</li>
              <li>Email marketing: 2,000 sends/month with HubSpot branding</li>
              <li>Forms and pop-ups (HubSpot branding)</li>
              <li>Live chat and basic chatbot</li>
              <li>Reporting dashboard (basic)</li>
              <li>Meeting scheduler (1 personal link)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">What Free Does NOT Include</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>No branding removal (HubSpot logo on everything)</li>
              <li>No marketing automation workflows</li>
              <li>No custom reporting</li>
              <li>No A/B testing on emails</li>
              <li>No team email (shared inbox)</li>
              <li>Limited to 5 email templates</li>
              <li>No phone support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Upgrade Path That Matters</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Key Unlock</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="px-4 py-2.5 text-foreground font-medium">Free</td><td className="px-4 py-2.5 text-accent font-semibold">$0</td><td className="px-4 py-2.5 text-muted">Basic CRM + email</td></tr>
                  <tr><td className="px-4 py-2.5 text-foreground font-medium">Starter</td><td className="px-4 py-2.5 text-muted">$20/seat/mo</td><td className="px-4 py-2.5 text-muted">Remove branding, 1K marketing contacts</td></tr>
                  <tr><td className="px-4 py-2.5 text-foreground font-medium">Professional</td><td className="px-4 py-2.5 text-muted">$890/mo flat</td><td className="px-4 py-2.5 text-muted">Automation, custom reporting, ABM</td></tr>
                  <tr><td className="px-4 py-2.5 text-foreground font-medium">Enterprise</td><td className="px-4 py-2.5 text-muted">$3,600/mo flat</td><td className="px-4 py-2.5 text-muted">Custom objects, revenue attribution</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed mb-3">
              HubSpot Free is a genuine product, not a trial. But the free-to-Starter jump is
              modest ($20/seat/month) while the Starter-to-Professional jump is enormous
              ($890/month flat). That is a 4,350% increase. Many teams get comfortable on Free
              or Starter, build workflows around HubSpot, then face a painful decision when
              they need automation or custom reporting. The switching cost at that point is
              high because your team, data, and workflows are all locked in.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is there a time limit on the free plan?</h3>
                <p className="text-sm text-muted">No. HubSpot Free has no time limit and no credit card required.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can a team of 10 use HubSpot Free?</h3>
                <p className="text-sm text-muted">Yes. Free supports unlimited users. Only paid features require per-seat payment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What are cheaper alternatives for marketing automation?</h3>
                <p className="text-sm text-muted">ActiveCampaign Starter at $15/month or Brevo Standard at $18/month both include automation at a fraction of HubSpot Professional ($890/month).</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["hubspot-crm"]}
            comparisons={["hubspot-crm-vs-pipedrive"]}
            guides={[
              "hubspot-pricing-reality",
              "when-hubspot-stops-being-cheap",
              "who-should-not-use-hubspot",
              "best-free-crm-2026",
            ]}
          />
        </div>
      </article>
    </>
  );
}
