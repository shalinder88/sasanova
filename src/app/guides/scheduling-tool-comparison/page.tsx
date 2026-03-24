import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calendly vs Cal.com: Pay $192/Year or Self-Host for Free",
  description:
    "Calendly is the default scheduling tool. Cal.com is the open-source challenger. Here's an honest comparison of pricing, features, and when each one makes sense.",
};

export default function SchedulingToolComparisonPage() {
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
              Calendly vs Cal.com
            </span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
            Scheduling
          </span>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4">
            Calendly vs Cal.com: Pay $192/Year or Self-Host for Free
          </h1>
          <p className="text-muted text-lg leading-relaxed">
            Calendly became a verb. Cal.com wants to be the open-source version of that verb.
            The practical difference comes down to who you are and what you&apos;re willing
            to manage.
          </p>
          <div className="flex items-center gap-3 mt-4 text-xs text-muted">
            <span>12 min read</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Updated March 2026</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose-custom space-y-8">

          {/* The Landscape */}
          <section>
            <h2 className="text-xl font-bold mb-3">Why This Comparison Matters</h2>
            <p className="text-muted leading-relaxed mb-3">
              Scheduling tools look simple from the outside. Someone picks a time slot, you
              get a calendar event. How different can they be?
            </p>
            <p className="text-muted leading-relaxed">
              Different enough to matter. Calendly&apos;s Standard plan costs $12/user/month
              ($144/year). Their Teams plan is $20/user/month ($240/year). For a 10-person
              sales team on Teams, that&apos;s $2,400/year for what is fundamentally a
              calendar form. Cal.com offers a self-hosted version that costs nothing beyond
              your server. Their cloud-hosted version undercuts Calendly at every tier. The
              question is whether the savings justify the tradeoffs.
            </p>
          </section>

          {/* Calendly */}
          <section>
            <h2 className="text-xl font-bold mb-3">Calendly: The Polished Default</h2>
            <p className="text-muted leading-relaxed mb-3">
              Calendly works. That sounds like faint praise, but reliability is the killer
              feature for scheduling tools. When a prospect clicks your booking link, it needs
              to load fast, look professional, and not glitch. Calendly has had over a decade
              to smooth every edge case: timezone detection, calendar conflicts, buffer times
              between meetings, round-robin team assignment, payment collection, and integrations
              with every CRM and video platform that matters.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The free tier gives you one event type (one booking page). Standard ($12/month)
              adds unlimited event types, integrations with tools like Salesforce, HubSpot,
              and Zapier, plus group events and automated reminders. Teams ($20/month) adds
              round-robin routing, admin management, and Salesforce-native integration.
            </p>
            <p className="text-muted leading-relaxed">
              The brand recognition is real and measurable. When someone receives a Calendly
              link, they know what it is. They trust it. They click without hesitation.
              Cal.com links get a fraction of a second more scrutiny &mdash; and in sales
              contexts where conversion rate on booking links matters, that tiny friction
              is worth acknowledging.
            </p>
          </section>

          {/* Cal.com */}
          <section>
            <h2 className="text-xl font-bold mb-3">Cal.com: The Open-Source Challenger</h2>
            <p className="text-muted leading-relaxed mb-3">
              Cal.com is open source under the AGPLv3 license. You can self-host it for free,
              inspect the code, and modify it however you want. The cloud-hosted version
              (cal.com) offers a free tier for individuals and paid plans for teams.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              The free cloud tier is more generous than Calendly&apos;s: unlimited event types,
              unlimited bookings, and integrations with Google Calendar, Zoom, and Meet. The
              Team plan ($15/user/month) adds round-robin, collective scheduling, and managed
              event types. The Organization plan ($37/user/month) adds SSO, SCIM, and
              compliance features.
            </p>
            <p className="text-muted leading-relaxed mb-3">
              Feature-wise, Cal.com covers roughly 90% of what Calendly offers. Recurring
              bookings, buffer times, payment collection via Stripe, custom questions, redirect
              after booking, webhooks, and API access are all present. The gaps are in polish:
              Calendly&apos;s routing forms are more sophisticated, the analytics are deeper,
              and the Salesforce integration is more mature.
            </p>
            <p className="text-muted leading-relaxed">
              The development pace is fast. Being open source with an active contributor
              community means features ship frequently. But that speed comes with occasional
              rough edges &mdash; new features sometimes need a release or two before they
              feel finished.
            </p>
          </section>

          {/* Free Tier Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">Free Tier: Head to Head</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Feature</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Calendly Free</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cal.com Free</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Event types</td>
                    <td className="px-4 py-2.5 text-muted">1</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Calendar connections</td>
                    <td className="px-4 py-2.5 text-muted">1</td>
                    <td className="px-4 py-2.5 text-muted">Multiple</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Integrations</td>
                    <td className="px-4 py-2.5 text-muted">Limited</td>
                    <td className="px-4 py-2.5 text-muted">Google, Zoom, Meet, more</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Custom branding</td>
                    <td className="px-4 py-2.5 text-muted">No</td>
                    <td className="px-4 py-2.5 text-muted">Limited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Booking limits</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                    <td className="px-4 py-2.5 text-muted">Unlimited</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">Remove branding</td>
                    <td className="px-4 py-2.5 text-muted">Paid only</td>
                    <td className="px-4 py-2.5 text-muted">Self-host or paid</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              Cal.com&apos;s free tier is objectively more generous. The only area where Calendly&apos;s
              free tier matches or exceeds is brand trust and the polish of the booking experience.
            </p>
          </section>

          {/* Team Comparison */}
          <section>
            <h2 className="text-xl font-bold mb-4">For Teams: Annual Cost Comparison</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-alt text-left">
                    <th className="px-4 py-2.5 font-semibold text-foreground">Team Size</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Calendly Teams</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cal.com Teams</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">Cal.com Self-Hosted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">1 user</td>
                    <td className="px-4 py-2.5 text-muted">$192/yr</td>
                    <td className="px-4 py-2.5 text-muted">$0 (free tier)</td>
                    <td className="px-4 py-2.5 text-muted">$60&ndash;$120/yr*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">5 users</td>
                    <td className="px-4 py-2.5 text-muted">$1,200/yr</td>
                    <td className="px-4 py-2.5 text-muted">$900/yr</td>
                    <td className="px-4 py-2.5 text-muted">$60&ndash;$120/yr*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">10 users</td>
                    <td className="px-4 py-2.5 text-muted">$2,400/yr</td>
                    <td className="px-4 py-2.5 text-muted">$1,800/yr</td>
                    <td className="px-4 py-2.5 text-muted">$60&ndash;$120/yr*</td>
                  </tr>
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-2.5 font-medium text-foreground">25 users</td>
                    <td className="px-4 py-2.5 text-muted">$6,000/yr</td>
                    <td className="px-4 py-2.5 text-muted">$4,500/yr</td>
                    <td className="px-4 py-2.5 text-muted">$120&ndash;$240/yr*</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted mt-2">
              *Server cost only (VPS or cloud hosting). Does not include setup time or
              ongoing maintenance hours. Calendly pricing uses Teams tier at $20/user/mo
              on annual billing ($16/user/mo).
            </p>
          </section>

          {/* Self-Hosting Cal.com */}
          <section>
            <h2 className="text-xl font-bold mb-3">Self-Hosting Cal.com: What It Actually Takes</h2>
            <p className="text-muted leading-relaxed mb-3">
              Cal.com provides Docker images and documentation for self-hosting. The setup
              options range from straightforward to trivial depending on your infrastructure
              comfort level.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Docker on a VPS (DigitalOcean, Hetzner, etc.):</strong>{" "}
                  The most common approach. A $5&ndash;$10/month droplet with 2GB RAM runs Cal.com
                  fine. Expect 1&ndash;2 hours for initial setup including SSL, database, and
                  environment configuration. Ongoing maintenance: 1&ndash;2 hours/month for updates.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Railway or Render one-click deploy:</strong>{" "}
                  Faster setup (under 30 minutes), slightly higher cost ($7&ndash;$15/month depending
                  on usage), and less maintenance since the platform handles infrastructure. Good
                  middle ground between self-hosted and cloud.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Vercel + Supabase:</strong>{" "}
                  Deploy the Next.js app to Vercel and the database to Supabase. Can run on
                  free tiers of both for low-traffic personal use. Scales well but gets
                  complicated with add-ons (email, cron jobs, file storage).
                </span>
              </li>
            </ul>

            <div className="rounded-lg border border-border bg-surface p-5 my-4">
              <p className="text-sm font-semibold text-foreground mb-1">Who should NOT self-host Cal.com</p>
              <p className="text-sm text-muted">
                Anyone who doesn&apos;t already manage web infrastructure. If you&apos;ve never
                deployed a Docker container, set up a reverse proxy, or configured DNS records,
                the learning curve isn&apos;t worth it for a scheduling tool. Use Cal.com&apos;s
                free cloud tier instead &mdash; it gives you unlimited event types and bookings
                without touching a terminal.
              </p>
            </div>
          </section>

          {/* The Brand Factor */}
          <section>
            <h2 className="text-xl font-bold mb-3">The Brand Recognition Factor</h2>
            <p className="text-muted leading-relaxed mb-3">
              This is the intangible that&apos;s hard to quantify but easy to feel. When you
              send someone a calendly.com link, they recognize it. They might already have a
              Calendly account themselves. The trust is automatic.
            </p>
            <p className="text-muted leading-relaxed">
              A cal.com link looks professional but less familiar. A self-hosted link on your
              own domain (schedule.yourcompany.com) looks even more professional but requires
              recipients to trust your domain specifically. For customer-facing scheduling
              (sales calls, consultations, support bookings), this perception difference is
              non-zero. For internal scheduling (team 1:1s, interview scheduling), nobody cares.
            </p>
          </section>

          {/* When to Stay with Calendly */}
          <section>
            <h2 className="text-xl font-bold mb-3">When to Stay with Calendly</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Enterprise requirements.</strong>{" "}
                  SOC 2 Type II, HIPAA compliance (their Enterprise plan), dedicated account
                  management, phone support, and SLAs. Cal.com&apos;s self-hosted option can
                  meet compliance requirements but the burden is on you to prove it.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Salesforce-native integration.</strong>{" "}
                  Calendly&apos;s Salesforce integration is mature and deeply embedded. It
                  logs activities, routes leads, and syncs bidirectionally. Cal.com integrates
                  with Salesforce but the depth isn&apos;t equivalent.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Routing forms and advanced workflows.</strong>{" "}
                  Calendly&apos;s routing feature lets you build pre-booking qualification flows
                  that direct people to different event types based on their answers. Useful
                  for sales teams that need to sort leads before they book.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">You value stability over savings.</strong>{" "}
                  Calendly has been around since 2013 and handles hundreds of millions of bookings.
                  The risk of a breaking change, unexpected downtime, or feature regression is
                  lower than with any younger competitor.
                </span>
              </li>
            </ul>
          </section>

          {/* When to Switch to Cal.com */}
          <section>
            <h2 className="text-xl font-bold mb-3">When to Switch to Cal.com</h2>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Budget-conscious teams.</strong>{" "}
                  A 10-person team saves $600/year on cloud Cal.com versus Calendly Teams.
                  Self-hosted saves over $2,000/year. For bootstrapped companies, that&apos;s
                  meaningful.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Privacy-focused organizations.</strong>{" "}
                  Self-hosting means booking data stays on your infrastructure. No third-party
                  servers, no data processing agreements to negotiate, full control over
                  retention and access.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">Developer teams that want customization.</strong>{" "}
                  Open-source means you can modify the booking flow, add custom fields, build
                  integrations that don&apos;t exist yet, and embed scheduling into your product
                  natively.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">&bull;</span>
                <span>
                  <strong className="text-foreground">You&apos;re starting fresh.</strong>{" "}
                  If you don&apos;t have existing Calendly workflows, integrations, or team
                  familiarity, there&apos;s no switching cost. Cal.com&apos;s free tier is
                  strictly more capable than Calendly&apos;s free tier.
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
                  <strong className="text-foreground">Self-hosting to save $12/month.</strong>{" "}
                  If you&apos;re a solo user, the time spent setting up and maintaining a
                  self-hosted instance exceeds the cost of any cloud plan. Self-hosting makes
                  financial sense at 5+ users or when you have specific privacy/customization
                  requirements.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">2.</span>
                <span>
                  <strong className="text-foreground">Underestimating migration effort.</strong>{" "}
                  Moving from Calendly means updating every scheduling link you&apos;ve ever
                  shared &mdash; email signatures, website embeds, LinkedIn profiles, business
                  cards, onboarding docs. Set up redirects or run both tools in parallel during
                  the transition.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">3.</span>
                <span>
                  <strong className="text-foreground">Ignoring the ecosystem.</strong>{" "}
                  Calendly integrates with over 100 tools natively. Cal.com&apos;s integration
                  count is growing but smaller. Check that your specific CRM, payment processor,
                  and video platform are supported before committing.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent font-bold shrink-0">4.</span>
                <span>
                  <strong className="text-foreground">Overthinking the decision.</strong>{" "}
                  Both tools send calendar invites. Both let people pick time slots. For most
                  use cases, either works fine. The difference shows up at scale, with teams,
                  or with specific integration requirements. If none of those apply, pick
                  whichever free tier you like better and move on.
                </span>
              </li>
            </ul>
          </section>

          {/* Bottom Line */}
          <section className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
            <p className="text-muted leading-relaxed">
              Calendly is the safe, polished, expensive choice. Cal.com is the capable,
              affordable, slightly-less-polished alternative. For individuals: Cal.com&apos;s
              free tier beats Calendly&apos;s free tier on features. For teams: Cal.com saves
              25&ndash;100% depending on whether you self-host. For enterprise: Calendly&apos;s
              compliance certifications, support infrastructure, and Salesforce depth still
              justify the premium. The decision is simpler than the market makes it seem. If
              cost matters more than brand recognition, Cal.com wins. If brand trust and
              enterprise features matter more than cost, Calendly wins.
            </p>
          </section>

        </div>
      </article>
    </>
  );
}
