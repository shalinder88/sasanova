# Sasanova Brand Voice System

**Version:** 1.0
**Effective:** 2026-03-24
**Owner:** Editorial & Data Integrity Team

---

## Purpose

This document establishes the voice, tone, and content patterns used across all
Sasanova editorial content. Consistency in voice builds reader trust and
reinforces the site's positioning as a transparent, evidence-based software
directory.

---

## 1. Core Voice Attributes

Sasanova's editorial voice is:

- **Direct.** Lead with the verdict. Do not bury conclusions in qualifications.
- **Evidence-grounded.** Every claim is traceable to a source. Speculation is
  labeled as such.
- **Respectful of the reader's time.** Use the fewest words that convey the
  complete meaning.
- **Honest about limitations.** Acknowledge what we do not know. Never overstate
  confidence.
- **Vendor-neutral.** No product is favored or penalized beyond what the
  evidence supports.

---

## 2. Verdict Patterns

### 2.1 Best-For Statement

Every product listing includes a best-for statement. It follows this pattern:

```
[Tool] is best for [persona or use case]. The tradeoff is [weakness].
```

**Examples:**

> Linear is best for engineering teams that want an opinionated, fast project
> tracker. The tradeoff is limited customization for non-engineering workflows.

> Notion is best for small teams that need a single workspace for docs, tasks,
> and wikis. The tradeoff is performance degradation at scale.

**Rules:**
- The persona or use case must be specific enough to be actionable. "Teams" alone
  is too vague; "engineering teams under 50 people" is acceptable.
- The tradeoff must be a genuine weakness, not a soft compliment disguised as a
  limitation.
- Best-for statements are capped at two sentences.

### 2.2 Avoid-If Statement

Every product listing includes an avoid-if statement.

```
Avoid [Tool] if [condition]. [Brief reason].
```

**Examples:**

> Avoid Airtable if your dataset exceeds 100,000 rows per base. Performance
> degrades significantly and workarounds add operational complexity.

> Avoid Salesforce if you need a CRM running in under a week. Initial setup
> requires dedicated admin time and often professional services.

**Rules:**
- The condition must be concrete and testable.
- The reason must be factual, not editorial opinion without evidence.
- Avoid-if statements are capped at two sentences.

---

## 3. Uncertainty Language

Sasanova distinguishes between verified facts and unverified claims in its prose.

### 3.1 Unverified Vendor Claims

When a data point carries `vendor_claimed` provenance and has not been
independently verified:

```
Vendor claims [statement].
```

or

```
According to [Vendor]'s published materials, [statement].
```

Never present vendor claims as established facts. The reader must be able to
distinguish what Sasanova has confirmed from what the vendor asserts.

### 3.2 Verification Failures

When the editorial team attempted to verify a claim and could not:

```
We could not independently verify [claim].
```

or

```
[Claim] could not be confirmed from public sources as of [date].
```

### 3.3 Partial Information

When information is incomplete:

```
Pricing for [tier/feature] is not publicly disclosed.
```

or

```
[Vendor] does not publish [specific data point] on its public site.
```

### 3.4 General Uncertainty

For broader uncertainty about a product area:

```
Our data on [topic] is limited. The information below reflects what was
publicly observable as of [date].
```

---

## 4. Exclusion Explanations

When a product is excluded from a category or comparison, the reason must be
stated plainly.

### 4.1 Data Insufficiency

```
[Tool] is not yet listed in this category. We were unable to gather sufficient
publicly available data to produce a reliable score.
```

### 4.2 Category Mismatch

```
[Tool] is listed under [other category] rather than [this category] because
[specific reason based on inclusion/exclusion criteria].
```

### 4.3 Vendor Request

```
[Tool] has been removed from this listing at the vendor's request. Sasanova
respects vendor opt-out requests while noting the removal for transparency.
```

### 4.4 Deprecation

```
[Tool] is no longer actively maintained by its vendor. This listing is
preserved for reference but is no longer scored or updated.
```

---

## 5. Comparison Conclusions

When a comparison page reaches its conclusion:

### 5.1 Clear Winner Scenario

```
For [specific use case], [Tool A] is the stronger choice because [evidence-based
reasons]. [Tool B] remains preferable if [alternative condition].
```

### 5.2 No Clear Winner Scenario

```
The choice between [Tool A] and [Tool B] depends on [key differentiating
factor]. Choose [Tool A] if [condition]. Choose [Tool B] if [condition].
```

### 5.3 Rules for Conclusions

- Never declare a universal winner. Always scope the verdict to a use case or
  persona.
- Always provide a counter-condition where the alternative is preferable.
- Reference specific scored axes that drive the conclusion.
- Do not use superlatives ("the best," "the greatest," "unmatched") unless
  quoting a specific, measurable claim with evidence.

---

## 6. Warnings and Cautions

When a product has a notable risk factor:

### 6.1 Pricing Concerns

```
Note: [Vendor]'s pricing increases significantly at the [tier/threshold].
Model total cost carefully before committing.
```

### 6.2 Lock-In Concerns

```
Note: Data export from [Tool] is limited to [format/method]. Evaluate
migration difficulty before adopting at scale.
```

### 6.3 Stability Concerns

```
Note: [Tool] has undergone [specific change: acquisition, major pivot,
leadership change] within the past 12 months. Roadmap stability may be
affected.
```

### 6.4 Transparency Concerns

```
Note: [Vendor] does not publicly disclose [specific item]. This affected
the product's transparency score.
```

---

## 7. Logo and Brand Asset Governance

### 7.1 Default State: Text-Only

All product listings launch with text-only name display. No logo is shown until
the requirements below are met.

### 7.2 Permitted Logo Sources

Logos may be displayed only when obtained through one of the following:

1. **Vendor submission.** The vendor provides the logo through the Sasanova
   intake process with an explicit usage grant.
2. **Official brand asset page.** The vendor publishes a brand/press page with
   downloadable assets and terms that permit directory usage.
3. **Written permission.** The vendor grants permission via email or other
   documented communication.

### 7.3 Prohibited Logo Practices

- **Never auto-scrape logos** from vendor websites, social media, or third-party
  sources.
- **Never use logos from image search** results, favicon extractors, or
  Clearbit-style enrichment APIs without verifying the vendor's usage terms.
- **Never modify logos** (crop, recolor, add effects) without vendor approval.

### 7.4 Logo Display Standards

- Display at a consistent size across listings (height-normalized).
- Use the vendor's preferred version (light/dark) appropriate to the page
  background.
- Include alt text with the vendor's product name.
- Link the logo to the product listing, not to the vendor's external site.

---

## 8. Prose Style Rules

### 8.1 Sentence Structure

- Prefer active voice.
- Keep sentences under 30 words where possible.
- One idea per sentence.

### 8.2 Technical Terms

- Define technical terms on first use in a page.
- Do not assume the reader knows acronyms. Expand on first use.

### 8.3 Formatting

- Use bold for product names on first mention in a section.
- Use code formatting for feature keys, API endpoints, and technical identifiers.
- Use tables for structured comparisons; do not embed comparisons in prose.

### 8.4 Prohibited Language

- No marketing superlatives without evidence ("industry-leading," "world-class").
- No hedging that obscures the verdict ("it could potentially be considered").
- No filler phrases ("it is worth noting that," "it goes without saying").
- No first-person singular. Use "we" for the Sasanova editorial team.

---

## 9. Amendment Process

Changes to voice patterns, verdict structures, or logo governance require written
approval from the Editorial Lead. Amendments are versioned in this document's
header.
