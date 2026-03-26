import { tools, categories } from "@/data/tools";

const META = {
  source: "Sasanova",
  url: "https://sasanova.com",
  license: "Attribution required",
};

export function GET() {
  const data = tools.map((tool) => {
    const paidPlans = tool.pricing.filter(
      (p) => p.priceMonthly !== null && p.priceMonthly > 0
    );
    const cheapestPrice =
      paidPlans.length > 0
        ? Math.min(...paidPlans.map((p) => p.priceMonthly!))
        : 0;

    const cat = categories.find((c) => c.slug === tool.categorySlug);

    return {
      slug: tool.slug,
      name: tool.name,
      vendor: tool.vendor,
      category: cat?.name ?? tool.categorySlug,
      cheapestPrice,
      freeTier: tool.freeTier,
      lastVerified: tool.lastVerified,
    };
  });

  return Response.json(
    { tools: data, _meta: META },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
