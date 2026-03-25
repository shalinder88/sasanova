import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Freshsales Growth to Pro: Is the Jump Worth It?",
  description:
    "Freshsales Growth is $11/seat/mo with basic CRM and built-in phone. Pro is $47/seat — a 327% jump. Here's when Growth is enough and when Pro's AI features justify the price.",
};

export default function WhenFreshsalesGrowthIsntEnough() {
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
              Freshsales Growth to Pro
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Cost Threshold
            </span>
            <span className="text-[11px] text-muted">10 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Freshsales Growth to Pro: Is the Jump Worth It?
          </h1>
          <p className="text-lg text-muted">
            Freshsales Growth at $11/seat/mo is one of the most affordable CRMs with real features: visual pipeline, AI contact scoring, sequences, and a built-in phone. Pro at $47/seat is a 327% jump that adds multiple pipelines, AI deal insights, and territory management. Here&apos;s exactly when Growth is enough and when Pro justifies 4.3x the price.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Freshsales and Pipedrive vendor pages"
          sourceCount={3}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">The Full Freshsales Pricing Ladder</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Annual</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                  <td className="px-4 py-2.5">Up to 3 users, contact management, built-in chat/email/phone</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Growth</td>
                  <td className="px-4 py-2.5">$11/seat/mo</td>
                  <td className="px-4 py-2.5">$108/seat/yr</td>
                  <td className="px-4 py-2.5">Visual pipeline, AI contact scoring, sequences, 2,000 bot sessions/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                  <td className="px-4 py-2.5">$47/seat/mo</td>
                  <td className="px-4 py-2.5">$468/seat/yr</td>
                  <td className="px-4 py-2.5">Multiple pipelines, AI deal insights, sales teams, territory management</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">$71/seat/mo</td>
                  <td className="px-4 py-2.5">$708/seat/yr</td>
                  <td className="px-4 py-2.5">Custom modules, AI forecasting, audit logs, dedicated account manager</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">What Growth Actually Gives You</h2>
          <p className="text-muted mb-4">
            Freshsales Growth at $11/seat/mo ($108/seat/yr annually) packs more features than most CRMs at this price point:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Visual deal pipeline.</strong> Drag-and-drop deal management with customizable stages.</li>
            <li><strong className="text-foreground">AI contact scoring (Freddy AI).</strong> Automatic lead scoring based on engagement and fit.</li>
            <li><strong className="text-foreground">Email sequences.</strong> Automated multi-step email outreach with tracking.</li>
            <li><strong className="text-foreground">Built-in phone.</strong> Make and receive calls directly from the CRM &mdash; no separate tool needed.</li>
            <li><strong className="text-foreground">2,000 bot sessions/month.</strong> Chat automation for your website.</li>
            <li><strong className="text-foreground">1 sales pipeline.</strong> Enough for a single product or service line.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Growth</p>
            <p className="text-sm text-muted">
              You&apos;re a solo founder or small team (1&ndash;5 people) with a single product/service line. You manage one pipeline, don&apos;t need territory management, and Growth&apos;s AI contact scoring is sufficient. At $11/seat, this is exceptional value for a full-featured CRM.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade to Pro ($47/seat)</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Pro when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li><strong className="text-foreground">You need multiple pipelines.</strong> Selling multiple products, services, or to different segments? Growth&apos;s single pipeline becomes a constraint. Pro supports multiple.</li>
              <li><strong className="text-foreground">You need AI deal insights.</strong> Pro&apos;s Freddy AI analyzes deal patterns and provides recommendations on which deals to prioritize. Growth only scores contacts, not deals.</li>
              <li><strong className="text-foreground">You manage sales territories.</strong> Pro adds territory management for geographically distributed teams.</li>
              <li><strong className="text-foreground">You have multiple sales teams.</strong> Pro supports team structures with separate pipelines, goals, and reporting per team.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Price Jump Math</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Growth Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro Monthly</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1 seat</td>
                  <td className="px-4 py-2.5">$11/mo</td>
                  <td className="px-4 py-2.5">$47/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">+$36/mo ($432/yr)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">3 seats</td>
                  <td className="px-4 py-2.5">$33/mo</td>
                  <td className="px-4 py-2.5">$141/mo</td>
                  <td className="px-4 py-2.5 text-yellow-400">+$108/mo ($1,296/yr)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">5 seats</td>
                  <td className="px-4 py-2.5">$55/mo</td>
                  <td className="px-4 py-2.5">$235/mo</td>
                  <td className="px-4 py-2.5 text-red-400">+$180/mo ($2,160/yr)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">10 seats</td>
                  <td className="px-4 py-2.5">$110/mo</td>
                  <td className="px-4 py-2.5">$470/mo</td>
                  <td className="px-4 py-2.5 text-red-400">+$360/mo ($4,320/yr)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            For a 5-person team, Pro costs $2,160/year more than Growth. That&apos;s worth it if multiple pipelines and AI deal insights help close even 1&ndash;2 extra deals per year. It&apos;s not worth it if you&apos;re using basic CRM features that Growth already covers.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">Don&apos;t Forget the Free Plan</h2>
          <p className="text-muted mb-4">
            Freshsales Free supports up to 3 users with contact and account management, built-in chat, email, and phone. For very early-stage teams that just need contact tracking, Free is genuinely functional. The main limitation: no visual pipeline, no AI scoring, no sequences.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: Pipedrive Lite</h2>
          <p className="text-muted mb-4">
            If Freshsales Pro at $47/seat feels steep but you need more than Growth offers, Pipedrive Lite at $14/seat/mo is worth considering:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Visual pipeline with 3,000 deals.</strong> Pipedrive&apos;s pipeline UX is arguably the best in CRM.</li>
            <li><strong className="text-foreground">30 custom fields.</strong> Basic customization for your sales process.</li>
            <li><strong className="text-foreground">No built-in phone.</strong> This is Freshsales&apos; unique advantage &mdash; Pipedrive charges extra for calling features.</li>
          </ul>
          <p className="text-muted mb-4">
            Pipedrive Lite ($14/seat) is $3/seat more than Freshsales Growth ($11/seat) but offers a more polished pipeline experience. The tradeoff: no AI scoring and no built-in phone at the Lite level. If you need those, Freshsales Growth at $11/seat is the better deal.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Freshsales Free worth using?</h3>
                <p className="text-muted">For up to 3 users who just need contact management and basic communication tools (chat, email, phone), yes. It&apos;s a legitimate CRM, not a trial. The limitation is no visual pipeline and no AI features &mdash; for that, you need Growth ($11/seat).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How does Freddy AI compare to other CRM AI features?</h3>
                <p className="text-muted">Freddy AI on Growth provides contact scoring based on engagement signals. On Pro, it adds deal insights and recommendations. It&apos;s competitive with HubSpot&apos;s AI features at a fraction of the cost &mdash; HubSpot requires Professional ($890/mo flat) for comparable AI capabilities.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is the built-in phone actually good?</h3>
                <p className="text-muted">It&apos;s functional for basic calling needs &mdash; click-to-call, call recording, and automatic logging to the contact record. For high-volume outbound calling, a dedicated dialer (Aircall, Dialpad) will be better. But for 10&ndash;20 calls per day, the built-in phone saves you $30&ndash;$50/month on a separate tool.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Enterprise ($71/seat) ever worth it?</h3>
                <p className="text-muted">Enterprise adds custom modules, AI-powered forecasting, audit logs, and a dedicated account manager. It makes sense for organizations with 25+ seats that need custom CRM structures and compliance features. Below that, Pro covers advanced needs adequately.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["freshsales", "pipedrive", "hubspot-crm"]}
            comparisons={["freshsales-vs-pipedrive", "freshsales-vs-hubspot-crm"]}
            guides={["when-pipedrive-needs-upgrade", "when-free-crm-costs-more"]}
          />
        </div>
      </article>
    </>
  );
}
