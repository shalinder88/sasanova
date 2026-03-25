import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Email Marketing Questions Answered: 30 Things Buyers Actually Ask",
  description:
    "Direct answers to the 30 most common email marketing questions. Specific tool names, real prices, and definitive recommendations for Mailchimp, Kit, beehiiv, ActiveCampaign, and Brevo.",
};

export default function EmailMarketingFAQPage() {
  return (
    <>
      {/* Breadcrumb */}
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
              Email Marketing FAQ
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Email Marketing Questions Answered: 30 Things Buyers Actually Ask
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Direct, definitive answers to the questions people actually type into
            search bars and ask AI assistants. No fluff, no &ldquo;it
            depends&rdquo; without a follow-up. Every answer names specific tools
            and specific prices.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* Pricing Questions */}
          <section>
            <h2 className="text-xl font-bold mb-6">Pricing Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the cheapest email marketing tool?</h3>
                <p className="text-muted leading-relaxed">
                  Kit (formerly ConvertKit) Free supports up to 10,000 subscribers at $0/month. beehiiv Free covers 2,500 subscribers at $0/month. Brevo Free allows 300 emails/day to unlimited contacts. For pure subscriber count, Kit Free is the cheapest way to start.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is Mailchimp still worth it?</h3>
                <p className="text-muted leading-relaxed">
                  Only if you have under 250 contacts on the free plan. Above that, Mailchimp Standard costs $20/month for 500 contacts while Kit Free handles 10,000 for $0. Switching to Kit or beehiiv saves $240&ndash;$600/year for most users above 500 contacts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How much does email marketing cost per month?</h3>
                <p className="text-muted leading-relaxed">
                  At 1,000 subscribers: Mailchimp Standard is $13/month, Kit Creator is $29/month, beehiiv Scale is $42/month, ActiveCampaign Starter is $29/month. At 10,000 subscribers: Mailchimp jumps to $100/month, Kit to $119/month, beehiiv Scale to $42/month (up to 10K), ActiveCampaign to $139/month.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Why did my Mailchimp bill go up?</h3>
                <p className="text-muted leading-relaxed">
                  Mailchimp charges by total contacts, including unsubscribed and non-marketing contacts. They also count contacts across audiences. Clean your list monthly and archive unsubscribes &mdash; most users have 20&ndash;30% dead weight inflating their bill.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best email tool under $50/month?</h3>
                <p className="text-muted leading-relaxed">
                  beehiiv Scale at $42/month covers up to 10,000 subscribers with full features including monetization. Kit Creator at $29/month covers 1,000 subscribers with automations. ActiveCampaign Starter at $29/month covers 1,000 contacts with the best automation builder in the category.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Do any email tools charge by emails sent instead of contacts?</h3>
                <p className="text-muted leading-relaxed">
                  Brevo charges by emails sent, not contacts. Their Starter plan is $25/month for 20,000 emails to unlimited contacts. This makes Brevo dramatically cheaper for large lists with low send frequency &mdash; e.g., 50,000 contacts getting one email/month costs $25/month on Brevo vs $350+/month on Mailchimp.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is ActiveCampaign worth the price?</h3>
                <p className="text-muted leading-relaxed">
                  Yes, if you need advanced automation. ActiveCampaign Starter at $29/month for 1,000 contacts includes a visual automation builder that Mailchimp and Kit cannot match. If you only send broadcasts and simple welcome sequences, Kit or beehiiv is cheaper and sufficient.
                </p>
              </div>
            </div>
          </section>

          {/* Feature Questions */}
          <section>
            <h2 className="text-xl font-bold mb-6">Feature Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which email tool has the best automation?</h3>
                <p className="text-muted leading-relaxed">
                  ActiveCampaign has the best visual automation builder with conditional logic, split testing, and CRM triggers. Kit is second with a clean visual builder for creator workflows. Mailchimp&apos;s automation is basic &mdash; limited to linear sequences on most plans. beehiiv has minimal automation focused on newsletter-specific workflows.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I monetize a newsletter for free?</h3>
                <p className="text-muted leading-relaxed">
                  Yes. beehiiv Free includes Boosts (get paid when other newsletters recommend you) and paid subscriptions via Stripe. Substack Free also supports paid subscriptions but takes a 10% revenue cut. beehiiv takes 0% on the free plan, making it the best free monetization option.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which email platform has the best deliverability?</h3>
                <p className="text-muted leading-relaxed">
                  No platform can guarantee specific deliverability rates &mdash; anyone claiming 99%+ is marketing. ActiveCampaign and Kit generally perform well because they enforce list hygiene. Mailchimp&apos;s shared IP pools can suffer if other users on the same IP send spam. For best deliverability on any platform: authenticate with SPF/DKIM/DMARC, clean your list quarterly, and maintain above 20% open rates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which email tools have built-in landing pages?</h3>
                <p className="text-muted leading-relaxed">
                  Kit includes unlimited landing pages on all plans including Free. Mailchimp offers landing pages on all plans but limits design customization on Free. beehiiv has a built-in website/blog but not standalone landing pages. ActiveCampaign includes landing pages starting on the Plus plan at $49/month.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I sell digital products through my email tool?</h3>
                <p className="text-muted leading-relaxed">
                  Kit has a built-in commerce feature (Kit Commerce) for selling digital products, courses, and memberships directly. No other major email platform offers this natively. beehiiv supports paid subscriptions but not one-time digital product sales. For everyone else, you need a separate tool like Gumroad ($0 + 10% fee) or LemonSqueezy ($0 + 5% + 50 cents).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Which email tool is best for A/B testing?</h3>
                <p className="text-muted leading-relaxed">
                  ActiveCampaign supports A/B testing on subject lines, content, from names, and send times across all paid plans. Mailchimp offers subject line and content testing on Standard ($20/month+). Kit supports subject line testing on Creator plan ($29/month+). beehiiv includes A/B testing on Scale plan ($42/month+).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Do I need a dedicated IP address for email?</h3>
                <p className="text-muted leading-relaxed">
                  No, unless you send over 100,000 emails/month consistently. Below that volume, a dedicated IP actually hurts deliverability because you don&apos;t send enough to build IP reputation. ActiveCampaign offers dedicated IPs on Enterprise plans. Mailchimp offers them starting at $29.95/month as an add-on. Most small businesses should stay on shared IPs.
                </p>
              </div>
            </div>
          </section>

          {/* Migration Questions */}
          <section>
            <h2 className="text-xl font-bold mb-6">Migration Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How do I switch from Mailchimp to another tool?</h3>
                <p className="text-muted leading-relaxed">
                  Export your contacts as CSV from Mailchimp (Audience &gt; All Contacts &gt; Export). Import into your new platform. Recreate your automations manually &mdash; no tool auto-migrates Mailchimp automations. The whole process takes 2&ndash;4 hours for most lists under 25,000 contacts. Keep Mailchimp active for 30 days to catch stragglers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Will I lose subscribers if I switch email platforms?</h3>
                <p className="text-muted leading-relaxed">
                  You should not lose subscribers if you export/import correctly and set up DNS authentication (SPF/DKIM) on the new platform before sending. Expect a temporary 5&ndash;10% dip in open rates for 2&ndash;3 sends as inbox providers learn your new sending infrastructure. Warm up gradually: send to your most engaged segment first.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I move from Substack to beehiiv?</h3>
                <p className="text-muted leading-relaxed">
                  Yes. beehiiv has a one-click Substack import that transfers subscribers, posts, and publication settings. It takes about 15 minutes. You keep all your content and subscriber data. The main thing you lose is Substack&apos;s social network (Notes, recommendations). You gain custom domains, Boosts revenue, and no 10% platform fee on paid subscriptions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Should I switch from Mailchimp to Kit?</h3>
                <p className="text-muted leading-relaxed">
                  If you&apos;re a creator (blogger, podcaster, course creator), yes. Kit is built for creators with tag-based subscriber management, a visual automation builder, and built-in commerce. If you&apos;re an e-commerce business, consider ActiveCampaign or Brevo instead &mdash; Kit lacks e-commerce-specific features like cart abandonment and product recommendations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How long does email platform migration take?</h3>
                <p className="text-muted leading-relaxed">
                  For a list under 10,000 with basic automations: 2&ndash;4 hours. For 10,000&ndash;50,000 with complex automations: 1&ndash;2 days. For 50,000+ with e-commerce integrations: 1&ndash;2 weeks. The bottleneck is always recreating automations, not importing contacts. Budget 80% of migration time for automation rebuilds.
                </p>
              </div>
            </div>
          </section>

          {/* Use Case Questions */}
          <section>
            <h2 className="text-xl font-bold mb-6">Use Case Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best email tool for creators?</h3>
                <p className="text-muted leading-relaxed">
                  beehiiv if you want to monetize through ads and paid subscriptions (free up to 2,500 subs). Kit if you want to sell digital products and courses alongside your newsletter (free up to 10,000 subs). Substack if you want built-in social discovery and don&apos;t mind the 10% fee on paid subscriptions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best email tool for e-commerce?</h3>
                <p className="text-muted leading-relaxed">
                  Klaviyo is the industry standard for Shopify stores, starting at $20/month for 500 contacts with revenue attribution, cart abandonment, and product recommendations built in. For smaller stores on a budget, Brevo at $25/month for 20,000 emails is significantly cheaper. Mailchimp works but charges by contacts, which gets expensive fast with large customer databases.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best email tool for agencies?</h3>
                <p className="text-muted leading-relaxed">
                  ActiveCampaign supports multi-account management and white-labeling on their Plus plan ($49/month per client account). Mailchimp allows multiple audiences but charges per contact across all audiences. For agencies managing 10+ client accounts, ActiveCampaign&apos;s per-account pricing is typically 40&ndash;60% cheaper than Mailchimp.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What email tool should I use for a small business with under 500 contacts?</h3>
                <p className="text-muted leading-relaxed">
                  Kit Free. It handles up to 10,000 subscribers, includes landing pages, and has basic automations. You won&apos;t need to upgrade or pay anything until you need advanced automation or commerce features. Mailchimp Free limits you to 250 contacts, which you&apos;ll outgrow immediately.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I run a paid newsletter without Substack?</h3>
                <p className="text-muted leading-relaxed">
                  Yes. beehiiv supports paid subscriptions with 0% platform fee (just Stripe&apos;s 2.9% + 30 cents). Ghost is $9/month self-hosted or $25/month hosted and takes 0% of subscription revenue. Buttondown is $9/month and also takes 0%. Substack&apos;s 10% fee means you&apos;re paying $100/month on $1,000 in revenue &mdash; beehiiv, Ghost, or Buttondown keep that money in your pocket.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the best email tool for SaaS companies?</h3>
                <p className="text-muted leading-relaxed">
                  ActiveCampaign for companies under 10,000 contacts that need behavior-based automation ($29/month Starter). HubSpot Marketing Hub for companies that want CRM + email in one system (free for basics, $890/month for Professional with full automation). Customer.io at $100/month for product-led SaaS needing event-triggered emails.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">I just want to send a monthly newsletter. What should I use?</h3>
                <p className="text-muted leading-relaxed">
                  Kit Free for up to 10,000 subscribers. It takes 10 minutes to set up, includes a simple editor, and handles everything a basic monthly newsletter needs. You don&apos;t need ActiveCampaign, HubSpot, or any paid tool for a monthly broadcast to a small list.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Questions */}
          <section>
            <h2 className="text-xl font-bold mb-6">Technical Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What are SPF, DKIM, and DMARC?</h3>
                <p className="text-muted leading-relaxed">
                  They&apos;re DNS records that prove your emails are legitimate. SPF tells inboxes which servers can send on your behalf. DKIM adds a digital signature to verify the email wasn&apos;t modified. DMARC tells inboxes what to do with emails that fail SPF/DKIM checks. All three are required for good deliverability on every platform. Setup takes 15&ndash;30 minutes in your DNS provider.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s a good open rate for email?</h3>
                <p className="text-muted leading-relaxed">
                  Industry average is 20&ndash;25% but this metric is increasingly unreliable due to Apple Mail Privacy Protection (which auto-loads tracking pixels). Focus on click rate instead: 2&ndash;5% is good, above 5% is excellent. beehiiv and Kit both report click rates prominently. Mailchimp still emphasizes open rates in its dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">How often should I clean my email list?</h3>
                <p className="text-muted leading-relaxed">
                  Remove contacts who haven&apos;t opened or clicked in 90 days, after running a re-engagement sequence. Do this quarterly at minimum. On Mailchimp, cleaning saves direct money since you&apos;re billed by contact count. On Kit Free, cleaning keeps you under the 10,000 limit. On beehiiv and Brevo, cleaning improves deliverability even though pricing isn&apos;t contact-based.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Can I use my own domain for email sending?</h3>
                <p className="text-muted leading-relaxed">
                  Yes, and you should. Every major platform (Mailchimp, Kit, beehiiv, ActiveCampaign, Brevo) supports custom sending domains at no extra cost. Sending from yourname@yourdomain.com instead of yourname@gmail.com dramatically improves deliverability and brand trust. Setup requires adding DNS records and takes 15&ndash;30 minutes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">What&apos;s the difference between tags and lists?</h3>
                <p className="text-muted leading-relaxed">
                  Lists are separate containers &mdash; a contact on two lists counts (and costs) twice on Mailchimp. Tags are labels on a single contact &mdash; one contact with five tags is still one contact. Kit and ActiveCampaign use tags exclusively, which is cheaper and more flexible. Mailchimp uses audiences (lists) as the primary structure, which inflates your contact count and bill.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Do email tools integrate with Zapier?</h3>
                <p className="text-muted leading-relaxed">
                  All major email platforms integrate with Zapier: Mailchimp (400+ triggers/actions), ActiveCampaign (50+ triggers/actions), Kit (30+ triggers/actions), beehiiv (15+ triggers/actions), and Brevo (20+ triggers/actions). Mailchimp has the deepest Zapier integration. beehiiv&apos;s is the most limited but covers the basics (new subscriber, tag added).
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Questions */}
          <section>
            <h2 className="text-xl font-bold mb-6">Comparison Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mailchimp vs Kit: which is better?</h3>
                <p className="text-muted leading-relaxed">
                  Kit is better for creators, bloggers, and anyone selling digital products. Mailchimp is better for small businesses that need e-commerce integrations and template variety. Kit Free (10,000 subs) is dramatically more generous than Mailchimp Free (250 contacts). For most individual creators, Kit wins on price and features.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">beehiiv vs Substack: which should I pick?</h3>
                <p className="text-muted leading-relaxed">
                  beehiiv if you want to own your audience, use a custom domain, and keep 100% of subscription revenue (minus Stripe fees). Substack if you value the built-in social network (Notes, recommendations, app) and don&apos;t mind paying 10% of paid subscription revenue. beehiiv is the business choice; Substack is the community choice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">ActiveCampaign vs HubSpot for email marketing?</h3>
                <p className="text-muted leading-relaxed">
                  ActiveCampaign is better at email automation and costs far less ($29/month vs HubSpot Professional at $890/month for comparable automation features). HubSpot is better if you need CRM + email + sales tools in one platform and have the budget. For email marketing specifically, ActiveCampaign wins on price and automation depth.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Is Brevo (formerly Sendinblue) any good?</h3>
                <p className="text-muted leading-relaxed">
                  Brevo is excellent for businesses with large contact lists and moderate send frequency. Their pricing model (by emails sent, not contacts) makes them the cheapest option for 10,000+ contacts. The automation builder is decent but not as powerful as ActiveCampaign&apos;s. Brevo also includes SMS marketing, live chat, and a basic CRM at no extra cost.
                </p>
              </div>
            </div>
          </section>

          {/* Source note */}
          <section className="border-t border-border pt-6 mt-8">
            <p className="text-xs text-muted leading-relaxed">
              Prices reflect published rates as of March 2026. All platforms adjust pricing periodically.
              Verify current pricing on each vendor&apos;s website before purchasing. Sasanova is
              editorially independent &mdash; see our{" "}
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                editorial policy
              </Link>.
            </p>
          </section>
        </div>

        {/* Related Links */}
        <RelatedLinks
          tools={["mailchimp", "kit", "beehiiv", "activecampaign", "brevo"]}
          comparisons={["mailchimp-vs-kit", "beehiiv-vs-substack", "activecampaign-vs-mailchimp"]}
          guides={[
            "email-marketing-annual-cost-2026",
            "best-email-tool-creators",
            "migrate-from-mailchimp",
            "best-free-email-tool-2026",
            "email-deliverability-compared",
          ]}
        />
      </article>
    </>
  );
}
