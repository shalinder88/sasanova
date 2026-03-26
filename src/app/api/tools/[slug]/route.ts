import { tools, getToolBySlug, getOverallScore } from "@/data/tools";

const META = {
  source: "Sasanova",
  url: "https://sasanova.com",
  license: "Attribution required",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return Response.json(
      { error: "Tool not found", _meta: META },
      { status: 404 }
    );
  }

  const overall = getOverallScore(tool.scores);
  const alternatives = tool.alternatives
    .map((s) => tools.find((t) => t.slug === s))
    .filter(Boolean)
    .map((t) => ({ slug: t!.slug, name: t!.name }));

  return Response.json(
    {
      tool: {
        name: tool.name,
        vendor: tool.vendor,
        pricing: tool.pricing.map((p) => ({
          name: p.name,
          priceMonthly: p.priceMonthly,
          priceAnnual: p.priceAnnual,
          billingModel: p.billingModel,
          limits: p.limits,
        })),
        scores: {
          overall,
          value: tool.scores.value,
          ease: tool.scores.ease,
          power: tool.scores.power,
          setupFriction: tool.scores.setupFriction,
          migrationDifficulty: tool.scores.migrationDifficulty,
          transparency: tool.scores.transparency,
        },
        bestFor: tool.bestFor,
        avoidIf: tool.avoidIf,
        features: tool.features,
        integrations: tool.integrations,
        alternatives,
      },
      _meta: META,
    },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
