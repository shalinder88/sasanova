import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "AI Meeting Assistants: What Actually Works and What's Marketing Hype",
  description:
    "Every AI meeting tool claims to save hours. Here's what Otter, Fireflies, Fathom, and tl;dv actually deliver — and when AI notes don't help at all.",
};

export default function MeetingRecordingComparisonPage() {
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
              AI Meeting Assistants
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Productivity
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            AI Meeting Assistants: What Actually Works and What&apos;s Marketing Hype
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Every tool in this category promises to &quot;save hours of meeting notes.&quot;
            After testing four of them across real calls, here&apos;s what that promise
            actually looks like in practice.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Honest Truth */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Uncomfortable Baseline</h2>
            <p className="text-muted leading-relaxed mb-3">
              Here&apos;s what none of these tools advertise: transcription accuracy for all
              major AI meeting assistants sits between 90% and 95% on clean audio. That means
              1 in 10 to 1 in 20 words will be wrong. On a 30-minute call with roughly 4,500
              words spoken, that&apos;s 225 to 450 errors.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Most errors are minor &mdash; wrong articles, missed filler words, slight
              mishearings that context makes obvious. But names, numbers, and technical terms
              get mangled regularly. If your meeting includes someone saying a product costs
              &quot;$15,000&quot; and the transcript reads &quot;$50,000,&quot; that&apos;s the
              kind of error that matters.
            </p>
            <p className="text-muted leading-relaxed">
              Accuracy drops further with accents, background noise, crosstalk, and poor
              microphone quality. A well-run Zoom call with headsets: 93&ndash;95%.
              A speakerphone in a conference room with six people talking over each other: 80%
              on a good day.
            </p>
          </section>

          {/* Otter.ai */}
          <section>
            <h2 className="text-xl font-bold mb-3">Otter.ai: Best for Individuals</h2>
            <p className="text-muted leading-relaxed mb-3">
              Otter has been in the transcription game longer than most competitors, and it
              shows. The free tier is genuinely generous: 300 minutes per month with AI-generated
              summaries. For a solo founder or freelancer taking 10&ndash;15 calls a month,
              that&apos;s often enough.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The Pro plan ($16.99/month) bumps you to 1,200 minutes and adds advanced search,
              custom vocabulary, and the ability to import audio/video files. The Business plan
              ($30/user/month) adds admin controls and analytics.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Where Otter falls short: CRM integration is limited. If you need meeting notes
              to automatically populate Salesforce or HubSpot, you&apos;ll need Zapier as a
              bridge. The collaboration features exist but feel secondary &mdash; Otter was
              built as a personal tool that added team features later, and that origin shows.
            </p>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Best for</p>
              <p className="text-sm text-muted">
                Solo users who attend lots of meetings, need searchable transcripts, and
                don&apos;t need CRM integration. The free tier alone makes it worth testing
                before committing to anything paid.
              </p>
            </div>
          </section>

          {/* Fireflies.ai */}
          <section>
            <h2 className="text-xl font-bold mb-3">Fireflies.ai: Best for Sales Teams</h2>
            <p className="text-muted leading-relaxed mb-3">
              Fireflies was built with sales in mind, and that focus shows in three specific
              ways: native CRM integrations (Salesforce, HubSpot, Pipedrive), conversation
              intelligence features (talk-to-listen ratios, sentiment analysis), and support
              for 60+ languages.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The free plan gives you limited transcription credits with AI summaries. The
              Pro plan ($18/user/month) adds unlimited transcription, CRM integration,
              conversation intelligence, and custom vocabulary. The Business plan
              ($29/user/month) adds video recording, sentiment analysis, and admin analytics.
            </p>
            <p className="text-muted leading-relaxed">
              For a five-person sales team running 20+ discovery calls per week, Fireflies
              at $90/month (Pro, 5 users) eliminates the need for manual CRM note entry. If
              each rep saves 30 minutes per day on notes, the ROI calculation is trivial. The
              tool pays for itself on day one.
            </p>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Who should NOT use Fireflies</p>
              <p className="text-sm text-muted">
                Individual users without CRM needs. You&apos;re paying for sales-team features
                you won&apos;t use. Otter or Fathom gives you better value for personal
                transcription.
              </p>
            </div>
          </section>

          {/* Fathom */}
          <section>
            <h2 className="text-xl font-bold mb-3">Fathom: Cleanest UX, Most Generous Free Tier</h2>
            <p className="text-muted leading-relaxed mb-3">
              Fathom is the newcomer that keeps surprising people. The free plan includes
              unlimited recording and transcription for Zoom, Google Meet, and Teams. Unlimited.
              No minute caps. The AI summaries are included.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The interface is noticeably cleaner than competitors. After a call, you get a
              structured summary with action items, key topics, and a full transcript. You
              can click on any summary point to jump to that moment in the recording. It
              sounds simple because it is &mdash; Fathom does less than Fireflies but does
              it better.
            </p>
            <p className="text-muted leading-relaxed">
              The paid tiers ($32/user/month for Standard, $39/user/month for Pro) add CRM
              integration, team features, and workflow automations. Fathom is younger and
              smaller than Otter or Fireflies, which means two things: the product iterates
              fast, and the long-term bet is less certain. Their recent Series B gives them
              runway, but they&apos;re still building features that competitors have had
              for years.
            </p>
          </section>

          {/* tl;dv */}
          <section>
            <h2 className="text-xl font-bold mb-3">tl;dv: The Middle Ground</h2>
            <p className="text-muted leading-relaxed mb-3">
              tl;dv lands between Fathom&apos;s simplicity and Fireflies&apos; feature density.
              The free plan includes unlimited recording and transcription with AI summaries.
              The Pro plan ($18/user/month) adds CRM integration, multi-meeting reports, and
              custom AI templates.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The standout feature: Notion and Slack integration that actually works well.
              Meeting summaries auto-post to Slack channels or sync to Notion databases. For
              teams that live in those tools, this saves the manual copy-paste step that makes
              people stop using meeting assistants after the first week.
            </p>
            <p className="text-muted leading-relaxed">
              The downside is breadth. tl;dv supports fewer conferencing platforms than Fireflies
              and has a smaller integration library overall. If your team uses less common meeting
              software, check compatibility before committing.
            </p>
          </section>

          {/* Cost Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">Cost Comparison (Per User/Month)</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pro/Paid</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Team/Business</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">CRM Integration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Otter.ai</td>
                    <td className="px-4 py-2.5 text-muted">300 min/mo</td>
                    <td className="px-4 py-2.5 text-muted">$16.99/mo</td>
                    <td className="px-4 py-2.5 text-muted">$30/mo</td>
                    <td className="px-4 py-2.5 text-muted">Via Zapier</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Fireflies.ai</td>
                    <td className="px-4 py-2.5 text-muted">Limited credits</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">$29/mo</td>
                    <td className="px-4 py-2.5 text-muted">Native</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Fathom</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$32/mo</td>
                    <td className="px-4 py-2.5 text-muted">$39/mo</td>
                    <td className="px-4 py-2.5 text-muted">Paid plans</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">tl;dv</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">$18/mo</td>
                    <td className="px-4 py-2.5 text-muted">$59/mo</td>
                    <td className="px-4 py-2.5 text-muted">Pro plan+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              Prices reflect per-user/month on annual billing where available. Free tiers may
              have feature restrictions beyond minute/credit limits. Check each provider for
              current pricing.
            </p>
          </section>

          {/* When AI Notes Don't Help */}
          <section>
            <h2 className="text-xl font-bold mb-3">When AI Meeting Notes Don&apos;t Help</h2>
            <p className="text-muted leading-relaxed mb-3">
              AI meeting assistants solve a specific problem: turning long meetings into
              searchable, shareable artifacts. That problem doesn&apos;t exist in every context.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Small teams (2&ndash;3 people) with good communication.</strong>{" "}
                  If everyone was in the meeting and you follow up with a quick Slack message,
                  a full transcript adds bureaucracy without value. You already know what was said.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Informal brainstorming and creative sessions.</strong>{" "}
                  These meetings are about energy and direction, not commitments and action items.
                  Transcribing them creates a false sense of documentation where the real output
                  was a shift in thinking, not a list of tasks.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Sensitive or confidential discussions.</strong>{" "}
                  These tools store recordings on their servers. HR conversations, legal
                  discussions, board meetings with material non-public information &mdash; think
                  carefully about where that data lives and who can access it.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Meetings that shouldn&apos;t exist.</strong>{" "}
                  If a meeting could have been an email, transcribing it doesn&apos;t fix the
                  underlying problem. The best meeting productivity tool is canceling the meeting.
                </span>
              </li>
            </ul>
          </section>

          {/* Common Mistakes */}
          <section>
            <h2 className="text-xl font-bold mb-3">Common Mistakes</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">1.</span>
                <span>
                  <strong className="text-foreground">Recording without consent.</strong>{" "}
                  Laws vary by jurisdiction, but recording calls without informing participants
                  is illegal in many places. Every tool on this list joins visibly as a bot
                  participant, but external contacts may still feel uncomfortable. Ask first.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-foreground">Trusting action items blindly.</strong>{" "}
                  AI-generated action items are inferred, not confirmed. They often miss
                  implicit commitments and occasionally hallucinate tasks that nobody actually
                  agreed to. Always review before distributing.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-foreground">Paying for team plans when only one person uses it.</strong>{" "}
                  Start with one license. If other team members actually adopt it after a month,
                  upgrade. Most teams buy 10 seats and three people use them.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">4.</span>
                <span>
                  <strong className="text-foreground">Expecting perfect speaker identification.</strong>{" "}
                  Speaker diarization (who said what) is good but not flawless, especially with
                  similar-sounding voices or when speakers interrupt each other. Verify attributions
                  in any meeting notes you share externally.
                </span>
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
            <p className="text-muted leading-relaxed">
              For individual use: start with Fathom&apos;s free tier. Unlimited recording
              with clean summaries, no cost. If you need searchable archives and don&apos;t
              mind a minute cap, Otter&apos;s free plan is the established alternative. For
              sales teams: Fireflies Pro at $18/user/month with native CRM integration pays
              for itself immediately. For teams that live in Notion and Slack: tl;dv&apos;s
              integrations save the most friction. None of these tools will transform a
              poorly-run meeting into a productive one. They record what happens &mdash; they
              don&apos;t fix it.
            </p>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best free meeting recording tool?</h3>
                <p>Fathom offers the most generous free tier: unlimited Zoom recordings with AI summaries and action items at no cost. Otter.ai and tl;dv also offer free plans but with tighter recording minute limits. For individual use, Fathom is the clear winner on the free tier.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Do meeting transcription tools work with Google Meet and Microsoft Teams?</h3>
                <p>Most tools support Zoom natively. Google Meet and Microsoft Teams support varies: Otter.ai and Fireflies work across all three platforms. Fathom is Zoom-only as of 2026. tl;dv supports Zoom and Google Meet. Always verify platform compatibility before committing to a paid plan.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Are AI meeting notes accurate enough to replace a human note-taker?</h3>
                <p>For action items and key decisions, current AI tools are 85&ndash;90% accurate in well-structured meetings. They struggle with heavy jargon, overlapping speakers, and poor audio quality. Treat AI notes as a strong first draft that needs a 2-minute human review, not a finished product.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Which meeting recording tool integrates with Slack and Notion?</h3>
                <p>tl;dv has the strongest native integrations with both Slack and Notion, auto-posting summaries after each meeting. Fireflies also integrates with Slack and most CRMs. If your team lives in Notion and Slack, tl;dv saves the most manual work.</p>
              </div>
            </div>
          </section>


          <RelatedLinks
            tools={["otter-ai", "fireflies-ai", "grain", "tldv", "loom"]}
            comparisons={["otter-ai-vs-fireflies-ai", "loom-vs-grain"]}
            guides={[
              "remote-team-communication",
              "video-podcast-recording",
              "best-tools-saas-startup",
            ]}
          />
        </div>
      </article>
    </>
  );
}
