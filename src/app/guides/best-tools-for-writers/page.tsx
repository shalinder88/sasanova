import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Writer's Toolkit: Editing + Publishing + Newsletter",
  description:
    "The exact writer's software stack. Writing (Grammarly free + Notion free), publishing (Substack free 10% cut or Ghost $18/mo), newsletter (beehiiv free or Buttondown free), AI (ChatGPT free or Claude free). Verified pricing.",
  openGraph: {
    title: "Writer's Toolkit: Editing + Publishing + Newsletter",
    description:
      "Writing, editing, publishing, and newsletter tools for writers. Complete stack from $0 to $18/month with verified pricing.",
  },
};

export default function BestToolsForWriters() {
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
              Best Tools for Writers
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
            <span className="text-[11px] text-muted">13 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Writer&apos;s Toolkit: Editing + Publishing + Newsletter
          </h1>
          <p className="text-lg text-muted">
            Writers need a place to write, a tool to polish their work, a platform to publish, and a way to build an audience. The entire stack can cost $0/month. Here&apos;s the exact setup at every budget level &mdash; every price verified against vendor pages.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Writer&apos;s Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Option</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Paid Option</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Writing</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/notion" className="text-accent hover:underline">Notion Free</Link> &mdash; unlimited pages</td>
                  <td className="px-4 py-2.5 text-muted">Notion Plus &mdash; $12/user/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Editing</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/grammarly" className="text-accent hover:underline">Grammarly Free</Link> &mdash; grammar, 100 AI prompts/mo</td>
                  <td className="px-4 py-2.5 text-muted">Grammarly Pro &mdash; $30/mo ($12/mo annual)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Publishing</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/substack" className="text-accent hover:underline">Substack</Link> &mdash; $0/mo (10% of paid subs)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/ghost" className="text-accent hover:underline">Ghost Starter</Link> &mdash; $18/mo (0% cut)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Newsletter</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/beehiiv" className="text-accent hover:underline">beehiiv Free</Link> &mdash; 2,500 subs</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/buttondown" className="text-accent hover:underline">Buttondown Free</Link> &mdash; 100 subs</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">AI Assist</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/chatgpt" className="text-accent hover:underline">ChatGPT Free</Link> &mdash; GPT-4o mini</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/claude-ai" className="text-accent hover:underline">Claude Free</Link> &mdash; limited daily messages</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td className="px-4 py-2.5 font-semibold text-foreground">Total</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">$0/mo</td>
                  <td className="px-4 py-2.5 font-semibold text-muted">$18/mo (Ghost only)</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── Writing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Writing: Where You Draft and Organize</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Notion Free ($0/mo)</strong> gives unlimited pages with a block-based editor, databases for tracking article ideas, and the ability to organize drafts by status (idea, draft, editing, published). The 7-day page history limitation rarely matters for writing workflows. Notion Plus ($12/user/mo) adds 30-day history and unlimited file uploads.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Alternatives:</strong> Google Docs (free, better for collaboration), Obsidian (free, local-first with Markdown), or iA Writer ($49.99 one-time for Mac). Notion wins for writers who want to combine their writing, research, and project management in one tool.
          </p>

          {/* ── Editing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Editing: Polish Before You Publish</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Grammarly Free ($0/mo)</strong> catches grammar and spelling errors, detects tone, and provides 100 AI prompts/month for rewrites. The browser extension works inside Google Docs, Notion, and most web editors. For most writers, Free is genuinely enough.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Grammarly Pro ($30/mo monthly, $12/mo annual)</strong> adds advanced rewrites, plagiarism detection, and 2,000 AI prompts/month. The annual discount is massive &mdash; $12/mo vs $30/mo. Only worth upgrading if you publish frequently and use the AI rewrite features daily.
          </p>

          {/* ── Publishing ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Publishing: Get Your Work in Front of Readers</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Substack ($0/mo, 10% of paid subscriptions)</strong> is the simplest way to start publishing. Zero setup, built-in discovery through the Substack network and app, and a growing recommendation system. The 10% revenue cut (+ Stripe fees) is the trade-off &mdash; on $1,000/mo in paid subscriptions, Substack takes $100.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Ghost Starter ($18/mo, 0% revenue cut)</strong> gives you a professional publishing platform with native memberships and newsletter delivery. You keep 100% of subscription revenue (minus Stripe fees). Ghost is open source, so you own your data completely. The break-even point vs Substack: if you make over $180/mo in paid subscriptions, Ghost is cheaper.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> Substack if you want zero setup and value the network effect. Ghost if you want full brand control, no revenue sharing, and plan to earn over $180/mo from paid subscribers.
          </p>

          {/* ── Newsletter ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Newsletter: Build an Audience You Own</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">beehiiv Launch (Free, $0/mo)</strong> gives 2,500 subscribers with unlimited sends and a built-in website. Better growth tools than Substack (referral program on Scale plan). Ideal for writers who want to own their audience without a revenue cut.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Buttondown Free ($0/mo)</strong> gives 100 subscribers with Markdown support and developer-friendly features. Perfect for technical writers who prefer Markdown over visual editors. Basic ($9/mo) unlocks unlimited subscribers and custom domains.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Note:</strong> If you publish on Substack or Ghost, you already have built-in newsletter functionality. A separate newsletter tool (beehiiv or Buttondown) makes sense only if you want newsletter-specific features like referral programs or Markdown editing that your publishing platform doesn&apos;t offer.
          </p>

          {/* ── AI ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">AI Assist: Research and Editing Companion</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">ChatGPT Free ($0/mo)</strong> gives access to GPT-4o mini with limited GPT-4o messages. Useful for brainstorming headlines, generating outlines, and getting feedback on drafts. Plus ($20/mo) unlocks more GPT-4o messages and DALL-E image generation.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Claude Free ($0/mo)</strong> provides limited daily messages with strong reasoning capabilities. Particularly good for long-form editing feedback, fact-checking logic, and nuanced content analysis. Pro ($20/mo) unlocks 5x more messages and access to the most powerful models.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> Use both free tiers. ChatGPT for quick brainstorming and ideation. Claude for detailed editing feedback and research that requires careful reasoning. Neither replaces human editing judgment, but both accelerate the writing process.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Jasper ($49/mo):</strong> Built for marketing copy, not long-form writing. ChatGPT and Claude Free do more for writers at $0.</li>
            <li><strong className="text-foreground">Medium:</strong> No way to build a direct audience &mdash; Medium owns the relationship. Substack or beehiiv give you subscriber email addresses. Medium is fine for discovery but not as your primary platform.</li>
            <li><strong className="text-foreground">Scrivener ($49 one-time):</strong> Great for book-length projects, but Notion Free or Google Docs handles articles and essays better with cloud sync and collaboration.</li>
            <li><strong className="text-foreground">WordPress ($25+/mo for a useful setup):</strong> Overkill for writers who primarily publish newsletters or short-form content. Ghost or Substack are simpler and cheaper for writer-specific workflows.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Writers Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Choosing Substack for the network, then resenting the 10% cut.</strong> If you plan to monetize through paid subscriptions, do the math early. Ghost at $18/mo takes 0%. Substack&apos;s 10% cut is free money until you earn over $180/mo, then it&apos;s a growing tax.</li>
            <li><strong className="text-foreground">Paying $30/mo for Grammarly Pro monthly.</strong> The annual plan is $12/mo &mdash; a 60% discount. If you know you&apos;ll use Grammarly for a year, always go annual.</li>
            <li><strong className="text-foreground">Not building an email list.</strong> Social media followers are rented. Email subscribers are owned. Start collecting emails from your first piece of published writing. beehiiv Free costs $0.</li>
            <li><strong className="text-foreground">Using AI to replace writing instead of enhance it.</strong> AI is a brainstorming partner, not a ghostwriter. Readers can tell. Use ChatGPT/Claude for outlines and feedback, then write in your own voice.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Substack or Ghost?</h3>
          <p className="text-muted mb-4">
            Substack if you want zero setup and network discovery. Ghost ($18/mo) if you want full ownership, no revenue sharing, and better SEO control. Switch from Substack to Ghost when paid subscription revenue exceeds $180/mo.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Do I need Grammarly if I use AI?</h3>
          <p className="text-muted mb-4">
            Yes. Grammarly catches errors in real-time as you type across every app. AI assistants require you to paste text and wait for a response. They serve different purposes. Grammarly Free + ChatGPT/Claude Free is the optimal combination at $0.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">beehiiv or Buttondown for a newsletter?</h3>
          <p className="text-muted mb-4">
            beehiiv if you want growth tools (referral program, ad network, built-in website) and a higher free subscriber limit (2,500 vs 100). Buttondown if you love Markdown, want developer-friendly features, and prefer minimalism.
          </p>
        </div>

        <RelatedLinks
          tools={["grammarly", "notion", "substack", "ghost", "beehiiv", "buttondown", "chatgpt", "claude-ai"]}
          comparisons={["substack-vs-ghost", "beehiiv-vs-buttondown"]}
          guides={[
            "grammarly-vs-chatgpt-for-writing",
            "best-email-tool-creators",
            "best-newsletter-paid-subscribers",
            "notion-vs-obsidian-decision",
          ]}
        />
      </article>
    </>
  );
}
