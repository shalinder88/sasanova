import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Guides & Workflows",
  description:
    "Practical guides for building SaaS stacks, automating workflows, and choosing the right tools. Written by the Sasanova editorial team.",
};

const guides = [
  {
    slug: "newsletter-stack",
    title: "How to Build a Newsletter Stack Under $50/Month",
    description:
      "A step-by-step guide to assembling a complete newsletter operation — email platform, landing pages, automation, and analytics — without breaking the bank.",
    readingTime: "12 min read",
    category: "Stack Building",
  },
  {
    slug: "ai-research-workflow",
    title: "Best AI Research Workflow for Solo Founders",
    description:
      "How to combine AI assistants, note-taking tools, and automation to build a research workflow that saves 10+ hours per week.",
    readingTime: "9 min read",
    category: "Workflow",
  },
  {
    slug: "automate-lead-capture",
    title: "How to Automate Lead Capture Without Code",
    description:
      "Connect forms, scheduling, CRM, and email marketing using no-code automation tools. Capture, qualify, and nurture leads on autopilot.",
    readingTime: "11 min read",
    category: "Automation",
  },
];

export default function GuidesHub() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Guides
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Software Guides &amp; Workflows
          </h1>
          <p className="text-muted max-w-2xl">
            Practical, tool-agnostic guides for building stacks, automating workflows, and making better software decisions.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group border border-border rounded-xl p-6 hover:border-accent/30 transition-all bg-background"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full">
                        {guide.category}
                      </span>
                      <span className="text-[11px] text-muted">{guide.readingTime}</span>
                    </div>
                    <h2 className="text-lg font-bold group-hover:text-accent transition-colors mb-1">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-muted line-clamp-2">{guide.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-accent shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
