import { supabase } from './supabase';
import type {
  Tool,
  Category,
  PricingPlan,
  Comparison,
  Alternative,
  ChangelogEvent,
} from './types';

// ---------------------------------------------------------------------------
// Tools
// ---------------------------------------------------------------------------

export async function getTools(): Promise<Tool[]> {
  const { data, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('is_published', true)
    .order('name');

  if (error) {
    console.error('getTools error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getToolBySlug(slug: string) {
  const { data: tool, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('slug', slug)
    .single();

  if (error || !tool) {
    console.error('getToolBySlug error:', error?.message);
    return null;
  }

  const [
    { data: pricingPlans },
    { data: alternatives },
    { data: changelogEvents },
  ] = await Promise.all([
    supabase
      .from('pricing_plans')
      .select('*')
      .eq('tool_id', tool.id)
      .order('sort_order'),
    supabase
      .from('alternatives')
      .select('*, alternative_tool:tools!alternatives_alternative_tool_id_fkey(*)')
      .eq('tool_id', tool.id)
      .order('sort_order'),
    supabase
      .from('changelog_events')
      .select('*')
      .eq('tool_id', tool.id)
      .order('event_date', { ascending: false }),
  ]);

  return {
    ...tool,
    pricing_plans: (pricingPlans ?? []) as PricingPlan[],
    alternatives: (alternatives ?? []) as Alternative[],
    changelog_events: (changelogEvents ?? []) as ChangelogEvent[],
  };
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export async function getCategories(): Promise<(Category & { tool_count: number })[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*, tools(count)')
    .order('sort_order');

  if (error) {
    console.error('getCategories error:', error.message);
    return [];
  }

  return (data ?? []).map((cat: any) => ({
    ...cat,
    tool_count: cat.tools?.[0]?.count ?? 0,
  }));
}

export async function getCategoryBySlug(slug: string) {
  const { data: category, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !category) {
    console.error('getCategoryBySlug error:', error?.message);
    return null;
  }

  const { data: tools } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('category_id', category.id)
    .eq('is_published', true)
    .order('name');

  return {
    ...category,
    tools: (tools ?? []) as Tool[],
  };
}

// ---------------------------------------------------------------------------
// Comparisons
// ---------------------------------------------------------------------------

export async function getComparisons(): Promise<Comparison[]> {
  const { data, error } = await supabase
    .from('comparisons')
    .select(
      `*,
      tool_a:tools!comparisons_tool_a_id_fkey(name, slug, score_overall, logo_url),
      tool_b:tools!comparisons_tool_b_id_fkey(name, slug, score_overall, logo_url)`
    )
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('getComparisons error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getComparisonBySlug(slug: string) {
  const { data, error } = await supabase
    .from('comparisons')
    .select(
      `*,
      tool_a:tools!comparisons_tool_a_id_fkey(*, vendors(name, website_url), pricing_plans:pricing_plans(*)  ),
      tool_b:tools!comparisons_tool_b_id_fkey(*, vendors(name, website_url), pricing_plans:pricing_plans(*)  )`
    )
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error('getComparisonBySlug error:', error?.message);
    return null;
  }
  return data;
}

// ---------------------------------------------------------------------------
// Alternatives
// ---------------------------------------------------------------------------

export async function getAlternatives(toolId: string): Promise<Alternative[]> {
  const { data, error } = await supabase
    .from('alternatives')
    .select('*, alternative_tool:tools!alternatives_alternative_tool_id_fkey(*)')
    .eq('tool_id', toolId)
    .order('sort_order');

  if (error) {
    console.error('getAlternatives error:', error.message);
    return [];
  }
  return data ?? [];
}

// ---------------------------------------------------------------------------
// Filtered / Search queries
// ---------------------------------------------------------------------------

export async function getToolsByCategory(categorySlug: string): Promise<Tool[]> {
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .single();

  if (!category) return [];

  const { data, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('category_id', category.id)
    .eq('is_published', true)
    .order('name');

  if (error) {
    console.error('getToolsByCategory error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function searchTools(query: string): Promise<Tool[]> {
  const { data, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('is_published', true)
    .or(`name.ilike.%${query}%,tagline.ilike.%${query}%,description.ilike.%${query}%`)
    .order('score_overall', { ascending: false, nullsFirst: false })
    .limit(20);

  if (error) {
    console.error('searchTools error:', error.message);
    return [];
  }
  return data ?? [];
}

// ---------------------------------------------------------------------------
// Homepage / Featured queries
// ---------------------------------------------------------------------------

export async function getRecentlyVerified(limit = 10): Promise<Tool[]> {
  const { data, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('is_published', true)
    .not('last_verified_at', 'is', null)
    .order('last_verified_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('getRecentlyVerified error:', error.message);
    return [];
  }
  return data ?? [];
}

export async function getFeaturedComparisons(limit = 6): Promise<Comparison[]> {
  const { data, error } = await supabase
    .from('comparisons')
    .select(
      `*,
      tool_a:tools!comparisons_tool_a_id_fkey(name, slug, score_overall, logo_url),
      tool_b:tools!comparisons_tool_b_id_fkey(name, slug, score_overall, logo_url)`
    )
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('getFeaturedComparisons error:', error.message);
    return [];
  }
  return data ?? [];
}
