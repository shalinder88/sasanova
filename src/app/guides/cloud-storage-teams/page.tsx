import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Storage for Teams: Dropbox vs Google Workspace vs Box",
  description:
    "Cloud storage compared for teams of 10, 50, and 100 people. Security features, compliance, admin controls, and effective per-user cost at every scale.",
};

export default function CloudStorageTeamsGuide() {
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
            <span className="text-foreground font-medium truncate">Cloud Storage for Teams</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Infrastructure
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Cloud Storage for Teams: Dropbox vs Google Workspace vs Box
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 13 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Most teams pick their cloud storage by accident. Someone signs up for Dropbox with a personal
            account, shares a folder, and suddenly the whole company is on Dropbox Basic with no admin
            controls, no audit logs, and files scattered across personal accounts. Then IT has to clean
            it up.
          </p>
          <p>
            The actual decision isn&apos;t &ldquo;which storage is cheapest per GB&rdquo; &mdash; it&apos;s
            which platform fits your collaboration model, security requirements, and existing tool
            ecosystem. Here&apos;s the breakdown for teams of 10 to 100+.
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Effective Per-User Cost at Scale</h2>
            <p>
              Pricing pages show per-user rates, but the real cost depends on team size and which plan
              you actually need. Here&apos;s the math at 10, 50, and 100 users.
            </p>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Platform / Plan</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Per User/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">10 Users/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">50 Users/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">100 Users/Mo</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Storage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Google Workspace Business Starter</td>
                    <td className="px-4 py-2.5">$7</td>
                    <td className="px-4 py-2.5">$70</td>
                    <td className="px-4 py-2.5">$350</td>
                    <td className="px-4 py-2.5">$700</td>
                    <td className="px-4 py-2.5">30 GB/user</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Google Workspace Business Standard</td>
                    <td className="px-4 py-2.5">$14</td>
                    <td className="px-4 py-2.5">$140</td>
                    <td className="px-4 py-2.5">$700</td>
                    <td className="px-4 py-2.5">$1,400</td>
                    <td className="px-4 py-2.5">2 TB/user</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Google Workspace Business Plus</td>
                    <td className="px-4 py-2.5">$22</td>
                    <td className="px-4 py-2.5">$220</td>
                    <td className="px-4 py-2.5">$1,100</td>
                    <td className="px-4 py-2.5">$2,200</td>
                    <td className="px-4 py-2.5">5 TB/user</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Dropbox Business</td>
                    <td className="px-4 py-2.5">$20</td>
                    <td className="px-4 py-2.5">$200</td>
                    <td className="px-4 py-2.5">$1,000</td>
                    <td className="px-4 py-2.5">$2,000</td>
                    <td className="px-4 py-2.5">9 TB (pooled for team)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Dropbox Business Plus</td>
                    <td className="px-4 py-2.5">$26</td>
                    <td className="px-4 py-2.5">$260</td>
                    <td className="px-4 py-2.5">$1,300</td>
                    <td className="px-4 py-2.5">$2,600</td>
                    <td className="px-4 py-2.5">15 TB (pooled for team)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Box Business</td>
                    <td className="px-4 py-2.5">$20</td>
                    <td className="px-4 py-2.5">$200</td>
                    <td className="px-4 py-2.5">$1,000</td>
                    <td className="px-4 py-2.5">$2,000</td>
                    <td className="px-4 py-2.5">Unlimited (fair use)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Box Business Plus</td>
                    <td className="px-4 py-2.5">$33</td>
                    <td className="px-4 py-2.5">$330</td>
                    <td className="px-4 py-2.5">$1,650</td>
                    <td className="px-4 py-2.5">$3,300</td>
                    <td className="px-4 py-2.5">Unlimited (fair use)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">OneDrive for Business (Plan 1)</td>
                    <td className="px-4 py-2.5">$5</td>
                    <td className="px-4 py-2.5">$50</td>
                    <td className="px-4 py-2.5">$250</td>
                    <td className="px-4 py-2.5">$500</td>
                    <td className="px-4 py-2.5">1 TB/user</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Microsoft 365 Business Basic</td>
                    <td className="px-4 py-2.5">$6</td>
                    <td className="px-4 py-2.5">$60</td>
                    <td className="px-4 py-2.5">$300</td>
                    <td className="px-4 py-2.5">$600</td>
                    <td className="px-4 py-2.5">1 TB/user + Teams, Exchange, SharePoint</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              All prices based on annual billing. Monthly billing is typically 20% higher.
              Google Workspace and Microsoft 365 include email, productivity apps, and video
              conferencing &mdash; not just storage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Real Question: Storage-Only vs Full Suite</h2>
            <p>
              This is the decision most teams skip. Dropbox and Box are storage platforms. Google Workspace
              and Microsoft 365 are productivity suites that include storage. The comparison isn&apos;t
              apples to apples.
            </p>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <p className="text-foreground font-semibold">What you get beyond storage:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong className="text-foreground">Google Workspace:</strong> Gmail, Google Docs/Sheets/Slides, Google Meet, Google Chat, Google Calendar, admin console, retention policies</li>
                <li><strong className="text-foreground">Microsoft 365:</strong> Outlook, Word/Excel/PowerPoint (web + desktop), Teams, SharePoint, admin console, compliance center</li>
                <li><strong className="text-foreground">Dropbox:</strong> File storage, sync, Paper (basic docs), Sign (e-signatures on higher plans), Replay (video review)</li>
                <li><strong className="text-foreground">Box:</strong> File storage, Box Notes (basic docs), Box Sign (e-signatures), workflow automation, advanced compliance</li>
              </ul>
            </div>
            <p className="mt-4">
              If you need email + docs + storage, Google Workspace at $14/user/month or Microsoft 365
              Business Standard at $12.50/user/month gives you everything. Paying $20/user/month for
              Dropbox <em>plus</em> $7&ndash;$14 for Google Workspace is $27&ndash;$34/user for what
              should cost $14.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Google Workspace: Best for Most Teams</h2>
            <p>
              If your team already uses Gmail and Google Docs, Google Workspace is the obvious choice
              for storage. Google Drive is built into every Google app. Files created in Docs, Sheets,
              or Slides live in Drive automatically. Sharing is seamless.
            </p>
            <p>
              <strong className="text-foreground">Business Starter at $7/user/month</strong> is enough
              for teams where individual users don&apos;t need more than 30 GB. That sounds small, but
              Google Docs, Sheets, and Slides don&apos;t count against storage. It&apos;s mainly photos,
              PDFs, and video files that eat space.
            </p>
            <p>
              <strong className="text-foreground">Business Standard at $14/user/month</strong> is the
              sweet spot for most teams. 2 TB per user, Google Meet recordings, shared drives for team
              content, and the full admin console. This is the plan I recommend for teams of 10&ndash;100.
            </p>
            <p>
              <strong className="text-foreground">Where Google falls short:</strong> the desktop sync
              client (Google Drive for Desktop) works but isn&apos;t as polished as Dropbox&apos;s.
              Large file sync and offline access have historically been weaker. Advanced compliance
              features (data classification, retention policies, eDiscovery) require the Business Plus
              ($22/user) or Enterprise tier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Dropbox Business: Best Desktop Sync Experience</h2>
            <p>
              Dropbox built its reputation on one thing: file sync that just works. The desktop client
              is still the best in the industry. Smart Sync lets you see all files in Finder/Explorer
              without downloading them, and they open seamlessly when needed.
            </p>
            <p>
              <strong className="text-foreground">Dropbox Business at $20/user/month</strong> gives you
              9 TB of pooled storage for your team, advanced sharing controls, full audit logs, and
              remote device wipe. The pooled storage model is generous &mdash; it&apos;s shared across
              the team, so heavy users don&apos;t need their own tier.
            </p>
            <p>
              <strong className="text-foreground">When Dropbox makes sense:</strong> teams that work
              heavily with large files (video, design, CAD) and need reliable desktop sync. Creative
              agencies, architecture firms, and production companies often prefer Dropbox because the
              sync client handles large files better than Google Drive.
            </p>
            <p>
              <strong className="text-foreground">The awkward reality:</strong> at $20/user, you&apos;re
              paying more than Google Workspace Business Standard ($14/user) and getting less. No email,
              no docs suite, no video conferencing. Most teams using Dropbox also pay for Google Workspace
              or Microsoft 365, making the effective per-user cost $27&ndash;$34.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Box: Best for Compliance-Heavy Industries</h2>
            <p>
              Box is the enterprise file sharing platform. It&apos;s not trying to be consumer-friendly.
              It&apos;s trying to satisfy your IT department, your compliance officer, and your legal team.
            </p>
            <p>
              <strong className="text-foreground">What Box does better than anyone:</strong> granular
              permissions, data classification, retention policies, legal hold, eDiscovery, HIPAA
              compliance, FedRAMP authorization, and integration with enterprise security tools (CASBs,
              DLP, SIEM).
            </p>
            <p>
              <strong className="text-foreground">Box Business at $20/user/month</strong> includes
              unlimited storage (subject to fair use), 5 GB file upload limit, admin controls, and
              basic compliance features. Box Business Plus at $33/user adds advanced metadata, extended
              audit logs, and more admin capabilities.
            </p>
            <p>
              <strong className="text-foreground">Choose Box if:</strong> you&apos;re in healthcare,
              financial services, legal, or government and need HIPAA, SOC 2, FedRAMP, or similar
              compliance certifications for your file storage. Also choose Box if external file sharing
              with clients is a core workflow &mdash; Box&apos;s external sharing controls are the most
              granular in the market.
            </p>
            <p>
              <strong className="text-foreground">Skip Box if:</strong> you&apos;re a startup or small
              business without regulatory requirements. Box&apos;s strength is compliance. If you don&apos;t
              need compliance, you&apos;re paying for features you&apos;ll never use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Security and Admin Features Compared</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Google Workspace</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Dropbox Business</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Box Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">SSO/SAML</td>
                    <td className="px-4 py-2.5">Business Standard+</td>
                    <td className="px-4 py-2.5">Business+</td>
                    <td className="px-4 py-2.5">All plans</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">2FA enforcement</td>
                    <td className="px-4 py-2.5">All plans</td>
                    <td className="px-4 py-2.5">All plans</td>
                    <td className="px-4 py-2.5">All plans</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Audit logs</td>
                    <td className="px-4 py-2.5">Business Standard+</td>
                    <td className="px-4 py-2.5">All team plans</td>
                    <td className="px-4 py-2.5">All plans (advanced on Plus)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Remote wipe</td>
                    <td className="px-4 py-2.5">All plans</td>
                    <td className="px-4 py-2.5">Business+</td>
                    <td className="px-4 py-2.5">Business Plus+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Data retention policies</td>
                    <td className="px-4 py-2.5">Business Plus+ (Vault)</td>
                    <td className="px-4 py-2.5">Business Plus+</td>
                    <td className="px-4 py-2.5">Business Plus+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">HIPAA eligible</td>
                    <td className="px-4 py-2.5">Business Standard+ (with BAA)</td>
                    <td className="px-4 py-2.5">Business+ (with BAA)</td>
                    <td className="px-4 py-2.5">All paid plans (with BAA)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">FedRAMP</td>
                    <td className="px-4 py-2.5">Yes (certain editions)</td>
                    <td className="px-4 py-2.5">No</td>
                    <td className="px-4 py-2.5">Yes (GovCloud)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">External sharing controls</td>
                    <td className="px-4 py-2.5">Good</td>
                    <td className="px-4 py-2.5">Good</td>
                    <td className="px-4 py-2.5">Best in class</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">DLP integration</td>
                    <td className="px-4 py-2.5">Business Plus+ (built-in)</td>
                    <td className="px-4 py-2.5">Enterprise only</td>
                    <td className="px-4 py-2.5">Business Plus+ (Box Shield)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Decision Framework</h2>
            <div className="rounded-lg border border-border bg-surface p-5 mt-3 space-y-3">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong className="text-foreground">Team of 10, no compliance needs, using Gmail already:</strong> Google Workspace Business Standard ($14/user). You get storage, email, docs, and video conferencing in one bill.</li>
                <li><strong className="text-foreground">Team of 10, heavy Microsoft Office usage:</strong> Microsoft 365 Business Standard ($12.50/user). Same story but with Outlook, Word, Excel, and Teams instead.</li>
                <li><strong className="text-foreground">Creative team working with large files (video, design):</strong> Dropbox Business ($20/user) for file sync + Google Workspace Starter ($7/user) for email and docs. Total: $27/user.</li>
                <li><strong className="text-foreground">50+ person company in healthcare, finance, or legal:</strong> Box Business or Business Plus + Google Workspace or Microsoft 365. The compliance features justify the cost.</li>
                <li><strong className="text-foreground">Startup trying to minimize cost:</strong> Google Workspace Business Starter at $7/user. 30 GB per user is plenty for most knowledge workers. Upgrade individuals who need more storage.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Who Should NOT Use This Guide</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Individual users or freelancers</strong> &mdash; personal cloud storage is a different comparison. Google Drive (15 GB free), iCloud, or Dropbox Basic cover most solo users.</li>
              <li><strong className="text-foreground">Companies with 500+ employees</strong> &mdash; at that scale, you need enterprise agreements with custom pricing, dedicated account teams, and possibly hybrid/on-premise solutions. Talk to vendors directly.</li>
              <li><strong className="text-foreground">Teams storing primarily media files (video production, broadcasting)</strong> &mdash; you need specialized media asset management (Frame.io, Iconik, or cloud storage like Backblaze B2 + a DAM) rather than general-purpose team storage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Common Mistakes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Paying for Dropbox AND Google Workspace at full tiers.</strong> If you&apos;re on Google Workspace Business Standard ($14/user), you already have 2 TB of storage per user. Adding Dropbox Business ($20/user) means paying $34/user/month for redundant storage. Either commit to Google Drive or downgrade Google Workspace to Starter and use Dropbox as your primary file system.</li>
              <li><strong className="text-foreground">Choosing based on storage amount alone.</strong> Most teams use a fraction of their allocated storage. The difference between 2 TB and 5 TB per user rarely matters. Choose based on collaboration features, admin controls, and integration with your existing tools.</li>
              <li><strong className="text-foreground">Ignoring the migration cost.</strong> Moving 50 users from Dropbox to Google Drive (or vice versa) is a multi-week project. File permissions, shared links, and folder structures all need to be recreated. Factor this into any switching decision.</li>
              <li><strong className="text-foreground">Not setting up admin controls from day one.</strong> Configure external sharing policies, set up team folders with proper permissions, and enable 2FA before onboarding your team. Cleaning up a messy file structure after 2 years is much harder than setting it up correctly from the start.</li>
              <li><strong className="text-foreground">Using personal accounts for business files.</strong> This is the most common and most dangerous mistake. When an employee leaves, their personal Dropbox or Google Drive goes with them &mdash; along with your files. Use business accounts with admin control from day one.</li>
              <li><strong className="text-foreground">Overlooking Microsoft 365 because &ldquo;we&apos;re a Google shop.&rdquo;</strong> OneDrive for Business at $5/user is the cheapest per-TB option. If you just need storage and your team can work with both ecosystems, it&apos;s worth considering.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What is the cheapest cloud storage for a team of 10?</h3>
                <p>OneDrive for Business Plan 1 at $5/user/month ($50/month for 10 users) with 1 TB per user. If you need email and productivity apps too, Microsoft 365 Business Basic at $6/user ($60/month) or Google Workspace Business Starter at $7/user ($70/month) are the best values.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Should I use Dropbox or Google Drive for my team?</h3>
                <p>Use Google Drive (via Google Workspace) if your team uses Gmail and Google Docs. Use Dropbox if your team works with large files that need reliable desktop sync, or if you&apos;re platform-agnostic on email and docs. For most knowledge-worker teams, Google Workspace is the better value.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">When do I need Box instead of Google Drive or Dropbox?</h3>
                <p>When regulatory compliance is a requirement. Box excels at HIPAA, FedRAMP, data classification, legal hold, and granular external sharing controls. If your compliance officer or legal team has specific file storage requirements, Box is likely the right choice.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is it worth paying for both Dropbox and Google Workspace?</h3>
                <p>Only if your team needs Dropbox&apos;s superior desktop sync for large files AND Google&apos;s productivity suite. In that case, downgrade to Google Workspace Starter ($7/user) for email and docs, and use Dropbox Business ($20/user) for file storage. Total: $27/user instead of $34.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
