import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "beehiiv Setup Guide: From Zero to First Newsletter in 60 Minutes",
  description:
    "Set up beehiiv from scratch: account creation, custom domain DNS, template design, subscriber import from Mailchimp/Substack, monetization setup, and your first send checklist.",
};

export default function BeehiivSetupGuide() {
  return (
    <>
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
              beehiiv Setup Guide
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Implementation Guide
            </span>
            <span className="text-[11px] text-muted">16 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            beehiiv Setup Guide: From Zero to First Newsletter in 60 Minutes
          </h1>
          <p className="text-lg text-muted">
            beehiiv is the newsletter platform that took the creator economy by storm because it does one thing well: help you grow and monetize a newsletter. This guide takes you from zero to sending your first issue in about an hour. No fluff, no detours into features you don&apos;t need yet.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── Total Time Estimate ── */}
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Total Setup Time: ~60 Minutes</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Account creation &amp; plan selection &mdash; 5 minutes</li>
              <li>Custom domain setup &mdash; 15 minutes (plus DNS propagation wait)</li>
              <li>Design your first template &mdash; 15 minutes</li>
              <li>Import subscribers &mdash; 10 minutes</li>
              <li>Monetization setup &mdash; 10 minutes</li>
              <li>Analytics &amp; first send &mdash; 5 minutes</li>
            </ul>
          </div>

          {/* ── Step 1: Account Creation ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 1: Account Creation and Plan Selection <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <p className="text-muted mb-4">
            Go to beehiiv.com and sign up. You need an email and a publication name. The publication name becomes your subdomain (yourname.beehiiv.com) and shows up in email &ldquo;from&rdquo; fields, so pick something you&apos;d actually want readers to see.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Which Plan to Start On</h3>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Start Here If...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Launch (free)</td>
                  <td className="px-4 py-2.5">$0/mo</td>
                  <td className="px-4 py-2.5">Under 2,500 subscribers. Unlimited sends, custom domain included. Good enough for most new newsletters.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Scale</td>
                  <td className="px-4 py-2.5">$43/mo (or $29/mo annual)</td>
                  <td className="px-4 py-2.5">You want the ad network, referral program, polls, or premium themes from day one. Or you already have 2,500+ subscribers.</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Max</td>
                  <td className="px-4 py-2.5">$99/mo (or $66/mo annual)</td>
                  <td className="px-4 py-2.5">You need API access, advanced analytics, or priority support. Typically for newsletters that are already generating revenue.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Start on Launch (free) unless you have a specific reason not to.</strong> You get unlimited sends, a custom domain, a website, and the core editor. The free tier is genuinely functional, not a crippled demo. Upgrade when you need monetization features or outgrow 2,500 subscribers.
          </p>

          {/* ── Step 2: Custom Domain ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 2: Custom Domain Setup <span className="text-sm font-normal text-muted">(15 minutes + DNS wait)</span></h2>
          <p className="text-muted mb-4">
            A custom domain (newsletter.yourdomain.com or just yourdomain.com) is free on all beehiiv plans. Set it up now &mdash; changing it later means broken links and confused subscribers.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Settings &rarr; Website &rarr; Custom Domain.</strong></li>
            <li><strong className="text-foreground">Enter your domain.</strong> For a newsletter-specific subdomain, use something like newsletter.yourdomain.com. For a standalone newsletter brand, use the root domain.</li>
            <li><strong className="text-foreground">Copy the DNS records beehiiv gives you.</strong> You&apos;ll get a CNAME record (and sometimes an A record or TXT record for verification).</li>
            <li><strong className="text-foreground">Log in to your domain registrar (Namecheap, Cloudflare, GoDaddy, Google Domains, etc.).</strong></li>
            <li>
              <strong className="text-foreground">Add the DNS records.</strong> Here&apos;s what it looks like:
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">CNAME record:</strong> Host/Name = the subdomain (e.g., &ldquo;newsletter&rdquo;), Value = the target beehiiv provides.</li>
                <li><strong className="text-foreground">If using root domain:</strong> Some registrars need an A record or ALIAS record instead of CNAME. Cloudflare handles this automatically with CNAME flattening.</li>
              </ul>
            </li>
            <li><strong className="text-foreground">Set TTL to the lowest available</strong> (300 or &ldquo;Automatic&rdquo;). This speeds up propagation.</li>
            <li><strong className="text-foreground">Go back to beehiiv and click &ldquo;Verify.&rdquo;</strong> DNS propagation takes 5 minutes to 48 hours, but usually resolves within 30 minutes. If verification fails, wait and retry &mdash; don&apos;t change the records.</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">DNS Troubleshooting</p>
            <p className="text-sm text-muted">
              If your domain doesn&apos;t verify after an hour: check for conflicting records (another CNAME or A record on the same subdomain), make sure you didn&apos;t include &ldquo;http://&rdquo; in the record value, and confirm Cloudflare proxy is set to &ldquo;DNS only&rdquo; (gray cloud) if you use Cloudflare.
            </p>
          </div>

          {/* ── Step 3: Design Template ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 3: Design Your First Template <span className="text-sm font-normal text-muted">(15 minutes)</span></h2>
          <p className="text-muted mb-4">
            beehiiv&apos;s editor is block-based, similar to Notion. You don&apos;t need design skills. What you need is a repeatable structure for your newsletters. Set that up once and reuse it.
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Write &rarr; New Post.</strong></li>
            <li><strong className="text-foreground">Set your header image (or skip it).</strong> Many successful newsletters don&apos;t use header images. If you do, keep it under 600px wide and under 200KB for fast loading.</li>
            <li>
              <strong className="text-foreground">Build a repeatable structure:</strong>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Brief intro (2&ndash;3 sentences, personal tone)</li>
                <li>Main content section (your article, curated links, or analysis)</li>
                <li>Optional secondary section (quick hits, links, recommendations)</li>
                <li>Call to action (share, reply, upgrade)</li>
              </ul>
            </li>
            <li><strong className="text-foreground">Customize email settings.</strong> Settings &rarr; Writing &rarr; set default &ldquo;From&rdquo; name and preview text format. The &ldquo;From&rdquo; name matters more than the subject line for open rates &mdash; use your actual name or your newsletter brand, not a company name.</li>
            <li><strong className="text-foreground">Save as a draft template.</strong> beehiiv doesn&apos;t have a formal &ldquo;template&rdquo; system like email marketing tools &mdash; the pattern is to duplicate a previous post and edit. Create your first post with the structure above and use it as your master template going forward.</li>
          </ol>

          {/* ── Step 4: Import Subscribers ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 4: Import Subscribers <span className="text-sm font-normal text-muted">(10 minutes)</span></h2>
          <p className="text-muted mb-4">
            If you have existing subscribers in Mailchimp, Substack, or a CSV, bring them over now. beehiiv counts active subscribers only, so importing a clean list matters.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">From Mailchimp</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">In Mailchimp: Audience &rarr; All contacts &rarr; Export Audience.</strong> Download the CSV.</li>
            <li><strong className="text-foreground">Clean the export.</strong> Mailchimp exports include unsubscribed, cleaned (bounced), and archived contacts. Delete every row where the status is not &ldquo;subscribed.&rdquo; Importing unsubscribed contacts violates CAN-SPAM and kills your deliverability.</li>
            <li><strong className="text-foreground">In beehiiv: Settings &rarr; Import &rarr; Upload CSV.</strong></li>
            <li><strong className="text-foreground">Map the columns.</strong> At minimum: email, first name. Tags and subscriber date are optional but useful for segmentation later.</li>
            <li><strong className="text-foreground">Select &ldquo;Skip confirmation email.&rdquo;</strong> These people already opted in. Making them re-confirm loses 30&ndash;50% of your list.</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">From Substack</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">In Substack: Settings &rarr; Exports &rarr; Export subscriber list.</strong></li>
            <li><strong className="text-foreground">The export includes email, subscription date, and paid status.</strong> Substack exports are already clean &mdash; they only include active subscribers.</li>
            <li><strong className="text-foreground">Upload to beehiiv the same way.</strong> Map the email column and skip confirmation.</li>
            <li><strong className="text-foreground">For paid subscribers:</strong> You&apos;ll need to manually recreate paid tiers in beehiiv (Step 5) and notify paid subscribers to resubscribe through beehiiv&apos;s payment system. Substack paid subscriptions don&apos;t transfer automatically.</li>
          </ol>

          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Import Tip</p>
            <p className="text-sm text-muted">
              Send your first beehiiv newsletter within 48 hours of importing. Subscribers who haven&apos;t heard from you in weeks will forget they signed up and mark you as spam. If your list has been dormant for more than 30 days, send a re-engagement email first to the most recent subscribers only.
            </p>
          </div>

          {/* ── Step 5: Monetization ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 5: Set Up Monetization <span className="text-sm font-normal text-muted">(10 minutes)</span></h2>
          <p className="text-muted mb-4">
            beehiiv has three built-in monetization channels. You don&apos;t need all three on day one, but understanding them now saves setup time later.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Boosts (Recommendation Network)</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Monetize &rarr; Boosts.</strong> Boosts let you earn money by recommending other newsletters to your subscribers (and pay to have other newsletters recommend you).</li>
            <li><strong className="text-foreground">Browse the Boost marketplace.</strong> You&apos;ll see newsletters willing to pay $1&ndash;$5+ per subscriber you send them.</li>
            <li><strong className="text-foreground">Enable Boosts as a recommender.</strong> When you&apos;re ready, beehiiv adds recommendation cards to your signup confirmation page. Subscribers who click through and subscribe to the partner newsletter earn you the Boost payout.</li>
            <li><strong className="text-foreground">Requires Scale plan ($43/mo).</strong> Not available on Launch (free).</li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Paid Subscriptions</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Monetize &rarr; Premium.</strong></li>
            <li><strong className="text-foreground">Connect Stripe.</strong> beehiiv uses Stripe for payment processing. If you don&apos;t have a Stripe account, create one now (takes 5 minutes, instant approval for most countries).</li>
            <li><strong className="text-foreground">Set your pricing tiers.</strong> Most newsletters start with $5&ndash;$10/month or $50&ndash;$100/year. Annual subscriptions have lower churn &mdash; offer a discount to push annual.</li>
            <li><strong className="text-foreground">Create premium-only content.</strong> In the editor, you can lock sections behind the paywall. Free subscribers see a teaser; paid subscribers see everything.</li>
            <li><strong className="text-foreground">Requires Scale plan or higher.</strong></li>
          </ol>

          <h3 className="text-lg font-semibold mt-6 mb-3">Ad Network</h3>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Go to Monetize &rarr; Ad Network.</strong></li>
            <li><strong className="text-foreground">Apply to the beehiiv Ad Network.</strong> Typically requires 1,000+ subscribers and consistent sending. Approval takes a few days.</li>
            <li><strong className="text-foreground">Once approved, ads are automatically inserted into your newsletters.</strong> You control placement and frequency. Revenue is based on CPM (cost per thousand impressions).</li>
          </ol>

          {/* ── Step 6: Analytics ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Step 6: Connect Analytics <span className="text-sm font-normal text-muted">(5 minutes)</span></h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">beehiiv has built-in analytics</strong> for open rates, click rates, subscriber growth, and top-performing posts. These work out of the box &mdash; no setup required.</li>
            <li><strong className="text-foreground">For website analytics:</strong> Settings &rarr; Integrations &rarr; add your Google Analytics 4 tracking ID or Plausible snippet. This tracks website visitors separately from email engagement.</li>
            <li><strong className="text-foreground">UTM parameters are automatic.</strong> beehiiv adds UTM tags to links in your emails so Google Analytics can attribute traffic to specific newsletter issues.</li>
          </ol>

          {/* ── First Send Checklist ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">First Send Checklist</h2>
          <p className="text-muted mb-4">
            Before hitting &ldquo;Send,&rdquo; run through this list:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Send a test email to yourself.</strong> Check formatting on mobile (60%+ of email opens are mobile). Look for broken images, weird spacing, and cut-off subject lines.</li>
            <li><strong className="text-foreground">Check your &ldquo;From&rdquo; name and email address.</strong> Readers see this before the subject line. &ldquo;Jane from The Morning Rundown&rdquo; beats &ldquo;noreply@beehiiv.com.&rdquo;</li>
            <li><strong className="text-foreground">Write a subject line under 50 characters.</strong> Longer subject lines get truncated on mobile. Test it by looking at it on your phone.</li>
            <li><strong className="text-foreground">Set preview text.</strong> The gray text after the subject line in inbox view. If you leave it blank, email clients pull the first line of your email &mdash; which is often &ldquo;View in browser.&rdquo;</li>
            <li><strong className="text-foreground">Choose your audience.</strong> Send to all subscribers or a specific segment. For your first send, &ldquo;All active subscribers&rdquo; is fine.</li>
            <li><strong className="text-foreground">Pick your send time.</strong> Tuesday through Thursday, 8&ndash;10 AM in your audience&apos;s timezone performs best for most newsletters. But any consistent time beats an optimized time you don&apos;t stick to.</li>
            <li><strong className="text-foreground">Enable web hosting for the post.</strong> This publishes the newsletter as a web page on your domain, which helps SEO and gives you a shareable link.</li>
          </ul>

          {/* ── Common Setup Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Setup Mistakes</h2>
          <ul className="list-disc pl-5 space-y-3 text-muted mb-4">
            <li>
              <strong className="text-foreground">Importing unsubscribed contacts from Mailchimp.</strong> Mailchimp exports everyone, including people who unsubscribed. Importing them violates their opt-out preference, triggers spam complaints, and can get your sending domain flagged. Filter for &ldquo;subscribed&rdquo; status only.
            </li>
            <li>
              <strong className="text-foreground">Skipping custom domain setup.</strong> Sending from yourname@beehiiv.com or having your website at yourname.beehiiv.com looks unprofessional and makes migration harder later. Custom domains are free on all plans. Set it up on day one.
            </li>
            <li>
              <strong className="text-foreground">Over-designing the first newsletter.</strong> beehiiv&apos;s best-performing newsletters are simple: text, a few links, maybe one image. Spending hours on custom CSS and complex layouts before you have 100 subscribers is wasted effort. Design follows audience &mdash; not the other way around.
            </li>
            <li>
              <strong className="text-foreground">Paying for Scale before you need it.</strong> Launch (free) supports 2,500 subscribers with unlimited sends. If you have under 2,500 subscribers and don&apos;t need Boosts or paid subscriptions, Scale is a premature expense. Upgrade when you hit the subscriber limit or want monetization features.
            </li>
            <li>
              <strong className="text-foreground">Not sending within 48 hours of importing subscribers.</strong> Imported subscribers don&apos;t know you switched platforms. A gap in communication leads to &ldquo;who is this?&rdquo; spam reports. Import and send immediately.
            </li>
          </ul>

          {/* ── What to Skip on Day 1 ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip on Day 1</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Referral program setup.</strong> You need an active, engaged audience before referrals work. Get 10 issues sent and stable open rates before turning this on.</li>
            <li><strong className="text-foreground">A/B testing subject lines.</strong> You need statistically significant audience size (1,000+ subscribers minimum) for A/B tests to produce meaningful results.</li>
            <li><strong className="text-foreground">Advanced segmentation.</strong> You have no behavioral data on day one. Send to your full list for the first 4&ndash;6 issues, then segment based on what people actually click.</li>
            <li><strong className="text-foreground">Custom API integrations.</strong> Unless you&apos;re a developer with a specific need, the API is overkill on day one. Zapier covers most automation needs.</li>
            <li><strong className="text-foreground">Paid subscription tiers.</strong> Build a free audience first. Readers won&apos;t pay for a newsletter they&apos;ve never read. Aim for at least 10&ndash;20 issues before launching paid content.</li>
          </ul>

          {/* ── FAQ ── */}
          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is beehiiv actually free?</h3>
                <p className="text-muted">Yes. The Launch plan is $0 with 2,500 subscribers, unlimited email sends, a custom domain, and a hosted website. No credit card required. The limitations are: beehiiv branding in emails, no Boosts/referral program, no paid subscriptions, and no ad network. For a new newsletter, those limitations rarely matter.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How do I set up a custom domain on beehiiv?</h3>
                <p className="text-muted">Settings &rarr; Website &rarr; Custom Domain. beehiiv gives you DNS records (typically a CNAME). Add those records at your domain registrar (Namecheap, Cloudflare, GoDaddy, etc.). Verification takes 5 minutes to 48 hours, usually under 30 minutes. Custom domains are free on all plans.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I move my Mailchimp subscribers to beehiiv?</h3>
                <p className="text-muted">Yes. Export your Mailchimp audience as CSV, filter for subscribed-only contacts, then upload to beehiiv. Skip confirmation email so existing subscribers don&apos;t have to re-opt-in. The whole process takes about 10 minutes. Note: automations and email templates don&apos;t transfer &mdash; you rebuild those in beehiiv.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When should I upgrade from Launch to Scale?</h3>
                <p className="text-muted">When you exceed 2,500 subscribers or when you want monetization features (Boosts, paid subscriptions, ad network). If you&apos;re under 2,500 subscribers and just publishing free content, there&apos;s no reason to pay. Scale is $43/month (or $29/month on annual billing).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does beehiiv handle paid subscriptions?</h3>
                <p className="text-muted">Yes, on Scale plan and above. beehiiv integrates with Stripe for payment processing. You set monthly/annual pricing, and beehiiv handles gating content, managing subscriber access, and processing payments. Stripe&apos;s standard 2.9% + $0.30 per transaction applies. beehiiv does not take an additional revenue cut on Scale.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the best send frequency for a new newsletter?</h3>
                <p className="text-muted">Weekly. Consistency matters more than frequency. A weekly newsletter you actually send every week beats a daily newsletter you burn out on after two weeks. Once you have a rhythm, you can increase frequency. Tuesday, Wednesday, or Thursday mornings tend to perform best.</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
