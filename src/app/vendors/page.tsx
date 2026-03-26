import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For SaaS Vendors — Claim Your Sasanova Profile",
  description:
    "Sasanova tracks your pricing, features, and comparisons. Claim your profile to ensure accuracy, correct errors, and earn a Vendor Verified badge.",
  alternates: { canonical: "https://sasanova.com/vendors" },
  robots: { index: true, follow: true },
};

export default function VendorsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent bg-accent-light rounded-full mb-4">
          For SaaS Vendors
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Claim Your Sasanova Profile
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          Sasanova tracks your pricing, features, and comparisons across{" "}
          <strong className="text-foreground">170+ software tools</strong>.
          Claim your profile to ensure the data buyers see is accurate.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        {[
          {
            icon: (
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            title: "Correct Pricing Errors",
            desc: "Spot an outdated price or missing plan? Submit corrections with evidence and we update within 48 hours.",
          },
          {
            icon: (
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            ),
            title: "Add Missing Features",
            desc: "Launched a new feature or integration? Let us know so buyers see your full capabilities.",
          },
          {
            icon: (
              <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            ),
            title: "Vendor Verified Badge",
            desc: 'Verified profiles display a "Vendor Verified" badge, increasing buyer trust in your data accuracy.',
          },
          {
            icon: (
              <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            ),
            title: "Buyer Interest Analytics",
            desc: "Pro vendors see anonymized analytics: profile views, comparison traffic, and shortlist additions.",
          },
        ].map((b) => (
          <div
            key={b.title}
            className="border border-border rounded-xl p-5 bg-surface hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              {b.icon}
              <h3 className="text-sm font-bold">{b.title}</h3>
            </div>
            <p className="text-sm text-muted leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="border border-border rounded-xl p-6 bg-surface-alt mb-12">
        <h2 className="text-lg font-bold mb-4">How It Works</h2>
        <ol className="space-y-3">
          {[
            "Submit a claim form with your company email and what needs updating.",
            "Our editorial team verifies your identity against the tool's domain.",
            "Verified updates go live within 48 hours with a Vendor Verified badge.",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted">
              <span className="shrink-0 w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/vendors/claim"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm"
        >
          Claim Your Profile
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
        <p className="text-xs text-muted mt-3">
          Free for all vendors. No account required.
        </p>
      </div>
    </div>
  );
}
