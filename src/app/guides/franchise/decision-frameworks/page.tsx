import type { Metadata } from "next";
import Link from "next/link";
import RelatedLinks from "@/components/RelatedLinks";
import { generateArticleSchema } from "@/lib/article-schema";

export const metadata: Metadata = {
  title: "Decision Frameworks: The Complete Series — Sasanova",
  description:
    "Stop comparing 50 tools. Use our decision frameworks and 5-minute guides to choose the right CRM, email platform, automation tool, PM tool, and website builder.",
};

const frameworks = [
  {
    slug: "how-to-choose-email-platform",
    title: "How to Choose an Email Marketing Platform",
    summary: "Answer 3 questions, follow the decision tree. Budget matrix at $0, $50, and $200/month.",
  },
  {
    slug: "how-to-choose-crm",
    title: "How to Choose a CRM Without Overthinking It",
    summary: "One question decides: relationship-driven or deal-driven? Team size matrix and free tier trap.",
  },
  {
    slug: "how-to-choose-automation-tool",
    title: "Zapier vs Make vs n8n: A Decision Framework",
    summary: "The real axis: simplicity vs cost vs control. Volume-based decision tree with exact breakpoints.",
  },
  {
    slug: "how-much-should-software-cost",
    title: "How Much Should Your Software Stack Cost?",
    summary: "Benchmarks by business stage: solo ($0-100), small team ($100-500), growing ($500-2K).",
  },
  {
    slug: "when-to-switch-software",
    title: "When to Switch Software (And When to Just Live With It)",
    summary: "5 switching triggers that justify the pain. 5 situations where switching wastes time.",
  },
  {
    slug: "crm-decision-in-5-minutes",
    title: "Choose Your CRM in 5 Minutes",
    summary: "Answer 5 questions, get a specific CRM recommendation with exact pricing.",
  },
  {
    slug: "email-decision-in-5-minutes",
    title: "Choose Your Email Platform in 5 Minutes",
    summary: "Answer 5 questions, get a specific email marketing recommendation with exact pricing.",
  },
  {
    slug: "automation-decision-in-5-minutes",
    title: "Choose Your Automation Tool in 5 Minutes",
    summary: "Decide between Zapier, Make, and n8n with exact pricing and volume breakpoints.",
  },
  {
    slug: "pm-decision-in-5-minutes",
    title: "Choose Your Project Management Tool in 5 Minutes",
    summary: "Notion, ClickUp, Asana, Monday, Trello, Jira, or Linear — 5 questions to decide.",
  },
  {
    slug: "website-builder-decision-in-5-minutes",
    title: "Choose Your Website Builder in 5 Minutes",
    summary: "Squarespace, Wix, Webflow, Framer, Carrd, or WordPress — 5 questions to decide.",
  },
];

const articleSchema = generateArticleSchema({
  title: "Decision Frameworks: The Complete Series",
  description:
    "Stop comparing 50 tools. Use our decision frameworks and 5-minute guides to choose the right CRM, email platform, automation tool, PM tool, and website builder.",
  url: "https://sasanova.com/guides/franchise/decision-frameworks",
  datePublished: "2026-03-18",
  dateModified: "2026-03-26",
});

export default function DecisionFrameworksHub() {
  return (
    <>
      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Decision Frameworks</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Content Series
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Decision Frameworks: The Complete Series
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Stop comparing feature lists. Each framework in this series gives
            you a structured decision process — answer a few questions, follow
            the tree, and land on the right tool for your situation. Includes
            full decision frameworks and 5-minute quick-guides.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {frameworks.map((entry) => (
              <Link
                key={entry.slug}
                href={`/guides/${entry.slug}`}
                className="group border border-border rounded-xl p-6 hover-glow hover:border-accent/30 transition-all bg-background"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  {entry.slug.includes("5-minutes")
                    ? "5-Minute Guide"
                    : "Decision Framework"}
                </p>
                <h2 className="text-lg font-bold group-hover:text-accent transition-colors mb-2">
                  {entry.title}
                </h2>
                <p className="text-sm text-muted line-clamp-2">
                  {entry.summary}
                </p>
              </Link>
            ))}
          </div>

          <RelatedLinks
            guides={[
              "franchise/anti-recommendations",
              "franchise/hidden-costs",
              "franchise/cost-thresholds",
              "franchise/migration-guides",
            ]}
          />
        </div>
      </section>
    </>
  );
}
