import { tools } from "@/data/tools";

const SITE_URL = "https://sasanova.com";

export function GET() {
  const items = tools
    .filter((t) => t.lastVerified)
    .map((tool) => ({
      id: `${SITE_URL}/tools/${tool.slug}#verified-${tool.lastVerified}`,
      url: `${SITE_URL}/tools/${tool.slug}`,
      title: `${tool.name} — profile verified`,
      summary: `${tool.name} data independently verified. Scores, pricing, and features confirmed current.`,
      date_published: new Date(tool.lastVerified).toISOString(),
      content_text: `${tool.name} (${tool.vendor}) was independently verified on ${tool.lastVerified}. Category: ${tool.categorySlug}. Provenance: ${tool.provenanceLevel}.`,
      _sasanova: {
        tool_slug: tool.slug,
        tool_name: tool.name,
        event_type: "verification",
        category: tool.categorySlug,
      },
    }))
    .sort(
      (a, b) =>
        new Date(b.date_published).getTime() -
        new Date(a.date_published).getTime()
    )
    .slice(0, 50);

  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "Sasanova — Software Changes & Updates",
    home_page_url: SITE_URL,
    feed_url: `${SITE_URL}/feed/json`,
    description:
      "Recent verification events, pricing changes, and tool updates tracked by Sasanova.",
    language: "en-US",
    items,
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
