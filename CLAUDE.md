# GUIDE Advisory Group — Listing Intake

A white-glove seller intake form for MODUS Real Estate's client-facing brand, **Guide Advisory Group**. Hi-fi, editorial, advisor-toned — NOT a generic real estate form.

**Before editing anything, read `DESIGN_SYSTEM.md`.** It is the binding visual + voice contract for this project.

---

## Architecture

Single-page React (CDN UMD + Babel standalone), no build step.

```
Listing Intake.html        # entry — loads tokens, fonts, all scripts
assets/
  tokens.css               # design system CSS custom properties (colors, type, spacing, motion)
  app.css                  # component styles (everything else)
src/
  app.jsx                  # state, persistence (localStorage), step routing
  shell.jsx                # left rail, progress, header, footer
  fields.jsx               # reusable form primitives (Text, Long, Choice, Multi, Toggle, Pills)
  tweaks-panel.jsx         # tweaks panel (accent, nav style, density)
  sections/
    welcome.jsx            # step 0 — intro
    story.jsx              # step 1 — property story + positioning
    logistics.jsx          # step 2 — showing + access
    listing.jsx            # step 3 — prep + marketing concierge
    comms.jsx              # step 4 — communication preferences
    offer.jsx              # step 5 — offer + timeline strategy
    review.jsx             # step 6 — summary + submit
```

State lives in `app.jsx` and is passed down. Sections receive `{ data, update }` and call `update({ key: value })` to mutate. Persistence is automatic via localStorage under `guide-intake-v1`.

Scripts are loaded as separate `<script type="text/babel">` tags — they do NOT share scope. Components meant to be used across files are attached to `window` at the bottom of their defining file. Do not collapse this into one file.

---

## Editing rules (most important)

1. **Never invent colors, fonts, radii, or shadows.** Use the tokens in `assets/tokens.css`. If a value isn't in the tokens, the answer is "use the closest token," not "add a new one."
2. **No emoji. No gradients. No drop shadows beyond the three defined steps. No pill shapes. No rounded corners > 4px.** These are non-negotiable brand rules.
3. **Type discipline:** display serif (Cormorant Garamond) for H1/H2/H3 at **regular weight only** — never bold. Body and UI text in Jost. Eyebrows in Jost, uppercase, `0.24em` tracking, in `--ginko`.
4. **Voice:** sentence case (except wordmark, eyebrows, CTAs). Short sentences. Second person. No exclamation points in headlines. No real-estate clichés ("nestled," "boasts," "must-see," "hidden gem"). No corporate buzzwords ("leverage," "empower," "next-gen," "AI-powered").
5. **Keep the architecture split.** If you need a new section, add a new file in `src/sections/` and a new `<script>` tag in `Listing Intake.html`. Do not inline.
6. **Do not ask the seller for public-record information.** No parcel ID, year built, square footage, tax info, school districts, legal description. The brokerage looks those up. Capture only what a competent broker cannot find online.
7. **Do not fabricate.** No invented advisor names, testimonials, team-member quotes, fake addresses, fake client signatures, or made-up case studies. The intake is white-label and unsigned. If a piece of content requires a real name or quote, leave a clearly-marked placeholder (e.g. `{{ advisor_name }}`) and flag it, rather than inventing one.
8. **Preserve editorial composition when refactoring.** This product is photographic + typographic, not typographic alone. If a redesign or "simplification" removes the skyline photography, the metadata rhythm strip, the immediate flow from welcome → first question, or any other structural element of the original, stop and ask before proceeding. See `DESIGN_SYSTEM.md` §12 for positive patterns to reach for.

---

## When in doubt

- Match the tone of existing copy on the page — read it before writing more.
- Match the visual rhythm of existing sections — read one before adding another.
- Less is more. If a question doesn't earn its place, cut it.
