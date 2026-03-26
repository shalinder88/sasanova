import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "What You Get for Free in Email Marketing: Every Free Tier Mapped",
  description:
    "Mailchimp Free vs Kit Free vs beehiiv Free vs Brevo Free vs Buttondown Free: exact subscriber limits, send limits, feature restrictions. Verified March 2026.",
};

export default function FreeInEmailPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Free Email Tiers</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Feature Availability
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            What You Get for Free in Email Marketing: Every Free Tier Mapped
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Email platforms use free tiers to get you hooked, then charge for features you
            eventually need. Mailchimp gives you 250 contacts. Kit gives you 10,000 subscribers.
            Brevo gives you 100,000 contacts but only 300 emails per day. Every limit mapped below.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Free Tier Comparison Table</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Mailchimp</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit (ConvertKit)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Brevo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Buttondown</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Contacts/Subs</td>
                    <td className="px-4 py-2.5 text-muted">250 contacts</td>
                    <td className="px-4 py-2.5 text-muted">10,000 subscribers</td>
                    <td className="px-4 py-2.5 text-muted">2,500 subscribers</td>
                    <td className="px-4 py-2.5 text-muted">100,000 contacts</td>
                    <td className="px-4 py-2.5 text-muted">100 subscribers</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Send Limits</td>
                    <td className="px-4 py-2.5 text-muted">500 sends/mo</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">300 emails/day</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Limited</td>
                    <td className="px-4 py-2.5 text-muted">No automations</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Standard $18/mo)</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Basic $9/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Branding</td>
                    <td className="px-4 py-2.5 text-muted">Mailchimp branding</td>
                    <td className="px-4 py-2.5 text-muted">Kit branding</td>
                    <td className="px-4 py-2.5 text-muted">beehiiv branding</td>
                    <td className="px-4 py-2.5 text-muted">Brevo branding</td>
                    <td className="px-4 py-2.5 text-muted">Buttondown branding</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Custom Domain</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Basic $9/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">First Paid Tier</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $13/mo</td>
                    <td className="px-4 py-2.5 text-muted">Creator $39/mo</td>
                    <td className="px-4 py-2.5 text-muted">Scale $49/mo</td>
                    <td className="px-4 py-2.5 text-muted">Starter $9/mo</td>
                    <td className="px-4 py-2.5 text-muted">Basic $9/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Winner by Use Case</h2>
            <div className="space-y-3">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Most subscribers for free: Kit (10,000)</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Kit&apos;s Newsletter plan gives you 10,000 subscribers with unlimited sends. The catch:
                  no automations, no integrations, and no advanced features. Paid Creator tier is $39/mo.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Most contacts for free: Brevo (100,000)</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Brevo stores up to 100,000 contacts for free, but limits you to 300 emails/day
                  (~9,000/month). If you send infrequently to a large list, Brevo free is unbeatable.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Best newsletter free tier: beehiiv Launch</h3>
                <p className="text-muted text-sm leading-relaxed">
                  2,500 subscribers, unlimited sends, custom domain, website builder. The most complete
                  newsletter-specific free tier. Scale at $49/mo adds ad network and referral program.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Which free email tier lasts longest?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Kit Newsletter &mdash; 10,000 subscribers is a real business. Most creators can run
                  Kit free for 6&ndash;12 months before needing automations or integrations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is Mailchimp Free still worth it in 2026?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  At 250 contacts and 500 sends, Mailchimp Free is barely functional. Kit Free gives you
                  40x the subscribers. Brevo Free gives you 400x the contacts. Mailchimp Free is the
                  worst email free tier in 2026.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "best-free-email-tool-2026",
              "what-you-get-for-free-in-crm",
              "when-mailchimp-becomes-expensive",
              "set-up-newsletter-in-30-minutes",
            ]}
          />
        </div>
      </article>
    </>
  );
}
