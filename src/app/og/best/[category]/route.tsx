import { ImageResponse } from "@vercel/og";
import {
  getCategoryBySlug,
  getToolsByCategory,
  getOverallScore,
} from "@/data/tools";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return new Response("Category not found", { status: 404 });

  const toolsInCategory = getToolsByCategory(category)
    .map((t) => ({ ...t, overall: getOverallScore(t.scores) }))
    .sort((a, b) => b.overall - a.overall);

  const topPick = toolsInCategory[0];
  const toolCount = toolsInCategory.length;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#09090b",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#a1a1aa",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Sasanova
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Category label */}
          <div
            style={{
              display: "flex",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 700,
                color: "#fafafa",
                backgroundColor: "#6366f1",
                padding: "6px 18px",
                borderRadius: "8px",
              }}
            >
              {toolCount} tools compared
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 800,
              color: "#fafafa",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            {`Best ${cat.name} Tools \u2014 2026`}
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#a1a1aa",
              lineHeight: 1.4,
            }}
          >
            {cat.description}
          </div>
        </div>

        {/* Bottom: #1 pick */}
        {topPick && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "40px",
              padding: "16px 24px",
              borderRadius: "12px",
              border: "1px solid #27272a",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                fontWeight: 700,
                color: "#09090b",
                backgroundColor: "#6366f1",
                padding: "4px 12px",
                borderRadius: "6px",
              }}
            >
              #1
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                color: "#fafafa",
              }}
            >
              {topPick.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                color: "#6366f1",
                fontWeight: 700,
                marginLeft: "auto",
              }}
            >
              {topPick.overall}/10
            </div>
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
