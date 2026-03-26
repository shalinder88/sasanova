import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Set Up a Newsletter in 30 Minutes: From Zero to First Send",
  description:
    "Launch your newsletter in 30 minutes using beehiiv Free or Kit Free. Domain setup, template design, and first send checklist. Total cost: $0.",
};

export default function SetUpNewsletterPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Newsletter in 30 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Practical Workflow
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Set Up a Newsletter in 30 Minutes: From Zero to First Send
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            You don&apos;t need a week to launch a newsletter. With beehiiv Launch (free, 2,500 subscribers)
            or Kit Newsletter (free, 10,000 subscribers), you can go from zero to your first send
            in 30 minutes. This guide covers platform choice, domain setup, and your first email.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Choose Your Platform</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">beehiiv Launch (Free)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Kit Newsletter (Free)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Subscribers</td>
                    <td className="px-4 py-2.5 text-muted">2,500</td>
                    <td className="px-4 py-2.5 text-muted">10,000</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Sends</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Custom Domain</td>
                    <td className="px-4 py-2.5 text-muted">Yes (free)</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Creator $39/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Website Builder</td>
                    <td className="px-4 py-2.5 text-muted">Yes (free)</td>
                    <td className="px-4 py-2.5 text-muted">Landing page only</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Automation</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                    <td className="px-4 py-2.5 text-muted">No (requires Creator $39/mo)</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Monetization Path</td>
                    <td className="px-4 py-2.5 text-muted">Scale $49/mo (ad network, referrals)</td>
                    <td className="px-4 py-2.5 text-muted">Creator $39/mo (digital products)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              <strong>Pick beehiiv</strong> if you want a custom domain and website on the free tier.
              <strong> Pick Kit</strong> if you need more subscribers (10K vs 2.5K) and plan to sell
              digital products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Step-by-Step: beehiiv Launch (30 Minutes)</h2>
            <div className="space-y-4">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 1&ndash;5: Account Setup</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Sign up at beehiiv.com. Select Launch (free) plan. Enter your newsletter name and
                  description. Choose a URL slug for your publication page.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 5&ndash;15: Custom Domain (Optional)</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Go to Settings &rarr; Publication &rarr; Custom domain. Add a CNAME record pointing
                  your subdomain (e.g., newsletter.yourdomain.com) to beehiiv. DNS propagation can
                  take up to 48 hours but often completes in minutes.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 15&ndash;25: Design Your Template</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Go to the editor. Write your first newsletter. Add your logo, pick a color scheme.
                  beehiiv&apos;s editor is block-based &mdash; drag in text, images, buttons, dividers.
                  Keep it simple: header, intro, 2&ndash;3 content sections, footer with social links.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 25&ndash;30: Send Your First Email</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Preview your email. Send a test to yourself. Fix any formatting issues.
                  Schedule or send immediately. Share your subscription page link.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Do I need a custom domain?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  No, but it helps deliverability and looks more professional. beehiiv offers free
                  custom domain support on all plans including free. Kit requires the $39/mo
                  Creator plan for custom domains.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">When should I upgrade from free?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  beehiiv: when you hit 2,500 subscribers or want the ad network (Scale $49/mo).
                  Kit: when you need automations, sequences, or integrations (Creator $39/mo).
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "beehiiv-setup-guide",
              "newsletter-stack",
              "what-you-get-for-free-in-email",
              "set-up-lead-capture-in-30-minutes",
            ]}
          />
        </div>
      </article>
    </>
  );
}
