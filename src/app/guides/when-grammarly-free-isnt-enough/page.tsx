import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import ReviewerByline from "@/components/ReviewerByline";

export const metadata: Metadata = {
  title: "Grammarly Free vs Pro: Do You Actually Need to Pay $30/Month?",
  description:
    "Grammarly Free gives you basic grammar and 100 AI prompts/mo. Pro is $30/mo monthly ($12/mo annual) for rewrites, plagiarism, and 2,000 AI prompts. Here's who needs Pro and who doesn't.",
};

export default function WhenGrammarlyFreeIsntEnough() {
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
              Grammarly Free vs Pro
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
            Grammarly Free vs Pro: Do You Actually Need to Pay $30/Month?
          </h1>
          <p className="text-lg text-muted">
            Grammarly Free catches grammar and spelling errors and gives you 100 AI prompts per month. Pro at $30/mo (or $12/mo billed annually) adds full rewrites, plagiarism detection, brand tones, and 2,000 AI prompts. For casual writers, Free is genuinely enough. For professionals, Pro pays for itself. Here&apos;s the exact dividing line.
          </p>
        </header>

        <ReviewerByline
          reviewDate="March 2026"
          testingNotes="Verified pricing from Grammarly vendor page"
          sourceCount={2}
        />

        <div className="prose prose-invert max-w-none mt-8">
          <h2 className="text-xl font-bold mt-10 mb-4">Grammarly&apos;s Pricing</h2>
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
                  <td className="px-4 py-2.5">Basic grammar/spelling, tone detection, 100 AI prompts/month</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Pro</td>
                  <td className="px-4 py-2.5">$30/mo</td>
                  <td className="px-4 py-2.5">$144/yr ($12/mo)</td>
                  <td className="px-4 py-2.5">Advanced rewrites, plagiarism detection, 2,000 AI prompts/month, brand tones</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Enterprise</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Custom</td>
                  <td className="px-4 py-2.5">Unlimited AI prompts, SSO, SCIM, admin console, brand voice, analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Critical pricing note:</strong> Pro is $30/mo monthly but $12/mo billed annually ($144/yr). That&apos;s a 60% discount for annual billing &mdash; one of the biggest monthly-to-annual gaps in SaaS. If you decide to go Pro, always choose annual.
          </p>

          <h2 className="text-xl font-bold mt-10 mb-4">What Grammarly Free Actually Gives You</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Grammar and spelling corrections.</strong> Catches typos, subject-verb disagreements, comma splices, and common grammar errors.</li>
            <li><strong className="text-foreground">Tone detection.</strong> Tells you if your writing sounds formal, friendly, confident, etc.</li>
            <li><strong className="text-foreground">100 AI prompts/month.</strong> Use GrammarlyGO to rewrite sentences, adjust tone, or generate text &mdash; limited to 100 uses.</li>
            <li><strong className="text-foreground">Works everywhere.</strong> Browser extension, desktop app, mobile keyboard &mdash; all included in Free.</li>
          </ul>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">When to Stay on Grammarly Free</p>
            <p className="text-sm text-muted">
              You write casually (emails, Slack messages, social media posts). You don&apos;t publish long-form content professionally. You rarely need to check for plagiarism. You use fewer than 100 AI prompts per month. For everyday writing correction, Free is genuinely enough &mdash; and it&apos;s better than most paid writing tools at catching basic errors.
            </p>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">What Pro Adds (And Who Needs It)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Advanced rewrites.</strong> Full sentence and paragraph rewriting, not just corrections. Pro suggests clearer, more concise alternatives to entire passages.</li>
            <li><strong className="text-foreground">Plagiarism detection.</strong> Checks your text against billions of web pages. Essential for content marketers, students, and anyone publishing original content.</li>
            <li><strong className="text-foreground">2,000 AI prompts/month.</strong> 20x the free limit. For writers who use GrammarlyGO regularly to adjust tone, rewrite paragraphs, or draft responses.</li>
            <li><strong className="text-foreground">Brand tones.</strong> Set custom tone profiles so AI suggestions match your brand voice.</li>
            <li><strong className="text-foreground">Vocabulary enhancement.</strong> Suggests more precise or professional word choices.</li>
          </ul>

          <h2 className="text-xl font-bold mt-10 mb-4">When to Upgrade: The Exact Triggers</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-3">Upgrade to Pro when:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted">
              <li><strong className="text-foreground">You publish content professionally.</strong> Blog posts, newsletters, client reports, marketing copy. Pro&apos;s advanced rewrites catch issues Free misses &mdash; wordiness, unclear structure, passive voice patterns.</li>
              <li><strong className="text-foreground">You&apos;re a non-native English speaker writing professionally.</strong> Pro&apos;s rewrite suggestions and vocabulary enhancements are dramatically more helpful than Free&apos;s basic corrections.</li>
              <li><strong className="text-foreground">You hit the 100 AI prompt limit regularly.</strong> If you use GrammarlyGO daily for rewrites and tone adjustments, 100/month runs out fast. Pro gives you 2,000.</li>
              <li><strong className="text-foreground">You need plagiarism detection.</strong> There&apos;s no way to get this on Free. If you check content originality, Pro is the minimum.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">When Pro Pays for Itself</h2>
          <p className="text-muted mb-4">
            At $12/mo annually ($144/yr), Pro pays for itself if it saves you 30 minutes per month on writing tasks. For professional writers:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Scenario</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Time Saved/Month</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Value at $50/hr</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Pro Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">1 blog post/week</td>
                  <td className="px-4 py-2.5">2&ndash;4 hours</td>
                  <td className="px-4 py-2.5 text-green-400">$100&ndash;$200</td>
                  <td className="px-4 py-2.5">$12/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Daily client emails</td>
                  <td className="px-4 py-2.5">1&ndash;2 hours</td>
                  <td className="px-4 py-2.5 text-green-400">$50&ndash;$100</td>
                  <td className="px-4 py-2.5">$12/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Occasional social posts</td>
                  <td className="px-4 py-2.5">15&ndash;30 min</td>
                  <td className="px-4 py-2.5 text-yellow-400">$12&ndash;$25</td>
                  <td className="px-4 py-2.5">$12/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-4">The Cheaper Alternative: ChatGPT or Claude for Writing</h2>
          <p className="text-muted mb-4">
            If your primary use of Grammarly Pro is AI-powered rewrites (not grammar checking), consider whether you already pay for ChatGPT Plus ($20/mo) or Claude Pro ($20/mo). Both include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted mb-4">
            <li><strong className="text-foreground">Unlimited rewrites and tone adjustments.</strong> No prompt cap like Grammarly&apos;s 2,000/month.</li>
            <li><strong className="text-foreground">Long-form content generation.</strong> Write entire articles, not just fix them.</li>
            <li><strong className="text-foreground">More flexible than Grammarly&apos;s AI.</strong> Custom instructions, conversation context, and complex editing requests.</li>
          </ul>
          <p className="text-muted mb-4">
            The tradeoff: ChatGPT and Claude don&apos;t integrate into every text field on your computer the way Grammarly does. Grammarly&apos;s value is passive, always-on correction everywhere you type. AI chatbots require active copy-paste workflows. For many professionals, both tools serve different purposes.
          </p>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Grammarly Free really enough for everyday use?</h3>
                <p className="text-muted">For casual writing &mdash; emails, Slack messages, social media &mdash; yes. Free catches grammar errors, typos, and basic tone issues. It works in your browser, desktop apps, and on mobile. Most people who try Free never need Pro.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Why is there such a big gap between monthly and annual pricing?</h3>
                <p className="text-muted">Grammarly Pro is $30/mo monthly but $12/mo annually &mdash; a 60% discount. This is one of the most aggressive annual discounts in SaaS. Grammarly heavily incentivizes annual commitment. If you try Pro monthly and like it, switch to annual immediately.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Does Grammarly work with Google Docs?</h3>
                <p className="text-muted">Yes. Grammarly integrates natively with Google Docs, Microsoft Office, Gmail, Slack, Notion, and most browser-based text editors. Both Free and Pro work everywhere.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Grammarly Enterprise worth it?</h3>
                <p className="text-muted">Enterprise pricing is custom (not published). It adds unlimited AI prompts, SSO, SCIM provisioning, admin console, brand voice across teams, and usage analytics. It makes sense for organizations with 25+ writers who need consistent brand voice and centralized management. Below that, individual Pro licenses work fine.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["grammarly", "chatgpt", "claude-ai"]}
            comparisons={["grammarly-vs-chatgpt"]}
            guides={["grammarly-vs-chatgpt-for-writing", "saas-pricing-traps-2026"]}
          />
        </div>
      </article>
    </>
  );
}
