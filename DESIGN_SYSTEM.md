# Guide Advisory Group — Design System (condensed reference)

A self-contained version of the brand system, so this project can be edited in any environment without the parent design system project attached. If anything here conflicts with the live tokens in `assets/tokens.css`, the CSS file wins.

> **Positioning:** Guide is an advisory-driven real estate brand under MODUS Real Estate. Tone is *advisor's notebook, not billboard.* Think Kinfolk meets a neighborhood bookshop. Quiet authority, confident whitespace, zero jargon.

---

## 1. Color

Five architectural neutrals + ink + paper. **No accent colors. No semantic reds/greens/blues.** Sophistication comes from value contrast, not hue.

| Token | Hex | Role |
| --- | --- | --- |
| `--beluga` | `#F0F1F2` | near-white canvas — default page background |
| `--ballroom` | `#D9D3C7` | warm stone / linen — accent surfaces, pull quotes, section breaks |
| `--ginko` | `#888C79` | muted sage-olive — secondary text, hairlines, eyebrows |
| `--shadow` | `#595959` | mid-grey — body copy on light |
| `--nero` | `#262626` | near-black — primary ink, dark hero sections |
| `--paper` | `#FFFFFF` | card / input background |

Derived:
- `--line` = `rgba(38,38,38,0.12)` — default 1px hairline
- `--line-strong` = `rgba(38,38,38,0.24)` — emphasis hairline (inputs, pull quotes)
- `--nero-06`, `--nero-12`, `--nero-40`, `--nero-70`, `--nero-90` — opacity-stepped ink
- `--ginko-20`, `--ginko-40` — washes of the sage-olive

**Errors / validation:** expressed through tone, hairline weight, and icon, **never** through a red color.

---

## 2. Typography

### Families
- **Display serif:** `Cormorant Garamond` — H1/H2/H3, pull quotes, wordmark.
- **Sans:** `Jost` — body, UI, eyebrows, CTAs, sub-wordmarks.
- **Mono:** `JetBrains Mono` — data tables only (rare).

Substitutes — the originals appear bespoke. If the brand owner provides commercial licenses, swap them in everywhere.

### Rules
- **Display serif: regular weight only.** Never bold it. Italic at 400 is OK for emphasis.
- **Headings are sentence case.** Wordmark, eyebrows, and primary CTAs are the only all-caps surfaces.
- **Eyebrows:** Jost 12–13px, weight 500, uppercase, `letter-spacing: 0.24em`, color `--ginko`.
- **Body:** Jost 16px, weight 400, color `--shadow`, line-height 1.6.
- **Buttons:** Jost 14px, weight 500, uppercase, `letter-spacing: 0.14em`.

### Type scale tokens
`--fs-12 --fs-13 --fs-14 --fs-16 --fs-18 --fs-20 --fs-24 --fs-32 --fs-44 --fs-60 --fs-88 --fs-128`

### Tracking tokens
`--track-tight` (-0.01em), `--track-normal` (0), `--track-wide` (0.14em), `--track-wider` (0.24em)

### Line-height tokens
`--lh-tight`, `--lh-snug`, `--lh-normal`, `--lh-relaxed`

---

## 3. Spacing & layout

4px base grid. Spacing tokens: `--s-1` (4px) through `--s-32` (128px) — use these, don't write raw pixel margins.

- **Max content width:** 1240px (`--content-max`), centered.
- **Gutters:** 32px desktop, 20px mobile (`--gutter`).
- **Vertical section padding:** 96–128px between major sections.
- **Body text measure:** ~62ch.
- **Asymmetric grids** are encouraged for editorial sections.

---

## 4. Surfaces

- Default page: `--beluga`.
- Accent / pull quote / section break: `--ballroom` (used sparingly).
- Dark hero: `--nero` with `--beluga` text.
- Cards: `--paper` on `--beluga`, 1px `--line` border, **no outer shadow by default**.
- **No gradients.** Only exception: invisible `--nero` 0→60% protection gradient behind text overlaying photography.
- **No patterns. No textures. No illustration.** Photographic + typographic only.

---

## 5. Corner radii

`--r-0` (0), `--r-1` (1px), `--r-2` (2px), `--r-4` (4px), `--r-8` (8px — rarely used)

- Most UI: 0 or 2px.
- Buttons / inputs: max 4px.
- **Pill shapes are forbidden.** They read casual.
- Images: sharp corners, always. Rounding an image crops authority.

---

## 6. Shadows

Three steps total — restrained, cool-grey:
- `--shadow-low` — subtle card lift on hover
- `--shadow-med` — modal, hovered image
- `--shadow-high` — overlay / reveal
- `--shadow-hairline` — `0 0 0 1px var(--line)` substitute when borders won't do

No inner shadows. No warm shadows. No multi-layer drop shadows for "depth."

---

## 7. Borders

- 1px hairlines in `--line` are the primary structural device.
- 1px `--line-strong` for inputs and pull quotes.
- **Never thicker than 1px.** If a divider needs more weight, give it more whitespace, not a thicker line.

---

## 8. Motion

- `--dur-fast` 160ms, `--dur-base` 240ms, `--dur-slow` 400ms, `--dur-lux` 640ms.
- Easing: `--ease-standard` `cubic-bezier(0.22, 0.61, 0.36, 1)` — soft landing, no overshoot.
- Preferred: fade + 8–12px upward translate. Crossfade between images.
- **No bounces. No spring physics. No horizontal slides. No parallax.**

### Hover
- Dark buttons: background → pure `#000`.
- Light buttons / cards: background → `--ballroom`.
- Links: underline shifts from `--line-strong` to `--ink`. Text color does not change.
- Imagery: 1.04 scale over 640ms.
- Never use opacity fade as a hover treatment.

### Press
- Buttons / cards: scale to 0.985 over 160ms.

---

## 9. Iconography

Source brand provides no icon set. Use **Lucide** as substitute, loaded from CDN:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="map-pin" style="width:16px;height:16px;stroke-width:1.5"></i>
<script>lucide.createIcons();</script>
```

- Thin line only — 1.25–1.5px stroke. **Never filled, never duotone.**
- 24×24 default, 16×16 inline. Tonal grey (`--fg-muted` / `--fg-subtle`), never colored.
- Square line caps (not rounded).
- No emoji. No unicode glyphs as icons (no ★ ♡ → ✓ — use Lucide's `star`, `heart`, `arrow-right`, `check`).

---

## 10. Voice — copy rules

**Approachable yet polished, conversational but intentional, clear, confident, refined.** Never institutional or sales-driven.

- **Person:** Second-person ("you") to clients. First-person plural ("we") for Guide's approach. Never first-person singular.
- **Tense:** Present, active.
- **Sentence length:** Short and medium. Break long ideas into two sentences.
- **Casing:** Sentence case everywhere except wordmark, eyebrows, primary CTAs.

### Approved phrase
> **Expert Guidance. Local Insight. Lasting Relationships.**

Three pillars: **Credibility · Experience · Lifestyle.**

### Do
| ✓ On-brand | ✗ Off-brand |
| --- | --- |
| "Real estate isn't a transaction. It's a transition." | "Austin's #1 Real Estate Team!" |
| "We read neighborhoods before we read MLS." | "Our award-winning agents deliver unbeatable results." |
| "Start the conversation" | "Get Started Today!" |
| "A 1940 bungalow on a protected oak lot in Bouldin." | "STUNNING South Austin gem, must see!" |

### Don't
- No emoji. Ever.
- No exclamation points in headlines.
- No acronyms the reader doesn't know.
- No "disruption," "reimagining," "leveraging," "empowering," "AI-powered," "next-generation," "unlock."
- No real-estate clichés: "nestled," "boasts," "must-see," "one-of-a-kind," "hidden gem."
- No all-caps sentences outside the wordmark, eyebrows, and signage.

---

## 11. Intake form — domain rules

The form is intentionally light. Information the brokerage can look up themselves is **not** asked of the seller.

**Never ask the seller for:**
- Parcel ID, legal description
- Year built, square footage
- Tax info, school districts
- Anything else on the MLS or in public records

**Do ask for** (what no one else can know):
- Property story, favorite spaces, what guests compliment
- Showing logistics, pets, access, parking, restricted areas
- Marketing preferences, photography exclusions, privacy
- Communication channel, cadence, decision-makers
- Timeline, leaseback, what matters besides price

The form should feel completable in 5–10 minutes. Mostly checkboxes, toggles, short answer. Minimal required typing.

---

## 12. Positive patterns — what to reach for

The "don't" list is long. Following it produces something *compliant* but not necessarily *on-brand*. These are the compositions Guide reaches for. When in doubt, the design should look like these moves, not like a generic minimalist form.

### Editorial hero (welcome step)

Asymmetric two-column. Left column: wordmark top-left, eyebrow, large display-serif headline (with one phrase in italic for rhythm), short intro paragraph, then a thin metadata rhythm strip ("LENGTH · 5–10 min  |  SECTIONS · Five  |  PROGRESS · Auto-saved") in eyebrow type, then the first form question on the same view. Right column: full-bleed editorial photograph (Austin skyline, architectural detail, interior) running edge-to-edge top to bottom. Wordmark top-left, "PRIVATE · 2026" top-right anchor.

The eye should travel: wordmark → eyebrow → headline → intro → metadata → first question, all within one viewport on desktop.

### Section transitions

Between major sections, a full-width band of `--ballroom` (warm stone) holding a short pull quote in display serif, italic, regular weight. Or a `--nero` band with `--beluga` text for a stronger moment. Quotes are unattributed unless the source is a real, approved person — never fabricate an attribution.

### Photography placement

Editorial photography is a primary brand element, not decoration. Use it:
- As a full-bleed column in the hero.
- As a full-bleed section break between major steps.
- Behind the review/submit step as a closing moment.

Photography is **never**: cropped to a small thumbnail, rounded, framed in a card, used as a background-blur effect, or tinted with a brand color.

### Form rhythm

A form is not a wall of inputs. Break it with:
- Section eyebrows that name the section ("SECTION TWO · LOGISTICS").
- A short italic display-serif sub-headline framing the section's purpose.
- Reassurance microcopy in `--ginko`, one line, before the first field.
- Generous whitespace between field groups (`--s-12` to `--s-16`).
- An occasional pull-quote band or photograph between sections.

### Wordmark + chapter badge

The GUIDE wordmark is always paired with the ATX chapter badge — a 1px `--nero` rectangle holding "ATX" in Jost, uppercase, wide-tracked, sized at ~30% of the wordmark's cap height. Right side of the page, mirror with "PRIVATE · 2026" in the same eyebrow style.

### What this looks like in code

These patterns live in `src/sections/welcome.jsx` and `src/shell.jsx`. Read them before writing new compositions, and match their structure when adding new section headers or transitions.

---

## 13. Do not fabricate

Never invent:
- Advisor names, titles, or signatures
- Client testimonials or quotes
- Addresses, neighborhoods you cannot verify, school names
- Statistics ("homes sold," "years in business," "client retention rate")
- Case studies or example listings unless explicitly provided

The intake is **white-label**: no individual advisor is named anywhere in the seller-facing flow. If a real name is required by a piece of content, leave a labeled placeholder (`{{ advisor_name }}`, `{{ team_email }}`) and flag it in your response so the brokerage can fill it in.

Approved unattributed quote (the only one currently sanctioned for use in this product):
> "Real estate isn't a transaction. It's a transition."

Other quotes must be approved by the brokerage before they appear.
