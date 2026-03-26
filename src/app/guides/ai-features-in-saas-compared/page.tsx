import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "AI Features in SaaS Tools: What's Real vs What's Marketing",
  description:
    "Notion AI costs $10/user/mo extra. ClickUp Brain is $7/member/mo. Grammarly AI gives 100 free prompts/mo. HubSpot AI is bundled. ChatGPT Plus is $20/mo. Claude Pro is $20/mo. What actually works and what's a checkbox feature.",
};

export default function AiFeaturesInSaasCompared() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">AI Features in SaaS Compared</span>
          </nav>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full">Feature Deep-Dive</span>
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            AI Features in SaaS Tools: What&apos;s Real vs What&apos;s Marketing
          </h1>
          <p className="text-lg text-muted">
            Every SaaS tool now has an &ldquo;AI&rdquo; badge. Most of it is a thin wrapper around GPT-4 that adds $7&ndash;$10/user/mo to your bill. Here&apos;s what actually works, what&apos;s a checkbox feature, and when standalone AI tools like ChatGPT ($20/mo) or Claude ($20/mo) are a better investment.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">
          {/* ── Standalone AI Tools ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Standalone AI: The Baseline</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Paid</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">What You Get</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">ChatGPT</td>
                  <td className="px-4 py-2.5 text-muted">GPT-4o mini, limited GPT-4o</td>
                  <td className="px-4 py-2.5 text-muted">Plus $20/mo, Pro $200/mo</td>
                  <td className="px-4 py-2.5 text-muted">General-purpose, image gen, web browsing, files</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Claude</td>
                  <td className="px-4 py-2.5 text-muted">Sonnet, limited daily messages</td>
                  <td className="px-4 py-2.5 text-muted">Pro $20/mo, Max $100/mo</td>
                  <td className="px-4 py-2.5 text-muted">Long docs, coding, reasoning, Projects</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted mb-4">
            Before paying for AI inside your SaaS tools, consider: ChatGPT Plus ($20/mo) or Claude Pro ($20/mo) is a single payment that works across every task. Paying $7&ndash;$10/user/mo per SaaS tool for AI features can quickly exceed $50/mo if you have 3&ndash;4 tools with AI add-ons.
          </p>

          {/* ── Notion AI ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Notion AI: $10/User/Month Add-On</h2>
          <p className="text-muted mb-4">
            Notion AI is available as a $10/user/mo add-on on all plans including Free. It adds in-context writing (draft, edit, summarize, translate), database autofill, and Q&amp;A across your workspace. The Q&amp;A feature &mdash; asking questions and getting answers from your Notion content &mdash; is genuinely useful for large workspaces.
          </p>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">Notion AI Math</p>
            <p className="text-sm text-muted">5-person team: Notion Plus ($12/user/mo) + AI ($10/user/mo) = $110/mo total. Without AI: $60/mo. The AI add-on nearly doubles your bill. For most teams, Claude Pro ($20/mo) for one power user handles the same tasks &mdash; copy-paste between Claude and Notion.</p>
          </div>

          {/* ── ClickUp Brain ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">ClickUp Brain: $7/Member/Month Add-On</h2>
          <p className="text-muted mb-4">
            ClickUp Brain adds AI writing, task summarization, and standup generation to ClickUp. Available as a $7/member/mo add-on on Unlimited ($10/member/mo) and above. It cannot be added to the Free tier.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">What works:</strong> Auto-standup summaries (what each team member worked on). Task description generation. Status report drafts. <strong className="text-foreground">What doesn&apos;t:</strong> The writing quality is generic. The task suggestions are hit-or-miss. Most teams use it for standups and ignore the rest.
          </p>
          <p className="text-muted mb-4">
            A 5-person team on ClickUp Unlimited + Brain = ($10 + $7) &times; 5 = $85/mo. Without Brain: $50/mo. The $35/mo premium buys auto-standups and generic writing assistance.
          </p>

          {/* ── Grammarly AI ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Grammarly AI: 100 Free Prompts, 2,000 on Pro</h2>
          <p className="text-muted mb-4">
            Grammarly Free includes 100 AI prompts/month (GrammarlyGO). Pro ($30/mo monthly, $12/mo annual) bumps that to 2,000 prompts/month plus advanced rewrites, plagiarism detection, and brand tones. The AI prompts work inline &mdash; highlight text, rewrite, expand, or change tone.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">What works:</strong> Grammarly&apos;s core grammar and tone features are excellent regardless of AI. The AI rewrite features are useful for email tone adjustment and quick drafts. <strong className="text-foreground">What doesn&apos;t:</strong> Long-form content generation. Grammarly AI is designed for editing and rewriting, not creating from scratch.
          </p>

          {/* ── HubSpot AI ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">HubSpot AI: Bundled (No Extra Cost)</h2>
          <p className="text-muted mb-4">
            HubSpot includes AI features across tiers without a separate add-on. Free gets basic AI content assistant. Starter ($20/seat/mo) adds AI email generation. Professional ($890/mo) includes AI-powered workflow suggestions and predictive analytics.
          </p>
          <p className="text-muted mb-4">
            HubSpot&apos;s AI is the least objectionable approach &mdash; it&apos;s bundled into existing tiers rather than sold as an add-on. The email subject line and body generation is genuinely useful for sales teams. The predictive analytics on Professional is more marketing than practical for most teams.
          </p>

          {/* ── The Real vs Marketing Matrix ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Real AI vs Marketing AI</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Price</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Workspace Q&amp;A</td>
                  <td className="px-4 py-2.5 text-muted">Notion AI</td>
                  <td className="px-4 py-2.5 text-muted">$10/user/mo</td>
                  <td className="px-4 py-2.5 text-muted">Real &mdash; searches your content contextually</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Auto standups</td>
                  <td className="px-4 py-2.5 text-muted">ClickUp Brain</td>
                  <td className="px-4 py-2.5 text-muted">$7/member/mo</td>
                  <td className="px-4 py-2.5 text-muted">Real &mdash; saves 15 min/day for managers</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Grammar + tone</td>
                  <td className="px-4 py-2.5 text-muted">Grammarly</td>
                  <td className="px-4 py-2.5 text-muted">Free (100 prompts/mo)</td>
                  <td className="px-4 py-2.5 text-muted">Real &mdash; works everywhere, inline editing</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Email generation</td>
                  <td className="px-4 py-2.5 text-muted">HubSpot AI</td>
                  <td className="px-4 py-2.5 text-muted">Bundled ($20/seat Starter+)</td>
                  <td className="px-4 py-2.5 text-muted">Real &mdash; context-aware (uses CRM data)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">AI chat support</td>
                  <td className="px-4 py-2.5 text-muted">Intercom Fin</td>
                  <td className="px-4 py-2.5 text-muted">$0.99/resolution</td>
                  <td className="px-4 py-2.5 text-muted">Real &mdash; trained on your help center</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Content generation</td>
                  <td className="px-4 py-2.5 text-muted">Most SaaS AI</td>
                  <td className="px-4 py-2.5 text-muted">$7&ndash;$10/user/mo</td>
                  <td className="px-4 py-2.5 text-muted">Marketing &mdash; thin GPT wrapper, ChatGPT/Claude is better</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 text-foreground font-medium">Predictive analytics</td>
                  <td className="px-4 py-2.5 text-muted">Most SaaS AI</td>
                  <td className="px-4 py-2.5 text-muted">Premium tiers</td>
                  <td className="px-4 py-2.5 text-muted">Marketing &mdash; requires more data than most SMBs have</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Cost Comparison ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The AI Add-On Tax: What It Really Costs</h2>
          <div className="rounded-lg border border-border bg-surface p-5 my-6">
            <p className="text-sm font-semibold text-foreground mb-2">5-Person Team AI Add-On Bill</p>
            <ul className="text-sm text-muted space-y-1 list-none pl-0">
              <li>Notion AI: 5 &times; $10 = <strong className="text-foreground">$50/mo</strong></li>
              <li>ClickUp Brain: 5 &times; $7 = <strong className="text-foreground">$35/mo</strong></li>
              <li>Grammarly Pro: 5 &times; $12 (annual) = <strong className="text-foreground">$60/mo</strong></li>
              <li>Total AI add-ons: <strong className="text-foreground">$145/mo</strong></li>
              <li>Alternative: 1 ChatGPT Plus + 1 Claude Pro = <strong className="text-foreground">$40/mo</strong></li>
            </ul>
          </div>
          <p className="text-muted mb-4">
            For most teams, one or two standalone AI subscriptions (ChatGPT Plus $20/mo, Claude Pro $20/mo) cover the same needs for $40/mo versus $145/mo in scattered SaaS AI add-ons. The exceptions: Notion AI&apos;s workspace Q&amp;A and Intercom Fin&apos;s support automation are genuinely contextual and worth the premium.
          </p>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">Should I pay for Notion AI?</h3>
          <p className="text-muted mb-4">
            Only if your team has a large, active Notion workspace and uses Q&amp;A daily. For writing assistance alone, Claude Pro ($20/mo for one user) is more capable and cheaper than Notion AI ($10/user/mo &times; team size). The Q&amp;A feature that searches your workspace content is the unique value.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Is ClickUp Brain worth $7/member/mo?</h3>
          <p className="text-muted mb-4">
            For managers who spend 15+ minutes writing daily standups: yes, it pays for itself in time savings. For individual contributors: no. The writing assistance is generic and not better than ChatGPT Free.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Which standalone AI tool is better for business use?</h3>
          <p className="text-muted mb-4">
            ChatGPT Plus ($20/mo) for general tasks, image generation, and web browsing. Claude Pro ($20/mo) for long document analysis, coding, and nuanced reasoning. Many power users pay for both ($40/mo total) and use each for its strengths.
          </p>
        </div>

        <RelatedLinks
          guides={[
            "ai-research-workflow",
            "when-notion-needs-a-paid-plan",
            "when-clickup-free-hits-limits",
          ]}
          comparisons={["chatgpt-vs-claude-ai"]}
        />
      </article>
    </>
  );
}
