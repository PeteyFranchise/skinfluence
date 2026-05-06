# Repo Split Checklist

This note defines when and how to split the private `skinfluence` workspace into a future public implementation repo such as `skinfluence-storefront`.

## When to split

Create `skinfluence-storefront` only when at least one of these is true:

- real Shopify theme files exist
- storefront implementation work is becoming the center of activity
- a public-facing code repo is useful
- the private repo is getting crowded with both business planning and frontend build work

## Pre-split checklist

Before creating the public repo, confirm:

1. The implementation layer is real
- `theme/` or equivalent storefront files actually exist
- the repo is more than planning docs and exports

2. Public-safe boundaries are clear
- it is obvious what is internal-only
- it is obvious what is safe to expose publicly

3. The public README can stand on its own
- the public repo can explain itself without relying on private strategy docs

4. Sensitive files are not mixed into implementation folders
- no GTM docs
- no vendor decision memos
- no pricing rationale docs
- no internal workflow notes

## What to move into `skinfluence-storefront`

Move:

- `theme/`
- public-safe storefront implementation docs
- section and component specs that are implementation-oriented
- sanitized wireframes if useful
- asset files needed to run or build the storefront
- developer setup docs
- theme config files
- CSS, JS, Liquid, JSON, and required assets

## What to keep in `skinfluence`

Keep:

- `docs/rules/`
- strategy docs
- customer research
- pricing rationale
- vendor comparison docs
- architecture decision docs
- internal wireframe thinking
- launch planning
- compliance and legal planning
- anything commercially sensitive

## Public repo setup checklist

When creating `skinfluence-storefront`:

1. Create a clean root structure
- `theme/`
- `docs/`
- `assets/` if needed
- `README.md`

2. Write a public-safe README
- what the repo is
- what tech it uses
- how to run or work on it
- what is intentionally not included

3. Remove private references
- internal file links
- private vendor names in notes
- confidential process language
- private brand strategy notes
- internal support or compliance instructions

4. Re-check assets
- images are safe to share
- no confidential PDFs or docs moved over
- no exported planning deliverables are accidentally included

5. Create a separate `.gitignore` if needed
- the public repo may need different rules than the private workspace

## Migration process

When the split happens:

1. Identify the exact folders and files to move
2. Review each file for public safety
3. Create the new repo
4. Copy only approved implementation files
5. Write the public README
6. Commit the initial public repo baseline
7. Keep `skinfluence` as the master internal planning repo

## Sanity-check questions before publishing

Ask:

- Would I be comfortable with a contractor, candidate, partner, or competitor reading this?
- Does this file expose internal decision-making rather than implementation?
- Does this repo still make sense without the private strategy context?
- Is this genuinely a storefront repo, or just a slice of an internal workspace?

If any answer feels shaky, keep it private longer.

## Current recommendation

For now:

- keep building in `skinfluence`
- treat `theme/` as the future migration boundary
- once `theme/` contains real implementation, reassess the split
