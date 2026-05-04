# Shopify Local Workflow

This note documents the current local development and preview workflow for the Skinfluence theme.

## Current state

The repo now contains real theme files under:

- `theme/layout/`
- `theme/templates/`
- `theme/sections/`
- `theme/assets/`
- `theme/config/`

The repository is now wired in practice to a specific Shopify development store and theme, even though production launch details are still pending.

## Goal

Use a development-store workflow where theme changes can be previewed locally before being pushed or published.

## Active Shopify environment

Development preview store:

- `skinfluence-3060.myshopify.com`

Permanent store-auth domain:

- `ygvwh0-4i.myshopify.com`

Current development theme:

- `Development (68b794-Peters-MacBook-Pro)`
- theme id: `155740799134`

## Recommended workflow shape

1. install Shopify CLI
2. log in to the target Shopify organization or store
3. run the theme locally from the `theme/` directory
4. preview in a browser
5. iterate on sections, templates, and styling
6. push or publish only after review

## Suggested command pattern

Once Shopify CLI is installed and authenticated:

```bash
cd /Users/peterzora/Desktop/Skinfluence/theme
shopify theme dev --store=skinfluence-3060.myshopify.com
```

Additional commands that will likely matter later:

```bash
shopify theme pull --store=skinfluence-3060.myshopify.com --theme=155740799134
shopify theme push --store=skinfluence-3060.myshopify.com --theme=155740799134 --nodelete
shopify theme publish
```

## Before using the workflow

Confirm:

- the correct store account is authenticated
- the correct development theme id is targeted before pushing
- which team members need store access
- whether page handles and menus are being managed in admin or through a content checklist

## Recommended next step

Continue expanding this file with:

- Shopify CLI installation notes
- login steps
- exact production-store workflow once that exists
- theme naming conventions
- push and publish rule
