# Portland Architecture and Deployment

This document defines the current backend and operating architecture for the Portland-based Skinfluence storefront.

It answers a simple practical question:

**How is the Portland storefront supposed to work as a codebase, a Shopify theme, and a deployment target?**

## Core operating rule

Portland is now the primary active storefront build target.

That means:

- new storefront code work happens in `theme-portland/`
- the older custom storefront under `theme/` is a legacy reference only
- Shopify admin content and template assignments should be aligned to the Portland template set where those templates now exist

## Active theme targets

### Legacy reference theme

Local workspace:

- `theme/`

Role:

- legacy engineering and content reference
- source of prior CTA logic, scaffold content, and implementation history
- not the default destination for new storefront work

Shopify theme reference:

- `Development (68b794-Peters-MacBook-Pro)`
- theme id: `155740799134`

### Active Portland theme

Local workspace:

- `theme-portland/`

Role:

- primary active storefront codebase
- current source of truth for Portland-based template and section work

Shopify theme target:

- `Portland`
- theme id: `155776417950`
- status: purchased unpublished theme

## Store environment

Preview storefront domain:

- `skinfluence-3060.myshopify.com`

Permanent store auth domain:

- `ygvwh0-4i.myshopify.com`

GitHub repository:

- `https://github.com/PeteyFranchise/skinfluence`

Default branch:

- `main`

## Code-managed vs admin-managed responsibilities

### Code-managed in `theme-portland/`

These should generally be managed in code:

- new Liquid sections
- template JSON structure
- page-template architecture
- reusable CTA logic
- theme-specific layout and styling
- Portland-specific storefront UX structure

### Shopify-admin-managed

These are still store objects and should be treated as admin-managed unless intentionally automated:

- page records
- page handles
- theme template assignments
- navigation menus
- theme editor image selections
- policy page content
- store-level contact details

### Shared docs-managed

These should stay governed by repo docs:

- CTA architecture
- product/subscription model
- support operating model
- temporary pre-Bask behavior
- launch-state contact assumptions

## Current template architecture

The current Portland codebase now includes dedicated templates for:

- homepage: `theme-portland/templates/index.json`
- start evaluation: `theme-portland/templates/page.start-evaluation.json`
- pricing: `theme-portland/templates/page.pricing.json`
- FAQ: `theme-portland/templates/page.faq.json`
- support: `theme-portland/templates/page.support.json`
- treatment: `theme-portland/templates/page.treatment.json`
- about: `theme-portland/templates/page.about.json`
- how it works: `theme-portland/templates/page.how-it-works.json`

The theme also contains:

- default page fallback: `theme-portland/templates/page.json`
- contact page template: `theme-portland/templates/page.contact.json`

## Store-side template assignment rule

When a Portland template exists for a page, the Shopify page record should use the matching template suffix where possible.

Examples:

- `start-evaluation` -> `start-evaluation`
- `pricing` -> `pricing`
- `faq` -> `faq`
- `support` -> `support`
- `treatment` -> `treatment`
- `about` -> `about`
- `how-it-works` -> `how-it-works`

This keeps store objects aligned with the Portland codebase.

## Current CLI workflow

### Pull Portland locally

Use:

```bash
shopify theme pull --store=skinfluence-3060.myshopify.com --theme=155776417950 --path=/Users/peterzora/Desktop/Skinfluence/theme-portland
```

### Push Portland to Shopify

Use:

```bash
shopify theme push --store=skinfluence-3060.myshopify.com --theme=155776417950 --path=/Users/peterzora/Desktop/Skinfluence/theme-portland
```

### Check theme list

Use:

```bash
shopify theme list --store=skinfluence-3060.myshopify.com
```

## Deployment rule

For now, the deployment model is:

- edit `theme-portland/` locally
- push to the purchased unpublished Portland theme
- preview in Shopify
- commit to GitHub after the change is stable

This is the current working release loop.

## Git rule

For Portland work:

- code changes should be committed in small milestone commits
- Shopify pushes can happen before Git commits when preview feedback is needed quickly
- after a change is accepted, the local code should be committed so GitHub remains aligned with the live theme state

## Architecture rule for future backend work

If a new backend/storefront decision is made, ask:

1. is this code-managed, admin-managed, or doc-governed?
2. does it belong in `theme-portland/`, Shopify admin, or the handoff/process docs?
3. does it preserve the locked CTA and product-model rules?

That prevents future drift.

## Remaining backend priorities

The highest-priority backend items still remaining are:

1. connect the final Bask intake URL
2. replace placeholder legal copy with approved final language
3. validate final menu and footer configuration in Shopify admin
4. decide whether any Portland page-template assignments still need admin-side cleanup
5. decide when the legacy `theme/` folder should be archived more explicitly

## Related documents

- `docs/storefront/handoff/THEME-HANDOFF.md`
- `docs/storefront/handoff/EVALUATION-HANDOFF.md`
- `docs/storefront/handoff/TEMPORARY-EVALUATION-LAUNCH-STATE.md`
- `docs/storefront/handoff/PRODUCT-SUBSCRIPTION-MODEL.md`
- `docs/storefront/handoff/SUPPORT-OPERATING-MODEL.md`
- `docs/storefront/handoff/LAUNCH-STATE-CONTACT-ASSUMPTIONS.md`
- `docs/storefront/process/SHOPIFY-LOCAL-WORKFLOW.md`
- `docs/storefront/process/SHOPIFY-SETUP-ASSUMPTIONS.md`
- `docs/storefront/process/THEME-BUILD-STATUS.md`
