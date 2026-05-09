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

## Rename readiness checklist

Use this as the practical go / no-go checklist before renaming the folder.

### Codebase readiness

- Portland remains the only active storefront code workspace.
- No active implementation work still depends on writing into `theme/`.
- Any legacy sections or assets worth carrying forward have already been copied or intentionally left behind.

### Documentation readiness

- source-of-truth content docs no longer point to `theme/` as the active working template source
- handoff docs no longer require `theme/` paths for current operational decisions
- process docs reference `theme/` only as archive/history, not as an active implementation baseline

### Operational readiness

- the team does not need `theme/` for day-to-day comparison during active Portland builds
- the Portland page set is stable enough that legacy template comparison is occasional rather than frequent
- the rename can be done as a pure housekeeping change without coupling it to storefront implementation work

If any of those are still false, wait.

## Current dependency audit

The current repo still depends on legacy `theme/` references in three main ways.

### 1. Historical implementation inventory

These docs still catalog what was built in the earlier custom storefront:

- `docs/storefront/process/THEME-BUILD-STATUS.md`
- `docs/storefront/handoff/THEME-HANDOFF.md`
- `docs/storefront/process/SHOPIFY-SETUP-ASSUMPTIONS.md`

These references are expected and not urgent to remove.

### 2. Working content and page-source references

These docs still point at `theme/` paths as the older working source for copy or page structure:

- `docs/storefront/handoff/CONTENT-SOURCE-OF-TRUTH.md`
- `docs/storefront/handoff/EVALUATION-HANDOFF.md`
- `docs/storefront/design/CLAUDE-DESIGN-BRIEF.md`

These are the highest-friction references for any future rename because they are closer to active working context.

### 3. Older process / migration documents

These docs still mention `theme/` as part of earlier repo and workflow assumptions:

- `docs/storefront/process/SHOPIFY-LOCAL-WORKFLOW.md`
- `docs/storefront/process/REPO-SPLIT-CHECKLIST.md`

These are lower-risk to update later, but they still contribute to rename churn.

## Current conclusion from the audit

The repo is already clean enough operationally without renaming the folder now.

The remaining legacy references are understandable and useful.

So the right backend decision today is:

- leave `theme/` in place
- keep documenting it as legacy
- postpone the rename until the working docs depend more on Portland than on the earlier custom scaffold

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

## Recommended stop point

Backend cleanup should stop here for now.

Further archival work is likely lower leverage than:

- Portland implementation work
- final store/admin configuration
- Bask connection
- legal and operational launch details

Come back to the rename only when the readiness checklist is mostly true.

## Related documents

- `docs/storefront/handoff/THEME-HANDOFF.md`
- `docs/storefront/handoff/PORTLAND-ARCHITECTURE-AND-DEPLOYMENT.md`
- `docs/storefront/process/THEME-BUILD-STATUS.md`
- `docs/storefront/handoff/CONTENT-SOURCE-OF-TRUTH.md`
