---
name: Minty Flow
description: Free, private, offline expense tracker for Android — marketing site
colors:
  primary: "oklch(0.5 0.17 148)"
  primary-foreground: "oklch(0.985 0.005 148)"
  background: "oklch(0.985 0.005 148)"
  foreground: "oklch(0.14 0.02 160)"
  card: "oklch(1 0 0)"
  secondary: "oklch(0.95 0.07 148)"
  muted: "oklch(0.95 0.015 148)"
  muted-foreground: "oklch(0.48 0.02 200)"
  accent: "oklch(0.94 0.09 148)"
  border: "oklch(0.9 0.02 148)"
  destructive: "oklch(0.6 0.22 15)"
  mesh-mint: "oklch(0.93 0.1 148)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 4.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.18em"
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  2xl: "20px"
  3xl: "28px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-wide: "24px"
  card: "28px"
  section-y: "96px"
  section-y-wide: "112px"
  container: "72rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "44px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.full}"
    padding: "0 24px"
    height: "44px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.3xl}"
    padding: "28px"
  badge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
  nav-link:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted-foreground}"
    rounded: "{rounded.full}"
    padding: "0 14px"
    height: "32px"
---

# Design System: Minty Flow

## Overview

**Creative North Star: "Mint Glass"**

Minty Flow's site looks the way the app promises to feel: light, calm, and
nothing hidden. Frosted translucent surfaces float over a soft mint field —
a barely-there mesh wash, a faint 32px grid, scattered dot textures — so the
page reads as air and glass rather than panels and chrome. Green is the single
voice: one saturated mint primary that carries every call to action and almost
nothing else. Everything around it is near-white, hairline-bordered, and quiet.

The system is restrained on purpose. This is a privacy-first finance tool, so
the visual language avoids anything that feels like it wants something from you:
no loud gradients across headlines, no stacked shadows, no dense dashboards of
fake data. Depth is earned, not decorative — surfaces sit flat at rest and the
primary glow appears only where the user is meant to act. Typography does the
structural work: a tight, tracked-in display face (Plus Jakarta Sans) for
headlines and eyebrows, Inter for everything readable, generous line height,
lots of vertical breathing room between sections.

The result should feel like well-made, unhurried software — premium through
precision, not ornament. If a section feels busy, strip it before you style it.

**Key Characteristics:**
- One-voice mint primary on a near-white (light) / near-black (dark) ground
- Frosted glass for the sticky nav; soft radial mesh + grid + dot textures elsewhere
- Flat surfaces at rest; a single primary "glow" shadow reserved for intent
- Large radii (cards 28px, controls fully pill) — soft geometry, hairline borders
- Plus Jakarta Sans display / Inter body, headings tracked to -0.02em
- Wide section rhythm (96–112px vertical), 72rem max content width
- Full light/dark parity via OKLCH tokens; motion is one subtle fade-up, reduced-motion honored

## Colors

A single mint-green accent over an almost-colorless field; the green's rarity is
what makes it read as important.

### Primary
- **Mint Signal** (`oklch(0.5 0.17 148)` light / `oklch(0.88 0.13 148)` dark): the
  only accent. Primary buttons, active nav pill, eyebrow labels, icon chips,
  focus rings, links, the `+` amounts in the phone mock. In dark mode it lifts to
  a pale mint so it stays legible on near-black.
- **Mint Signal Foreground** (`oklch(0.985 0.005 148)`): text/icons on top of the
  primary fill.

### Secondary
- **Mint Wash** (`oklch(0.95 0.07 148)` / dark `oklch(0.2 0.02 160)`): tinted
  secondary surfaces and quiet badges. Rarely used on the marketing pages.
- **Mint Accent** (`oklch(0.94 0.09 148)` / dark `oklch(0.27 0.07 148)`): hover
  background for ghost/outline controls and dropdown items.

### Neutral
- **Paper** (`oklch(0.985 0.005 148)` light / **Ink** `oklch(0.13 0.012 160)`
  dark): page background. A trace of mint hue keeps white from going clinical.
- **Card White** (`oklch(1 0 0)` / dark `oklch(0.17 0.012 160)`): raised surfaces,
  bento tiles, phone mock body.
- **Ink Text** (`oklch(0.14 0.02 160)` / dark `oklch(0.97 0.012 148)`): primary
  text and display headings.
- **Muted Text** (`oklch(0.48 0.02 200)` / dark `oklch(0.7 0.02 180)`): body copy,
  captions, eyebrow-adjacent supporting text. Note the slight teal hue shift.
- **Hairline** (`oklch(0.9 0.02 148)` / dark `oklch(0.24 0.018 160)`): all borders
  and dividers, almost always at 60% opacity (`border-border/60`).

### Tertiary (functional only)
- **Alert Red** (`oklch(0.6 0.22 15)`): destructive/error states only. On the
  marketing pages, negative amounts in the phone mock use a rose tint
  (`text-rose-500/90`) — decorative, not the destructive token.

### Named Rules
**The One Voice Rule.** Mint primary is the only accent on the page and should
cover well under 10% of any viewport. If a second accent hue shows up outside a
chart or the phone-mock data, it's a bug.

**The Tinted Neutral Rule.** Neutrals are never pure gray — every background,
border, and muted value carries hue 148–200 at very low chroma. Don't drop in a
`#71717a`-style gray; use the tokens.

## Typography

**Display Font:** Plus Jakarta Sans (fallback: Inter, system-ui, sans-serif)
**Body Font:** Inter (fallback: system-ui, sans-serif)
**Label / Mono:** Inter for uppercase labels; the system monospace stack with
`tabular-nums` for amounts and step numbers.

**Character:** Plus Jakarta Sans gives headlines a friendly-geometric warmth;
tracked in to -0.02em it reads confident rather than soft. Inter keeps body copy
neutral and highly legible. Inter is loaded with `cv11`, `ss01`, `ss03` feature
settings for a slightly more humanist figure set.

### Hierarchy
- **Display** (700, `clamp(2.25rem → 4.25rem)`, line-height 1.05, -0.02em): the
  hero `h1` only. One per page.
- **Headline** (700, `clamp(1.875rem → 2.25rem)`, 1.15, -0.02em): section `h2`s
  ("Four ideas. No exceptions.").
- **Title** (600, 1–1.25rem, 1.3): card and feature-tile headings, list-item
  titles.
- **Body** (400, 1rem / 1.125rem lead, line-height ~1.6): paragraphs. Cap
  measure around 65–75ch (`max-w-xl` / `max-w-2xl` on centered intros).
- **Label** (600, 0.75rem, letter-spacing 0.18em, UPPERCASE): section eyebrows
  ("Principles", "Features"), stat captions, footer group headers. Eyebrows are
  primary-colored; caption labels are muted.
- **Mono/Numeric** (500–600, 0.75rem, `tabular-nums`): step numbers ("01"),
  currency chips, phone-mock amounts.

### Named Rules
**The One Gradient Rule.** Exactly one text gradient exists — `.text-gradient` on
a single hero word ("Your rules."). Never apply gradient text to a second
element, a whole heading, or body copy.

**The Eyebrow Rule.** Every major section opens with an uppercase 0.18em label,
primary-colored, then the `h2`. Keep the pattern consistent; don't invent
per-section variants.

## Layout

- **Container:** centered, `max-width: 72rem` (`max-w-6xl`), horizontal padding
  16px mobile / 24px ≥640px. A few narrower blocks use `max-w-3xl` (final CTA)
  and `max-w-2xl` (centered section intros).
- **Section rhythm:** vertical padding 96px mobile, 112px on `md+`
  (`py-24 md:py-28`). Alternating full-bleed bands (`bg-muted/30` with
  `border-y`) break the white.
- **Grids:** 4-up pillar grid (`sm:2 → lg:4`). Bento feature grid on a 6-column
  track with `auto-rows-[14rem]`, tiles spanning 3/6 or 6/6 and up to `row-span-2`.
  "How it works" is an asymmetric `[0.9fr_1.1fr]` two-column.
- **Gap scale:** 16px between cards/tiles (`gap-4`), 24–48px between layout
  regions.
- **Breakpoints:** Tailwind defaults — `sm` 640, `md` 768, `lg` 1024. Mobile nav
  collapses to a dropdown below `md`.
- **Scroll:** smooth, with `scroll-padding-top: 80px` to clear the sticky nav.

## Elevation & Depth

Flat by default; a single glow reserved for intent. Surfaces rest on hairline
borders (`border-border/60`) and tonal contrast against the textured background,
not shadow. Cards do not float. The one intentional shadow is `--shadow-glow`, a
tight mint ring + soft mint drop, and it appears only on things the user is meant
to act on: primary buttons, the numbered step icons, hover state of the pillar
cards, the final-CTA app icon. Radix popovers/dropdowns keep their default
`shadow-md`. The phone mock uses `shadow-2xl` as an intentional product-photo
exception.

### Shadow Vocabulary
- **Glow** (`box-shadow: 0 0 0 1px color-mix(in oklch, var(--primary) 18%, transparent), 0 8px 32px -10px color-mix(in oklch, var(--primary) 45%, transparent)`):
  primary CTAs, key iconography, hover lift on interactive cards. The only
  brand shadow.
- **Glass** (`backdrop-filter: blur(10px) saturate(140%)` + 88%-opaque background
  + bottom hairline): the sticky nav (`.glass-strong`) and a few
  `bg-background/60 backdrop-blur` chips. Depth by blur, not by shadow.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. If something has a
shadow, it is either interactive, the nav glass, or the phone photo — no
exceptions. Never add ambient card shadows "for polish".

**The Glow-Means-Go Rule.** `shadow-glow` is a call-to-action signal. Don't put
it on decorative elements or non-primary buttons.

## Shapes

Soft geometry, generous radii, hairline strokes. Radius scale is driven by
`--radius: 0.75rem`: controls and chips are fully pill (`rounded-full`), small
elements 8–12px, cards and feature tiles 20–28px (`rounded-2xl`/`rounded-3xl`),
the phone frame 40px (`rounded-[2.5rem]`). Borders are 1px, tinted-neutral, and
usually 40–70% opacity. No hard 90° corners on content surfaces; no heavy or
double borders. Icon holders are squircle-ish rounded squares
(`rounded-xl`/`rounded-lg`) with a 10%-primary fill and a `ring-1 ring-primary/20`.

## Components

### Buttons
- **Shape:** fully pill (`rounded-full`). Heights 40px (`sm`) / 44px (`lg`);
  horizontal padding 16–24px; `gap-2` for leading/trailing icons at 16px.
- **Primary:** `bg-primary` + `text-primary-foreground`, carries `shadow-glow`.
  Hover: `bg-primary/90`, `transition-colors` only (no transform). This is the
  Google Play / "Get the app" CTA everywhere.
- **Outline:** 1px `border-input` (often `border-border/70`), `bg-background`
  (sometimes `/60` + `backdrop-blur`). Hover: `bg-accent` + `text-accent-foreground`.
  Used for "Download APK", "View the repo", "Source".
- **Ghost / Icon:** no fill at rest; hover `bg-accent`. Used for the theme toggle
  and mobile menu triggers, always `size-9 rounded-full`.
- **Link:** primary color, `underline-offset-4`, underline on hover. Inline text
  CTAs ("Read the FAQ").
- **Focus:** `focus-visible:ring-2 ring-ring ring-offset-2` on all variants.

### Cards / Containers
- **Corner style:** 20–28px (`rounded-2xl` / `rounded-3xl`); the base shadcn
  `Card` is `rounded-lg` but marketing tiles override to the larger radii.
- **Background:** `bg-card` or `bg-card/60`; some tiles layer an inset
  `dot-bg`/`grid-bg` texture at 40–60% opacity behind content.
- **Border:** 1px `border-border/60`. **Shadow:** none at rest (see Elevation).
- **Hover (interactive tiles only):** `-translate-y-0.5`,
  `border-primary/40`, `shadow-glow`, `transition-all`.
- **Internal padding:** 24px (`p-6`) small, 28px (`p-7`) standard, 32–48px
  (`p-8`/`p-12`) for the large open-source band.

### Chips / Pills
- **Style:** `rounded-full` 1px `border-border/60`, `bg-background/70`, 12–14px
  horizontal padding, `text-xs`. Currency chips use `font-mono`.
- **Status chip:** adds a pinging primary dot (`animate-ping` + solid core).
- **Badge (shadcn):** `rounded-full`, `text-xs font-semibold`, default variant is
  primary-filled; used sparingly.

### Navigation
- **Bar:** sticky, `h-16`, `.glass-strong` (blurred 88%-opaque background +
  bottom hairline + a faint via-border gradient rule). `z-50`.
- **Links (desktop):** grouped in a `rounded-full` border-hairline pill
  container; each link `h-8 rounded-full px-3.5 text-sm`. Active =
  `bg-primary/10 text-foreground`; inactive = `text-muted-foreground` →
  `hover:text-foreground`.
- **Right cluster:** GitHub icon link, theme toggle (Sun/Moon), primary "Get the
  app" pill with `shadow-glow` and an `ArrowUpRight`.
- **Mobile (<md):** theme toggle + `Menu` trigger opening a Radix dropdown with
  the same links; "Get the app" item is primary-colored.

### Accordion (FAQ)
- **Item:** `border-b` hairline only, no card. Trigger `py-4 font-medium`,
  `hover:underline`, chevron rotates 180° on open. Content `text-sm`, animated
  via `tw-animate-css` accordion up/down.

### Signature: Phone Mock (`HeroPhone`)
Product stand-in, not a real screenshot. Outer frame `rounded-[2.5rem]`
hairline + `shadow-2xl` + `backdrop-blur`; inner screen `rounded-[2rem]` on
`bg-background/80`. Contains a faux status bar, a primary-tinted balance card
(`bg-primary/10 border-primary/25`, `tabular-nums`), and transaction rows with
skeleton bars for labels and colored `font-mono` amounts (mint for +, rose for
−). Keep it schematic — no real numbers implied as data, no added chrome.

### Background Utilities
- **`.mesh-bg`:** two soft mint radial ellipses over `--background`.
- **`.grid-bg`:** 32px lines at ~5% opacity, masked to fade downward.
- **`.dot-bg`:** 18px radial dots, used inside cards at low opacity.
- **`.spotlight-bg`:** top-centered mint radial, masked to fade — final CTA only.
  Combine at most two per section; always behind content at `-z-10`.

## Do's and Don'ts

### Do:
- **Do** keep mint primary as the single accent, under ~10% of any viewport
  (The One Voice Rule).
- **Do** use the OKLCH tokens for every color, including neutrals — they carry a
  low-chroma mint/teal hue on purpose (The Tinted Neutral Rule).
- **Do** open each section with an uppercase 0.18em primary eyebrow, then the
  `h2` (The Eyebrow Rule).
- **Do** keep surfaces flat; reserve `shadow-glow` for CTAs, key icons, and
  interactive-card hover (The Flat-By-Default / Glow-Means-Go Rules).
- **Do** use fully pill buttons and 20–28px card radii; borders are 1px
  tinted-neutral at 40–70% opacity.
- **Do** respect `prefers-reduced-motion` — the only baseline animation is a
  single 0.6s `fade-up`.
- **Do** maintain full light/dark parity; every new color goes in both `:root`
  and `.dark`.

### Don't:
- **Don't** add a second accent hue anywhere outside charts or the phone-mock
  data.
- **Don't** apply gradient text to more than the one hero word (The One Gradient
  Rule).
- **Don't** add ambient/decorative shadows to cards, or put `shadow-glow` on
  non-primary elements.
- **Don't** use pure grays (`#71717a`, `slate-*`, `zinc-*`) — they clash with the
  tinted neutrals.
- **Don't** stack more than two background utilities in one section, or let them
  sit above content.
- **Don't** put real-looking financial figures in the phone mock as if they were
  live data; keep it schematic.
- **Don't** introduce heavy/scale hover transforms on buttons — hover is
  `transition-colors`, cards lift at most `-translate-y-0.5`.
