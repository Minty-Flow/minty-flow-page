---
target: the homepage
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 1
timestamp: 2026-08-29T00-18-42Z
slug: src-pages-home-tsx
---
Method: dual-agent (A: design-review · B: detector+evidence)

# Critique — Minty Flow site (src/pages/Home.tsx + secondary surfaces)

Visitor mode: Persuade.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of system status | 3 | Changelog states strong; FAQ/Privacy TOCs don't track scroll |
| 2 | Match system / real world | 3 | Apple "9:41" on Android product; "sideload"/"APK" unglossed |
| 3 | User control & freedom | 3 | No back-to-top on long Changelog/Privacy |
| 4 | Consistency & standards | 2 | "Flow" vs "Minty Flow"; iOS "coming soon" vs "on the App Store"; two developer identities; per-page active states; amber breaks One Voice Rule |
| 5 | Error prevention | 3 | FAQ warns to back up before import |
| 6 | Recognition over recall | 3 | Consistent eyebrow/section pattern |
| 7 | Flexibility & efficiency | n/a | Single-visit decision surface |
| 8 | Aesthetic & minimalist | 3 | Busy bento grid + solid-black Changelog filter pill |
| 9 | Error recovery | 3 | Changelog empty state hardcodes "{query}" on type-filter zero results |
| 10 | Help & documentation | 3 | Doc surfaces exist but FAQ contradicts product truth |
| Total | | 26 / 36 (72%) | Competent |

## Design Specificity Verdict

Authored at the surface, category-interchangeable at the skeleton — and the authored trust-building is undermined by the sub-pages.

Authored: HeroPhone mock (schematic, no fake-live data), trust-first IA + open-source band ("trust us" -> "check us"), terse voice, faithful "Mint Glass" execution.
Generic: centered eyebrow+h2, 4-up pillar grid, bento grid, 3-step how-it-works, app-icon CTA. Recolor mint->blue and it's a VPN.

Deterministic scan: detector ran DEGRADED (regex fallback; contrast/custom-props/selectors NOT evaluated — floor not ceiling). 7 design-system-font-size advisories: phone-mock text-[10px] x2 (sanctioned), hero lg:text-[4.5rem] (0.25rem over display ceiling), Changelog text-[10px] pills x2 (-> text-xs), Privacy text-[15px] x2 (undocumented). Sanctioned .text-gradient word and shadow-glow correctly not flagged.

Browser evidence: skipped — no Chrome/Chromium on machine. build + preview succeeded, no TS errors, 429kB JS / 55kB CSS.

## Overall Impression

Home earns trust from a skeptical privacy audience with checkable proof; the secondary pages spend it. The Privacy Policy is a copy-paste from a different app, which caps the whole experience. Biggest opportunity: every surface tells the same true story.

## What's Working

1. HeroPhone mock — schematic, on-brand, no fake-precise data.
2. Open-source band + trust-first IA — real GPL-3.0 repo, 0 Trackers stat.
3. Voice discipline — terse, matches PRODUCT.md brand commitments.
4. Restrained system execution — flat by default, one accent, reduced-motion honored for fade-up.

## Priority Issues

### [P0] Cross-surface factual contradictions (FAQ + Privacy vs Home + PRODUCT.md)
Why: pitch is "verify, don't trust". FAQ claims App Store/iOS availability (Home + PRODUCT.md: Android only, iOS "coming soon") and solicits GitHub Sponsors / Buy Me a Coffee donations with no links anywhere — unverifiable, brushes "not an extraction business". Each contradiction = reason to leave.
Fix: one source of truth. FAQ download answer -> Google Play + APK, iOS "coming soon". Drop donation line unless links ship. Genericize "apps like Ivy".
Command: $impeccable clarify

### [P1] Privacy Policy reads as copy-paste from another app (verified)
Why: highest-scrutiny page. Calls the app "Flow" throughout (commitment: "Minty Flow"), attributes it to "Batmend Ganbaatar" (author: adelefaell), describes "Flow on macOS or iOS" + iCloud backups as shipping, dated May 17 2025 (15 months stale). Uses prose-neutral (pure gray, breaks Tinted Neutral Rule). Looks negligent/reskinned.
Fix: rewrite against PRODUCT.md, keep "short version" framing, fix every proper noun, Android-only, refresh date + "last reviewed", swap prose-neutral for token neutrals.
Command: $impeccable clarify

### [P2] Motion not fully gated by prefers-reduced-motion
Why: animate-ping on hero StatusChip dot + Changelog "Latest" dot loop forever; reduced-motion block only kills .animate-fade-up.
Fix: extend the media block to disable .animate-ping (or motion-safe: gate).
Command: $impeccable animate

### [P3] Inconsistent interactive-state & accent language
Why: active nav = mint tint; active Changelog filter = solid near-black pill fighting the north star; active FAQ category = mint. "Fixed" pill uses amber-* (second accent, breaks One Voice Rule). focus-visible ring only on Button; bespoke <a>/<button> in FAQ/Changelog/Privacy/Footer fall back to UA outline.
Fix: one mint active-state token; recolor "Fixed" pill neutral; apply focus-visible ring to bespoke controls.
Command: $impeccable polish

### [P3] Novice-hostile CTA vocabulary + offline overclaim
Why: "Download APK" / "sideload the APK" unexplained in hero + step 01. Home says "no network dependency" absolutely; Privacy Policy admits HTTPS for FX rates + contributor info.
Fix: demote APK to text link + one line of context; reconcile offline copy ("works fully offline; optional features fetch live FX rates over HTTPS").
Command: $impeccable clarify

## Persona Red Flags

- Jordan (first-timer): "sideload the APK" jargon; FAQ sends iPhone users to a nonexistent App Store listing.
- Riley (stress tester): Home+FAQ+Privacy together = "Flow", unknown dev name, App Store vs "coming soon", unlinked donations, stale date; Changelog empty state renders `No releases match ""` on type-filter zero results.
- Casey (mobile): hero stacks tall text above phone mock, CTA can fall below fold; Changelog sticky controls + sticky nav eat short viewport; FAQ answer-count badges hidden below lg; trust strip wraps 3-4 lines.
- Privacy-conscious Android user (project persona): exists to verify; Privacy Policy + FAQ defeat verification. 0 Trackers earns trust, sub-pages spend it.

## Minor Observations

- Phone-mock status bar "9:41" (Apple) on an Android product.
- themeSwatches: six bright multi-hue circles vs One Voice Rule — borderline.
- index.html JSON-LD author = Organization "Minty Flow"; PRODUCT.md frames an individual. Pick one identity model.
- Footer: three sentence fragments in a row.
- useMemo/useCallback in FAQ/Changelog despite React Compiler (per CLAUDE.md).
- No aria-current="page" on active nav; no skip-to-content link; Navbar GitHub anchor double-announces (aria-label + SVG title).
- Small-text contrast: --muted-foreground on text-xs, further reduced by text-foreground/85 and /75 in Changelog — flag for audit.

## Questions to Consider

1. If the pitch is "verify, don't trust", why does the page a skeptic reads most carefully name a different app and person?
2. "No network dependency" vs. Privacy Policy HTTPS calls — which is true, and which does an auditor believe after noticing the contradiction?
3. Delete the phone mock and open-source band — what's left a VPN app couldn't ship unchanged?
