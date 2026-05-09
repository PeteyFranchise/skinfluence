# Legacy Theme Archival Plan

This document defines how the older custom storefront under `theme/` should be handled now that Portland is the primary active storefront build target.

It answers a narrow operational question:

**Should the legacy `theme/` folder be renamed or archived right now?**

## Current decision

Not yet.

The legacy `theme/` folder should remain in place for now as a documented reference workspace.

That means:

- keep `theme/` in the repo
- do not use `theme/` as the default destination for new storefront work
- do not rename `theme/` yet
- do not delete `theme/` yet

## Why not rename it yet

Renaming the folder now would create more path churn than backend value.

Right now, `theme/` is still referenced across:

- content source-of-truth docs
- implementation history docs
- evaluation-flow documentation
- earlier section and template references used for comparison

In other words:

- Portland is the active implementation target
- but `theme/` is still the historical path used in many supporting documents

Changing the folder name too early would force a broad doc rewrite without improving the live storefront architecture.

## Current operating rule

Treat `theme/` as a legacy reference workspace.

That means it is still allowed to serve as:

- a reference for older CTA and routing logic
- a reference for scaffold content structure
- a reference for earlier custom section ideas
- an implementation archive if Portland work needs comparison

But it should not be used for:

- new primary storefront development
- new visual system work
- new homepage or core-page feature work

Those belong in `theme-portland/`.

## Rename trigger

Renaming `theme/` to something like `theme-legacy/` only becomes worth doing after the following are true:

1. Portland is the stable day-to-day storefront codebase.
2. The core page set is established in Portland.
3. Source-of-truth docs no longer depend on `theme/` as the practical working source for current page copy or template behavior.
4. Any legacy assets or sections still worth reusing have been intentionally inventoried.
5. The remaining value of `theme/` is archival more than operational.

## Recommended future archive step

When the rename trigger is met, do the cleanup as one explicit housekeeping pass:

1. rename `theme/` to `theme-legacy/`
2. update repo docs that still point at `theme/`
3. make no functional storefront changes in the same commit
4. commit it as a pure archival rename

That keeps the change understandable and low-risk.

## Alternative acceptable end state

It is also acceptable to never rename the folder at all.

If the team prefers lower churn, the repo can simply keep:

- `theme/` as the documented legacy reference workspace
- `theme-portland/` as the active storefront workspace

That is slightly less tidy, but operationally safe.

## Current recommendation

Use this rule:

- **today:** keep `theme/` in place and documented as legacy
- **later:** rename only after Portland is clearly stable and doc references are ready to be updated in one pass

## Related documents

- `docs/storefront/handoff/THEME-HANDOFF.md`
- `docs/storefront/handoff/PORTLAND-ARCHITECTURE-AND-DEPLOYMENT.md`
- `docs/storefront/process/THEME-BUILD-STATUS.md`
- `docs/storefront/handoff/CONTENT-SOURCE-OF-TRUTH.md`
