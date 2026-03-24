import type { Metadata } from "next";
import Link from "next/link";

const guideMeta: Record<string, { title: string; category: string }> = {
  "newsletter-stack": {
    title: "How to Build a Newsletter Stack Under $50/Month",
    category: "Stack Building",
  },
  "ai-research-workflow": {
    title: "Best AI Research Workflow for Solo Founders",
    category: "Workflow",
  },
  "automate-lead-capture": {
    title: "How to Automate Lead Capture Without Code",
    category: "Automation",
  },
};

export function generateStaticParams() {
  return Object.keys(guideMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideMeta[slug];
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: guide.title,
    description: `Read the full guide: ${guide.title}. Practical, tool-agnostic advice from the Sasanova editorial team.`,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideMeta[slug];

  if (!guide) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Guide Not Found</h1>
        <p className="text-muted mb-6">We couldn&apos;t find this guide.</p>
        <Link href="/guides" className="text-accent hover:underline">
          Back to Guides
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="border-b border-border bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-accent transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium truncate">{guide.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          {guide.category}
        </span>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-6">
          {guide.title}
        </h1>
        <div className="border border-border rounded-xl p-8 bg-surface">
          <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold mb-2">Coming Soon</h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            This guide is currently being written by our editorial team. Subscribe to The Vault newsletter to get notified when it publishes.
          </p>
          <Link
            href="/vault"
            className="inline-flex items-center mt-4 px-5 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors text-sm"
          >
            Get notified
          </Link>
        </div>
      </div>
    </>
  );
}
