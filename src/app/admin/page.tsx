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

/** Find the correct compare URL for two tool slugs by looking up versusPairs */
function compareUrl(slugX: string, slugY: string): string {
  const match = versusPairs.find(
    (vs) =>
      (vs.slugA === slugX && vs.slugB === slugY) ||
      (vs.slugA === slugY && vs.slugB === slugX)
  );
  if (match) return `${SITE}/compare/${match.slugA}-vs-${match.slugB}`;
  // Fallback: use slugA-vs-slugB order (may 404 if no pair exists)
  return `${SITE}/compare/${slugX}-vs-${slugY}`;
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
  altPlan: ReturnType<typeof lowestPaidPlan>;
} | null {
  const toolPlan = lowestPaidPlan(tool);
  if (!toolPlan) return null;
  for (const slug of tool.alternatives) {
    const alt = getToolBySlug(slug);
    if (!alt) continue;
    const plan = lowestPaidPlan(alt);
    if (!plan) continue;
    // Skip if billing models are incomparable (per_seat vs flat)
    const models = [toolPlan.billingModel, plan.billingModel];
    if (
      (models.includes("per_seat") && models.includes("flat")) ||
      (models.includes("per_seat") && models.includes("usage"))
    )
      continue;
    return { alt, altPlan: plan };
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

  // 1) Cost-shock posts — lead with a surprising price point, give context, add caveat
  for (const tool of tools) {
    const entry = lowestPaidPlan(tool);
    if (!entry || !entry.priceMonthly || entry.priceMonthly < 10) continue;
    const comp = comparableAlternative(tool);
    if (!comp || !comp.altPlan || !comp.altPlan.priceMonthly) continue;

    const toolMonthly = entry.priceMonthly;
    const altMonthly = comp.altPlan.priceMonthly;
    const annualDiff = Math.round((toolMonthly - altMonthly) * 12);
    if (annualDiff <= 0 || annualDiff > 10000) continue;

    const toolBilling = entry.billingModel === "per_seat" ? "/seat" : "";
    const altBilling = comp.altPlan.billingModel === "per_seat" ? "/seat" : "";

    // Build an honest caveat from the avoidIf data on the alternative
    const altCaveat = comp.alt.avoidIf?.[0]
      ? `Caveat: ${comp.alt.name} isn't perfect — ${comp.alt.avoidIf[0].toLowerCase()}.`
      : `Caveat: feature sets aren't identical. Check which integrations you actually need before switching.`;

    posts.push({
      id: `li-cost-${idx++}`,
      platform: "linkedin",
      type: "cost-shock",
      title: `Cost Shock: ${tool.name} vs ${comp.alt.name}`,
      body: `${tool.name}'s ${entry.name} plan costs $${fmt(toolMonthly)}/mo${toolBilling}. ${entry.limits ? `That gets you: ${entry.limits}.` : ""}\n\n${comp.alt.name}'s ${comp.altPlan.name} plan costs $${fmt(altMonthly)}/mo${altBilling} for comparable features. That's $${fmt(annualDiff)}/year difference.\n\n${altCaveat}\n\nBoth prices verified against vendor pages, March 2026.\n\nFull pricing breakdown: ${compareUrl(tool.slug, comp.alt.slug)}\n\nWhat are you currently paying? Curious how others landed on their stack.`,
      url: compareUrl(tool.slug, comp.alt.slug),
      charCount: 0,
    });
    if (posts.length >= 8) break;
  }

  // 2) Comparison posts — lead with specific pricing details from both tools
  const usedPairs = new Set<string>();
  for (const vs of versusPairs) {
    const key = [vs.slugA, vs.slugB].sort().join("-");
    if (usedPairs.has(key)) continue;
    usedPairs.add(key);

    const toolA = getToolBySlug(vs.slugA);
    const toolB = getToolBySlug(vs.slugB);
    if (!toolA || !toolB) continue;

    const planA = lowestPaidPlan(toolA);
    const planB = lowestPaidPlan(toolB);

    const priceLine = (tool: Tool, plan: ReturnType<typeof lowestPaidPlan>) => {
      if (!plan) {
        return tool.freeTier
          ? `${tool.name}: Free${tool.freeTierLimits ? ` (${tool.freeTierLimits.split(",")[0].trim()})` : ""}`
          : `${tool.name}: Custom pricing`;
      }
      const suffix = plan.billingModel === "per_seat" ? "/seat" : "";
      const freeNote = tool.freeTier ? `. Free tier available` : "";
      return `${tool.name}: ${plan.name} at $${plan.priceMonthly}/mo${suffix}${plan.limits ? ` — ${plan.limits}` : ""}${freeNote}`;
    };

    // Build the "real difference" line from biggestDifference or summary
    const realDiff = vs.biggestDifference
      ? `The real difference: ${vs.biggestDifference}.`
      : vs.summary;

    posts.push({
      id: `li-compare-${idx++}`,
      platform: "linkedin",
      type: "comparison",
      title: `${toolA.name} vs ${toolB.name}`,
      body: `${toolA.name} vs ${toolB.name} — here's what the pricing pages don't make obvious.\n\n${priceLine(toolA, planA)}.\n\n${priceLine(toolB, planB)}.\n\n${realDiff}\n\nWe compared both across 12 dimensions: ${SITE}/compare/${vs.slugA}-vs-${vs.slugB}\n\nWhat's your experience with either of these?`,
      url: `${SITE}/compare/${vs.slugA}-vs-${vs.slugB}`,
      charCount: 0,
    });
    if (posts.filter((p) => p.type === "comparison").length >= 8) break;
  }

  // 3) Hidden cost posts — list ALL the hidden costs, not just a teaser
  for (const tool of tools) {
    if (!tool.hiddenCosts || tool.hiddenCosts.length === 0) continue;

    const bullets = tool.hiddenCosts
      .map((c) => `• ${c}`)
      .join("\n");

    const lowestPlan = lowestPaidPlan(tool);
    const priceContext = lowestPlan
      ? `${tool.name}'s pricing page shows ${lowestPlan.name} at $${lowestPlan.priceMonthly}/mo. What it doesn't show:`
      : `${tool.name}'s pricing page looks straightforward. What it doesn't show:`;

    posts.push({
      id: `li-hidden-${idx++}`,
      platform: "linkedin",
      type: "hidden-cost",
      title: `Hidden Costs: ${tool.name}`,
      body: `${priceContext}\n\n${bullets}\n\nNone of this is on the main pricing page. We found it in help docs, terms, and checkout flows while verifying prices for ${tools.length}+ tools.\n\nFull breakdown: ${SITE}/tools/${tool.slug}\n\nHave you run into surprise charges with ${tool.name}? Would love to hear what we missed.`,
      url: `${SITE}/tools/${tool.slug}`,
      charCount: 0,
    });
    if (posts.filter((p) => p.type === "hidden-cost").length >= 6) break;
  }

  // 4) Framework posts — lead with a useful insight about the category
  for (const cat of categories.slice(0, 6)) {
    const catTools = toolsInCategory(cat.slug);
    if (catTools.length < 2) continue;

    const freeCount = catTools.filter((t) => t.freeTier).length;
    const cheapest = catTools
      .filter((t) => { const p = lowestPaidPlan(t); return p && p.priceMonthly && p.priceMonthly > 0; })
      .sort((a, b) => (lowestPaidPlan(a)?.priceMonthly ?? 999) - (lowestPaidPlan(b)?.priceMonthly ?? 999));
    const cheapestTool = cheapest[0];
    const cheapestPlan = cheapestTool ? lowestPaidPlan(cheapestTool) : null;
    const expensiveTool = cheapest[cheapest.length - 1];
    const expensivePlan = expensiveTool ? lowestPaidPlan(expensiveTool) : null;

    const priceRange = cheapestPlan && expensivePlan
      ? `Prices range from $${cheapestPlan.priceMonthly}/mo (${cheapestTool.name}) to $${expensivePlan.priceMonthly}/mo (${expensiveTool.name}).`
      : "";

    posts.push({
      id: `li-framework-${idx++}`,
      platform: "linkedin",
      type: "framework",
      title: `How to pick: ${cat.name}`,
      body: `We compared ${catTools.length} ${cat.name.toLowerCase()} tools. ${freeCount} have free tiers. ${priceRange}\n\nThe biggest mistake we see: picking the tool with the most features instead of the one that fits your actual workflow.\n\nThree questions that cut through the noise:\n1. What's your team size in 12 months? (Per-seat pricing compounds fast.)\n2. Do you need integrations with your existing stack, or is standalone fine?\n3. How painful is migration if you outgrow it?\n\nWe scored every tool on value, ease, power, setup friction, migration difficulty, and transparency: ${SITE}/best/${cat.slug}\n\nWhat ${cat.name.toLowerCase()} tools are you evaluating right now?`,
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

  // 1) Full pricing comparison posts — every tier listed in the post body
  for (const vs of versusPairs.slice(0, 6)) {
    const toolA = getToolBySlug(vs.slugA);
    const toolB = getToolBySlug(vs.slugB);
    if (!toolA || !toolB) continue;

    const formatTiers = (tool: Tool): string => {
      return tool.pricing
        .map((p) => {
          if (p.priceMonthly === null) return `  - ${p.name}: Custom pricing`;
          if (p.priceMonthly === 0) return `  - ${p.name}: Free — ${p.limits}`;
          const suffix = p.billingModel === "per_seat" ? "/seat" : "";
          const annual = p.priceAnnual ? ` ($${fmt(p.priceAnnual)}/yr annual)` : "";
          return `  - ${p.name}: $${p.priceMonthly}/mo${suffix}${annual} — ${p.limits}`;
        })
        .join("\n");
    };

    // Build choose-if sections if available
    const chooseSection = vs.chooseAIf && vs.chooseBIf
      ? `\n**Choose ${toolA.name} if:**\n${vs.chooseAIf.map((c) => `- ${c}`).join("\n")}\n\n**Choose ${toolB.name} if:**\n${vs.chooseBIf.map((c) => `- ${c}`).join("\n")}`
      : "";

    const caveatA = toolA.avoidIf?.[0] ? `\n**Watch out for ${toolA.name}:** ${toolA.avoidIf[0]}` : "";
    const caveatB = toolB.avoidIf?.[0] ? `\n**Watch out for ${toolB.name}:** ${toolB.avoidIf[0]}` : "";

    posts.push({
      id: `rd-compare-${idx++}`,
      platform: "reddit",
      type: "reddit-comparison",
      title: `We compared ${toolA.name} vs ${toolB.name} pricing at every tier — here's the full breakdown`,
      body: `We've been verifying SaaS pricing against vendor pages and wanted to share what we found for these two.\n\n**${toolA.name} pricing (all tiers):**\n${formatTiers(toolA)}\n\n**${toolB.name} pricing (all tiers):**\n${formatTiers(toolB)}\n\n**Our take:** ${vs.summary}${vs.priceDelta ? `\n\n**Price difference:** ${vs.priceDelta}` : ""}${chooseSection}${caveatA}${caveatB}\n\nAll prices verified March 2026 against vendor pricing pages.\n\nWe put the full data in a side-by-side comparison table if you want to dig deeper: ${SITE}/compare/${vs.slugA}-vs-${vs.slugB}\n\nHappy to answer questions about either tool.`,
      url: `${SITE}/compare/${vs.slugA}-vs-${vs.slugB}`,
      subreddits: ["r/SaaS", "r/startups", "r/smallbusiness"],
      charCount: 0,
    });
  }

  // 2) Hidden cost deep-dives — ALL hidden costs listed, plus context
  const hiddenCostTools = tools.filter(
    (t) => t.hiddenCosts && t.hiddenCosts.length >= 2
  );
  for (const tool of hiddenCostTools.slice(0, 5)) {
    const bullets = tool
      .hiddenCosts!
      .map((c) => `- ${c}`)
      .join("\n");

    const lowestPlan = lowestPaidPlan(tool);
    const priceContext = lowestPlan
      ? `${tool.name}'s pricing page shows plans starting at $${lowestPlan.priceMonthly}/mo (${lowestPlan.name} tier).`
      : `${tool.name}'s pricing page looks simple enough.`;

    // Include alternatives so the post is useful even without clicking
    const altNames = tool.alternatives
      .map((slug) => getToolBySlug(slug))
      .filter(Boolean)
      .slice(0, 3)
      .map((t) => t!.name);
    const altLine = altNames.length > 0
      ? `\n\n**Alternatives worth checking:** ${altNames.join(", ")}. Each has its own tradeoffs — none are perfect.`
      : "";

    posts.push({
      id: `rd-hidden-${idx++}`,
      platform: "reddit",
      type: "reddit-hidden-cost",
      title: `Hidden costs of ${tool.name} that the pricing page doesn't show`,
      body: `${priceContext} Here's what you won't find there:\n\n${bullets}\n\nWe found these in help docs, checkout flows, and terms of service while verifying pricing for ${tools.length}+ SaaS tools. None of it is on the main pricing page.\n\nTo be fair, ${tool.name} ${tool.bestFor?.[0] ? `is genuinely good for ${tool.bestFor[0].toLowerCase()}` : "has real strengths"}. These aren't dealbreakers for everyone — but they should be visible before you commit.${altLine}\n\nWe documented all of this with sources: ${SITE}/tools/${tool.slug}\n\nHappy to answer questions about any of these tools.`,
      url: `${SITE}/tools/${tool.slug}`,
      subreddits: ["r/SaaS", "r/startups", "r/Entrepreneur"],
      charCount: 0,
    });
  }

  // 3) Budget stack posts — full itemized stack in the post body
  for (const cat of categories.slice(0, 5)) {
    const catTools = toolsInCategory(cat.slug)
      .filter((t) => t.categorySlug !== "crm")
      .filter((t) => t.freeTier || (lowestPaidPlan(t)?.priceMonthly ?? 999) < 30)
      .slice(0, 5);
    if (catTools.length < 2) continue;

    const toolList = catTools
      .map((t) => {
        const plan = lowestPaidPlan(t);
        const freeLimits = t.freeTier && t.freeTierLimits
          ? ` (free tier: ${t.freeTierLimits.split(",").slice(0, 2).join(",").trim()})`
          : "";
        const paidPrice = plan && plan.priceMonthly && plan.priceMonthly > 0
          ? ` — Paid starts at $${plan.priceMonthly}/mo (${plan.name})`
          : "";
        const bestFor = t.bestFor?.[0] ? `. Best for: ${t.bestFor[0]}` : "";
        const warning = t.avoidIf?.[0] ? `. Watch out: ${t.avoidIf[0]}` : "";
        return `- **${t.name}**${freeLimits}${paidPrice}${bestFor}${warning}`;
      })
      .join("\n");

    const totalFree = catTools.filter((t) => t.freeTier).length;

    posts.push({
      id: `rd-budget-${idx++}`,
      platform: "reddit",
      type: "reddit-budget",
      title: `The cheapest ${cat.name.toLowerCase()} stack for solo founders — ${totalFree} have free tiers`,
      body: `We verified pricing against vendor pages for ${toolsInCategory(cat.slug).length} ${cat.name.toLowerCase()} tools. Here are the ones that actually work under $30/mo:\n\n${toolList}\n\n**Honest caveat:** Free tiers always have limits. The free plan that works at 100 users may force an upgrade at 500. We list the exact limits for each tier so you know when you'll hit the wall.\n\n**What we'd pick:**\n- Just starting out solo? Pick the one with the most generous free tier for your use case.\n- Small team (3-5 people)? Check per-seat costs — they compound fast.\n\nWe scored all ${toolsInCategory(cat.slug).length} tools in this category on value, ease, power, and more: ${SITE}/best/${cat.slug}\n\nHappy to answer questions about any of these tools.`,
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

  // 1) Pricing surprises post — specific data points, not generic claims
  // Gather real surprise data from the tool dataset
  const surprises: string[] = [];

  // Find tools with the biggest gap between lowest and highest paid tiers
  for (const tool of tools) {
    const lowest = lowestPaidPlan(tool);
    const highest = highestPaidPlan(tool);
    if (!lowest || !highest || !lowest.priceMonthly || !highest.priceMonthly) continue;
    if (lowest.priceMonthly === highest.priceMonthly) continue;
    const ratio = Math.round((highest.priceMonthly / lowest.priceMonthly) * 100) / 100;
    if (ratio >= 5) {
      surprises.push(
        `${tool.name}'s cheapest paid plan is $${lowest.priceMonthly}/mo (${lowest.name}). Their top tier is $${fmt(highest.priceMonthly)}/mo (${highest.name}) — a ${Math.round(ratio)}x jump`
      );
    }
  }

  // Find tools with restrictive free tiers
  for (const tool of tools) {
    if (tool.freeTier && tool.freeTierLimits && tool.freeTierLimits.length > 0) {
      const limits = tool.freeTierLimits;
      if (limits.includes("250") || limits.includes("100 ") || limits.includes("limited")) {
        const plan = lowestPaidPlan(tool);
        if (plan && plan.priceMonthly) {
          surprises.push(
            `${tool.name} free tier: ${limits.split(",").slice(0, 2).join(",").trim()}. First paid plan is $${plan.priceMonthly}/mo (${plan.name})`
          );
        }
      }
    }
  }

  const topSurprises = surprises.slice(0, 6);
  if (topSurprises.length >= 3) {
    posts.push({
      id: `ih-data-${idx++}`,
      platform: "indiehackers",
      type: "ih-data",
      title: `We normalized pricing across ${totalTools} SaaS tools. Here are ${topSurprises.length} things that surprised us`,
      body: `We've been verifying SaaS pricing against vendor pages for the last few months. Here are the pricing facts that caught us off guard:\n\n${topSurprises.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nThe pattern we keep seeing: the gap between "starter" and "professional" tiers is where vendors make their real money. Free tiers get you in the door, then the upgrade path is steep.\n\nWe built a free comparison tool if anyone wants to explore the data: ${SITE}/calculate\n\nWhat pricing surprises have you run into?`,
      url: `${SITE}/calculate`,
      charCount: 0,
    });
  }

  // 2) Pricing traps post — specific examples from the data, not generic bullet points
  const trapsExamples: string[] = [];
  const perSeatTools = tools.filter((t) =>
    t.pricing.some((p) => p.billingModel === "per_seat" && p.priceMonthly && p.priceMonthly > 15)
  );
  if (perSeatTools.length > 0) {
    const ex = perSeatTools[0];
    const plan = ex.pricing.find((p) => p.billingModel === "per_seat" && p.priceMonthly && p.priceMonthly > 15);
    if (plan && plan.priceMonthly) {
      const pm = plan.priceMonthly;
      trapsExamples.push(
        `Per-seat compounding: ${ex.name} ${plan.name} is $${pm}/seat/mo. A 10-person team pays $${fmt(pm * 10)}/mo — $${fmt(pm * 10 * 12)}/yr`
      );
    }
  }

  const hiddenCostExamples = tools
    .filter((t) => t.hiddenCosts && t.hiddenCosts.length >= 2)
    .slice(0, 3);
  for (const tool of hiddenCostExamples) {
    trapsExamples.push(
      `${tool.name} hidden fees: ${tool.hiddenCosts!.slice(0, 2).join("; ")}`
    );
  }

  const contactSalesTools = tools.filter((t) =>
    t.pricing.some((p) => p.priceMonthly === null && p.billingModel === "custom")
  );
  if (contactSalesTools.length > 0) {
    trapsExamples.push(
      `${contactSalesTools.length} of ${totalTools} tools hide their highest tier behind "Contact Sales." You can't budget what you can't see`
    );
  }

  if (trapsExamples.length >= 3) {
    posts.push({
      id: `ih-traps-${idx++}`,
      platform: "indiehackers",
      type: "ih-traps",
      title: `Pricing traps we found after researching ${totalTools} SaaS tools — with specific numbers`,
      body: `We've verified pricing for ${totalTools} tools across ${totalCategories} categories. Here are the traps we keep seeing, with real examples:\n\n${trapsExamples.map((s, i) => `${i + 1}. ${s}`).join("\n\n")}\n\nThe uncomfortable truth: pricing pages are marketing pages. The real cost is in the help docs, terms of service, and checkout flows.\n\nWe're not saying these are bad tools — most of them are excellent at what they do. But the pricing should be transparent.\n\nWe documented every hidden cost we found: ${SITE}\n\nWhat pricing traps have you fallen into? Genuinely curious — we want to add them to our data.`,
      url: SITE,
      charCount: 0,
    });
  }

  // 3) Category-specific posts — with actual tool rankings and prices
  const ihCategories = ["email-marketing", "crm", "automation", "project-management"];
  for (const catSlug of ihCategories) {
    const cat = categories.find((c) => c.slug === catSlug);
    if (!cat) continue;
    const catTools = toolsInCategory(catSlug);
    const freeCount = catTools.filter((t) => t.freeTier).length;

    // Build a quick pricing summary of the top tools
    const priceSummary = catTools.slice(0, 5).map((t) => {
      const plan = lowestPaidPlan(t);
      const freeNote = t.freeTier ? "Free tier available" : "No free tier";
      const paidNote = plan && plan.priceMonthly
        ? `Paid from $${plan.priceMonthly}/mo (${plan.name})`
        : "";
      return `- **${t.name}**: ${freeNote}. ${paidNote}. ${t.tagline}`;
    }).join("\n");

    posts.push({
      id: `ih-cat-${idx++}`,
      platform: "indiehackers",
      type: "ih-category",
      title: `${cat.name} for indie hackers — ${catTools.length} tools compared with real prices`,
      body: `We compared ${catTools.length} ${cat.name.toLowerCase()} tools. ${freeCount} have free tiers. Here's the quick breakdown:\n\n${priceSummary}\n\nThe biggest gotcha in this category: ${catSlug === "crm" ? "CRM pricing often jumps 5-10x between starter and professional tiers" : catSlug === "automation" ? "automation tools charge per task/action, so costs scale with usage in ways that are hard to predict" : catSlug === "email-marketing" ? "some tools charge per contact (even unsubscribed ones), others charge per email sent" : "per-seat pricing means costs scale linearly with team size"}.\n\nAll prices verified against vendor sites, March 2026.\n\nFull comparison with scores and hidden costs: ${SITE}/best/${cat.slug}\n\nWhat are you using in this category? We're always looking for tools we missed.`,
      url: `${SITE}/best/${cat.slug}`,
      charCount: 0,
    });
  }

  // 4) Methodology post — focused on learnings, not self-promotion
  posts.push({
    id: `ih-method-${idx++}`,
    platform: "indiehackers",
    type: "ih-data",
    title: "What we learned verifying pricing for " + totalTools + " SaaS tools",
    body: `We've spent months verifying SaaS pricing against vendor pages. Here's what we learned about how SaaS pricing actually works:\n\n1. **~40% of tools have costs not shown on the pricing page.** Add-ons, overage fees, transaction cuts, and module upsells are buried in help docs or only visible at checkout.\n\n2. **Free tiers are shrinking.** Multiple tools we track have reduced free tier limits in the past year. What was "free for 2,000 contacts" becomes "free for 250."\n\n3. **Per-seat and per-usage pricing are designed to be unpredictable.** You can't budget accurately until you're already locked in.\n\n4. **"Contact Sales" is the most expensive plan.** ${contactSalesTools.length} of ${totalTools} tools we track hide their top tier this way.\n\n5. **Annual billing discounts average 15-25%.** But you're locked in for a year with a tool you may outgrow in 6 months.\n\nWe score every tool on 6 dimensions: value, ease, power, setup friction, migration difficulty, and transparency. We make money through affiliate links, but the scores are independent.\n\nThe data is free: ${SITE}\n\nWhat would you want to see in a SaaS comparison tool? We're still building this.`,
    url: SITE,
    charCount: 0,
  });

  // 5) Versus comparisons post — with actual example comparisons and data
  const examplePairs = versusPairs.slice(0, 4);
  const pairLines = examplePairs.map((vs) => {
    const a = getToolBySlug(vs.slugA);
    const b = getToolBySlug(vs.slugB);
    if (!a || !b) return null;
    const verdict = vs.verdict === "depends"
      ? "Depends on use case"
      : vs.verdict === vs.slugA ? `${a.name} wins` : `${b.name} wins`;
    return `- **${a.name} vs ${b.name}**: ${verdict}. ${vs.summary.split(".")[0]}.`;
  }).filter(Boolean).join("\n");

  posts.push({
    id: `ih-versus-${idx++}`,
    platform: "indiehackers",
    type: "ih-data",
    title: `${totalVersus} head-to-head SaaS comparisons — with verdicts and price deltas`,
    body: `We built ${totalVersus} side-by-side comparisons with actual recommendations. Not "both are great!" — actual "choose A if / choose B if" decisions.\n\nA few examples:\n\n${pairLines}\n\nEvery comparison includes normalized pricing, feature overlap, hidden costs, and switching difficulty.\n\nWe include an "Avoid If" section for every tool — not just the upsides. If a tool is wrong for your use case, we say so.\n\nBrowse all comparisons: ${SITE}/compare\n\nWhich comparisons would be most useful to you? We prioritize based on what people actually need.`,
    url: `${SITE}/compare`,
    charCount: 0,
  });

  for (const p of posts) {
    p.charCount = (p.title + "\n\n" + p.body).length;
  }
  return posts;
}

function generateNewsletterDraft(): string {
  // 1. Find a tool with hidden costs for the hidden cost section
  const toolWithHidden = tools.find(
    (t) => t.hiddenCosts && t.hiddenCosts.length >= 2
  );

  // 2. Pick a versus pair for comparison section
  const spotlight = versusPairs[0];
  const spotA = getToolBySlug(spotlight?.slugA ?? "");
  const spotB = getToolBySlug(spotlight?.slugB ?? "");

  // 3. Find a second tool with hidden costs for the hidden cost reveal
  const revealTool = tools.find(
    (t) =>
      t.hiddenCosts &&
      t.hiddenCosts.length >= 2 &&
      t.slug !== toolWithHidden?.slug
  );

  // 4. Find a cheaper alternative pair
  const expensiveTool = tools.find((t) => {
    const entry = lowestPaidPlan(t);
    return entry && entry.priceMonthly && entry.priceMonthly > 20;
  });
  const cheapAlt = expensiveTool
    ? comparableAlternative(expensiveTool)
    : null;

  let draft = `Subject: This week in SaaS pricing\n\n`;
  draft += `---\n\n`;

  // Section 1: Pricing change / hidden cost highlight
  draft += `1. HIDDEN COST: `;
  if (toolWithHidden) {
    const plan = lowestPaidPlan(toolWithHidden);
    const priceNote = plan ? `${toolWithHidden.name}'s ${plan.name} plan starts at $${plan.priceMonthly}/mo.` : `${toolWithHidden.name} looks affordable on the surface.`;
    draft += `${toolWithHidden.name} has costs that aren't on the pricing page\n\n`;
    draft += `${priceNote} But here's what you won't see until checkout or the help docs:\n\n`;
    draft += toolWithHidden
      .hiddenCosts!
      .map((c) => `  - ${c}`)
      .join("\n");
    draft += `\n\n`;
    draft += `This doesn't make ${toolWithHidden.name} a bad tool${toolWithHidden.bestFor?.[0] ? ` — it's genuinely good for ${toolWithHidden.bestFor[0].toLowerCase()}` : ""}. But you should know the real cost before committing.\n\n`;
    draft += `Full breakdown: ${SITE}/tools/${toolWithHidden.slug}\n\n`;
  }

  // Section 2: Comparison spotlight with actual pricing details
  draft += `2. COMPARISON: `;
  if (spotA && spotB && spotlight) {
    const planA = lowestPaidPlan(spotA);
    const planB = lowestPaidPlan(spotB);
    const priceA = planA ? `$${planA.priceMonthly}/mo (${planA.name})` : (spotA.freeTier ? "Free" : "Custom pricing");
    const priceB = planB ? `$${planB.priceMonthly}/mo (${planB.name})` : (spotB.freeTier ? "Free" : "Custom pricing");

    draft += `${spotA.name} vs ${spotB.name} — the difference most people miss\n\n`;
    draft += `  ${spotA.name}: starts at ${priceA}${spotA.freeTier ? ". Has a free tier" : ""}.\n`;
    draft += `  ${spotB.name}: starts at ${priceB}${spotB.freeTier ? ". Has a free tier" : ""}.\n\n`;
    draft += `${spotlight.summary}\n\n`;
    if (spotlight.biggestDifference) {
      draft += `Key insight: ${spotlight.biggestDifference}.\n\n`;
    }
    draft += `Side-by-side comparison: ${compareUrl(spotlight.slugA, spotlight.slugB)}\n\n`;
  }

  // Section 3: Second hidden cost reveal
  draft += `3. HIDDEN COST: `;
  if (revealTool) {
    draft += `${revealTool.name}'s pricing page is missing these fees\n\n`;
    draft += revealTool
      .hiddenCosts!
      .map((c) => `  - ${c}`)
      .join("\n");
    draft += `\n\n`;
    draft += `Details and alternatives: ${SITE}/tools/${revealTool.slug}\n\n`;
  }

  // Section 4: Cheaper alternative with both prices
  draft += `4. CHEAPER ALTERNATIVE: `;
  if (expensiveTool && cheapAlt && cheapAlt.altPlan) {
    const entryPlan = lowestPaidPlan(expensiveTool);
    const expMonthly = entryPlan?.priceMonthly ?? 0;
    const altMonthly = cheapAlt.altPlan.priceMonthly ?? 0;
    const annualSavings = Math.round((expMonthly - altMonthly) * 12);

    draft += `Save $${fmt(annualSavings)}/year by switching from ${expensiveTool.name} to ${cheapAlt.alt.name}\n\n`;
    draft += `  ${expensiveTool.name} ${entryPlan?.name ?? ""}: $${expMonthly}/mo ($${fmt(Math.round(expMonthly * 12))}/yr)\n`;
    draft += `  ${cheapAlt.alt.name} ${cheapAlt.altPlan.name}: $${altMonthly}/mo ($${fmt(Math.round(altMonthly * 12))}/yr)\n\n`;
    draft += `Caveat: ${cheapAlt.alt.avoidIf?.[0] ? cheapAlt.alt.avoidIf[0] : "Feature sets aren't identical — check which integrations you actually need"}.\n\n`;
    draft += `Compare side by side: ${compareUrl(expensiveTool.slug, cheapAlt.alt.slug)}\n`;
  }

  draft += `\n---\n\n`;
  draft += `All prices independently verified against vendor pages. We make money through affiliate links (labeled), but the data is independent.\n\n`;
  draft += `Reply to this email if you want us to cover a specific tool or comparison next week.`;

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
          <a
            href="/admin/expert-audit"
            className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 text-sm font-medium bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Expert Audit Reports &rarr;
          </a>
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
