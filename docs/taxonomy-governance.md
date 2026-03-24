# Sasanova Taxonomy Governance

**Version:** 1.0
**Effective:** 2026-03-24
**Owner:** Editorial & Data Integrity Team

---

## Purpose

This document governs the creation, maintenance, and evolution of the category
taxonomy and feature dictionary that organize every product listing on Sasanova.
A well-governed taxonomy ensures consistent discovery, fair comparison, and
accurate filtering for readers.

---

## 1. Category Lifecycle

### 1.1 Category Definition Requirements

Every category in the Sasanova taxonomy must have a complete definition record
before any product is assigned to it.

| Required Field        | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| `category_key`        | Machine-readable slug (lowercase, hyphens). Immutable after creation. |
| `display_name`        | Human-readable name shown on the site.                            |
| `definition`          | A 2-4 sentence description of what the category represents.       |
| `inclusion_criteria`  | Specific, testable conditions a product must satisfy to be listed in this category. |
| `exclusion_criteria`  | Conditions that disqualify a product from this category, even if it superficially appears to fit. |
| `canonical_examples`  | 3-5 well-known products that exemplify the category.              |
| `adjacent_categories` | Related categories with a brief note on how they differ.          |
| `created_at`          | ISO 8601 timestamp.                                               |
| `created_by`          | Editor identifier.                                                |

### 1.2 Inclusion and Exclusion Criteria Standards

Criteria must be written as objective, testable statements wherever possible.

**Good example:**
> Inclusion: The product provides a hosted relational database service accessible
> via SQL queries over a network connection.

**Bad example:**
> Inclusion: The product is a database.

Exclusion criteria serve to prevent category dilution. They should address the
most common ambiguous cases.

**Good example:**
> Exclusion: Products that only offer an embedded database engine (no hosted
> service component) belong in "Embedded Databases," not this category.

---

## 2. Feature Dictionary

The feature dictionary is a controlled vocabulary of feature keys used across
all categories. It enables structured comparison and filtering.

### 2.1 Feature Key Requirements

Every feature key must have a complete definition record.

| Required Field | Description                                                          |
|----------------|----------------------------------------------------------------------|
| `feature_key`  | Machine-readable slug (lowercase, underscores). Immutable after creation. |
| `label`        | Human-readable label for display.                                    |
| `definition`   | A 1-3 sentence description of what the feature means in the Sasanova context. |
| `data_type`    | One of: `boolean`, `enum`, `integer`, `string`, `url`, `semver`.     |
| `enum_values`  | If `data_type` is `enum`, the allowed values with definitions.       |
| `applicable_categories` | List of category keys where this feature is relevant.       |
| `created_at`   | ISO 8601 timestamp.                                                  |
| `created_by`   | Editor identifier.                                                   |

### 2.2 Data Type Guidelines

- Use `boolean` for binary feature presence (e.g., `sso_support`).
- Use `enum` for a fixed set of options (e.g., `hosting_model`: `cloud_only`,
  `self_hosted`, `hybrid`).
- Use `integer` for countable quantities (e.g., `max_free_seats`).
- Use `string` sparingly, only for truly free-form values.
- Use `url` for links to external resources (e.g., `api_docs_url`).
- Use `semver` for version identifiers (e.g., `min_api_version`).

### 2.3 Feature Scope

A feature key describes a single, atomic capability. Compound features must be
decomposed. For example, "SSO support" and "SCIM provisioning" are separate
feature keys, not combined into "enterprise identity."

---

## 3. Synonym and Alias Resolution

Software products use inconsistent terminology. The taxonomy must handle this
gracefully.

### 3.1 Alias Table

The alias table maps alternative terms to canonical feature keys or category
keys.

| Field            | Description                                          |
|------------------|------------------------------------------------------|
| `alias`          | The alternative term (e.g., "kanban board").          |
| `canonical_key`  | The feature or category key it resolves to.           |
| `context`        | Optional context constraint (e.g., only applies within a specific category). |
| `added_by`       | Editor identifier.                                   |
| `added_at`       | ISO 8601 timestamp.                                  |

### 3.2 Resolution Rules

1. Aliases are case-insensitive and stripped of special characters before
   matching.
2. An alias may resolve to only one canonical key. If a term is ambiguous across
   categories, the `context` field must disambiguate.
3. When a vendor uses a term not in the alias table, the editor assigns it to an
   existing canonical key or proposes a new feature key through the standard
   creation process.
4. Aliases are never displayed to users. The canonical label is always shown.

---

## 4. Merge and Split Rules

Categories and feature keys evolve over time. Merges and splits must be handled
with care to preserve data integrity and URL stability.

### 4.1 Category Merge

A merge combines two or more categories into one.

**Requirements:**
1. Written justification explaining why the categories are no longer distinct.
2. A mapping document assigning every product from the source categories to the
   target category.
3. Redirect rules for deprecated category URLs (HTTP 301).
4. Update to all affected product listings within 14 business days.
5. Notification to vendors whose listings change categories.

### 4.2 Category Split

A split divides one category into two or more new categories.

**Requirements:**
1. Complete definition records for each new category (per Section 1.1).
2. A mapping document assigning every product from the source category to
   exactly one target category.
3. The original category URL redirects to a disambiguation page or the most
   appropriate successor.
4. Update to all affected product listings within 14 business days.

### 4.3 Feature Key Merge

When two feature keys are determined to be duplicates or substantially
overlapping:

1. Designate one as the surviving canonical key.
2. Add the deprecated key as an alias.
3. Migrate all product data from the deprecated key to the canonical key.
4. Retain the deprecated key in the alias table indefinitely.

### 4.4 Feature Key Deprecation

A feature key may be deprecated if it is no longer meaningful or applicable.

1. Mark the key as `deprecated` with a reason and date.
2. Remove it from active filter and comparison UIs.
3. Retain historical data for audit purposes.
4. Do not reassign the key slug to a new concept.

---

## 5. Category Expansion Scorecard

Sasanova only enters a category when it can deliver genuine editorial value. The
expansion scorecard prevents premature or low-quality category launches.

### 5.1 Evaluation Criteria

Before creating a new category, score it against the following criteria. Each
is rated 1-5.

| Criterion                        | Weight | Description                                    |
|----------------------------------|--------|------------------------------------------------|
| First-party data observability   | 0.30   | Can we gather sufficient data from vendor sites and public sources without relying on blocked sources? |
| Reader demand signal             | 0.20   | Is there evidence of search demand, reader requests, or market significance? |
| Product count viability          | 0.20   | Are there at least 5 products that meet the inclusion criteria with enough data to score? |
| Differentiation from existing categories | 0.15 | Is this category sufficiently distinct from categories already in the taxonomy? |
| Editorial capacity               | 0.15   | Does the team have bandwidth to produce and maintain quality listings? |

### 5.2 Threshold

A new category proceeds only if its weighted score is 3.5 or higher out of 5.0.
Scores below 3.5 are deferred and re-evaluated quarterly.

### 5.3 Record Keeping

The scorecard evaluation is filed as a permanent record attached to the category
definition. If the category is rejected, the evaluation is retained to inform
future re-evaluation.

---

## 6. Governance Roles

| Role                | Responsibility                                           |
|---------------------|----------------------------------------------------------|
| Taxonomy Owner      | Approves new categories, merges, splits, and expansions. |
| Feature Dictionary Owner | Approves new feature keys and alias mappings.       |
| Category Editor     | Maintains definition records and product assignments for assigned categories. |
| Data Pipeline Lead  | Ensures automated ingestion respects taxonomy constraints. |

---

## 7. Review Cadence

- **Quarterly:** Full taxonomy review. Identify stale categories, orphaned
  feature keys, and alias gaps.
- **Monthly:** Feature dictionary review. Process pending alias proposals and
  deprecation candidates.
- **Continuous:** Merge/split proposals are evaluated as they arise but require
  Taxonomy Owner approval before execution.

---

## 8. Amendment Process

Changes to governance rules in this document require written approval from the
Taxonomy Owner and Editorial Lead. Amendments are versioned in this document's
header.
