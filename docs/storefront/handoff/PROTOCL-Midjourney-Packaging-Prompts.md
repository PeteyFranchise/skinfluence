# PROTOCL Midjourney Packaging Prompts

Use these prompts for the next image-generation round so the packaging work reflects the current `PROTOCL` name while preserving the approved visual direction.

## Locked Direction

- Brand name: `PROTOCL`
- Product format: slim cylindrical airless treatment pump bottle
- Carton: matching tall rectangular carton
- Finish: true matte black / near-black with subtle dimensional sheen
- Mood: luxury clinical editorial
- Background: bright soft off-white or clean studio white
- Typography:
  - `Bodoni Moda`-like serif for the `PROTOCL` logo / wordmark only
  - `Graphik Compact`-like condensed modern sans for all other lettering
- Copy style:
  - all uppercase except the active ingredients list
- Front label structure:
  - ingredient icons at top
  - descriptor in middle
  - dose block below
  - active ingredients list lower
  - `PROTOCL` logo at bottom
- Icon direction:
  - follow the Midjourney-generated front-pack icon language we preferred
  - not the earlier Claude SVG icon set

## Main Prompt

```text
premium anti-aging skincare packaging for PROTOCL, slim cylindrical airless treatment pump bottle with matching tall rectangular carton, true matte black finish with subtle dimensional sheen, luxury clinical editorial beauty brand, minimalist high-performance skincare, refined label hierarchy, ingredient icons at the top, product descriptor centered in the middle, dose block below, active ingredients list lower, PROTOCL logo at the bottom, Bodoni Moda-like serif for the logo only, Graphik Compact-like condensed sans for all other text, all packaging lettering uppercase except the active ingredients list, bright soft off-white studio background, realistic beauty product photography, sharp geometry, expensive and restrained, no clutter, no people --ar 4:5 --v 7 --stylize 70
```

## Stricter Packaging-Control Prompt

Use this when the container shape starts drifting.

```text
luxury clinical skincare packaging for PROTOCL, preserve the exact slim cylindrical airless pump bottle form, preserve the exact stepped pump cap, preserve the exact tall rectangular carton proportions, preserve the exact true matte black finish, only refine the label graphics, ingredient icons at top, product description in the middle, dose block below, active ingredients list lower, PROTOCL logo at bottom, Bodoni Moda-like serif logo only, Graphik Compact-like condensed sans for all other lettering, all uppercase except the active ingredients list, bright clean white studio background, realistic product photography, no bottle changes, no cap changes, no finish changes, no clutter, no people --ar 4:5 --v 7 --stylize 25
```

## Website Image Set Prompt

Use this when generating a coordinated product image set for the site.

```text
Create a cohesive luxury skincare website imagery set for a brand called PROTOCL based on an approved packaging direction. The product is a slim cylindrical airless treatment pump bottle with a stepped pump cap and a matching tall rectangular carton. Both are true matte black / near-black with a refined soft low-luster finish, premium clinical-luxury aesthetic, clean lines, and subtle dimensional highlights.

Typography and label system must match the website direction:
- use a Bodoni Moda-like serif only for the PROTOCL logo / wordmark
- use a Graphik Compact-like condensed modern sans for all other packaging lettering
- all supporting packaging text should feel sharp, minimal, premium, and structured
- ALL text on the packaging should be uppercase except the active ingredients list
- the active ingredients list may remain in standard product notation or mixed case
- label layout should stay minimal: small ingredient icons at the top, product descriptor in the middle, brand logo at the bottom

Generate a coordinated 3-image website set in one consistent visual world:
1. Hero image: front-facing bottle + carton together, clean premium composition, bright soft off-white studio background, high-end ecommerce hero
2. Isolated packshot: single bottle only, centered, minimal shadow, same background, clean PDP-ready image
3. Angled editorial image: bottle + carton at a slight angle, more dimensional lighting, still minimal, refined beauty-campaign feeling

Keep the bottle shape fixed, the cap fixed, the carton fixed, and the overall material matte black. The packaging should feel premium enough for luxury beauty retail and high-end spa/clinic skincare. Avoid clutter, people, flowers, leaves, droplets, generic wellness props, or loud metallic finishes. Keep the mood expensive, restrained, clinical, and editorial --ar 4:5 --stylize 70
```

## Notes

- If Midjourney starts changing the bottle too much, use the existing winning bottle image as the image reference and keep the prompt focused on label refinement.
- If the front-pack icon style drifts, keep the strongest Midjourney-generated icon version as the visual reference and later redraw those icons cleanly in vector.
- When the final `PROTOCL` wordmark is fully locked, replace the placeholder label text treatment in future image rounds with that more exact logo direction.
