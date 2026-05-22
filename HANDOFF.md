# Handoff — moving this project to Claude Code / Cowork

A practical checklist for keeping the design integrity intact when you continue work outside this environment.

---

## What's in this package

| File | Purpose |
| --- | --- |
| `CLAUDE.md` | Project-level instructions. Claude Code reads this automatically on every chat in this directory. |
| `DESIGN_SYSTEM.md` | Condensed brand reference (color, type, spacing, motion, voice). Travels with the code. |
| `HANDOFF.md` | This file. |
| `Listing Intake.html` | Entry point. |
| `assets/tokens.css` | Design system tokens (the source of truth for color/type/spacing). |
| `assets/app.css` | Component styles. |
| `src/` | React JSX, split by responsibility — do not collapse into one file. |

---

## Step 1 — Bring the whole project, not just the HTML

Download / sync the entire folder. The build is split across 11+ files and the architecture depends on it. If only `Listing Intake.html` makes the trip, the next session will treat it as a single-file rebuild and the structure collapses.

A clean way to do it: in this environment, use the project download (or zip the folder via the file tree) and unpack it into a working directory locally. Open that directory in your editor and point Claude Code at it.

---

## Step 2 — Confirm Claude is reading `CLAUDE.md`

In Claude Code, the very first prompt should be a sanity check:

> "Before we start, please read `CLAUDE.md` and `DESIGN_SYSTEM.md` and summarize back to me, in five bullets, the visual and voice rules you'll be following. Don't change any files yet."

If the summary mentions emoji, gradients, accent colors, or rounded pills — stop, point it back at the docs, and ask again. If the summary is faithful (architectural neutrals, no emoji, 1px hairlines, sentence case, Cormorant + Jost, no public-record questions), proceed.

---

## Step 3 — Frame every change request with constraints

Generic prompts produce generic output. Anchor each request to the system.

### Template — for a new section or field
> "Add a [field name] question to the [section] step. Match the existing field components in `src/fields.jsx` — do not invent a new primitive. Use the existing voice (sentence case, advisor tone, no exclamation). Keep it optional and reassuring."

### Template — for a visual change
> "Adjust [X]. Constraint: stay inside the existing token set in `assets/tokens.css`. Do not introduce new colors, new font families, new shadow steps, or radii above 4px. If the change requires a value that doesn't exist as a token, stop and ask."

### Template — for copy
> "Rewrite this microcopy in Guide's voice. Sentence case, second person, short sentences, no exclamation, no real-estate clichés, no corporate buzzwords. Reference the do/don't table in `DESIGN_SYSTEM.md`."

### Template — for a new section
> "Add a new step called [name]. Create `src/sections/[name].jsx`, register the script tag in `Listing Intake.html` between the existing section scripts, and wire it into the step array in `src/app.jsx`. Match the structure of `src/sections/story.jsx`. Do not ask the seller for public-record information."

---

## Step 4 — Use guard prompts when something starts drifting

If output starts feeling generic — drop shadows appearing, color creeping in, copy getting "marketing-y" — interrupt with:

> "Pause. Compare what you just wrote against `DESIGN_SYSTEM.md` sections [color / type / voice]. List anything that violates a rule and revise."

Models respond well to being asked to self-audit against a written spec. They respond poorly to "make it better" or "more on-brand" with no anchor.

---

## Step 5 — Keep tokens canonical

The design tokens in `assets/tokens.css` are the source of truth. Any new feature should use existing tokens. If you genuinely need a new value (rare):

1. Add it to `assets/tokens.css` first, named consistently with the existing scheme.
2. Reference it via `var(--...)` from `app.css` or inline styles.
3. Update `DESIGN_SYSTEM.md` so the next session knows about it.

Hard-coded hex values in component CSS are a code smell — they're the first thing to drift in a hand-off.

---

## Step 6 — Don't let the architecture get collapsed

If Claude proposes "simplifying" by merging all sections into one file, or inlining JSX into the HTML, decline. The split exists because:

- Each section is editable in isolation.
- The `<script type="text/babel">` tags don't share scope — collapsing them changes the loading model and can break the app.
- Section-level diffs stay reviewable.

A good follow-up: *"Keep the file structure as-is. If the change needs a new file, add a new file."*

---

## Quick reference — the five rules that protect 80% of the design

1. **Tokens only.** No new colors, fonts, radii, or shadows.
2. **No emoji, no gradients, no pills, no drop shadows beyond the three defined.**
3. **Display serif regular weight; sentence case; eyebrows in Jost uppercase wide-tracked.**
4. **Don't ask the seller for public-record info.**
5. **Keep the file structure split.**

If a session is following those five, the design will hold.
