/* SECTION 3 — Listing Preparation + Marketing */

function ListingPrepSection({ data, set }) {
  return (
    <div className="section">
      <div className="section-eyebrow">Section Three · Pre-market &amp; marketing</div>
      <h2 className="section-title">Getting the property<br />ready, lightly.</h2>
      <p className="section-intro">
        Guide can coordinate the prep work most sellers find tedious. Toggle on anything you'd
        like a recommendation for — we'll bring vendors we trust and quotes in advance,
        nothing happens without your sign-off.
      </p>

      <Note title="A note from the team">
        We never push pre-market work that doesn't earn it back. If a turn-key home shows beautifully
        as-is, we'll tell you. The list below is what's available, not what's required.
      </Note>

      <Q
        head="03.01"
        prompt="Concierge services you'd like Guide to coordinate"
        help="Select what's of interest — we'll follow up with options, not invoices."
      >
        <CheckList
          value={data.concierge}
          onChange={(v) => set('concierge', v)}
          options={[
            'Staging consultation or full stage',
            'Deep clean before photography',
            'Window washing (interior + exterior)',
            'Landscape refresh / mulch / mow',
            'Tree trimming or canopy work',
            'Painter — touch-ups or full rooms',
            'Handyman punch-list',
            'Carpet cleaning or refinishing',
            'Pressure washing (driveway, patio, siding)',
            'Pool service or one-time clean',
            'Pre-listing inspection',
            'Floor plan / measured drawings',
          ]}
        />
      </Q>

      <Q
        head="03.02"
        prompt="Any planned repairs or updates before going live?"
        help="Things you're already arranging — so we don't double-book vendors or shoot photos too early."
        optional
      >
        <Long
          value={data.plannedRepairs}
          onChange={(v) => set('plannedRepairs', v)}
          rows={3}
          placeholder="What and when, roughly."
        />
      </Q>

      <Q
        head="03.03"
        prompt="Documents you may already have on hand"
        help="No need to gather these now — just check what exists somewhere and we'll request later."
      >
        <CheckList
          value={data.documents}
          onChange={(v) => set('documents', v)}
          options={[
            'Survey or site plan',
            'Floor plans or measured drawings',
            'Architectural renderings',
            'Permits or completion certificates',
            'Warranties (roof, HVAC, appliances, etc.)',
            'Manuals for installed systems',
            'Improvement / renovation invoices',
            'HOA documents',
            'Recent utility bills',
            'Prior inspection or appraisal reports',
            'Existing professional photography',
          ]}
        />
      </Q>

      <Q
        head="03.04"
        prompt="Photography timing"
        help="Light is half the listing. If you have ideas — sunset over the deck, the bluebonnets in March — let us know."
      >
        <Chips
          value={data.photoTime}
          onChange={(v) => set('photoTime', v)}
          options={[
            'Morning light is best here',
            'Afternoon / golden hour is best',
            'Twilight / dusk exterior shots',
            'After a specific date',
            'Guide can recommend — open to anything',
          ]}
        />
        <div style={{ marginTop: 18 }}>
          <Long
            value={data.photoTimeNote}
            onChange={(v) => set('photoTimeNote', v)}
            rows={2}
            placeholder="Specific dates, weather hopes, seasonal moments — optional."
          />
        </div>
      </Q>

      <Q
        head="03.05"
        prompt="Anything you'd prefer to exclude from photography or marketing?"
        help="Personal items, art collections, vehicles, the kids' wing — anything we should plan to avoid."
        optional
      >
        <Long
          value={data.photoExclude}
          onChange={(v) => set('photoExclude', v)}
          rows={2}
          placeholder="A short list — we'll work around it."
        />
      </Q>

      <Q
        head="03.06"
        prompt="Privacy considerations"
        help="We're discreet by default. Toggle anything that should be a hard rule."
      >
        <ToggleCard>
          <Toggle
            title="Address may be withheld from public marketing"
            help="Used for high-profile or sensitive listings."
            value={data.privAddress}
            onChange={(v) => set('privAddress', v)}
          />
          <Toggle
            title="No social-media posting of interiors"
            value={data.privSocial}
            onChange={(v) => set('privSocial', v)}
          />
          <Toggle
            title="No yard sign during listing"
            value={data.privSign}
            onChange={(v) => set('privSign', v)}
          />
          <Toggle
            title="No open houses"
            value={data.privOpen}
            onChange={(v) => set('privOpen', v)}
          />
          <Toggle
            title="Pre-screen all showing requests"
            help="Proof of funds or pre-approval required to schedule."
            value={data.privScreen}
            onChange={(v) => set('privScreen', v)}
          />
        </ToggleCard>
      </Q>
    </div>
  );
}

window.ListingPrepSection = ListingPrepSection;
