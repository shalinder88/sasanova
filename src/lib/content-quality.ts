/**
 * Sasanova Content Quality System
 *
 * Controls voice, structure, and quality for every content type.
 * Goal: high-specificity, judgment-rich, source-backed editorial writing
 * that avoids generic symmetry, filler phrases, and unsupported certainty.
 */

// ============================================================
// VOICE PACKS
// ============================================================

export type JudgmentLevel = 'low' | 'medium' | 'medium_high' | 'high';
export type SpecificityLevel = 'medium' | 'high' | 'very_high';
export type EvidenceDensity = 'medium' | 'high' | 'very_high';
export type HedgingLevel = 'low' | 'low_medium' | 'medium' | 'medium_high';
export type SentenceRhythm = 'tight' | 'varied' | 'analytical' | 'punchy' | 'longform_editorial';
export type ParagraphDensity = 'tight' | 'medium' | 'varied';
export type AdjectiveTolerance = 'very_low' | 'low' | 'medium';

export interface VoicePack {
  name: string;
  judgment: JudgmentLevel;
  specificity: SpecificityLevel;
  evidence_density: EvidenceDensity;
  friction_honesty: JudgmentLevel;
  hedging: HedgingLevel;
  contractions: 'low' | 'medium' | 'high';
  sentence_rhythm: SentenceRhythm;
  paragraph_density: ParagraphDensity;
  adjective_tolerance: AdjectiveTolerance;
  counterargument_required: boolean;
  allow_first_person: boolean;
  allow_strong_opinion: boolean;
}

export const voicePacks: Record<string, VoicePack> = {
  review_analyst: {
    name: "Review Analyst",
    judgment: 'high',
    specificity: 'very_high',
    evidence_density: 'high',
    friction_honesty: 'high',
    hedging: 'medium',
    contractions: 'low',
    sentence_rhythm: 'varied',
    paragraph_density: 'medium',
    adjective_tolerance: 'low',
    counterargument_required: true,
    allow_first_person: false,
    allow_strong_opinion: true,
  },
  editorial_blog: {
    name: "Editorial Blog",
    judgment: 'medium_high',
    specificity: 'high',
    evidence_density: 'medium',
    friction_honesty: 'medium_high',
    hedging: 'low_medium',
    contractions: 'medium',
    sentence_rhythm: 'varied',
    paragraph_density: 'varied',
    adjective_tolerance: 'low',
    counterargument_required: true,
    allow_first_person: true,
    allow_strong_opinion: true,
  },
  update_bulletin: {
    name: "Update Bulletin",
    judgment: 'low',
    specificity: 'very_high',
    evidence_density: 'very_high',
    friction_honesty: 'medium',
    hedging: 'low',
    contractions: 'low',
    sentence_rhythm: 'tight',
    paragraph_density: 'tight',
    adjective_tolerance: 'very_low',
    counterargument_required: false,
    allow_first_person: false,
    allow_strong_opinion: false,
  },
  operator_guide: {
    name: "Operator Guide",
    judgment: 'medium',
    specificity: 'very_high',
    evidence_density: 'medium',
    friction_honesty: 'high',
    hedging: 'low',
    contractions: 'high',
    sentence_rhythm: 'punchy',
    paragraph_density: 'tight',
    adjective_tolerance: 'low',
    counterargument_required: false,
    allow_first_person: true,
    allow_strong_opinion: true,
  },
  procurement: {
    name: "Procurement Voice",
    judgment: 'medium',
    specificity: 'very_high',
    evidence_density: 'very_high',
    friction_honesty: 'high',
    hedging: 'medium',
    contractions: 'low',
    sentence_rhythm: 'analytical',
    paragraph_density: 'medium',
    adjective_tolerance: 'very_low',
    counterargument_required: true,
    allow_first_person: false,
    allow_strong_opinion: false,
  },
};

// ============================================================
// CONTENT TYPES
// ============================================================

export interface ContentTypeSpec {
  name: string;
  voice_pack: string;
  required_sections: string[];
  forbidden_patterns: string[];
  min_evidence_count: number;
  min_unique_insights: number;
  min_concrete_details: number;
  min_word_count: number;
  max_word_count: number;
  must_have_exclusions: boolean;
  must_have_verdict: boolean;
  must_have_best_for: boolean;
  must_have_avoid_if: boolean;
  must_have_pricing: boolean;
  must_have_alternatives: boolean;
}

export const contentTypes: Record<string, ContentTypeSpec> = {
  tool_review: {
    name: "Tool Review",
    voice_pack: 'review_analyst',
    required_sections: ['verdict', 'scores', 'best_for', 'avoid_if', 'pricing_reality', 'setup_friction', 'what_competitors_do_better', 'hidden_gotchas', 'switching_intelligence'],
    forbidden_patterns: [],
    min_evidence_count: 3,
    min_unique_insights: 2,
    min_concrete_details: 10,
    min_word_count: 800,
    max_word_count: 2500,
    must_have_exclusions: false,
    must_have_verdict: true,
    must_have_best_for: true,
    must_have_avoid_if: true,
    must_have_pricing: true,
    must_have_alternatives: true,
  },
  versus_comparison: {
    name: "Versus Comparison",
    voice_pack: 'review_analyst',
    required_sections: ['direct_answer', 'biggest_difference', 'choose_a_if', 'choose_b_if', 'pricing_delta', 'migration_note', 'verdict'],
    forbidden_patterns: [],
    min_evidence_count: 4,
    min_unique_insights: 2,
    min_concrete_details: 12,
    min_word_count: 1000,
    max_word_count: 3000,
    must_have_exclusions: false,
    must_have_verdict: true,
    must_have_best_for: true,
    must_have_avoid_if: true,
    must_have_pricing: true,
    must_have_alternatives: false,
  },
  best_of_guide: {
    name: "Best-Of Buyer Guide",
    voice_pack: 'editorial_blog',
    required_sections: ['top_pick_with_reason', 'runner_up', 'decision_tree', 'common_mistakes', 'why_excluded', 'who_this_is_not_for'],
    forbidden_patterns: [],
    min_evidence_count: 5,
    min_unique_insights: 3,
    min_concrete_details: 15,
    min_word_count: 1200,
    max_word_count: 3500,
    must_have_exclusions: true,
    must_have_verdict: true,
    must_have_best_for: true,
    must_have_avoid_if: true,
    must_have_pricing: true,
    must_have_alternatives: true,
  },
  alternatives_page: {
    name: "Alternatives Page",
    voice_pack: 'review_analyst',
    required_sections: ['why_people_leave', 'cheapest_replacement', 'easiest_replacement', 'closest_match', 'upgrade_path'],
    forbidden_patterns: [],
    min_evidence_count: 3,
    min_unique_insights: 2,
    min_concrete_details: 8,
    min_word_count: 600,
    max_word_count: 2000,
    must_have_exclusions: false,
    must_have_verdict: false,
    must_have_best_for: true,
    must_have_avoid_if: false,
    must_have_pricing: true,
    must_have_alternatives: true,
  },
  pricing_page: {
    name: "Pricing Page",
    voice_pack: 'procurement',
    required_sections: ['tier_breakdown', 'effective_monthly_cost', 'seat_logic', 'hidden_costs', 'upgrade_triggers', 'when_pricing_stops_making_sense'],
    forbidden_patterns: [],
    min_evidence_count: 2,
    min_unique_insights: 2,
    min_concrete_details: 10,
    min_word_count: 500,
    max_word_count: 1500,
    must_have_exclusions: false,
    must_have_verdict: false,
    must_have_best_for: false,
    must_have_avoid_if: false,
    must_have_pricing: true,
    must_have_alternatives: false,
  },
  workflow_guide: {
    name: "Workflow / Stack Guide",
    voice_pack: 'operator_guide',
    required_sections: ['problem', 'recommended_stack', 'cheaper_alternative', 'heavier_duty_option', 'implementation_sequence', 'cost_estimate', 'tradeoffs'],
    forbidden_patterns: [],
    min_evidence_count: 2,
    min_unique_insights: 2,
    min_concrete_details: 8,
    min_word_count: 800,
    max_word_count: 2500,
    must_have_exclusions: false,
    must_have_verdict: false,
    must_have_best_for: true,
    must_have_avoid_if: true,
    must_have_pricing: true,
    must_have_alternatives: true,
  },
  update_article: {
    name: "Update / Changelog Article",
    voice_pack: 'update_bulletin',
    required_sections: ['what_changed', 'why_it_matters', 'who_is_affected', 'source_link'],
    forbidden_patterns: [],
    min_evidence_count: 1,
    min_unique_insights: 1,
    min_concrete_details: 5,
    min_word_count: 200,
    max_word_count: 800,
    must_have_exclusions: false,
    must_have_verdict: false,
    must_have_best_for: false,
    must_have_avoid_if: false,
    must_have_pricing: false,
    must_have_alternatives: false,
  },
};

// ============================================================
// AI-STYLE WRITING LINTER
// ============================================================

export interface LintResult {
  passed: boolean;
  score: number; // 0-100
  issues: LintIssue[];
}

export interface LintIssue {
  severity: 'error' | 'warning' | 'info';
  rule: string;
  message: string;
  suggestion?: string;
}

// Blacklisted filler phrases that signal AI-generated content
const FILLER_BLACKLIST = [
  'in today\'s fast-paced world',
  'in today\'s digital landscape',
  'whether you\'re a solo founder or',
  'whether you\'re a small team or',
  'powerful solution',
  'robust feature set',
  'robust platform',
  'seamless integration',
  'seamlessly integrates',
  'user-friendly interface',
  'intuitive interface',
  'ever-evolving landscape',
  'rapidly evolving',
  'game changer',
  'game-changer',
  'unlock the power of',
  'take your business to the next level',
  'streamline your workflow',
  'one-stop shop',
  'best-in-class',
  'cutting-edge',
  'state-of-the-art',
  'next-generation',
  'all-in-one solution',
  'comprehensive suite',
  'holistic approach',
  'synergy',
  'leverage the power',
  'harness the potential',
  'elevate your',
  'supercharge your',
  'turbocharge your',
  'revolutionize your',
  'transform your',
  'empower your',
  'delve into',
  'dive deep into',
  'navigate the complexities',
  'at the end of the day',
  'it goes without saying',
  'needless to say',
  'it\'s worth noting',
  'it bears mentioning',
];

// Overused adjectives that need justification
const ADJECTIVE_WATCHLIST = [
  'powerful',
  'robust',
  'seamless',
  'intuitive',
  'comprehensive',
  'innovative',
  'versatile',
  'dynamic',
  'scalable',
  'flexible',
  'efficient',
  'sophisticated',
  'elegant',
  'remarkable',
  'impressive',
  'exceptional',
  'outstanding',
  'unparalleled',
];

// Over-signposting transitions
const SIGNPOST_WATCHLIST = [
  'in conclusion',
  'ultimately',
  'that said',
  'that being said',
  'on the other hand',
  'furthermore',
  'additionally',
  'moreover',
  'in summary',
  'to sum up',
  'all in all',
  'when all is said and done',
  'at the end of the day',
  'having said that',
  'with that in mind',
  'it\'s important to note',
  'it should be noted',
];

export function lintContent(text: string, contentType: string): LintResult {
  const spec = contentTypes[contentType];
  const issues: LintIssue[] = [];
  const lowerText = text.toLowerCase();
  const words = text.split(/\s+/).length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);

  // 1. Check filler phrases
  for (const phrase of FILLER_BLACKLIST) {
    if (lowerText.includes(phrase)) {
      issues.push({
        severity: 'error',
        rule: 'no_filler',
        message: `Contains AI filler phrase: "${phrase}"`,
        suggestion: 'Remove or replace with a specific, evidence-backed claim.',
      });
    }
  }

  // 2. Check overused adjectives
  let adjCount = 0;
  for (const adj of ADJECTIVE_WATCHLIST) {
    const regex = new RegExp(`\\b${adj}\\b`, 'gi');
    const matches = text.match(regex);
    if (matches && matches.length > 0) {
      adjCount += matches.length;
      if (matches.length > 1) {
        issues.push({
          severity: 'warning',
          rule: 'adjective_overuse',
          message: `"${adj}" used ${matches.length} times. Each use needs justification with evidence.`,
        });
      }
    }
  }
  if (adjCount > words / 100) {
    issues.push({
      severity: 'warning',
      rule: 'adjective_density',
      message: `High density of watchlist adjectives (${adjCount} in ${words} words).`,
    });
  }

  // 3. Check signpost overuse
  let signpostCount = 0;
  for (const sp of SIGNPOST_WATCHLIST) {
    if (lowerText.includes(sp)) signpostCount++;
  }
  if (signpostCount > 3) {
    issues.push({
      severity: 'warning',
      rule: 'over_signposting',
      message: `${signpostCount} transition/signpost phrases detected. Real editorial writing is tighter.`,
    });
  }

  // 4. Check sentence rhythm (all similar length = AI)
  if (sentences.length > 5) {
    const lengths = sentences.map(s => s.trim().split(/\s+/).length);
    const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
    const variance = lengths.reduce((sum, l) => sum + Math.pow(l - avg, 2), 0) / lengths.length;
    if (variance < 15 && avg > 10) {
      issues.push({
        severity: 'warning',
        rule: 'flat_rhythm',
        message: 'Sentence lengths are too uniform. Mix short punchy sentences with longer analytical ones.',
      });
    }
  }

  // 5. Check repeated sentence openings
  if (sentences.length > 4) {
    const openings = sentences.map(s => s.trim().split(/\s+/).slice(0, 3).join(' ').toLowerCase());
    const openingCounts = new Map<string, number>();
    for (const o of openings) {
      openingCounts.set(o, (openingCounts.get(o) || 0) + 1);
    }
    for (const [opening, count] of openingCounts) {
      if (count > 2) {
        issues.push({
          severity: 'warning',
          rule: 'repeated_opening',
          message: `"${opening}..." used to start ${count} sentences. Vary your openings.`,
        });
      }
    }
  }

  // 6. Check word count (if spec provided)
  if (spec) {
    if (words < spec.min_word_count) {
      issues.push({
        severity: 'error',
        rule: 'too_short',
        message: `${words} words. Minimum for ${spec.name}: ${spec.min_word_count}.`,
      });
    }
    if (words > spec.max_word_count) {
      issues.push({
        severity: 'warning',
        rule: 'too_long',
        message: `${words} words exceeds ${spec.max_word_count} max for ${spec.name}. Trim fluff.`,
      });
    }
  }

  // 7. Check fake certainty (superlatives without evidence)
  const superlatives = text.match(/\b(best|fastest|easiest|cheapest|most powerful|most popular)\b/gi) || [];
  if (superlatives.length > 2) {
    issues.push({
      severity: 'warning',
      rule: 'fake_certainty',
      message: `${superlatives.length} superlatives found. Each needs qualifying evidence or context.`,
    });
  }

  // 8. Check empty balance (every section equally positive = sus)
  // Simple heuristic: if no negative/critical language at all
  const criticalWords = ['however', 'but', 'downside', 'weak', 'lacks', 'missing', 'limited', 'expensive', 'frustrat', 'clunky', 'slow', 'confus'];
  const hasCriticism = criticalWords.some(w => lowerText.includes(w));
  if (!hasCriticism && words > 300) {
    issues.push({
      severity: 'error',
      rule: 'no_criticism',
      message: 'No critical or balanced assessment detected. Real reviews include downsides.',
    });
  }

  // 9. Check concrete nouns density
  const numbers = (text.match(/\$[\d,.]+|\d+%|\d+ (users?|seats?|contacts?|subscribers?|minutes?|hours?|days?|months?|GB|MB|TB)/g) || []).length;
  if (numbers < 3 && words > 400) {
    issues.push({
      severity: 'warning',
      rule: 'low_specifics',
      message: `Only ${numbers} concrete numbers/quantities found. Add plan names, prices, limits, team sizes.`,
    });
  }

  // Score calculation
  const errorCount = issues.filter(i => i.severity === 'error').length;
  const warningCount = issues.filter(i => i.severity === 'warning').length;
  const score = Math.max(0, 100 - (errorCount * 15) - (warningCount * 5));

  return {
    passed: errorCount === 0 && score >= 60,
    score,
    issues,
  };
}

// ============================================================
// CONTENT ARTICLE METADATA
// ============================================================

export interface ArticleMetadata {
  content_type: string;
  audience: string;
  buyer_stage: 'exploring' | 'narrowing' | 'comparing' | 'validating' | 'switching' | 'deploying';
  primary_intent: string;
  category: string;
  tools_covered: string[];
  thesis: string;
  angle: string;
  why_this_article_exists: string;
  who_this_is_not_for: string;
  contrarian_take?: string;
  most_common_buyer_mistake?: string;
  overrated_feature?: string;
  underrated_feature?: string;
  hidden_cost?: string;
  hard_truth?: string;
}

// ============================================================
// EDITORIAL QA SCORING
// ============================================================

export interface QAScore {
  specificity: number;      // 1-10
  evidence: number;         // 1-10
  originality: number;      // 1-10
  decisiveness: number;     // 1-10
  usefulness: number;       // 1-10
  scannability: number;     // 1-10
  non_genericity: number;   // 1-10
  exclusion_quality: number; // 1-10
  buyer_usefulness: number;  // 1-10
  trustworthiness: number;   // 1-10
  overall: number;           // average
  publish_ready: boolean;    // >= 7.0 average
}

export function computeQAScore(scores: Omit<QAScore, 'overall' | 'publish_ready'>): QAScore {
  const values = [
    scores.specificity,
    scores.evidence,
    scores.originality,
    scores.decisiveness,
    scores.usefulness,
    scores.scannability,
    scores.non_genericity,
    scores.exclusion_quality,
    scores.buyer_usefulness,
    scores.trustworthiness,
  ];
  const overall = Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10;
  return {
    ...scores,
    overall,
    publish_ready: overall >= 7.0,
  };
}
