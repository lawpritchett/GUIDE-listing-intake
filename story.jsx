/* SECTION 1 — Property Story + Positioning */

function StorySection({ data, set }) {
  return (
    <div className="section">
      <div className="section-eyebrow">Section One · Property story</div>
      <h2 className="section-title">The parts of your home<br />that the photos can't tell.</h2>
      <p className="section-intro">
        The strongest listings carry a point of view. Anything you share here helps us
        write copy, frame photos, and answer buyer questions with specificity instead of
        boilerplate. Sentences, fragments, or notes-to-self all work.
      </p>

      <Q
        head="01.01"
        prompt="What originally drew you to the home?"
        help="The afternoon light, the staircase, the third bedroom you didn't know you needed — whatever made it yours."
      >
        <Long
          value={data.drewYou}
          onChange={(v) => set('drewYou', v)}
          placeholder="A few sentences is plenty."
          rows={3}
        />
      </Q>

      <Q
        head="01.02"
        prompt="Which spaces or features do you live in most?"
        help="Select all that apply — we'll lean on these when sequencing photography and writing the listing."
      >
        <Chips
          multi
          value={data.favoriteSpaces}
          onChange={(v) => set('favoriteSpaces', v)}
          options={[
            'Kitchen',
            'Primary suite',
            'Back patio / yard',
            'Living room',
            'Dining room',
            'Office / study',
            'Front porch',
            'Pool / spa',
            'Garage / workshop',
            'Guest house / casita',
            'Mudroom',
            'A specific view',
          ]}
        />
      </Q>

      <Q
        head="01.03"
        prompt="What do guests tend to compliment first?"
        help="A useful shortcut for what we should lead with."
        optional
      >
        <Long
          value={data.guestCompliments}
          onChange={(v) => set('guestCompliments', v)}
          placeholder="“The trees,” “the floors,” “the kitchen island,” “the quiet”…"
          rows={2}
        />
      </Q>

      <Q
        head="01.04"
        prompt="Anything uniquely special about the lot, layout, light, or lifestyle?"
        help="Privacy from the street, west-facing patio, walkable to the greenbelt — the things future buyers wouldn't find in records."
      >
        <Long
          value={data.lotSpecial}
          onChange={(v) => set('lotSpecial', v)}
          rows={3}
          placeholder="Whatever is true."
        />
      </Q>

      <Q
        head="01.05"
        prompt="Improvements you've made since moving in"
        help="Major or minor — we'll surface what's relevant. No need for receipts or dates yet."
      >
        <CheckList
          value={data.improvements}
          onChange={(v) => set('improvements', v)}
          options={[
            'Kitchen renovation or refresh',
            'Bathroom renovation or refresh',
            'New roof or major roof work',
            'HVAC, plumbing, or electrical updates',
            'Flooring, paint, or interior finishes',
            'Windows, doors, or siding',
            'Landscaping, hardscape, or fencing',
            'Foundation work',
            'Solar, EV, or other systems',
            'Pool / spa installation or rebuild',
            'Smart-home or A/V infrastructure',
            'ADU, addition, or conversion',
          ]}
        />
        <div style={{ marginTop: 18 }}>
          <Long
            value={data.improvementsNote}
            onChange={(v) => set('improvementsNote', v)}
            placeholder="Anything specific worth noting (year, scope, contractor)?"
            rows={2}
          />
        </div>
      </Q>

      <Q
        head="01.06"
        prompt="Neighborhood places a new owner should know about"
        help="The coffee, the trail, the school carpool line, the Sunday morning routine."
        optional
      >
        <Long
          value={data.neighborhoodSpots}
          onChange={(v) => set('neighborhoodSpots', v)}
          rows={3}
          placeholder="A short list — anything that makes the area feel like itself."
        />
      </Q>

      <Q
        head="01.07"
        prompt="Anything else a future owner ought to know about living here?"
        help="Quirks, rhythms, the way the house feels at six in the morning. The intangible stuff."
        optional
      >
        <Long
          value={data.elseAboutHome}
          onChange={(v) => set('elseAboutHome', v)}
          rows={3}
          placeholder="Optional, and the most-read section by buyers."
        />
      </Q>
    </div>
  );
}

window.StorySection = StorySection;
