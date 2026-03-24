import { tools } from "@/data/tools";

const SITE_URL = "https://sasanova.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  // Build changelog items from tools' lastVerified dates
  const items = tools
    .filter((t) => t.lastVerified)
    .map((tool) => ({
      title: `${tool.name} — profile verified`,
      link: `${SITE_URL}/tools/${tool.slug}`,
      description: `${tool.name} data independently verified. Scores, pricing, and features confirmed current.`,
      pubDate: new Date(tool.lastVerified).toUTCString(),
      slug: tool.slug,
    }))
    .sort(
      (a, b) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
    .slice(0, 50);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sasanova — Software Changes &amp; Updates</title>
    <link>${SITE_URL}</link>
    <description>Recent verification events, pricing changes, and tool updates tracked by Sasanova.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed" rel="self" type="application/rss+xml"/>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="false">${item.slug}-${item.pubDate}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
