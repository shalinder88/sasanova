# Sasanova Data Source Policy

**Version:** 1.0
**Effective:** 2026-03-24
**Owner:** Editorial & Data Integrity Team

---

## Purpose

This policy governs how Sasanova acquires, validates, and attributes the data that
powers every listing, comparison, and editorial verdict on the site. The goal is to
build a directory whose facts are independently defensible, whose provenance is
machine-auditable, and whose sourcing never exposes the project to copyright,
contractual, or ethical liability.

---

## 1. Allowed Source Lanes

Each datum entering the Sasanova data store must arrive through one of the
following approved lanes.

### 1.1 First-Party Vendor (Lane A)

Information published by the software vendor on domains they control: marketing
sites, documentation portals, changelogs, public status pages, and public API
references. This is the primary lane for pricing, feature availability, and
integration lists.

### 1.2 Ecosystem and Open-Source Sources (Lane B)

Package registries (npm, PyPI, crates.io), open-source repositories (GitHub,
GitLab), open data sets published under permissive licenses (CC-BY, CC0, MIT),
and standards bodies (IETF RFCs, W3C specifications). Data from this lane is
used for integration verification, protocol support claims, and license metadata.

### 1.3 Licensed Partner Data (Lane C)

Data obtained under a written license or data-sharing agreement with a third
party. The agreement must be on file before any import occurs. Examples include
industry benchmark providers, market-sizing firms, and compliance databases.

### 1.4 Vendor Submission (Lane D)

Structured data submitted directly by a vendor through an official Sasanova
intake form or API endpoint. Submissions are tagged `vendor_claimed` until
independently verified. Vendors grant Sasanova a perpetual, royalty-free license
to display submitted data upon submission.

---

## 2. Blocked Sources

The following platforms and services are **never** used as data sources,
whether directly, via their APIs, via scraping, or via manual transcription.

| Blocked Source                  | Reason                                      |
|---------------------------------|---------------------------------------------|
| G2                              | Proprietary review corpus; TOS prohibition  |
| Capterra / Gartner Digital Mkts | Proprietary data; TOS prohibition           |
| GetApp                          | Gartner Digital Markets subsidiary          |
| Software Advice                 | Gartner Digital Markets subsidiary          |
| TrustRadius                     | Proprietary review corpus; TOS prohibition  |
| Product Hunt (commercial API)   | Commercial API terms restrict reuse         |
| AlternativeTo                   | Proprietary taxonomy and community data     |
| SaaSworthy                      | Proprietary scoring and review data         |
| Crozdesk                        | Proprietary directory data                  |

If a new review aggregator or directory emerges, it is blocked by default until
the legal team reviews its terms and grants a written exception.

---

## 3. Absolutely Prohibited Content

Regardless of source lane, the following content types are **never** collected,
stored, referenced, or displayed.

1. **Competitor editorial copy.** Descriptions, verdicts, or analysis written by
   another publication or directory. Facts may overlap; expression may not.
2. **Competitor reviews and ratings.** Individual user reviews, aggregate star
   ratings, or sentiment scores from any third-party review platform.
3. **Screenshots without permission.** Product screenshots require either (a)
   vendor-supplied press assets under a usage grant, or (b) screenshots captured
   by the Sasanova team with the vendor's written approval.
4. **Logos without permission.** Logos are displayed only when provided by the
   vendor or sourced from an official brand-asset page whose terms permit
   directory usage. See the Brand Voice System for logo governance.
5. **Content behind a login wall or paywall.** If a URL requires authentication
   or payment to access, it is out of bounds.
6. **Content requiring bypass of technical controls.** Circumventing CAPTCHAs,
   rate limits, IP blocks, JavaScript-gated content, robots.txt disallow rules,
   or any other technical access restriction is prohibited.

---

## 4. Provenance Tagging

Every atomic fact stored in the Sasanova data layer carries a provenance tag.

| Tag                       | Meaning                                                     |
|---------------------------|-------------------------------------------------------------|
| `independently_verified`  | Confirmed by the Sasanova team through direct observation of a first-party or ecosystem source. |
| `vendor_claimed`          | Asserted by the vendor (Lane D) but not yet independently confirmed. Displayed with a disclosure marker on the front end. |
| `community_reported`      | Surfaced by an open community source (e.g., a GitHub issue, a public forum post). Requires a link to the original source and carries a lower confidence weight in scoring. |

### Tagging Rules

- A field may carry only one provenance tag at a time.
- Upgrading from `vendor_claimed` to `independently_verified` requires a dated
  verification record with the source URL.
- Downgrading from `independently_verified` to `community_reported` is not
  permitted. If verification is invalidated, the field reverts to
  `vendor_claimed` or is removed.
- The front-end must surface provenance to the reader wherever it materially
  affects a verdict or score.

---

## 5. Source Registry

The source registry is a structured log that accompanies every imported field.

### Required Fields

| Field          | Type     | Description                                         |
|----------------|----------|-----------------------------------------------------|
| `source_url`   | URL      | The canonical URL from which the datum was retrieved.|
| `fetch_time`   | ISO 8601 | Timestamp of retrieval in UTC.                      |
| `content_hash` | SHA-256  | Hash of the retrieved content at fetch time.        |
| `lane`         | Enum     | One of `first_party`, `ecosystem`, `licensed`, `vendor_submission`. |
| `provenance`   | Enum     | One of `independently_verified`, `vendor_claimed`, `community_reported`. |
| `fetched_by`   | String   | Identifier of the team member or pipeline that performed the fetch. |

### Retention

Source registry records are retained for the lifetime of the associated listing
plus 24 months after deprecation, to support dispute resolution and legal review.

---

## 6. Legal Basis

### 6.1 Facts vs. Expression

The US Copyright Office has consistently held that facts are not copyrightable;
only the particular creative expression of facts is protected. Sasanova relies
on this principle when recording factual attributes (pricing tiers, feature
availability, supported integrations) from vendor websites. We never copy
marketing prose, taglines, or descriptive paragraphs.

Key precedent: *Feist Publications, Inc. v. Rural Telephone Service Co.*, 499
U.S. 340 (1991) -- the Supreme Court held that factual compilations are
copyrightable only to the extent of their creative selection, coordination, and
arrangement, not the underlying facts.

### 6.2 Robots.txt Compliance (RFC 9309)

Sasanova respects the Robots Exclusion Protocol as formalized in RFC 9309
(September 2022). All automated fetchers operated by Sasanova:

- Parse and obey `robots.txt` before any request to a new host.
- Honor `Crawl-delay` directives when present.
- Identify themselves with a descriptive `User-Agent` string.
- Do not attempt to access paths disallowed for their user agent.

Manual research by editorial staff (using a standard browser) is not governed by
robots.txt, but staff must still respect login walls, paywalls, and rate limits
as described in Section 3.

---

## 7. Enforcement

Violations of this policy are handled as follows:

1. **Automated pipelines** that ingest data from a blocked source are halted
   immediately. The offending records are quarantined and deleted.
2. **Editorial staff** who reference a blocked source in a draft receive a
   review-stage rejection with a citation to this policy.
3. **Repeat violations** trigger a process review and, if necessary, access
   revocation for the responsible party.

---

## 8. Amendment Process

Changes to the blocked-source list or to allowed source lanes require written
approval from the Editorial Lead and Legal Counsel. Amendments are versioned in
this document's header and announced to all contributors.
