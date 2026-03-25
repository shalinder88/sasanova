import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "beehiiv vs Ghost: Newsletter Platform vs Publishing Platform",
  description: "beehiiv Scale at $49/mo vs Ghost Publisher at $35/mo — a complete comparison of newsletter-first growth tools vs open-source publishing with memberships.",
};

export default function BeehiivVsGhostDetailedPage() {
  return (<>
    <div className="border-b border-border bg-surface"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3"><nav className="flex items-center gap-1.5 text-xs text-muted"><Link href="/" className="hover:text-accent transition-colors">Home</Link><span>/</span><Link href="/guides" className="hover:text-accent transition-colors">Guides</Link><span>/</span><span className="text-foreground font-medium truncate">beehiiv vs Ghost</span></nav></div></div>
    <div className="border-b border-border"><div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Detailed Comparison</span>
      <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">beehiiv vs Ghost: Newsletter Platform vs Publishing Platform</h1>
      <p className="text-muted text-lg leading-relaxed"><strong className="text-foreground">Quick verdict:</strong> beehiiv wins for newsletter-first creators who want built-in growth tools (referral program, ad network, recommendations) with a free tier for 2,500 subscribers. Ghost wins for professional publishers who want full data ownership, custom themes, and an open-source platform with zero platform fees on memberships. beehiiv is for growing newsletters; Ghost is for building media businesses.</p>
      <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>24 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
    </div></div>
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="prose-custom space-y-8">

      <section>
        <h2 className="text-xl font-bold mb-3">Side-by-Side Pricing</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Plan</th><th className="text-left py-3 px-4 font-semibold text-foreground">beehiiv</th><th className="text-left py-3 px-4 font-semibold text-foreground">Ghost (Pro)</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Free / Entry</td><td className="py-3 px-4">Launch $0 &mdash; 2,500 subs, unlimited sends, custom domain</td><td className="py-3 px-4">Starter $18/mo ($180/yr) &mdash; 1,000 members, 1 staff user</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Growth</td><td className="py-3 px-4">Scale $49/mo ($516/yr) &mdash; Unlimited subs, ad network, referrals</td><td className="py-3 px-4">Publisher $35/mo ($348/yr) &mdash; Unlimited members, 3 staff, paid subs</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">Premium</td><td className="py-3 px-4">Max $109/mo ($1,152/yr) &mdash; Priority support, API, newsroom</td><td className="py-3 px-4">Business $239/mo ($2,388/yr) &mdash; Unlimited staff, priority support</td></tr>
            <tr><td className="py-3 px-4 font-medium text-foreground">Self-hosted</td><td className="py-3 px-4">Not available</td><td className="py-3 px-4">Free &mdash; open source, host on your own server</td></tr>
          </tbody>
        </table></div>
        <p className="text-xs text-muted mt-2">Ghost can be self-hosted for free (server costs ~$5&ndash;20/mo). beehiiv is cloud-only. Ghost charges 0% platform fee on membership revenue; beehiiv&apos;s ad network takes a percentage of ad revenue.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Feature Comparison</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Feature</th><th className="text-left py-3 px-4 font-semibold text-foreground">beehiiv</th><th className="text-left py-3 px-4 font-semibold text-foreground">Ghost</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Free tier</td><td className="py-2 px-4">Yes &mdash; 2,500 subscribers</td><td className="py-2 px-4">No (self-host free, or $18/mo managed)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Built-in ad network</td><td className="py-2 px-4">Yes &mdash; Boost / ad marketplace</td><td className="py-2 px-4">No</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Referral program</td><td className="py-2 px-4">Built-in</td><td className="py-2 px-4">Not built-in (use SparkLoop)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Paid memberships</td><td className="py-2 px-4">Yes (Stripe integration)</td><td className="py-2 px-4">Yes &mdash; native, 0% platform fee</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Custom themes</td><td className="py-2 px-4">Limited customization</td><td className="py-2 px-4">Full custom themes (Handlebars)</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">Open source</td><td className="py-2 px-4">No</td><td className="py-2 px-4">Yes &mdash; MIT license</td></tr>
            <tr className="border-b border-border"><td className="py-2 px-4 font-medium text-foreground">SEO</td><td className="py-2 px-4">Basic (website builder)</td><td className="py-2 px-4">Excellent &mdash; built-in, optimized</td></tr>
            <tr><td className="py-2 px-4 font-medium text-foreground">Website builder</td><td className="py-2 px-4">Yes &mdash; simple, newsletter-focused</td><td className="py-2 px-4">Yes &mdash; full publishing platform</td></tr>
          </tbody>
        </table></div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Decision Framework</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Choose beehiiv if:</p><ul className="space-y-1.5 text-sm text-muted"><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want to grow a newsletter with built-in viral tools</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Ad revenue monetization is part of your strategy</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want free to start (2,500 subscribers)</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You&apos;re a newsletter-first business, not a blog/publication</li></ul></div>
          <div className="rounded-lg border border-border bg-surface p-5"><p className="text-sm font-bold text-foreground mb-2">Choose Ghost if:</p><ul className="space-y-1.5 text-sm text-muted"><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Full data ownership and open source matter</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You want custom themes and full design control</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>Membership revenue is your primary business model</li><li className="flex gap-2"><span className="text-accent shrink-0">&#10003;</span>You&apos;re building a publication, not just a newsletter</li></ul></div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">What beehiiv Does Better</h2>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Growth tools.</strong> Built-in referral program, recommendations, and ad network (Boosts). These are purpose-built for newsletter growth and monetization. Ghost has no equivalent viral growth mechanics.</p>
        <p className="text-muted leading-relaxed"><strong className="text-foreground">Free tier.</strong> beehiiv Launch gives you 2,500 subscribers with unlimited sends, custom domain, and a website &mdash; all for $0. Ghost has no free managed option (self-hosting requires technical skills).</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">What Ghost Does Better</h2>
        <p className="text-muted leading-relaxed mb-3"><strong className="text-foreground">Publishing platform.</strong> Ghost is a complete publishing platform with custom themes, SEO optimization, membership tiers, and a powerful editor. It&apos;s designed for professional publications, not just newsletters.</p>
        <p className="text-muted leading-relaxed"><strong className="text-foreground">Data ownership.</strong> Open source with self-hosting option. Your content, subscriber data, and membership revenue are fully under your control. No platform risk, no vendor lock-in. Ghost takes 0% of your membership revenue.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Annual Cost at Three Subscriber Counts</h2>
        <div className="overflow-x-auto rounded-lg border border-border"><table className="w-full text-sm"><thead><tr className="bg-surface border-b border-border"><th className="text-left py-3 px-4 font-semibold text-foreground">Subscribers</th><th className="text-left py-3 px-4 font-semibold text-foreground">beehiiv</th><th className="text-left py-3 px-4 font-semibold text-foreground">Ghost (Pro)</th></tr></thead>
          <tbody className="text-muted">
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">2,500</td><td className="py-3 px-4">$0/yr (Launch free)</td><td className="py-3 px-4">$180/yr (Starter)</td></tr>
            <tr className="border-b border-border"><td className="py-3 px-4 font-medium text-foreground">10,000</td><td className="py-3 px-4">$516/yr (Scale)</td><td className="py-3 px-4">$348/yr (Publisher)</td></tr>
            <tr><td className="py-3 px-4 font-medium text-foreground">50,000</td><td className="py-3 px-4">$1,152/yr (Max)</td><td className="py-3 px-4">$348/yr (Publisher, unlimited members)</td></tr>
          </tbody>
        </table></div>
        <p className="text-xs text-muted mt-2">Ghost Publisher has unlimited members at $348/yr. beehiiv Scale has unlimited subscribers at $516/yr. Ghost self-hosted is ~$60&ndash;240/yr in hosting costs.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Migration Between the Two</h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">beehiiv to Ghost</p><p className="text-sm text-muted"><strong>Effort:</strong> Medium. Export subscribers as CSV, import to Ghost. Content needs to be migrated manually or via API. What breaks: beehiiv&apos;s referral program data, ad network setup, and website builder configuration.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Ghost to beehiiv</p><p className="text-sm text-muted"><strong>Effort:</strong> Medium. Ghost exports content as JSON and subscribers as CSV. What breaks: Custom themes, membership tiers (must be recreated), and SEO URLs (redirects needed).</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Common Mistakes When Choosing</h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Choosing Ghost without technical comfort</p><p className="text-sm text-muted">Ghost Pro (managed) is straightforward, but self-hosting requires server management. Custom themes require Handlebars templating knowledge. If you want plug-and-play, beehiiv is simpler.</p></div>
          <div className="rounded-lg border border-border bg-surface p-4"><p className="text-sm font-semibold text-foreground mb-1">Ignoring beehiiv&apos;s ad revenue potential</p><p className="text-sm text-muted">beehiiv&apos;s Boost network can generate meaningful ad revenue that offsets or exceeds the subscription cost. For newsletters with 5,000+ subscribers, the ad network alone can pay for the Scale plan.</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div><h3 className="text-sm font-bold text-foreground mb-1">Can I self-host beehiiv?</h3><p className="text-sm text-muted">No. beehiiv is cloud-only. Ghost is open source and can be self-hosted for free on your own server, giving you full data control.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Does Ghost take a cut of membership revenue?</h3><p className="text-sm text-muted">No. Ghost charges 0% platform fee on membership revenue. You only pay Stripe&apos;s payment processing fees (2.9% + $0.30). This is a major advantage for publishers with significant paid subscriber revenue.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Which is better for SEO?</h3><p className="text-sm text-muted">Ghost. It&apos;s a full publishing platform with built-in SEO, structured data, clean URLs, and fast page loads. beehiiv&apos;s website builder is adequate but not designed as an SEO-first platform.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">What about Substack?</h3><p className="text-sm text-muted">Substack takes 10% of paid subscription revenue. beehiiv and Ghost both offer better economics &mdash; beehiiv with growth tools, Ghost with zero platform fees. Substack&apos;s advantage is simplicity and built-in network discovery.</p></div>
          <div><h3 className="text-sm font-bold text-foreground mb-1">Which scales better?</h3><p className="text-sm text-muted">Both scale well. Ghost Publisher handles unlimited members at a fixed price. beehiiv Scale handles unlimited subscribers. For very large publications (100K+ subscribers), Ghost self-hosted gives you the most control and lowest costs.</p></div>
        </div>
      </section>

    </div>
    <div className="mt-12"><RelatedLinks
      tools={["beehiiv", "ghost"]}
      comparisons={["beehiiv-vs-ghost"]}
      guides={["when-beehiiv-scale-beats-launch", "best-email-tool-creators"]}
    /></div></article>
  </>);
}
