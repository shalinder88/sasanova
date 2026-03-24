import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

const guideMeta: Record<string, { title: string; category: string; readingTime: string }> = {
  "newsletter-stack": { title: "The Newsletter Stack for a One-Person Creator Under $150/Month", category: "Stack Building", readingTime: "12 min read" },
  "ai-research-workflow": { title: "How to Build an AI Research Workflow That Actually Saves Time", category: "Workflow", readingTime: "10 min read" },
  "automate-lead-capture": { title: "How to Automate Lead Capture Without Spending $500/Month on HubSpot", category: "Automation", readingTime: "11 min read" },
  "crm-solo-founder": { title: "The Best CRM Setup for a Solo Founder Who Hates CRMs", category: "CRM", readingTime: "9 min read" },
  "project-management-small-team": { title: "Choosing Project Management Software Without Losing Your Mind", category: "Project Management", readingTime: "11 min read" },
  "email-marketing-ecommerce": { title: "Email Marketing for E-Commerce: Stop Paying Mailchimp Prices", category: "E-Commerce", readingTime: "10 min read" },
  "automation-zapier-vs-make-vs-n8n": { title: "Zapier vs Make vs n8n: Which Automation Tool Fits Your Budget and Brain", category: "Automation", readingTime: "13 min read" },
  "meeting-recording-comparison": { title: "AI Meeting Assistants: What Actually Works and What's Marketing Hype", category: "Productivity", readingTime: "10 min read" },
  "notion-vs-obsidian-decision": { title: "Notion vs Obsidian: The Decision That Reveals How You Think", category: "Knowledge Management", readingTime: "9 min read" },
  "scheduling-tool-comparison": { title: "Calendly vs Cal.com: Pay $192/Year or Self-Host for Free", category: "Scheduling", readingTime: "8 min read" },
  "best-free-tools-startups": { title: "The $0 Startup Stack: Every Free Tool That's Actually Worth Using", category: "Stack Building", readingTime: "14 min read" },
  "saas-affiliate-playbook": { title: "How SaaS Affiliate Programs Actually Work: A Realistic Guide for Content Sites", category: "Monetization", readingTime: "12 min read" },
  "migrate-from-mailchimp": { title: "How to Leave Mailchimp Without Losing Your List: A Step-by-Step Migration Guide", category: "Email Migration", readingTime: "10 min read" },
  "building-knowledge-base": { title: "Building a Knowledge Base That Your Team Actually Uses", category: "Knowledge Management", readingTime: "9 min read" },
  "customer-support-stack": { title: "Customer Support Software for Teams Under 20: What You Actually Need", category: "Support", readingTime: "10 min read" },
  "ecommerce-stack-solo-creator": { title: "The Complete E-commerce Stack for Solo Creators Under $100/Month", category: "E-Commerce", readingTime: "11 min read" },
  "choosing-analytics-tool": { title: "How to Choose an Analytics Tool Without Drowning in Data", category: "Analytics", readingTime: "9 min read" },
  "remote-team-communication": { title: "Setting Up Communication Tools for a Remote Team of 5-50", category: "Remote Work", readingTime: "10 min read" },
  "design-tools-non-designers": { title: "Design Tools for People Who Can't Design: A Practical Guide", category: "Design", readingTime: "9 min read" },
  "accounting-freelancers": { title: "Accounting Software for Freelancers: Stop Overpaying", category: "Finance", readingTime: "8 min read" },
  "hr-payroll-small-business": { title: "HR and Payroll Software for Small Businesses: The Honest Comparison", category: "HR & Payroll", readingTime: "10 min read" },
  "video-podcast-recording": { title: "Recording Setup for Remote Podcasts and Video: What Actually Works", category: "Content Creation", readingTime: "9 min read" },
  "social-media-management-stack": { title: "Social Media Management Without the $300/Month Bill", category: "Social Media", readingTime: "9 min read" },
  "website-builder-for-business": { title: "Choosing a Website Builder in 2026: Beyond the Marketing Pages", category: "Web Development", readingTime: "10 min read" },
  "cloud-storage-teams": { title: "Cloud Storage for Teams: Dropbox vs Google Workspace vs Box", category: "Infrastructure", readingTime: "9 min read" },
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const guide = guideMeta[slug];
  if (!guide) return new Response("Guide not found", { status: 404 });

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
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                fontWeight: 700,
                color: "#fafafa",
                backgroundColor: "#6366f1",
                padding: "6px 16px",
                borderRadius: "8px",
              }}
            >
              Sasanova Guide
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 16,
                fontWeight: 600,
                color: "#6366f1",
                padding: "6px 16px",
                borderRadius: "8px",
                border: "1px solid #6366f1",
              }}
            >
              {guide.category}
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

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 52,
              fontWeight: 800,
              color: "#fafafa",
              lineHeight: 1.15,
            }}
          >
            {guide.title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#a1a1aa",
              fontWeight: 600,
            }}
          >
            {guide.readingTime}
          </div>
          <div
            style={{
              display: "flex",
              width: "4px",
              height: "4px",
              borderRadius: "2px",
              backgroundColor: "#6366f1",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#a1a1aa",
              fontWeight: 600,
            }}
          >
            Practical, tool-agnostic advice
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
