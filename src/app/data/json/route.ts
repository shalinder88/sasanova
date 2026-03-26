import { tools } from "@/data/tools";
import { NextResponse } from "next/server";

export function GET() {
  const data = tools.map((tool) => {
    const paidPlans = tool.pricing.filter(
      (p) => p.priceMonthly !== null && p.priceMonthly > 0
    );
    const lowestPrice =
      paidPlans.length > 0
        ? Math.min(...paidPlans.map((p) => p.priceMonthly!))
        : 0;
    const allPrices = tool.pricing
      .filter((p) => p.priceMonthly !== null)
      .map((p) => p.priceMonthly!);
    const highestPrice =
      allPrices.length > 0 ? Math.max(...allPrices) : 0;
    const billingModel =
      paidPlans.length > 0 ? paidPlans[0].billingModel : tool.pricing[0]?.billingModel ?? "flat";

    return {
      name: tool.name,
      slug: tool.slug,
      vendor: tool.vendor,
      category: tool.categorySlug,
      freeTier: tool.freeTier,
      lowestPrice,
      highestPrice,
      billingModel,
      provenanceLevel: tool.provenanceLevel,
      lastVerified: tool.lastVerified,
      website: tool.website,
    };
  });

  return NextResponse.json(
    {
      meta: {
        source: "sasanova.com",
        totalTools: data.length,
        generatedAt: new Date().toISOString(),
        attribution: "Data by Sasanova. Free to use with attribution. Link back to sasanova.com/data.",
      },
      tools: data,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=86400",
      },
    }
  );
}
