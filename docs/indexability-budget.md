# Sasanova Indexability Budget

**Version:** 1.0
**Effective:** 2026-03-24
**Owner:** Editorial & Data Integrity Team

---

## Purpose

This document governs which pages on Sasanova are eligible for search engine
indexation. The core principle is that pages must earn the right to be indexed
by meeting quality, completeness, and freshness thresholds. This protects the
site's domain authority, prevents thin content from diluting search performance,
and ensures that every indexed page delivers genuine value to readers.

---

## 1. Default State: Noindex

Every new page is created with the meta robots directive `noindex, follow`. A
page transitions to `index, follow` only after passing the indexability
requirements defined in this document.

### Rationale

- Prevents premature indexation of incomplete or draft content.
- Allows internal links to flow PageRank even before a page is indexed.
- Gives the editorial team control over the site's search footprint.

---

## 2. Minimum Indexation Thresholds by Page Type

A page must meet all thresholds for its type before the `noindex` directive is
removed.

### 2.1 Product Listing

| Requirement                              | Threshold                |
|------------------------------------------|--------------------------|
| Feature keys populated                   | >= 80%                   |
| Fields with `independently_verified` provenance | >= 50%            |
| Pricing data present and verified        | Required                 |
| All 6 scoring axes completed             | Required                 |
| Editorial verdict (best-for + avoid-if)  | Required                 |
| Alternatives linked                      | >= 2 published products  |
| Prose word count                         | >= 400 words             |
| Source registry entries                   | >= 3                     |
| Editorial pass completed                 | Required                 |
| Evidence pass completed                  | Required                 |

### 2.2 Comparison Page

| Requirement                              | Threshold                |
|------------------------------------------|--------------------------|
| Products compared                        | 2-6, all individually indexed |
| Feature keys compared                    | >= 10                    |
| Pricing comparison present               | Required                 |
| Per-product verdict                      | Required                 |
| Conclusion section                       | Required                 |
| Prose word count                         | >= 600 words             |
| Source registry entries                   | >= 3 per product         |
| Editorial pass completed                 | Required                 |

### 2.3 Category Overview

| Requirement                              | Threshold                |
|------------------------------------------|--------------------------|
| Products listed                          | >= 5, all individually indexed |
| Category definition present              | Required                 |
| Buyer's guide section                    | Required                 |
| Prose word count                         | >= 800 words             |
| Source registry entries                   | >= 5                     |
| Editorial pass completed                 | Required                 |

### 2.4 Editorial Guide

| Requirement                              | Threshold                |
|------------------------------------------|--------------------------|
| Prose word count                         | >= 800 words             |
| Source registry entries                   | >= 5                     |
| Internal links to product listings       | >= 3                     |
| Editorial pass completed                 | Required                 |
| Evidence pass completed                  | Required                 |

---

## 3. Rolling Cap by Category

To prevent overextension into categories where data quality cannot be sustained,
a rolling cap limits the number of indexed pages per category.

### 3.1 Cap Calculation

```
category_cap = min(
  category_product_count,
  floor(verified_products * 1.5)
)
```

Where:
- `category_product_count` is the total number of products in the category.
- `verified_products` is the number of products meeting all indexation thresholds.

The cap is recalculated weekly.

### 3.2 Cap Enforcement

- If the number of indexed pages in a category exceeds the cap (e.g., due to
  products falling below thresholds), the lowest-quality pages are set to
  `noindex` first. Quality is determined by the product's overall score and
  staleness level.
- New pages may not be indexed in a category that is at cap until either (a) an
  existing page is deindexed or (b) the cap increases due to more products
  meeting thresholds.

### 3.3 Cap Exceptions

The Editorial Lead may grant a temporary cap exception for categories with high
reader demand and imminent data completion. Exceptions are documented with an
expiration date not exceeding 30 days.

---

## 4. Quality Check Requirements

Before a page transitions from `noindex` to `index`, it must pass an automated
quality check and an editorial sign-off.

### 4.1 Automated Quality Check

The automated check verifies:

| Check                                  | Failure Action               |
|----------------------------------------|------------------------------|
| All required fields populated          | Block indexation              |
| Pricing data age <= 30 days            | Block indexation              |
| No broken internal links               | Block indexation              |
| Page renders without errors            | Block indexation              |
| Structured data (JSON-LD) validates    | Block indexation              |
| Meta title and description present     | Block indexation              |
| Canonical URL set correctly            | Block indexation              |
| Open Graph tags present                | Warn but do not block         |
| Image alt text present                 | Warn but do not block         |
| Page load time < 3 seconds             | Warn but do not block         |

### 4.2 Editorial Sign-Off

A senior editor must approve the page for indexation by confirming:

- The content meets the quality thresholds for its page type.
- The editorial and evidence passes are complete and current.
- The page represents the category fairly (no misleading emphasis).

---

## 5. Soft Warning and Temporary Noindex Triggers

Certain events trigger a soft warning state or temporary return to `noindex`.

### 5.1 Soft Warning Triggers

A soft warning places a visible staleness indicator on the page but does not
deindex it. The page is queued for priority reverification.

| Trigger                                        | Warning Threshold        |
|------------------------------------------------|--------------------------|
| Pricing data age exceeds 45 days               | Soft warning             |
| Days since last editorial review exceeds 120   | Soft warning             |
| Community report filed (unresolved)            | Soft warning             |
| Vendor changelog activity without data refresh | Soft warning             |

### 5.2 Temporary Noindex Triggers

A temporary noindex removes the page from the search index until the issue is
resolved.

| Trigger                                        | Action                   |
|------------------------------------------------|--------------------------|
| Pricing data age exceeds 60 days               | Temporary noindex        |
| Feature key population drops below 70%         | Temporary noindex        |
| Verified provenance fields drop below 40%      | Temporary noindex        |
| Vendor-reported factual error (confirmed)      | Temporary noindex        |
| Product discontinuation announced              | Temporary noindex        |
| Scoring axes incomplete (any axis missing)     | Temporary noindex        |
| Automated quality check failure                | Temporary noindex        |

### 5.3 Restoration

A page returns to `index` status when:

1. The triggering condition is resolved.
2. The automated quality check passes.
3. An editor confirms the page is current and accurate.

---

## 6. Integration with Staleness Scoring

The indexability system reads from the staleness scoring system defined in the
Editorial Workflow document.

### 6.1 Staleness-to-Indexability Mapping

| Staleness Level | Indexability Action                              |
|-----------------|--------------------------------------------------|
| Fresh           | No action. Page remains indexed.                 |
| Aging           | Soft warning. Queued for reverification.         |
| Stale           | Soft warning displayed. Priority reverification. |
| Expired         | Temporary noindex until reverified.              |

### 6.2 Monitoring

The editorial dashboard displays:

- Total indexed pages vs. total pages.
- Indexed pages by category with cap utilization.
- Pages in soft warning state.
- Pages in temporary noindex state.
- Trend lines for each metric over rolling 90-day windows.

---

## 7. Sitemap Governance

The XML sitemap is generated dynamically and includes only pages with `index`
status.

### 7.1 Sitemap Rules

- Pages with `noindex` are excluded from the sitemap.
- The sitemap includes `<lastmod>` timestamps derived from the most recent
  editorial pass date.
- The sitemap is regenerated daily.
- A `sitemap-index.xml` organizes sitemaps by page type (products, comparisons,
  categories, guides).

### 7.2 Search Console Monitoring

Submit the sitemap to Google Search Console and Bing Webmaster Tools. Monitor
for:

- Index coverage errors.
- Pages submitted but not indexed (may indicate quality signals below search
  engine thresholds).
- Pages indexed but not submitted (may indicate orphan pages or stale
  sitemaps).

---

## 8. Amendment Process

Changes to indexation thresholds, cap formulas, or noindex triggers require
written approval from the Editorial Lead and SEO Lead. Amendments are versioned
in this document's header.
