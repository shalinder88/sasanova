"use client";

import { useState } from "react";
import {
  categories,
  tools,
  versusPairs,
  getToolsByCategory,
  getToolBySlug,
  getOverallScore,
  type Tool,
} from "@/data/tools";

const BASE = "https://sasanova.com";

/* ── Helpers ── */

function getCheapestPaidTool(categorySlug: string): Tool | null {
  const categoryTools = getToolsByCategory(categorySlug);
  let cheapest: Tool | null = null;
  let cheapestPrice = Infinity;
  for (const tool of categoryTools) {
    for (const plan of tool.pricing) {
      if (plan.priceMonthly !== null && plan.priceMonthly > 0 && plan.priceMonthly < cheapestPrice) {
        cheapestPrice = plan.priceMonthly;
        cheapest = tool;
      }
    }
  }
  return cheapest;
}

function getCheapestPrice(tool: Tool): { price: number; billingModel: string; planName: string } | null {
  let result: { price: number; billingModel: string; planName: string } | null = null;
  for (const plan of tool.pricing) {
    if (plan.priceMonthly !== null && plan.priceMonthly > 0) {
      if (!result || plan.priceMonthly < result.price) {
        result = { price: plan.priceMonthly, billingModel: plan.billingModel, planName: plan.name };
      }
    }
  }
  return result;
}

/* ── Code Block Component ── */

function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-3">
      <div className="text-[11px] uppercase tracking-wider text-muted mb-1">{label}</div>
      <div className="relative group">
        <pre className="bg-[#0c0c0f] border border-border rounded-lg p-3 pr-20 text-xs text-foreground overflow-x-auto font-mono whitespace-pre-wrap break-all">
          {code}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-2.5 py-1 text-[11px] rounded border border-border bg-surface-alt text-muted hover:text-foreground hover:border-accent transition-colors cursor-pointer"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}

/* ── Widget Preview Wrapper ── */

function WidgetPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface-alt rounded-lg border border-border p-4 flex items-center justify-center min-h-[80px]">
      {children}
    </div>
  );
}

/* ── Cheapest Tool Preview (inline, not iframe) ── */

function CheapestPreview({ categorySlug }: { categorySlug: string }) {
  const cat = categories.find((c) => c.slug === categorySlug);
  const tool = getCheapestPaidTool(categorySlug);
  if (!cat || !tool) return <div className="text-muted text-sm">No tools found for this category.</div>;

  const price = getCheapestPrice(tool);
  if (!price) return <div className="text-muted text-sm">No paid plans found.</div>;

  const billingLabel = price.billingModel === "per_seat" ? "/seat/mo" : "/mo";
  const verified = new Date(tool.lastVerified);
  const verifiedStr = verified.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  return (
    <div className="w-full max-w-[400px]">
      <div className="rounded-lg border border-border bg-surface">
        <div className="px-3 py-2.5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-accent-light flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] uppercase tracking-wider text-muted font-medium mb-0.5">Cheapest {cat.name}</div>
            <div className="text-sm font-semibold text-foreground truncate">
              {tool.name} {price.planName} — ${price.price}{billingLabel}
            </div>
          </div>
          <div className="shrink-0 text-[10px] text-muted bg-surface-alt px-1.5 py-0.5 rounded">{verifiedStr}</div>
        </div>
        <div className="px-3 py-1.5 border-t border-border text-[10px] text-muted flex items-center justify-between">
          <span>Verified by Sasanova</span>
          <span className="text-accent">View all &rarr;</span>
        </div>
      </div>
    </div>
  );
}

/* ── Price Check Preview ── */

function PricePreview({ slug }: { slug: string }) {
  const tool = getToolBySlug(slug);
  if (!tool) return <div className="text-muted text-sm">Tool not found.</div>;

  const price = getCheapestPrice(tool);
  const billingLabel = price ? (price.billingModel === "per_seat" ? "/seat/mo" : "/mo") : null;
  const verified = new Date(tool.lastVerified);
  const verifiedStr = verified.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  return (
    <div className="w-full max-w-[400px]">
      <div className="rounded-lg border border-border bg-surface">
        <div className="px-3 py-2.5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-accent-light flex items-center justify-center shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-foreground truncate">
              {tool.name}
              {price
                ? <span className="text-accent ml-1.5">${price.price}{billingLabel}</span>
                : tool.freeTier
                  ? <span className="text-success ml-1.5">Free plan available</span>
                  : <span className="text-muted ml-1.5">Custom pricing</span>
              }
            </div>
            <div className="text-[11px] text-muted mt-0.5 flex items-center gap-2">
              {tool.freeTier && <span className="text-success">Free tier</span>}
              <span>Last verified {verifiedStr}</span>
            </div>
          </div>
        </div>
        <div className="px-3 py-1.5 border-t border-border text-[10px] text-muted flex items-center justify-between">
          <span>Powered by Sasanova</span>
          <span className="text-accent">Full pricing &rarr;</span>
        </div>
      </div>
    </div>
  );
}

/* ── Compare Preview ── */

function ComparePreview({ pair }: { pair: string }) {
  const idx = pair.indexOf("-vs-");
  if (idx === -1) return <div className="text-muted text-sm">Invalid pair format.</div>;

  const slugA = pair.slice(0, idx);
  const slugB = pair.slice(idx + 4);
  const toolA = getToolBySlug(slugA);
  const toolB = getToolBySlug(slugB);
  if (!toolA || !toolB) return <div className="text-muted text-sm">Tools not found.</div>;

  const scoreA = getOverallScore(toolA.scores);
  const scoreB = getOverallScore(toolB.scores);
  const priceA = getCheapestPrice(toolA);
  const priceB = getCheapestPrice(toolB);

  const fmtPrice = (tool: Tool, p: ReturnType<typeof getCheapestPrice>) => {
    if (!p) return tool.freeTier ? "Free" : "Custom";
    return `$${p.price}${p.billingModel === "per_seat" ? "/seat/mo" : "/mo"}`;
  };

  return (
    <div className="w-full max-w-[500px]">
      <div className="rounded-lg border border-border bg-surface">
        <div className="px-4 py-3 flex items-center gap-3">
          <div className="flex-1 min-w-0 text-center">
            <div className="text-sm font-semibold text-foreground truncate">{toolA.name}</div>
            <div className="text-accent text-sm font-medium mt-0.5">{fmtPrice(toolA, priceA)}</div>
            <div className="mt-1 text-[11px] text-muted">Score: {scoreA}/10</div>
          </div>
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-surface-alt border border-border flex items-center justify-center text-[11px] font-bold text-muted">VS</div>
          </div>
          <div className="flex-1 min-w-0 text-center">
            <div className="text-sm font-semibold text-foreground truncate">{toolB.name}</div>
            <div className="text-accent text-sm font-medium mt-0.5">{fmtPrice(toolB, priceB)}</div>
            <div className="mt-1 text-[11px] text-muted">Score: {scoreB}/10</div>
          </div>
        </div>
        <div className="px-3 py-1.5 border-t border-border text-[10px] text-muted flex items-center justify-between">
          <span>Powered by Sasanova</span>
          <span className="text-accent">Full comparison &rarr;</span>
        </div>
      </div>
    </div>
  );
}

/* ── Main Page ── */

export default function EmbedShowcasePage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.slug ?? "crm");
  const [selectedTool, setSelectedTool] = useState("mailchimp");
  const firstPair = versusPairs[0] ? `${versusPairs[0].slugA}-vs-${versusPairs[0].slugB}` : "zapier-vs-make";
  const [selectedPair, setSelectedPair] = useState(firstPair);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-foreground mb-2">Embed Sasanova Widgets</h1>
        <p className="text-muted text-sm leading-relaxed">
          Add verified pricing data to your blog, review site, or documentation.
          Each widget links back to Sasanova for full details. Copy the embed code and paste it into your HTML.
        </p>
      </div>

      {/* How to Use */}
      <div className="mb-10 bg-surface border border-border rounded-lg p-5">
        <h2 className="text-base font-semibold text-foreground mb-3">How to Use</h2>
        <ol className="text-sm text-muted space-y-2 list-decimal list-inside">
          <li>Choose a widget type below and customize it using the dropdown selectors.</li>
          <li>Copy the embed code snippet.</li>
          <li>Paste it into your website HTML where you want the widget to appear.</li>
          <li>The widget renders as a lightweight iframe — no JavaScript required.</li>
        </ol>
      </div>

      {/* Widget 1: Cheapest Tool Badge */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-1">1. Cheapest Tool Badge</h2>
        <p className="text-sm text-muted mb-4">
          Shows the cheapest verified tool in a category. Great for &ldquo;best budget pick&rdquo; callouts.
        </p>

        <label className="block text-xs text-muted mb-1">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mb-4 bg-surface border border-border text-foreground text-sm rounded-md px-3 py-2 w-full max-w-xs focus:border-accent focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>{cat.name}</option>
          ))}
        </select>

        <WidgetPreview>
          <CheapestPreview categorySlug={selectedCategory} />
        </WidgetPreview>

        <CodeBlock
          label="Embed Code"
          code={`<iframe src="${BASE}/embed/cheapest/${selectedCategory}" width="400" height="60" style="border:none;"></iframe>`}
        />
      </section>

      {/* Widget 2: Price Check Badge */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-1">2. Price Check Badge</h2>
        <p className="text-sm text-muted mb-4">
          Shows a specific tool&apos;s starting price with verification date.
        </p>

        <label className="block text-xs text-muted mb-1">Tool</label>
        <select
          value={selectedTool}
          onChange={(e) => setSelectedTool(e.target.value)}
          className="mb-4 bg-surface border border-border text-foreground text-sm rounded-md px-3 py-2 w-full max-w-xs focus:border-accent focus:outline-none"
        >
          {tools.map((t) => (
            <option key={t.slug} value={t.slug}>{t.name}</option>
          ))}
        </select>

        <WidgetPreview>
          <PricePreview slug={selectedTool} />
        </WidgetPreview>

        <CodeBlock
          label="Embed Code"
          code={`<iframe src="${BASE}/embed/price/${selectedTool}" width="400" height="60" style="border:none;"></iframe>`}
        />
      </section>

      {/* Widget 3: Compare Mini-Widget */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-foreground mb-1">3. Compare Mini-Widget</h2>
        <p className="text-sm text-muted mb-4">
          Shows two tools side by side with prices and scores.
        </p>

        <label className="block text-xs text-muted mb-1">Comparison</label>
        <select
          value={selectedPair}
          onChange={(e) => setSelectedPair(e.target.value)}
          className="mb-4 bg-surface border border-border text-foreground text-sm rounded-md px-3 py-2 w-full max-w-xs focus:border-accent focus:outline-none"
        >
          {versusPairs.map((vs) => {
            const tA = getToolBySlug(vs.slugA);
            const tB = getToolBySlug(vs.slugB);
            const pair = `${vs.slugA}-vs-${vs.slugB}`;
            return (
              <option key={pair} value={pair}>
                {tA?.name ?? vs.slugA} vs {tB?.name ?? vs.slugB}
              </option>
            );
          })}
        </select>

        <WidgetPreview>
          <ComparePreview pair={selectedPair} />
        </WidgetPreview>

        <CodeBlock
          label="Embed Code"
          code={`<iframe src="${BASE}/embed/compare/${selectedPair}" width="500" height="80" style="border:none;"></iframe>`}
        />
      </section>

      {/* Footer */}
      <div className="border-t border-border pt-6 mt-6 text-center">
        <p className="text-xs text-muted">
          Pricing data is tracked with explicit provenance labels. Widgets auto-update when we re-verify prices.
        </p>
        <a
          href="https://sasanova.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-xs text-accent hover:underline"
        >
          sasanova.com
        </a>
      </div>
    </div>
  );
}
