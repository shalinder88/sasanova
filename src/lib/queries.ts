import { supabase } from './supabase';
import type {
  Tool,
  Category,
  PricingPlan,
  Comparison,
  Alternative,
  ChangelogEvent,
  ToolFeatureDepth,
  BuyerIntentEvent,
} from './types';

// ---------------------------------------------------------------------------
// Tools
// ---------------------------------------------------------------------------

export async function getTools(): Promise<Tool[]> {
  const { data, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url, pricing_url, changelog_url, docs_url)')
    .eq('status', 'published')
    .order('name');

  if (error) {
    console.error('getTools error:', error.message);
    return [];
  }
  return (data ?? []) as Tool[];
}

export async function getToolBySlug(slug: string) {
  const { data: tool, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url, pricing_url, changelog_url, docs_url)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !tool) {
    console.error('getToolBySlug error:', error?.message);
    return null;
  }

  const [
    { data: pricingPlans },
    { data: alternatives },
    { data: changelogEvents },
    { data: featureDepth },
  ] = await Promise.all([
    supabase
      .from('pricing_plans')
      .select('*')
      .eq('tool_id', tool.id)
      .order('sort_order'),
    supabase
      .from('alternatives')
      .select('*, alternative_tool:tools!alternatives_alternative_id_fkey(id, slug, name, tagline, score_value, score_ease, score_power, score_setup_friction, score_migration_difficulty, score_transparency, badge, has_free_tier)')
      .eq('tool_id', tool.id)
      .order('sort_order'),
    supabase
      .from('changelog_events')
      .select('*')
      .eq('tool_id', tool.id)
      .order('observed_at', { ascending: false }),
    supabase
      .from('tool_feature_depth')
      .select('*')
      .eq('tool_id', tool.id),
  ]);

  return {
    ...tool as Tool,
    pricing_plans: (pricingPlans ?? []) as PricingPlan[],
    alternatives: (alternatives ?? []) as Alternative[],
    changelog_events: (changelogEvents ?? []) as ChangelogEvent[],
    feature_depth: (featureDepth ?? []) as ToolFeatureDepth[],
  };
}

// ---------------------------------------------------------------------------
// Categories (via junction table tool_categories)
// ---------------------------------------------------------------------------

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('sort_order');

  if (error) {
    console.error('getCategories error:', error.message);
    return [];
  }

  // Get tool counts per category via tool_categories junction
  const { data: counts } = await supabase
    .from('tool_categories')
    .select('category_id');

  const countMap: Record<string, number> = {};
  (counts ?? []).forEach((row: { category_id: string }) => {
    countMap[row.category_id] = (countMap[row.category_id] || 0) + 1;
  });

  return (data ?? []).map((cat: Category) => ({
    ...cat,
    tool_count: countMap[cat.id] || 0,
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

  // Get tools via junction table
  const { data: toolLinks } = await supabase
    .from('tool_categories')
    .select('tool_id')
    .eq('category_id', category.id);

  const toolIds = (toolLinks ?? []).map((l: { tool_id: string }) => l.tool_id);

  let tools: Tool[] = [];
  if (toolIds.length > 0) {
    const { data } = await supabase
      .from('tools')
      .select('*, vendors(name, website_url)')
      .in('id', toolIds)
      .eq('status', 'published');
    tools = (data ?? []) as Tool[];
  }

  return { ...category as Category, tools };
}

// ---------------------------------------------------------------------------
// Comparisons
// ---------------------------------------------------------------------------

export async function getComparisons(): Promise<Comparison[]> {
  const { data, error } = await supabase
    .from('comparisons')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('getComparisons error:', error.message);
    return [];
  }

  // Fetch tool data for each comparison
  const toolIds = new Set<string>();
  (data ?? []).forEach((c: Comparison) => {
    toolIds.add(c.tool_a_id);
    toolIds.add(c.tool_b_id);
  });

  const { data: tools } = await supabase
    .from('tools')
    .select('id, slug, name, tagline, score_value, score_ease, score_power, score_setup_friction, score_migration_difficulty, score_transparency, badge')
    .in('id', Array.from(toolIds));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolMap = new Map((tools ?? []).map((t: any) => [t.id, t]));

  return (data ?? []).map((c: Comparison) => ({
    ...c,
    tool_a: toolMap.get(c.tool_a_id),
    tool_b: toolMap.get(c.tool_b_id),
  })) as Comparison[];
}

export async function getComparisonBySlug(slug: string) {
  const { data, error } = await supabase
    .from('comparisons')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error || !data) {
    console.error('getComparisonBySlug error:', error?.message);
    return null;
  }

  // Fetch full tool data + pricing for both tools
  const [{ data: toolA }, { data: toolB }] = await Promise.all([
    supabase.from('tools').select('*, vendors(name, website_url), pricing_plans(*)').eq('id', data.tool_a_id).single(),
    supabase.from('tools').select('*, vendors(name, website_url), pricing_plans(*)').eq('id', data.tool_b_id).single(),
  ]);

  return {
    ...(data as Comparison),
    tool_a: toolA as Tool & { pricing_plans: PricingPlan[] },
    tool_b: toolB as Tool & { pricing_plans: PricingPlan[] },
  };
}

// ---------------------------------------------------------------------------
// Alternatives
// ---------------------------------------------------------------------------

export async function getAlternatives(toolId: string): Promise<Alternative[]> {
  const { data, error } = await supabase
    .from('alternatives')
    .select('*, alternative_tool:tools!alternatives_alternative_id_fkey(id, slug, name, tagline, score_value, score_ease, score_power, score_transparency, badge, has_free_tier)')
    .eq('tool_id', toolId)
    .order('sort_order');

  if (error) {
    console.error('getAlternatives error:', error.message);
    return [];
  }
  return (data ?? []) as Alternative[];
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export async function searchTools(query: string): Promise<Tool[]> {
  const { data, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('status', 'published')
    .or(`name.ilike.%${query}%,tagline.ilike.%${query}%,description.ilike.%${query}%`)
    .limit(20);

  if (error) {
    console.error('searchTools error:', error.message);
    return [];
  }
  return (data ?? []) as Tool[];
}

// ---------------------------------------------------------------------------
// Homepage / Featured
// ---------------------------------------------------------------------------

export async function getRecentlyVerified(limit = 10): Promise<Tool[]> {
  const { data, error } = await supabase
    .from('tools')
    .select('*, vendors(name, website_url)')
    .eq('status', 'published')
    .not('last_verified_at', 'is', null)
    .order('last_verified_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('getRecentlyVerified error:', error.message);
    return [];
  }
  return (data ?? []) as Tool[];
}

export async function getFeaturedComparisons(limit = 6): Promise<Comparison[]> {
  return (await getComparisons()).slice(0, limit);
}

// ---------------------------------------------------------------------------
// Buyer Intent Events (fire-and-forget)
// ---------------------------------------------------------------------------

export async function logBuyerIntent(event: BuyerIntentEvent) {
  const { error } = await supabase
    .from('buyer_intent_events')
    .insert(event);

  if (error) {
    console.error('logBuyerIntent error:', error.message);
  }
}

// ---------------------------------------------------------------------------
// Changelog events
// ---------------------------------------------------------------------------

export async function getRecentChangelog(limit = 20): Promise<(ChangelogEvent & { tool?: Pick<Tool, 'name' | 'slug'> })[]> {
  const { data, error } = await supabase
    .from('changelog_events')
    .select('*, tools(name, slug)')
    .order('observed_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('getRecentChangelog error:', error.message);
    return [];
  }
  return (data ?? []).map((e: ChangelogEvent & { tools?: Pick<Tool, 'name' | 'slug'> }) => ({
    ...e,
    tool: e.tools,
  }));
}
