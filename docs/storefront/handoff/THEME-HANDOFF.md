# Theme Handoff

This note is the practical handoff summary for the current Skinfluence Shopify theme state.

## Active Shopify environment

Development storefront:

- preview store domain: `skinfluence-3060.myshopify.com`
- permanent admin/store auth domain: `ygvwh0-4i.myshopify.com`

Current development theme:

- name: `Development (68b794-Peters-MacBook-Pro)`
- theme id: `155740799134`

## Active GitHub repository

- repo: `https://github.com/PeteyFranchise/skinfluence`
- default branch: `main`

## Core public storefront pages

Current public routes:

- `/`
- `/pages/how-it-works`
- `/pages/treatment`
- `/pages/pricing`
- `/pages/faq`
- `/pages/about`
- `/pages/support`
- `/pages/start-evaluation`
- `/pages/privacy-policy`
- `/pages/terms-of-service`
- `/pages/subscription-terms`

## Template mapping

Current page templates in use:

- home -> `templates/index.json`
- how-it-works -> `templates/page.how-it-works.json`
- treatment -> `templates/page.treatment.json`
- pricing -> `templates/page.pricing.json`
- faq -> `templates/page.faq.json`
- about -> `templates/page.about.json`
- support -> `templates/page.support.json`
- start-evaluation -> `templates/page.evaluation.json`
- privacy-policy -> `templates/page.legal.json`
- terms-of-service -> `templates/page.legal.json`
- subscription-terms -> `templates/page.legal.json`

Fallback:

- generic page fallback -> `templates/page.json`

## Key theme capabilities now in place

- reusable content-driven launch templates
- branded header/footer shell
- shared evaluation CTA routing
- dedicated evaluation handoff page
- legal-page template
- support form section
- FAQ accordion
- pricing breakdown section
- theme-editor image controls for hero and support sections
- built-in branded SVG artwork fallbacks

## Product model reference

The official launch product and subscription model is documented here:

- `docs/storefront/handoff/PRODUCT-SUBSCRIPTION-MODEL.md`

## Content reference

The current operational content baseline is documented here:

- `docs/storefront/handoff/CONTENT-SOURCE-OF-TRUTH.md`

## Theme settings currently important

Global:

- background color
- surface color
- text color
- accent color
- border color
- `evaluation_url`
- `primary_cta_label`
- `secondary_cta_label`
- `mobile_cta_helper`

## Current evaluation flow architecture

Shared evaluation destination:

- `evaluation_url` currently set to `/pages/start-evaluation`

Important:

- this is a locked architecture decision for the storefront
- keep all major evaluation CTAs pointed to the shared destination
- connect Bask later through the evaluation handoff page instead of hardcoding the vendor URL everywhere
- public pages should not link directly to Bask unless there is a deliberate documented exception

See:

- `docs/storefront/handoff/EVALUATION-HANDOFF.md`

## Current image workflow

The theme now supports two image modes:

1. custom image selected in Shopify theme editor
2. built-in branded fallback art from theme assets

Current image-enabled sections:

- `Skinfluence Hero`
- `Support Contact`

Theme asset fallbacks currently included:

- `theme/assets/skinfluence-hero-art.svg`
- `theme/assets/skinfluence-evaluation-art.svg`
- `theme/assets/skinfluence-support-art.svg`

## Shopify editor workflow

Hero visuals:

- open page
- select `Skinfluence Hero`
- set `Hero image`
- optionally add `Hero image alt text`

Support form visual:

- open `Support`
- select `Support Contact`
- set `Support visual`

## Current known gaps

- real Bask intake URL not connected yet
- final production legal language still pending
- real uploaded photography/art direction not fully chosen
- in-app browser admin session was unreliable for direct automated image selection
- the support form is still a generic Shopify contact form, not a routed operational support workflow

## Recommended next priorities

1. connect the Bask intake URL through `page.evaluation`
2. finalize the launch product/subscription model details
3. choose final photography/visual assets in Shopify editor
4. replace placeholder legal text with approved legal copy
5. validate footer menus and legal menus in Shopify admin
