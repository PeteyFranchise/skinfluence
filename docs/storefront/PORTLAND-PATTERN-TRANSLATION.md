# Portland Pattern Translation for Skinfluence

This document translates Portland-inspired design patterns into practical Skinfluence storefront changes.

The goal is not to switch themes.
The goal is to borrow the right visual ideas and implement them inside the current Skinfluence theme.

## 1. Pattern: Editorial section rhythm

### What Portland does
Portland uses content blocks that feel like intentionally sequenced design moments rather than a long stack of similar sections.

### What Skinfluence should do
Continue increasing contrast between sections so the homepage feels paced.

Implementation direction:
- alternate between:
  - clean light sections
  - soft highlight panels
  - darker editorial bands
- make sure not every section uses the same surface and spacing treatment

Current status:
- partially implemented
- homepage now has stronger trust-strip contrast and rich-text style variation

Next improvement:
- add one more visually distinctive media-led section or darker narrative band if needed

## 2. Pattern: Media earns attention

### What Portland does
Images feel important, not decorative.

### What Skinfluence should do
Replace fallback artwork with real imagery in the most important conversion and trust locations.

Implementation direction:
- prioritize:
  1. homepage hero
  2. homepage side-by-side block
  3. start-evaluation hero
  4. support hero
  5. support contact visual

Current status:
- image slots and alt fields exist
- fallback SVGs still appear where no real image is uploaded

Next improvement:
- upload real images through the theme editor using `IMAGE-SLOT-GUIDE.md`

## 3. Pattern: Distinct page openings

### What Portland does
Different pages do not all announce themselves in the exact same visual register.

### What Skinfluence should do
Keep page-specific hero differentiation so each route feels like a different moment in the funnel.

Implementation direction:
- homepage = strongest brand statement
- evaluation = calm, guided handoff
- pricing = precise, structured, clearer
- FAQ = lighter, lower-friction intro
- support = warm, competent, reassuring

Current status:
- implemented through page-specific hero modifiers

Next improvement:
- reinforce those differences with real images, not just surface styling

## 4. Pattern: Content-forward, not catalog-forward

### What Portland does
The theme feels like it was designed for storytelling rather than only merchandise browsing.

### What Skinfluence should do
Preserve the current content-first architecture.

Implementation direction:
- keep homepage and treatment pages educational
- keep evaluation handoff page branded and explanatory
- avoid turning the experience into a product-grid storefront

Current status:
- already aligned

Next improvement:
- tighten copy density where sections still feel too wordy
- let images carry more emotional load

## 5. Pattern: Premium through restraint

### What Portland does
The experience feels premium because it is restrained, not because it is overloaded.

### What Skinfluence should do
Use fewer decorative signals and stronger core signals.

Implementation direction:
- fewer placeholder effects
- more useful contrast
- sharper spacing decisions
- stronger typography-to-image pairing

Current status:
- moving in the right direction

Next improvement:
- keep visual polish focused on:
  - imagery
  - spacing
  - contrast
  - CTA confidence

## 6. Pattern: Support and trust feel designed

### What Portland does
Utility pages can still feel intentional.

### What Skinfluence should do
Support, FAQ, pricing, and evaluation should feel as designed as the homepage.

Implementation direction:
- continue improving:
  - support routing
  - FAQ hierarchy
  - pricing structure
  - evaluation trust signals

Current status:
- support selector added
- pricing and FAQ already improved

Next improvement:
- use imagery and subtle layout differentiation to make utility pages feel even more premium

## Recommended Next Implementation Order

1. Upload real homepage hero image
2. Upload homepage side-by-side image
3. Upload start-evaluation hero image
4. Upload support hero image
5. Upload support contact visual
6. Reassess whether pricing needs a dedicated uploaded hero image
7. Do one more homepage and utility-page visual pass after imagery is live

## Bottom Line

Portland should function as a filter for design decisions:

- Does this make Skinfluence feel more editorial?
- Does this improve pacing and calmness?
- Does this make the site feel more premium without making it less clear?

If yes, it is a good Portland-inspired move.
If it only makes the site look more decorative, it is the wrong move.
