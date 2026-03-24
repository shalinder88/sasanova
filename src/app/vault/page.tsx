import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Vault — Sasanova Newsletter & Updates",
  description:
    "Subscribe to The Vault for weekly tool reviews, pricing updates, comparison breakdowns, and software workflow tips. Free, no spam.",
};

const placeholderArticles = [
  {
    title: "The Real Cost of Switching Email Platforms in 2026",
    description:
      "We analyzed migration costs across 8 email marketing tools. Here is what nobody tells you about switching.",
    date: "Coming soon",
    category: "Deep Dive",
  },
  {
    title: "5 Automation Workflows Every Solo Founder Needs",
    description:
      "Save 10+ hours a week with these battle-tested Zapier and Make workflows for lead capture, onboarding, and reporting.",
    date: "Coming soon",
    category: "Workflows",
  },
  {
    title: "March 2026 SaaS Pricing Changelog",
    description:
      "Which tools raised prices, which added free tiers, and what changed this month across 20+ platforms.",
    date: "Coming soon",
    category: "Pricing Watch",
  },
];

export default function VaultPage() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Newsletter
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            The Vault &mdash; Sasanova Newsletter &amp; Updates
          </h1>
          <p className="text-muted max-w-2xl">
            Tool reviews, pricing changes, workflow breakdowns, and comparison updates delivered to your inbox every Tuesday.
          </p>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture variant="hero" />
        </div>
      </section>

      {/* Upcoming Articles */}
      <section className="py-10 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6">Upcoming Articles</h2>
          <div className="grid grid-cols-1 gap-4">
            {placeholderArticles.map((article) => (
              <div
                key={article.title}
                className="border border-border rounded-xl p-5 bg-background relative overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-semibold bg-surface-alt text-muted px-2 py-0.5 rounded-full">
                    {article.date}
                  </span>
                </div>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full mb-2">
                  {article.category}
                </span>
                <h3 className="text-base font-bold mb-1">{article.title}</h3>
                <p className="text-sm text-muted">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
