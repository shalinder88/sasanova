import { ImageResponse } from "@vercel/og";
import { getToolBySlug, getOverallScore, getVersusMatch } from "@/data/tools";

export const runtime = "edge";

function parseSlugs(pair: string): [string, string] | null {
  const idx = pair.indexOf("-vs-");
  if (idx === -1) return null;
  return [pair.slice(0, idx), pair.slice(idx + 4)];
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ pair: string }> }
) {
  const { pair } = await params;
  const slugs = parseSlugs(pair);
  if (!slugs) return new Response("Invalid pair", { status: 404 });

  const [slugA, slugB] = slugs;
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) return new Response("Tool not found", { status: 404 });

  const scoreA = getOverallScore(toolA.scores);
  const scoreB = getOverallScore(toolB.scores);
  const vsMatch = getVersusMatch(slugA, slugB);

  const verdictText =
    vsMatch?.verdict === "depends"
      ? "It depends on your needs"
      : vsMatch?.verdict === toolA.slug
        ? `${toolA.name} for most users`
        : vsMatch?.verdict === toolB.slug
          ? `${toolB.name} for most users`
          : "See the full comparison";

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
            marginBottom: "20px",
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

        {/* Title */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 800,
              color: "#fafafa",
            }}
          >
            {toolA.name}
            <span style={{ color: "#6366f1", margin: "0 20px" }}>vs</span>
            {toolB.name}
          </div>
        </div>

        {/* Score cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            flex: 1,
            alignItems: "center",
          }}
        >
          {/* Tool A */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                border: "4px solid #6366f1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 64,
                  fontWeight: 800,
                  color: "#fafafa",
                }}
              >
                {scoreA}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: "#fafafa",
              }}
            >
              {toolA.name}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              width: "2px",
              height: "180px",
              backgroundColor: "#27272a",
            }}
          />

          {/* Tool B */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                border: "4px solid #6366f1",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 64,
                  fontWeight: 800,
                  color: "#fafafa",
                }}
              >
                {scoreB}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: "#fafafa",
              }}
            >
              {toolB.name}
            </div>
          </div>
        </div>

        {/* Verdict badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 600,
              color: "#fafafa",
              backgroundColor: "#6366f1",
              padding: "10px 28px",
              borderRadius: "12px",
            }}
          >
            {verdictText}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
