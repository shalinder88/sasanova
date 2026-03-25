import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Podcaster's Tech Stack: Recording + Hosting + Growth",
  description:
    "The exact podcaster software stack. Recording (Riverside Standard $19/mo or Descript Hobbyist $24/mo), hosting (Spotify for Podcasters free), newsletter (beehiiv free), website (Carrd Pro $19/yr). All prices verified.",
  openGraph: {
    title: "Podcaster's Tech Stack: Recording + Hosting + Growth",
    description:
      "Recording, hosting, newsletter, and website for podcasters. From $0 to $19/month with verified pricing.",
  },
};

export default function BestToolsForPodcasters() {
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
              Best Tools for Podcasters
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
            Podcaster&apos;s Tech Stack: Recording + Hosting + Growth
          </h1>
          <p className="text-lg text-muted">
            You need four things to run a podcast: recording software, a hosting platform, a way to grow your audience, and a simple website. Most podcasters overspend on all four. Here&apos;s the exact stack from $1.58/month to $20.58/month &mdash; every price verified.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Podcaster Stack</h2>
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
                  <td className="px-4 py-2.5 font-medium text-foreground">Recording</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/riverside" className="text-accent hover:underline">Riverside</Link></td>
                  <td className="px-4 py-2.5 text-muted">Standard</td>
                  <td className="px-4 py-2.5 text-muted">$19/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Recording (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/descript" className="text-accent hover:underline">Descript</Link></td>
                  <td className="px-4 py-2.5 text-muted">Hobbyist</td>
                  <td className="px-4 py-2.5 text-muted">$24/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Hosting</td>
                  <td className="px-4 py-2.5 text-muted">Spotify for Podcasters</td>
                  <td className="px-4 py-2.5 text-muted">Free</td>
                  <td className="px-4 py-2.5 text-green-400">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Newsletter</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/beehiiv" className="text-accent hover:underline">beehiiv</Link></td>
                  <td className="px-4 py-2.5 text-muted">Launch (Free)</td>
                  <td className="px-4 py-2.5 text-green-400">$0/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Website</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/carrd" className="text-accent hover:underline">Carrd</Link></td>
                  <td className="px-4 py-2.5 text-muted">Pro Standard</td>
                  <td className="px-4 py-2.5 text-muted">$19/yr (~$1.58/mo)</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total (with Riverside)</td>
                  <td className="px-4 py-2.5 font-semibold text-muted">~$20.58/mo</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total (with Descript)</td>
                  <td className="px-4 py-2.5 font-semibold text-muted">~$25.58/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── Recording ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Recording: Riverside vs Descript</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Riverside Standard ($19/mo)</strong> records locally on each participant&apos;s device for studio-quality audio (48kHz) and up to 4K video. You get 5 hours of recording, no watermark, and separate audio/video tracks for each guest. The AI-powered Magic Clips feature auto-generates short-form clips for social media.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Descript Hobbyist ($24/mo)</strong> is a recording tool plus a full editor. Edit your podcast by editing the text transcript &mdash; delete a sentence from the transcript, and Descript removes it from the audio. You get 10 hours of transcription/month, 1080p export, and 100GB storage. Studio Sound removes background noise automatically.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> Riverside if you interview remote guests and need the best possible recording quality. Descript if you want recording and editing in one tool and love the text-based editing workflow.
          </p>

          {/* ── Hosting ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Hosting: Spotify for Podcasters (Free)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Spotify for Podcasters (formerly Anchor)</strong> is genuinely free with unlimited hosting, automatic distribution to major platforms (Apple Podcasts, Google Podcasts, Amazon Music), and basic analytics. No storage limits, no episode limits, no paywall.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The trade-off:</strong> You give up some analytics depth and customization compared to paid hosts like Buzzsprout ($12/mo) or Transistor ($19/mo). But for a new podcast, the $0 price tag is hard to argue with. Migrate to a paid host when you need advanced analytics, private podcasting, or multi-show management.
          </p>

          {/* ── Newsletter ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Newsletter: beehiiv Free</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">beehiiv Launch (Free, $0/mo)</strong> supports 2,500 subscribers with unlimited sends. Send episode announcements, show notes, and exclusive content to build a direct relationship with listeners outside of podcast apps. The built-in website can double as your podcast landing page.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Why email matters for podcasters:</strong> Podcast apps don&apos;t give you listener email addresses. A newsletter converts casual listeners into an audience you own. beehiiv&apos;s referral program (on Scale at $49/mo) can help grow your list organically.
          </p>

          {/* ── Website ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Website: Carrd Pro ($19/year)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Carrd Pro Standard ($19/yr, ~$1.58/mo)</strong> gives you 10 sites, custom domains, forms, embeds, analytics, and payment integration. A one-page podcast website with your show description, latest episodes (embedded from Spotify), newsletter signup form, and social links. That&apos;s all most podcasts need.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Alternative:</strong> Use beehiiv&apos;s built-in website on the free plan instead, which saves the $19/yr. Less customizable, but functional. Add Carrd when you want a polished, branded landing page.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Buzzsprout/Transistor/Podbean (at first):</strong> Paid podcast hosts cost $12&ndash;$19/mo. Their main advantage is better analytics and multi-show support. Spotify for Podcasters is free and sufficient until you need those features.</li>
            <li><strong className="text-foreground">Adobe Audition / Logic Pro:</strong> Professional DAWs with steep learning curves. Descript and Riverside handle 90% of podcast editing needs. Use a DAW only if you produce music or heavily produced audio fiction.</li>
            <li><strong className="text-foreground">Squarespace/WordPress ($25+/mo):</strong> A full website builder is overkill for a podcast site. Carrd at $19/year or beehiiv&apos;s free built-in website does the job.</li>
            <li><strong className="text-foreground">Paid transcription services:</strong> Descript Hobbyist includes 10 hours/month of AI transcription. Riverside Standard includes transcription too. No need for a separate Otter.ai or Rev.com subscription.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Podcasters Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Not collecting email addresses from day one.</strong> Every episode should mention your newsletter. An email list is the only audience you truly own. beehiiv Free costs $0 to start.</li>
            <li><strong className="text-foreground">Over-investing in equipment before validating the show.</strong> A $60 USB microphone + free software is enough for the first 20 episodes. Upgrade equipment after proving you can publish consistently.</li>
            <li><strong className="text-foreground">Choosing Riverside AND Descript.</strong> Pick one. Riverside for remote interview recording quality. Descript for recording + editing in one place. Using both is redundant.</li>
            <li><strong className="text-foreground">Paying for a website before having 10 episodes.</strong> Use beehiiv&apos;s free website or a simple Carrd page. A full Squarespace or WordPress site is premature until your show has traction.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Can I start a podcast for free?</h3>
          <p className="text-muted mb-4">
            Almost. Record with Riverside Free (2 hours, 720p watermarked) or Descript Free (1 hour transcription/mo), host on Spotify for Podcasters ($0), and use beehiiv Free for a website + newsletter. Total: $0/mo. Quality improves significantly at $19&ndash;$24/mo with Riverside Standard or Descript Hobbyist.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Riverside or Descript for a solo podcast?</h3>
          <p className="text-muted mb-4">
            Descript. Its text-based editing is faster for solo shows where you record locally. Riverside&apos;s strength is remote guest recording quality &mdash; less relevant for solo formats.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When should I switch from Spotify for Podcasters to a paid host?</h3>
          <p className="text-muted mb-4">
            When you need advanced analytics (listener demographics, retention curves), private podcast feeds, or manage multiple shows. Transistor ($19/mo) and Buzzsprout ($12/mo) are the best first upgrades.
          </p>
        </div>

        <RelatedLinks
          tools={["riverside", "descript", "beehiiv", "carrd"]}
          comparisons={["riverside-vs-descript"]}
          guides={[
            "video-podcast-recording",
            "best-email-tool-creators",
            "creator-toolkit",
            "website-builder-for-business",
            "social-media-management-stack",
          ]}
        />
      </article>
    </>
  );
}
