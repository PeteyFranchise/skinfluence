# Portland Page Rebuild Checklists

This document collects the page-by-page rebuild checklists for migrating Skinfluence onto the Portland theme.

Use these checklists after the homepage demo commerce cleanup is complete.

Related docs:
- `PORTLAND-HOMEPAGE-CLEANUP-CHECKLIST.md`
- `PORTLAND-INSPIRED-VISUAL-DIRECTION.md`
- `PORTLAND-PATTERN-TRANSLATION.md`
- `IMAGE-SLOT-GUIDE.md`

## Global Rules

- keep the storefront evaluation-first, not product-grid-first
- keep all major public evaluation CTAs pointing to `/pages/start-evaluation`
- only the final CTA on `/pages/start-evaluation` should point to Bask later
- do not surface fake catalog behavior if the operating model is evaluation-first
- keep tone calm, premium, and clinically grounded
- use Portland’s native sections first and add custom work only if the theme cannot support the needed structure

## Homepage

### Goal

Rebuild the homepage as a content-first, editorial, evaluation-led landing page.

### Section Order

1. Hero
2. Trust section
3. Core problem
4. Premium anti-aging explanation
5. How it works
6. Benefits / who it’s for
7. Why it’s different
8. FAQ preview
9. Final CTA

### Hero

Eyebrow:
- `Provider-reviewed anti-aging care`

Headline:
- `Prescription-led anti-aging care for women who expect more from skincare.`

Body:
- `A provider-reviewed monthly treatment designed to improve texture, tone, and fine lines through a more elevated, more consistent experience.`

Primary CTA:
- `Start Evaluation`
- link to `/pages/start-evaluation`

If Portland’s hero supports only one CTA, that is acceptable for now.

### Trust Section

Use a compact multi-column or icon-list style section with:

- `Provider-reviewed care`
- `Premium monthly treatment`
- `Delivered to your door`
- `Ongoing maintenance support`

### Core Problem

Headline:
- `When your routine stops feeling worth it.`

Body:
- `There comes a point when another serum, another cream, and another expensive routine stop feeling like progress. Skinfluence is for women who want a more serious anti-aging approach without turning skincare into a second job or navigating the friction of traditional dermatology.`

### Premium Anti-Aging Explanation

Headline:
- `Premium anti-aging care, built around provider review.`

Body:
- `Skinfluence is a prescription-led monthly treatment designed for women seeking visible improvement in skin quality. If approved, you receive a provider-reviewed anti-aging formula in a streamlined maintenance model designed to support smoother-looking texture, more even-looking tone, and softer-looking fine lines over time.`

CTA:
- `Start Evaluation`

### How It Works

1. `Complete your evaluation`
   - `Answer a few questions about your skin, goals, and history.`

2. `Receive provider review`
   - `A licensed provider reviews your information and determines whether treatment is appropriate.`

3. `Begin monthly care if approved`
   - `If approved, your treatment is delivered to your door through a simple monthly maintenance model.`

### Benefits / Who It’s For

Possible items:
- `Already invest in skincare or aesthetic maintenance`
- `Want a more advanced anti-aging routine`
- `Prefer guidance over trial and error`
- `Value results, simplicity, and consistency`

or

- `Smoother-looking texture`
- `More even-looking tone`
- `Softer-looking fine lines`
- `More refined overall skin quality`
- `A less tired-looking complexion`

### Why It’s Different

Headline:
- `More guided than skincare. Easier than traditional dermatology.`

Body:
- `Skinfluence is not built like a crowded product line or a generic prescription checkout. It is designed as a premium, provider-reviewed care experience for women who want stronger anti-aging support in a format they can actually stay consistent with.`
- `This is not about adding more products. It is about moving into a more effective anti-aging routine with greater clarity, support, and consistency.`

### FAQ Preview

Use 3-4 short top questions:

- `How much does it cost to get started?`
- `What happens if I’m not eligible?`
- `How long until I may see visible improvement?`
- `Is Skinfluence a subscription?`

### Final CTA

Headline:
- `A more advanced anti-aging routine starts here.`

Body:
- `Start with evaluation, then move into monthly care if approved.`

CTA:
- `Start Evaluation`

## Start Evaluation

### Goal

Rebuild `/pages/start-evaluation` so it feels calm, premium, and clear before Bask is connected.

### What this page must do

This page is not the intake itself. Its job is to:

- prepare the user
- explain what happens next
- preserve the Skinfluence brand moment
- hand off later to Bask

### Section Order

1. Hero
2. What to expect before you begin
3. What happens here
4. Before you start
5. 3-step process
6. Closing CTA

### Hero

Eyebrow:
- `Evaluation`

Headline:
- `Begin your Skinfluence evaluation.`

Body:
- `Start with a provider-reviewed intake designed to understand your goals, skin history, and treatment fit before anything moves forward.`

CTA guidance:
- do not show `Evaluation Link Pending`
- if Bask is not ready, omit the primary handoff CTA for now
- optional informational CTA:
  - `How It Works` → `/pages/how-it-works`

### What to Expect Before You Begin

Use compact cards or feature items:

- `Provider-reviewed intake before treatment begins`
- `Designed to feel clear, simple, and easy to complete`
- `Approval depends on fit, not everyone will be eligible`

### What Happens Here

Headline:
- `What happens here`

Body guidance:
- explain that this page will hand users into the secure evaluation flow
- explain that they will share treatment goals, skin background, and relevant context
- explain that they will understand what happens next if approved or if more information is needed

### Before You Start

Headline:
- `Before you start`

Body guidance:
- the evaluation should feel clear and straightforward
- not everyone will be eligible
- questions should have an obvious support path

### 3-Step Process

1. `Complete the intake`
   - `Provide the information needed for review, including goals, relevant skin background, and any context that may affect treatment fit.`

2. `Receive provider review`
   - `A licensed provider reviews the submission and determines whether treatment is appropriate or whether more information is needed.`

3. `Move into care if approved`
   - `If approved, users move into the monthly treatment model, onboarding guidance, and the ongoing Skinfluence support experience.`

### Closing CTA

Headline:
- `Questions before the evaluation opens?`

Body:
- `Use the FAQ or support page if you want more clarity on pricing, treatment fit, or what the process will involve.`

CTA:
- `View FAQs` → `/pages/faq`

### Minimum Viable Version

If Portland does not support every ideal section cleanly, the minimum acceptable structure is:

1. hero
2. short expectation cards
3. 3-step process
4. closing FAQ/support CTA

## Pricing

### Goal

Rebuild the pricing page so it feels clear, premium, and evaluation-first, not like a generic product pricing table.

### What this page must communicate

Users should leave understanding:

- there is a one-time evaluation first
- treatment only happens if approved
- approved users move into a monthly subscription model
- Skinfluence is premium anti-aging care, not bargain telehealth

### Section Order

1. Hero
2. Simple pricing breakdown
3. What’s included
4. Why it’s priced this way
5. What if I’m not eligible
6. Subscription clarity
7. Closing CTA

### Hero

Eyebrow:
- `Pricing with clarity`

Headline:
- `Premium anti-aging care, priced with clarity.`

Body:
- `Start with a one-time evaluation, then move into monthly treatment if approved.`

Primary CTA:
- `Start Evaluation` → `/pages/start-evaluation`

Secondary CTA:
- `Treatment` → `/pages/treatment`

### Simple Pricing Breakdown

Use a 2-column or card section.

Card 1:
- `One-time evaluation`
- `Provider-reviewed intake before treatment begins.`

Card 2:
- `Monthly treatment if approved`
- `Ongoing monthly care designed for consistency, maintenance, and ease.`

If final numbers are not ready, do not invent them.

### What’s Included

Headline:
- `What’s included`

Items:
- `Initial evaluation`
- `Provider review`
- `Monthly treatment if approved`
- `Ongoing maintenance support`
- `Subscription continuity for refills`

### Why It’s Priced This Way

Headline:
- `Why this is priced differently than generic tretinoin`

Body:
- `Skinfluence is not positioned as the cheapest online prescription option. It is positioned as premium anti-aging care with provider review, a more elevated treatment experience, and a routine designed for consistency rather than commodity shopping.`

### What If I’m Not Eligible

Headline:
- `What if I’m not eligible?`

Body:
- `Not every user will be a fit for treatment. If a provider determines treatment is not appropriate, Skinfluence will communicate that clearly and explain any next steps that may be available.`

### Subscription Clarity

Headline:
- `Subscription details`

Body:
- `If approved, treatment is designed as a monthly maintenance model. Billing timing, shipment cadence, and account management details should always be presented clearly.`

### Closing CTA

Headline:
- `Start with evaluation, then move into care if approved.`

Body:
- `A more advanced anti-aging routine begins with provider review.`

CTA:
- `Start Evaluation` → `/pages/start-evaluation`

### Minimum Viable Version

If Portland makes this easier in a simpler structure, the minimum acceptable version is:

1. hero
2. two-card pricing breakdown
3. what’s included
4. not eligible section
5. closing CTA

## FAQ

### Goal

Rebuild the FAQ page so it feels clear, categorized, and easy to scan without turning into a dense support wall.

### What this page must do

- reduce hesitation before evaluation
- answer the highest-friction questions clearly
- reinforce fit, pricing, provider review, and subscription expectations

### Recommended Structure

1. Hero
2. FAQ categories
3. Closing CTA

### Hero

Eyebrow:
- `Clear answers`

Headline:
- `Questions, answered clearly.`

Body:
- `Everything you need to know, organized by topic.`

Primary CTA:
- `Start Evaluation` → `/pages/start-evaluation`

Secondary CTA:
- `Pricing` → `/pages/pricing`

### FAQ Categories

Suggested categories:

- `Fit and eligibility`
- `Provider review`
- `Treatment expectations`
- `Pricing and subscription`
- `Support and next steps`

Suggested questions:

- `Who is Skinfluence for?`
- `Will everyone be approved?`
- `What happens during the evaluation?`
- `How long until I may see visible improvement?`
- `What side effects can happen?`
- `Is this a subscription?`
- `What if I’m not approved?`
- `How do I get support if I have questions?`

### Closing CTA

Headline:
- `Still deciding?`

Body:
- `Review pricing, support, and evaluation details before moving forward.`

CTA:
- `Start Evaluation` → `/pages/start-evaluation`

## Support

### Goal

Rebuild the support page so it feels helpful, calm, and clearly routed between general support and treatment-related concerns.

### What this page must do

- separate general support from treatment-related questions
- make the next step obvious
- preserve a premium, non-chaotic tone

### Recommended Structure

1. Hero
2. Support routing overview
3. Contact form / support path
4. Closing CTA

### Hero

Eyebrow:
- `Support`

Headline:
- `Help, with a clear path forward.`

Body:
- `Find support for billing, shipping, general questions, and treatment-related guidance — each in the right channel.`

Primary CTA:
- `Start Evaluation` → `/pages/start-evaluation`

Secondary CTA:
- `View FAQs` → `/pages/faq`

### Support Routing Overview

Use two clear support-path blocks:

Block 1:
- `Treatment-related concerns`
- `Questions about irritation, use, or care-related issues should follow the treatment support path.`

Block 2:
- `Billing and general support`
- `Questions about orders, account access, billing, or shipping should follow the general support path.`

### Contact Form / Support Path

If Portland supports a topic selector, include:

- `Billing`
- `Shipping`
- `Account access`
- `General product questions`
- `Treatment-related concerns`

If Portland does not support this natively, at minimum make the routing distinction visible above the form.

### Closing CTA

Headline:
- `Need more clarity before moving forward?`

Body:
- `Use the FAQ or Start Evaluation page to understand pricing, fit, and what to expect next.`

CTA:
- `View FAQs` → `/pages/faq`

## Recommended Build Sequence

Use this order for the Portland migration:

1. Homepage
2. Start Evaluation
3. Pricing
4. FAQ
5. Support

Once those are rebuilt and the locked CTA architecture is preserved, Portland is close to being the primary storefront target.
