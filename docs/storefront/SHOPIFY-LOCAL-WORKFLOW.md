# Shopify Local Workflow

This note is the starting point for the future local development and preview workflow for the Skinfluence theme.

## Current state

The repo now contains real theme files under:

- `theme/layout/`
- `theme/templates/`
- `theme/sections/`
- `theme/assets/`
- `theme/config/`

The repository is not yet wired to a specific Shopify store from within project documentation.

## Goal

Use a development-store workflow where theme changes can be previewed locally before being pushed or published.

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
shopify theme dev
```

Additional commands that will likely matter later:

```bash
shopify theme pull
shopify theme push
shopify theme publish
```

## Before using the workflow

Confirm:

- which Shopify store will be used for development
- whether a separate development theme should be used
- which team members need access
- whether menu and page handles should be created manually or via admin content setup

## Current limitation

This workflow note is intentionally lightweight because the actual Shopify store and auth setup have not yet been documented inside the repo.

## Recommended next step

Once the real store exists, expand this file with:

- Shopify CLI installation notes
- login steps
- store URL
- theme naming conventions
- preview-theme naming rule
- push and publish rule
