import {
  getToolBySlug,
  getVersusMatch,
  getOverallScore,
  type Tool,
} from "@/data/tools";

const META = {
  source: "Sasanova",
  url: "https://sasanova.com",
  license: "Attribution required",
};

function toolSummary(tool: Tool) {
  const paidPlans = tool.pricing.filter(
    (p) => p.priceMonthly !== null && p.priceMonthly > 0
  );
  const cheapestPrice =
    paidPlans.length > 0
      ? Math.min(...paidPlans.map((p) => p.priceMonthly!))
      : 0;

  return {
    slug: tool.slug,
    name: tool.name,
    vendor: tool.vendor,
    cheapestPrice,
    freeTier: tool.freeTier,
    scores: {
      overall: getOverallScore(tool.scores),
      value: tool.scores.value,
      ease: tool.scores.ease,
      power: tool.scores.power,
    },
    bestFor: tool.bestFor,
    avoidIf: tool.avoidIf,
  };
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slugA: string; slugB: string }> }
) {
  const { slugA, slugB } = await params;
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);

  if (!toolA || !toolB) {
    return Response.json(
      {
        error: `Tool not found: ${!toolA ? slugA : slugB}`,
        _meta: META,
      },
      { status: 404 }
    );
  }

  const versus = getVersusMatch(slugA, slugB);

  // Calculate price delta
  const priceA =
    toolA.pricing.filter((p) => p.priceMonthly && p.priceMonthly > 0)
      .sort((a, b) => a.priceMonthly! - b.priceMonthly!)[0]?.priceMonthly ?? 0;
  const priceB =
    toolB.pricing.filter((p) => p.priceMonthly && p.priceMonthly > 0)
      .sort((a, b) => a.priceMonthly! - b.priceMonthly!)[0]?.priceMonthly ?? 0;

  const priceDelta =
    priceA === 0 && priceB === 0
      ? "Both have free tiers"
      : priceA === priceB
        ? "Same starting price"
        : priceA < priceB
          ? `${toolA.name} is $${priceB - priceA}/mo cheaper`
          : `${toolB.name} is $${priceA - priceB}/mo cheaper`;

  const overallA = getOverallScore(toolA.scores);
  const overallB = getOverallScore(toolB.scores);
  const scoreDiff = Math.abs(overallA - overallB);

  const biggestDifference =
    versus?.biggestDifference ??
    (scoreDiff >= 1.5
      ? `${overallA > overallB ? toolA.name : toolB.name} scores ${scoreDiff.toFixed(1)} points higher overall`
      : "Both tools are closely matched in our scoring");

  return Response.json(
    {
      toolA: toolSummary(toolA),
      toolB: toolSummary(toolB),
      verdict: versus?.verdict ?? "depends",
      priceDelta,
      biggestDifference,
      _meta: META,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
