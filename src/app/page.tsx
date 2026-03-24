import Link from "next/link";
import { categories, getOverallScore, getToolsByCategory, type Tool, type ToolScore } from "@/data/tools";
import { getToolsHybrid, getComparisonsHybrid } from "@/lib/data-layer";
import EmailCapture from "@/components/EmailCapture";

/* ── Mini score bar (inline) ── */
function MiniBar({ value, max = 10, color = "bg-accent" }: { value: number; max?: number; color?: string }) {
  return (
    <div className="w-full h-1 bg-surface-alt rounded-full overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${(value / max) * 100}%` }} />
    </div>
  );
}

/* ── Score axis row ── */
function ScoreAxis({ label, a, b }: { label: string; a: number; b: number }) {
  return (
    <div className="grid grid-cols-[1fr_80px_1fr] items-center gap-2 text-[11px]">
      <div className="flex items-center gap-1.5 justify-end">
        <span className="font-mono">{a}</span>
        <div className="w-16 h-1 bg-surface-alt rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full ml-auto" style={{ width: `${a * 10}%` }} />
        </div>
      </div>
      <span className="text-center text-muted text-[10px]">{label}</span>
      <div className="flex items-center gap-1.5">
        <div className="w-16 h-1 bg-surface-alt rounded-full overflow-hidden">
          <div className="h-full bg-cyan rounded-full" style={{ width: `${b * 10}%` }} />
        </div>
        <span className="font-mono">{b}</span>
      </div>
    </div>
  );
}

export default async function Home() {
  /* ── Fetch hybrid data ── */
  const [tools, versusPairs] = await Promise.all([
    getToolsHybrid(),
    getComparisonsHybrid(),
  ]);

  /* ── Derived data ── */
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
          SECTION 1 — HERO (centered, clean, orbital animation)
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-mesh border-b border-border relative overflow-hidden">
        {/* Subtle orbital animation behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          {/* Outer orbit */}
          <div className="w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-border/40 animate-orbit">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent/40 animate-pulse-soft" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan/30 animate-pulse-soft" />
          </div>
          {/* Inner orbit */}
          <div className="absolute w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full border border-border/20 animate-orbit-reverse">
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-success/30 animate-pulse-soft" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-0 relative z-10">
          {/* Centered headline — minimal text */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] font-extrabold leading-[1.0] tracking-[-0.03em] mb-16 lg:mb-20">
              Software decisions,
              <br />
              <span className="text-muted">made with evidence.</span>
            </h1>

            {/* Live stat trackers — pushed lower with breathing room */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-extrabold text-accent">{tools.length}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider">Tools Tracked</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-extrabold text-cyan">{versusPairs.length}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider">Comparisons</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-extrabold text-success">{categories.length}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider">Categories</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
                  <p className="text-2xl lg:text-3xl font-extrabold text-foreground">Live</p>
                </div>
                <p className="text-[10px] text-muted uppercase tracking-wider">Updated</p>
              </div>
            </div>

            {/* CTAs — pushed lower */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Link href="/tools" className="px-7 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all">
                Explore {tools.length} tools
              </Link>
              <Link href="/compare" className="px-7 py-3 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-surface transition-colors">
                Compare tools
              </Link>
            </div>
          </div>

          {/* ── Embedded product preview: live comparison widget ── */}
          <div className="border border-border rounded-t-xl bg-surface overflow-hidden shadow-sm">
            {/* Tab bar */}
            <div className="flex items-center gap-0 border-b border-border bg-surface text-xs">
              <span className="px-4 py-2.5 font-medium border-b-2 border-accent text-accent bg-surface">Top Tools</span>
              <Link href="/compare" className="px-4 py-2.5 text-muted hover:text-foreground transition-colors">Comparisons</Link>
              <Link href="/pricing" className="px-4 py-2.5 text-muted hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/alternatives" className="px-4 py-2.5 text-muted hover:text-foreground transition-colors">Alternatives</Link>
              <div className="ml-auto px-4 py-2.5 text-muted">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Updated recently
                </span>
              </div>
            </div>
            {/* Content: top tools table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-4 font-medium text-muted text-[11px] w-8">#</th>
                    <th className="text-left py-2 px-4 font-medium text-muted text-[11px]">Tool</th>
                    <th className="text-left py-2 px-4 font-medium text-muted text-[11px] hidden sm:table-cell">Category</th>
                    <th className="text-center py-2 px-4 font-medium text-muted text-[11px] w-16">Score</th>
                    <th className="text-left py-2 px-4 font-medium text-muted text-[11px] hidden md:table-cell w-40">Value · Ease · Power</th>
                    <th className="text-left py-2 px-4 font-medium text-muted text-[11px] hidden lg:table-cell">Starts at</th>
                    <th className="text-center py-2 px-4 font-medium text-muted text-[11px] w-12">Free</th>
                  </tr>
                </thead>
                <tbody>
                  {topTools.slice(0, 6).map((tool, i) => {
                    const cat = categories.find((c) => c.slug === tool.categorySlug);
                    const cheapest = tool.pricing.find((p) => p.priceMonthly && p.priceMonthly > 0);
                    return (
                      <tr key={tool.slug} className={`table-row-hover border-b border-border last:border-0 hover:bg-surface/60 transition-colors ${i === 0 ? "bg-accent-light/30" : ""}`}>
                        <td className="py-2.5 px-4 text-[11px] text-muted font-mono">{i + 1}</td>
                        <td className="py-2.5 px-4">
                          <Link href={`/tools/${tool.slug}`} className="group">
                            <span className="text-sm font-semibold group-hover:text-accent transition-colors">{tool.name}</span>
                            {tool.badge && <span className="ml-1.5 text-[9px] font-medium text-accent bg-accent-light px-1.5 py-0.5 rounded">{tool.badge}</span>}
                            <p className="text-[11px] text-muted leading-tight">{tool.vendor}</p>
                          </Link>
                        </td>
                        <td className="py-2.5 px-4 text-[11px] text-muted hidden sm:table-cell">{cat?.name}</td>
                        <td className="py-2.5 px-4 text-center">
                          <span className="text-base font-extrabold">{getOverallScore(tool.scores)}</span>
                        </td>
                        <td className="py-2.5 px-4 hidden md:table-cell">
                          <div className="flex gap-2 items-center">
                            {[
                              { v: tool.scores.value, c: "bg-success" },
                              { v: tool.scores.ease, c: "bg-accent" },
                              { v: tool.scores.power, c: "bg-cyan" },
                            ].map((s, j) => (
                              <div key={j} className="flex items-center gap-1">
                                <div className="w-8 h-1 bg-surface-alt rounded-full overflow-hidden">
                                  <div className={`h-full rounded-full ${s.c}`} style={{ width: `${s.v * 10}%` }} />
                                </div>
                                <span className="text-[10px] font-mono text-muted w-3">{s.v}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="py-2.5 px-4 text-[11px] hidden lg:table-cell">{cheapest ? `$${cheapest.priceMonthly}/mo` : "Free"}</td>
                        <td className="py-2.5 px-4 text-center text-[11px]">
                          {tool.freeTier ? <span className="text-success">✓</span> : <span className="text-muted">—</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <Link href="/tools" className="block text-center py-2.5 text-xs text-accent font-medium border-t border-border hover:bg-surface/50 transition-colors">
              View all {tools.length} tools →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — LIVE COMPARISON PREVIEW
          Show product working, not just describe it
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header — Linear style: big left, description right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Head-to-head
              <br />
              <span className="text-muted">comparisons</span>
            </h2>
            <p className="text-base text-muted leading-relaxed lg:pt-2">
              Side-by-side scoring across 6 axes. Pricing breakdowns. Feature overlap analysis. Switching guidance. Not opinions — structured evidence.
            </p>
          </div>

          {/* Live comparison cards */}
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
                  {/* Header */}
                  <div className="px-5 py-4 border-b border-border bg-surface">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold">{vs.toolA.name}</span>
                        <span className="text-[10px] text-muted px-1.5 py-0.5 bg-surface-alt rounded">vs</span>
                        <span className="text-sm font-bold">{vs.toolB.name}</span>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${vs.verdict === "depends" ? "bg-warning-light text-warning" : "bg-success-light text-success"}`}>
                        {vs.verdict === "depends" ? "It depends" : `${tools.find(t => t.slug === vs.verdict)?.name} wins`}
                      </span>
                    </div>
                  </div>

                  {/* Score comparison */}
                  <div className="px-5 py-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-extrabold">{scoreA}</p>
                        <p className="text-[10px] text-muted">/ 10</p>
                      </div>
                      <div className="flex-1 px-4 space-y-1.5">
                        <ScoreAxis label="Value" a={vs.toolA.scores.value} b={vs.toolB.scores.value} />
                        <ScoreAxis label="Ease" a={vs.toolA.scores.ease} b={vs.toolB.scores.ease} />
                        <ScoreAxis label="Power" a={vs.toolA.scores.power} b={vs.toolB.scores.power} />
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-extrabold">{scoreB}</p>
                        <p className="text-[10px] text-muted">/ 10</p>
                      </div>
                    </div>

                    <p className="text-[11px] text-muted line-clamp-2 mb-3">{vs.summary}</p>

                    <span className="text-[11px] text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
          SECTION 3 — CATEGORIES + FEATURED PICK
          Two-column: browse left, spotlight right
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: categories */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold tracking-tight mb-1">Browse categories</h2>
              <p className="text-sm text-muted mb-6">Find the best tools for your use case</p>

              <div className="grid grid-cols-2 gap-2">
                {categories.map((cat) => {
                  const catTools = getToolsByCategory(cat.slug);
                  const top = catTools.sort((a, b) => getOverallScore(b.scores) - getOverallScore(a.scores))[0];
                  return (
                    <Link
                      key={cat.slug}
                      href={`/best/${cat.slug}`}
                      className="group flex items-center justify-between p-3 border border-border rounded-lg bg-surface hover:border-accent/30 transition-all"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold group-hover:text-accent transition-colors truncate">{cat.name}</p>
                        <p className="text-[10px] text-muted">{catTools.length} tools · #{1} {top?.name}</p>
                      </div>
                      <svg className="w-4 h-4 text-muted group-hover:text-accent shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: featured tool spotlight */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold tracking-tight mb-1">This week&apos;s pick</h2>
              <p className="text-sm text-muted mb-6">Hand-selected by our editorial team</p>

              <div className="border border-border rounded-xl bg-surface p-6">
                {top1.badge && (
                  <span className="inline-block text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded mb-3">{top1.badge}</span>
                )}
                <h3 className="text-xl font-bold mb-1">{top1.name}</h3>
                <p className="text-xs text-muted mb-4">{top1.tagline}</p>

                <div className="flex items-center gap-3 mb-5">
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-accent">{getOverallScore(top1.scores)}</p>
                    <p className="text-[10px] text-muted">Overall</p>
                  </div>
                  <div className="flex-1 space-y-1.5">
                    {(["value", "ease", "power", "transparency"] as (keyof ToolScore)[]).map((key) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="w-20 text-[10px] text-muted capitalize">{key === "transparency" ? "Trust" : key}</span>
                        <MiniBar value={top1.scores[key]} color={top1.scores[key] >= 8 ? "bg-success" : "bg-accent"} />
                        <span className="text-[10px] font-mono w-4">{top1.scores[key]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5 mb-5">
                  {top1.bestFor.slice(0, 2).map((b) => (
                    <div key={b} className="flex items-start gap-1.5 text-[11px]">
                      <svg className="w-3 h-3 text-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted mb-4 pt-3 border-t border-border">
                  <span>{top1.freeTier ? "Free tier available" : `From $${top1.pricing.find(p => p.priceMonthly && p.priceMonthly > 0)?.priceMonthly}/mo`}</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    Independently verified
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link href={`/tools/${top1.slug}`} className="flex-1 text-center py-2 text-xs font-semibold bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
                    Full review
                  </Link>
                  <Link href={`/alternatives/${top1.slug}`} className="flex-1 text-center py-2 text-xs font-semibold border border-border rounded-lg hover:bg-surface transition-colors">
                    See alternatives
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — HOW WE'RE DIFFERENT
          Numbered features, Linear style
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
            Not another review site.
          </h2>
          <p className="text-base text-muted mb-12 max-w-xl">
            Most comparison sites rank by who pays the most. We built something different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "6-axis scoring", desc: "Value, ease, power, setup friction, migration difficulty, and transparency. Not a single star rating." },
              { n: "02", title: "Normalized pricing", desc: "Monthly, annual, per-seat, flat — all standardized so you can actually compare apples to apples." },
              { n: "03", title: "Switching intelligence", desc: "What triggers people to leave. What blocks them from switching. Migration difficulty scored per tool." },
              { n: "04", title: "Evidence-backed claims", desc: "Every material claim links to a first-party source. Provenance tagged: verified, vendor-claimed, or community-reported." },
              { n: "05", title: "Editorial independence", desc: "Rankings never change based on affiliate status. Tools without affiliate programs are reviewed with the same rigor." },
              { n: "06", title: "Weekly freshness", desc: "Software changes fast. We monitor pricing pages, changelogs, and feature updates — not just publish and forget." },
            ].map((f) => (
              <div key={f.n} className="group">
                <span className="text-[11px] font-mono text-muted">{f.n}</span>
                <h3 className="text-base font-bold mt-1 mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — EDITORIAL PICKS (real content)
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight mb-1">Editor&apos;s picks</h2>
          <p className="text-sm text-muted mb-8">Deep-dives our team recommends right now</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tag: "Best Of", title: "Best Newsletter Platform in 2026", desc: "beehiiv leads at 8.4/10. Free tier with unlimited sends, built-in ad network, and referral program. Substack's 10% cut makes it expensive at scale. ConvertKit (now Kit) excels for creators selling digital products.", href: "/best/newsletter-platforms" },
              { tag: "Compare", title: "ChatGPT vs Claude: Which AI Wins?", desc: "ChatGPT (8.0) wins on ecosystem — GPTs, plugins, DALL-E, browsing. Claude (8.5) wins on reasoning depth, 200K context, and careful analysis. For coding: Claude. For variety: ChatGPT.", href: "/compare/chatgpt-vs-claude-ai" },
              { tag: "Pricing", title: "The Hidden Cost of Mailchimp", desc: "Free tier caps at 500 contacts. Standard jumps to $20/mo. At 10K contacts you're paying $100+/mo. Brevo charges by emails sent — not contacts — making it 40-60% cheaper at scale.", href: "/pricing/mailchimp" },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="group border border-border rounded-xl p-5 bg-surface hover-glow">
                <span className="inline-block text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded mb-3">{p.tag}</span>
                <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors leading-snug">{p.title}</h3>
                <p className="text-[11px] text-muted leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — NEWSLETTER
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight mb-2">Stay sharp</h2>
          <p className="text-sm text-muted mb-6">New reviews, pricing changes, and comparison updates — every Tuesday.</p>
          <EmailCapture variant="inline" />
          <p className="text-[11px] text-muted mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — TRUST BAR
          ═══════════════════════════════════════════════════════ */}
      <section className="py-6 bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-[11px] text-muted">
            {["Evidence-backed claims", "Normalized pricing data", "6-axis scoring methodology", "Editorial independent of affiliates", "Data verified March 2026"].map((t) => (
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
