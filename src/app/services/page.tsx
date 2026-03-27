import Link from "next/link";

/* ── Icon components ── */
function StackIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0 4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
    </svg>
  );
}

function ReplacementIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function CostIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function RoadmapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

const deliverables = [
  {
    icon: <StackIcon />,
    title: "Complete Stack Analysis",
    description: "We audit every tool against 148+ alternatives in our database. No stone left unturned.",
  },
  {
    icon: <ReplacementIcon />,
    title: "Replacement Plan",
    description: "Specific recommendations with exact pricing, not generic \"consider switching\" advice.",
  },
  {
    icon: <CostIcon />,
    title: "Switching Cost Estimates",
    description: "Migration difficulty, time investment, and hidden costs for each recommended change.",
  },
  {
    icon: <RoadmapIcon />,
    title: "Action Roadmap",
    description: "Prioritized by savings impact, with step-by-step migration notes for each transition.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell us your stack",
    description: "Send us your current tools, plans, and team size. We handle the rest.",
  },
  {
    number: "02",
    title: "We do the research",
    description: "Our team cross-references your stack against verified pricing data from 148+ tools.",
  },
  {
    number: "03",
    title: "Get your savings plan",
    description: "Receive a detailed report within 48 hours with exact savings and migration steps.",
  },
];

const plans = [
  {
    name: "Starter Audit",
    price: "$149",
    scope: "Up to 10 tools",
    features: [
      "Complete stack analysis",
      "Replacement recommendations with exact pricing",
      "Switching cost estimates",
      "Prioritized action roadmap",
      "48-hour delivery",
      "Money-back guarantee",
    ],
    highlight: false,
  },
  {
    name: "Full Audit",
    price: "$499",
    scope: "Up to 25 tools",
    features: [
      "Everything in Starter",
      "Quarterly re-audit for 12 months",
      "Vendor negotiation talking points",
      "Team-specific recommendations",
      "Priority delivery",
      "Money-back guarantee",
    ],
    highlight: true,
  },
  {
    name: "Team Audit",
    price: "$999",
    scope: "Up to 50 tools",
    features: [
      "Everything in Full Audit",
      "Implementation support",
      "Monthly check-ins for 12 months",
      "Dedicated audit lead",
      "Custom migration timeline",
      "Money-back guarantee",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    question: "What information do you need from me?",
    answer:
      "A list of your current tools, which plan you're on for each, your team size, and your approximate monthly SaaS spend. The more detail you provide, the more specific our recommendations. We'll send you a simple intake form after you get in touch.",
  },
  {
    question: "How is this different from the free audit tool?",
    answer:
      "The free audit tool gives you a quick, automated comparison. The expert audit is a manual, in-depth review by our team. We dig into your specific usage patterns, contract terms, team workflows, and switching feasibility — things an automated tool can't assess.",
  },
  {
    question: "What if you don't find any savings?",
    answer:
      "Full refund — no questions asked. If our audit doesn't identify meaningful savings opportunities, you pay nothing. We've never had to issue a refund, but the guarantee is there so you have zero risk.",
  },
  {
    question: "Can you help us actually make the switches?",
    answer:
      "Yes. The Team Audit plan includes implementation support and monthly check-ins. For Starter and Full Audit customers, we provide detailed migration guides. We can also scope custom implementation projects on request.",
  },
  {
    question: "Do you have affiliate relationships with the tools you recommend?",
    answer:
      "Yes, we maintain affiliate partnerships with some of the tools in our database. However, every recommendation is driven by our published methodology — the same methodology that powers our free comparison tools. Affiliate status never influences which tool we recommend. You can review our full editorial policy for details.",
  },
];

export default function ServicesPage() {
  const mailtoHref =
    "mailto:sasanovatools@gmail.com?subject=Expert%20SaaS%20Stack%20Audit%20%E2%80%94%20Getting%20Started&body=Hi%20Sasanova%20team%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20the%20Expert%20Stack%20Audit.%0A%0AApproximate%20number%20of%20tools%3A%20%0AApproximate%20monthly%20SaaS%20spend%3A%20%0ATeam%20size%3A%20%0A%0AThanks!";

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
          ═══════════════════════════════════════════════════════ */}
      <section className="hero-mesh border-b border-border relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-20 lg:pb-28 text-center relative z-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Expert Service
          </p>
          <h1 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            Expert SaaS
            <br />
            <span className="text-muted">Stack Audit</span>
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto mb-8">
            We&apos;ll find where you&apos;re overpaying and build your savings plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted mb-10">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              $149 &mdash; Full Stack Review
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
              48-Hour Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Money-Back Guarantee
            </span>
          </div>
          <a
            href={mailtoHref}
            className="inline-flex px-8 py-3.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY THIS MATTERS — data-backed justification
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 border-b border-border bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-center">
            Why this matters
          </h2>
          <p className="text-muted text-sm mb-10 max-w-lg mx-auto text-center">
            The data behind SaaS overspending is staggering.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-2xl font-extrabold text-accent mb-2">90%</p>
              <p className="text-sm text-foreground font-semibold mb-1">of companies overpay for SaaS</p>
              <p className="text-xs text-muted">Source: Vertice/Everest Group</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-2xl font-extrabold text-accent mb-2">12.2%</p>
              <p className="text-sm text-foreground font-semibold mb-1">SaaS price increase last year &mdash; 5x faster than inflation</p>
              <p className="text-xs text-muted">Source: Vertice SaaS Inflation Index</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5">
              <p className="text-2xl font-extrabold text-accent mb-2">25&ndash;35%</p>
              <p className="text-sm text-foreground font-semibold mb-1">saved in year one with active SaaS management</p>
              <p className="text-xs text-muted">Organizations with structured SaaS audits</p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-2xl font-extrabold text-success mb-2">$15,000</p>
              <p className="text-sm text-foreground font-semibold mb-1">in recoverable spend for a 10-person team at $50K/year</p>
              <p className="text-xs text-muted">That&apos;s the average 30% waste &mdash; 50x the cost of our Starter audit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHAT YOU GET — 4 cards
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            What you get
          </h2>
          <p className="text-muted text-sm mb-12 max-w-lg">
            A thorough, manual review of your entire SaaS stack — not an automated scan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className="hover-glow rounded-xl border border-border bg-surface p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                  {d.icon}
                </div>
                <h3 className="text-sm font-bold mb-1.5">{d.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          HOW IT WORKS — 3 steps
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-12">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number} className="relative">
                <span className="text-5xl font-extrabold text-accent/15 absolute -top-2 -left-1 select-none">
                  {s.number}
                </span>
                <div className="pt-10">
                  <h3 className="text-sm font-bold mb-2">{s.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PRICING — 3 tiers
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Pricing
          </h2>
          <p className="text-muted text-sm mb-3 max-w-lg">
            One-time payment. No subscription. Money-back guarantee if we don&apos;t find savings.
          </p>
          <p className="text-muted text-xs mb-12 max-w-lg">
            We specialize in email marketing, CRM, and automation tools &mdash; the categories with the highest savings potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`hover-glow rounded-xl border p-6 flex flex-col ${
                  plan.highlight
                    ? "border-accent bg-accent/5 ring-1 ring-accent/20"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlight && (
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="text-sm font-bold mb-1">{plan.name}</h3>
                <p className="text-xs text-muted mb-4">{plan.scope}</p>
                <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={mailtoHref}
                  className={`block text-center text-sm font-semibold py-2.5 rounded-lg transition-all ${
                    plan.highlight
                      ? "bg-accent text-white hover:brightness-110"
                      : "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TRUST SIGNALS
          ═══════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 border-b border-border bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-xs text-muted leading-relaxed">
                Powered by provenance-tracked pricing data from <strong className="text-foreground">148+ tools</strong>
              </p>
            </div>
            <div>
              <p className="text-xs text-muted leading-relaxed">
                All recommendations based on our{" "}
                <Link href="/about/methodology" className="text-accent hover:underline">
                  published methodology
                </Link>
              </p>
            </div>
            <div>
              <p className="text-xs text-muted leading-relaxed">
                <strong className="text-foreground">100% money-back guarantee</strong> if no savings found
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8 text-xs">
            <Link href="/about/methodology" className="text-accent hover:underline">
              Our Methodology
            </Link>
            <span className="text-border">|</span>
            <Link href="/about/editorial-policy" className="text-accent hover:underline">
              Editorial Policy
            </Link>
            <span className="text-border">|</span>
            <Link href="/disclosure" className="text-accent hover:underline">
              Advertiser Disclosure
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-sm font-bold mb-2">{faq.question}</h3>
                <p className="text-xs text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            Ready to stop overpaying?
          </h2>
          <p className="text-sm text-muted mb-8 max-w-md mx-auto">
            Send us your stack. We&apos;ll send back your savings plan within 48 hours.
          </p>
          <a
            href={mailtoHref}
            className="inline-flex px-8 py-3.5 text-sm font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all"
          >
            Get Started
          </a>
          <p className="text-[11px] text-muted mt-4">
            Or email us directly at{" "}
            <a href="mailto:sasanovatools@gmail.com" className="text-accent hover:underline">
              sasanovatools@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
