import { tools, categories } from "@/data/tools";
import type { NextRequest } from "next/server";

const META = {
  source: "Sasanova",
  url: "https://sasanova.com",
  license: "Attribution required",
};

export function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.toLowerCase().trim();

  if (!q || q.length === 0) {
    return Response.json(
      { error: "Missing search query. Use ?q=term", results: [], _meta: META },
      { status: 400 }
    );
  }

  const matchedTools = tools
    .filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.vendor.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.categorySlug.toLowerCase().includes(q) ||
        t.categories.some((c) => c.toLowerCase().includes(q))
    )
    .slice(0, 20)
    .map((t) => {
      const cat = categories.find((c) => c.slug === t.categorySlug);
      const paidPlans = t.pricing.filter(
        (p) => p.priceMonthly !== null && p.priceMonthly > 0
      );
      const cheapestPrice =
        paidPlans.length > 0
          ? Math.min(...paidPlans.map((p) => p.priceMonthly!))
          : 0;

      return {
        slug: t.slug,
        name: t.name,
        vendor: t.vendor,
        category: cat?.name ?? t.categorySlug,
        tagline: t.tagline,
        cheapestPrice,
        freeTier: t.freeTier,
      };
    });

  return Response.json(
    { query: q, results: matchedTools, _meta: META },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
