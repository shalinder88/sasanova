import Link from "next/link";
import { tools, versusPairs, categories, getOverallScore, getToolsByCategory, getActiveCategoryCount, getLatestVerifiedDate, formatVerifiedShort, formatVerifiedLong, getToolBySlug, getAlternatives } from "@/data/tools";
import EmailCapture from "@/components/EmailCapture";

/* ── Score axis row (kept for comparison cards) ── */
function ScoreAxis({ label, a, b }: { label: string; a: number; b: number }) {
  return (
    <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-2 text-xs">
      <div className="flex items-center gap-1.5 justify-end">
        <span className="font-mono">{a}</span>
        <div className="w-16 h-1 bg-surface-alt rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full ml-auto" style={{ width: `${a * 10}%` }} />
        </div>
      </div>
      <span className="text-center text-muted text-xs">{label}</span>
      <div className="flex items-center gap-1.5">
        <div className="w-16 h-1 bg-surface-alt rounded-full overflow-hidden">
          <div className="h-full bg-cyan rounded-full" style={{ width: `${b * 10}%` }} />
        </div>
        <span className="font-mono">{b}</span>
      </div>
    </div>
  );
}

export default function Home() {
  /* ── Derived data (unchanged) ── */
  const topTools = [...tools].sort((a, b) => getOverallScore(b.scores) - getOverallScore(a.scores));
  const featuredVs = versusPairs.slice(0, 3).map((vs) => ({
    ...vs,
    toolA: tools.find((t) => t.slug === vs.slugA)!,
    toolB: tools.find((t) => t.slug === vs.slugB)!,
  })).filter((v) => v.toolA && v.toolB);

  const top1 = topTools[0];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO — Decision-first framing
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-mesh border-b border-border relative overflow-hidden">
        {/* Subtle orbital animation behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-border/40 animate-orbit">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/40 animate-pulse-soft" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan/30 animate-pulse-soft" />
          </div>
          <div className="absolute w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border border-border/20 animate-orbit-reverse">
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-success/30 animate-pulse-soft" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-16 lg:pb-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-[1.0] tracking-[-0.03em] mb-6">
              Stop overpaying
              <br />
              <span className="text-muted">for software.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto mb-10">
              Compare pricing, calculate switching costs, and find the right stack for your budget.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <Link href="/audit" className="px-7 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all">
                Audit Your Stack
              </Link>
              <Link href="/calculate" className="px-7 py-3 text-sm font-semibold bg-accent/10 border border-accent text-accent rounded-lg hover:bg-accent/20 transition-all">
                Calculate Costs
              </Link>
              <Link href="/compare" className="px-7 py-3 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors">
                Compare Tools
              </Link>
            </div>
            <p className="text-xs text-muted/70 mb-12">Join teams saving thousands on SaaS</p>

            {/* Stats bar — secondary, smaller */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-center">
                <p className="text-lg font-extrabold text-accent">{tools.length}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider">Tools Tracked</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-lg font-extrabold text-cyan">{versusPairs.length}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider">Comparisons</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-lg font-extrabold text-success">{getActiveCategoryCount()}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider">Categories</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  <p className="text-base font-extrabold text-foreground">{formatVerifiedShort(getLatestVerifiedDate())}</p>
                </div>
                <p className="text-[10px] text-muted uppercase tracking-wider">Data Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — Decision Scenarios
          Route users by intent, not by browsing
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              What are you
              <br />
              <span className="text-muted">trying to decide?</span>
            </h2>
            <p className="text-base text-muted leading-relaxed lg:pt-2">
              Skip the browsing. Start with your actual question and we&apos;ll get you to the answer faster.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Audit your stack",
                desc: "Audit your SaaS stack and share savings with your team.",
                href: "/audit",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "Calculate costs",
                desc: "Calculate the true cost of migrating: time, effort, productivity loss, and break-even.",
                href: "/calculate",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Compare tools side by side",
                desc: "Pick 2-4 tools and compare scores, pricing, and features in real time.",
                href: "/playground",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                ),
              },
              {
                title: "Find the cheapest in a category",
                desc: "Normalized pricing across every tool so you compare apples to apples.",
                href: "/pricing",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Estimate switching cost",
                desc: "Migration guides, switching costs, and savings calculators.",
                href: "/migrate",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group border border-border rounded-xl p-5 bg-surface hover-glow flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold mb-1.5 group-hover:text-accent transition-colors">{card.title}</h3>
                <p className="text-xs text-muted leading-relaxed flex-1">{card.desc}</p>
                <span className="text-xs text-accent font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Get started →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — Popular Tool Stacks (promoted higher)
          ═══════════════════════════════════════════════════════ */}
      <section id="stacks" className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Popular tool
              <br />
              <span className="text-muted">stacks</span>
            </h2>
            <p className="text-base text-muted leading-relaxed lg:pt-2">
              Pre-built combinations tested by real teams. Each stack includes specific plans, prices, and limits so you can set up in an afternoon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Newsletter Creator Stack",
                desc: "beehiiv Scale + Kit Creator + Zapier Free — pre-filled audit for newsletter creators.",
                cost: "Under $150/mo",
                href: "/audit?preset=newsletter",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Solo Founder CRM",
                desc: "Pipedrive Lite + Zapier Free + beehiiv Free — pre-filled audit for solo founders.",
                cost: "Under $50/mo",
                href: "/audit?preset=crm",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Automation Under $50/mo",
                desc: "Make Core + Zapier Pro — pre-filled audit for automation-focused teams.",
                cost: "Under $50/mo",
                href: "/audit?preset=automation",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Free Startup Stack",
                desc: "HubSpot Free + Kit Free + Make Free + Notion Free + Plausible Free — pre-filled audit.",
                cost: "$0/mo",
                href: "/audit?preset=free",
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((stack) => (
              <Link
                key={stack.href}
                href={stack.href}
                className="group border border-border rounded-xl p-5 bg-surface hover-glow flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3 text-accent">
                  {stack.icon}
                  <span className="text-xs font-semibold px-2 py-0.5 bg-accent-light rounded-full">{stack.cost}</span>
                </div>
                <h3 className="text-sm font-bold mb-1.5 group-hover:text-accent transition-colors">{stack.title}</h3>
                <p className="text-xs text-muted leading-relaxed flex-1">{stack.desc}</p>
                <span className="text-xs text-accent font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Audit this stack →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — Switching Savings (promoted, expanded)
          ═══════════════════════════════════════════════════════ */}
      <section id="switching" className="border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Switching
              <br />
              <span className="text-muted">saves real money</span>
            </h2>
            <p className="text-base text-muted leading-relaxed lg:pt-2">
              We calculated the annual savings for common tool switches using verified pricing data. These are real numbers, not estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Mailchimp → beehiiv */}
            <Link href="/guides/migrate-mailchimp-to-beehiiv" className="group flex flex-col p-5 border border-border rounded-xl bg-surface hover-glow hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted">Mailchimp → beehiiv</p>
                  <p className="text-2xl font-extrabold text-success">Save 60%+</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed flex-1">
                Mailchimp Standard starts at $20/mo for 500 contacts and scales steeply. beehiiv Scale is $49/mo for unlimited subscribers. The gap grows with every thousand contacts you add.
              </p>
              <span className="text-xs text-accent font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                See the full breakdown →
              </span>
            </Link>

            {/* Zapier → Make */}
            <Link href="/guides/migrate-zapier-to-make" className="group flex flex-col p-5 border border-border rounded-xl bg-surface hover-glow hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted">Zapier → Make</p>
                  <p className="text-2xl font-extrabold text-success">$1,114/yr</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed flex-1">
                At 2,000 tasks/mo, Zapier Team is $103.50/mo. Make Core handles 10K ops for $10.59/mo. Save $92.91/mo with more capacity.
              </p>
              <span className="text-xs text-accent font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                See the full breakdown →
              </span>
            </Link>

            {/* Salesforce → HubSpot */}
            <Link href="/guides/migrate-salesforce-to-hubspot" className="group flex flex-col p-5 border border-border rounded-xl bg-surface hover-glow hover:border-accent/30 transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted">Salesforce → HubSpot</p>
                  <p className="text-2xl font-extrabold text-success">$9,600/yr</p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed flex-1">
                For a 10-person team, Salesforce Pro Suite is $100/seat/mo ($1,000/mo). HubSpot Starter is $20/seat/mo ($200/mo). Plus Salesforce requires a $3,000+ onboarding fee.
              </p>
              <span className="text-xs text-accent font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                See the full breakdown →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — Featured Comparisons (reframed)
          "Decisions people are making right now"
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Decisions people are
              <br />
              <span className="text-muted">making right now</span>
            </h2>
            <p className="text-base text-muted leading-relaxed lg:pt-2">
              Side-by-side scoring across 6 axes. Pricing breakdowns. Feature overlap analysis. Switching guidance. Every claim cites a first-party source.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {featuredVs.map((vs) => {
              const scoreA = getOverallScore(vs.toolA.scores);
              const scoreB = getOverallScore(vs.toolB.scores);
              return (
                <Link
                  key={`${vs.slugA}-${vs.slugB}`}
                  href={`/compare/${vs.slugA}-vs-${vs.slugB}`}
                  className="group border border-border rounded-xl overflow-hidden bg-surface hover-glow"
                >
                  <div className="px-5 py-4 border-b border-border bg-surface">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{vs.toolA.name}</span>
                        <span className="text-xs text-muted px-1.5 py-0.5 bg-surface-alt rounded">vs</span>
                        <span className="text-sm font-bold">{vs.toolB.name}</span>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${vs.verdict === "depends" ? "bg-warning-light text-warning" : "bg-success-light text-success"}`}>
                        {vs.verdict === "depends" ? "Different jobs" : `${tools.find(t => t.slug === vs.verdict)?.name ?? vs.verdict} for most`}
                      </span>
                    </div>
                  </div>

                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-extrabold">{scoreA}</p>
                        <p className="text-xs text-muted">/ 10</p>
                      </div>
                      <div className="flex-1 px-4 space-y-1.5">
                        <ScoreAxis label="Value" a={vs.toolA.scores.value} b={vs.toolB.scores.value} />
                        <ScoreAxis label="Ease" a={vs.toolA.scores.ease} b={vs.toolB.scores.ease} />
                        <ScoreAxis label="Power" a={vs.toolA.scores.power} b={vs.toolB.scores.power} />
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-extrabold">{scoreB}</p>
                        <p className="text-xs text-muted">/ 10</p>
                      </div>
                    </div>

                    <p className="text-xs text-muted line-clamp-2 mb-3">{vs.summary}</p>

                    <span className="text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Full comparison →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <Link href="/compare" className="text-sm text-accent font-medium hover:underline">
              View all {versusPairs.length} comparisons →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4b — Popular Alternatives
          Commercial-intent search entry points
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Popular
              <br />
              <span className="text-muted">alternatives</span>
            </h2>
            <p className="text-base text-muted leading-relaxed lg:pt-2">
              Outgrown your current tool? Compare the top alternatives with honest scoring, real pricing, and switching guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {([
              { slug: "mailchimp", label: "Mailchimp" },
              { slug: "zapier", label: "Zapier" },
              { slug: "salesforce", label: "Salesforce" },
              { slug: "hubspot-crm", label: "HubSpot" },
              { slug: "notion", label: "Notion" },
              { slug: "slack", label: "Slack" },
            ] as const).map((item) => {
              const tool = getToolBySlug(item.slug);
              const altCount = tool ? getAlternatives(tool).length : 0;
              return (
                <Link
                  key={item.slug}
                  href={`/alternatives/${item.slug}`}
                  className="group bg-surface border border-border rounded-xl p-5 hover-glow hover:border-accent/30 transition-all"
                >
                  <h3 className="text-sm font-bold group-hover:text-accent transition-colors">
                    {item.label} Alternatives
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    {altCount} alternatives compared
                  </p>
                  <span className="text-xs text-accent font-medium mt-3 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                    View alternatives →
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <Link href="/alternatives" className="text-sm text-accent font-medium hover:underline">
              Browse all alternatives →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — Tools by Category (demoted lower)
          SEO internal linking, not primary experience
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight mb-1">Browse by category</h2>
          <p className="text-sm text-muted mb-6">Find the best tools for your use case</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categories.filter((cat) => getToolsByCategory(cat.slug).length >= 2).map((cat) => {
              const catTools = getToolsByCategory(cat.slug);
              const top = catTools.sort((a, b) => getOverallScore(b.scores) - getOverallScore(a.scores))[0];
              return (
                <Link
                  key={cat.slug}
                  href={`/best/${cat.slug}`}
                  className="group flex items-center justify-between p-3 border border-border rounded-lg bg-surface hover-glow hover:border-accent/30 transition-all"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold group-hover:text-accent transition-colors truncate">{cat.name}</p>
                    <p className="text-xs text-muted">{catTools.length} tools · #1 {top?.name}</p>
                  </div>
                  <svg className="w-4 h-4 text-muted group-hover:text-accent shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — Guides (new)
          High-intent editorial content
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Guides that save
              <br />
              <span className="text-muted">you money</span>
            </h2>
            <p className="text-base text-muted leading-relaxed lg:pt-2">
              Deep dives into hidden costs, pricing reality, and migration playbooks. Written to help you make better decisions, not sell you something.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { tag: "Hidden Costs", title: "The Hidden Cost of Mailchimp", href: "/guides/mailchimp-hidden-costs", desc: "Free tier caps at 500 contacts. At 10K contacts you're paying $100+/mo. Here's what they don't tell you upfront." },
              { tag: "Hidden Costs", title: "Salesforce: What You'll Actually Pay", href: "/guides/salesforce-hidden-costs", desc: "The sticker price is just the start. Implementation, admin, and add-ons can triple your real cost." },
              { tag: "Hidden Costs", title: "Zapier's Real Cost at Scale", href: "/guides/zapier-hidden-costs", desc: "Zapier is cheap for 5 Zaps. At 2,000+ tasks/mo, cheaper alternatives exist with more capacity." },
              { tag: "Pricing Reality", title: "HubSpot Pricing: The Full Picture", href: "/guides/hubspot-pricing-reality", desc: "Free CRM is great. But the jump to Professional at $890/mo catches many teams off guard." },
              { tag: "Migration", title: "Migrate Mailchimp to beehiiv", href: "/guides/migrate-mailchimp-to-beehiiv", desc: "Step-by-step migration guide with subscriber export, template recreation, and DNS setup." },
              { tag: "Migration", title: "Migrate Zapier to Make", href: "/guides/migrate-zapier-to-make", desc: "How to rebuild your Zaps as Make scenarios, map your integrations, and cut your automation bill." },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="group border border-border rounded-xl p-5 bg-surface hover-glow">
                <span className="inline-block text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 rounded mb-3">{guide.tag}</span>
                <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors leading-snug">{guide.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{guide.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/guides" className="text-sm text-accent font-medium hover:underline">
              View all guides →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — Email Capture (kept at bottom)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight mb-2">Stay sharp</h2>
          <p className="text-sm text-muted mb-6">New reviews, pricing changes, and comparison updates — every Tuesday.</p>
          <EmailCapture variant="inline" />
          <p className="text-xs text-muted mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TRUST BAR
          ═══════════════════════════════════════════════════════ */}
      <section className="py-6 bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-xs text-muted">
            {["Evidence-backed claims", "Normalized pricing data", "6-axis scoring methodology", "Editorial independent of affiliates", `Data verified ${formatVerifiedLong(getLatestVerifiedDate())}`].map((t) => (
              <span key={t} className="flex items-center gap-1">
                <svg className="w-3 h-3 text-success shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
