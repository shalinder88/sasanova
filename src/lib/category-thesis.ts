import type { Tool } from "@/data/tools";
import { getOverallScore } from "@/data/tools";

export interface CategoryThesis {
  heading: string;
  paragraphs: string[];
  mistakes: string[];
}

// ── Hand-written theses for core clusters ──

const CORE_THESES: Record<string, CategoryThesis> = {
  "newsletter-platforms": {
    heading: "What matters in Newsletter Platforms",
    paragraphs: [
      "The email marketing market is bifurcating. Creator-focused platforms (beehiiv, Kit, Substack) compete on monetization and growth tools. Business-focused platforms (Mailchimp, ActiveCampaign, Brevo) compete on automation and segmentation. The biggest mistake is choosing a business tool for a newsletter or a creator tool for e-commerce. Price varies 4x at the same subscriber count depending on which platform you pick.",
      "Growth features — referral programs, recommendation networks, paid subscriptions — are what separate newsletter platforms from generic email tools. If you don't plan to monetize your list, a simpler email marketing tool may actually serve you better at a lower price.",
    ],
    mistakes: [
      "Choosing a business email tool (Mailchimp, ActiveCampaign) for a creator newsletter and paying for automation features you'll never use while missing built-in monetization.",
      "Ignoring subscriber-count pricing cliffs. Most platforms get dramatically more expensive at 5,000 and 25,000 subscribers — check the pricing page for your projected list size, not just the starter plan.",
      "Locking into a platform without checking data portability. Some platforms make it trivially easy to export your list; others make migration a painful, lossy process.",
    ],
  },
  "email-marketing": {
    heading: "What matters in Email Marketing",
    paragraphs: [
      "The email marketing market is bifurcating. Creator-focused platforms (beehiiv, Kit, Substack) compete on monetization and growth tools. Business-focused platforms (Mailchimp, ActiveCampaign, Brevo) compete on automation and segmentation. The biggest mistake is choosing a business tool for a newsletter or a creator tool for e-commerce. Price varies 4x at the same subscriber count depending on which platform you pick.",
      "Deliverability is the silent differentiator. Two platforms with identical feature lists can have wildly different inbox placement rates. Ask about dedicated IPs, authentication (DKIM/DMARC), and warm-up processes before you commit.",
    ],
    mistakes: [
      "Comparing headline prices without accounting for subscriber-count tiers — a $13/mo plan at 500 contacts can become $300/mo at 30,000 contacts.",
      "Overlooking deliverability. Features mean nothing if 20% of your emails land in spam. Check independent deliverability benchmarks, not vendor claims.",
      "Picking a creator-focused newsletter tool for e-commerce automations like abandoned cart flows — those platforms lack the behavioral triggers and segmentation depth you need.",
    ],
  },
  crm: {
    heading: "What matters in CRM Software",
    paragraphs: [
      "Most teams buy more CRM than they need. HubSpot Free handles 80% of what a 5-person team requires. Pipedrive is the best pure sales pipeline. Salesforce only justifies its cost above 50 users with complex processes. The hidden cost isn't the seat price — it's implementation, admin overhead, and the switching cost when you outgrow your choice.",
      "CRM is the most sticky category in SaaS. Once your team's data, workflows, and integrations live inside a CRM, switching costs are enormous. Choose based on where you'll be in 18 months, not where you are today.",
    ],
    mistakes: [
      "Starting with Salesforce or HubSpot Enterprise when a 5-person sales team just needs pipeline tracking — you'll spend more on configuration than on selling.",
      "Ignoring adoption risk. The best CRM is the one your team actually uses. A slick but complex tool with 10% adoption is worth less than a simple one with 90% adoption.",
      "Forgetting integration costs. The per-seat price is the visible number; custom integrations, admin time, and third-party sync tools are the hidden majority of total cost of ownership.",
    ],
  },
  automation: {
    heading: "What matters in Automation Tools",
    paragraphs: [
      "Zapier is the default. Make is cheaper. n8n is free if you self-host. But the real cost isn't the subscription — it's the task counting. Zapier counts every step as a task. Make counts operations differently. n8n counts executions. At 2,000 workflow runs/month, the annual cost difference between platforms can exceed $3,000.",
      "The decision comes down to who builds and maintains your automations. Zapier is the fastest for non-technical users. Make offers more power at lower cost for teams willing to learn its visual builder. n8n is the clear winner for developers who want full control and zero per-execution fees.",
    ],
    mistakes: [
      "Choosing based on the free tier alone — free plans have strict limits on runs and active workflows that most teams outgrow within weeks.",
      "Not understanding how each platform counts usage. A single workflow with 5 steps costs 5 'tasks' on Zapier but 5 'operations' on Make (priced differently) and 1 'execution' on n8n.",
      "Building critical business workflows on a platform you can't self-host or export from — if pricing changes or the vendor sunsets a feature, you have no fallback.",
    ],
  },
};

// ── Generic thesis generator ──

function formatCurrency(amount: number): string {
  return amount % 1 === 0 ? `$${amount}` : `$${amount.toFixed(2)}`;
}

function getLowestPrice(tool: Tool): number | null {
  if (tool.freeTier) return 0;
  const paid = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  if (paid.length === 0) return null;
  return Math.min(...paid.map((p) => p.priceMonthly!));
}

function getHighestPrice(tool: Tool): number | null {
  const priced = tool.pricing.filter((p) => p.priceMonthly !== null);
  if (priced.length === 0) return null;
  return Math.max(...priced.map((p) => p.priceMonthly!));
}

function titleCase(s: string): string {
  return s
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function generateCategoryThesis(
  categorySlug: string,
  categoryName: string,
  tools: Tool[],
): CategoryThesis {
  // Return hand-written thesis for core categories
  if (CORE_THESES[categorySlug]) {
    return CORE_THESES[categorySlug];
  }

  // Generate data-driven thesis from tool data
  const toolCount = tools.length;
  const withFree = tools.filter((t) => t.freeTier);
  const freeCount = withFree.length;

  const toolsWithScores = tools.map((t) => ({
    ...t,
    overall: getOverallScore(t.scores),
  }));
  const sorted = [...toolsWithScores].sort((a, b) => b.overall - a.overall);
  const topTool = sorted[0];

  // Price analysis
  const lowestEntries = tools
    .map((t) => ({ name: t.name, price: getLowestPrice(t) }))
    .filter((e) => e.price !== null && e.price > 0)
    .sort((a, b) => a.price! - b.price!);

  const highestEntries = tools
    .map((t) => ({ name: t.name, price: getHighestPrice(t) }))
    .filter((e) => e.price !== null)
    .sort((a, b) => b.price! - a.price!);

  const cheapest = lowestEntries[0];
  const mostExpensive = highestEntries[0];

  // Find highest-value and highest-power tools
  const bestValue = [...tools].sort((a, b) => b.scores.value - a.scores.value)[0];
  const bestPower = [...tools].sort((a, b) => b.scores.power - a.scores.power)[0];

  // Key decision factor based on score variance
  const avgEase = tools.reduce((s, t) => s + t.scores.ease, 0) / toolCount;
  const avgPower = tools.reduce((s, t) => s + t.scores.power, 0) / toolCount;
  const avgValue = tools.reduce((s, t) => s + t.scores.value, 0) / toolCount;

  const easeSpread = Math.max(...tools.map((t) => t.scores.ease)) - Math.min(...tools.map((t) => t.scores.ease));
  const powerSpread = Math.max(...tools.map((t) => t.scores.power)) - Math.min(...tools.map((t) => t.scores.power));
  const valueSpread = Math.max(...tools.map((t) => t.scores.value)) - Math.min(...tools.map((t) => t.scores.value));

  let keyFactor: string;
  if (valueSpread >= powerSpread && valueSpread >= easeSpread) {
    keyFactor = "value — pricing models vary dramatically, so the real differentiator is what you get per dollar spent";
  } else if (powerSpread >= easeSpread) {
    keyFactor = "feature depth — some tools in this space are intentionally simple while others try to do everything, and the gap between them is wide";
  } else {
    keyFactor = "ease of use — the learning curve varies significantly across this category, and a tool your team won't adopt is a tool wasted";
  }

  // Build paragraphs
  const paragraphs: string[] = [];

  let p1 = `There are ${toolCount} ${categoryName.toLowerCase()} tools worth evaluating in 2026.`;
  if (freeCount > 0) {
    p1 += ` ${freeCount} of them offer a free tier, so you can test before committing.`;
  }
  if (cheapest && mostExpensive && cheapest.name !== mostExpensive.name) {
    p1 += ` Paid plans start as low as ${formatCurrency(cheapest.price!)}/mo (${cheapest.name}) and go up to ${formatCurrency(mostExpensive.price!)}/mo (${mostExpensive.name}).`;
  }
  p1 += ` The key decision factor is ${keyFactor}.`;
  paragraphs.push(p1);

  let p2 = `${topTool.name} leads the rankings with an overall score of ${topTool.overall}/10.`;
  if (bestValue && bestPower && bestValue.slug !== bestPower.slug) {
    p2 += ` If value-for-money is your priority, ${bestValue.name} scores highest. If you need maximum feature depth, ${bestPower.name} pulls ahead.`;
  }
  p2 += ` Don't assume the top-ranked tool is the right one for you — our overall score weights six factors (Value 25%, Power 20%, Transparency 20%, Ease 15%, Setup Friction 10%, Migration Difficulty 10%), and your priorities may differ.`;
  paragraphs.push(p2);

  // Mistakes
  const mistakes: string[] = [];

  if (freeCount > 0) {
    mistakes.push(
      `Defaulting to the free tier and never evaluating paid plans. Free tiers exist to hook you in — they often lack the one feature (${freeCount > 2 ? "automations, integrations, or analytics" : "key integrations or advanced features"}) that would save you hours per week.`,
    );
  } else {
    mistakes.push(
      "Not requesting a trial or demo before committing to an annual plan. Without a free tier in this category, you need hands-on time to judge fit before signing a contract.",
    );
  }

  mistakes.push(
    "Comparing tools on feature count alone. A tool with 200 features you don't need is worse than a tool with 20 features that match your workflow exactly.",
  );

  if (cheapest && mostExpensive && mostExpensive.price! > cheapest.price! * 3) {
    mistakes.push(
      `Assuming expensive means better. The most expensive option (${mostExpensive.name} at ${formatCurrency(mostExpensive.price!)}/mo) costs ${Math.round(mostExpensive.price! / cheapest.price!)}x more than the cheapest (${cheapest.name} at ${formatCurrency(cheapest.price!)}/mo) — that premium is only justified if you use the advanced capabilities.`,
    );
  } else {
    mistakes.push(
      "Ignoring switching costs. How easy it is to migrate your data out should weigh as heavily as how easy it is to get started.",
    );
  }

  return {
    heading: `What matters in ${categoryName}`,
    paragraphs,
    mistakes,
  };
}
