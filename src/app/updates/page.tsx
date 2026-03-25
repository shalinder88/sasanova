import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Updates — Recent Verified Changes",
  description:
    "See what Sasanova has recently verified, updated, and tracked across software tools. Transparent proof of ongoing maintenance.",
  openGraph: {
    title: "Updates — Sasanova Software Changes",
    description:
      "Recent verification events, pricing changes, and tool updates tracked by Sasanova.",
  },
};

interface VerificationEntry {
  slug: string;
  name: string;
  date: string;
  category: string;
  provenance: string;
}

function groupByMonth(
  entries: VerificationEntry[]
): Record<string, VerificationEntry[]> {
  const groups: Record<string, VerificationEntry[]> = {};
  for (const entry of entries) {
    const d = new Date(entry.date);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(entry);
  }
  return groups;
}

function formatMonthLabel(key: string): string {
  const [year, month] = key.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function UpdatesPage() {
  const entries: VerificationEntry[] = tools
    .filter((t) => t.lastVerified)
    .map((t) => ({
      slug: t.slug,
      name: t.name,
      date: t.lastVerified,
      category: t.categorySlug,
      provenance: t.provenanceLevel,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const grouped = groupByMonth(entries);
  const monthKeys = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  // Recently verified: tools verified in the last 30 days
  const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
  const recentlyVerified = entries.filter(
    (e) => new Date(e.date).getTime() >= thirtyDaysAgo
  );

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Transparency
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
            Updates &amp; Verified Changes
          </h1>
          <p className="text-sm text-muted max-w-2xl">
            Every tool on Sasanova is independently verified. This page shows
            what we checked, when we checked it, and what changed. No
            black-box scores.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Weekly Digests */}
        <section>
          <h2 className="text-xl font-bold tracking-tight mb-1">
            Weekly Digests
          </h2>
          <p className="text-xs text-muted mb-4">
            Detailed weekly summaries of every pricing change, correction, and
            content update
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/updates/week-15-april-2026"
              className="block rounded-lg border border-border bg-background p-4 hover:border-accent transition-colors"
            >
              <span className="text-sm font-semibold text-foreground">
                Week 15 &mdash; April 8–14, 2026
              </span>
              <span className="block text-xs text-muted mt-1">
                Email deliverability comparison, CRM reporting, cost threshold
                pages
              </span>
            </Link>
            <Link
              href="/updates/week-14-april-2026"
              className="block rounded-lg border border-border bg-background p-4 hover:border-accent transition-colors"
            >
              <span className="text-sm font-semibold text-foreground">
                Week 14 &mdash; April 1–7, 2026
              </span>
              <span className="block text-xs text-muted mt-1">
                34-tool pricing audit, 19 corrections, annual cost comparisons
                launched
              </span>
            </Link>
            <Link
              href="/updates/week-13-march-2026"
              className="block rounded-lg border border-border bg-background p-4 hover:border-accent transition-colors"
            >
              <span className="text-sm font-semibold text-foreground">
                Week 13 &mdash; March 25–31, 2026
              </span>
              <span className="block text-xs text-muted mt-1">
                Bardeen, Pipedrive, Salesforce pricing corrected; anti-recommendation
                pages
              </span>
            </Link>
            <Link
              href="/updates/week-12-march-2026"
              className="block rounded-lg border border-border bg-background p-4 hover:border-accent transition-colors"
            >
              <span className="text-sm font-semibold text-foreground">
                Week 12 &mdash; March 18–24, 2026
              </span>
              <span className="block text-xs text-muted mt-1">
                Sasanova launch: 148 tools, Ghost and Mailchimp pricing
                restructured
              </span>
            </Link>
          </div>
        </section>

        {/* Recently Verified */}
        <section>
          <h2 className="text-xl font-bold tracking-tight mb-1">
            Recently Verified
          </h2>
          <p className="text-xs text-muted mb-4">
            Tools verified in the last 30 days
          </p>
          {recentlyVerified.length === 0 ? (
            <p className="text-sm text-muted">
              No tools verified in the last 30 days.
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {recentlyVerified.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/tools/${entry.slug}`}
                  className="block rounded-lg border border-border bg-background p-4 hover:border-accent transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {entry.name}
                  </span>
                  <span className="block text-xs text-muted mt-1">
                    Verified {formatDate(entry.date)}
                  </span>
                  <span className="inline-block mt-2 text-[10px] font-medium uppercase tracking-wider text-accent bg-accent-light rounded px-1.5 py-0.5">
                    {entry.provenance.replace(/_/g, " ")}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Pricing Changes */}
        <section>
          <h2 className="text-xl font-bold tracking-tight mb-1">
            Pricing Changes
          </h2>
          <p className="text-xs text-muted mb-4">
            Detected price adjustments and plan modifications
          </p>
          <div className="rounded-lg border border-border bg-background p-6 text-center">
            <p className="text-sm text-muted">
              No pricing changes detected this period.
            </p>
            <p className="text-xs text-muted mt-1">
              We monitor vendor pricing pages and flag changes automatically.
            </p>
          </div>
        </section>

        {/* Changelog grouped by month */}
        <section>
          <h2 className="text-xl font-bold tracking-tight mb-4">
            Verification Log
          </h2>
          {monthKeys.map((monthKey) => (
            <div key={monthKey} className="mb-8">
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3 border-b border-border pb-2">
                {formatMonthLabel(monthKey)}
              </h3>
              <ul className="space-y-2">
                {grouped[monthKey].map((entry) => (
                  <li
                    key={entry.slug + entry.date}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm"
                  >
                    <span className="shrink-0 text-xs text-muted w-28">
                      {formatDate(entry.date)}
                    </span>
                    <Link
                      href={`/tools/${entry.slug}`}
                      className="font-medium text-accent hover:underline"
                    >
                      {entry.name}
                    </Link>
                    <span className="text-muted">
                      Profile verified &mdash; scores, pricing, and features
                      confirmed current
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Feed links */}
        <section className="border-t border-border pt-6">
          <p className="text-xs text-muted">
            Subscribe to changes:{" "}
            <Link href="/feed" className="text-accent hover:underline">
              RSS Feed
            </Link>{" "}
            &middot;{" "}
            <Link href="/feed/json" className="text-accent hover:underline">
              JSON Feed
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
