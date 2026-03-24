import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build an AI Research Workflow That Actually Saves Time",
  description:
    "Most people use AI tools wrong for research. Here's a 3-tool workflow with Claude, Perplexity, and Notion that produces reliable output for $40/month.",
};

export default function AIResearchWorkflowGuide() {
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
            <span className="text-foreground font-medium truncate">AI Research Workflow</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Workflow
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          How to Build an AI Research Workflow That Actually Saves Time
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 11 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Most people treat AI like a search engine replacement. They open ChatGPT, ask a
            question, accept the first answer, and move on. That&apos;s not research. That&apos;s
            outsourcing your thinking to a tool that confidently generates wrong answers about
            30% of the time.
          </p>
          <p>
            Real AI-assisted research uses different tools for different stages. You wouldn&apos;t
            use a hammer to measure a board. Same logic applies here. After six months of refining
            this process, I&apos;ve landed on a three-tool stack that costs $40/month and
            genuinely saves 8&ndash;12 hours per week on research-heavy work.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The 3-Tool Stack</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Claude</td>
                    <td className="px-4 py-2.5">Pro</td>
                    <td className="px-4 py-2.5">$20/mo</td>
                    <td className="px-4 py-2.5">Deep analysis, synthesis, long-form reasoning</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Perplexity</td>
                    <td className="px-4 py-2.5">Pro</td>
                    <td className="px-4 py-2.5">$20/mo</td>
                    <td className="px-4 py-2.5">Source finding, fact-checking, citation gathering</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Notion</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">Synthesis, knowledge base, permanent notes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Total: $40/month. You can start with just Claude Pro for $20/month and add Perplexity
              when you need citation-heavy research.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Why Three Tools Instead of One</h2>
            <p>
              Each tool is genuinely better at one thing. Using ChatGPT for everything is like
              using a Swiss Army knife to build a house. Technically possible, practically foolish.
            </p>
            <p>
              <strong className="text-foreground">Claude Pro ($20/month)</strong> is the analysis
              engine. It handles 200K-token context windows, which means you can paste entire
              documents, research papers, or transcripts and ask it to find patterns, contradictions,
              or implications. Claude is measurably better than GPT-4 at long-form reasoning tasks
              and far less likely to hallucinate when working within a provided document. You&apos;re
              not asking Claude to know facts. You&apos;re asking it to think about facts you
              provide.
            </p>
            <p>
              <strong className="text-foreground">Perplexity Pro ($20/month)</strong> is the source
              finder. Unlike ChatGPT or Claude, Perplexity searches the live web and returns answers
              with inline citations you can click and verify. Pro gives you 300+ queries/day with
              their advanced model, file upload for analyzing documents, and access to academic
              paper search. It&apos;s the fastest way to find credible sources, recent statistics,
              and competitive data points.
            </p>
            <p>
              <strong className="text-foreground">Notion (free)</strong> is where synthesis happens.
              AI tools generate ephemeral outputs. If you don&apos;t capture and organize insights
              immediately, they evaporate. Notion becomes your permanent knowledge base &mdash; a
              searchable archive of every research thread, organized by project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Workflow: Step by Step</h2>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Step 1: Define the question in Notion (5 minutes)</h3>
            <p>
              Before touching any AI tool, write down exactly what you need to learn. Not a
              vague topic &mdash; a specific question with clear success criteria. Bad:
              &quot;Research CRM tools.&quot; Good: &quot;Which CRM under $30/user/month
              has native email sequencing, a mobile app rated 4+ stars, and an open API?&quot;
            </p>
            <p>
              Create a new page in your Notion research database. Write the question, the
              deadline, and what decisions this research will inform. This takes five minutes
              and saves an hour of aimless searching later.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Step 2: Source gathering with Perplexity (15&ndash;30 minutes)</h3>
            <p>
              Use Perplexity Pro to find credible sources. Start broad, then narrow. For the
              CRM example above, I&apos;d run three queries:
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 mt-2">
              <li>&quot;Best CRM software for small teams 2025 pricing comparison&quot;</li>
              <li>&quot;CRM tools with built-in email sequences under $30 per user&quot;</li>
              <li>&quot;Pipedrive vs Folk vs HubSpot Starter features comparison&quot;</li>
            </ol>
            <p className="mt-2">
              For each result, copy the cited sources into your Notion page. Don&apos;t copy
              the Perplexity summary &mdash; copy the links. You need the primary sources,
              not the AI&apos;s interpretation of them.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Step 3: Deep analysis with Claude (20&ndash;45 minutes)</h3>
            <p>
              Now paste your collected sources into Claude. This is where the big context window
              matters. You can paste pricing pages, feature comparison tables, G2 reviews, and
              support documentation into a single conversation and ask Claude to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Identify contradictions between sources</li>
              <li>Build a comparison matrix across specific criteria</li>
              <li>Flag claims that lack supporting evidence</li>
              <li>Summarize tradeoffs between the top 3 options</li>
            </ul>
            <p className="mt-2">
              The key habit: always ask Claude &quot;What am I missing?&quot; and &quot;What
              assumptions am I making that might be wrong?&quot; These meta-questions surface
              blind spots that neither Perplexity nor your own research would catch.
            </p>

            <h3 className="text-base font-bold text-foreground mt-6 mb-2">Step 4: Synthesize in Notion (15 minutes)</h3>
            <p>
              Back in Notion, write your conclusions in your own words. Not a copy-paste of
              Claude&apos;s output. Your own synthesis. This forces you to actually process
              the information instead of just storing it. Include: the decision, the reasoning,
              the sources, and the caveats.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">What AI Research Can&apos;t Do</h2>
            <p>
              I want to be honest about the limits. AI research workflows have real blind spots,
              and ignoring them will get you in trouble.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Verification of primary sources.</strong> AI
                tools cite sources. They don&apos;t verify them. A Perplexity citation might link
                to a blog post that misquoted a study. You still need to click through and check.
              </li>
              <li>
                <strong className="text-foreground">Recency of information.</strong> Claude&apos;s
                training data has a cutoff. Perplexity searches live web but can&apos;t access
                paywalled content or internal databases. For fast-moving markets (SaaS pricing
                changes monthly), always verify on the vendor&apos;s actual pricing page.
              </li>
              <li>
                <strong className="text-foreground">Judgment and context.</strong> AI can tell you
                that Pipedrive has a 4.2 rating on G2 with 1,700 reviews. It can&apos;t tell you
                that your specific use case (managing 50 warm leads from conference networking)
                makes the G2 rating irrelevant because none of those reviewers share your workflow.
              </li>
              <li>
                <strong className="text-foreground">Proprietary or confidential data.</strong> Don&apos;t
                paste NDA-protected documents into any AI tool. This sounds obvious, but people
                forget when they&apos;re deep in a research flow.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Workflow</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Academic researchers</strong> who need
                peer-reviewed citations with DOIs. This workflow finds sources fast but doesn&apos;t
                replace a proper literature review using Google Scholar, Semantic Scholar, or
                institutional databases.</li>
              <li><strong className="text-foreground">Legal or medical professionals</strong> who need
                verified, jurisdiction-specific information. AI hallucinations in these domains
                aren&apos;t just wrong &mdash; they&apos;re dangerous.</li>
              <li><strong className="text-foreground">People who won&apos;t verify sources.</strong> If
                you&apos;re going to accept AI output as truth without checking, you&apos;re better
                off doing manual research. At least then you know how weak your evidence is.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-foreground">Using ChatGPT for everything.</strong> ChatGPT
                is decent at brainstorming and first drafts. It&apos;s mediocre at analysis and
                unreliable at sourcing. Using one tool for all stages means you get average results
                at every stage.
              </li>
              <li>
                <strong className="text-foreground">Trusting AI summaries without reading the source.</strong> I
                cannot stress this enough. Perplexity will cite a source and then subtly
                misrepresent what it says. Claude will synthesize three documents and
                occasionally invent a detail that exists in none of them. Always check.
              </li>
              <li>
                <strong className="text-foreground">Not writing your own synthesis.</strong> Copy-pasting
                Claude&apos;s analysis into your notes is not research. It&apos;s delegation without
                oversight. Write conclusions in your own words or you haven&apos;t actually learned anything.
              </li>
              <li>
                <strong className="text-foreground">Spending too much on AI tools.</strong> You
                do not need ChatGPT Plus ($20), Claude Pro ($20), Perplexity Pro ($20), and
                Gemini Advanced ($20) simultaneously. That&apos;s $80/month for massive overlap.
                Pick two. Claude + Perplexity is the best combination for research specifically.
              </li>
              <li>
                <strong className="text-foreground">Skipping the question-definition step.</strong> Vague
                questions produce vague answers. Spending 5 minutes writing a precise question
                saves 30 minutes of unfocused searching.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Cost Breakdown and Alternatives</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Budget</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Stack</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tradeoff</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$0/mo</td>
                    <td className="px-4 py-2.5">Claude Free + Perplexity Free + Notion Free</td>
                    <td className="px-4 py-2.5">Limited queries, smaller context window, slower models</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$20/mo</td>
                    <td className="px-4 py-2.5">Claude Pro + Perplexity Free + Notion Free</td>
                    <td className="px-4 py-2.5">Great analysis, limited source finding (5 Pro searches/day on free)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">$40/mo</td>
                    <td className="px-4 py-2.5">Claude Pro + Perplexity Pro + Notion Free</td>
                    <td className="px-4 py-2.5">Full workflow, no compromises for most use cases</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Bottom Line</h2>
            <p>
              AI doesn&apos;t replace research. It compresses it. A workflow that used to take
              a full day now takes 90 minutes &mdash; but only if you use the right tool at each
              stage and maintain the discipline to verify what the machines tell you. The $40/month
              investment pays for itself the first time you finish a research project in an
              afternoon instead of a week.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best AI tool for research in 2026?</h3>
                <p>For deep analysis and long documents, Claude is the strongest option. For broad web research with citations, Perplexity AI is the most efficient starting point. ChatGPT sits between the two with the broadest plugin ecosystem. Most serious researchers use two or more tools in combination.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can AI replace human researchers?</h3>
                <p>No. AI compresses research time but does not replace critical thinking, source verification, or expert judgment. AI tools hallucinate facts, miss nuance, and lack domain context. Use them to accelerate collection and summarization, but always verify outputs against primary sources.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">How much does an AI research workflow cost per month?</h3>
                <p>A functional AI research stack costs about $40/month: ChatGPT Plus ($20) or Claude Pro ($20) for analysis, plus Perplexity Pro ($20) for sourced web research. Free tiers exist for all three but have meaningful usage limits that slow down serious research work.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
