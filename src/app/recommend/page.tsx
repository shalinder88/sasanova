import { Suspense } from "react";
import RecommendClient from "./recommend-client";

/* ── Example pre-computed stacks shown as static HTML for SEO ── */
const exampleStacks = [
  {
    title: "Solo Creator Stack",
    persona: "Creator / Writer",
    budget: "$50/mo",
    tools: ["beehiiv (Free)", "Notion (Free)", "Canva (Free)"],
    total: "$0/mo",
  },
  {
    title: "Small Team Essentials",
    persona: "Small team (2-5)",
    budget: "$200/mo",
    tools: ["HubSpot CRM (Starter $20/seat)", "Slack (Pro $8.75/seat)", "Notion (Plus $10/seat)"],
    total: "$194/mo for 5 seats",
  },
  {
    title: "Agency Power Stack",
    persona: "Agency",
    budget: "$500/mo",
    tools: ["ActiveCampaign (Pro $79/mo)", "Pipedrive (Professional $49/seat)", "Make (Pro $18.33/mo)"],
    total: "$342/mo for 5 seats",
  },
];

function RecommendStatic() {
  return (
    <section className="border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Software Stack Recommender
        </h1>
        <p className="text-muted text-base max-w-xl mx-auto mb-8">
          Get personalized tool recommendations based on your team size, budget, and needs.
        </p>

        <h2 className="text-lg font-semibold text-foreground mb-4">Example Stacks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {exampleStacks.map((stack) => (
            <div key={stack.title} className="border border-border rounded-xl p-5 bg-surface">
              <h3 className="text-sm font-bold text-foreground mb-1">{stack.title}</h3>
              <p className="text-xs text-muted mb-3">{stack.persona} &middot; Budget: {stack.budget}</p>
              <ul className="space-y-1.5 mb-3">
                {stack.tools.map((tool) => (
                  <li key={tool} className="text-xs text-foreground flex items-start gap-1.5">
                    <span className="text-accent mt-0.5">&#x2022;</span>
                    {tool}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-accent">{stack.total}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RecommendPage() {
  return (
    <Suspense fallback={<RecommendStatic />}>
      <RecommendClient />
    </Suspense>
  );
}
