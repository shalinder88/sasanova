// Types matching the actual Supabase schema for Sasanova

export interface Vendor {
  id: string;
  name: string;
  website_url: string | null;
  changelog_url: string | null;
  pricing_url: string | null;
  docs_url: string | null;
  status: 'active' | 'acquired' | 'shutdown' | 'renamed';
  replaced_by_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  vendor_id: string;
  tagline: string;
  description: string;

  // Editorial
  editorial_verdict: string | null;
  best_for: string[];
  avoid_if: string[];
  hidden_costs: string[];
  migration_pain_points: string[];

  // Multi-axis scores (1-10)
  score_value: number | null;
  score_ease: number | null;
  score_power: number | null;
  score_setup_friction: number | null;
  score_migration_difficulty: number | null;
  score_transparency: number | null;

  // Attributes
  deployment: string[];
  platforms: string[];
  api_available: boolean;
  sso_support: boolean;
  compliance: string[];
  data_export_formats: string[];

  // Implementation
  implementation_complexity: 'low' | 'medium' | 'high';
  switching_triggers: string[];
  switching_blockers: string[];

  // Provenance & freshness
  provenance: 'independently_verified' | 'vendor_claimed' | 'community_reported';
  last_verified_at: string | null;
  last_tested_at: string | null;
  staleness_score: number;
  needs_review: boolean;

  // Meta
  badge: string | null;
  affiliate_url: string | null;
  has_free_tier: boolean;
  free_tier_limits: string | null;
  status: 'draft' | 'published' | 'noindex' | 'archived';

  created_at: string;
  updated_at: string;

  // Joined relations
  vendors?: Pick<Vendor, 'name' | 'website_url' | 'pricing_url' | 'changelog_url' | 'docs_url'>;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  inclusion_criteria: string;
  exclusion_criteria: string;
  icon: string | null;
  parent_id: string | null;
  sort_order: number;
  taxonomy_version_id: string | null;
  created_at: string;
  updated_at: string;
  tool_count?: number;
}

export interface PricingPlan {
  id: string;
  tool_id: string;
  plan_name: string;
  price_monthly_usd: number | null;
  price_annual_usd: number | null;
  billing_model: 'flat' | 'per_seat' | 'usage_based' | 'hybrid' | 'contact_sales';
  seat_minimum: number;
  limits: Record<string, unknown>;
  is_free: boolean;
  is_highlighted: boolean;
  sort_order: number;
  source_url: string | null;
  last_verified_at: string | null;
  provenance: string;
  created_at: string;
  updated_at: string;
}

export interface Comparison {
  id: string;
  tool_a_id: string;
  tool_b_id: string;
  slug: string;
  verdict: string;
  choose_a_if: string[];
  choose_b_if: string[];
  biggest_difference: string | null;
  where_both_weak: string | null;
  switching_cost_summary: string | null;
  status: 'published' | 'draft';
  last_verified_at: string | null;
  created_at: string;
  updated_at: string;

  // Joined
  tool_a?: Tool;
  tool_b?: Tool;
}

export interface Alternative {
  id: string;
  tool_id: string;
  alternative_id: string;
  reason: string | null;
  migration_ease: 'easy' | 'medium' | 'hard';
  sort_order: number;

  // Joined
  alternative_tool?: Tool;
}

export interface ChangelogEvent {
  id: string;
  tool_id: string;
  event_type: string;
  summary: string;
  details: Record<string, unknown>;
  source_id: string | null;
  observed_at: string;
  created_at: string;
}

export interface ToolFeatureDepth {
  id: string;
  tool_id: string;
  feature_key: string;
  support_level: 'full' | 'partial' | 'limited' | 'beta' | 'addon' | 'enterprise_only' | 'none';
  plan_gating: string | null;
  setup_burden: 'low' | 'medium' | 'high';
  depth_notes: string | null;
  limitations: string | null;
  source_url: string | null;
  provenance: string;
  last_verified_at: string | null;
}

export interface BuyerIntentEvent {
  session_id: string;
  event_type: 'profile_view' | 'compare_view' | 'alternatives_view' | 'pricing_view' | 'shortlist_add' | 'shortlist_export' | 'cta_click' | 'search' | 'filter_use' | 'feature_expand';
  tool_id?: string;
  tool_b_id?: string;
  category_slug?: string;
  metadata?: Record<string, unknown>;
  page_path?: string;
}

export interface PageIndexStatus {
  id: string;
  page_type: string;
  page_slug: string;
  index_status: 'noindex' | 'index' | 'pending_review';
  completeness_score: number;
  source_count: number;
  internal_links_count: number;
  has_editorial_verdict: boolean;
  has_pricing: boolean;
  has_alternatives: boolean;
  last_quality_check: string | null;
  approved_by: string | null;
  approved_at: string | null;
}

// Helper: compute weighted overall score
export function getOverallScore(tool: Pick<Tool, 'score_value' | 'score_ease' | 'score_power' | 'score_setup_friction' | 'score_migration_difficulty' | 'score_transparency'>): number {
  const v = tool.score_value ?? 0;
  const e = tool.score_ease ?? 0;
  const p = tool.score_power ?? 0;
  const sf = tool.score_setup_friction ?? 0;
  const md = tool.score_migration_difficulty ?? 0;
  const t = tool.score_transparency ?? 0;

  const score = v * 0.25 + e * 0.15 + p * 0.20 + sf * 0.10 + md * 0.10 + t * 0.20;
  return Math.round(score * 10) / 10;
}
