# Theme Build Status

This note tracks what has already been implemented in the Shopify theme workspace and what still remains to be built.

## Current theme scope

The repo now contains:

- a legacy custom storefront foundation under `theme/`
- an active Portland storefront workspace under `theme-portland/`

The legacy custom storefront under `theme/` contains:

- a base `theme.liquid` layout
- a global stylesheet scaffold
- reusable content sections
- launch-page JSON templates
- header and footer shell scaffolding
- early theme settings wiring

Important current split:

- the custom theme under `theme/` is now a legacy engineering and content reference
- Portland under `theme-portland/` is the primary active storefront build target
- future storefront work should default to `theme-portland/`

Architecture reference:

- `docs/storefront/handoff/PORTLAND-ARCHITECTURE-AND-DEPLOYMENT.md`

## Implemented

### Layout and assets

- `theme/layout/theme.liquid`
- `theme/assets/skinfluence-base.css`
- `theme/assets/skinfluence-hero-art.svg`
- `theme/assets/skinfluence-evaluation-art.svg`
- `theme/assets/skinfluence-support-art.svg`

Status:

- implemented
- wired to `content_for_layout`
- includes header and footer section groups
- includes theme setting color injection
- includes evaluation CTA routing support
- includes branded fallback artwork support

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
- `theme/sections/legal-page-body.liquid`
- `theme/sections/pricing-breakdown.liquid`

Status:

- implemented as first-pass scaffolds
- schema exists
- content is editable
- styling is substantially refined
- image fallback and editor-upload workflows exist for key sections

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
- `theme/templates/page.evaluation.json`
- `theme/templates/page.json`

Status:

- implemented as launch-page scaffolds
- populated with live scaffold content and dedicated handoff pages
- custom page templates are actively assigned in the dev store

### Theme configuration

- `theme/config/settings_schema.json`
- `theme/config/settings_data.json`

Status:

- implemented as an early scaffold
- supports basic color settings
- supports shared evaluation destination routing
- supports current dev-theme defaults

## Not yet implemented

### Shopify runtime and deployment tooling

- documented local Shopify theme development workflow
- documented theme push workflow
- deploy or production publish workflow still pending

### More complete global theme structure

- menu setup documentation
- header mobile-nav interaction logic beyond the current shell
- more complete footer content variants

### Section maturity improvements

- stronger schema defaults and presets
- more robust field coverage for images, icons, spacing, and optional content states
- richer empty-state handling
- stronger content guardrails for support and legal pages

### Visual maturity

- more differentiated section variants for all content types
- richer mobile polish
- stronger final production art direction

### Functional maturity

- actual Bask evaluation URL connection
- support form routing and operational integration
- legal-page content replacement with approved final copy
- pricing-page exact policy and billing language

## Current assessment

The theme is no longer just planning work. It is now a real early storefront scaffold.

It is best described as:

- structurally strong for a first implementation pass
- visually cohesive with branded fallback artwork
- content-rich enough to keep moving without blocking on final vendor setup
- not yet production-ready

## Recommended next steps

1. continue building remaining core pages in `theme-portland/`
2. connect the final Bask intake URL
3. replace placeholder legal text with approved final copy
4. validate menus and final admin content setup
5. decide when the legacy `theme/` folder should be archived more explicitly

Archive policy reference:

- `docs/storefront/handoff/LEGACY-THEME-ARCHIVAL-PLAN.md`

## Commit milestone summary

The following implementation milestones now exist in Git history:

- homepage template and section scaffolds
- treatment, pricing, and how-it-works templates
- theme layout and base styling scaffold
- FAQ, about, support templates and theme settings
- header, footer, and global navigation scaffolding
- visual system refinement
- layout and mobile CTA theme-setting wiring
