# Claude Design Brief

Use this brief to give Claude Design the right context for the Skinfluence storefront without asking it to reverse-engineer the whole project.

## Project summary

Skinfluence is a premium, provider-reviewed anti-aging storefront built on Shopify.

The current site should feel:

- premium
- clinically grounded
- calm
- feminine without beauty clichés
- editorial rather than generic DTC

This is not a high-energy beauty brand and not a sterile telehealth brand.

## Current goal for Claude Design

Focus on:

- visual refinement
- art direction
- imagery choices
- section-level hierarchy improvements
- stronger editorial composition

Do not focus on:

- rewriting the operating model
- changing the evaluation architecture
- changing page handles or core CTA strategy
- proposing a full redesign that ignores the existing Shopify section system

## Current live page set

- homepage
- how-it-works
- treatment
- pricing
- faq
- about
- support
- start-evaluation
- privacy-policy
- terms-of-service
- subscription-terms

## Current template system

Main templates:

- `theme/templates/index.json`
- `theme/templates/page.how-it-works.json`
- `theme/templates/page.treatment.json`
- `theme/templates/page.pricing.json`
- `theme/templates/page.faq.json`
- `theme/templates/page.about.json`
- `theme/templates/page.support.json`
- `theme/templates/page.evaluation.json`
- `theme/templates/page.legal.json`

## Existing design system constraints

Current theme already includes:

- branded header/footer shell
- consistent CTA system
- evaluation handoff architecture
- FAQ accordion
- pricing breakdown section
- support contact section
- fallback branded artwork
- Shopify editor image controls for hero and support sections

Claude should improve the visual language inside that system before proposing structural upheaval.

## Important functional constraints

### Evaluation flow

Do not change the current evaluation architecture.

Current rule:

- major `Start Evaluation` CTAs resolve to `/pages/start-evaluation`
- that page is the branded handoff into the future Bask intake flow

If Claude proposes CTA changes, they should preserve that architecture.

### Legal pages

Legal pages are structurally styled but still using placeholder legal content.

Claude can suggest:

- readability improvements
- hierarchy improvements
- policy-page visual calmness

Claude should not try to invent legal language.

### Support page

Support is intentionally cautious about medically sensitive questions.

Claude can improve:

- hierarchy
- route clarity
- visual calmness

Claude should not collapse treatment-related support and generic support into one vague path.

## Current image workflow

The theme now supports editor-controlled images in:

- `Skinfluence Hero`
- `Support Contact`

Fallback branded theme assets exist if no images are selected.

Current built-in artwork:

- `theme/assets/skinfluence-hero-art.svg`
- `theme/assets/skinfluence-evaluation-art.svg`
- `theme/assets/skinfluence-support-art.svg`

Claude can propose:

- what real images should replace them
- what pages need stronger custom imagery
- how the illustration/photo mix should evolve

## Visual priorities by page

### Homepage

Needs:

- strongest brand impression
- premium anti-aging positioning
- clearer editorial rhythm
- better image-led trust and atmosphere

### Start Evaluation

Needs:

- calm handoff energy
- process trust
- clarity before intake begins

### Support

Needs:

- reassuring tone
- clean route clarity
- organized, helpful feel

### Pricing

Needs:

- clarity
- trust
- less commodity pricing energy

### FAQ

Needs:

- fast scanability
- premium, not dry

## What is already working

Claude should preserve:

- the overall calm neutral palette
- rounded CTA/button language
- the shared CTA system
- the editorial/clinical midpoint
- the new dedicated evaluation page

## What still needs design thinking

Strong candidate areas for Claude input:

- best photography or illustration direction
- whether homepage needs more contrast between sections
- how to make trust-strip and benefit blocks feel more premium
- whether some text-heavy sections should become more visual
- how to make evaluation and support pages feel more polished without adding friction
- where desktop spacing and composition can improve

## What kind of output to ask Claude for

Best outputs:

- page-by-page visual critique
- prioritized visual improvements
- image/art direction recommendations by slot
- section-specific layout suggestions that can be implemented in Shopify
- “keep / change / remove” recommendations

Less useful outputs:

- generic praise
- total redesign without regard for current templates
- vague “make it more premium” language without actionable suggestions

## Suggested prompt pattern for Claude

Use something like:

“Review the Skinfluence Shopify storefront visuals as a premium, clinically grounded anti-aging brand. Work within the existing section/template architecture rather than proposing a total rebuild. Prioritize homepage, start-evaluation, pricing, FAQ, and support. Recommend the highest-leverage visual improvements, image direction, layout refinements, and hierarchy changes. Preserve the current evaluation handoff architecture and calm editorial tone.”

## Handoff docs to pair with this brief

Also give Claude:

- `docs/storefront/handoff/THEME-HANDOFF.md`
- `docs/storefront/handoff/EVALUATION-HANDOFF.md`
- screenshots of homepage, start-evaluation, support, pricing, and FAQ

## Best working model

Recommended division of labor:

- Claude Design: visual direction and critiques
- Codex: theme implementation, schema changes, content wiring, route logic, QA

This keeps the project fast and avoids browser/editor control conflicts.
