import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "The Vault — Sasanova Newsletter & Updates",
  description:
    "Subscribe to The Vault for weekly tool reviews, pricing updates, comparison breakdowns, and software workflow tips. Free, no spam.",
};

const pastTopics = [
  {
    title: "Migrate from Mailchimp Without Losing Subscribers",
    href: "/guides/migrate-from-mailchimp",
    category: "Deep Dive",
  },
  {
    title: "Zapier vs Make vs n8n: Automation Showdown",
    href: "/guides/automation-zapier-vs-make-vs-n8n",
    category: "Comparison",
  },
  {
    title: "The Best Free Tools for Startups in 2026",
    href: "/guides/best-free-tools-startups",
    category: "Roundup",
  },
  {
    title: "Building a Newsletter Stack That Scales",
    href: "/guides/newsletter-stack",
    category: "Workflows",
  },
  {
    title: "Choosing the Right CRM as a Solo Founder",
    href: "/guides/crm-solo-founder",
    category: "Decision Guide",
  },
  {
    title: "Project Management for Small Teams",
    href: "/guides/project-management-small-team",
    category: "Roundup",
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
            Sasanova Weekly
          </h1>
          <p className="text-muted max-w-2xl">
            Every Tuesday, get the inside track on SaaS tools: new reviews, pricing changes, head-to-head comparisons, and workflow tips. Free, no spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture variant="hero" />
        </div>
      </section>

      {/* What Subscribers Get */}
      <section className="py-10 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6">What You Get Every Week</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-border rounded-xl p-5 bg-background">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full mb-2">
                Reviews
              </span>
              <h3 className="text-base font-bold mb-1">New Tool Reviews</h3>
              <p className="text-sm text-muted">
                Honest, independently scored reviews of the latest SaaS tools across 25+ categories.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-background">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full mb-2">
                Pricing Watch
              </span>
              <h3 className="text-base font-bold mb-1">Pricing Changes</h3>
              <p className="text-sm text-muted">
                Price hikes, new free tiers, and plan restructures tracked across every tool we cover.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-background">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full mb-2">
                Comparisons
              </span>
              <h3 className="text-base font-bold mb-1">Head-to-Head Breakdowns</h3>
              <p className="text-sm text-muted">
                Side-by-side comparisons with clear winners for specific use cases and budgets.
              </p>
            </div>
            <div className="border border-border rounded-xl p-5 bg-background">
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full mb-2">
                Workflows
              </span>
              <h3 className="text-base font-bold mb-1">Stack &amp; Workflow Tips</h3>
              <p className="text-sm text-muted">
                Automation recipes, integration setups, and tool stack recommendations for real workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Topics */}
      <section className="py-10 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6">Recent Topics from the Newsletter</h2>
          <div className="grid grid-cols-1 gap-4">
            {pastTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="border border-border rounded-xl p-5 bg-background hover:border-accent transition-colors block"
              >
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full mb-2">
                  {topic.category}
                </span>
                <h3 className="text-base font-bold">{topic.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
