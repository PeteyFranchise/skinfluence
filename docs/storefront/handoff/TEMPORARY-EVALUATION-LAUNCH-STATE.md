# Temporary Evaluation Launch State

This document defines the temporary public-facing evaluation state while the real Bask intake URL is not yet connected.

It exists to answer one operational question:

**What should the storefront do when the evaluation architecture is locked, but the real intake destination is still unavailable?**

## Core temporary-state rule

Until the real Bask intake URL is available:

- all major public evaluation CTAs should still point to `/pages/start-evaluation`
- `/pages/start-evaluation` should remain the branded handoff page
- the page should not expose broken, dead, or placeholder-forward handoff language

The temporary state should feel intentional, not unfinished.

## What public CTAs should do

These public CTA surfaces should keep pointing to `/pages/start-evaluation`:

- homepage
- header
- sticky mobile CTA
- treatment page
- pricing page
- FAQ page
- support page where applicable
- footer CTA surfaces where applicable

This preserves the locked CTA architecture even before Bask is connected.

## What `/pages/start-evaluation` should do in the temporary state

The evaluation handoff page should:

- explain what the evaluation is
- explain that provider review happens before treatment
- explain that not everyone will be eligible
- direct users to FAQ or support if they need more clarity

The page should not imply that a live intake is fully available if the Bask destination is not yet ready.

## Temporary CTA rule on the evaluation page

While Bask is still pending, the safest temporary behavior is:

- do not show a dead-end primary CTA that points nowhere meaningful
- do not use placeholder language like `Evaluation Link Pending`
- prefer informational or next-step CTAs such as:
  - `How It Works`
  - `View FAQs`
  - `Contact Support`

If a primary CTA remains visible on the page before Bask is ready, it should only appear if it has a meaningful destination.

## Messaging rule

The temporary evaluation state should feel like:

- a calm branded handoff layer
- a place to prepare the user
- a place to answer the most important pre-intake questions

It should not feel like:

- a broken launch
- a stub page
- a fake active intake flow

## When to leave the temporary state

Exit the temporary state once all of the following are true:

- the final Bask intake URL is confirmed
- the destination behavior is known
- the evaluation page copy still matches the real Bask flow
- the final CTA on `/pages/start-evaluation` is ready to point to the real intake

## Activation checklist for the final handoff state

When Bask is ready:

1. keep all public storefront CTAs pointed to `/pages/start-evaluation`
2. update the primary evaluation-page CTA to the real Bask URL
3. verify CTA paths from homepage, header, sticky CTA, pricing, FAQ, and support
4. confirm no placeholder launch-state language remains on the evaluation page

## Operational rule for theme work

Until Bask exists, theme and content work should treat `/pages/start-evaluation` as:

- a real public page
- a real conversion step
- a temporary non-final handoff state

That means the page should still receive polished copy and design attention, even though the final intake destination is not yet connected.
