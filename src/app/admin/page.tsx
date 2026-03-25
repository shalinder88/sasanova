"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import {
  tools,
  versusPairs,
  categories,
  getToolBySlug,
  type Tool,
  type VersusMatch,
} from "@/data/tools";

/* ───────────────────────── types ───────────────────────── */

type Platform = "linkedin" | "reddit" | "indiehackers";
type PostType =
  | "cost-shock"
  | "comparison"
  | "hidden-cost"
  | "framework"
  | "tier-breakdown"
  | "reddit-comparison"
  | "reddit-hidden-cost"
  | "reddit-budget"
  | "ih-data"
  | "ih-calculator"
  | "ih-traps"
  | "ih-category"
  | "newsletter";

interface SocialPost {
  id: string;
  platform: Platform;
  type: PostType;
  title: string;
  body: string;
  url: string;
  subreddits?: string[];
  charCount: number;
}

interface PostStatus {
  [id: string]: "draft" | "posted";
}

/* ───────────────────────── helpers ───────────────────────── */

const SITE = "https://sasanova.com";

function fmt(n: number): string {
  return n.toLocaleString("en-US");
}

function highestPaidPlan(tool: Tool) {
  const paid = tool.pricing.filter(
    (p) => p.priceMonthly !== null && p.priceMonthly > 0
  );
  return paid.length > 0 ? paid[paid.length - 1] : null;
}

function lowestPaidPlan(tool: Tool) {
  const paid = tool.pricing.filter(
    (p) => p.priceMonthly !== null && p.priceMonthly > 0
  );
  return paid.length > 0 ? paid[0] : null;
}

function comparableAlternative(tool: Tool): {
  alt: Tool;
  altPlan: ReturnType<typeof highestPaidPlan>;
} | null {
  for (const slug of tool.alternatives) {
    const alt = getToolBySlug(slug);
    if (!alt) continue;
    const plan = highestPaidPlan(alt);
    if (plan) return { alt, altPlan: plan };
  }
  return null;
}

function toolsInCategory(catSlug: string): Tool[] {
  return tools.filter((t) => t.categories.includes(catSlug));
}

/* ───────────────────────── generators ───────────────────────── */

function generateLinkedInPosts(): SocialPost[] {
  const posts: SocialPost[] = [];
  let idx = 0;

  // 1) Cost shock posts — tools with high-priced top tiers + cheaper alternatives
  for (const tool of tools) {
    const top = highestPaidPlan(tool);
    if (!top || !top.priceMonthly || top.priceMonthly < 50) continue;
    const comp = comparableAlternative(tool);
    if (!comp || !comp.altPlan || !comp.altPlan.priceMonthly) continue;

    const toolAnnual = top.priceMonthly * 12;
    const altAnnual = comp.altPlan.priceMonthly * 12;
    const savings = toolAnnual - altAnnual;
    if (savings <= 0) continue;

    posts.push({
      id: `li-cost-${idx++}`,
      platform: "linkedin",
      type: "cost-shock",
      title: `Cost Shock: ${tool.name}`,
      body: `${tool.name} costs $${fmt(toolAnnual)}/year at the ${top.name} tier.\n\n${comp.alt.name} costs $${fmt(altAnnual)}/year for comparable features. That's $${fmt(savings)}/year in savings.\n\nWe normalized the pricing so you can see the real numbers side by side.\n\n${SITE}/compare/${[tool.slug, comp.alt.slug].sort().join("-vs-")}`,
      url: `${SITE}/compare/${[tool.slug, comp.alt.slug].sort().join("-vs-")}`,
      charCount: 0,
    });
    if (posts.length >= 8) break;
  }

  // 2) Comparison verdict posts
  const usedPairs = new Set<string>();
  for (const vs of versusPairs) {
    const key = [vs.slugA, vs.slugB].sort().join("-");
    if (usedPairs.has(key)) continue;
    usedPairs.add(key);

    const toolA = getToolBySlug(vs.slugA);
    const toolB = getToolBySlug(vs.slugB);
    if (!toolA || !toolB) continue;

    const verdictText =
      vs.verdict === "depends"
        ? "It depends on your use case"
        : vs.verdict === vs.slugA
          ? `${toolA.name} edges ahead`
          : `${toolB.name} edges ahead`;

    posts.push({
      id: `li-compare-${idx++}`,
      platform: "linkedin",
      type: "comparison",
      title: `${toolA.name} vs ${toolB.name}`,
      body: `${toolA.name} vs ${toolB.name}: ${verdictText}.\n\n${vs.summary}\n\nFull comparison with normalized pricing:\n${SITE}/compare/${[vs.slugA, vs.slugB].sort().join("-vs-")}`,
      url: `${SITE}/compare/${[vs.slugA, vs.slugB].sort().join("-vs-")}`,
      charCount: 0,
    });
    if (posts.filter((p) => p.type === "comparison").length >= 8) break;
  }

  // 3) Hidden cost posts
  for (const tool of tools) {
    if (!tool.hiddenCosts || tool.hiddenCosts.length === 0) continue;

    const bullets = tool.hiddenCosts
      .slice(0, 3)
      .map((c) => `- ${c}`)
      .join("\n");
    posts.push({
      id: `li-hidden-${idx++}`,
      platform: "linkedin",
      type: "hidden-cost",
      title: `Hidden Costs: ${tool.name}`,
      body: `The real cost of ${tool.name} isn't on the pricing page.\n\nHere's what most people miss:\n${bullets}\n\nWe dug into every line item so you don't have to.\n\n${SITE}/tools/${tool.slug}`,
      url: `${SITE}/tools/${tool.slug}`,
      charCount: 0,
    });
    if (posts.filter((p) => p.type === "hidden-cost").length >= 6) break;
  }

  // 4) Decision framework posts — one per category
  for (const cat of categories.slice(0, 6)) {
    const catTools = toolsInCategory(cat.slug);
    if (catTools.length < 2) continue;
    posts.push({
      id: `li-framework-${idx++}`,
      platform: "linkedin",
      type: "framework",
      title: `How to choose: ${cat.name}`,
      body: `How to choose ${cat.name.toLowerCase()} without overthinking it.\n\nWe compared ${catTools.length} tools in this category with normalized pricing, real feature checks, and honest scores.\n\nNo affiliate bias. Just data.\n\n${SITE}/best/${cat.slug}`,
      url: `${SITE}/best/${cat.slug}`,
      charCount: 0,
    });
  }

  // Update char counts
  for (const p of posts) {
    p.charCount = p.body.length;
  }
  return posts;
}

function generateRedditPosts(): SocialPost[] {
  const posts: SocialPost[] = [];
  let idx = 0;
  const subs = [
    "r/SaaS",
    "r/startups",
    "r/smallbusiness",
    "r/Entrepreneur",
    "r/SideProject",
  ];

  // 1) Comparison deep-dives
  for (const vs of versusPairs.slice(0, 6)) {
    const toolA = getToolBySlug(vs.slugA);
    const toolB = getToolBySlug(vs.slugB);
    if (!toolA || !toolB) continue;

    const planA = lowestPaidPlan(toolA);
    const planB = lowestPaidPlan(toolB);
    const priceLineA = planA
      ? `${toolA.name} starts at $${planA.priceMonthly}/mo (${planA.name})`
      : `${toolA.name} has a free tier`;
    const priceLineB = planB
      ? `${toolB.name} starts at $${planB.priceMonthly}/mo (${planB.name})`
      : `${toolB.name} has a free tier`;

    posts.push({
      id: `rd-compare-${idx++}`,
      platform: "reddit",
      type: "reddit-comparison",
      title: `I compared ${toolA.name} vs ${toolB.name} pricing at every tier. Here's what I found.`,
      body: `I spent time normalizing pricing across ${toolA.name} and ${toolB.name} so you can compare apples to apples.\n\n**Pricing:**\n- ${priceLineA}\n- ${priceLineB}\n\n**Verdict:** ${vs.summary}\n\nI put together a full comparison with normalized annual costs, feature overlap, and switching costs. No affiliate links in the comparison itself.\n\nFull breakdown: ${SITE}/compare/${[vs.slugA, vs.slugB].sort().join("-vs-")}`,
      url: `${SITE}/compare/${[vs.slugA, vs.slugB].sort().join("-vs-")}`,
      subreddits: subs.slice(0, 3),
      charCount: 0,
    });
  }

  // 2) Hidden cost exposés
  const hiddenCostTools = tools.filter(
    (t) => t.hiddenCosts && t.hiddenCosts.length >= 2
  );
  for (const tool of hiddenCostTools.slice(0, 5)) {
    const bullets = tool
      .hiddenCosts!.slice(0, 4)
      .map((c) => `- ${c}`)
      .join("\n");
    posts.push({
      id: `rd-hidden-${idx++}`,
      platform: "reddit",
      type: "reddit-hidden-cost",
      title: `Hidden costs of ${tool.name} that nobody talks about`,
      body: `I've been researching SaaS pricing for a while and ${tool.name} has some costs that aren't obvious from their pricing page:\n\n${bullets}\n\nNone of this is on the main pricing page. I documented this while building a free pricing comparison tool.\n\nMore details: ${SITE}/tools/${tool.slug}`,
      url: `${SITE}/tools/${tool.slug}`,
      subreddits: ["r/SaaS", "r/startups", "r/Entrepreneur"],
      charCount: 0,
    });
  }

  // 3) Budget picks per category
  for (const cat of categories.slice(0, 5)) {
    const catTools = toolsInCategory(cat.slug)
      .filter((t) => t.freeTier || (lowestPaidPlan(t)?.priceMonthly ?? 999) < 30)
      .slice(0, 5);
    if (catTools.length < 2) continue;

    const toolList = catTools
      .map((t) => {
        const plan = lowestPaidPlan(t);
        const price = t.freeTier
          ? "Free tier available"
          : plan
            ? `$${plan.priceMonthly}/mo`
            : "Custom pricing";
        return `- **${t.name}**: ${price} — ${t.tagline}`;
      })
      .join("\n");

    posts.push({
      id: `rd-budget-${idx++}`,
      platform: "reddit",
      type: "reddit-budget",
      title: `Best ${cat.name.toLowerCase()} under $30/month for solo founders`,
      body: `I'm building a free SaaS pricing comparison site and here are the best affordable ${cat.name.toLowerCase()} I found:\n\n${toolList}\n\nAll pricing verified against vendor sites. Full comparison with scores: ${SITE}/best/${cat.slug}`,
      url: `${SITE}/best/${cat.slug}`,
      subreddits: ["r/SaaS", "r/smallbusiness", "r/SideProject"],
      charCount: 0,
    });
  }

  for (const p of posts) {
    p.charCount = (p.title + "\n\n" + p.body).length;
  }
  return posts;
}

function generateIndieHackersPosts(): SocialPost[] {
  const posts: SocialPost[] = [];
  let idx = 0;

  const totalTools = tools.length;
  const totalCategories = categories.length;
  const totalVersus = versusPairs.length;

  posts.push({
    id: `ih-data-${idx++}`,
    platform: "indiehackers",
    type: "ih-data",
    title: "We normalized pricing across SaaS tools",
    body: `I normalized pricing across ${totalTools} SaaS tools so founders can compare real costs.\n\nMost SaaS pricing pages are designed to confuse. Different billing models, hidden fees, usage caps buried in footnotes.\n\nSo I built Sasanova: a free comparison site that normalizes everything to monthly and annual costs, scores each tool on value/ease/power, and flags hidden costs.\n\n${totalCategories} categories. ${totalVersus} head-to-head comparisons. Every price verified against vendor sites.\n\nNo paywall. No gated content.\n\n${SITE}`,
    url: SITE,
    charCount: 0,
  });

  posts.push({
    id: `ih-calc-${idx++}`,
    platform: "indiehackers",
    type: "ih-calculator",
    title: "Free SaaS pricing calculator",
    body: `We built a free SaaS pricing comparison tool. Compare real costs across ${totalTools} tools in ${totalCategories} categories.\n\nEvery price is independently verified. We flag hidden costs that vendors bury in their terms. No affiliate bias in the data itself.\n\nIf you're evaluating software for your startup, this might save you a few hours of tab-juggling.\n\n${SITE}/pricing`,
    url: `${SITE}/pricing`,
    charCount: 0,
  });

  posts.push({
    id: `ih-traps-${idx++}`,
    platform: "indiehackers",
    type: "ih-traps",
    title: "Pricing traps that cost founders thousands",
    body: `After researching ${totalTools} SaaS tools, here are the pricing traps I keep seeing:\n\n1. Per-seat pricing that doubles cost when you hire\n2. Usage caps that force upgrades at the worst time\n3. Annual lock-in with no monthly option\n4. Feature gating that puts basics behind enterprise tiers\n5. Add-on fees not shown on the pricing page\n6. Price increases buried in renewal terms\n7. "Contact sales" as the only option above mid-tier\n\nI documented every hidden cost I found while building a free comparison tool.\n\n${SITE}/guides/mailchimp-hidden-costs`,
    url: `${SITE}/guides/mailchimp-hidden-costs`,
    charCount: 0,
  });

  // Category-specific IH posts
  const ihCategories = ["email-marketing", "crm", "automation", "project-management"];
  for (const catSlug of ihCategories) {
    const cat = categories.find((c) => c.slug === catSlug);
    if (!cat) continue;
    const catTools = toolsInCategory(catSlug);
    const freeCount = catTools.filter((t) => t.freeTier).length;

    posts.push({
      id: `ih-cat-${idx++}`,
      platform: "indiehackers",
      type: "ih-category",
      title: `${cat.name} landscape for indie hackers`,
      body: `I mapped out the ${cat.name.toLowerCase()} landscape for indie hackers and small teams.\n\n${catTools.length} tools compared. ${freeCount} have free tiers. Every price verified.\n\nInstead of reading 20 pricing pages, you can see them all normalized in one view.\n\n${SITE}/best/${cat.slug}`,
      url: `${SITE}/best/${cat.slug}`,
      charCount: 0,
    });
  }

  // Build-in-public about comparison methodology
  posts.push({
    id: `ih-method-${idx++}`,
    platform: "indiehackers",
    type: "ih-data",
    title: "Our methodology for honest SaaS reviews",
    body: `Building in public: here's how we keep Sasanova honest.\n\n1. Every price verified against vendor pricing pages (not third-party data)\n2. Scores based on 6 dimensions: value, ease, power, setup friction, migration difficulty, transparency\n3. Hidden costs flagged separately from advertised pricing\n4. "Avoid if" section on every tool (not just "best for")\n5. All data timestamped with last-verified dates\n\nWe make money through affiliate links, but the data and scores are independent.\n\n${SITE}/about/methodology`,
    url: `${SITE}/about/methodology`,
    charCount: 0,
  });

  // A post about versus comparisons
  posts.push({
    id: `ih-versus-${idx++}`,
    platform: "indiehackers",
    type: "ih-data",
    title: `We built ${totalVersus} head-to-head SaaS comparisons`,
    body: `Most "vs" comparison sites are just SEO bait with regurgitated feature lists.\n\nWe built ${totalVersus} head-to-head comparisons with actual verdicts, price deltas, and "choose A if / choose B if" recommendations.\n\nEvery comparison is backed by independently verified pricing data.\n\nBrowse all comparisons: ${SITE}/compare`,
    url: `${SITE}/compare`,
    charCount: 0,
  });

  for (const p of posts) {
    p.charCount = (p.title + "\n\n" + p.body).length;
  }
  return posts;
}

function generateNewsletterDraft(): string {
  // Pick a tool with hidden costs for highlight
  const toolWithHidden = tools.find(
    (t) => t.hiddenCosts && t.hiddenCosts.length >= 2
  );
  // Pick a popular versus pair
  const spotlight = versusPairs[0];
  const spotA = getToolBySlug(spotlight?.slugA ?? "");
  const spotB = getToolBySlug(spotlight?.slugB ?? "");
  // Pick a cheap alternative
  const expensiveTool = tools.find((t) => {
    const top = highestPaidPlan(t);
    return top && top.priceMonthly && top.priceMonthly > 100;
  });
  const cheapAlt = expensiveTool
    ? comparableAlternative(expensiveTool)
    : null;

  let draft = `# SaaS Price Report\n\n`;
  draft += `## Pricing Change Highlight\n\n`;
  if (toolWithHidden) {
    draft += `**${toolWithHidden.name}** has costs that don't show up on the pricing page:\n`;
    draft += toolWithHidden
      .hiddenCosts!.slice(0, 2)
      .map((c) => `- ${c}`)
      .join("\n");
    draft += `\n\nFull breakdown: ${SITE}/tools/${toolWithHidden.slug}\n\n`;
  }

  draft += `## Comparison Spotlight\n\n`;
  if (spotA && spotB && spotlight) {
    draft += `**${spotA.name} vs ${spotB.name}**\n`;
    draft += `${spotlight.summary}\n`;
    draft += `Full comparison: ${SITE}/compare/${[spotlight.slugA, spotlight.slugB].sort().join("-vs-")}\n\n`;
  }

  draft += `## Hidden Cost Reveal\n\n`;
  const revealTool = tools.find(
    (t) =>
      t.hiddenCosts &&
      t.hiddenCosts.length >= 2 &&
      t.slug !== toolWithHidden?.slug
  );
  if (revealTool) {
    draft += `**${revealTool.name}** charges extra for:\n`;
    draft += revealTool
      .hiddenCosts!.slice(0, 2)
      .map((c) => `- ${c}`)
      .join("\n");
    draft += `\n\nDetails: ${SITE}/tools/${revealTool.slug}\n\n`;
  }

  draft += `## Cheaper Alternative\n\n`;
  if (expensiveTool && cheapAlt) {
    const topPlan = highestPaidPlan(expensiveTool);
    draft += `Paying $${fmt((topPlan?.priceMonthly ?? 0) * 12)}/year for **${expensiveTool.name}**?\n`;
    draft += `**${cheapAlt.alt.name}** does comparable work for $${fmt((cheapAlt.altPlan?.priceMonthly ?? 0) * 12)}/year.\n`;
    draft += `Compare: ${SITE}/compare/${[expensiveTool.slug, cheapAlt.alt.slug].sort().join("-vs-")}\n`;
  }

  return draft;
}

/* ───────────────────────── badge colors ───────────────────────── */

const typeBadgeColor: Record<string, string> = {
  "cost-shock": "bg-red-500/20 text-red-400 border-red-500/30",
  comparison: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "hidden-cost": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  framework: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "tier-breakdown": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "reddit-comparison": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "reddit-hidden-cost": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "reddit-budget": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "ih-data": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  "ih-calculator": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "ih-traps": "bg-red-500/20 text-red-400 border-red-500/30",
  "ih-category": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  newsletter: "bg-violet-500/20 text-violet-400 border-violet-500/30",
};

const typeLabel: Record<string, string> = {
  "cost-shock": "Cost Shock",
  comparison: "Comparison",
  "hidden-cost": "Hidden Cost",
  framework: "Framework",
  "tier-breakdown": "Tier Breakdown",
  "reddit-comparison": "Comparison",
  "reddit-hidden-cost": "Hidden Cost",
  "reddit-budget": "Budget Picks",
  "ih-data": "Data",
  "ih-calculator": "Calculator",
  "ih-traps": "Pricing Traps",
  "ih-category": "Category",
  newsletter: "Newsletter",
};

const platformBadge: Record<Platform, { label: string; color: string }> = {
  linkedin: {
    label: "LinkedIn",
    color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
  },
  reddit: {
    label: "Reddit",
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  indiehackers: {
    label: "Indie Hackers",
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
  },
};

/* ───────────────────────── components ───────────────────────── */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
        copied
          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
          : "bg-[var(--surface-alt)] text-[var(--muted)] border border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)]"
      }`}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function PostCard({
  post,
  status,
  onToggleStatus,
}: {
  post: SocialPost;
  status: "draft" | "posted";
  onToggleStatus: () => void;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 space-y-3">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${platformBadge[post.platform].color}`}
          >
            {platformBadge[post.platform].label}
          </span>
          <span
            className={`inline-block px-2 py-0.5 rounded text-xs font-medium border ${typeBadgeColor[post.type] ?? "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}
          >
            {typeLabel[post.type] ?? post.type}
          </span>
          <span className="text-xs text-[var(--muted)]">
            {post.charCount} chars
          </span>
        </div>
        <button
          onClick={onToggleStatus}
          className={`shrink-0 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
            status === "posted"
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-[var(--surface-alt)] text-[var(--muted)] border border-[var(--border)] hover:text-[var(--foreground)]"
          }`}
        >
          {status === "posted" ? "Posted" : "Draft"}
        </button>
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-[var(--foreground)]">
        {post.title}
      </h3>

      {/* Subreddits */}
      {post.subreddits && post.subreddits.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {post.subreddits.map((sub) => (
            <span
              key={sub}
              className="text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20"
            >
              {sub}
            </span>
          ))}
        </div>
      )}

      {/* Body */}
      <pre className="whitespace-pre-wrap text-sm text-[var(--muted)] leading-relaxed font-[inherit] bg-[var(--background)] rounded-md p-4 border border-[var(--border)] max-h-64 overflow-y-auto">
        {post.body}
      </pre>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--accent)] hover:underline truncate max-w-[60%]"
        >
          {post.url}
        </a>
        <CopyButton text={post.body} />
      </div>
    </div>
  );
}

/* ───────────────────────── main page ───────────────────────── */

type Tab = "linkedin" | "reddit" | "indiehackers" | "newsletter";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("linkedin");
  const [statuses, setStatuses] = useState<PostStatus>({});

  // Load statuses from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sasanova-social-statuses");
      if (saved) setStatuses(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  // Save statuses
  useEffect(() => {
    try {
      localStorage.setItem(
        "sasanova-social-statuses",
        JSON.stringify(statuses)
      );
    } catch {
      // ignore
    }
  }, [statuses]);

  const toggleStatus = useCallback((id: string) => {
    setStatuses((prev) => ({
      ...prev,
      [id]: prev[id] === "posted" ? "draft" : "posted",
    }));
  }, []);

  const linkedinPosts = useMemo(() => generateLinkedInPosts(), []);
  const redditPosts = useMemo(() => generateRedditPosts(), []);
  const ihPosts = useMemo(() => generateIndieHackersPosts(), []);
  const newsletterDraft = useMemo(() => generateNewsletterDraft(), []);

  const tabs: { key: Tab; label: string; count: number }[] = [
    { key: "linkedin", label: "LinkedIn", count: linkedinPosts.length },
    { key: "reddit", label: "Reddit", count: redditPosts.length },
    {
      key: "indiehackers",
      label: "Indie Hackers",
      count: ihPosts.length,
    },
    { key: "newsletter", label: "Newsletter", count: 1 },
  ];

  const activePosts =
    activeTab === "linkedin"
      ? linkedinPosts
      : activeTab === "reddit"
        ? redditPosts
        : activeTab === "indiehackers"
          ? ihPosts
          : [];

  const draftCount = activePosts.filter(
    (p) => (statuses[p.id] ?? "draft") === "draft"
  ).length;
  const postedCount = activePosts.filter(
    (p) => statuses[p.id] === "posted"
  ).length;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[var(--muted)]">
              Admin
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Sasanova Social Command Center
          </h1>
          <p className="text-[var(--muted)] text-sm mt-1">
            Auto-generated posts from {tools.length} tools,{" "}
            {versusPairs.length} comparisons, {categories.length} categories
          </p>
        </div>
      </header>

      {/* Tabs */}
      <nav className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-[var(--accent)] text-[var(--foreground)]"
                  : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {tab.label}
              <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-[var(--surface-alt)] text-[var(--muted)]">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats bar */}
        {activeTab !== "newsletter" && (
          <div className="flex items-center gap-6 mb-6 text-sm">
            <span className="text-[var(--muted)]">
              <span className="text-[var(--foreground)] font-medium">
                {draftCount}
              </span>{" "}
              drafts
            </span>
            <span className="text-[var(--muted)]">
              <span className="text-emerald-400 font-medium">
                {postedCount}
              </span>{" "}
              posted
            </span>
          </div>
        )}

        {/* Post grid */}
        {activeTab !== "newsletter" ? (
          <div className="grid gap-5 md:grid-cols-2">
            {activePosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                status={statuses[post.id] ?? "draft"}
                onToggleStatus={() => toggleStatus(post.id)}
              />
            ))}
          </div>
        ) : (
          /* Newsletter */
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                SaaS Price Report — Draft
              </h2>
              <CopyButton text={newsletterDraft} />
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6">
              <pre className="whitespace-pre-wrap text-sm text-[var(--muted)] leading-relaxed font-[inherit]">
                {newsletterDraft}
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
