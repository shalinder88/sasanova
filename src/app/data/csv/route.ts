import { tools } from "@/data/tools";

function escapeCSV(value: string): string {
  if (value.includes(",") || value.includes('"') || value.includes("\n")) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function GET() {
  const headers = [
    "name",
    "slug",
    "vendor",
    "category",
    "freeTier",
    "lowestPrice",
    "highestPrice",
    "billingModel",
    "provenanceLevel",
    "lastVerified",
    "website",
  ];

  const rows = tools.map((tool) => {
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

    return [
      escapeCSV(tool.name),
      tool.slug,
      escapeCSV(tool.vendor),
      tool.categorySlug,
      tool.freeTier ? "yes" : "no",
      lowestPrice.toString(),
      highestPrice.toString(),
      billingModel,
      tool.provenanceLevel,
      tool.lastVerified,
      tool.website,
    ].join(",");
  });

  const csv = [headers.join(","), ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition":
        'attachment; filename="sasanova-pricing-data.csv"',
    },
  });
}
