import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedLinks from "@/components/RelatedLinks";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

/* ------------------------------------------------------------------ */
/*  Weekly digest data                                                 */
/* ------------------------------------------------------------------ */

interface DigestItem {
  text: string;
  link?: string;
}

interface DigestWeek {
  slug: string;
  weekNumber: number;
  month: string;
  year: number;
  dateRange: string;
  pricingChanges: DigestItem[];
  toolsAddedUpdated: DigestItem[];
  contentPublished: DigestItem[];
  correctionsMade: DigestItem[];
  relatedTools: string[];
  relatedComparisons: string[];
  relatedGuides: string[];
}

const weeklyDigests: DigestWeek[] = [
  {
    slug: "week-12-march-2026",
    weekNumber: 12,
    month: "March",
    year: 2026,
    dateRange: "March 18 – 24, 2026",
    pricingChanges: [
      {
        text: "Ghost pricing restructured: Starter now $15/mo (was $9), Creator plan removed, Publisher plan added at $29/mo",
        link: "/pricing/ghost",
      },
      {
        text: "Mailchimp free tier verified at 250 contacts, 500 sends (down from historical 2,000/12,000)",
        link: "/pricing/mailchimp",
      },
    ],
    toolsAddedUpdated: [
      {
        text: "Sasanova launches with 148 tools, 151 comparisons across 30 categories",
        link: "/tools",
      },
      {
        text: "Interactive pricing calculator launched with 3 modes: side-by-side, annual cost, and break-even analysis",
        link: "/pricing",
      },
    ],
    contentPublished: [
      {
        text: "15 migration guides published across email, CRM, and automation clusters",
        link: "/guides",
      },
    ],
    correctionsMade: [],
    relatedTools: ["ghost", "mailchimp", "hubspot", "zapier"],
    relatedComparisons: ["mailchimp-vs-ghost", "hubspot-vs-pipedrive"],
    relatedGuides: [
      "migrate-from-mailchimp",
      "mailchimp-pricing-history",
      "hubspot-pricing-reality",
    ],
  },
  {
    slug: "week-13-march-2026",
    weekNumber: 13,
    month: "March",
    year: 2026,
    dateRange: "March 25 – 31, 2026",
    pricingChanges: [
      {
        text: "Bardeen pricing corrected: Professional plan now $99/mo (was incorrectly listed as $10/mo)",
        link: "/pricing/bardeen",
      },
      {
        text: "Pipedrive plans rebranded: Essential renamed to Lite, Advanced renamed to Growth, Professional renamed to Premium, Power tier removed",
        link: "/pricing/pipedrive",
      },
      {
        text: "Salesforce prices updated: Pro Suite $100/mo (6% increase), Enterprise $175/mo, Unlimited $350/mo",
        link: "/pricing/salesforce",
      },
    ],
    toolsAddedUpdated: [
      {
        text: "Social Command Center launched for content distribution tracking",
      },
    ],
    contentPublished: [
      {
        text: "5 'Who Should NOT Use' anti-recommendation pages published for HubSpot, Mailchimp, Zapier, Notion, and Salesforce",
        link: "/guides/who-should-not-use-hubspot",
      },
    ],
    correctionsMade: [
      {
        text: "Bardeen Professional plan price corrected from $10/mo to $99/mo after vendor site verification",
        link: "/tools/bardeen",
      },
    ],
    relatedTools: ["bardeen", "pipedrive", "salesforce"],
    relatedComparisons: [
      "pipedrive-vs-hubspot",
      "salesforce-vs-hubspot",
    ],
    relatedGuides: [
      "who-should-not-use-hubspot",
      "who-should-not-use-mailchimp",
      "who-should-not-use-zapier",
      "who-should-not-use-notion",
      "who-should-not-use-salesforce",
      "salesforce-hidden-costs",
    ],
  },
  {
    slug: "week-14-april-2026",
    weekNumber: 14,
    month: "April",
    year: 2026,
    dateRange: "April 1 – 7, 2026",
    pricingChanges: [
      {
        text: "Pricing verification sweep completed: 34 tools audited, 19 corrections applied across all clusters",
      },
    ],
    toolsAddedUpdated: [
      {
        text: "Switching Intelligence elevated as brand signature on all tool pages",
        link: "/tools",
      },
      {
        text: "Annual cost comparison pages launched for email, CRM, and automation clusters",
        link: "/guides/email-marketing-annual-cost-2026",
      },
    ],
    contentPublished: [
      {
        text: "Decision framework guides published: how to choose the right email, CRM, and automation tool",
        link: "/guides",
      },
      {
        text: "Annual cost comparison pages for all 3 core clusters now live",
        link: "/guides/crm-annual-cost-2026",
      },
    ],
    correctionsMade: [
      {
        text: "19 pricing corrections applied after full 34-tool audit sweep",
      },
    ],
    relatedTools: ["hubspot", "mailchimp", "zapier", "make"],
    relatedComparisons: [
      "mailchimp-vs-hubspot",
      "zapier-vs-make",
    ],
    relatedGuides: [
      "email-marketing-annual-cost-2026",
      "crm-annual-cost-2026",
      "automation-annual-cost-2026",
      "automation-pricing-compared",
    ],
  },
  {
    slug: "week-15-april-2026",
    weekNumber: 15,
    month: "April",
    year: 2026,
    dateRange: "April 8 – 14, 2026",
    pricingChanges: [
      {
        text: "Cost threshold pages published: exact price points where HubSpot, Mailchimp, and Zapier stop being the cheaper option",
        link: "/guides/hubspot-pricing-reality",
      },
    ],
    toolsAddedUpdated: [],
    contentPublished: [
      {
        text: "New depth content: email deliverability comparison across all tracked platforms",
        link: "/guides/email-deliverability-compared",
      },
      {
        text: "CRM reporting feature comparison published",
        link: "/guides/crm-integrations-that-matter",
      },
      {
        text: "Automation error handling guide published for Zapier, Make, and n8n",
        link: "/guides/automation-zapier-vs-make-vs-n8n",
      },
    ],
    correctionsMade: [],
    relatedTools: ["hubspot", "mailchimp", "zapier", "make", "n8n"],
    relatedComparisons: [
      "zapier-vs-make",
      "mailchimp-vs-kit",
    ],
    relatedGuides: [
      "email-deliverability-compared",
      "hubspot-pricing-reality",
      "mailchimp-hidden-costs",
      "zapier-hidden-costs",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Lookup                                                             */
/* ------------------------------------------------------------------ */

function getDigest(slug: string): DigestWeek | undefined {
  return weeklyDigests.find((d) => d.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  return weeklyDigests.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const digest = getDigest(slug);
  if (!digest) return {};

  const title = `Sasanova Updates — Week ${digest.weekNumber}, ${digest.month} ${digest.year}`;
  const description = `Weekly digest for ${digest.dateRange}: pricing changes, tool updates, corrections, and new content published on Sasanova.`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl(`/updates/${slug}`) },
    openGraph: {
      title: `${title} | Sasanova`,
      description,
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

function DigestSection({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: DigestItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
        <span className="text-accent">{icon}</span>
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
          >
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
            <div className="text-sm text-foreground">
              {item.text}
              {item.link && (
                <>
                  {" "}
                  <Link
                    href={item.link}
                    className="text-accent hover:underline whitespace-nowrap"
                  >
                    View details &rarr;
                  </Link>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function WeeklyDigestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const digest = getDigest(slug);
  if (!digest) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Updates", path: "/updates" },
    {
      name: `Week ${digest.weekNumber}, ${digest.month} ${digest.year}`,
      path: `/updates/${digest.slug}`,
    },
  ];

  // Navigate between weeks
  const currentIdx = weeklyDigests.findIndex((d) => d.slug === slug);
  const prevWeek = currentIdx > 0 ? weeklyDigests[currentIdx - 1] : null;
  const nextWeek =
    currentIdx < weeklyDigests.length - 1
      ? weeklyDigests[currentIdx + 1]
      : null;

  return (
    <>
      {/* JSON-LD breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)),
        }}
      />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border bg-surface"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1.5 text-xs text-muted">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.path}
                    className="hover:text-accent transition-colors"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Weekly Digest
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2">
            Week {digest.weekNumber}, {digest.month} {digest.year}
          </h1>
          <p className="text-sm text-muted">{digest.dateRange}</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <DigestSection
          title="Pricing Changes"
          icon="$"
          items={digest.pricingChanges}
        />
        <DigestSection
          title="Tools Added & Updated"
          icon="+"
          items={digest.toolsAddedUpdated}
        />
        <DigestSection
          title="Content Published"
          icon="#"
          items={digest.contentPublished}
        />
        <DigestSection
          title="Corrections Made"
          icon="!"
          items={digest.correctionsMade}
        />

        {/* Week navigation */}
        <nav className="flex items-center justify-between border-t border-border pt-6 mt-10">
          {prevWeek ? (
            <Link
              href={`/updates/${prevWeek.slug}`}
              className="text-sm text-accent hover:underline"
            >
              &larr; Week {prevWeek.weekNumber}, {prevWeek.month}{" "}
              {prevWeek.year}
            </Link>
          ) : (
            <span />
          )}
          {nextWeek ? (
            <Link
              href={`/updates/${nextWeek.slug}`}
              className="text-sm text-accent hover:underline"
            >
              Week {nextWeek.weekNumber}, {nextWeek.month} {nextWeek.year}{" "}
              &rarr;
            </Link>
          ) : (
            <span />
          )}
        </nav>

        {/* Related links */}
        <RelatedLinks
          tools={digest.relatedTools}
          comparisons={digest.relatedComparisons}
          guides={digest.relatedGuides}
        />
      </div>
    </>
  );
}
