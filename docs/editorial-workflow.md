# Sasanova Editorial Workflow

**Version:** 1.0
**Effective:** 2026-03-24
**Owner:** Editorial & Data Integrity Team

---

## Purpose

This document defines the content production pipeline for Sasanova product
listings, comparison pages, and editorial content. It establishes the stages,
gates, quality thresholds, and maintenance rules that every piece of published
content must satisfy.

---

## 1. Page Stages

Every page progresses through a linear pipeline. A page may not advance to the
next stage until the current stage's requirements are met.

### Stage 1: Research Brief

**Owner:** Category Editor
**Output:** A structured brief containing:

- Target product or comparison set.
- Category assignment and applicable feature keys.
- Identified first-party sources (Lane A and B per Source Policy).
- Known data gaps and plan to resolve them.
- Competitive context: what alternatives exist and how they differ.

**Exit criteria:** Brief reviewed and approved by a second editor.

### Stage 2: Data Completeness Check

**Owner:** Data Pipeline Lead
**Output:** A completeness report showing:

- Percentage of required feature keys populated.
- Provenance tag distribution (independently_verified vs. vendor_claimed).
- Pricing data freshness.
- Missing fields flagged for manual research.

**Exit criteria:** Minimum 70% of required feature keys populated with at least
`vendor_claimed` provenance. Pricing data must be present.

### Stage 3: First Draft

**Owner:** Category Editor
**Output:** Complete page content including:

- Editorial verdict (best-for and avoid-if statements).
- Prose summaries for each scored axis.
- Feature comparison table.
- Pricing summary.
- Alternatives section.

**Exit criteria:** Draft covers all required content blocks. No placeholder text
remains.

### Stage 4: Editorial Pass

**Owner:** Senior Editor (not the original author)
**Focus:** Prose quality, clarity, consistency with the Brand Voice System,
factual accuracy of claims, and verdict defensibility.

**Exit criteria:** All editorial comments resolved. Verdict approved by reviewer.

### Stage 5: Evidence Pass

**Owner:** Data Integrity Reviewer
**Focus:** Every factual claim is traced to a source registry entry. Provenance
tags are accurate. Scores match the evidence record.

**Exit criteria:** Zero unattributed claims. Score evidence records complete per
the Scoring Constitution.

### Stage 6: UX Pass

**Owner:** Design/UX Reviewer
**Focus:** Page renders correctly across breakpoints. Comparison tables are
readable. Navigation and filtering work as expected. Accessibility standards met
(WCAG 2.1 AA minimum).

**Exit criteria:** No blocking UX issues. Accessibility audit passed.

### Stage 7: Publish

**Owner:** Publishing Editor
**Action:** Page is set to `index, follow` (if it meets indexability thresholds)
and deployed to production.

**Requirements before publish:**
- All six prior stages completed and signed off.
- Publish gates (Section 2) satisfied.

### Stage 8: Post-Publish Audit

**Owner:** Quality Assurance
**Timeline:** Within 72 hours of publish.
**Focus:** Verify live page matches approved content. Check for rendering issues,
broken links, and data display errors. Confirm analytics tracking is firing.

**Exit criteria:** Audit checklist completed. Any issues logged and assigned.

---

## 2. Publish Gates

A page cannot be published unless all of the following gates are satisfied.

### 2.1 Minimum Source Count

| Page Type           | Minimum Unique Sources |
|---------------------|------------------------|
| Product listing     | 3                      |
| Comparison page     | 3 per product          |
| Category overview   | 5                      |
| Editorial guide     | 5                      |

Sources must be distinct (not multiple pages on the same domain covering the
same fact).

### 2.2 Pricing Verified

Pricing data must carry `independently_verified` provenance with a fetch
timestamp no older than 30 days at time of publish.

### 2.3 Editorial Verdict

Every product listing must include:

- A "best for" statement identifying the ideal persona or use case.
- An "avoid if" statement identifying scenarios where the product is a poor fit.
- Both statements must follow the patterns in the Brand Voice System.

### 2.4 Alternatives Linked

Every product listing must link to at least two alternative products within the
same category that are also published on Sasanova.

---

## 3. Quality Thresholds by Page Type

### Product Listing

| Metric                          | Threshold          |
|---------------------------------|--------------------|
| Feature keys populated          | >= 80%             |
| Independently verified fields   | >= 50%             |
| Word count (prose sections)     | 400-1200 words     |
| Scoring axes completed          | All 6              |
| Source registry entries          | >= 3               |

### Comparison Page

| Metric                          | Threshold          |
|---------------------------------|--------------------|
| Products compared               | 2-6                |
| Feature keys compared           | >= 10              |
| Pricing comparison included     | Required           |
| Verdict for each product        | Required           |
| Word count                      | 600-1800 words     |

### Category Overview

| Metric                          | Threshold          |
|---------------------------------|--------------------|
| Products listed                 | >= 5               |
| Category definition present     | Required           |
| Buyer's guide section           | Required           |
| Word count                      | 800-2000 words     |

---

## 4. Staleness Rules

Content degrades over time. Sasanova enforces staleness thresholds to maintain
accuracy.

### 4.1 Staleness Scoring

Each page receives a staleness score based on:

| Factor                          | Weight | Measurement                     |
|---------------------------------|--------|---------------------------------|
| Days since last data refresh    | 0.40   | Max age of any source registry entry |
| Days since last editorial review| 0.30   | Timestamp of most recent editorial pass |
| Vendor change velocity          | 0.20   | Frequency of vendor changelog updates |
| Community report volume         | 0.10   | Number of unresolved community reports |

### 4.2 Staleness Thresholds

| Staleness Level | Action                                                 |
|-----------------|--------------------------------------------------------|
| Fresh           | No action required. Page is current.                   |
| Aging           | Queued for reverification within 14 business days.     |
| Stale           | Soft warning banner displayed on page. Queued for priority reverification within 7 business days. |
| Expired         | Page set to `noindex` until reverified. Warning banner displayed. |

### 4.3 Reverification Triggers

Beyond staleness scoring, the following events trigger immediate reverification:

- Vendor pricing page change detected by monitoring pipeline.
- Vendor acquisition or merger announcement.
- Major version release.
- Community report flagging a factual error with credible evidence.
- Scoring constitution formula change (triggers full re-score).

---

## 5. Deprecation and Pruning

### 5.1 Product Deprecation

A product listing is deprecated when:

- The product is discontinued by the vendor.
- The product is absorbed into another product (redirect to successor).
- The product no longer meets category inclusion criteria.
- The product's data cannot be reverified after three consecutive attempts
  spanning 90 days.

### 5.2 Deprecation Process

1. Set the page to `noindex`.
2. Display a deprecation notice explaining the reason.
3. Update alternatives on related product pages.
4. Retain the page at its URL for 12 months (to avoid broken inbound links),
   then redirect to the category overview.

### 5.3 Category Pruning

A category is pruned when:

- Fewer than 3 products remain after deprecations.
- The category expansion scorecard (see Taxonomy Governance) falls below
  threshold on re-evaluation.

Pruned categories follow the merge/redirect rules in the Taxonomy Governance
document.

---

## 6. Workflow Tooling Requirements

The editorial workflow must be supported by tooling that:

- Tracks each page's current stage and stage history.
- Enforces gate requirements before stage transitions.
- Alerts editors when staleness thresholds are approaching.
- Provides a dashboard of pages by stage, staleness level, and category.
- Logs all stage transitions with timestamps and actor identifiers.

---

## 7. Amendment Process

Changes to the workflow stages, publish gates, or quality thresholds require
written approval from the Editorial Lead. Amendments are versioned in this
document's header.
