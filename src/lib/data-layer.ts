/**
 * Hybrid data access layer.
 *
 * Tries Supabase first, falls back to static data on any error.
 * Normalises Supabase rows into the static-data shapes that
 * every page component already consumes, so nothing downstream breaks.
 */

import { getTools, getComparisons, getCategories } from './queries';
import type { Tool as SupaTool, Comparison as SupaComparison, Category as SupaCategory } from './types';
import {
  tools as staticTools,
  categories as staticCategories,
  versusPairs as staticVersusPairs,
  type Tool as StaticTool,
  type Category as StaticCategory,
  type PricingPlan as StaticPricingPlan,
  type VersusMatch,
} from '@/data/tools';

// ---------------------------------------------------------------------------
// Normalisation helpers: Supabase shape -> static shape
// ---------------------------------------------------------------------------

function normaliseSupaTool(t: SupaTool): StaticTool {
  return {
    slug: t.slug,
    name: t.name,
    vendor: t.vendors?.name ?? '',
    website: t.vendors?.website_url ?? '',
    tagline: t.tagline,
    description: t.description,
    // Supabase doesn't carry a single "primary" category slug the same way.
    // Fall back to the static tool's categorySlug if we can find a match,
    // otherwise use an empty string (pages that need it still use static data).
    categorySlug: staticTools.find((s) => s.slug === t.slug)?.categorySlug ?? '',
    categories: staticTools.find((s) => s.slug === t.slug)?.categories ?? [],
    scores: {
      value: t.score_value ?? 0,
      ease: t.score_ease ?? 0,
      power: t.score_power ?? 0,
      setupFriction: t.score_setup_friction ?? 5,
      migrationDifficulty: t.score_migration_difficulty ?? 5,
      transparency: t.score_transparency ?? 0,
    },
    // Pricing plans require a separate query that getTools() doesn't join.
    // Merge from static data so card-level display keeps working.
    pricing: staticTools.find((s) => s.slug === t.slug)?.pricing ?? [],
    pricingUrl: t.vendors?.pricing_url ?? '',
    freeTier: t.has_free_tier,
    freeTierLimits: t.free_tier_limits ?? undefined,
    bestFor: t.best_for ?? [],
    avoidIf: t.avoid_if ?? [],
    features: staticTools.find((s) => s.slug === t.slug)?.features ?? [],
    integrations: staticTools.find((s) => s.slug === t.slug)?.integrations ?? [],
    platforms: t.platforms ?? [],
    deployment: Array.isArray(t.deployment) ? t.deployment[0] ?? 'cloud' : 'cloud',
    compliance: t.compliance ?? [],
    dataExport: Array.isArray(t.data_export_formats) ? t.data_export_formats.join(', ') : '',
    apiAvailable: t.api_available,
    provenanceLevel: t.provenance,
    lastVerified: t.last_verified_at ?? '',
    lastTested: t.last_tested_at ?? undefined,
    affiliateUrl: t.affiliate_url ?? '',
    badge: t.badge ?? undefined,
    switchingTriggers: t.switching_triggers ?? undefined,
    switchingBlockers: t.switching_blockers ?? undefined,
    implementationComplexity: t.implementation_complexity,
    alternatives: staticTools.find((s) => s.slug === t.slug)?.alternatives ?? [],
    changelogUrl: t.vendors?.changelog_url ?? undefined,
  };
}

function normaliseSupaCategory(c: SupaCategory): StaticCategory {
  // Try to find static match for cluster and icon (Supabase schema doesn't store these)
  const staticMatch = staticCategories.find((s) => s.slug === c.slug);
  return {
    slug: c.slug,
    name: c.name,
    description: c.description,
    cluster: staticMatch?.cluster ?? 1,
    toolCount: c.tool_count ?? 0,
    icon: c.icon ?? staticMatch?.icon ?? 'box',
  };
}

// ---------------------------------------------------------------------------
// Hybrid data functions
// ---------------------------------------------------------------------------

export async function getToolsHybrid(): Promise<StaticTool[]> {
  try {
    const supaTools = await getTools();
    if (supaTools.length > 0) {
      return supaTools.map(normaliseSupaTool);
    }
  } catch (e) {
    console.warn('[data-layer] Supabase getTools failed, using static data', e);
  }
  return staticTools;
}

export async function getToolBySlugHybrid(slug: string): Promise<StaticTool | undefined> {
  try {
    const supaTools = await getTools();
    const match = supaTools.find((t) => t.slug === slug);
    if (match) return normaliseSupaTool(match);
  } catch (e) {
    console.warn('[data-layer] Supabase getToolBySlug failed, using static data', e);
  }
  return staticTools.find((t) => t.slug === slug);
}

export async function getCategoriesHybrid(): Promise<StaticCategory[]> {
  try {
    const supaCats = await getCategories();
    if (supaCats.length > 0) {
      return supaCats.map(normaliseSupaCategory);
    }
  } catch (e) {
    console.warn('[data-layer] Supabase getCategories failed, using static data', e);
  }
  return staticCategories;
}

/**
 * Comparisons hybrid.
 *
 * The Supabase `comparisons` table has full editorial content (verdict text,
 * choose_a_if / choose_b_if, etc.) while the static `versusPairs` only has
 * slugs + a one-line summary. For the homepage, we normalise into VersusMatch
 * so the existing UI code keeps working.
 */
export async function getComparisonsHybrid(): Promise<VersusMatch[]> {
  try {
    const supaComps = await getComparisons();
    if (supaComps.length > 0) {
      return supaComps.map((c: SupaComparison) => {
        const toolASlug = c.tool_a?.slug ?? c.slug.split('-vs-')[0] ?? '';
        const toolBSlug = c.tool_b?.slug ?? c.slug.split('-vs-').slice(1).join('-vs-') ?? '';
        return {
          slugA: toolASlug,
          slugB: toolBSlug,
          verdict: c.verdict?.toLowerCase().includes('depends') ? 'depends' : toolASlug,
          summary: c.biggest_difference ?? c.verdict ?? '',
        };
      });
    }
  } catch (e) {
    console.warn('[data-layer] Supabase getComparisons failed, using static data', e);
  }
  return staticVersusPairs;
}
