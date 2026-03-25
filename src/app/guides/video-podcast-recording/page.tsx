import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Recording Setup for Remote Podcasts and Video: What Actually Works",
  description:
    "Riverside vs Descript vs StreamYard vs Zoom for remote podcast and video recording. Quality differences, local vs cloud recording, and a budget stack under $50/month.",
};

export default function VideoPodcastRecordingGuide() {
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
            <span className="text-foreground font-medium truncate">Video &amp; Podcast Recording</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Content Creation
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Recording Setup for Remote Podcasts and Video: What Actually Works
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 13 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            I&apos;ve listened to too many podcasts where the host sounds like they&apos;re recording in a
            bathroom through a $200 mic, while the guest sounds like a Zoom call from 2020. The mic
            isn&apos;t the problem. The recording method is.
          </p>
          <p>
            The single biggest quality decision in remote recording isn&apos;t your microphone &mdash; it&apos;s
            whether your software records locally on each participant&apos;s machine or captures a compressed
            stream through the cloud. That one architectural difference separates professional-sounding
            podcasts from ones that make listeners hit skip.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Local Recording vs Cloud Recording: Why It Matters</h2>
            <p>
              <strong className="text-foreground">Cloud recording</strong> (Zoom, StreamYard) captures the
              audio/video stream as it travels over the internet. If your guest&apos;s Wi-Fi drops to 2 Mbps
              for 10 seconds, you get 10 seconds of compressed, glitchy audio baked into your recording.
              There&apos;s no fixing it in post.
            </p>
            <p>
              <strong className="text-foreground">Local recording</strong> (Riverside, Descript) records
              full-quality audio and video directly on each participant&apos;s device, then uploads the files
              after the session. If the internet stutters, the live call might hiccup but the recording
              stays pristine. Each person&apos;s track is a separate, uncompressed file.
            </p>
            <p>
              This is the reason Riverside-recorded podcasts sound different from Zoom-recorded podcasts.
              It&apos;s not a subtle difference. It&apos;s the difference between 48kHz WAV audio and a
              128kbps compressed stream.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Platform Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Riverside</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Descript</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">StreamYard</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Zoom</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Recording method</td>
                    <td className="px-4 py-2.5">Local</td>
                    <td className="px-4 py-2.5">Local</td>
                    <td className="px-4 py-2.5">Cloud</td>
                    <td className="px-4 py-2.5">Cloud (local option on desktop)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Audio quality</td>
                    <td className="px-4 py-2.5">48kHz WAV</td>
                    <td className="px-4 py-2.5">48kHz WAV</td>
                    <td className="px-4 py-2.5">Compressed stream</td>
                    <td className="px-4 py-2.5">Compressed (local: better)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Video quality</td>
                    <td className="px-4 py-2.5">Up to 4K</td>
                    <td className="px-4 py-2.5">Up to 4K</td>
                    <td className="px-4 py-2.5">Up to 1080p</td>
                    <td className="px-4 py-2.5">Up to 1080p (paid)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Separate tracks</td>
                    <td className="px-4 py-2.5">Yes</td>
                    <td className="px-4 py-2.5">Yes</td>
                    <td className="px-4 py-2.5">No (combined)</td>
                    <td className="px-4 py-2.5">Yes (gallery view only)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Built-in editing</td>
                    <td className="px-4 py-2.5">Basic (text-based)</td>
                    <td className="px-4 py-2.5">Full editor</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Live streaming</td>
                    <td className="px-4 py-2.5">Yes (paid)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (core feature)</td>
                    <td className="px-4 py-2.5">Yes (via YouTube/Twitch)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Transcription</td>
                    <td className="px-4 py-2.5">AI-powered</td>
                    <td className="px-4 py-2.5">AI-powered (best)</td>
                    <td className="px-4 py-2.5">Basic captions</td>
                    <td className="px-4 py-2.5">AI Companion</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Guest experience</td>
                    <td className="px-4 py-2.5">Browser link, no app</td>
                    <td className="px-4 py-2.5">Browser link, no app</td>
                    <td className="px-4 py-2.5">Browser link, no app</td>
                    <td className="px-4 py-2.5">App download required</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Pricing Breakdown</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Starter/Basic</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Pro Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Riverside</td>
                    <td className="px-4 py-2.5">2 hrs recording, 720p, 3 participants</td>
                    <td className="px-4 py-2.5">$15/mo (Standard) &mdash; 5 hrs, 4K, 8 participants</td>
                    <td className="px-4 py-2.5">$24/mo (Business) &mdash; 15 hrs, live streaming</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Descript</td>
                    <td className="px-4 py-2.5">1 hr transcription, watermark on exports</td>
                    <td className="px-4 py-2.5">$24/mo (Hobbyist) &mdash; 10 hrs transcription</td>
                    <td className="px-4 py-2.5">$55/mo (Business) &mdash; 30 hrs, AI features</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">StreamYard</td>
                    <td className="px-4 py-2.5">Branding watermark, 720p, 6 participants</td>
                    <td className="px-4 py-2.5">$20/mo (Basic) &mdash; no watermark, 1080p</td>
                    <td className="px-4 py-2.5">$39/mo (Professional) &mdash; full HD, 10 guests</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Zoom</td>
                    <td className="px-4 py-2.5">40-min limit, 720p, local recording only</td>
                    <td className="px-4 py-2.5">$13.33/mo (Pro) &mdash; 30 hrs, cloud recording</td>
                    <td className="px-4 py-2.5">$21.99/mo (Business) &mdash; 300 participants</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Riverside: Best for Audio-First Podcasters</h2>
            <p>
              Riverside is purpose-built for podcast and video recording. It records locally on each
              participant&apos;s device in up to 4K video and 48kHz uncompressed audio, then uploads
              the separate tracks after the session ends. The guest experience is frictionless &mdash;
              they click a link and record in their browser, no downloads required.
            </p>
            <p>
              <strong className="text-foreground">The Standard plan at $15/month</strong> is the sweet
              spot for most podcasters. You get 5 hours of recording per month, 4K video, separate
              audio/video tracks, and AI transcription. That&apos;s enough for a weekly 45-minute episode
              with some buffer for retakes.
            </p>
            <p>
              <strong className="text-foreground">The editing features are basic.</strong> Riverside
              added text-based editing and clip creation, but it&apos;s not a real editor. For
              serious post-production, you&apos;re exporting to Descript, Adobe Audition, or DaVinci Resolve.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Descript: Best for Record-and-Edit-in-One</h2>
            <p>
              Descript is an editing tool that happens to have recording built in. The recording
              quality matches Riverside (local, separate tracks, 4K), but the real value is what
              happens after you stop recording.
            </p>
            <p>
              <strong className="text-foreground">Text-based editing is genuinely useful.</strong> Your
              recording gets transcribed, and you edit the transcript like a Google Doc. Delete a sentence
              from the transcript, and the corresponding audio/video gets removed. Fix an &ldquo;um&rdquo;
              by highlighting and deleting it. It sounds gimmicky but genuinely speeds up rough cuts by 3&ndash;5x.
            </p>
            <p>
              <strong className="text-foreground">The Hobbyist plan at $24/month</strong> includes 10 hours
              of transcription, watermark-free exports, and the full editor. If you record and edit a weekly
              podcast, this is your plan.
            </p>
            <p>
              <strong className="text-foreground">Choose Descript over Riverside if:</strong> you want to
              do all your editing in one tool. Choose Riverside if you already have an editing workflow
              in Logic, Audition, or Premiere and just need clean recordings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">StreamYard: Best for Live Shows</h2>
            <p>
              StreamYard is a live streaming tool, not a recording tool. It streams to YouTube, Twitch,
              Facebook, and LinkedIn simultaneously. Recording is available but it&apos;s a cloud-captured
              stream, not locally recorded files.
            </p>
            <p>
              <strong className="text-foreground">If your primary distribution is live video</strong> &mdash;
              YouTube Live, Twitch, LinkedIn Live &mdash; StreamYard is the right choice. It handles
              multistreaming, lower thirds, screen sharing, and audience comments in one interface.
            </p>
            <p>
              <strong className="text-foreground">If your primary distribution is an audio podcast feed,</strong>
              StreamYard is the wrong tool. The cloud-compressed recording quality is noticeably worse
              than Riverside or Descript&apos;s local recordings. You&apos;ll hear the difference in quiet
              sections and in the crispness of consonants.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Zoom: When &ldquo;Good Enough&rdquo; Is Actually Good Enough</h2>
            <p>
              Zoom&apos;s recording quality won&apos;t win any awards, but here&apos;s the honest truth:
              if your podcast is primarily interview-based and your audience cares more about the conversation
              than audio fidelity, Zoom is fine. Millions of people already know how to use it.
            </p>
            <p>
              <strong className="text-foreground">The trick:</strong> use Zoom&apos;s local recording option
              (Settings &gt; Recording &gt; Record a separate audio file for each participant). This gives
              you separate tracks that are better than the cloud recording, though still not as good as
              Riverside&apos;s local files.
            </p>
            <p>
              <strong className="text-foreground">Choose Zoom if:</strong> you already pay for it, your
              guests are non-technical and resist new tools, or your podcast is internal/corporate.
              Don&apos;t choose it for a public-facing show where audio quality is part of your brand.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Budget Stack Under $50/Month</h2>
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
                    <td className="px-4 py-2.5 font-medium text-foreground">Riverside</td>
                    <td className="px-4 py-2.5">Standard</td>
                    <td className="px-4 py-2.5">$15/mo</td>
                    <td className="px-4 py-2.5">Recording (4K video, WAV audio, separate tracks)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Descript</td>
                    <td className="px-4 py-2.5">Hobbyist</td>
                    <td className="px-4 py-2.5">$24/mo</td>
                    <td className="px-4 py-2.5">Editing, transcription, clip creation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Spotify for Podcasters</td>
                    <td className="px-4 py-2.5">Free</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">Hosting and distribution to all platforms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Total: $39/month. This gives you studio-quality recording, professional editing tools,
              automatic transcription, and distribution to every podcast platform.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">The $0 alternative:</strong> Riverside free tier (2 hrs/month at
              720p) + DaVinci Resolve (free video editor) + Audacity (free audio editor) + Spotify for
              Podcasters (free hosting). Quality will be lower and editing takes longer, but it works for
              getting started.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Solo podcasters who record alone</strong> &mdash; you don&apos;t need remote recording software. Record directly into your DAW (GarageBand, Audacity, Logic) or use Descript as your all-in-one tool.</li>
              <li><strong className="text-foreground">Professional studios with in-person recording</strong> &mdash; you need a hardware setup, not a cloud platform. Invest in a Rodecaster Pro or similar mixer.</li>
              <li><strong className="text-foreground">Large media companies</strong> &mdash; you likely need enterprise solutions with SSO, compliance features, and dedicated account management that these tools don&apos;t provide.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Buying an expensive mic before fixing your recording method.</strong> A $50 Audio-Technica ATR2100x through Riverside will sound better than a $400 Shure SM7B through a Zoom call. The recording pipeline matters more than the mic.</li>
              <li><strong className="text-foreground">Using Zoom because &ldquo;it&apos;s what we have.&rdquo;</strong> Riverside&apos;s free tier is literally free and produces dramatically better recordings. The switching cost is one email to your guest with a different link.</li>
              <li><strong className="text-foreground">Not testing your guest&apos;s setup before recording.</strong> Do a 2-minute tech check. Confirm their mic is selected (not laptop speakers), their internet is stable, and they&apos;re not in a room with echo. This saves more episodes than any software choice.</li>
              <li><strong className="text-foreground">Over-editing.</strong> Most podcasts don&apos;t need jump cuts, sound effects, or background music. Clean up the ums, normalize the audio levels, and ship it. Descript makes it easy to over-edit because editing is so fast.</li>
              <li><strong className="text-foreground">Skipping transcription.</strong> Transcripts are SEO gold. They&apos;re also accessibility requirements for many audiences. Both Riverside and Descript include AI transcription. Use it.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the best software for recording remote podcast interviews?</h3>
                <p>Riverside is the best dedicated recording tool for remote podcasts. It records locally on each participant&apos;s device in 48kHz WAV audio and up to 4K video, producing studio-quality results regardless of internet quality. The Standard plan at $15/month covers most weekly podcasters.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is Zoom good enough for podcast recording?</h3>
                <p>Zoom works for conversational podcasts where content matters more than audio fidelity. Use the local recording option with separate audio tracks for the best results. But for public-facing shows where audio quality is part of your brand, Riverside or Descript are noticeably better.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use Riverside or Descript?</h3>
                <p>Use Riverside if you already have an editing workflow and just need high-quality recordings. Use Descript if you want recording and editing in one tool &mdash; its text-based editor is genuinely faster for rough cuts. Many podcasters use both: Riverside for recording, Descript for editing.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["riverside", "descript", "streamyard", "zoom", "loom"]}
            comparisons={["descript-vs-riverside"]}
            guides={[
              "meeting-recording-comparison",
              "remote-team-communication",
            ]}
          />
        </div>
      </div>
    </>
  );
}
