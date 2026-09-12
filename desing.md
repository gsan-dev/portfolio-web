---
name: Precision Engineering
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#918fa1'
  outline-variant: '#464555'
  surface-tint: '#c3c0ff'
  primary: '#c3c0ff'
  on-primary: '#1d00a5'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#4d44e3'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#00678c'
  on-tertiary-container: '#b2e1ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  mono-metric:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  mono-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system embodies the ethos of senior-level technical craftsmanship: measured, austere, and deeply considered. Inspired by Swiss modernist information design and modern Northern European minimalism, it rejects theatrical tech tropes—such as neon terminal phosphors, fake scanlines, and chaotic matrix motifs—in favor of structural discipline, pure typographic hierarchy, and architectural restraint.

The aesthetic communicates quiet competence, operational excellence, and systems-level clarity. Every border, margin, and character spacing token is calibrated to position the personal brand as an executive-tier engineer who handles both complex frontend architecture and mission-critical homelab/cloud infrastructure with equal elegance. Surfaces are quiet and dark; typography is needle-sharp; interactive accents act as controlled pulses of electric sapphire rather than distracting focal points.

## Colors

The palette operates entirely in an ultra-deep, cold-neutral dark spectrum with precise, surgical contrasts:

- **Base Surfaces**: The primary canvas sits at `#0a0c10` (a nuanced, deep obsidian slate). Elevated structural panels leverage `#11141a` with 70–80% alpha channels for backdrop filtration.
- **Borders & Dividers**: All structural containment relies on `#1e232d` and `#272e3b` (subtle zinc-slate), ensuring layout discipline without visual weight.
- **Text Layers**:
  - Headings & Primary metrics: `#f8fafc` (high-contrast crisp white).
  - Body & Descriptive copy: `#cbd5e1` (softened slate-300, avoiding retina fatigue).
  - Subtle / Metadata / Timestamps: `#64748b` (slate-500).
- **Interactive Accents**: `#4f46e5` (Electric Indigo) and `#6366f1` (Vibrant Violet-Indigo) serve strictly for micro-interactions, active navigation indicators, pill badges, and refined focus rings. An auxiliary `#38bdf8` (electric sapphire) is reserved for infrastructure status signals (e.g., operational metrics, active cluster nodes).

## Typography

The typographic hierarchy relies on **Geist** for all communicative and structural prose, leveraging its geometric precision, low stroke contrast, and architectural proportions. Headings feature tight negative letter-spacing to present a chiseled, editorial finish.

To accent homelab architecture, deployment specifications, and technical metadata without regressing into novelty hacker themes, **JetBrains Mono** is introduced selectively for micro-labels, hardware specs, uptime indicators, git tags, and architectural hashes. All uppercase mono labels carry deliberate tracking (`letter-spacing: 0.04em`) to maintain legibility at sub-12px sizes.

## Layout & Spacing

The layout is anchored by a centered, constrained grid capped at a maximum width of `1120px` to maintain optimal line-lengths and deliberate Swiss margins.

- **Desktop (1024px+)**: 12-column layout with 24px (`1.5rem`) gutters and 48px (`3rem`) lateral margins. Section blocks alternate between full-width structural partitions and offset asymmetrical splits (e.g., 4-column sticky meta rail paired with an 8-column deep-dive case study or infrastructure diagram).
- **Tablet (640px – 1023px)**: 8-column layout with 20px gutters and 32px lateral margins. Asymmetrical side-rails collapse into vertical sequence headers.
- **Mobile (< 640px)**: 4-column fluid layout with 16px (`1rem`) gutters and 20px (`1.25rem`) lateral margins. All multi-column cards stack linearly.

Vertical rhythm relies on generous section gaps (`space-2xl` to `space-3xl`) to let dense architectural schemas and typographic blocks breathe naturally.

## Elevation & Depth

Visual depth is achieved through translucent planar layering, hairline structural borders, and subtle tinted backdrops:

- **Level 0 (Canvas)**: Solid deep slate `#0a0c10`.
- **Level 1 (Structural Cards & Modules)**: Background `#11141a` rendered at 80% opacity with a `12px` backdrop blur (`backdrop-filter: blur(12px)`). Encased in a crisp, 1px border colored `#1e232d`.
- **Level 2 (Active/Hover Cards & Popovers)**: Background `#161a22` at 90% opacity, bordered by `#2b3442`. Augmented with an ambient indigo-tinted floor shadow: `0 8px 32px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(79, 70, 229, 0.15)`.
- **Level 3 (Modal / Command Overlays)**: Surface `#12161f` (95% opacity), encased in 1px `#333f52`, with `0 24px 64px -12px rgba(0, 0, 0, 0.8)`.

Heavy dropshadows are forbidden. Separation must always be driven by subtle value shifts and razor-thin boundary lines.

## Shapes

The design system employs a disciplined **Soft (`1`)** shape language:

- Base cards, modules, and inputs utilize `0.375rem` (6px) to `0.5rem` (8px).
- Badges, technical tags, and micro-pills use `0.25rem` (4px).
- Circular elements are strictly reserved for avatar badges, server status pings, and icon-only button states.

This controlled geometry prevents the casual playfulness of hyper-rounded surfaces, preserving an engineered, Swiss-modern architectural tone across every component.

## Components

### Buttons
- **Primary**: Solid crisp white text on `#4f46e5` (Electric Indigo), transitioning to `#4338ca` on hover. Minimal height (38px desktop), horizontal padding `1rem`, font: Geist Medium 14px. Sharp 6px corners. No bevels.
- **Secondary / Ghost**: Semi-transparent surface (`rgba(255, 255, 255, 0.03)`), 1px border in `#1e232d`, text in `#cbd5e1`. On hover: surface shifts to `rgba(255, 255, 255, 0.06)`, border to `#333f52`, and text to `#ffffff`.

### Micro-Badges & Tech Specs
- Pill-shaped or 4px-radius badges featuring `JetBrains Mono` at 11px uppercase.
- Neutral state: Background `rgba(255, 255, 255, 0.04)`, border 1px `rgba(255, 255, 255, 0.08)`, text `#94a3b8`.
- Active/Live state (e.g., node status, production cluster): Leading 6px circular indicator with steady emerald/sapphire glow, bordered by `rgba(56, 189, 248, 0.2)`.

### Cards & Case Studies
- Card surfaces feature Level 1 elevation (subtle glass, 1px `#1e232d` border).
- Top edge incorporates an optional subtle gradient hairline (`border-t` highlight) running from transparent to `rgba(255, 255, 255, 0.08)` to transparent.
- Internal padding is disciplined at `1.5rem` (`space-lg`).

### Form Elements & Search
- Inputs are dark (`#0c0f14`), inset by 1px border (`#1e232d`).
- Focus state: Border instantly shifts to `#4f46e5` with a subtle outline offset: `box-shadow: 0 0 0 1px #4f46e5`.
- Text is crisp 14px Geist with `#64748b` placeholder values.

### Homelab / Node Status Cards (Portfolio Specific)
- Structured key-value rows pairing `JetBrains Mono` 12px muted keys (`#64748b`) with high-contrast values (`#f8fafc`).
- Clean horizontal 1px rule separators with zero background noise.