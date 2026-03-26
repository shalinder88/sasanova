"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { startFreeTrial, getProStatus, type ProStatus } from "@/lib/pro";

/* ═══════════════════════════════════════════════════════════════
   FEATURE TABLE DATA
   ═══════════════════════════════════════════════════════════════ */

interface FeatureRow {
  feature: string;
  free: string;
  pro: string;
}

const features: FeatureRow[] = [
  { feature: "Pricing comparisons", free: "check", pro: "check" },
  { feature: "Calculator", free: "Basic (3 scenarios)", pro: "Unlimited scenarios" },
  { feature: "Price alerts", free: "3 tools", pro: "Unlimited tools + categories" },
  { feature: "Export reports", free: "dash", pro: "PDF + CSV export" },
  { feature: "Saved comparisons", free: "3", pro: "Unlimited" },
  { feature: "Team sharing", free: "dash", pro: "Share with up to 5 team members" },
  { feature: "API access", free: "dash", pro: "1,000 calls/month" },
  { feature: "Ad-free", free: "dash", pro: "No affiliate CTAs in comparisons" },
  { feature: "Priority support", free: "dash", pro: "Email support" },
  { feature: "Early access", free: "dash", pro: "New features first" },
];

/* ═══════════════════════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════════════════════ */

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "What happens after the 14-day trial?",
    a: "Your trial simply expires and you go back to the free plan. No credit card is required to start, and you keep all free features.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your account page at any time. You keep Pro access through the end of your billing period.",
  },
  {
    q: "What counts as a saved scenario?",
    a: "Each scenario you save in the Calculator (price comparison, switching cost, or stack budget) counts as one saved scenario. Free users can save up to 3.",
  },
  {
    q: "How does team sharing work?",
    a: "Share your saved comparisons, scenarios, and stack recommendations with up to 5 team members via a private link. They get read-only access without needing their own Pro account.",
  },
  {
    q: "What does API access include?",
    a: "Access Sasanova pricing data programmatically with up to 1,000 API calls per month. Retrieve tool info, pricing, scores, and comparison data in JSON format.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you are not satisfied within the first 30 days of a paid subscription, contact us for a full refund.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   CELL RENDERER
   ═══════════════════════════════════════════════════════════════ */

function CellContent({ value, highlight }: { value: string; highlight?: boolean }) {
  if (value === "check") {
    return (
      <svg
        className={`w-5 h-5 mx-auto ${highlight ? "text-accent" : "text-success"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (value === "dash") {
    return <span className="text-muted">&mdash;</span>;
  }
  return <span className={highlight ? "text-foreground font-medium" : "text-muted"}>{value}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ProPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [status, setStatus] = useState<ProStatus | null>(null);
  const [trialStarted, setTrialStarted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    setStatus(getProStatus());
  }, []);

  const monthlyPrice = 9;
  const annualPrice = 79;
  const annualMonthly = (annualPrice / 12).toFixed(2);
  const savingsPercent = Math.round((1 - annualPrice / (monthlyPrice * 12)) * 100);

  function handleStartTrial() {
    startFreeTrial();
    setStatus(getProStatus());
    setTrialStarted(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* ── Hero ── */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Sasanova Pro
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
          Stop guessing.{" "}
          <span className="text-accent">Start saving.</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
          Everything you love about Sasanova, plus tools that save your team money every month.
        </p>
      </section>

      {/* ── Pricing Toggle ── */}
      <section className="mb-16">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-surface border border-border rounded-lg p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billing === "monthly"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billing === "annual"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-1.5 text-[11px] font-bold text-success">
                Save {savingsPercent}%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-sm mx-auto">
          <div className="rounded-2xl border border-accent/40 bg-surface p-8 text-center shadow-lg shadow-accent/5">
            <h2 className="text-lg font-semibold text-foreground mb-1">Pro</h2>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-4xl font-bold text-foreground">
                ${billing === "monthly" ? monthlyPrice : annualMonthly}
              </span>
              <span className="text-muted text-sm">/month</span>
            </div>
            {billing === "annual" && (
              <p className="text-xs text-muted mb-4">
                Billed as ${annualPrice}/year
              </p>
            )}
            {billing === "monthly" && <div className="mb-4" />}

            {status?.active ? (
              <div className="rounded-lg bg-success/10 border border-success/30 p-3 mb-4">
                <p className="text-sm font-medium text-success">
                  You have Pro access
                </p>
                <p className="text-xs text-muted mt-0.5">
                  {status.type === "trial" ? `Trial — ${status.daysLeft} days left` : "Active subscription"}
                </p>
              </div>
            ) : trialStarted ? (
              <div className="rounded-lg bg-success/10 border border-success/30 p-3 mb-4">
                <p className="text-sm font-medium text-success">
                  Trial activated!
                </p>
                <p className="text-xs text-muted mt-0.5">
                  You have 14 days of full Pro access.
                </p>
              </div>
            ) : (
              <button
                onClick={handleStartTrial}
                className="w-full py-3 px-6 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors mb-4"
              >
                Start Free Trial
              </button>
            )}

            <p className="text-xs text-muted">
              14-day trial &middot; No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-foreground text-center mb-8">
          Free vs Pro
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-semibold uppercase tracking-wider text-muted py-3 pr-4">
                  Feature
                </th>
                <th className="text-center text-xs font-semibold uppercase tracking-wider text-muted py-3 px-4 w-32">
                  Free
                </th>
                <th className="text-center text-xs font-semibold uppercase tracking-wider text-accent py-3 px-4 w-48 bg-accent/5 rounded-t-lg">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border/50 ${
                    i % 2 === 0 ? "" : "bg-surface/50"
                  }`}
                >
                  <td className="text-sm text-foreground py-3 pr-4">
                    {row.feature}
                  </td>
                  <td className="text-center text-sm py-3 px-4">
                    <CellContent value={row.free} />
                  </td>
                  <td className="text-center text-sm py-3 px-4 bg-accent/5">
                    <CellContent value={row.pro} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-foreground text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-lg border border-border bg-surface overflow-hidden">
              <button
                onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-foreground hover:bg-surface-alt transition-colors"
              >
                {item.q}
                <svg
                  className={`w-4 h-4 text-muted flex-shrink-0 transition-transform ${
                    faqOpen === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {faqOpen === i && (
                <div className="px-5 pb-4 text-sm text-muted leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Trust Signal ── */}
      <section className="text-center mb-8">
        <p className="text-sm text-muted">
          Join <span className="text-foreground font-semibold">0</span> teams using Pro
        </p>
        <p className="text-xs text-muted mt-1">
          We are just getting started. Early adopters get our attention.
        </p>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="text-center">
        <div className="inline-flex flex-col items-center gap-3">
          {!status?.active && !trialStarted && (
            <button
              onClick={handleStartTrial}
              className="px-8 py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
            >
              Start Free Trial
            </button>
          )}
          <Link
            href="/calculate"
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            Or continue with Free &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
