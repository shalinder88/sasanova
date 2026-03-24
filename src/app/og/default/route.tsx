import { ImageResponse } from "@vercel/og";
import { tools, versusPairs } from "@/data/tools";

export const runtime = "edge";

export async function GET() {
  const toolCount = tools.length;
  const comparisonCount = versusPairs.length;

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
        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Logo text */}
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 800,
              color: "#fafafa",
              marginBottom: "16px",
            }}
          >
            Sasanova
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#a1a1aa",
              fontWeight: 500,
              marginBottom: "48px",
            }}
          >
            Software Discovery & Comparison
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "48px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 40px",
                borderRadius: "16px",
                border: "1px solid #27272a",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 48,
                  fontWeight: 800,
                  color: "#6366f1",
                }}
              >
                {toolCount}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  color: "#a1a1aa",
                  fontWeight: 600,
                  marginTop: "4px",
                }}
              >
                Tools Reviewed
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 40px",
                borderRadius: "16px",
                border: "1px solid #27272a",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 48,
                  fontWeight: 800,
                  color: "#6366f1",
                }}
              >
                {comparisonCount}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  color: "#a1a1aa",
                  fontWeight: 600,
                  marginTop: "4px",
                }}
              >
                Comparisons
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            display: "flex",
            height: "4px",
            backgroundColor: "#6366f1",
            borderRadius: "2px",
            marginTop: "20px",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
