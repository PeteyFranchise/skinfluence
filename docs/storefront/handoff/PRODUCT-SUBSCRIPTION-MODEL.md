# Product and Subscription Model

This document defines the official Skinfluence storefront product model for launch planning.

The goal is to give the storefront, pricing pages, support workflows, and future Bask handoff a single source of truth.

## Launch model summary

Skinfluence is not a broad ecommerce catalog.

The storefront should assume:

- one hero anti-aging treatment offer
- one evaluation-first entry path
- provider review before treatment begins
- monthly treatment only if approved
- recurring subscription logic after approval

The public storefront should present this as a guided care model, not a generic product-shopping flow.

## Official launch offer structure

### 1. Evaluation

Users start with:

- a one-time evaluation
- provider review of submitted information
- no treatment until review is complete

Storefront language should consistently describe this as:

- a one-time evaluation
- a provider-reviewed intake
- the first step before treatment begins

### 2. Treatment if approved

If approved, users move into:

- one recurring monthly treatment model
- refill continuity through subscription
- support and continuity expectations attached to the recurring model

Storefront language should consistently describe this as:

- monthly treatment if approved
- recurring monthly maintenance model
- provider-reviewed anti-aging care

## Recommended Shopify object model

For planning purposes, the storefront should assume:

### Product object 1

- name: `Anti-Aging Monthly Treatment`
- role: hero recurring offer
- public positioning: monthly treatment if approved

### Product object 2 (optional)

- name: `Evaluation`
- role: one-time evaluation fee object if billing logic requires it
- public positioning: one-time evaluation before treatment begins

This second product should only exist if Shopify/Bask/billing operations require it.

If evaluation billing is handled outside the main Shopify product model, do not force it into the storefront as a fake catalog item.

## Official pricing logic

The storefront should consistently communicate:

1. users start with a one-time evaluation
2. treatment only happens if approved
3. approved users move into a recurring monthly treatment model

The storefront should not imply:

- everyone is automatically approved
- treatment starts immediately after a CTA click
- the experience is a normal add-to-cart skincare purchase

## What should be visible publicly

The public site should emphasize:

- one-time evaluation
- provider review
- monthly care if approved
- recurring continuity
- support and expectations

The public site should avoid over-emphasizing:

- SKU-level complexity
- product-grid shopping
- multiple treatment variants unless they truly exist at launch
- a catalog-style browsing experience

## Subscription assumptions

The launch storefront currently assumes:

- one recurring monthly care model
- billing timing should be clearly disclosed
- shipment cadence should be clearly disclosed
- pause / skip / cancellation policies should be clearly disclosed once finalized
- subscription terms should match the legal and account experience

Until final operations are locked, the storefront should describe these policies carefully and avoid false precision.

## Support implications

The support model should assume two broad categories:

### 1. General commerce/support

- billing
- shipping
- account access
- general product questions

### 2. Care-path / treatment-related concerns

- irritation
- treatment-use concerns
- refill suitability
- issues that may require provider follow-up

This separation should remain visible in the storefront and support form behavior.

## Bask implications

Once Bask is live, the storefront should still preserve:

- public CTAs -> `/pages/start-evaluation`
- Bask only at the final handoff step

Bask should be treated as the intake/review system behind the storefront, not the public product architecture.

## Official storefront messaging rules

Use language like:

- `Start with a one-time evaluation`
- `Move into monthly treatment if approved`
- `Provider-reviewed anti-aging care`
- `Recurring monthly maintenance model`

Avoid language like:

- `Buy now`
- `Add to cart`
- `Shop treatments`

unless the actual launch model changes materially.

## What is still not locked

These details remain pending and should be finalized later:

- exact Bask intake URL
- whether the evaluation fee is represented as a Shopify product or handled elsewhere
- final approved recurring billing rules
- final shipment cadence language
- final pause / skip / cancellation policy wording
- final legal copy

## Recommended next operational follow-up

After this model is accepted, the next docs to keep aligned are:

- `docs/storefront/handoff/EVALUATION-HANDOFF.md`
- `docs/storefront/process/SHOPIFY-SETUP-ASSUMPTIONS.md`
- pricing page copy
- FAQ copy
- support page routing language

If the product model changes later, update this document first and then update downstream storefront copy.
