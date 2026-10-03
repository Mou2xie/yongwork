# NovaAgent cover generation — 2026-10-02

- Tool: built-in ImageGen; one generation followed by a composition edit.
- Final asset: `public/projects/novaagent/cover.png`.
- Dimensions: 1448 × 1086 pixels (4:3), opaque PNG.
- Purpose: illustrated brand cover, not a product screenshot. Original card rendering remains `object-cover`.
- Layout: matching lavender background extends to every edge; title and hands are centered for responsive cropping.

## Initial prompt

```text
Use case: ads-marketing
Asset type: NovaAgent portfolio project card cover, not a screenshot or UI mockup.
Primary request: Generate a new polished cover for NovaAgent, a no-code platform for building custom AI agents, drawing on its current brand imagery of a human hand reaching toward a robot hand.
Canvas: landscape 4:3 aspect ratio, ideally 1280 x 960 pixels, opaque full-bleed background.
Scene/backdrop: solid very light lavender-gray #efeff4, extending continuously to all four edges.
Subject: one organic human hand and one articulated robotic hand reaching toward each other, with fingertips almost touching at the center. Clean editorial line illustration with thin dark charcoal outlines, white highlights and muted purple #68669e shaded forearms and joints. Graceful, anatomically coherent hands. Hands should occupy the middle horizontal band, roughly y=38% to 65%.
Text (verbatim): "NovaAgent" only. Set this in large clean rounded black sans-serif typography, horizontally centered at y=25%, easily readable in a small portfolio thumbnail.
Composition/framing: compact balanced brand composition. Keep the complete wordmark and both hands/fingertips in the central 70% of width and central 65% of height. Empty background around them is intentional crop safety. Forearm ends may run gently into side margins, but the recognizable hands and lettering must remain clear when center-cropped to a 320 x 240 card or a 392 x 240 card. All text and important illustration detail must fit within those crops.
Style: minimal, confident, precise, flat illustrated SaaS brand cover matching the lavender/black/white look of NovaAgent. No glossy 3D effects.
Constraints: no black bars, no framing border, no page mockup, no browser chrome, no buttons, no UI panels, no extra text, no watermark. Full background to the edges. Do not recreate the wide hero screenshot's split layout.
```

## Final revision prompt

```text
Use case: compositing
Asset type: responsive NovaAgent portfolio card cover.
Edit target: the provided generated NovaAgent cover.
Make one targeted change: compact and vertically center the existing composition so both the full NovaAgent wordmark and the human/robot hands survive a very wide center crop.
Keep the same 4:3 canvas, light lavender-gray full-bleed background, flat editorial illustration style, purple/white/charcoal palette, exact text "NovaAgent", and hand-reaching concept.
Precise layout requirements: The entire wordmark must be between y=35% and y=44% of image height, centered horizontally and within x=22% to 78%. Reduce its size if necessary. Both recognizable hands, fingers and fingertips must fit between y=47% and y=64% of image height, with their near-touching point at x=50%, y=53%. Scale down the hands so the fingers are fully inside that band. Forearms can continue into the left and right edges in the same band.
CRITICAL: All text and important illustration detail must be fully within y=34% to 65%, because the card may center-crop a 4:3 source into a 4:1 wide frame on tablets. Leave plain matching lavender-gray background above and below this compact central composition. No headline near the top quarter.
No new elements, no black bars, no borders, no buttons, no UI panels, no extra text, no watermark. Preserve anatomical coherence and clarity.
```

