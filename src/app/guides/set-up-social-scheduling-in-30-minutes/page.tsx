import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Set Up Social Media Scheduling in 30 Minutes: Buffer Free",
  description:
    "Connect social accounts, queue your first week of posts, and set up a content calendar using Buffer Free ($0). Step by step with exact limits.",
};

export default function SetUpSocialSchedulingPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">Social Scheduling in 30 Minutes</span>
          </nav>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Practical Workflow
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Set Up Social Media Scheduling in 30 Minutes: Buffer Free
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Buffer Free gives you 3 social channels and 10 scheduled posts per channel &mdash;
            enough to maintain a consistent presence without paying anything. This guide walks
            you through connecting accounts, queuing your first week of content, and setting
            up a sustainable posting schedule.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>11 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          <section>
            <h2 className="text-xl font-bold mb-3">Buffer Free: What You Get</h2>
            <div className="overflow-x-auto rounded-lg border border-border my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Buffer Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Buffer Essentials</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Price</td>
                    <td className="px-4 py-2.5 text-muted">$0/mo</td>
                    <td className="px-4 py-2.5 text-muted">$6/channel/mo</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Channels</td>
                    <td className="px-4 py-2.5 text-muted">3 channels</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Scheduled Posts</td>
                    <td className="px-4 py-2.5 text-muted">10 per channel</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Users</td>
                    <td className="px-4 py-2.5 text-muted">1 user</td>
                    <td className="px-4 py-2.5 text-muted">1 user</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">AI Assistant</td>
                    <td className="px-4 py-2.5 text-muted">Yes (included)</td>
                    <td className="px-4 py-2.5 text-muted">Yes</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Analytics</td>
                    <td className="px-4 py-2.5 text-muted">Basic</td>
                    <td className="px-4 py-2.5 text-muted">30-day analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Step-by-Step Setup (30 Minutes)</h2>
            <div className="space-y-4">
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 1&ndash;5: Account and Channel Setup</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Sign up at buffer.com. Connect your 3 social accounts. Best picks for most businesses:
                  LinkedIn (professional reach), Twitter/X (conversation), Instagram (visual). Each
                  account counts as one channel.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 5&ndash;10: Set Your Posting Schedule</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Go to Settings &rarr; Posting Schedule for each channel. Set 2&ndash;3 posting times
                  per day per channel. Buffer will auto-fill these slots when you add posts to the queue.
                  Start with: 9 AM, 12 PM, 5 PM for most B2B audiences.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 10&ndash;25: Queue Your First Week</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Create 10 posts per channel (the free tier limit). Use Buffer&apos;s AI assistant to
                  help generate captions. Mix content types: 3 educational, 3 promotional, 2 engagement
                  questions, 2 industry insights. Customize each post for the specific platform.
                </p>
              </div>
              <div className="bg-surface rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-1">Minutes 25&ndash;30: Review and Optimize</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Review all queued posts in the calendar view. Check for typos, broken links, and
                  missing images. Set up the Start Page (Buffer&apos;s link-in-bio tool &mdash; free).
                  Add it to your social bios.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">When to Upgrade</h2>
            <p className="text-muted leading-relaxed mb-4">
              Upgrade to Buffer Essentials ($6/channel/month) when 10 scheduled posts per channel
              isn&apos;t enough. At 3 channels, that&apos;s $18/month for unlimited posts and 30-day analytics.
              For a team, Buffer Team ($12/channel/month) adds approval workflows and unlimited users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Why Buffer instead of Hootsuite?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Hootsuite dropped its free plan entirely. Their cheapest plan (Standard) is $149/month
                  for 1 user. Buffer Free gives you 3 channels for $0. The price difference is stark.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Is 10 posts per channel enough?</h3>
                <p className="text-muted text-sm leading-relaxed">
                  For 2&ndash;3 posts per week per channel, 10 scheduled posts covers roughly 1.5 weeks.
                  You&apos;ll need to refill the queue weekly. If you post daily, upgrade to Essentials
                  ($6/channel) for unlimited scheduling.
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12">
          <RelatedLinks
            guides={[
              "social-media-management-stack",
              "switch-from-hootsuite-to-buffer",
              "set-up-newsletter-in-30-minutes",
              "set-up-analytics-in-30-minutes",
            ]}
          />
        </div>
      </article>
    </>
  );
}
