import { ImageResponse } from "@vercel/og";
import { getToolBySlug, getOverallScore, getCategoryBySlug } from "@/data/tools";

export const runtime = "edge";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) {
    return new Response("Tool not found", { status: 404 });
  }

  const overall = getOverallScore(tool.scores);
  const category = getCategoryBySlug(tool.categorySlug);
  const categoryName = category?.name ?? tool.categorySlug;

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
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "#6366f1",
                color: "#fafafa",
                fontSize: 16,
                fontWeight: 700,
                padding: "6px 16px",
                borderRadius: "8px",
              }}
            >
              {categoryName}
            </div>
          </div>
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
            flex: 1,
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* Score circle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "200px",
              height: "200px",
              borderRadius: "100px",
              border: "4px solid #6366f1",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 800,
                color: "#fafafa",
                lineHeight: 1,
              }}
            >
              {overall}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                color: "#a1a1aa",
                marginTop: "4px",
              }}
            >
              / 10
            </div>
          </div>

          {/* Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 56,
                fontWeight: 800,
                color: "#fafafa",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              {tool.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: "#a1a1aa",
                lineHeight: 1.4,
              }}
            >
              {tool.tagline}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {["Pricing", "Features", "Alternatives"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                fontSize: 18,
                color: "#6366f1",
                fontWeight: 600,
                padding: "8px 20px",
                borderRadius: "8px",
                border: "1px solid #6366f1",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
