export interface Vendor {
  id: string;
  name: string;
  website_url: string;
  logo_url: string | null;
  description: string | null;
  founded_year: number | null;
  headquarters: string | null;
  created_at: string;
  updated_at: string;
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo_url: string | null;
  screenshot_url: string | null;
  website_url: string;
  vendor_id: string;
  category_id: string;
  score_overall: number | null;
  score_features: number | null;
  score_ease_of_use: number | null;
  score_value: number | null;
  score_support: number | null;
  best_for: string[];
  avoid_if: string[];
  hidden_costs: string[];
  pros: string[];
  cons: string[];
  is_published: boolean;
  last_verified_at: string | null;
  created_at: string;
  updated_at: string;
  vendors?: Pick<Vendor, 'name' | 'website_url'>;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  icon: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
  tool_count?: number;
}

export interface PricingPlan {
  id: string;
  tool_id: string;
  name: string;
  price: number | null;
  billing_period: string | null;
  currency: string;
  features: string[];
  limitations: string[];
  is_free: boolean;
  is_popular: boolean;
  sort_order: number;
  cta_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Comparison {
  id: string;
  slug: string;
  tool_a_id: string;
  tool_b_id: string;
  title: string;
  summary: string | null;
  verdict: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  tool_a?: Pick<Tool, 'name' | 'slug' | 'score_overall' | 'logo_url'>;
  tool_b?: Pick<Tool, 'name' | 'slug' | 'score_overall' | 'logo_url'>;
}

export interface Alternative {
  id: string;
  tool_id: string;
  alternative_tool_id: string;
  reason: string | null;
  sort_order: number;
  created_at: string;
  updated_at: string;
  alternative_tool?: Tool;
}

export interface ChangelogEvent {
  id: string;
  tool_id: string;
  event_type: string;
  title: string;
  description: string | null;
  event_date: string;
  source_url: string | null;
  created_at: string;
  updated_at: string;
}
