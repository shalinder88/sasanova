import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Deliverability Setup: SPF, DKIM, DMARC for Every Platform",
  description:
    "Step-by-step authentication setup for Mailchimp, Kit, beehiiv, Brevo, and ActiveCampaign. Which platforms handle it automatically vs require manual DNS.",
};

export default function EmailDeliverabilitySetupGuidePage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Email Deliverability Setup</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Email Deep Dive
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Deliverability Setup: SPF, DKIM, DMARC for Every Platform
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Email authentication is not optional in 2026. Google and Yahoo require SPF, DKIM, and DMARC for bulk senders. Here is how to set it up on every major email platform.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>16 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-10">

          <section>
            <h2 className="text-xl font-bold mb-3">Why This Matters Now</h2>
            <p className="text-sm text-muted leading-relaxed">
              Since February 2024, Google and Yahoo require all bulk senders (5,000+ emails/day) to have SPF, DKIM, and DMARC configured. Without them, your emails go to spam or get rejected entirely. Even if you send fewer emails, authentication improves inbox placement on every platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Quick Primer: What SPF, DKIM, and DMARC Do</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">SPF (Sender Policy Framework):</strong> Tells receiving servers which IP addresses are allowed to send email on behalf of your domain. You add a DNS TXT record listing authorized senders.</p>
              <p><strong className="text-foreground">DKIM (DomainKeys Identified Mail):</strong> Adds a cryptographic signature to your emails proving they were not tampered with in transit. You add a DNS TXT or CNAME record with a public key.</p>
              <p><strong className="text-foreground">DMARC (Domain-based Message Authentication):</strong> Tells receiving servers what to do when SPF or DKIM fails (none, quarantine, reject). You add a DNS TXT record with your policy.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Platform-by-Platform: What You Need to Do</h2>
            <div className="overflow-x-auto rounded-lg border border-border mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">SPF</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">DKIM</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">DMARC</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Custom Domain Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Mailchimp</td>
                    <td className="px-4 py-2.5 text-muted">Auto (shared)</td>
                    <td className="px-4 py-2.5 text-muted">Manual CNAME</td>
                    <td className="px-4 py-2.5 text-muted">Manual TXT</td>
                    <td className="px-4 py-2.5 text-muted">Essentials $13/mo+</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Kit</td>
                    <td className="px-4 py-2.5 text-muted">Auto (shared)</td>
                    <td className="px-4 py-2.5 text-muted">Manual CNAME</td>
                    <td className="px-4 py-2.5 text-muted">Manual TXT</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free tier</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">beehiiv</td>
                    <td className="px-4 py-2.5 text-muted">Auto (shared)</td>
                    <td className="px-4 py-2.5 text-muted">Manual CNAME</td>
                    <td className="px-4 py-2.5 text-muted">Manual TXT</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free tier (Launch)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Brevo</td>
                    <td className="px-4 py-2.5 text-muted">Auto (shared)</td>
                    <td className="px-4 py-2.5 text-muted">Manual TXT</td>
                    <td className="px-4 py-2.5 text-muted">Manual TXT</td>
                    <td className="px-4 py-2.5 text-accent font-semibold">Free tier</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">ActiveCampaign</td>
                    <td className="px-4 py-2.5 text-muted">Auto (shared)</td>
                    <td className="px-4 py-2.5 text-muted">Manual CNAME</td>
                    <td className="px-4 py-2.5 text-muted">Manual TXT</td>
                    <td className="px-4 py-2.5 text-muted">Starter $15/mo+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Mailchimp: Authentication Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1:</strong> Go to Account &rarr; Domains &rarr; Add &amp; Verify Domain. Enter your sending domain.</p>
              <p><strong className="text-foreground">Step 2:</strong> Mailchimp generates CNAME records for DKIM. Add these to your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.).</p>
              <p><strong className="text-foreground">Step 3:</strong> SPF is handled automatically through Mailchimp&apos;s shared sending infrastructure.</p>
              <p><strong className="text-foreground">Step 4:</strong> Set up DMARC yourself by adding a TXT record: <code className="bg-surface-alt px-1.5 py-0.5 rounded text-xs">v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com</code></p>
              <p><strong className="text-foreground">Tier requirement:</strong> Custom domain authentication is available on all plans including Free, but dedicated sending domain features improve on Essentials ($13/mo) and above. Dedicated IP requires Premium ($350/mo).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Kit (ConvertKit): Authentication Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1:</strong> Go to Settings &rarr; Email &rarr; Sending Domain. Add your domain.</p>
              <p><strong className="text-foreground">Step 2:</strong> Kit provides CNAME records for DKIM verification. Add them to your DNS.</p>
              <p><strong className="text-foreground">Step 3:</strong> SPF is handled through Kit&apos;s shared infrastructure.</p>
              <p><strong className="text-foreground">Step 4:</strong> Add your own DMARC TXT record to your DNS.</p>
              <p><strong className="text-foreground">Tier requirement:</strong> Custom domain sending is available on the free Newsletter plan. Kit handles SPF automatically. DKIM requires manual CNAME setup.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">beehiiv: Authentication Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1:</strong> Go to Settings &rarr; Publication &rarr; Custom Domain. Add both your website domain and sending domain.</p>
              <p><strong className="text-foreground">Step 2:</strong> beehiiv provides DNS records for DKIM (CNAME records). Add them to your registrar.</p>
              <p><strong className="text-foreground">Step 3:</strong> SPF is handled through beehiiv&apos;s shared infrastructure.</p>
              <p><strong className="text-foreground">Step 4:</strong> Add a DMARC TXT record to your DNS.</p>
              <p><strong className="text-foreground">Tier requirement:</strong> Custom domain is available on the free Launch plan. This is a major advantage &mdash; most platforms require paid plans for custom sending domains.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Brevo: Authentication Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1:</strong> Go to Senders &amp; IPs &rarr; Domains. Add your domain.</p>
              <p><strong className="text-foreground">Step 2:</strong> Brevo provides TXT records for both DKIM and domain verification. Add them to your DNS.</p>
              <p><strong className="text-foreground">Step 3:</strong> SPF is handled through Brevo&apos;s shared infrastructure on Free and Starter plans.</p>
              <p><strong className="text-foreground">Step 4:</strong> Add a DMARC TXT record to your DNS.</p>
              <p><strong className="text-foreground">Tier requirement:</strong> Domain authentication is available on the Free plan. Dedicated IP (for maximum deliverability control) requires Professional at $499/mo.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">ActiveCampaign: Authentication Setup</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Step 1:</strong> Go to Settings &rarr; Advanced &rarr; I&apos;m sending with a custom mail server domain. Add your domain.</p>
              <p><strong className="text-foreground">Step 2:</strong> ActiveCampaign provides CNAME records for DKIM. Add them to your DNS.</p>
              <p><strong className="text-foreground">Step 3:</strong> SPF is handled through ActiveCampaign&apos;s shared infrastructure.</p>
              <p><strong className="text-foreground">Step 4:</strong> Add a DMARC TXT record to your DNS.</p>
              <p><strong className="text-foreground">Tier requirement:</strong> Custom mail server domain is technically available on Starter ($15/mo), but custom sending domain with full branding control is best supported on Plus ($49/mo) and above. Enterprise ($145/mo) offers dedicated account support for deliverability optimization.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">DMARC Policy Recommendations</h2>
            <div className="space-y-3 text-sm text-muted">
              <p><strong className="text-foreground">Start with p=none:</strong> <code className="bg-surface-alt px-1.5 py-0.5 rounded text-xs">v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com</code>. This monitors without blocking. Run for 2-4 weeks.</p>
              <p><strong className="text-foreground">Move to p=quarantine:</strong> Once you confirm legitimate sources are passing, quarantine unauthenticated emails.</p>
              <p><strong className="text-foreground">Goal: p=reject:</strong> The strongest policy. Reject all unauthenticated emails. Only move here once all your sending sources pass SPF and DKIM.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Do I need a dedicated IP for good deliverability?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  No. Shared IPs on reputable platforms (Mailchimp, Kit, beehiiv, Brevo, ActiveCampaign) have good reputation because the platforms police their senders. Dedicated IPs only make sense at 100,000+ sends/month and require careful IP warming. On Mailchimp, dedicated IP requires Premium at $350/mo. On Brevo, it requires Professional at $499/mo.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  Which platform makes authentication easiest?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  All five platforms handle SPF automatically. For DKIM, they all require you to add DNS records manually. beehiiv and Kit stand out because they support custom domains on their free tiers, so you can authenticate immediately without paying.
                </div>
              </details>
              <details className="group border border-border rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                  What happens if I do not set up DMARC?
                </summary>
                <div className="px-4 pb-3 text-sm text-muted">
                  Without DMARC, receiving servers cannot verify your domain&apos;s authentication policy. Your emails are more likely to be filtered as spam, especially by Gmail and Yahoo. Setting up even a basic DMARC policy with p=none is better than nothing.
                </div>
              </details>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <RelatedLinks
            tools={["mailchimp", "convertkit", "beehiiv", "brevo", "activecampaign"]}
            guides={["email-deliverability-compared", "email-list-health-guide", "email-platform-feature-tiers-explained"]}
          />
        </div>
      </article>
    </>
  );
}
