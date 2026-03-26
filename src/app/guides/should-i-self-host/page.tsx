import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Should You Self-Host Software? The Real Cost Calculation",
  description:
    "n8n self-hosted vs Make cloud. Ghost self-hosted vs Ghost Pro. Supabase self-hosted vs cloud. True cost including time with exact prices.",
};

export default function ShouldISelfHostGuide() {
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
            <span className="text-foreground font-medium truncate">Should You Self-Host?</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          Buying Decision
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
          Should You Self-Host Software? The Real Cost Calculation
        </h1>
        <p className="text-sm text-muted mb-8">
          Last updated March 2026 &middot; 15 min read
        </p>

        <div className="prose-sm space-y-8 text-sm leading-relaxed text-muted">
          <p>
            Self-hosting sounds attractive: zero vendor fees, full data control, no pricing surprises.
            But the true cost includes server hosting, maintenance time, security updates, backups,
            and the opportunity cost of your time. Sometimes cloud is actually cheaper.
          </p>
          <p>
            This guide compares the real cost of self-hosting vs cloud for the three most commonly
            self-hosted SaaS tools: n8n (automation), Ghost (publishing), and Supabase (database/backend).
          </p>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">n8n: Self-Hosted vs Cloud</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost Component</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Self-Hosted</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud Starter ($20/mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">n8n Cloud Pro ($50/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Software license</td>
                    <td className="px-4 py-2.5">$0 (fair-code, community edition)</td>
                    <td className="px-4 py-2.5">Included</td>
                    <td className="px-4 py-2.5">Included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Server hosting</td>
                    <td className="px-4 py-2.5">$5&ndash;$20/mo (VPS like Hetzner, DigitalOcean)</td>
                    <td className="px-4 py-2.5">Included</td>
                    <td className="px-4 py-2.5">Included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Execution limits</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">2,500 executions/mo</td>
                    <td className="px-4 py-2.5">10,000 executions/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Maintenance time</td>
                    <td className="px-4 py-2.5">2&ndash;4 hrs/month (updates, monitoring, debugging)</td>
                    <td className="px-4 py-2.5">0 hours</td>
                    <td className="px-4 py-2.5">0 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Time cost (@$50/hr)</td>
                    <td className="px-4 py-2.5">$100&ndash;$200/mo</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground bg-surface-alt">Total real cost/month</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$105&ndash;$220/mo</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$20/mo</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$50/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground bg-surface-alt">Annual real cost</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$1,260&ndash;$2,640/yr</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$240/yr</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$600/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">When n8n self-hosting makes sense:</strong> Only when
              your time cost is near $0 (you enjoy the sysadmin work), you need unlimited executions,
              or data sovereignty is a hard requirement. If you value your time at $50+/hour, n8n Cloud
              at $20&ndash;$50/month is almost always cheaper than self-hosting.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Ghost: Self-Hosted vs Ghost(Pro)</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost Component</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Self-Hosted</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Ghost(Pro) Starter ($18/mo)</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Ghost(Pro) Publisher ($35/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Software</td>
                    <td className="px-4 py-2.5">$0 (open source)</td>
                    <td className="px-4 py-2.5">Included</td>
                    <td className="px-4 py-2.5">Included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Server</td>
                    <td className="px-4 py-2.5">$10&ndash;$30/mo (needs more RAM than n8n)</td>
                    <td className="px-4 py-2.5">Included</td>
                    <td className="px-4 py-2.5">Included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Email delivery (Mailgun/SES)</td>
                    <td className="px-4 py-2.5">$0.80/1,000 emails (Mailgun)</td>
                    <td className="px-4 py-2.5">Included</td>
                    <td className="px-4 py-2.5">Included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Member limits</td>
                    <td className="px-4 py-2.5">Unlimited</td>
                    <td className="px-4 py-2.5">1,000 members, 1 staff user</td>
                    <td className="px-4 py-2.5">Unlimited members, 3 staff</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Maintenance</td>
                    <td className="px-4 py-2.5">3&ndash;5 hrs/month (updates, SSL, email config, backups)</td>
                    <td className="px-4 py-2.5">0 hours</td>
                    <td className="px-4 py-2.5">0 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Time cost (@$50/hr)</td>
                    <td className="px-4 py-2.5">$150&ndash;$250/mo</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground bg-surface-alt">Total real cost/month</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$160&ndash;$280/mo</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$18/mo</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$35/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">When Ghost self-hosting makes sense:</strong> When you
              have 5,000+ members (Ghost Pro Business jumps to $239/month at that scale), need full theme
              customization, or your developer is already managing servers. For most publishers under 5,000
              members, Ghost(Pro) Publisher at $35/month is dramatically cheaper than self-hosting when you
              account for time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Supabase: Self-Hosted vs Cloud</h2>
            <div className="overflow-x-auto rounded-lg border border-border mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cost Component</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Self-Hosted</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Supabase Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Supabase Pro ($25/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Software</td>
                    <td className="px-4 py-2.5">$0 (open source)</td>
                    <td className="px-4 py-2.5">Included</td>
                    <td className="px-4 py-2.5">Included</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Server</td>
                    <td className="px-4 py-2.5">$20&ndash;$80/mo (PostgreSQL needs decent specs)</td>
                    <td className="px-4 py-2.5">Included</td>
                    <td className="px-4 py-2.5">Included ($10 compute credits)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Database limits</td>
                    <td className="px-4 py-2.5">Limited by server specs</td>
                    <td className="px-4 py-2.5">500MB, 2 projects, pauses after 7 days</td>
                    <td className="px-4 py-2.5">8GB, no pausing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Maintenance</td>
                    <td className="px-4 py-2.5">4&ndash;8 hrs/month (PostgreSQL tuning, backups, security patches)</td>
                    <td className="px-4 py-2.5">0 hours</td>
                    <td className="px-4 py-2.5">0 hours</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground">Time cost (@$50/hr)</td>
                    <td className="px-4 py-2.5">$200&ndash;$400/mo</td>
                    <td className="px-4 py-2.5">$0</td>
                    <td className="px-4 py-2.5">$0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-medium text-foreground bg-surface-alt">Total real cost/month</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$220&ndash;$480/mo</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$0 (with 7-day pause risk)</td>
                    <td className="px-4 py-2.5 font-semibold text-foreground bg-surface-alt">$25/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              <strong className="text-foreground">When Supabase self-hosting makes sense:</strong> When
              you need more than 8GB database storage (Pro plan), have compliance requirements demanding
              full data control, or already have a DevOps team managing PostgreSQL. Supabase Team at
              $599/month is where self-hosting starts to show real dollar savings &mdash; but only if
              your team already has the expertise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Self-Hosting Decision Framework</h2>
            <div className="rounded-lg border border-border bg-surface p-5 space-y-4">
              <div>
                <p className="text-foreground font-semibold">Self-host when ALL of these are true:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-1">
                  <li>You (or your team) already manage servers regularly</li>
                  <li>Your time cost for maintenance is low (under $25/hour effective rate)</li>
                  <li>Data sovereignty is a hard business or regulatory requirement</li>
                  <li>You&apos;ve exceeded the cloud vendor&apos;s mid-tier pricing (making cloud expensive)</li>
                  <li>You&apos;re comfortable with emergency troubleshooting at 2 AM</li>
                </ul>
              </div>
              <div>
                <p className="text-foreground font-semibold">Stay on cloud when ANY of these are true:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-1">
                  <li>Your time is worth $50+/hour and you&apos;d rather spend it on your core business</li>
                  <li>You&apos;re a solo founder or small team without DevOps capacity</li>
                  <li>The cloud tier pricing fits your budget (most tools under $50/month)</li>
                  <li>You need guaranteed uptime without managing it yourself</li>
                  <li>You value not thinking about SSL certificates, backups, and security patches</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">The Hidden Costs Nobody Mentions</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Initial setup time.</strong> Budget 8&ndash;20 hours for first-time setup (Docker, reverse proxy, SSL, email delivery, backups). That&apos;s $400&ndash;$1,000 in time at $50/hour before the tool serves a single request.</li>
              <li><strong className="text-foreground">Downtime cost.</strong> When your self-hosted n8n goes down at 3 AM, automations stop running until you fix it. Cloud services have teams on-call 24/7.</li>
              <li><strong className="text-foreground">Security responsibility.</strong> You own security patches, firewall rules, and SSL renewal. One missed update can expose your data.</li>
              <li><strong className="text-foreground">Backup testing.</strong> Having backups is meaningless unless you regularly test restoring from them. Add 1&ndash;2 hours/month for backup verification.</li>
              <li><strong className="text-foreground">Scaling complexity.</strong> When your self-hosted Supabase runs out of RAM at 50,000 users, the migration to a bigger server is your problem.</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8 mt-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Is self-hosting actually cheaper?</h3>
                <p>In raw server costs, yes. A $10/month VPS is cheaper than a $50/month SaaS subscription. But when you include 2&ndash;8 hours of monthly maintenance time at $50/hour, cloud is almost always cheaper for individuals and small teams. Self-hosting becomes cost-effective at scale (5+ team members) or when cloud pricing exceeds $200&ndash;$500/month.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What&apos;s the easiest tool to self-host?</h3>
                <p>n8n. It runs in a single Docker container, has excellent documentation, and requires minimal server resources ($5&ndash;$10/month VPS). Ghost is next-easiest but requires configuring email delivery separately. Supabase is the hardest due to multiple services (PostgreSQL, Auth, Storage, Edge Functions).</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">Can I self-host and then move to cloud later?</h3>
                <p>Yes, all three tools support migration between self-hosted and cloud. n8n workflows export as JSON. Ghost has full JSON export. Supabase is PostgreSQL, so standard pg_dump works. The migration isn&apos;t painless but it&apos;s possible.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-1">What about Cal.com self-hosting?</h3>
                <p>Cal.com is another popular self-hosted option. The cloud version is free for 1 user with unlimited event types and bookings. Self-hosting makes sense primarily for teams wanting to avoid $15/seat/month (Team plan) or organizations with data sovereignty requirements.</p>
              </div>
            </div>
          </section>

          <RelatedLinks
            tools={["n8n", "ghost", "supabase", "cal-com"]}
            comparisons={["make-vs-n8n"]}
            guides={[
              "should-i-pay-for-automation",
              "migrate-zapier-to-n8n",
              "best-free-tools-startups",
            ]}
          />
        </div>
      </div>
    </>
  );
}
