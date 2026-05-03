# Theme Build Status

This note tracks what has already been implemented in the Shopify theme workspace and what still remains to be built.

## Current theme scope

The repo now contains an early Shopify storefront foundation under `theme/` with:

- a base `theme.liquid` layout
- a global stylesheet scaffold
- reusable content sections
- launch-page JSON templates
- header and footer shell scaffolding
- early theme settings wiring

## Implemented

### Layout and assets

- `theme/layout/theme.liquid`
- `theme/assets/skinfluence-base.css`

Status:

- implemented
- wired to `content_for_layout`
- includes header and footer section groups
- includes theme setting color injection

### Reusable sections

- `theme/sections/hero-skinfluence.liquid`
- `theme/sections/trust-strip.liquid`
- `theme/sections/rich-text-skinfluence.liquid`
- `theme/sections/side-by-side-content.liquid`
- `theme/sections/how-it-works-steps.liquid`
- `theme/sections/who-its-for.liquid`
- `theme/sections/benefit-grid.liquid`
- `theme/sections/faq-accordion-skinfluence.liquid`
- `theme/sections/cta-banner-skinfluence.liquid`
- `theme/sections/support-contact.liquid`

Status:

- implemented as first-pass scaffolds
- schema exists
- content is editable
- styling is partially refined

### Header and footer shell

- `theme/sections/header.liquid`
- `theme/sections/footer.liquid`
- `theme/sections/announcement-bar.liquid`
- `theme/sections/sticky-mobile-cta.liquid`
- `theme/sections/header-group.json`
- `theme/sections/footer-group.json`

Status:

- implemented
- supports menu assumptions and CTA placement
- needs real Shopify menu setup in admin to function fully

### Page templates

- `theme/templates/index.json`
- `theme/templates/page.treatment.json`
- `theme/templates/page.pricing.json`
- `theme/templates/page.how-it-works.json`
- `theme/templates/page.faq.json`
- `theme/templates/page.about.json`
- `theme/templates/page.support.json`
- `theme/templates/page.legal.json`

Status:

- implemented as launch-page scaffolds
- populated with initial structure and draft content assumptions
- ready for refinement and live content replacement

### Theme configuration

- `theme/config/settings_schema.json`

Status:

- implemented as an early scaffold
- supports basic color settings
- supports basic CTA helper settings

## Not yet implemented

### Shopify runtime and deployment tooling

- local Shopify theme development workflow
- theme pull/push workflow
- deploy or preview process documentation

### More complete global theme structure

- `settings_data.json` starter assumptions
- menu setup documentation
- header mobile-nav interaction logic beyond the current shell
- more complete footer content variants

### Section maturity improvements

- stronger schema defaults and presets
- more robust field coverage for images, icons, spacing, and optional content states
- richer empty-state handling
- stronger content guardrails for support and legal pages

### Visual maturity

- more refined typography system
- more differentiated section variants
- better imagery handling and placeholders
- richer mobile polish
- tighter accordion and card interactions

### Functional maturity

- actual evaluation-flow URL strategy
- support form routing and operational integration
- legal-page content replacement with approved final copy
- pricing-page exact policy and billing language

## Current assessment

The theme is no longer just planning work. It is now a real early storefront scaffold.

It is best described as:

- structurally strong for a first implementation pass
- visually promising but still early
- content-rich enough to keep moving
- not yet production-ready

## Recommended next steps

1. document Shopify menu and page assumptions
2. define the local preview and deployment workflow
3. refine section schemas and settings coverage
4. tighten visual polish on the highest-traffic templates
5. replace placeholder URLs and assumptions with real admin/page mappings

## Commit milestone summary

The following implementation milestones now exist in Git history:

- homepage template and section scaffolds
- treatment, pricing, and how-it-works templates
- theme layout and base styling scaffold
- FAQ, about, support templates and theme settings
- header, footer, and global navigation scaffolding
- visual system refinement
- layout and mobile CTA theme-setting wiring
