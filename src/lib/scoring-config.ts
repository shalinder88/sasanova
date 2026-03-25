/**
 * SINGLE SOURCE OF TRUTH for Sasanova scoring weights.
 *
 * Every page, component, and function that references scoring weights
 * MUST import from this file. No hardcoded weight values elsewhere.
 *
 * Methodology: https://sasanova.com/about/methodology
 */

export const SCORING_WEIGHTS = {
  value: 0.25,
  ease: 0.15,
  power: 0.20,
  setupFriction: 0.10,
  migrationDifficulty: 0.10,
  transparency: 0.20,
} as const;

export const SCORING_LABELS: Record<keyof typeof SCORING_WEIGHTS, string> = {
  value: "Value",
  ease: "Ease of Use",
  power: "Power & Features",
  setupFriction: "Setup Friction",
  migrationDifficulty: "Migration Difficulty",
  transparency: "Transparency",
};

export const SCORING_DESCRIPTIONS: Record<keyof typeof SCORING_WEIGHTS, string> = {
  value: "How much you get relative to what you pay",
  ease: "How quickly a new user becomes productive",
  power: "Depth and breadth of features for advanced use cases",
  setupFriction: "How much effort initial setup requires (lower is better)",
  migrationDifficulty: "How hard it is to switch away (lower is better)",
  transparency: "How clearly the vendor communicates pricing, limits, and changes",
};

/** Human-readable weight string, e.g. "Value 25%, Ease 15%, ..." */
export function weightsSummary(): string {
  return Object.entries(SCORING_WEIGHTS)
    .map(([key, weight]) => `${SCORING_LABELS[key as keyof typeof SCORING_WEIGHTS]} ${Math.round(weight * 100)}%`)
    .join(", ");
}

/** Calculate overall score from individual scores using canonical weights */
export function calculateOverallScore(scores: Record<string, number>): number {
  let total = 0;
  for (const [key, weight] of Object.entries(SCORING_WEIGHTS)) {
    total += (scores[key] ?? 0) * weight;
  }
  return Math.round(total * 10) / 10;
}
