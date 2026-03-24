# Sasanova Scoring Constitution

**Version:** 1.0
**Effective:** 2026-03-24
**Owner:** Editorial & Data Integrity Team

---

## Purpose

This document defines the scoring methodology used across all Sasanova product
listings. It establishes the axes, evidence requirements, weighting formula,
versioning rules, and governance processes that ensure scores are transparent,
reproducible, and editorially defensible.

---

## 1. Scoring Axes

Every scored product receives a rating on six axes, each on a 1-10 integer
scale.

| Axis                   | Direction | Description                                                        |
|------------------------|-----------|--------------------------------------------------------------------|
| `value`                | Higher=better | Cost-effectiveness relative to capability. Considers free tiers, per-seat pricing, and total cost of ownership at representative team sizes. |
| `ease`                 | Higher=better | Day-to-day usability for the target persona. Accounts for UI clarity, onboarding quality, documentation, and learning curve. |
| `power`                | Higher=better | Depth and breadth of capability. Measures feature completeness, API surface, extensibility, and advanced-use-case support. |
| `setup_friction`       | Higher=worse  | Effort required to go from signup to first productive use. Includes provisioning complexity, required integrations, and time-to-value. |
| `migration_difficulty`  | Higher=worse  | Effort required to leave the product. Considers data export options, API portability, vendor lock-in mechanisms, and contract terms. |
| `transparency`         | Higher=better | Openness of the vendor about pricing, data practices, uptime history, roadmap, and terms of service. |

---

## 2. Axis Classification

Each axis is classified as either **editorial judgment** or **computed**, which
determines how the score is produced and what evidence is required.

| Axis                  | Type               | Primary Evidence                              |
|-----------------------|--------------------|-----------------------------------------------|
| `value`               | Editorial judgment  | Published pricing pages, feature-tier matrices, TCO modeling |
| `ease`                | Editorial judgment  | First-party product walkthroughs, documentation review, onboarding experience |
| `power`               | Computed + editorial | Feature dictionary coverage (computed base), editorial adjustment for depth and quality |
| `setup_friction`      | Editorial judgment  | Timed onboarding tests, setup documentation review, required prerequisite count |
| `migration_difficulty` | Computed + editorial | Data export format audit (computed base), editorial adjustment for contract and lock-in factors |
| `transparency`        | Computed            | Scoring rubric applied mechanically: public pricing (+2), public status page (+1), published DPA (+1), public roadmap (+1), clear ToS (+1), published uptime SLA (+1), no dark patterns in cancellation (+1), changelog frequency (+1), open-source components (+1) |

### Evidence Requirements

- **Editorial judgment axes** require a written rationale of at least three
  sentences filed in the product's evidence record before a score is accepted.
- **Computed axes** require a link to the computation pipeline output and a
  record of input data versions.
- **Hybrid axes** (computed + editorial) require both the computation output and
  a written justification for any editorial adjustment exceeding +/- 1 point
  from the computed base.

---

## 3. Weighted Overall Score

The overall score is calculated using the following formula:

```
overall = (value * 0.20)
        + (ease * 0.15)
        + (power * 0.20)
        + ((10 - setup_friction) * 0.10)
        + ((10 - migration_difficulty) * 0.10)
        + (transparency * 0.25)
```

### Design Rationale

- **Transparency** receives the highest weight (0.25) because Sasanova's
  editorial position is that vendor openness is a leading indicator of long-term
  product health and customer respect.
- **Value** and **Power** share the next-highest weight (0.20 each) as the core
  capability-to-cost tradeoff.
- **Ease** is weighted at 0.15, reflecting its importance for adoption but
  acknowledging that usability is persona-dependent.
- **Setup friction** and **Migration difficulty** are inverted (10 minus raw
  score) so that lower friction contributes positively. Each carries 0.10 weight.
- The weights sum to exactly 1.00.

### Score Presentation

- The overall score is displayed as a single decimal (e.g., 7.4).
- Individual axis scores are displayed as integers.
- The formula and weights are published on-site so readers can recompute.

---

## 4. Score Versioning

Every score is versioned to maintain auditability.

### Version Identifier

Scores carry a version in the format `v{MAJOR}.{MINOR}`:

- **MAJOR** increments when the scoring formula, axis definitions, or weights
  change.
- **MINOR** increments when a product's score is updated within the same
  formula version.

### Version Record

Each score version record includes:

| Field              | Description                                      |
|--------------------|--------------------------------------------------|
| `version`          | The score version identifier.                    |
| `scored_at`        | ISO 8601 timestamp of when the score was assigned. |
| `scored_by`        | Identifier of the editor or pipeline.            |
| `formula_version`  | Reference to the formula version in effect.      |
| `axis_scores`      | Map of axis name to integer score.               |
| `overall`          | Computed overall score.                          |
| `evidence_refs`    | List of evidence record identifiers.             |
| `changelog`        | Free-text summary of what changed and why.       |

### Historical Display

The site displays only the current score version. Previous versions are retained
in the data store for audit purposes and are available to editors via internal
tooling.

---

## 5. Re-Scoring Triggers

A product must be re-scored when any of the following events occur:

| Trigger                            | Expected Response Time |
|------------------------------------|------------------------|
| Vendor announces a pricing change  | 7 business days        |
| Major version release (vendor-defined) | 14 business days   |
| Feature removal or deprecation     | 7 business days        |
| Acquisition or merger announcement | 14 business days       |
| Transparency event (e.g., data breach disclosure, ToS change) | 7 business days |
| Staleness threshold exceeded (see Editorial Workflow) | 14 business days |
| Formula version change (global)    | 30 business days for full re-score cycle |
| Community report with credible evidence of score inaccuracy | 14 business days |

Re-scoring follows the same evidence and review requirements as initial scoring.

---

## 6. User Reviews -- Phase 1 Exclusion

Sasanova does not solicit, collect, or display open user reviews in Phase 1.

### Regulatory Context

The FTC's Rule on the Use of Consumer Reviews and Testimonials (16 CFR Part 465)
took effect on October 21, 2024. The rule imposes specific obligations on
platforms that collect or display consumer reviews, including prohibitions on:

- Suppressing negative reviews based on their sentiment.
- Using fake or incentivized reviews without disclosure.
- Misrepresenting that reviews represent the views of all users.

### Phase 1 Position

Rather than accept the operational and compliance burden of review moderation
before the platform has established robust content-integrity infrastructure,
Sasanova defers user review functionality to a future phase. All editorial
verdicts in Phase 1 are produced by the Sasanova editorial team using the
evidence requirements documented in this constitution.

### Future Phase Requirements

Before enabling user reviews, Sasanova will:

1. Implement verified-purchaser validation.
2. Establish a review moderation pipeline compliant with the FTC rule.
3. Publish a public review policy covering suppression, incentives, and
   disclosure.
4. Update this constitution to define how user reviews interact with editorial
   scores.

---

## 7. Score Disputes

Vendors may dispute a score by submitting a structured dispute form. Disputes
must include:

- The specific axis or axes contested.
- Evidence supporting the vendor's position.
- A reference to the published evidence the vendor believes is incorrect.

Disputes are reviewed by an editor who did not produce the original score. The
resolution (accepted, partially accepted, or rejected) is recorded in the score
version history with a written rationale.

---

## 8. Amendment Process

Changes to the scoring formula, axis definitions, or weights require approval
from the Editorial Lead. All changes trigger a MAJOR version increment and a
full re-score cycle within 30 business days.
