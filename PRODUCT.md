# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

<!-- This repo is the marketing/support website for Minty Flow. The product it
promotes is a native Android app. Site platform is web; product platform is
Android (see Operating Context). -->

## Users

Primary: privacy-conscious Android users who want to track personal income and
expenses but refuse cloud accounts, ads, or subscriptions. When they land on the
site they are deciding whether to trust and install the app — weighing the
privacy claims, checking that it is genuinely free, and looking for proof
(open-source repo, license, no trackers) before downloading from Google Play or
sideloading the APK.

Secondary (not the lede): FOSS-minded users who read the license and source
before installing anything.

## Product Purpose

Minty Flow is a free, open-source expense tracker for Android. It lets people log
income and expenses, run budgets, automate recurring transactions, and see where
their money goes — with every byte of data stored locally on the device. It
exists so that personal-finance tracking does not require handing bank-adjacent
data to a server, an account, or an ad network. Success for the site is a
confident install: the visitor understands the privacy model and gets the app.

## Positioning

Local-only by architecture, not by setting: no account, no server, no analytics,
no network dependency — the app works fully offline and there is nothing to opt
out of. Combined with free-forever (no premium tier, no subscriptions) and a
public GPL-3.0 codebase, the visitor can verify the privacy claim rather than
trust it. A neighboring tracker that syncs to a backend or monetizes via ads or a
paid tier cannot truthfully copy this stance.

## Operating Context

- The product is a native Android app; distribution is Google Play
  (`com.mintyflow.tracker`) and sideloadable APKs from GitHub Releases.
- iOS is stated on the site as "coming soon"; Android is the only shipping
  platform today.
- Source lives under the `Minty-Flow` GitHub org; app repo is
  `Minty-Flow/minty-flow-app`.
- The site is a static SPA deployed to GitHub Pages (`minty-flow.github.io`),
  built with Vite, deployed via `gh-pages` to the `page-deployment` branch, with
  per-route static pages generated at deploy time for SEO.
- Site surfaces: Home (landing), FAQ, Changelog, Privacy Policy.
- Support contact: `adelefaell+mintyflow+support@gmail.com`.

## Capabilities and Constraints

App capabilities referenced by the site (must stay accurate): unlimited accounts
across currencies, multi-currency with live exchange rates for cross-currency
transfers, budgets, recurring transaction rules (daily/weekly/monthly/yearly),
60+ built-in themes (Catppuccin, Nord, Mint, etc.), CSV import/export, no
account, fully offline, all data local.

Binding constraints — future design/copy work must preserve these exactly, not
soften or drop them:

- **GPL-3.0, open source.** "Every line on GitHub" must stay prominent and
  literally true; link to the real repo.
- **100% offline, local-only, zero analytics.** No account, no servers, no
  trackers — stated absolutely, no hedging.
- **Android now, iOS "coming soon".** Keep the iOS "coming soon" framing as-is;
  do not imply iOS ships today, do not remove it.

Free / no-premium-tier is the current model and is stated throughout the site;
it was not marked immutable in this interview, so treat it as present product
truth rather than a locked-forever guarantee.

## Brand Commitments

- Name: **Minty Flow** (always two words, capitalized).
- Voice in existing copy: terse, declarative, confident, lightly opinionated
  ("Four ideas. No exceptions.", "Everything you need. Nothing you don't."). No
  hype, no exclamation marks, no growth-marketing tone.
- Author/handle: `adelefaell`.
- Mint/green identity: light theme-color `#007B17`, dark `#C0FFCA`; favicon and
  app icon at `public/favicon.png` and `public/icon.png`.

## Evidence on Hand

- Real: the app itself (Play Store listing, GitHub repo, releases), the
  changelog, the FAQ, the privacy policy, the app icon.
- **Absent — must not be fabricated:** user counts, download numbers, ratings,
  testimonials, reviews, press mentions, awards, or named users. None exist;
  design must not invent social proof.

## Product Principles

1. Verifiable over trust-me: every privacy claim is backed by something the
   visitor can check (open source, no network calls, no account field).
2. No dark-pattern economics: no premium upsell, no "free trial", no nag — the
   business model is not extraction, and the site must not read like it is.
3. Local-first is the architecture, not a toggle: don't present offline/private
   as an optional mode; it's the only mode.
4. Say less: match the app's terse, decisive voice; cut adjectives before adding
   them.
5. Honest roadmap: iOS is "coming soon", not shipping; keep forward-looking
   claims clearly future-tense.

## Accessibility & Inclusion

No product-specific standard was established in the interview. Default target:
WCAG 2.1 AA for the website (contrast, keyboard nav, reduced-motion respect,
semantic landmarks) — to be verified in the `audit` pass, not assumed met.
