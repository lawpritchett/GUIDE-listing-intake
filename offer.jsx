/* SECTION 5 — Offer + Timeline Strategy */

function OfferSection({ data, set }) {
  return (
    <div className="section">
      <div className="section-eyebrow">Section Five · Offer &amp; timeline</div>
      <h2 className="section-title">What a good outcome<br />looks like for you.</h2>
      <p className="section-intro">
        We negotiate price hardest when we know what else matters. None of these answers are
        binding — they help us recognize a strong offer the moment it lands.
      </p>

      <Q
        head="05.01"
        prompt="Ideal closing window"
      >
        <Chips
          value={data.closeWindow}
          onChange={(v) => set('closeWindow', v)}
          options={[
            'As fast as possible',
            'About 30 days',
            'About 45–60 days',
            '60–90 days',
            'A specific date',
            "Flexible — buyer\u2019s preference",
          ]}
        />
        <div style={{ marginTop: 18 }}>
          <Text
            value={data.closeDate}
            onChange={(v) => set('closeDate', v)}
            placeholder="If a specific date matters — moving in, school year, lease end, etc."
          />
        </div>
      </Q>

      <Q
        head="05.02"
        prompt="Do you need to stay in the home after closing?"
        help="A leaseback is common and easy to negotiate when you tell us upfront."
      >
        <Seg
          value={data.leaseback}
          onChange={(v) => set('leaseback', v)}
          options={['No leaseback', 'Maybe — depends', 'Yes, 1–2 weeks', 'Yes, 30 days', 'Yes, 60+ days']}
        />
      </Q>

      <Q
        head="05.03"
        prompt="Besides price, what matters most?"
        help="Pick up to three. We'll weigh competing offers with this in mind."
      >
        <CheckList
          value={data.priorities}
          onChange={(v) => set('priorities', v)}
          options={[
            'Speed of close',
            'A clean, low-drama transaction',
            'Strength of buyer (cash, pre-approval, proof of funds)',
            'Few or no contingencies',
            'Buyer who will love and keep the home',
            'Flexibility on the move-out date',
            'A quiet, off-market or invite-only process',
            'Minimal disruption to current routines',
          ]}
        />
      </Q>

      <Q
        head="05.04"
        prompt="Terms you'd prefer to avoid"
        help="The deal-breakers we should flag the moment they appear."
        optional
      >
        <CheckList
          value={data.avoid}
          onChange={(v) => set('avoid', v)}
          options={[
            'Home-sale contingencies',
            'FHA / VA financing',
            'Long option periods (over 7 days)',
            'Aggressive repair requests',
            'Closing before a specific date',
            'Letters or personal appeals from buyers',
            'Drone footage of the property',
            'Open houses on the first weekend',
          ]}
        />
      </Q>

      <Q
        head="05.05"
        prompt="Anything else we should know going in?"
        help="Family considerations, prior offers, neighbors who've expressed interest, a story we should know."
        optional
      >
        <Long
          value={data.elseOffer}
          onChange={(v) => set('elseOffer', v)}
          rows={3}
          placeholder="Whatever you'd want your advisor to know."
        />
      </Q>
    </div>
  );
}

window.OfferSection = OfferSection;
