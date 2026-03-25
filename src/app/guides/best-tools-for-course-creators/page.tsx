import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Course Creator Stack: Newsletter + Payment + Community",
  description:
    "The exact software stack for course creators. Newsletter (beehiiv free or Kit free), payments (Gumroad 10% fee or Lemon Squeezy 5% fee), community (Discord free), website (Ghost Starter $18/mo). All prices verified.",
  openGraph: {
    title: "Course Creator Stack: Newsletter + Payment + Community",
    description:
      "Build and sell online courses starting at $0/month. Newsletter, payments, community, and hosting with verified pricing.",
  },
};

export default function BestToolsForCourseCreators() {
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
              Best Tools for Course Creators
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">
              Persona Stack
            </span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Course Creator Stack: Newsletter + Payment + Community
          </h1>
          <p className="text-lg text-muted">
            You don&apos;t need Kajabi ($149/mo) or Teachable ($59/mo) to sell an online course. A lean stack of free and low-cost tools handles audience building, payments, and community &mdash; and you keep more of your revenue. Here&apos;s the exact setup, with every price verified.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Course Creator Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Newsletter</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/beehiiv" className="text-accent hover:underline">beehiiv</Link></td>
                  <td className="px-4 py-2.5 text-muted">Launch (Free)</td>
                  <td className="px-4 py-2.5 text-green-400">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Newsletter (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/convertkit" className="text-accent hover:underline">Kit (ConvertKit)</Link></td>
                  <td className="px-4 py-2.5 text-muted">Newsletter (Free)</td>
                  <td className="px-4 py-2.5 text-green-400">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Payments</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/gumroad" className="text-accent hover:underline">Gumroad</Link></td>
                  <td className="px-4 py-2.5 text-muted">Free (10% + $0.50/sale)</td>
                  <td className="px-4 py-2.5 text-muted">10% per sale</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Payments (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/lemonsqueezy" className="text-accent hover:underline">Lemon Squeezy</Link></td>
                  <td className="px-4 py-2.5 text-muted">Fresh (5% + $0.50/sale)</td>
                  <td className="px-4 py-2.5 text-muted">5% per sale</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Community</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/discord" className="text-accent hover:underline">Discord</Link></td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Website</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/ghost" className="text-accent hover:underline">Ghost</Link></td>
                  <td className="px-4 py-2.5 text-muted">Starter</td>
                  <td className="px-4 py-2.5 text-muted">$18/mo</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Fixed monthly cost (lean stack)</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">$0/mo + per-sale fees</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Fixed monthly cost (with Ghost)</td>
                  <td className="px-4 py-2.5 font-semibold text-muted">$18/mo + per-sale fees</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── Newsletter ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Newsletter: Build Your Audience First</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">beehiiv Launch (Free, $0/mo)</strong> gives you 2,500 subscribers with unlimited sends, a custom domain, and a built-in website. Scale ($49/mo) unlocks unlimited subscribers, the ad network, and referral program. The ad network can generate revenue that pays for the plan.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Kit Newsletter (Free, $0/mo)</strong> supports 10,000 subscribers with unlimited sends. Kit has better automation (even on free) for tagging subscribers by interest. Creator ($39/mo) unlocks advanced automations and integrations. Kit also has built-in commerce for selling digital products.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> beehiiv if you want built-in growth tools (referral program, ad network) and plan to monetize the newsletter itself. Kit if you want better automation and plan to sell courses through email sequences.
          </p>

          {/* ── Payments ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Payments: Sell Without Monthly Fees</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Gumroad ($0/mo, 10% + $0.50 per sale)</strong> is the simplest way to sell a digital product. Set up in 10 minutes, handle global tax compliance, and start selling. The 10% fee is high, but there&apos;s zero monthly cost &mdash; you only pay when you earn. On a $99 course, Gumroad takes ~$10.40 per sale (10% + $0.50 + payment processing).
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Lemon Squeezy ($0/mo, 5% + $0.50 per sale)</strong> takes half the percentage of Gumroad. On a $99 course, Lemon Squeezy takes ~$5.45 (5% + $0.50). It also handles global tax compliance as a merchant of record. Better for software and SaaS, but works for courses too. Note: +1.5% on international transactions.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The math:</strong> At 100 sales of a $99 course, Gumroad costs ~$1,040 in fees. Lemon Squeezy costs ~$545. That $495 difference pays for itself quickly. Switch to Lemon Squeezy once you validate the course works on Gumroad.
          </p>

          {/* ── Community ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Community: Where Students Connect</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Discord Free ($0/mo)</strong> gives you unlimited messages, voice/video channels for up to 25 people, and role-based access. Create a private channel for course buyers, a public channel for prospects, and voice channels for live Q&amp;A sessions. The free tier is genuinely unlimited for most community needs.
          </p>

          {/* ── Website ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Website: Your Home Base</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ghost Starter ($18/mo)</strong> gives you a professional publishing platform with native memberships. 1,000 members, 1 staff user, custom domain, and newsletter delivery built in. Ghost takes zero cut of your membership revenue (unlike Substack&apos;s 10%). Publisher ($35/mo) unlocks unlimited members and paid subscriptions.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Alternative:</strong> Skip Ghost and use beehiiv&apos;s built-in website on the free plan. It&apos;s less customizable but saves $18/mo when starting out. Add Ghost later when you want full control over your brand and SEO.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Kajabi ($149/mo):</strong> All-in-one platform that does everything but charges $1,788/year. Only worth it if you sell 3+ courses and need an integrated LMS. Before that, Gumroad/Lemon Squeezy + a simple PDF or video hosting works fine.</li>
            <li><strong className="text-foreground">Teachable ($59/mo):</strong> Good LMS but charges monthly fees plus transaction fees on lower plans. Gumroad or Lemon Squeezy are simpler for a first course.</li>
            <li><strong className="text-foreground">Circle ($89/mo):</strong> Premium community platform. Discord Free handles 90% of community needs at $0. Consider Circle only when you have 500+ paying members.</li>
            <li><strong className="text-foreground">Substack:</strong> Takes 10% of paid subscription revenue forever. Ghost takes 0%. beehiiv takes 0%. The math is clear.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Course Creators Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Building the course before the audience.</strong> Start your newsletter first. Validate demand with a landing page and email signups before creating content. beehiiv or Kit free makes this cost nothing.</li>
            <li><strong className="text-foreground">Paying for an LMS before making a single sale.</strong> Your first course can be a PDF + a series of videos hosted on Vimeo or even unlisted YouTube videos. Sell via Gumroad. Upgrade to an LMS after 200+ students.</li>
            <li><strong className="text-foreground">Choosing Gumroad when Lemon Squeezy is cheaper.</strong> Both have $0 monthly fees, but Gumroad&apos;s 10% cut vs Lemon Squeezy&apos;s 5% adds up fast once you sell consistently.</li>
            <li><strong className="text-foreground">Ignoring community as a retention tool.</strong> A Discord server where students help each other reduces refund requests and generates testimonials. It costs $0 to set up.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Can I host video courses on Gumroad?</h3>
          <p className="text-muted mb-4">
            Gumroad delivers digital files (video, PDF, zip). For a simple course, upload video files directly. For a better student experience, host videos on Vimeo and deliver access via Gumroad. Gumroad is not an LMS &mdash; it&apos;s a checkout + delivery tool.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When should I upgrade from beehiiv free to Scale?</h3>
          <p className="text-muted mb-4">
            When you exceed 2,500 subscribers or want the ad network and referral program. beehiiv Scale ($49/mo) pays for itself if Boost ads generate even $50/mo in revenue.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Is Lemon Squeezy safe after the Stripe acquisition?</h3>
          <p className="text-muted mb-4">
            Stripe acquired Lemon Squeezy in 2024. This generally signals stability, not risk. Stripe has no incentive to shut down a product that feeds revenue into Stripe&apos;s payment rails.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Do I need Ghost if I use beehiiv?</h3>
          <p className="text-muted mb-4">
            Not at first. beehiiv includes a basic website. Add Ghost ($18/mo) when you want a professional blog with SEO control, custom themes, and native memberships.
          </p>
        </div>

        <RelatedLinks
          tools={["beehiiv", "convertkit", "gumroad", "lemonsqueezy", "ghost", "discord"]}
          comparisons={["beehiiv-vs-convertkit", "gumroad-vs-lemonsqueezy"]}
          guides={[
            "best-email-tool-creators",
            "ecommerce-stack-solo-creator",
            "creator-toolkit",
            "discord-vs-slack-for-communities",
          ]}
        />
      </article>
    </>
  );
}
