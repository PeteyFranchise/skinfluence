# Shopify Setup Assumptions

This note captures the current assumptions behind the Skinfluence Shopify theme so the storefront is easier to configure, preview, and hand off.

## Store role

The Shopify store is assumed to act as the public storefront shell for:

- homepage
- treatment page
- pricing page
- how-it-works page
- FAQ page
- about page
- support page
- legal pages

It is not assumed to be the clinical system of record.

## Page-handle assumptions

The current template scaffolds assume these page handles:

- `/pages/treatment`
- `/pages/pricing`
- `/pages/how-it-works`
- `/pages/faq`
- `/pages/about`
- `/pages/support`

For legal pages, the theme assumes separate pages will exist for:

- privacy policy
- terms of service
- subscription terms
- telehealth consent
- medical disclaimer
- refund policy

The exact handles can change, but if they do, the CTA URLs and menu configuration should be updated to match.

## CTA assumptions

The launch CTA system currently assumes:

- primary CTA: `Start Evaluation`
- secondary CTA: `How It Works`
- treatment CTA: `Start Evaluation`

Current theme scaffolds often point the primary CTA to `/pages/how-it-works` as a placeholder.

That should eventually be replaced with the real evaluation-flow entry URL once the workflow is finalized.

## Menu assumptions

The theme currently assumes a Shopify navigation setup with:

### Main menu

Recommended items:

- How It Works
- Treatment
- Pricing
- FAQ

### Footer menu

Recommended items:

- About
- Support
- Contact

### Legal menu

Recommended items:

- Privacy Policy
- Terms of Service
- Subscription Terms
- Telehealth Consent
- Medical Disclaimer
- Refund Policy

The header currently expects a menu with the handle:

- `main-menu`

The footer group currently expects:

- `footer`

For both footer and legal slots.

That is a placeholder assumption. In a more complete implementation, separate footer and legal menus should be configured explicitly.

## Theme section assumptions

The current theme system assumes:

- reusable content sections drive most templates
- JSON templates control section order
- content should stay editable in Shopify where practical
- the sticky mobile CTA remains evaluation-focused

## Product assumptions

The theme assumes a launch model with:

- one hero anti-aging treatment offer
- optional evaluation-fee product depending on billing logic

It does not assume a large multi-product catalog at launch.

## Support assumptions

The support page currently assumes:

- a generic support email can be displayed
- a general support form exists
- treatment-specific or medically sensitive questions should not be routed through a generic support path without the right workflow behind it

This should be validated against the actual support and care operating model before launch.

## Legal assumptions

The legal template is a clean shell only.

It assumes:

- approved policy content will be added later
- legal copy will be reviewed outside the theme code
- the same template can support multiple policy pages

## Local preview workflow

Recommended local preview workflow once Shopify CLI is installed:

1. install Shopify CLI if not already installed
2. authenticate to the target Shopify store
3. run the theme locally against a development store
4. preview changes before pushing

Suggested command pattern:

```bash
cd /Users/peterzora/Desktop/Skinfluence/theme
shopify theme dev
```

This repo does not yet include a formal local workflow note for Shopify CLI authentication or deployment targets. That should be added once the actual store environment is chosen.

## Recommended next documentation step

Add a dedicated note for:

- Shopify CLI setup
- preview workflow
- push or deploy workflow
- theme naming conventions
- development store assumptions
