-- ============================================================
-- SASANOVA.COM — Full Data Spine Schema
-- Software Discovery + Comparison Decision Platform
-- ============================================================

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. TAXONOMY SYSTEM
-- ============================================================

CREATE TABLE taxonomy_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  version TEXT NOT NULL,
  description TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  is_current BOOLEAN DEFAULT FALSE
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  inclusion_criteria TEXT NOT NULL,
  exclusion_criteria TEXT NOT NULL,
  icon TEXT, -- emoji or icon key
  parent_id UUID REFERENCES categories(id),
  sort_order INT DEFAULT 0,
  taxonomy_version_id UUID REFERENCES taxonomy_versions(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE category_aliases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  alias TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 2. FEATURE ONTOLOGY
-- ============================================================

CREATE TABLE features (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  definition TEXT NOT NULL,
  data_type TEXT NOT NULL DEFAULT 'boolean', -- boolean, text, number, enum
  category_relevance TEXT[], -- which category slugs this applies to
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE feature_aliases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  feature_id UUID NOT NULL REFERENCES features(id) ON DELETE CASCADE,
  alias TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 3. VENDORS & TOOLS
-- ============================================================

CREATE TABLE vendors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  website_url TEXT,
  changelog_url TEXT,
  pricing_url TEXT,
  docs_url TEXT,
  status TEXT DEFAULT 'active', -- active, acquired, shutdown, renamed
  replaced_by_id UUID REFERENCES vendors(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  vendor_id UUID NOT NULL REFERENCES vendors(id),
  tagline TEXT NOT NULL,
  description TEXT NOT NULL,

  -- Editorial content
  editorial_verdict TEXT,
  best_for TEXT[] DEFAULT '{}',
  avoid_if TEXT[] DEFAULT '{}',
  hidden_costs TEXT[] DEFAULT '{}',
  migration_pain_points TEXT[] DEFAULT '{}',

  -- Multi-axis scores (1-10)
  score_value NUMERIC(3,1),
  score_ease NUMERIC(3,1),
  score_power NUMERIC(3,1),
  score_setup_friction NUMERIC(3,1),
  score_migration_difficulty NUMERIC(3,1),
  score_transparency NUMERIC(3,1),

  -- Attributes
  deployment TEXT[] DEFAULT '{}', -- cloud, self-hosted, hybrid
  platforms TEXT[] DEFAULT '{}', -- web, ios, android, desktop
  api_available BOOLEAN DEFAULT FALSE,
  sso_support BOOLEAN DEFAULT FALSE,
  compliance TEXT[] DEFAULT '{}', -- SOC2, HIPAA, GDPR, etc.
  data_export_formats TEXT[] DEFAULT '{}',

  -- Implementation
  implementation_complexity TEXT DEFAULT 'medium', -- low, medium, high
  switching_triggers TEXT[] DEFAULT '{}',
  switching_blockers TEXT[] DEFAULT '{}',

  -- Provenance & freshness
  provenance TEXT DEFAULT 'independently_verified', -- independently_verified, vendor_claimed, community_reported
  last_verified_at TIMESTAMPTZ,
  last_tested_at TIMESTAMPTZ,
  staleness_score INT DEFAULT 0, -- 0-100
  needs_review BOOLEAN DEFAULT FALSE,

  -- Meta
  badge TEXT, -- "Top Pick", "Best Value", "Rising", etc.
  affiliate_url TEXT,
  has_free_tier BOOLEAN DEFAULT FALSE,
  free_tier_limits TEXT,
  status TEXT DEFAULT 'published', -- draft, published, noindex, archived

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tool_categories (
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  is_primary BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (tool_id, category_id)
);

-- ============================================================
-- 4. PRICING SYSTEM (normalized)
-- ============================================================

CREATE TABLE pricing_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL,
  price_monthly_usd NUMERIC(10,2),
  price_annual_usd NUMERIC(10,2), -- total annual, not per-month
  billing_model TEXT DEFAULT 'per_seat', -- flat, per_seat, usage_based, hybrid, contact_sales
  seat_minimum INT DEFAULT 1,
  limits JSONB DEFAULT '{}', -- usage limits, storage, etc.
  is_free BOOLEAN DEFAULT FALSE,
  is_highlighted BOOLEAN DEFAULT FALSE,
  sort_order INT DEFAULT 0,
  source_url TEXT,
  last_verified_at TIMESTAMPTZ,
  provenance TEXT DEFAULT 'independently_verified',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 5. TOOL FEATURES (junction)
-- ============================================================

CREATE TABLE tool_features (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  feature_id UUID NOT NULL REFERENCES features(id) ON DELETE CASCADE,
  value TEXT, -- for non-boolean features
  supported BOOLEAN DEFAULT TRUE,
  notes TEXT,
  source_url TEXT,
  provenance TEXT DEFAULT 'independently_verified',
  UNIQUE(tool_id, feature_id)
);

-- ============================================================
-- 6. INTEGRATIONS
-- ============================================================

CREATE TABLE integrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_a_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  tool_b_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  integration_type TEXT DEFAULT 'native', -- native, api, zapier, make, webhook
  description TEXT,
  source_url TEXT,
  provenance TEXT DEFAULT 'independently_verified',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tool_a_id, tool_b_id)
);

-- ============================================================
-- 7. EVIDENCE & PROVENANCE SYSTEM
-- ============================================================

CREATE TABLE evidence_sources (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  source_type TEXT NOT NULL, -- pricing_page, docs, changelog, api_docs, manual_test, vendor_submission, community_report
  url TEXT,
  title TEXT,
  content_hash TEXT,
  fetched_at TIMESTAMPTZ DEFAULT NOW(),
  evidence_quality INT DEFAULT 5 -- 1-10 hierarchy
);

CREATE TABLE claims (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  field_name TEXT NOT NULL,
  claim_value TEXT NOT NULL,
  provenance TEXT NOT NULL DEFAULT 'independently_verified',
  confidence_score NUMERIC(3,2) DEFAULT 0.80,
  verified_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE claim_sources (
  claim_id UUID NOT NULL REFERENCES claims(id) ON DELETE CASCADE,
  source_id UUID NOT NULL REFERENCES evidence_sources(id) ON DELETE CASCADE,
  PRIMARY KEY (claim_id, source_id)
);

CREATE TABLE field_provenance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  field_name TEXT NOT NULL,
  provenance_type TEXT NOT NULL, -- independently_verified, vendor_claimed, community_reported
  source_id UUID REFERENCES evidence_sources(id),
  confidence_score NUMERIC(3,2) DEFAULT 0.80,
  verified_at TIMESTAMPTZ,
  UNIQUE(tool_id, field_name)
);

-- ============================================================
-- 8. CHANGELOG & SNAPSHOTS
-- ============================================================

CREATE TABLE changelog_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- pricing_change, feature_added, feature_removed, plan_renamed, plan_discontinued, acquisition, rebrand
  summary TEXT NOT NULL,
  details JSONB DEFAULT '{}',
  source_id UUID REFERENCES evidence_sources(id),
  observed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE tool_snapshots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  snapshot_data JSONB NOT NULL, -- frozen state of pricing, features, scores
  snapshot_reason TEXT, -- scheduled, price_change, feature_update, manual
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 9. COMPARISONS
-- ============================================================

CREATE TABLE comparisons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_a_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  tool_b_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  slug TEXT UNIQUE NOT NULL, -- e.g. "notion-vs-obsidian"
  verdict TEXT NOT NULL, -- editorial conclusion
  choose_a_if TEXT[] DEFAULT '{}',
  choose_b_if TEXT[] DEFAULT '{}',
  biggest_difference TEXT,
  where_both_weak TEXT,
  switching_cost_summary TEXT,
  status TEXT DEFAULT 'published',
  last_verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tool_a_id, tool_b_id)
);

-- ============================================================
-- 10. ALTERNATIVES
-- ============================================================

CREATE TABLE alternatives (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  alternative_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  reason TEXT, -- why this is an alternative
  migration_ease TEXT DEFAULT 'medium', -- easy, medium, hard
  sort_order INT DEFAULT 0,
  UNIQUE(tool_id, alternative_id)
);

-- ============================================================
-- 11. VENDOR CORRECTIONS
-- ============================================================

CREATE TABLE vendor_updates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  submitted_by TEXT,
  submitted_email TEXT,
  field_name TEXT NOT NULL,
  old_value TEXT,
  proposed_value TEXT NOT NULL,
  evidence_url TEXT,
  evidence_type TEXT,
  provenance_status TEXT DEFAULT 'vendor_claimed',
  review_status TEXT DEFAULT 'pending', -- pending, approved, rejected, superseded
  reviewed_by TEXT,
  reviewed_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 12. EXCLUSION LOGS
-- ============================================================

CREATE TABLE exclusion_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  context TEXT NOT NULL, -- e.g. "best-email-marketing"
  reason_code TEXT NOT NULL, -- too_expensive, weak_portability, narrow_fit, poor_onboarding, etc.
  explanation TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 13. SCORING GOVERNANCE
-- ============================================================

CREATE TABLE score_models (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  version TEXT NOT NULL,
  description TEXT NOT NULL,
  axes JSONB NOT NULL, -- defines each score axis, weight, evidence requirements
  is_current BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 14. BEST-OF PAGES
-- ============================================================

CREATE TABLE best_of_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category_id UUID REFERENCES categories(id),
  description TEXT NOT NULL,
  decision_tree JSONB, -- structured decision guidance
  common_mistakes TEXT[] DEFAULT '{}',
  why_excluded JSONB DEFAULT '{}', -- tool_id -> reason
  tool_ids UUID[] DEFAULT '{}', -- ordered list of featured tools
  status TEXT DEFAULT 'published',
  last_verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 15. GUIDES
-- ============================================================

CREATE TABLE guides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT,
  content_markdown TEXT NOT NULL,
  read_time TEXT,
  tool_ids UUID[] DEFAULT '{}',
  status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 16. NEWSLETTER SUBSCRIBERS (minimal PII)
-- ============================================================

CREATE TABLE newsletter_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  source_page TEXT, -- which page they signed up from
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 17. INDEXES
-- ============================================================

CREATE INDEX idx_tools_slug ON tools(slug);
CREATE INDEX idx_tools_status ON tools(status);
CREATE INDEX idx_tools_staleness ON tools(staleness_score);
CREATE INDEX idx_tools_needs_review ON tools(needs_review);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_pricing_tool ON pricing_plans(tool_id);
CREATE INDEX idx_tool_features_tool ON tool_features(tool_id);
CREATE INDEX idx_changelog_tool ON changelog_events(tool_id);
CREATE INDEX idx_comparisons_slug ON comparisons(slug);
CREATE INDEX idx_alternatives_tool ON alternatives(tool_id);
CREATE INDEX idx_claims_tool ON claims(tool_id);
CREATE INDEX idx_vendor_updates_status ON vendor_updates(review_status);
CREATE INDEX idx_exclusion_tool ON exclusion_logs(tool_id);

-- ============================================================
-- 18. ROW LEVEL SECURITY (basic)
-- ============================================================

ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE pricing_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE features ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE comparisons ENABLE ROW LEVEL SECURITY;
ALTER TABLE alternatives ENABLE ROW LEVEL SECURITY;
ALTER TABLE changelog_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidence_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE guides ENABLE ROW LEVEL SECURITY;
ALTER TABLE best_of_pages ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read tools" ON tools FOR SELECT USING (status = 'published');
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read pricing" ON pricing_plans FOR SELECT USING (true);
CREATE POLICY "Public read features" ON features FOR SELECT USING (true);
CREATE POLICY "Public read tool_features" ON tool_features FOR SELECT USING (true);
CREATE POLICY "Public read comparisons" ON comparisons FOR SELECT USING (status = 'published');
CREATE POLICY "Public read alternatives" ON alternatives FOR SELECT USING (true);
CREATE POLICY "Public read changelog" ON changelog_events FOR SELECT USING (true);
CREATE POLICY "Public read evidence" ON evidence_sources FOR SELECT USING (true);
CREATE POLICY "Public read guides" ON guides FOR SELECT USING (status = 'published');
CREATE POLICY "Public read best_of" ON best_of_pages FOR SELECT USING (status = 'published');

-- Newsletter insert only (no read from client)
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Insert newsletter" ON newsletter_signups FOR INSERT WITH CHECK (true);
