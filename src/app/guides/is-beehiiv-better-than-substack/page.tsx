import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Is beehiiv Better Than Substack? (For Growth and Control, Yes)",
  description:
    "beehiiv Scale at $49/mo gives you custom domains, ad network, and referral program. Substack is free but takes 10% of paid subscription revenue. beehiiv wins for serious operators.",
};

export default function IsBeehiivBetterThanSubstackPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Is beehiiv Better Than Substack?</span>
          </nav>
        </div>
      </div>
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">Quick Answer</span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">Is beehiiv Better Than Substack?</h1>
          <p className="text-muted text-lg leading-relaxed">
            <strong className="text-foreground">For growth tools, monetization control, and custom branding,
            yes.</strong> Substack is free to use but takes 10% of paid subscription revenue
            (plus Stripe fees). beehiiv Launch is free for 2,500 subscribers. beehiiv Scale
            at $49/month gives unlimited subscribers, ad network (Boosts), referral program,
            and full custom domains with no revenue share. Substack wins if you value
            built-in discovery through the Substack network and app.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted"><span>8 min read</span><span className="w-1 h-1 rounded-full bg-border" /><span>Updated March 2026</span></div>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-3">beehiiv Wins On</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>No revenue share on paid subscriptions (Substack takes 10%)</li>
              <li>Built-in ad network (Boosts) for additional revenue</li>
              <li>Referral program for organic growth</li>
              <li>Custom domains and full brand control</li>
              <li>A/B testing, polls, segmentation on Scale tier</li>
              <li>API access on Max ($109/mo)</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">Substack Wins On</h2>
            <ul className="list-disc list-inside text-muted space-y-1.5 text-sm">
              <li>Built-in discovery network (recommendations, Substack app)</li>
              <li>Simplest possible setup (literally zero configuration)</li>
              <li>Community features (Notes, Chat)</li>
              <li>Free forever with unlimited subscribers (if you accept the 10% cut)</li>
              <li>Podcast hosting included</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">The Caveat</h2>
            <p className="text-muted leading-relaxed">
              The 10% revenue share math changes as you grow. At $5/month subscriptions with
              1,000 paid subscribers, Substack takes $500/month ($6,000/year). beehiiv Scale
              at $49/month ($588/year) saves you $5,412/year. The breakeven is roughly 100
              paid subscribers at $5/month. Below that, Substack free model is cheaper.
              Above that, beehiiv Scale saves real money.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Can I move from Substack to beehiiv?</h3>
                <p className="text-sm text-muted">Yes. beehiiv has a one-click Substack import. Subscribers, posts, and paid subscriptions transfer. You may lose Substack network discovery.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is beehiiv Launch (free) better than Substack (free)?</h3>
                <p className="text-sm text-muted">beehiiv Launch is limited to 2,500 subscribers with beehiiv branding. Substack free has unlimited subscribers but takes 10% of paid revenue. For pure free newsletters, Substack has no subscriber limit.</p>
              </div>
            </div>
          </section>
          <RelatedLinks
            tools={["beehiiv", "substack"]}
            comparisons={["beehiiv-vs-substack"]}
            guides={["migrate-substack-to-beehiiv", "beehiiv-pricing-explained", "best-email-tool-creators"]}
          />
        </div>
      </article>
    </>
  );
}
