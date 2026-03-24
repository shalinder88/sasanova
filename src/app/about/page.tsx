import type { Metadata } from "next";
import Link from "next/link";
import { tools, categories, versusPairs } from "@/data/tools";

export const metadata: Metadata = {
  title: "About Sasanova",
  description:
    "Sasanova is an independent software comparison platform. Evidence-backed scoring, normalized pricing, and transparent methodology.",
};

export default function AboutPage() {
  const toolCount = tools.length;
  const catCount = categories.length;
  const vsCount = versusPairs.length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">About</p>
      <h1 className="text-3xl font-extrabold tracking-tight mb-6">
        What Sasanova is — and what it is not
      </h1>

      <div className="space-y-6 text-sm text-muted leading-relaxed">
        <p>
          Sasanova is a software comparison platform built for people who are tired of
          sponsored rankings, vague "top 10" lists, and review sites where paying vendors
          get higher placement.
        </p>

        <p>
          We track <strong className="text-foreground">{toolCount} tools</strong> across{" "}
          <strong className="text-foreground">{catCount} categories</strong> with{" "}
          <strong className="text-foreground">{vsCount} head-to-head comparisons</strong>.
          Every tool is scored across six axes: value, ease, power, setup friction,
          migration difficulty, and transparency. Every score is editorial — no user
          reviews, no vendor-controlled ratings, no pay-for-placement.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">What makes us different</h2>

        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Normalized pricing</h3>
            <p>
              We break down every plan into monthly/annual cost, seat model, billing type,
              and hidden fees. Most comparison sites show the vendor&apos;s marketing price.
              We show what you actually pay.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Evidence-backed claims</h3>
            <p>
              Every pricing figure links to the vendor&apos;s official pricing page. Every
              feature claim comes from first-party documentation. We do not copy competitor
              reviews, ratings, or editorial content.{" "}
              <Link href="/about/source-policy" className="text-accent hover:underline">
                Read our source policy →
              </Link>
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Editorial independence</h3>
            <p>
              We may earn affiliate commissions when you click through to a vendor.
              But affiliate availability never influences our scores or rankings.
              Tools without affiliate programs are scored identically to those with them.{" "}
              <Link href="/about/editorial-policy" className="text-accent hover:underline">
                Read our editorial policy →
              </Link>
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Switching intelligence</h3>
            <p>
              Most review sites help you pick. We also help you switch. Every tool page
              includes migration triggers, switching blockers, implementation complexity,
              and alternative recommendations — because the cost of choosing wrong is the
              cost of switching later.
            </p>
          </div>

          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-1">Hidden costs exposed</h3>
            <p>
              We track pricing gotchas that vendors don&apos;t put in their headlines:
              transaction fees, module add-ons, per-seat price cliffs, contract minimums,
              and implementation costs. Because the number on the pricing page is rarely the
              number on your invoice.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-foreground pt-4">What we do not do</h2>

        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-danger mt-0.5">✕</span>
            <span>We do not host user reviews (yet). Our FTC compliance bar for review moderation is not met.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger mt-0.5">✕</span>
            <span>We do not scrape competitor sites. All data comes from first-party vendor sources or official APIs.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger mt-0.5">✕</span>
            <span>We do not use G2, Capterra, or Product Hunt data commercially.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-danger mt-0.5">✕</span>
            <span>We do not accept payment for rankings or editorial coverage.</span>
          </li>
        </ul>

        <h2 className="text-xl font-bold text-foreground pt-4">Trust pages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/about/methodology", title: "Scoring Methodology", desc: "How we calculate the 6-axis scores" },
            { href: "/about/editorial-policy", title: "Editorial Policy", desc: "Independence from affiliate revenue" },
            { href: "/about/source-policy", title: "Source Policy", desc: "Where our data comes from" },
            { href: "/disclosure", title: "Advertiser Disclosure", desc: "How we make money" },
            { href: "/privacy", title: "Privacy Policy", desc: "What data we collect" },
            { href: "/terms", title: "Terms of Use", desc: "Legal terms" },
          ].map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="border border-border rounded-lg p-3 hover:border-accent/30 transition-colors"
            >
              <p className="text-sm font-semibold text-foreground">{page.title}</p>
              <p className="text-xs text-muted">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
