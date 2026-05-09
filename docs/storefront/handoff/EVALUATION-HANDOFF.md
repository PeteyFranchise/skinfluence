# Evaluation Handoff

This note captures how the Skinfluence storefront should hand users into the real evaluation flow.

## Current live storefront behavior

The storefront now uses a dedicated public page as the evaluation handoff:

- public route: `/pages/start-evaluation`
- template: `page.evaluation`
- theme setting: `evaluation_url`

All major `Start Evaluation` CTAs are designed to resolve through the shared evaluation destination rather than pointing directly to an informational page.

## Locked architecture decision

This is now the official Skinfluence CTA rule:

- all major public evaluation CTAs must point to `/pages/start-evaluation`
- the final CTA on `/pages/start-evaluation` should point to Bask once the real intake URL exists

This rule should apply across:

- homepage
- header
- sticky mobile CTA
- treatment page
- pricing page
- FAQ page
- support page where applicable
- footer CTA surfaces where applicable

Direct Bask links should not be scattered across public storefront templates unless there is a deliberate exception.

## Why this structure exists

The storefront should keep a branded handoff layer between marketing content and the real evaluation/intake flow.

That gives Skinfluence:

- a stable public destination for all evaluation CTAs
- room to explain expectations before the handoff
- an easier future swap if Bask or another intake vendor changes
- less hardcoded vendor coupling across theme templates

## Current state

Right now:

- header CTA resolves to `/pages/start-evaluation`
- sticky mobile CTA resolves to `/pages/start-evaluation`
- homepage primary evaluation CTAs resolve to `/pages/start-evaluation`
- the `Start Evaluation` page is currently the branded temporary handoff layer until the real intake destination exists

Temporary-state rule:

- see `docs/storefront/handoff/TEMPORARY-EVALUATION-LAUNCH-STATE.md`

## When the Bask URL is ready

Once the real Bask intake URL exists, update the handoff in this order:

- keep storefront CTAs pointed to `/pages/start-evaluation`
- update the primary hero CTA on `page.evaluation` to the Bask intake URL
- leave Bask out of homepage, nav, pricing, FAQ, and support CTAs

## Recommended launch configuration

Use:

- all global evaluation CTAs -> `/pages/start-evaluation`
- `page.evaluation` primary CTA -> Bask intake URL

This preserves the branded pre-intake layer while still handing users into Bask cleanly.

## Files involved

Theme setting:

- `theme/config/settings_schema.json`
- `theme/config/settings_data.json`

CTA-aware sections:

- `theme/sections/header.liquid`
- `theme/sections/sticky-mobile-cta.liquid`
- `theme/sections/hero-skinfluence.liquid`
- `theme/sections/cta-banner-skinfluence.liquid`
- `theme/sections/side-by-side-content.liquid`

Evaluation page template:

- `theme/templates/page.evaluation.json`

## Store-side objects

Current Shopify page:

- title: `Start Evaluation`
- handle: `start-evaluation`
- template suffix: `evaluation`

## Bask connection checklist

Before wiring the real intake URL:

- confirm the final Bask destination URL
- confirm whether the URL is public, authenticated, or store-specific
- confirm whether query params or tracking params are required
- confirm whether the destination opens in the same tab
- confirm the copy on the evaluation page still matches the real Bask flow

## After wiring the URL

Verify:

- homepage CTA path
- header CTA path
- sticky mobile CTA path
- `Treatment` CTA path
- `Pricing` CTA path
- `FAQ` CTA path where applicable
- `Support` CTA path where applicable
- `Start Evaluation` hero primary CTA

## Recommended final note

Do not hardcode the Bask URL into many different templates unless necessary.

Prefer:

- one branded handoff page
- one real intake URL
- one clear place to update it later
