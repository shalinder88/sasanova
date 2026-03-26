import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "State of Newsletter Platforms in 2026: Market Overview and Recommendations",
  description: "beehiiv, Substack, Kit, Ghost, Buttondown, and Mailchimp compared. Who's winning, pricing trends, and recommendations by use case for newsletter creators in 2026.",
};

export default function StateOfNewsletterPlatforms2026Page() {
  return (<>
    <div className="border-b border-border bg-surface"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3"><nav className="flex items-center gap-1.5 text-xs text-muted"><Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span><Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span><span className="text-foreground font-medium truncate">State of Newsletter Platforms 2026</span></nav></div></div>
    <div className="border-b border-border"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Category State</span>
      <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">State of Newsletter Platforms in 2026</h1>
      <p className="text-muted text-lg leading-relaxed">The newsletter market has matured into distinct tiers: growth-first platforms (beehiiv), network-driven publishers (Substack), creator-focused email (Kit), developer-friendly minimalists (Buttondown), and self-hosted independents (Ghost). Here is where each stands, what they cost, and who should use what.</p>
      <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>18 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
    </div></div>
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="prose-custom space-y-8">

      <section>
        <h2 className="text-xl font-bold mb-3">Market Pricing Overview</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Platform</th><th className="text-left py-3 px-4 font-semibold text-foreground">Free Tier</th><th className="text-left py-3 px-4 font-semibold text-foreground">Entry Paid</th><th className="text-left py-3 px-4 font-semibold text-foreground">Monetization Model</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">beehiiv</td><td className="py-2 px-4">Launch: $0 (2,500 subs)</td><td className="py-2 px-4">Scale: $49/mo (unlimited)</td><td className="py-2 px-4">Ad network, paid subs, Boosts</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Substack</td><td className="py-2 px-4">$0 (unlimited subs)</td><td className="py-2 px-4">10% of paid sub revenue</td><td className="py-2 px-4">Paid subscriptions (10% cut)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Kit (ConvertKit)</td><td className="py-2 px-4">Newsletter: $0 (10,000 subs)</td><td className="py-2 px-4">Creator: $39/mo</td><td className="py-2 px-4">Kit Commerce, sponsors</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Ghost</td><td className="py-2 px-4">$0 (self-hosted only)</td><td className="py-2 px-4">Starter: $18/mo (1,000 members)</td><td className="py-2 px-4">Paid memberships (0% cut)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Buttondown</td><td className="py-2 px-4">$0 (100 subs)</td><td className="py-2 px-4">Basic: $9/mo (unlimited)</td><td className="py-2 px-4">Paid subs (Standard $29/mo)</td></tr>
            <tr><td className="py-2 px-4 font-medium text-foreground">Mailchimp</td><td className="py-2 px-4">$0 (250 contacts)</td><td className="py-2 px-4">Essentials: $13/mo (500)</td><td className="py-2 px-4">Marketing tool, not newsletter-native</td></tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Key Trends in 2026</h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Newsletter-native platforms are winning</p><p className="text-sm text-muted">beehiiv, Substack, and Kit have captured the creator market by building features traditional email tools never offered: referral programs, ad networks, paid subscriptions, and creator profiles. General-purpose platforms like Mailchimp are losing newsletter creators to purpose-built alternatives.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Free tiers are getting more generous</p><p className="text-sm text-muted">Kit raised its free tier to 10,000 subscribers. beehiiv&apos;s Launch plan offers 2,500 subscribers with unlimited sends. Substack remains free to use (revenue share model). The barrier to starting a newsletter has never been lower.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Monetization is the differentiator</p><p className="text-sm text-muted">Every platform now competes on how creators make money. beehiiv offers an ad network and Boosts (paid recommendations). Substack takes 10% of paid subscriptions. Kit has Commerce for digital products. Ghost takes 0% of membership revenue. The revenue-share model is the key decision axis.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Mailchimp is no longer a newsletter tool</p><p className="text-sm text-muted">Mailchimp has evolved into a full marketing platform. Its pricing model (pay per contacts, starting at $13/mo for 500) makes it one of the most expensive options for newsletter creators. The shift is clear: Mailchimp is for marketing teams, not newsletter operators.</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Recommendations by Use Case</h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Growth-focused newsletter operators</p><p className="text-sm text-muted"><strong>beehiiv</strong> &mdash; Ad network, referral program, SEO-optimized web pages, and Boosts for paid growth. Scale plan at $49/mo is the standard for serious newsletter businesses.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Writers who want simplicity and a built-in audience</p><p className="text-sm text-muted"><strong>Substack</strong> &mdash; Free to use, built-in reader network and mobile app, recommendation algorithm. The 10% revenue cut is the price for the discovery network.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Creators selling digital products</p><p className="text-sm text-muted"><strong>Kit (ConvertKit)</strong> &mdash; Free for 10,000 subscribers plus Kit Commerce for selling digital products directly. Best for creators who combine email with product sales.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Independent publishers who want full ownership</p><p className="text-sm text-muted"><strong>Ghost</strong> &mdash; Self-host for free or $18/mo managed. 0% revenue cut on paid memberships. Full control over branding, design, and data. Best for established publishers.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Developer/technical writers</p><p className="text-sm text-muted"><strong>Buttondown</strong> &mdash; Markdown-first, minimalist, API-friendly. Basic plan at $9/mo for unlimited subscribers. Built by a solo developer who prioritizes simplicity.</p></div>
        </div>
      </section>

      <section><h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><h3 className="text-sm font-bold text-foreground mb-1">Which platform has the best free tier?</h3><p className="text-sm text-muted">Kit at 10,000 subscribers with unlimited sends is the most generous by volume. Substack is free with unlimited subscribers (10% revenue share on paid). beehiiv Launch is free for 2,500 subscribers with full features.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Which platform takes the lowest cut of revenue?</h3><p className="text-sm text-muted">Ghost takes 0% &mdash; you keep all membership revenue (minus Stripe fees). beehiiv and Kit take no cut of subscription revenue. Substack takes 10% of all paid subscription revenue plus Stripe fees.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Should I still use Mailchimp for newsletters?</h3><p className="text-sm text-muted">Probably not. Mailchimp&apos;s per-contact pricing ($13/mo for 500 contacts on Essentials) makes it one of the most expensive options. beehiiv, Kit, and Substack are all cheaper and more purpose-built for newsletters.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Is Substack&apos;s 10% cut worth it?</h3><p className="text-sm text-muted">If you value the built-in reader network and discovery features, yes. Substack&apos;s recommendation algorithm and mobile app drive subscriber growth that other platforms don&apos;t offer. At $10,000/mo in revenue, the 10% cut is $1,000/mo &mdash; at that scale, the network effect needs to justify the cost.</p></div>
        </div>
      </section>

    </div>
    <div className="mt-12"><RelatedLinks
      tools={["beehiiv", "substack", "convertkit", "ghost", "buttondown"]}
      guides={["best-email-tool-creators", "newsletter-stack", "switch-from-kit-to-beehiiv", "migrate-substack-to-beehiiv"]}
    /></div></article>
  </>);
}
