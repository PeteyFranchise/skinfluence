# Content Source of Truth

This document defines the current source-of-truth content structure for the Skinfluence storefront.

It is not meant to replace every detailed copy document in `exports/`.
It is meant to answer a simpler operational question:

**Which copy set should the storefront team treat as the active working baseline?**

## Core rule

Use this file as the operational storefront content index.

That means:

- page-level messaging decisions should be summarized here
- if a page’s live copy changes materially, update this file
- if a more detailed export document changes the intended messaging, update this file to match

This prevents the storefront from drifting across:

- old exports
- theme JSON defaults
- Shopify editor content
- ad hoc edits

## Current authoritative content posture

The Skinfluence storefront currently has:

- detailed long-form copy in exported documents
- working copy already embedded into theme templates
- a live Shopify dev store with scaffold content

For day-to-day storefront work, the **theme/template copy plus this summary document** should be treated as the active implementation baseline until a newer approved copy package replaces it.

## Page-by-page source status

### Homepage

Current role:
- brand statement
- anti-aging positioning
- evaluation-first conversion entry

Current active message:
- Skinfluence is provider-reviewed, prescription-led anti-aging care
- the user starts with evaluation
- the experience is positioned as more elevated and more consistent than ordinary skincare

Working source:
- `theme/templates/index.json`

Detailed source references:
- `exports/Skinfluence-Homepage-Copy-v2.docx`
- `exports/Skinfluence-Polished-Website-Copy.docx`
- `exports/Skinfluence-UX-Copy-Package.docx`

### Start Evaluation

Current role:
- branded handoff page before Bask

Current active message:
- the user begins with provider-reviewed intake
- not everyone will be eligible
- Bask should only appear at the final handoff step later

Working source:
- `theme/templates/page.evaluation.json`

Supporting rule:
- see `docs/storefront/handoff/EVALUATION-HANDOFF.md`

### Treatment

Current role:
- explanation of the treatment model
- who it is for
- what it is designed to improve

Current active message:
- Skinfluence is a more advanced anti-aging routine for women ready for more than over-the-counter skincare
- treatment is monthly if approved
- refill continuity happens through subscription

Working source:
- `theme/templates/page.treatment.json`

### Pricing

Current role:
- explain one-time evaluation plus monthly treatment if approved

Current active message:
- users begin with a one-time evaluation
- approved users move into recurring monthly treatment
- pricing is positioned as premium and clearer than generic tretinoin marketplaces

Working source:
- `theme/templates/page.pricing.json`

Supporting rule:
- see `docs/storefront/handoff/PRODUCT-SUBSCRIPTION-MODEL.md`

### How It Works

Current role:
- show the 3-step evaluation-first process

Current active message:
1. complete evaluation
2. receive provider review
3. begin monthly care if approved

Working source:
- `theme/templates/page.how-it-works.json`

### FAQ

Current role:
- answer objections and clarify fit, review, pricing, and subscription expectations

Current active message:
- not everyone is approved
- there is a one-time evaluation before treatment
- treatment is a recurring monthly model if approved

Working source:
- `theme/templates/page.faq.json`

### Support

Current role:
- clarify general support vs treatment-related support

Current active message:
- support is split between general commerce questions and treatment-related concerns
- users should not be encouraged to send medically sensitive questions into a generic support inbox without the right workflow

Working source:
- `theme/templates/page.support.json`
- `theme/sections/support-contact.liquid`

Supporting rule:
- see `docs/storefront/handoff/SUPPORT-OPERATING-MODEL.md`

### About

Current role:
- explain why Skinfluence exists and what kind of brand experience it is building

Current active message:
- more serious anti-aging care
- stronger guidance
- more elevated than standard skincare shopping

Working source:
- `theme/templates/page.about.json`

### Legal pages

Current role:
- legal/policy pages with a readable shell

Current active message:
- structure exists
- final approved legal language is still pending

Working source:
- `theme/templates/page.legal.json`
- `theme/sections/legal-page-body.liquid`

Detailed source references:
- legal exports and counsel-approved copy when available

## Official messaging rules

These rules should remain consistent across all pages:

### Evaluation

- users start with evaluation
- provider review happens before treatment
- not everyone will be eligible

### Treatment

- treatment is framed as premium anti-aging care
- it is not positioned as generic commodity tretinoin

### Subscription

- subscription language should only describe recurring monthly treatment **if approved**
- avoid implying treatment starts before review

### CTA language

- major public CTA: `Start Evaluation`
- all major public evaluation CTAs point to `/pages/start-evaluation`
- Bask should only appear at the final handoff step later

## Where final copy should eventually come from

When the team is ready to lock launch copy more formally, the ideal flow is:

1. approve final copy in a dedicated copy package
2. update this file with the official page-by-page baseline
3. update theme JSON defaults and Shopify live content to match

Until then, use:

- current theme/template copy
- this file
- the product/subscription model
- the evaluation handoff rule

as the working source of truth.

## Related documents

- `docs/storefront/handoff/EVALUATION-HANDOFF.md`
- `docs/storefront/handoff/PRODUCT-SUBSCRIPTION-MODEL.md`
- `docs/storefront/handoff/SUPPORT-OPERATING-MODEL.md`
- `docs/storefront/handoff/THEME-HANDOFF.md`
- `docs/storefront/process/SHOPIFY-SETUP-ASSUMPTIONS.md`
