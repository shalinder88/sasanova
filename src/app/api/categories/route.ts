import { categories, tools } from "@/data/tools";

const META = {
  source: "Sasanova",
  url: "https://sasanova.com",
  license: "Attribution required",
};

export function GET() {
  const data = categories.map((cat) => {
    const count = tools.filter((t) => t.categories.includes(cat.slug)).length;
    return {
      slug: cat.slug,
      name: cat.name,
      description: cat.description,
      toolCount: count,
    };
  });

  return Response.json(
    { categories: data, _meta: META },
    {
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
