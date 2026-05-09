# Support Operating Model

This document defines the current operating model for support on the Skinfluence storefront.

It is intended to answer a simple question:

**What should the storefront support experience handle, and what should it not handle?**

This is an operating model document, not a final customer-support SOP.
It sets the rules the storefront should follow until a more detailed support workflow is approved.

## Core support rule

Skinfluence support is split into two categories:

1. general storefront and account support
2. treatment-related or medically sensitive concerns

The storefront should make that distinction visible.
It should not encourage users to send treatment-related concerns into a generic support inbox without the right workflow behind it.

## Category 1: General storefront and account support

These questions can be handled through a general support path:

- billing questions
- shipping questions
- order-status questions
- account-access questions
- general product questions
- evaluation-process questions that do not require clinical guidance

This is the support category the generic storefront contact form can safely represent.

## Category 2: Treatment-related or medically sensitive concerns

These questions should not be treated as generic storefront support:

- irritation or side-effect questions
- treatment-use questions requiring care guidance
- clinically sensitive personal treatment concerns
- medication-related escalation scenarios

The storefront should route these concerns to the appropriate care path rather than implying that a normal support inbox is the right destination.

## Storefront support-page rule

The support page should always communicate:

- there is a general support path
- there is a treatment-related support path
- users should choose the right channel based on the type of issue

This distinction should remain visible even if the first implementation is operationally simple.

## Contact-form rule

If the Shopify support form is used, it should be treated as a general support intake unless and until a more specific routed workflow is implemented.

That means:

- the form can collect general support inquiries
- the form should include topic guidance where possible
- the form should not imply that medically sensitive treatment concerns are fully handled through a standard generic inbox

If a topic selector exists, recommended categories are:

- Billing
- Shipping
- Account access
- General product questions
- Treatment-related concerns

If treatment-related concerns appear in a general-support form anyway, the downstream team should treat them as escalations, not normal support tickets.

## Recommended public-facing support language

The storefront should reinforce this principle:

- general support can help with billing, shipping, account, and general questions
- treatment-related concerns should follow the appropriate care-support path

This language can be adapted in page copy, but the underlying rule should remain the same.

## Support-email assumption

If a generic support email is displayed publicly, assume it is appropriate for:

- billing
- shipping
- account access
- general non-clinical questions

Do not treat a public generic support email as the fully correct destination for sensitive treatment concerns unless the real operating workflow supports that.

## Launch-state assumption

Until the final care-support workflow is confirmed, the storefront should:

- keep the support split visible in copy
- keep treatment-related routing language cautious and clear
- avoid overpromising what the generic support path can handle

This is safer than pretending the support model is more mature than it really is.

## Operational implication for theme work

Theme and content decisions should follow these rules:

- support-page copy must preserve the general-vs-treatment distinction
- the FAQ can direct users toward support, but should not collapse every issue into one inbox
- the contact form should be framed as a support intake, not as clinical guidance itself
- future Portland migration work should preserve this routing distinction

## What would upgrade this model later

This document should be revised once the business confirms:

- the actual support inbox address
- whether there is a separate care-support path
- who owns treatment-related escalations
- what SLA or response expectations should be stated publicly
- whether the Shopify form stays in place or is replaced

Until then, this document is the source-of-truth support operating model for storefront work.

Related launch-state contact guidance:

- `docs/storefront/handoff/LAUNCH-STATE-CONTACT-ASSUMPTIONS.md`
