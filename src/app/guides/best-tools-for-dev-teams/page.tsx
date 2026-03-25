import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Developer Team Stack: PM + Code + Deploy + Monitor",
  description:
    "The exact developer team software stack. PM (Linear free or Jira free 10 users), deploy (Vercel free or Netlify free), database (Supabase free or PlanetScale $5/mo), monitoring (PostHog free 1M events). All prices verified.",
  openGraph: {
    title: "Developer Team Stack: PM + Code + Deploy + Monitor",
    description:
      "Project management, deployment, database, and monitoring for dev teams. Complete stack at $0-5/month with verified pricing.",
  },
};

export default function BestToolsForDevTeams() {
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
              Best Tools for Dev Teams
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
            <span className="text-[11px] text-muted">15 min read</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Developer Team Stack: PM + Deploy + Database + Monitor
          </h1>
          <p className="text-lg text-muted">
            Small dev teams (2&ndash;10 engineers) need issue tracking, deployment, a database, and monitoring. The good news: the developer tool ecosystem has some of the most generous free tiers in all of SaaS. Here&apos;s a complete stack starting at $0/month &mdash; every price verified.
          </p>
        </header>

        <div className="prose prose-invert max-w-none">

          {/* ── The Stack ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">The Complete Developer Team Stack</h2>
          <div className="overflow-x-auto rounded-lg border border-border mt-4 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt text-left">
                  <th className="px-4 py-2.5 font-semibold text-foreground">Category</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Tool</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Free Tier</th>
                  <th className="px-4 py-2.5 font-semibold text-foreground">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Project Management</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/linear" className="text-accent hover:underline">Linear</Link></td>
                  <td className="px-4 py-2.5 text-muted">250 issues, unlimited members</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">PM (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/jira" className="text-accent hover:underline">Jira</Link></td>
                  <td className="px-4 py-2.5 text-muted">10 users, 2GB storage</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Deployment</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/vercel" className="text-accent hover:underline">Vercel</Link></td>
                  <td className="px-4 py-2.5 text-muted">1M edge requests/mo, 100GB bandwidth (non-commercial)</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Deploy (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/netlify" className="text-accent hover:underline">Netlify</Link></td>
                  <td className="px-4 py-2.5 text-muted">300 credits/mo, deploy previews, custom domains</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Database</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/supabase" className="text-accent hover:underline">Supabase</Link></td>
                  <td className="px-4 py-2.5 text-muted">2 projects, 500MB DB, 50K MAUs</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">DB (alt)</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/planetscale" className="text-accent hover:underline">PlanetScale</Link></td>
                  <td className="px-4 py-2.5 text-muted">Scaler Single Node</td>
                  <td className="px-4 py-2.5 text-muted">$5/mo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-medium text-foreground">Monitoring</td>
                  <td className="px-4 py-2.5 text-muted"><Link href="/tools/posthog" className="text-accent hover:underline">PostHog</Link></td>
                  <td className="px-4 py-2.5 text-muted">1M events, 5K replays, unlimited members</td>
                  <td className="px-4 py-2.5 text-green-400">$0</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total ($0 stack)</td>
                  <td className="px-4 py-2.5 font-semibold text-green-400">$0/mo</td>
                </tr>
                <tr className="bg-surface-alt">
                  <td colSpan={3} className="px-4 py-2.5 font-semibold text-foreground">Total (with PlanetScale)</td>
                  <td className="px-4 py-2.5 font-semibold text-muted">$5/mo</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* ── PM ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Project Management: Linear vs Jira</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Linear Free</strong> gives you up to 250 issues with unlimited members. The keyboard-first design is blazingly fast &mdash; creating an issue takes 2 seconds. GitHub/GitLab integration auto-links PRs to issues. Standard ($8/user/mo) unlocks unlimited issues, cycles, and projects.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Jira Free</strong> supports up to 10 users with 2GB storage. You get Scrum boards, Kanban boards, backlog management, and the full Atlassian ecosystem (Confluence, Bitbucket). Standard ($8.15/user/mo) unlocks 250GB storage and audit logs.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> Linear if your team values speed and modern UX. Jira if you need deep customization of workflows, advanced reporting, or you&apos;re already in the Atlassian ecosystem. Both are free for small teams.
          </p>

          {/* ── Deploy ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Deployment: Vercel vs Netlify</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Vercel Hobby (Free)</strong> gives you personal, non-commercial projects with 1M edge requests/month and 100GB bandwidth. Made by the creators of Next.js &mdash; if you use Next.js, Vercel is the obvious choice. Pro ($20/user/mo) unlocks commercial use and team collaboration.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Netlify Free</strong> gives you 300 credits/month, deploy previews, custom domains with SSL, and a global CDN. Framework-agnostic and includes built-in forms handling and identity (auth). More generous for non-Next.js projects.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Important note:</strong> Vercel Hobby is restricted to non-commercial use. For production commercial apps, you need Vercel Pro ($20/user/mo). Netlify Free allows commercial use within the 300 credits/mo limit.
          </p>

          {/* ── Database ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Database: Supabase vs PlanetScale</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">Supabase Free</strong> gives you 2 projects, 500MB database, 50K MAUs, 1GB file storage, and built-in auth. It&apos;s PostgreSQL under the hood with real-time subscriptions, edge functions, and vector embeddings. The catch: projects pause after 7 days of inactivity on the free tier.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">PlanetScale Scaler ($5/mo)</strong> is a serverless MySQL platform built on Vitess. Branching workflows let you test schema changes safely. No free tier (removed in 2024), but $5/mo with 10GB storage included is affordable. Better for MySQL-first teams or apps needing horizontal scaling.
          </p>
          <p className="text-muted mb-4">
            <strong className="text-foreground">The decision:</strong> Supabase Free if you want PostgreSQL + auth + real-time in one tool and can tolerate project pausing. PlanetScale ($5/mo) if you need MySQL, branching, or always-on availability.
          </p>

          {/* ── Monitoring ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Monitoring: PostHog Free (1M Events)</h2>
          <p className="text-muted mb-4">
            <strong className="text-foreground">PostHog Free</strong> gives you 1M analytics events, 5K session replays, 1M feature flag requests, and unlimited team members per month. It combines product analytics, session replay, feature flags, A/B testing, and surveys in one open-source tool. Self-hosting is also an option for data sovereignty.
          </p>
          <p className="text-muted mb-4">
            The free tier is generous enough for most early-stage products. Pay-as-you-go pricing kicks in only when you exceed the free limits, with billing controls to set spending caps.
          </p>

          {/* ── What to Skip ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">What to Skip</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Datadog ($15/host/mo+):</strong> Enterprise-grade monitoring. Overkill for small teams. PostHog Free + Vercel/Netlify built-in monitoring covers early needs.</li>
            <li><strong className="text-foreground">Mixpanel/Amplitude:</strong> Excellent product analytics, but PostHog now offers comparable features with a more generous free tier and transparent pricing.</li>
            <li><strong className="text-foreground">AWS/GCP databases (at first):</strong> RDS, Cloud SQL, and DynamoDB are powerful but require infrastructure knowledge. Supabase and PlanetScale abstract away the ops work.</li>
            <li><strong className="text-foreground">Monday.com/Asana for engineering:</strong> These PM tools are built for non-technical teams. Linear and Jira are purpose-built for software development with GitHub integration, sprint planning, and developer workflows.</li>
          </ul>

          {/* ── Common Mistakes ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Common Mistakes Dev Teams Make</h2>
          <ul className="list-disc pl-6 text-muted mb-6 space-y-2">
            <li><strong className="text-foreground">Choosing Jira because it&apos;s the default.</strong> Jira is powerful but complex. If your team is under 10 people and values speed, Linear is faster to set up and use daily. Jira&apos;s value emerges at 25+ engineer teams with complex workflows.</li>
            <li><strong className="text-foreground">Using Vercel Hobby for production commercial apps.</strong> The Hobby tier is restricted to non-commercial use. You need Pro ($20/user/mo) for production apps that generate revenue.</li>
            <li><strong className="text-foreground">Not setting billing alerts on pay-as-you-go services.</strong> PostHog, Supabase Pro, and Vercel Pro all have usage-based components. Set spending caps from day one.</li>
            <li><strong className="text-foreground">Building on Supabase Free for production.</strong> Free projects pause after 7 days of inactivity. For anything facing real users, upgrade to Supabase Pro ($25/mo) to avoid downtime.</li>
          </ul>

          {/* ── FAQ ── */}
          <h2 className="text-xl font-bold mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-base font-semibold mt-6 mb-2">Is Linear Free really enough for a dev team?</h3>
          <p className="text-muted mb-4">
            For a team of 2&ndash;5 working on a single product, the 250 issue limit is usually enough for 3&ndash;6 months. Close completed issues regularly. Standard ($8/user/mo) is worth upgrading to once you need cycles (sprints) and unlimited issues.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">Supabase or PlanetScale?</h3>
          <p className="text-muted mb-4">
            Supabase if you want PostgreSQL + auth + real-time + storage in one tool. PlanetScale if you need MySQL, schema branching, or horizontal scaling for high-traffic applications. Most new projects should default to Supabase for the broader feature set.
          </p>

          <h3 className="text-base font-semibold mt-6 mb-2">When does this stack stop being free?</h3>
          <p className="text-muted mb-4">
            When you launch a commercial product (Vercel needs Pro at $20/user/mo), exceed 250 Linear issues, or need always-on database (Supabase Pro at $25/mo). Realistically, plan to spend $50&ndash;$100/mo once you have paying users.
          </p>
        </div>

        <RelatedLinks
          tools={["linear", "jira", "vercel", "netlify", "supabase", "planetscale", "posthog"]}
          comparisons={["linear-vs-jira", "vercel-vs-netlify", "supabase-vs-planetscale"]}
          guides={[
            "choosing-analytics-tool",
            "project-management-small-team",
            "notion-vs-trello-vs-clickup-for-small-teams",
          ]}
        />
      </article>
    </>
  );
}
